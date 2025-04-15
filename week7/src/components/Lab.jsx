//import React from "react";
import {useLoaderData, redirect, Form, Outlet} from "react-router-dom";
import {getTodos, addTodo} from "../data/index.js";

export async function actionLab({request}) {
  const formData = await request.formData();
  if(formData.get("todo") && formData.get("todo").trim() !== "") await addTodo(formData.get("todo"));
  return redirect("/lab");
}

export function loaderLab() {
  if(Math.random() < 0.5) throw new Error("Test error");
  return getTodos();
}

export default function Lab() {
  return(
    <div>
      <h1>Lab Page</h1>
      <ul>
        {useLoaderData().map((todo, index) => (<li key={index}>{todo}</li>))}
      </ul>

      <Form method="post" key={Date.now()}>
        <input type="text" name="todo" placeholder="Enter a new todo!" required/> {" "} 
        <button type="submit">ADD</button>
      </Form>

      <Outlet />
    </div>
  );
}