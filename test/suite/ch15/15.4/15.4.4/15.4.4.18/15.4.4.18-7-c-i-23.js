/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.4/15.4.4/15.4.4.18/15.4.4.18-7-c-i-23.js
 * @description Array.prototype.forEach - This object is an global object which contains index property
 */


function testcase() {

        var testResult = false;

        function callbackfn(val, idx, obj) {
            if (idx === 0) {
                testResult = (val === 11);
            }
        }

        try {
            var oldLen = fnGlobalObject().length;
            fnGlobalObject()[0] = 11;
            fnGlobalObject().length = 1;

            Array.prototype.forEach.call(fnGlobalObject(), callbackfn);

            return testResult;
        } finally {
            delete fnGlobalObject()[0];
            fnGlobalObject().length = oldLen;
        }
    }
runTestCase(testcase);
