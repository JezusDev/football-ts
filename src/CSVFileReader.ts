import { readFileSync } from "fs";
import { MatchResult } from "./MatchResults";

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

export abstract class CSVFileReader<IData> {
  data: IData[] = [];
  filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }
  abstract mapRow(row: string[]): IData;

  read(): void {
    this.data = readFileSync(this.filename, {
      encoding: "utf8",
    })
      .split("\n")
      .map((item) => {
        return item.split(",");
      })
      .map(this.mapRow);
  }
}
