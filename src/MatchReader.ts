import { CSVFileReader } from "./CSVFileReader";
import { MatchResult } from "./MatchResults";
import { dateStringToDate } from "./utis";

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCSV(filename: string): MatchReader {
    return new MatchReader(new CSVFileReader(filename));
  }

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((item: string[]): MatchData => {
      return [
        dateStringToDate(item[0], "/"),
        item[1],
        item[2],
        +item[3],
        +item[4],
        item[5] as MatchResult,
        item[6],
      ];
    });
  }
}
