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
