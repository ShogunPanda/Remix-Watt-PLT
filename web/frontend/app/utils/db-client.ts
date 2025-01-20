import { setBaseUrl } from "../remix-client/remix-client.mjs";

setBaseUrl(process.env.API_URL ?? "http://127.0.0.1:3042");
