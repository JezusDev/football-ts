import { CSVFileReader, MatchData } from "./CSVFileReader";
import { MatchResult } from "./MatchResults";
import { dateStringToDate } from "./utis";

export class MatchReader extends CSVFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0], "/"),
      row[1],
      row[2],
      +row[3],
      +row[4],
      row[5] as MatchResult,
      row[6],
    ];
  }
}
