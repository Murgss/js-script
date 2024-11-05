for (let i = 11; i <= 20; i++) {
    console.log(i);
}
for (let i = 20; i >= 11; i--) {
    console.log(i);
}

let friends = ["Anna", "Jānis", "Mārtiņš", "Ieva", "Kārlis"];

console.log(friends[0]);
console.log(friends[2]);

let numberOfFriends = friends.length;

console.log(numberOfFriends);

for (let i = 0; i < numberOfFriends; i++) {
    console.log(friends[i])
}

for (let i = 0; i < numberOfFriends; i++) {
    console.log(`${i + 1}. ${friends[i]}`);
}

let person = {
    name: "Jānis",
    age: 20,          
    isStudent: true,   
};

console.log(person.name);
console.log(person.age);
console.log(person.isStudent);

if (person.age >= 18) {
    console.log(person.name + " ir pilngadīgs. ");
} else {
    console.log(preson.name + " nav pilngadīgs. ");
}

if (person.isStudent) {
    console.log(person.name + " ir students ");
} else {
    console.log(person.name + " nav students ")
}

person.course = "PT2024";

console.log(person.course);