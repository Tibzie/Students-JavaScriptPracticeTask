students = [
  { id: 1, name: "Peter", gender: "male", grade: 6, hobby: "stamps", age: 14},
  { id: 2, name: "Mariah", gender: "female", grade: 5, hobby: "stamps", age: 13 },
  { id: 3, name: "Joseph", gender: "male", grade: 6, hobby: "fishing", age: 14},
  { id: 4, name: "Katie", gender: "female", grade: 7, hobby: "playing videogames", age: 15},
  { id: 5, name: "Jennifer", gender: "female", grade: 6, hobby: "skiing", age: 14},
  { id: 6, name: "Yesica", gender: "female", grade: 7, hobby: "badminton", age: 15},
  { id: 7, name: "Greg", gender: "male", grade: 4, hobby: "drawing animals", age: 12},
  { id: 8, name: "Steven", gender: "male", grade: 5, hobby: "skateboarding", age: 13},
  { id: 9, name: "Steve", gender: "male", grade: 7, hobby: "skateboarding", age: 15}
];

/* 1. find the person with the "fishing" hobby and display the name of this person */

// ES5
/* const fishingHobby = students.filter((fishing) => {
  return fishing.hobby == "fishing"
}).map((fisherman) => {
  return fisherman.name
}); */

// ES6
const fishingHobby = students.filter(fishing => fishing.hobby == "fishing")
.map(fisherman => fisherman.name);

console.log("The name of this person is: " + fishingHobby.toString());


// 2. show how many people are in grade 6 and above
const numOfSenStudents = students.filter(oldStudents => oldStudents.grade >= 6).length;

console.log("The number of students above grade 5 is: " + numOfSenStudents);


// 3. show the name of these students and separate the names by space (", ")
const nameOfSenStudents = students.filter(oldStudents => oldStudents.grade >= 6)
.map(names => names.name);

console.log("The name of these students: " + nameOfSenStudents.join(", "));


// 4. calculate the average age of the students with reduce method
const avgAge = (students.reduce((acc, curr) => acc + curr.age, 0) / students.length).toFixed(2);

console.log(avgAge);


// 5. reverse the name of the hobbies of each student and return these as a string
const revHobbies = students.map(reverseH => reverseH.hobby.split(" ").reverse().join(""));

console.log(`Reversed hobbies: ${revHobbies.toString()}`);


// 6. add a new student to the array - also display the last element of the array
students.push({ id: 10, name: "Thomson", gender: "male", grade: 8, hobby: "rocket science", age: 16});

console.log(students.slice(-1)[0]);



// 7. remove the previous student from the array & also display the last element of the array
students.pop();
console.log(students.slice(-1)[0]);


// 8. create an immutable copy of the students array and add a new student to it
const newStudents = [...students];
newStudents.push({ id: 10, name: "Emily", gender: "female", grade: 5, hobby: "snowboarding", age: 13})

console.log(newStudents);
console.log(students);


// 9. sort by age and display both age and name of the students
const sortAge = students.filter(ageSorting => ageSorting.age).map(sorted => {
return `These are the names in age order (ascending): `,
`Age: ${sorted.age}, Name: ${sorted.name}`});

console.log(sortAge.sort());


// 10. check if there is a student called Katie as part of the array and display her id and hobby if there is one (with ternary operator)
const checkKatie = students.map(checkValue => {
  return  checkValue.name === "Katie" ? `Id: ${checkValue.id} + Hobby: ${checkValue.hobby}` : "this is not Katie";
})

console.log(checkKatie);


// 11. check whether Steve is part of the club and show his hobby
const checkSteve = (target) => students.filter(checkN => checkN.name == target)
.map(checkV => checkV.id + checkV.hobby);

console.log(checkSteve("Steve"));


// 12. check if the array includes someone called Steven
const checkName = students.map(thename => thename.name).includes("Steven");

console.log(checkName);


// 13. if the array includes the name reply with an appropriate message
const checkN = (value) => {
  const checkV = students.map(thename => thename.name).includes(value);
  return checkV === true ? "This name exists in the array" : "This name is NOT in the array";
}

console.log(checkN("Steve"));
