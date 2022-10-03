import { readFileSync } from "fs";
import { dateStringToDate } from "./utis";
import { MatchResult } from "./MatchResults";

type Match = [Date, string, string, number, number, MatchResult, string];

export class CSVFileReader {
  data: string[][] = [];
  filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }

  read(): void {
    this.data = readFileSync(this.filename, {
      encoding: "utf8",
    })
      .split("\n")
      .map((item) => {
        return item.split(",");
      })
      .map((item: string[]): any => {
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
