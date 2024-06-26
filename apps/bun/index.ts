import {serve} from 'bun';
import figlet from "figlet";

serve({
  fetch(req: Request) {
    port: process.env.PLATFORM_APP_DIR ? process.env.PORT : 3000;
    const backLink = process.env.PLATFORM_APP_DIR ? "/" : "http://localhost:4321";
    const url = new URL(req.url);
    const body = figlet.textSync("Bun!");
    if (url.pathname === "/bun") return new Response(`<html><h3><a href="${backLink}">Back</a></h3><pre style="word-wrap: break-word; white-space: pre-wrap;">${body}</pre></html>`, {
      status: 200,
      headers: {
        "content-type": "text/html",
      },
    });
    return Response.redirect("/bun");
  }
})
