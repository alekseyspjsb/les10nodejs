var math = require('math');

var a = 1;
var b = -2;
var c = 1;
var x

if (a === 0) { 
	x = (-c/b)
	console.log('X', x);
} else {
var discr = math.sqrt(b*b-4*a*c);
var x1 = (-b + discr)/2*a;
var x2 = (-b - discr)/2*a;

console.log('X1', x1);
console.log('X2', x2);
}