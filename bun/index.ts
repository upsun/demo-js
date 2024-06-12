import {serve} from 'bun';
import figlet from 'figlet';

serve({
  fetch(req: Request) {
    port: process.env.PLATFORM_APP_DIR ? process.env.PORT : 3000;
    const url = new URL(req.url);
    const body = figlet.textSync("Bun!");
    if (url.pathname === "/bun") return new Response(body);
    return Response.redirect("/bun");
  }
})
