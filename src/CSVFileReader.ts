import { readFileSync } from "fs";

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
      });
  }
}
