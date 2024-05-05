import { zip } from "npm:zip-a-folder@3.1.6";
import { ConfigInterface } from "./config.interface.ts";

console.log("Backup v0.0.2");

// Config
const confFile = "./config.json";

try {
  await Deno.lstat(confFile);
} catch (err) {
  if (!(err instanceof Deno.errors.NotFound)) {
    throw err;
  }
  console.log("config file not found!");
  Deno.exit(1);
}

const configs: ConfigInterface[] = JSON.parse(
  await Deno.readTextFile("./config.json")
);

// Backup!
configs.forEach(async (config) => {
  console.log("Backup of: " + config.name);
  await zip(config.sourcePath, config.destination);
});

console.log("Done!");
Deno.exit(0);
