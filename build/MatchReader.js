"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CSVFileReader_1 = require("./CSVFileReader");
const utis_1 = require("./utis");
class MatchReader extends CSVFileReader_1.CSVFileReader {
    mapRow(row) {
        return [
            (0, utis_1.dateStringToDate)(row[0], "/"),
            row[1],
            row[2],
            +row[3],
            +row[4],
            row[5],
            row[6],
        ];
    }
}
exports.MatchReader = MatchReader;
