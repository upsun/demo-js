import express, { Express, Request, Response } from "express";
import figlet from "figlet";

const app: Express = express();
const port = process.env.PLATFORM_APP_DIR ? process.env.PORT : 3001;

app.get("/", (_req: Request, res: Response) => {
  res.redirect('/nodejs')
});

app.get("/nodejs", (_req: Request, res: Response) => {
  const txt = figlet.textSync("NodeJS!");
  res.send(`<pre style="word-wrap: break-word; white-space: pre-wrap;">${txt}</pre>`);
});

app.listen(port)
