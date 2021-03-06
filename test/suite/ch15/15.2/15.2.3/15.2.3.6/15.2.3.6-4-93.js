/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-93.js
 * @description Object.defineProperty will throw TypeError when name.configurable = false, name.writable = false, desc.value and name.value are two booleans with different values (8.12.9 step 10.a.ii.1)
 */


function testcase() {

        var obj = {};

        Object.defineProperty(obj, "foo", {
            value: false,
            writable: false,
            configurable: false 
        });

        try {
            Object.defineProperty(obj, "foo", { value: true });
            return false;
        } catch (e) {
            return e instanceof TypeError && dataPropertyAttributesAreCorrect(obj, "foo", false, false, false, false);
        }
    }
runTestCase(testcase);
