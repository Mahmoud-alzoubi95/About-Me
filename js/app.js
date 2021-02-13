"use strict";
let count = 0;

let userName = prompt("whate is your name ? ");
userName = userName.toLowerCase();
alert ('welcome' + userName)

let myAge = prompt("do you think i'm 25 years old ? (y/n) ");
myAge = myAge.toLowerCase();
if (myAge == "yes" || myAge == "y" ) {
  count++
  alert("correct , my age is 25 ");
} 
else if(myAge == "no" || myAge == "n") {
  alert("no , my age is 25 ");
}

let myHight = prompt("do you think my hight 185 ? (y/n) ");
myHight = myHight.toLowerCase();
if (myHight == "yes" || myHight == "y" ) {
  alert("no , my hight is 188cm ");
} 
else if(myHight == "no" || myHight == "n") {
  count++
  alert("correct , my hight is 188cm ");
}

let myWight = prompt("do you think my wight 80 ? (y/n) ");
myWight = myWight.toLowerCase();
if (myWight == "yes" || myWight == "y" ) {
  count++
  alert("correct , my wight is 80 ");
} 
else if(myWight == "no" || myWight == "n") {
  alert("no ,  my wight is 80 ");
}



let favSport = prompt("do you think my favorit sport is football ? (y/n) ");
favSport = favSport.toLowerCase();
if (favSport == "yes" || favSport == "y" ) {
  count++
  alert("sure , my favorit sport is football ");
} 
else if(favSport == "no" || favSport == "n") {
  alert("no , my favorit sport is football ");
}


let movies = prompt("do you think i like movies ? (y/n) ");
movies = movies.toLowerCase();
if (movies == "yes" || movies == "y" ) {
  count++
  alert("correct , i like movies ");
} 
else if(movies == "no" || movies == "n") {
  alert("no , i like movies ");
}

     

let zlaNum = prompt("Can you guess the zlatan ibrahimovich number in ACmila club ? ");
parseInt(zlaNum);
if (zlaNum == 10) {
  alert(" yes , the zlatan ibrahimovich number is 10  ");
  count++
} else {
 for(let i=0 ; i<4 ; i++){
    if (zlaNum<10){
      alert ('no , your guess is less than the number ')
      zlaNum = prompt("Can you guess the zlatan ibrahimovich number in ACmila club ? ");

      }
      else if (zlaNum>10){
        alert ('no , your guess is bigger than the number ')
        zlaNum = prompt("Can you guess the zlatan ibrahimovich number in ACmila club ? ");

      }
 
    if (zlaNum==10){
        break
    }
  }
  alert("ok , the zlatan ibrahimovich number is 10 ");
}

let x = false ;
let player = ['cr7', 'messi', 'zlatan','zidan'];
for(let i = 0 ; i < 6 ; i++){
    let userInp = prompt('can you guess my favourite player ?')
    let answer = userInp.toLocaleLowerCase();
    for(let j = 0; j<player.length;j++)
    {
        if(answer=== player[j]){
            alert('correct , i hope you are prefer the same player ');
           count++; 
            x=true ;
            break;
        }
   
    }
    if (x === true){
      break;
  }

  }
if (x === false){
  alert('wrong , my favorite players '+ player );
}
  alert('you are git '+ count + 'out of 7' );