// dic erpller program

function rollDice(){
        const numOfDice=document.getElementById("numOfDice").value;
        const diceResult=document.getElementById("diceResult");
        const diceImage=document.getElementById("diceImage");

        const values = [];
        const images = [];

        for (let i = 0; i < numOfDice ; i++) {
                const value = Math.floor(Math.random()*6)+1;
                values.push(value);
                images.push(`<img src="/Dice roller/img/${value}.png" alt ="Dice ${value}">`)
        }
        diceResult.textContent=`Dice: ${values.join(", ")}`;
        diceImage.innerHTML = images.join(" ");
}