"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CSVFileReader_1 = require("./CSVFileReader");
const MatchReader_1 = require("./MatchReader");
const MatchResults_1 = require("./MatchResults");
// Create an obj that implements the DataReader interface
const csvFileReader = new CSVFileReader_1.CSVFileReader("football.csv");
// Create an obj of MatchReader and pass DataReader implementation
const matches = new MatchReader_1.MatchReader(csvFileReader);
matches.load();
let manUnitedWins = 0;
for (let match of matches.matches) {
    if ((match[1] === "Man United" && match[5] === MatchResults_1.MatchResult.HomeWin) ||
        (match[2] === "Man United" && match[5] === MatchResults_1.MatchResult.AwayWin)) {
        manUnitedWins++;
    }
}
console.log(`
  Man United won ${manUnitedWins} times.
`);
