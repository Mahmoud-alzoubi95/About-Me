'use strict';

let count = 0;

qus1();
qus2();
qus3();
qus4();
qus5();
qus6();
qus7();



function qus1() {


  let nownMe1 = confirm('gues who am i ? ');
  console.log(nownMe1);

  if (nownMe1) {
    alert('welcome my friend ');
  }
  else {
    alert('I hope to know you soon but now lets continue  ');
  }


}





// if (myAge === "y") {


//   let userGues = prompt("please enter what you are guessing");

//   if (userGues === 26) {
//     alert("yes , you are true , my age is 26  ");
//   }

// else if (myAge === "n") {
//   alert("ok , my age is 26 ");

// }
// }







function qus2() {


  let sports = prompt('what is my favorit sport ?');
  sports = sports.toLowerCase();

  if (sports === 'football') {
    count++;
    alert(' yes , i love football and i am agood player ');
  }
  else {

    alert('no , i love football and i am agood player ');

  }

}


function qus3() {

  //first qsn
  let myAge = prompt('can you gues my age ? (y/n) ');
  console.log(myAge);
  myAge = myAge.toLowerCase();
  let age = prompt('what is my age ?');
  parseInt(age);
  if (age === 26) {
    count++;
    alert(' yes ,  my age is 26 ');
  } else {

    for (let i = 0; i < 4; i++) {

      // let chance4 = prompt('no ,try again')

      if (age < 26) {
        alert('no it your guess less than my age ');
        age = prompt('what is my age ?');

      }
      else if (age > 26) {
        alert('no it your guess bigger than my age ');
        age = prompt('what is my age ?');

      }

      if (age === 26) {
        //alert(" yes , my hight is 188cm ");

        break;

      }

    }
    alert('ok , my age is 26 ');
  }

}




function qus4 () {


  //second qsn
  let hight = prompt('what is my hight ?');
  parseInt(hight);
  if (hight === 188) {
    count++;
    alert(' yes , my hight is 188cm ');
  } else {

    for (let i = 0; i < 3; i++) {

      // let chance4 = prompt('no ,try again')

      if (hight < 188) {
        alert('no it your guess less than my hight ');
        hight = prompt('what is my hight ?');

      }
      else if (hight > 188) {
        alert('no it your guess bigger than my hight ');
        hight = prompt('what is my hight ?');

      }

      if (hight === 188) {
        //alert(" yes , my hight is 188cm ");

        break;

      }

    }

    alert('ok , my hight is 188cm ');
  }
}


function qus5 () {



  //third qsn
  let wight = prompt('what is my wight ?');
  parseInt(wight);
  if (wight === 80) {
    count++;
    alert(' yes , my hight is 188cm ');
  } else {

    for (let i = 0; i < 4; i++) {

      // let chance4 = prompt('no ,try again')

      if (wight < 80) {
        alert('no it your guess less than my wight ');
        wight = prompt('what is my wight ?');

      }
      else if (wight > 80) {
        alert('no it your guess bigger than my wight ');
        wight = prompt('what is my wight ?');

      }

      if (wight === 80) {
        //alert(" yes , my hight is 188cm ");

        break;

      }

    }

    alert('ok , my wight is 80 ');
  }

}




// //4th qsn
// let batchNum = prompt("how many people in our batch ?");
// parseInt(batchNum);
// if (batchNum === 30) {
//   alert(" yes , there is 30 people in our batch ");
// } else {

//   for(let i=0 ; i<4 ; i++){

//     // let chance4 = prompt('no ,try again')

//     if (batchNum<30){
//       alert ('no , your guess is less than the number ')
//       batchNum = prompt("how many people in our batch ?");

//       }
//       else if (batchNum>30){
//         alert ('no , your guess is bigger than the number ')
//         batchNum = prompt("how many people in our batch ?");

//       }

//     if (batchNum===30){
//       //alert(" yes , my hight is 188cm ");

// break

//     }

//   }

//   alert("ok , there is 30 people in our batch ");
// }





// //5th qsn
// let favNum = prompt("Can you guess my favorit number? from (1 - 20)");
// parseInt(favNum);
// if (favNum === 7) {
//   alert(" yes , there is 30 people in our batch ");
// } else {

//   for(let i=0 ; i<4 ; i++){

//     // let chance4 = prompt('no ,try again')

//     if (favNum<7){
//       alert ('no , your guess is less than the number ')
//       favNum = prompt("Can you guess my favorit number? from (1 - 20)");

//       }
//       else if (favNum>7){
//         alert ('no , your guess is bigger than the number ')
//         favNum = prompt("Can you guess my favorit number? from (1 - 20)");

//       }

//     if (favNum===7){
//       //alert(" yes , my hight is 188cm ");

// break

//     }

//   }

//   alert("ok , my favorit number is 7 ");
// }



function qus6 () {



  //6th qsn
  let zlaNum = prompt('Can you guess the zlatan ibrahimovich number in ACmila club ? ');
  parseInt(zlaNum);
  if (zlaNum === 10) {
    alert(' yes , the zlatan ibrahimovich number is 10  ');
    count++;
  } else {

    for (let i = 0; i < 4; i++) {

      // let chance4 = prompt('no ,try again')

      if (zlaNum < 10) {
        alert('no , your guess is less than the number ');
        zlaNum = prompt('Can you guess the zlatan ibrahimovich number in ACmila club ? ');

      }
      else if (zlaNum > 10) {
        alert('no , your guess is bigger than the number ');
        zlaNum = prompt('Can you guess the zlatan ibrahimovich number in ACmila club ? ');

      }

      if (zlaNum === 10) {
        //alert(" yes , my hight is 188cm ");

        break;

      }

    }

    alert('ok , the zlatan ibrahimovich number is 10 ');
  }
}


function qus7 () {

  let player = ['cr7', 'messi', 'zlatan', 'zidan'];
  for (let i = 0; i < 6; i++) {
    let userInp = prompt('can you guess my favourite player ?');
    let answer = userInp.toLocaleLowerCase();
    for (let j = 0; j < player.length; j++) {
      if (answer === player[j]) {
        alert('correct , i hope you are prefer the same player ');
        count++;
        i = 6;
        break;
      }
    }
    if (i !== 6) {

      alert('wrong , my favourite player is cr7 ');

    }
    alert('you are git ' + count + 'out of 7');
  }

}











// let passion = prompt("does the programming is your passion ?(yes/no) ");
// if (passion === "yes") {
//   alert("i agree with you , i hope you to reach to your goal  ");
// } else {
//   alert(
//     " i do not agree with you , i think the programming is important and you should keep in your mind to learn the programming "
//   );
// }





















//let confirmUser = confirm('do you like movies?');
//console.log(confirmUser);

//if (confirmUser){
// alert('welcome to the movies page');
//}
//else{
//alert('omg');
//}
//let myBool = false;
//let anotherBool = false;
//let thirdBool = true;

//if (myBool && anotherBool) { // false
//console.log('myBool and thirdBool were both true');
//} // only one of these have to be true
//else if (myBool || anotherBool) { // false
//console.log('My bool or anotherBool was true!');
//} // only thirdBool can be true
//else if (myBool) { // F
// console.log('myBool and anotherBool were false, but thirdBool was true.');
//} // none of the above conditions were true
//else { // default case
// console.log('Were any of my variables true?');
//}

//let myCharacter = 'invoker';
//let userFav = prompt('what is your fav character?');
// console.log(userFav.toLowerCase()); // invoker // the way the user write it.
// userFav = userFav.toLowerCase();
// INVOKER -> invoker
//if(userFav.toLowerCase() ==== myCharacter){
// alert('Okay, We have the same taste');
//}else {
//alert('we dont have the same taste!');
//}
//console.log(userFav);

//let userinput = prompt('do you think I like paris');
//if (userinput ===='yes' || userinput ===='y'){
//alert('you got it right !')
//} else if(userinput ===='no' || userinput ===='n'){
//alert('no actually i love it ')
//}

//I hope to know you soon123but now please answer those qustion;
