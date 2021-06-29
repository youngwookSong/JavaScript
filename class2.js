//es6 -> ecma script
//그냥 자바 스크립트 이름!

//let / const
//var와 다르게 호이스팅이 안됨

//var은 중복선언이 가능
var x = 1;
var x = 100;
console.log(x);

//const는 중복선언이 안됨
const y = 1;
//const y = 100;
console.log(y);

var var1 = 1;

if(true) {
    var var2 = 2;
    if(true) {
        var var3 = 3;
    }
}

//var는 함수 내부에서는 지역변수로 작용
function wook() {
    var var4 = 4;
    console.log("var4");

    function wook2() {
        var var5 = 5;
    }
}

wook();

console.log(var1);
console.log(var2);
console.log(var3);
//console.log(var4);
//console.log(var5);

var x = 1;

if (true) {
    var x = 10;
}

console.log(x);

let xx = 1;

if (true) {
    let xx = 10;
}

console.log(x);

//let
let oo = 1;

{
    let oo = 1;
    let oo2 = 2;
}

console.log(oo);
//console.log(oo2); -> oo2는 지역변수이므로 에러!

//화살표 함수
const arrow = (x,y) => {
    console.log(x+y);
}

function arrow2 (x,y) {
    console.log(x+y);
}

const wook4 = () => {
    let x = 1;
    let y = 3;

    let z = x+y;
    console.log(z);
}

//생성자 함수
function circle(radius) {
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };
    console.log(this);
}

const circle1 = new circle(5);

//배열 고차 함수(forEach)
const number = [1,2,3];
const pows = [];

/*for (let i = 0; i< number.length; i++) {
    pows.push(number[i] ** 2);
}
console.log(pows); */

number.forEach(item => pows.push(item ** 2)); //배열의 각 요소들을 한번씩 도는 메소드
console.log(pows);

//map -> forEach와 똑같지만 결과값을 반환해줌
const number2 = [1,4,9];

const roots = number2.map(item => Math.sqrt(item));
console.log(roots); //[1,2,3]
console.log(number2)//[1,4,9]

//filter -> map이랑 똑같지만 조건을 달 수 있음

//prototype
function ma() {
    this.q = 'q';
    this.w = 'w';
}

ma.prototype.name = "kim"

var nunu = new ma();
//nunu에는 q,w밖에 없음
nunu.name //kim이 나옴. 프로토타입에 저장되어있어서
//메소드를 그냥 쓸 수 있는 이유가 프로토타입이 있어서

//class

class Hero {
    constructor(a) {
        this.q = a;
        this.w = 'vall';
    }
}

var garen = new Hero;