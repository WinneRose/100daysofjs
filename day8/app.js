/*
Tarih : 31.11.2020 / #100daysofjs / day 8
https://github.com/WinneRose/100daysofjs
*/

// Alert
alert("Merhaba");

// Confrim
const confrimc = confirm("Kabul Ediyor Musunuz");

if(confrimc == true){
    console.log("Kabul Ettiniz");
}else{
   console.log("Kabul Etmediniz");
}

//Prompt
const promptc = prompt("2 + 2 = ?");

if(promptc === "4"){
    console.log("Cevabınız Doğru");
}else{
    console.log("Cevabınız Yanlış");
}


let value = window.location.pathname;
console.log(value); //  /100daysofjs/day8/index.html


//-----------------------------------------------------------------------------------------

/*

Scope Kavramı

// Global Scope

function a(){
    // Function Scope
}

if(){
    // Block Scope
}
*/

//-----------------------------------------------------------------------------------------