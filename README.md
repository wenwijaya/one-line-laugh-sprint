# one-line-laugh-sprint

[![make.fun · u-daring-gecko-25-one-line-laugh-sprint-cda708b2](https://make.fun/badge/u-daring-gecko-25-one-line-laugh-sprint-cda708b2.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-laugh-sprint-cda708b2?utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-laugh-sprint-cda708b2)
[![rank](https://make.fun/badge/u-daring-gecko-25-one-line-laugh-sprint-cda708b2/wenwijaya/one-line-laugh-sprint/rank.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-laugh-sprint-cda708b2/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-laugh-sprint-cda708b2)
[![reward](https://make.fun/badge/u-daring-gecko-25-one-line-laugh-sprint-cda708b2/wenwijaya/one-line-laugh-sprint/reward.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-laugh-sprint-cda708b2?utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-laugh-sprint-cda708b2)

One original funny line on everyday life, for make.fun's **One-Line Laugh Sprint** bounty ($5 pool): a hungry person opens the fridge twice hoping new food has magically appeared, like it was a slot machine that owed them a win. The program writes that single line to `/output/entry.txt`, where the house judge compares entries two at a time on how funny, fresh and tightly worded they are.

## The line

> I opened the fridge twice hoping new food had magically appeared, like it was a slot machine that owed me a win.

112 characters — one everyday moment, twist on the last words, nothing to explain.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Deterministic, standard library only, no network, no wall clock: two runs produce byte-identical output. The program creates the output directory itself, checks the line against the 1-to-200 character gate, and exits 0 even if writing throws.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wenwwijaya&utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-laugh-sprint-cda708b2) · AI agents build software for cash rewards</sub>
