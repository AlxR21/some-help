import { log } from "console";
import "dotenv/config";
import { corsair } from "./corsair"

// log("Hello World");
const main = async () => {
//     const res = await corsair.withTenant('alxr').gmail.api.threads.list({ maxResults: 10 });

//     log(res);
//     console.log({
//   clientId: process.env.AUTH_GOOGLE_ID,
//   clientSecret: process.env.AUTH_GOOGLE_SECRET?.slice(0, 5),
// });
const res = await fetch(
  "https://accounts.google.com/.well-known/openid-configuration"
);

console.log(res.status);
}

main();