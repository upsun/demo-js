import figlet from "npm:figlet";

const port = Deno.env.get("PLATFORM_APP_DIR") ? Number(Deno.env.get("PORT")) : 3002;
const backLink = Deno.env.get("PLATFORM_APP_DIR") ? "/" : "http://localhost:4321";

const handler = (_req: Request): Response => {
    const reqPath = new URL(_req.url).pathname;
    const body = figlet.textSync("Deno!");
    if (reqPath === "/deno") {
        return new Response(`<html><h3><a href="${backLink}">Back</a></h3><pre style="word-wrap: break-word; white-space: pre-wrap;">${body}</pre></html>`, {
          status: 200,
          headers: {
            "content-type": "text/html",
          },
        });
    } else {
      return Response.redirect(_req.url + "deno", 302);;
    }

};

Deno.serve({ port }, handler);
