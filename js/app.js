'use stric';
let score = 0;

let userName = prompt('whats your name ?');
while (!userName) {
    userName = prompt('please write your name');
}

console.log(`your name is ${userName}`);

alert(`hey ${userName} you welcom , we\'ll have a lot of fun`);



let helpYou = prompt('do you think i can help you?write y/yes , n/no ');
function question1(helpYou) {

    helpYou = helpYou.toUpperCase();

    if (helpYou === 'YES' || helpYou === 'Y') {
        //console.log('thats awesom');
        alert('i apprciate your trust');
        score++;
        // eslint-disable-next-line eqeqeq
    } else if (helpYou == 'NO' || helpYou == 'N') {
        alert('oh!! sorry to hear that');
    } else {

        //    while (helpYou !== {'){
        //    helpYou=prompt('please type only y/yes or n/no');}
        //    {
        alert('please type only y/yes or n/no');
    }
    console.log(helpYou + ' help you');
    return (helpYou);
}
question1(helpYou);



//makeNew=prompt('no worries , do you wat us to help you ?');
//console.log(makeNew);
let makeNew = prompt('do you think im new on coding?');
function question2(makeNew) {

    switch (makeNew) {
        case 'yes':
            console.log('you are right ' + makeNew);
            alert('your answer was right');
            score++;
            break;
        case 'no':
            //console.log('we are sorry to hear that');
            alert('you lost this time');
            break;
        default:
    }
    return (makeNew);
}
question2(makeNew)

let myColor = confirm('do you think i like black confirm or cancel');

switch (myColor) {
    case true:
        //console.log('black is classie');
        alert('sure you are right,black is classy');
        score++;
        break;
    case false:
        //console.log('agree ,sometimes black is uncomfy');
        alert('oh god , how do you think that?');
        break;
    default:
        break;
}
console.log('your answer was ' + myColor);
alert('we are done for the first section thank you ' + userName);


let guessNum = prompt('can you guess a numberin my mind smaller than 50 and greater than 10, ?');
parseInt(guessNum);




console.log('your score is ' + score);
document.write();
