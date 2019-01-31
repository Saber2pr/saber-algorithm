"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: saber2pr
 * @Date: 2019-01-31 20:26:02
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-01-31 20:34:14
 */
exports.deepSearch = function (array, callback) {
    return array.forEach(function (obj) {
        return Object.keys(obj).forEach(function (key) {
            return Array.isArray(obj[key])
                ? exports.deepSearch(obj[key], callback)
                : callback(obj[key]);
        });
    });
};
