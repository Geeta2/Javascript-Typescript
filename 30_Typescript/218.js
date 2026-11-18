"use strict";
function infiniteLoop() {
    while (true) { }
}
// never - function never returns (throws or infinite loop)
function throwError(message) {
    throw new Error(message);
}
