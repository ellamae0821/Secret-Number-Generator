'use strict';
module.exports = function() {
  function randomNum (){
    return ((Math.random() * 1000000 ) + 1); // RANDOM NUMBERS HAVE BEEN GENERATED
  };
/*STORE RANDOM NUMBERS GENERATED IN A VARIABLE, SO ONCE IT CALLS IT, IT GIVES THE SAME SET OF NUMBERS.*/
  var numbers = randomNum();

  function genNums() {
    return numbers;
  }
  return genNums;
};


