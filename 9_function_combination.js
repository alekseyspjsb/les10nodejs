function sum(a, b) {
  var res = a + b;
  return res;
}

function mult(a, b) {
  var res = a * b;
  return res;
}

var mult_sum_res = sum(mult(2, 2), mult(3,3));
console.log('mult_sum_res 2*2 + 3*3 = ', mult_sum_res);
