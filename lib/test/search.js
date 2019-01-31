"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var search_1 = require("../core/search");
function test_search_ts() {
    var json = [
        {
            first: [
                {
                    age: 1,
                    value: 'test1'
                },
                {
                    age: 2,
                    value: 'test2'
                }
            ],
            second: [
                {
                    age: 3,
                    value: 'test3'
                },
                {
                    age: 4,
                    value: 'test4'
                }
            ]
        },
        {
            third: [
                {
                    age: 5,
                    value: 'test5'
                },
                {
                    age: 6,
                    value: [
                        {
                            age: 7,
                            value: 'test7'
                        },
                        {
                            age: 8,
                            value: 'test8'
                        }
                    ]
                }
            ]
        }
    ];
    search_1.deepSearch(json, function (value) { return console.log(value); });
}
exports.test_search_ts = test_search_ts;
