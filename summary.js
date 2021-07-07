const Name = "song";
const age = 24;
const hobby = true;

const summarizeUser = (name, age, hobby) => {
    return ('Name: ' + name + ', age: ' + age + ', has hobby: ' + hobby);
};

console.log(summarizeUser(Name, age, hobby))

const add = (a, b) => a + b;
const addOne = a => a + 1;
const addRandom = () => 4 + 6; 

console.log(addRandom())
console.log(addOne(1));
console.log(add(1,2));

const Person = {
    name: 'Song', //프로퍼티
    age: 29,
    greet() {     //메소드
        console.log("HI, I am " + this.name);
    },

    //이거 왜 안되냐
    // greet1: () =>  {     //메소드
    //     console.log("HI, I am " + this.name);
    // }
};

console.log(Person);
Person.greet();

const hobbies = ['Sports', 'Cooking'];
hobbies.push('Programming');
console.log(hobbies);

for (let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}));
console.log(hobbies)

const copiedHobbies = [...hobbies];
console.log(copiedHobbies);

const toArray = (...args) => {
    return args;
};

console.log(toArray(1,2,3,4));