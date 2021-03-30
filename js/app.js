'use stric';

let oldWebsite = confirm('do you have an old website');
let makeNew='';

if (oldWebsite===true){
//console.log('thats awesom');
  alert('thats awesom');
}else
{
    alert('you will need a help');
    makeNew=prompt('no worries , do you wat us to help you ?');

}

//makeNew=prompt('no worries , do you wat us to help you ?');
//console.log(makeNew);

switch (makeNew) {
    case 'yes':
//console.log('one of our team will contact you very soon');
        alert('one of our team will contact you very soon');
        break;
    case 'no':
//console.log('we are sorry to hear that');
        alert('we are sorry to hear that');
        break;
    default:
//console.log('kindly refresh and answer only yes or no');
        alert('kindly refresh and answer only yes or no');
        break;
}
let yourColor=confirm('do you like black');

switch (yourColor) {
    case true:
//console.log('black is classie');
        alert('black is classie');
        break;
case false:
//console.log('agree ,sometimes black is uncomfy');
    alert('agree ,sometimes black is uncomfy');
    break;
    default:
        break;
}
