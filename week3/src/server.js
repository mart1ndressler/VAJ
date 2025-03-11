import express from "express";
import fs from "fs/promises";
import fetch from 'node-fetch';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// this is the simplest example - if you go to the localhost:3000, if show you "Hello world"
app.get("/", (req, res) => {
  res.send(req.headers);
});

// TASKS FOR SIMPLE ROUTING

//  TASK 0. GET request /testing-json and return JSON - simple object with your name, lastname, home
// return something like { firstname: "Obiwan", lastname: "Kenobi", home: "Tattoine"}
// Hint: For JSON response see Response methods https://expressjs.com/en/guide/routing.html - .json()
app.get("/testing-json", (req, res) => {res.json({firstname: "Obiwan", lastname: "Kenobi", home: "Tattoine"});});

// TASK 1. GET request /vehicles and return array of simple objects of vehicles in JSON format.
// USE data/vehicles.json file. You have to do transformation of the loaded json file. Remove the extra fields!
// return [{id: 1, name: "Sand Crawler"}, {id: 2, name: "T-16 skyhopper"}, ...]
// Hint: See presentation 3, slide ~15? how to use async await and read file ...
app.get("/vehicles", async (req, res) => {
  const data = JSON.parse(await fs.readFile("data/vehicles.json"));
  res.json(data.map(({id, name}) => ({id, name})));
});

// TASK 2. GET request /vehicles/id-of-vehicle and return whole object for specific vehicle
// request /vehicles/1 return object for Sand Crawler
// if you call for /vehicles/100 (this ID is not in vehicles.json), return { error: "We don't have vehicle with that ID"}
// only one function here! Not for each vehicle!
// Hint: See route parameters in https://expressjs.com/en/guide/routing.html
app.get("/vehicles/:id", async (req, res) => {
  const data = JSON.parse(await fs.readFile("data/vehicles.json"));
  res.json(data.find(v => v.id == req.params.id) || { error: "We don't have vehicle with that ID" });
});

// TASK 3. POST request /secret-code
// If you send POST params password: {password: "2021-9-29-emperor-is-awesome"}   //(today in format YYYY-MM-DD-emperor-is-awesome)
// page should return text: "Your access is granted!"
// if password is wrong, it should return "Please send valid password or we are forced to destroy your ship."
// Password is changed every day - for tomorrow it is 2021-9-30-emperor-is-awesome
// Hint: For sending POST request, use Postman
// Hint: Add code console.log(req.body) send request, see what it returns
// Hint: Current date - many ways https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
app.post("/secret-code", (req, res) => {
  console.log("Body:", req.body);
  console.log("Password:", req.body.password);

  const today = new Date().toISOString().split("T")[0] + "-emperor-is-awesome";
  res.send(today === req.body.password ? "Your access is granted!" : "Please send valid password or we are forced to destroy your ship.");
});

// TASK 4. GET request /search-vehicles with query parameters
// If you send GET request to /search-vehicles?cargoCapacityFrom=1000&cargoCapacityTo=2000
// it should return all vehicles from vehicles.json with cargo_capacity between 1000 and 2000
// Hint: be careful of items that have cargo_capacity as "none"
app.get("/search-vehicles", async (req, res) => {
  const from = Number(req.query.cargoCapacityFrom);
  const to = Number(req.query.cargoCapacityTo);  
  const data = JSON.parse(await fs.readFile("data/vehicles.json"));

  res.json(data.filter(v => {
    const c = Number(v.cargo_capacity);
    return !isNaN(c) && c >= from && c <= to;
  }));
});

// BONUS TASK 1 - 0.5 points 
// Implement express middlware https://expressjs.com/en/guide/using-middleware.html
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization
// This middleware will check "Authorization" header of each request.
// The authheader should be in this format `Basic <base64-vsb-login>` for example `Basic VkVDMDAyMg==`.
// The middleware should print the decoded base64 into console (how to decode https://stackoverflow.com/a/6182519)
app.use((req, res, next) => {
  const authHeader = req.headers.authorization;
  if(!authHeader || !authHeader.startsWith("Basic ")) return res.status(401).send("Unauthorized");

  const auth = authHeader.split(" ")[1];
  console.log("Decoded Authorization:", Buffer.from(auth, "base64").toString("utf-8"));
  next();
});

// BONUS TASK 2 - 0.5 points
// Implement a new end point /films which will return all films from films.json
// Add optional query parameter expand, which can accept string: characters , vehicles, starships, species, planets
// When the expand is present, instead of a link in the array of characters, there should be the object of the character instead
// The same goes for the rest of the types
app.get("/films", async (req, res) => {
  const {results: films} = JSON.parse(await fs.readFile("data/films.json"));
  const expand = req.query.expand ? req.query.expand.split(",") : [];
  const fetchJson = url => fetch(url).then(res => res.ok ? res.json() : ({error: res.status, url}));

  const expandNested = async (obj, nestedTypes) => {
    for(const type of nestedTypes) if(obj[type]) obj[type] = await Promise.all(obj[type].map(fetchJson));
    return obj;
  };

  const transformed = await Promise.all(films.map(async film => {
    const updated = {...film};
    for(const type of expand)
    {
      if(updated[type]) updated[type] = await Promise.all(updated[type].map(async url => {const fetched = await fetchJson(url); return expandNested(fetched, expand);}));
    }
    return updated;
  }));
  res.json(transformed);
});

export {app};