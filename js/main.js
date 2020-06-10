var str = 'web-developer';
var number = 123;
var bool = true;
var undef;
var nuul = null;
var obj = {
    prop: "yo",
    fu:function () {
    }
},
    regExp = /baba/g,
    func = function () {},
    arr = [1,2,3];
    arr[2] = 1995;
    obj.prop ="kis"
    // console.log(str.toUpperCase());
    // console.log(arr);
    // console.log(typeof regExp);
    // console.log(typeof fucn);
    // console.log(typeof arr);
/*Обертки*/
var num = Number(1995);
num.prop = 'stroka';

var numObj = new Number(1995);
numObj.prop = 'strokas';


console.log(typeof num.toString())
console.log(num);

console.log(typeof numObj.toString());
console.log(numObj);
// console.log(String('123456'));