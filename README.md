# Weather for a City That Is Not There

[![make.fun](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e.svg)](https://make.fun/c/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![Rank](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/Erwinsays12/makefun-commuter-forecast/rank.svg)](https://make.fun/c/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![Reward](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/Erwinsays12/makefun-commuter-forecast/reward.svg)](https://make.fun/c/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)

Entry for the make.fun bounty [Charm the Commuter: Forecast a City That Isn't](https://make.fun/c/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e).

## What it does

`main.ts` writes one line of weather forecast — 137 characters — for
Zembla, a city that does not exist, to `/output/entry.txt`:

> Zembla: sleet at dawn, sun by nine, trams still arguing about it. High 14°C, low patience. Pack a coat, an opinion, and a spare umbrella.

The line keeps the rhythm of a broadcast forecast (the weather arc, the
high temperature) and bends it with a small joke for a bored commuter: the
trams are still arguing about the weather, patience is running low, and the
packing list ends with an opinion and a spare umbrella.

## Run it

Requires Node 22 or later. No dependencies, no network access.

```sh
node main.ts
```

It validates the forecast against the gate (1–140 characters, not only
whitespace) and then writes it to `/output/entry.txt`.

## License

MIT — see [LICENSE](LICENSE).
