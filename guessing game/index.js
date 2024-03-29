// guessing Game 

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum-minNum+1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){

guess = window.prompt(`Guess a number between ${minNum}-${maxNum}.`);
guess=Number(guess);

if(isNaN(guess)){
        window.alert(`Plese enter valid number!`);
}
else if (guess<minNum && guess > maxNum){
        window.alert(`Guess number between given range`);
}
else{
        attempts++;
        if (guess > answer) {
                window.alert(`number is too high`);
        }
        else if (guess < answer) {
                window.alert(`number is too low`);
        }
        else{
                window.alert(`Correct! the answer was ${answer} and you find it in ${attempts} attempts`);
                running = false;
        }
}







}
