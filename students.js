students = [
  { name: "Peter", gender: "male", grade: 6, hobby: "stamps" },
  { name: "Mariah", gender: "female", grade: 5, hobby: "stamps" },
  { name: "Joseph", gender: "male", grade: 6, hobby: "fishing"},
  { name: "Katie", gender: "female", grade: 7, hobby: "playing videogames"},
  { name: "Jennifer", gender: "female", grade: 6, hobby: "skiing"},
  { name: "Yesica", gender: "female", grade: 7, hobby: "badminton"},
  { name: "Greg", gender: "male", grade: 4, hobby: "drawing animals"},
  { name: "Steven", gender: "male", grade: 5, hobby: "skateboarding"},
  { name: "Steve", gender: "male", grade: 7, hobby: "skateboarding"}
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