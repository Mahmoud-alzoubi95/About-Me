'use strict';

let userName2 ;


let nownMe1 = confirm('do you now me ? ');
console.log(nownMe1);

if (nownMe1){ 
     alert('welcome my friend ');
   }
   else{
     alert('I hope to know you soon but now lets continue  ');
 
   }


   let myAge = prompt('can you gues my age ? (y/n) ');
    console.log(myAge);
    myAge = myAge.toLowerCase();

    if (myAge == 'y' ){ 

       let userGues = prompt( 'please enter what you are guessing');

       if (userGues==26){

        alert('yes , you are true , my age is 26  ');

       }

      }

      else if  (myAge == 'n'){

        alert ('ok , my age 26') 

      }

     

let sports = prompt('what is my favorit sport ?');
sports = sports.toLowerCase();

if(sports=='football'){

alert (' yes , i love football and i am agood player ')

}

else {
alert ('no , i love football and i am agood player ')

}



let enjoy=prompt('ARE you enjoying in this course ?(yes/no) ');
if(enjoy=='yes'){

    alert ('i agree with you , you should enjoy and learn a new things  ')
    
    }
    
    else {
    alert ('you should to be enjoy and follow your passion ')
    
    }

let passion=prompt('does the programming is your passion ?(yes/no) ');
if(passion=='yes'){

    alert ('i agree with you , i hope you to reach to your goal  ')
    
    }
    
    else {
    alert (' i do not agree with you , i think the programming is important and you should keep in your mind to learn the programming ')
    
    }




 





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
//if(userFav.toLowerCase() === myCharacter){
 // alert('Okay, We have the same taste');
//}else {
  //alert('we dont have the same taste!');
//}
//console.log(userFav);




//let userinput = prompt('do you think I like paris');
//if (userinput ==='yes' || userinput ==='y'){
//alert('you got it right !')
//} else if(userinput ==='no' || userinput ==='n'){
  //alert('no actually i love it ')
//}
 

//I hope to know you soon123but now please answer those qustion 