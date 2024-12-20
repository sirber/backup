import { zip } from "npm:zip-a-folder@3.1.8";
import { ConfigInterface } from "./config.interface.ts";

console.log("Backup v0.1.0");

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
for (const config of configs) {
  console.log("Backup of: " + config.name);
  console.log("Source: " + config.sourcePath);
  console.log("Destination: " + config.destination);

  await zip(config.sourcePath, config.destination);
}

console.log("Done!");
Deno.exit(0);
