import express, { Express, Request, Response } from "express";
import figlet from "figlet";


const config = require("platformsh-config").config();
const app: Express = express();
const port = config.isValidPlatform() ? config.port : 3000;

app.get("/", (_req: Request, res: Response) => {
  const txt = figlet.textSync("NodeJS!");
  res.send(`<pre style="word-wrap: break-word; white-space: pre-wrap;">${txt}</pre>`);
});

app.listen(port)
