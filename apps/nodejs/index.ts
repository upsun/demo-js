import express, { Express, Request, Response } from "express";
import figlet from "figlet";
import mysql from "mysql2/promise";

// function openConnection () {
//   return mysql.createConnection({
//     host: process.env.PLATFORM_APP_DIR
//   })
// }

const app: Express = express();
const port = process.env.PLATFORM_APP_DIR ? process.env.PORT : 3001;
const backLink = process.env.PLATFORM_APP_DIR ? "/" : "http://localhost:4321";

app.get("/", (_req: Request, res: Response) => {
  res.redirect('/nodejs')
});

app.get("/nodejs", (_req: Request, res: Response) => {
  const txt = figlet.textSync("NodeJS!");
  res.send(`<h3><a href="${backLink}">Back</a></h3><pre style="word-wrap: break-word; white-space: pre-wrap;">${txt}</pre>`);
});

app.listen(port)
