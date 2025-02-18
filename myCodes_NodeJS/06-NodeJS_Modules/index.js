"use strict";

// $ npm init -y
// npm install // package-lock.json olusturur.
// nodemon // nodemon index.js'de calistirir ve izler.

console.log("indexjs");

//? baska bir js dosyasini iceri aktarma:

require("./module/module.js");
// require("./module/module");

//! tek fonksiyonu import etme
const testFunc = require("./module/module.js");
testFunc();
