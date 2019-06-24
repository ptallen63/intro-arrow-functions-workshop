const fellowship = ["Gandalph", "Frodo", "Sam", "Pippin", "Gimli", "Aragorn", "Boromir", "Merry", "Legolas",];

// Get the first letter each name
const onlyFirstLetters = fellowship.map(function (member) {
  return member[0];
})

console.log({onlyFirstLetters})