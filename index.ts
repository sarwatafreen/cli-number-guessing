#! /usr/bin/env node
import inquirer from "inquirer";


//const randomNumber = 13;
   //const randomNumber = Math.random();
   const randomNumber = Math.floor(Math.random()*10 + 1);

   console.log("welcome to number guessing game");

   //console.log(randomNumber)
   
const answer = await inquirer.prompt([
  {
    name : "userGuessedNumber",
    type:  "number",
    message: "please guess number:",
   }
]);
//console.log (answer);
if(answer.userGuessedNumber === randomNumber ){
 console.log("congtratulations! you guessed right number");

}else{
 console.log(" you guessed wrong number");
}







