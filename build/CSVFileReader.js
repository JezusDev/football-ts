"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVFileReader = void 0;
const fs_1 = require("fs");
const utis_1 = require("./utis");
class CSVFileReader {
    constructor(filename) {
        this.data = [];
        this.filename = filename;
    }
    read() {
        this.data = (0, fs_1.readFileSync)(this.filename, {
            encoding: "utf8",
        })
            .split("\n")
            .map((item) => {
            return item.split(",");
        })
            .map((item) => {
            return [
                (0, utis_1.dateStringToDate)(item[0], "/"),
                item[1],
                item[2],
                +item[3],
                +item[4],
                item[5],
                item[6],
            ];
        });
    }
}
exports.CSVFileReader = CSVFileReader;
