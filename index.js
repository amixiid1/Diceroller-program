// let username;

// document.getElementById("mysubmit").onclick = function(){
//     username= document.getElementById("mytext").value;
//     console.log(username);
// document.getElementById("myh1").textContent = `hello ${username}`
// }

// const decreasebtn = document.getElementById("decreasebtn");
// const reset = document.getElementById("reset");
// const increase = document.getElementById("increase");
// const countlabel = document.getElementById("countlabel");
// let count = 0;

// increase.onclick = function(){ 
//     count++;
//     countlabel.textContent = count;
// }
// decreasebtn.onclick = function(){
//     count--;
//     countlabel.textContent = count;
// }
// reset.onclick = function(){
//     count=0;
//     countlabel.textContent = count;
// }


// const mycheckbox = document.getElementById("mycheckbox");
// const visabtn = document.getElementById("visabtn");
// const mastercardbtn = document.getElementById("mastercardbtn");
// const paypalbtn = document.getElementById("paypalbtn");
// const mysubmit = document.getElementById("mysubmit");
// const subresult = document.getElementById("subresult");
// const paymentresult = document.getElementById("paymentresult");

// mysubmit.onclick = function(){
   
//     if(mycheckbox.checked){
//         subresult.textContent = `you are subscribed`;

//     }
//     else{
//         subresult.textContent = `you are NOT subscribed`
//     }
//     if(visabtn.checked){
//         paymentresult.textContent = `you are paying with Visa`;
//     }
//     else if(mastercardbtn.checked){
//         paymentresult.textContent = `you are paying with mastercard`;
//     }
//     else if(paypalbtn.checked){
//         paymentresult.textContent = `you are paying with PayPal`;
//     }
//     else{
//         paymentresult.textContent = `you are must select a payment type`;
//     }
// }

// const textBox = document.getElementById("textBox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("result");
// let temp;

// function convert(){
//     if(toFahrenheit.checked){
//       temp = Number(textBox.value);
//       temp = temp * 9 / 5 + 32;
//       result.textContent = temp.toFixed(1) + " F"; 
//     }
//     else if(toCelsius.checked){
//        temp = Number(textBox.value);
//       temp =(temp - 32) * (5/9);
//       result.textContent = temp.toFixed(1) + " C";
//     }
// }

function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() *6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png">`)
    }    
    diceResult.textContent = `dice: ${values.join('')}`;
    diceImages.innerHTML = images.join('');
}