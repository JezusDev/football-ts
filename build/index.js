"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResults_1 = require("./MatchResults");
const matches = new MatchReader_1.MatchReader("football.csv");
matches.read();
let manUnitedWins = 0;
for (let match of matches.data) {
    if ((match[1] === "Man United" && match[5] === MatchResults_1.MatchResult.HomeWin) ||
        (match[2] === "Man United" && match[5] === MatchResults_1.MatchResult.AwayWin)) {
        manUnitedWins++;
    }
}
console.log(`
  Man United won ${manUnitedWins} times.
`);
console.log(matches.data[0]);
