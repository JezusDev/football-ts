import { WinsAnalysis } from "./Analyzers/WinsAnalysis";
import { MatchData } from "./MatchReader";
import { HTMLReport } from "./Reporters/HTMLReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HTMLReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(data: MatchData[]) {
    const output = this.analyzer.run(data);
    this.outputTarget.print(output);
  }
}
