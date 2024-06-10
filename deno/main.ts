import figlet from "npm:figlet";
import pshConfig from "npm:platformsh-config";


const config = pshConfig.config();
const port = config.isValidPlatform() ? config.port : 8080;

const handler = (_req: Request): Response => {
    const body = figlet.textSync("Deno!");
    return new Response(body);
};


Deno.serve({ port }, handler);
