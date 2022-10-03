"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
function dateStringToDate(dateString, separator) {
    // 05/10/2018
    const [year, month, day] = dateString
        .split(separator)
        .reverse()
        .map((item) => {
        return parseInt(item);
    });
    return new Date(year, month - 1, day);
}
exports.dateStringToDate = dateStringToDate;
