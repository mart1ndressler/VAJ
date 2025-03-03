import axios from "axios";
import fs from "fs";
// How to use axios - check the presentation https://github.com/vsb-vaj/#presentations

// use this API
const apiUrl = "https://swapi.profiq.com/api/planets";
// TASKS:
// 1. create function downloadPlanets, which will download the data and return data.results
// 2. create function parsePlanets for extraction names of planets and return sorted array of planet names
// 3. create function savePlanets to save array of strings into file (as param) named planets.txt (you can write file with https://nodejs.org/api/fs.html#fswritefilesyncfile-data-options)
// Example of write File sync in presentation https://github.com/vsb-vaj/#presentations
// You can't pass array to write file, so we need to transform it to string, like this planetsArray.toString()
// The output file should look like this Alderaan,Bespin,Coruscant,Dagobah,Endor,Hoth,Kamino,Naboo,Tatooine,Yavin IV

// 4. Use all these functions, call them and create new file with names of planets
// So, we will call downloadPlanets -> result send to parsePlanets -> result send to savePlanets

// function with no param, returns data.results from JSON
let downloadPlanets = async () => {
  const response = await axios.get(apiUrl);
  return response.data.results;
};

// function with one param - array of planets from donwloadPlanets
// return sorted array of planet names
let parsePlanets = (planetsArray) => planetsArray.map((p) => p.name).sort();

// function with 2 params - fileName and array of planets
let savePlanets = (fileName, planetsArray) => {
  fs.writeFileSync(fileName, planetsArray.toString(), "utf8");
  console.log(`Planets saved to ${fileName}`);
};

const main = async () => {
  const planets = await downloadPlanets();
  savePlanets("planets.txt", parsePlanets(planets));
};

main();
