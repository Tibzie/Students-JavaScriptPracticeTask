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

/* Find the person with the "fishing" hobby and display the name of this person */

// ES5
/* const fishingHobby = students.filter((fishing) => {
  return fishing.hobby == "fishing"
}).map((fisherman) => {
  return fisherman.name
}); */

// ES6
const fishingHobby = students.filter(fishing => fishing.hobby == "fishing")
.map(fisherman => fisherman.name);


console.log(fishingHobby);

// show how many people are in grade 6 and above
const numOfSenStudents = students.filter(oldStudents => oldStudents.grade >= 6).length;
// .reduce((acc, total) => acc + total.id, 0);
console.log(numOfSenStudents);

// show the name of these students and separate the names by space (", ")
const nameOfSenStudents = students.filter(oldStudents => oldStudents.grade >= 6)
.map(names => names.name);

console.log(nameOfSenStudents.join(", "));
