// Charm the Commuter: Forecast a City That Isn't
// make.fun competition: u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e
//
// This program writes one line of weather forecast, at most 140 characters,
// for a city that does not exist, to /output/entry.txt.
//
// The forecast: Zembla, a city where the weather cannot make up its mind
// and neither can its trams. Broadcast register on the surface, a small
// joke underneath: the temperature is given, and so is the commuter's
// patience. The closing triple — coat, opinion, spare umbrella — is the
// part meant to make a bored commuter at a rainy bus stop smile.

import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 140;
const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

// One line, 137 characters: invented city named, weather the whole point,
// a concrete detail of the city's life (its arguing trams), and a turn of
// phrase at the end. Written as a single literal so the graded output is
// byte-for-byte identical on every run.
const FORECAST =
  "Zembla: sleet at dawn, sun by nine, trams still arguing about it. " +
  "High 14\u00b0C, low patience. Pack a coat, an opinion, and a spare umbrella.";

function main(): void {
  // The gate requires 1 to 140 characters of UTF-8 text, not only
  // whitespace. Refuse to write anything that would fail it.
  const chars = [...FORECAST].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(
      `Forecast is ${chars} characters; the gate allows 1 to ${MAX_CHARS}.`,
    );
  }
  if (FORECAST.trim().length === 0) {
    throw new Error("Forecast must not be only whitespace.");
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, FORECAST, "utf8");
  console.log(`Wrote ${chars} characters to ${OUTPUT_PATH}`);
}

main();
