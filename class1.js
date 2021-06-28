//빠시 -> control + option + n
const arr = [1,2,3];

//자바스크립트의 프린트
console.log(arr);

var wook = 11;
var wook2 = 2;
console.log(wook / wook2);

console.log(10/0);  //Infinity
console.log(10/-0); //-Infinity
console.log(1 * 'String'); //NaN

console.log("바보"); 
console.log('바보'); 
console.log(`바보`); //백틱 사용

//var 이해
function wook5() {
    console.log(string2);
    var string2 = 2;
}

wook5();

//템플릿 리터럴 templete literal
//백틱을 이용해서 선언 시 개행 허용
var a = `dgjlksjelgjg
egeadgsgd`;

console.log(a);

//undefined
//var로 선언하면 거기에는 undefined가 들어가 있음
var b;
console.log(b);

//자료형 형변환
var x = '1';
console.log(typeof(x));

console.log(+x); //number로 바뀜
console.log(typeof(+x));

var y = "sasdgsd"
console.log(+y);  //NaN

//동등비교, 일치 비교
console.log(1 == '1'); //true (동등)
console.log(1 === '1');//false (일치) -> 타입까지 일치해야됨

//논리 연산자를 사용한 단축 평가
//결과를 좌우하는 값을 출력
console.log('Cat' && 'Dog'); //Dog
console.log('Cat' || 'Dog'); //Cat

//if 문
if (x<10) {
    x++;
}
else {

}

//switch
switch (x) {
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    default:
        break;
}

//for
for(var i = 0;i < 2;i++){
    console.log(i);
}

//while
while (i<2){
    console.log(i)
}

//객체 : 0개 이상의 프로퍼티로 구성된 집합
//약간 클래스 같은 느낌으로 보면됨
var person = {     //타입은 객체
    name : 'song', //프로퍼티
    sex : 'male'
}; //-> 객체 리터럴

person.age = 20; //프로퍼티 넣기
console.log(person)
delete person.age; // 프로퍼티 삭제

var person2 = person;
console.log(person2);

person2.age = 30; //참조 형식이라 값이 바뀌면 참조값도 바뀜
console.log("person:",  person);

//객체를 만드는 방법
//1. 객체 리터럴
//2. Object 생성자 함수
//3. 생성자 함수
//4. Object.create 메서드
//5. 클래스

//함수 리터럴 (함수 이름 생략가능)
//but 이름이 없어서 재사용 불가능
var song = function() {
    console.log("바보")
}
song(); //함수 호출

//함수 선언
function add(x,y) {
    return x + y;
}

//화살표 함수
var add = (x,y) => x+y;

//ex1
function ex1() {
    console.log('wook');
}
ex1();

(function ex2() { console.log('wook2'); });
//함수 선언문이 소괄호 안에 있으면 리터럴로 해석
//소괄호안에는 표현식이 들어가야 함으로 
//ex2(); -> 실행이 안됨.. define이 안되있으므로

//즉시 실행 함수
(function () {
    var a = 3;
    var b = 5;
      return console.log(a+b);
}());

//callback함수
//함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수

//고차 함수
//매개 변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수

//고차 함수
function repeat(n,f) {
    for(var i = 0; i < n; i++)
    {
        f(i);
    }
}

//callback 함수
var logAll = function(i) {
    console.log(i);
};

repeat(5, logAll);