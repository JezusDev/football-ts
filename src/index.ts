import { CSVFileReader } from "./CSVFileReader";
import { MatchResult } from "./MatchResults";
const matches = new CSVFileReader("football.csv");
matches.read();
console.log(matches.data);

let manUnitedWins = 0;

for (let match of matches.data) {
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
