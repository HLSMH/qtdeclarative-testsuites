/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.4/15.4.4/15.4.4.19/15.4.4.19-4-12.js
 * @description Array.prototype.map - 'callbackfn' is a function
 */


function testcase() {

        function callbackfn(val, idx, obj) {
            return val > 10;
        }

        var testResult = [11, 9].map(callbackfn);
        return testResult.length === 2 && testResult[0] === true && testResult[1] === false;
    }
runTestCase(testcase);
