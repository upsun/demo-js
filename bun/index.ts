import figlet from "figlet";

const config = require("platformsh-config").config();

Bun.serve({
  port: config.isValidPlatform() ? config.port : 3000,
  fetch(_req: Request): Response {
    const url = new URL(_req.url);
    const body = figlet.textSync("Bun!");
    if (url.pathname === "/bun") return new Response(body);
  },
});
