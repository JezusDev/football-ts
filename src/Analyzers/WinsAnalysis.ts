import { MatchData } from "../MatchReader";
import { MatchResult } from "../MatchResults";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(data: MatchData[]): string {
    let wins = 0;

    for (let match of data) {
      if (
        (match[1] === this.team && match[5] === MatchResult.HomeWin) ||
        (match[2] === this.team && match[5] === MatchResult.AwayWin)
      ) {
        wins++;
      }
    }

    return `Team ${this.team} wins ${wins} times`;
  }
}
