"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVFileReader = void 0;
const fs_1 = require("fs");
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
            .map(this.mapRow);
    }
}
exports.CSVFileReader = CSVFileReader;
