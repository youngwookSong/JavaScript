const Person = { 
    //키   //값
    name: 'Song', //프로퍼티
    age: 29,
    
    //객체 안에서 메소드를 이케 쓰는데 function 키워드 없이 축약표현으로 이케 쓸 수 있음
    greet() {    //메소드
        console.log("HI, I am " + this.name);
    },

    greet1: () => { //프로퍼티 (일반함수)
        console.log("HI, I am " + this.name);
    } //화살표 함수는 프로토타입을 생성하지 않아서 this 바인딩이 일반함수랑 다름
    //이렇게는 거의 안씀
};

console.log(Person);
Person.greet();
Person.greet1();

//매개변수의 개수를 확정할 수 없을때
const toArray = (...kim) => {
    return kim;
};

console.log(toArray(1,2,3,4));





