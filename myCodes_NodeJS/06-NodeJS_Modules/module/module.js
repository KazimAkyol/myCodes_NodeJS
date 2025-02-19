"use strict";

console.log("modul dosyasi calisti");

//! tek fonksiyonu disari aktarma
// const testFunc = function () {
//   console.log("this is a function");
// };

// module.exports = testFunc;

/* ----------------------------------------------------------------------------- *

//! birden fazla deger ve fonksiyon gönderme

const yil = 2025;

const testFunc1 = function () {
  console.log("testFunc1 running");
};
const testFunc2 = function () {
  console.log("testFunc2 running");
};
module.exports = {
  //* obje icinde isim degistirme
  test1: testFunc1,
  test2: testFunc2,
};

/* ----------------------------------------------------------------------------- */

//! tek fonksiyon icinden cagirma:

const singleFunc = function () {
  const yil = 2025;
  console.log(yil);

  const testFunc1 = function () {
    console.log("testFunc1 running");
  };

  const testFunc2 = function () {
    console.log("testFunc2 running");
  };

  return { testFunc1, testFunc2 };
};

module.exports = singleFunc;

/* ----------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------- */
