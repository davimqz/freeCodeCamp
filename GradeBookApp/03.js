function hasPassingGrade(score) {
  let grade = getGrade(score);
  return grade !== "F";
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));