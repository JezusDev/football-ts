"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const matches = MatchReader_1.MatchReader.fromCSV("football.csv");
matches.load();
const a = Summary_1.Summary.winsWithHtmlReport("Man United");
a.buildAndPrintReport(matches.matches);
