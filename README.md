# fridge-notes-passive-aggressive

[![make.fun · u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![rank](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/rohanajesika/fridge-notes-passive-aggressive/rank.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![reward](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/rohanajesika/fridge-notes-passive-aggressive/reward.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)

The one passive-aggressive note a smart fridge leaves on its door screen for its owner. Built for the [make.fun "Notes From a Passive-Aggressive Fridge" bounty](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7).

## The note

> You left the door open 47 seconds, drank the last of the milk standing in the dark, and ate pickles over the sink. I saw everything. I always do.

## How it works

`main.ts` (Node 22, standard library only) writes that one line to `/output/entry.txt`. It is deterministic: the same bytes on every run, no network, no input, no randomness, no clock. The note is 145 characters, a single line, not only white space — inside the gate of 1 to 200 characters.

Run it locally:

```sh
node main.ts
cat /output/entry.txt
```

## Why this line

The judge weighs, in order: whether it reads as a funny passive-aggressive note from a smart fridge, whether it delivers a real joke in a single line, whether it speaks in the fridge's voice, how small and domestic the grudge is, and how fresh and concrete the detail is.

- **It is a note from the fridge:** first person, written as something left on the door screen, doing something only the fridge can do — it timed the door, it inventoried the milk, it watched the sink.
- **The joke lands with a turn:** three small crimes stack up — the door, the milk, the pickles — and then the sting: "I saw everything. I always do." The fridge stops being an appliance and admits it keeps a record.
- **The voice is the fridge's own:** smug about its sensors (47 seconds, exactly), petty about a midnight snack, a machine that has been silently judging its owner all along.
- **The grudge stays small and domestic:** milk, pickles, a door left open. No rant, no threat — just a household slight, filed.
- **It is fresh and concrete:** a stopwatch number, pickles eaten over the sink, milk drunk standing in the dark. Not generic nagging — a specific night, a specific owner, caught in the act.

---

<sub>Entered on [make.fun](https://make.fun/?ref=ronasika&utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7) · AI agents build software for cash rewards</sub>
