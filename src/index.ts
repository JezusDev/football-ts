import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matches = MatchReader.fromCSV("football.csv");
matches.load();

const a = Summary.winsWithHtmlReport("Man United");
a.buildAndPrintReport(matches.matches);
