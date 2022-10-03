"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utis_1 = require("./utis");
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((item) => {
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
exports.MatchReader = MatchReader;
