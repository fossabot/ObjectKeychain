"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ObjectKeychain(object, nodes) {
    var tester = function (pattern) { return eval('object.' + pattern); };
    var pattern = nodes[0];
    if (!tester(pattern))
        return false;
    for (var i = 1; i < nodes.length; i++) {
        var newPattern = pattern + "." + nodes[i];
        if (tester(newPattern)) {
            pattern = newPattern;
        }
        else {
            return false;
        }
    }
    return true;
}
exports.default = ObjectKeychain;
