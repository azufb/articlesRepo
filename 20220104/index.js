let sampleNum = '12345';
console.log(typeof sampleNum);

let samplePoint = '123.5';
console.log(typeof samplePoint);

let sampleStr = 'あいうえお';
console.log(typeof sampleStr);

// Number()メソッド
console.log(Number(sampleNum));
console.log(typeof Number(sampleNum));

console.log(Number(samplePoint));
console.log(typeof Number(samplePoint));

console.log(Number(sampleStr));
console.log(typeof Number(sampleStr));

// parseInt()メソッド
console.log(parseInt(sampleNum));
console.log(typeof parseInt(sampleNum));

console.log(parseInt(samplePoint));
console.log(typeof parseInt(samplePoint));

console.log(parseInt(sampleStr));
console.log(typeof parseInt(sampleStr));

// parseFloat()メソッド
console.log(parseFloat(sampleNum));
console.log(typeof parseFloat(sampleNum));

console.log(parseFloat(samplePoint));
console.log(typeof parseFloat(samplePoint));

console.log(parseFloat(sampleStr));
console.log(typeof parseFloat(sampleStr));

let num = 123.5;
let minusNum = -123.5;
// Math.floor()メソッド
console.log(Math.floor(num));
console.log(Math.floor(minusNum));

// Math.trunc()メソッド
console.log(Math.trunc(num));
console.log(Math.trunc(minusNum));

// Math.sign()メソッド
console.log(Math.sign(num));
console.log(Math.sign(minusNum));
console.log(Math.sign(0));
