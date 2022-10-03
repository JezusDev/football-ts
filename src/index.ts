import { CSVFileReader } from "./CSVFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResults";

// Create an obj that implements the DataReader interface
const csvFileReader = new CSVFileReader("football.csv");

// Create an obj of MatchReader and pass DataReader implementation
const matches = new MatchReader(csvFileReader);
matches.load();

let manUnitedWins = 0;

for (let match of matches.matches) {
  if (
    (match[1] === "Man United" && match[5] === MatchResult.HomeWin) ||
    (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
  ) {
    manUnitedWins++;
  }
}
console.log(`
  Man United won ${manUnitedWins} times.
`);
