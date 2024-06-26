import figlet from "npm:figlet";

const port = Deno.env.get("PLATFORM_APP_DIR") ? Number(Deno.env.get("PORT")) : 3002;

const handler = (_req: Request): Response => {
    const reqPath = new URL(_req.url).pathname;
    const body = figlet.textSync("Deno!");
    if (reqPath === "/deno") {
        return new Response(body);
    } else {
      return Response.redirect(_req.url + "deno", 302);;
    }

};

Deno.serve({ port }, handler);
