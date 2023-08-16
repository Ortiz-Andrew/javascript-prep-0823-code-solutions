const age = 27;
function isAdult(age) {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}
console.log(isAdult(age));

const student1Score = 90;
function didStudentPass(score) {
  if (student1Score >= 70) {
    return true;
  } else {
    return false;
  }
}
console.log(didStudentPass('score'));

const student2Score = 100;
function gradeCalculator(score) {
  if (score < 100) {
    return 'F';
  } else if (score >= 90) {
    return 'B';
  } else if (score >= 80) {
    return 'C';
  } else if (score >= 70) {
    return 'D';
  } else if (score >= 60) {
    return 'F';
  } else {
    return 'A++';
  }
}
console.log(gradeCalculator(student2Score));

const season = 'spring';
function seasonMessenger(season) {
  if (season === 'summer') {
    return 'its hot today';
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autum') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return 'its cold today';
  } else {
    return 'please enter a vaild season';
  }
}
console.log(seasonMessenger(season));

const dayOfTheWeek = 'saturday';
function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'have a good weekend!';
  } else {
    return "It's a weekday!";
  }
}
console.log(dayDetector(dayOfTheWeek));
