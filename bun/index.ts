import figlet from "figlet";

const config = require("platformsh-config").config();

Bun.serve({
  port: config.isValidPlatform() ? config.port : 3000,
  fetch(_req: Request): Response {
    const body = figlet.textSync("Bun!");
    return new Response(body);
  },
});
