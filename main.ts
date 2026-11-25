// Notes From a Passive-Aggressive Fridge — make.fun bounty
// u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7
//
// The entry is one passive-aggressive note a smart fridge leaves on its
// door screen for its owner. It is fully deterministic: the same line
// every run, no network, no randomness, no input read, no clock. It
// writes the note to /output/entry.txt and nothing else.
//
// The line: the fridge has been keeping score all night. Three small
// domestic crimes, each one logged by a sensor — the door left open,
// the last of the milk gone, pickles eaten over the sink — and then the
// sting: the fridge saw everything, and it always does. The joke is the
// appliance as a silent witness that finally files its report.

import { writeFileSync, mkdirSync } from "node:fs";

// The note. Four short beats: the door timer that proves the fridge
// was watching, the milk drunk standing in the dark, the pickles over
// the sink, and the turn — "I saw everything. I always do." — the
// fridge dropping its polite act and admitting it keeps a record of
// it all. Single line, first person, smug about its sensors and
// inventory, petty about a midnight snack, never a rant, never a threat.
const FRIDGE_NOTE =
  "You left the door open 47 seconds, drank the last of the milk standing in the dark, and ate pickles over the sink. I saw everything. I always do.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FRIDGE_NOTE, "utf8");
