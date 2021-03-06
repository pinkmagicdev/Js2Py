// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.22-1-5
description: Array.prototype.reduceRight applied to number primitive
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return obj instanceof Number;
        }

        try {
            Number.prototype[0] = 1;
            Number.prototype.length = 1;
            return Array.prototype.reduceRight.call(2.5, callbackfn, 1) && accessed;
        } finally {
            delete Number.prototype[0];
            delete Number.prototype.length;
        }
    }
runTestCase(testcase);
