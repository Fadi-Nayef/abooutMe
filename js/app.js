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
        alert('i apprciate your trust');
        score++;
    } else if (helpYou == 'NO' || helpYou == 'N') {
        alert('oh!! sorry to hear that');
    } else {

        alert('please type only y/yes or n/no');
    }
    console.log(helpYou + ' help you');
    return (helpYou);
}
question1(helpYou);


let makeNew = prompt('do you think im new on coding?');
function question2(makeNew) {

    switch (makeNew) {
        case 'yes':
            console.log('you are right ' + makeNew);
            alert('your answer was right');
            score++;
            break;
        case 'no':
            alert('you lost this time');
            break;
        default:
            alert('For the next time u will need to write only yes or no ');
    }
    return (makeNew);
}
question2(makeNew);

let myColor = confirm('do you think i like black confirm or cancel');
myColor = myColor.toLowerCase();

function question3(myColor) {

    switch (myColor) {
        case true:
            alert('sure you are right,black is classy');
            score++;
            break;
        case false:
            alert('oh god , how do you think that?');
            break;
        default:
            break;
    }
    console.log('your answer was ' + myColor);
    alert('we are done for the first section thank you ' + userName);
    return (myColor);
}
question3(myColor);

let forth = prompt('Do I think my eyes are brown?');
while (!forth) {
    forth = prompt('please answer only yes/y or no/n withoutspaces for previous question');
}
function question4(forth) {

    forth.toLowerCase();
    if (forth == 'yes' || forth == 'y') {
        alert('I believe my eyes are brown');
        score++;
    } else if (forth == 'no' || forth == 'n') {
        alert('most of Jordanian have brown eyes');
    } else {
        alert('your answer was wrong');
    }
    return (forth);
}
question4(forth);

let fifth = prompt('DO you think, I like  potato?');
while (!fifth) {
    fifth = prompt('please only answer with  yes/y or no/n ');
}
function question5(fifth) {

    fifth.toLowerCase()
    if (fifth == 'yes' || fifth == 'y') {
        alert('Actually , yes i do like it ');
        score++;
    } else if (fifth == 'no' || fifth == 'n') {
        alert('it\'s potato MAN!! how i don\'t like it ');
    } else {
        alert('you\'re  wrong');
    }
    return (fifth);
}
question5(fifth);

let sixth = '';
function question6(sixth) {
    for (let i = 0; i < 4; i++) {
        let sixth = prompt('can you guess how many I smoke per day? ');
        sixth = parseInt(sixth);
        if (sixth < 50) {
            alert('too low');
        } else if (sixth > 50) {
            alert('too high');
        } else if (sixth == 50) {
            alert('Lucky you');
            score++;
            break;
        } else {
            alert('good');
        }
    }
    return (sixth);
}
question6(sixth);
alert('the correct answer is 50');

let seventh = '';
function question7(seventh) {

    for (let i = 0; i < 6; i++) {
        let seventh = prompt('would you tell me a unit of mess mesurment?');
        let letters = ['kg', 'g', 'lbm', 'pound', 'ton'];
        let correct = false;
        for (let j = 0; j < letters.length; j++) {

            if (seventh == letters[j]) {
                correct = true;
                break;
            }
        }
        if (correct == false) {
            alert('please try again, used attemps' + i + '/ out of 3');
        } else {
            alert('you\'re right ,perfect');
            score++;
            break;

        }
    }
    return (seventh);
}
question7(seventh);
alert('your answer should be either kg, g, lbm, pound, ton ');

console.log('your score is ' + score);
document.write();
alert(`thanks for playing ${userName} your score is ${score} `);