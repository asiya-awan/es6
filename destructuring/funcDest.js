// Without Destructuring
function displaySummary0(student) {
    console.log('Hello, ' + student.name);
    console.log('Your Maths score is ' + (student.scores.maths || 0));
    console.log('Your English score is ' + (student.scores.english || 0));
    console.log('Your Science score is ' + (student.scores.science || 0));
}

// With Destructuring
function displaySummary1({name, scores: { maths = 0, english = 0, science = 0 }}) {
    console.log('Hello, ' + name);
    console.log('Your Maths score is ' + maths);
    console.log('Your English score is ' + english);
    console.log('Your Science score is ' + science);
}

displaySummary1(student);
//displaySummary1();  //ERRROr

// with fallback
function displaySummaryGood({ name, scores: { maths = 0, english = 0, science = 0 } = {} } = {}) {
    console.log('Hello, ' + name);
    console.log('Your Maths score is ' + maths);
    console.log('Your English score is ' + english);
    console.log('Your Science score is ' + science);
}

// Calling without a student argument
displaySummaryGood();

// Hello, undefined
// Your Maths score is 0
// Your English score is 0
// Your Science score is 0


// https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f
