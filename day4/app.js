/*
Tarih : 27.11.2020 / #100daysofjs / day 4
https://github.com/WinneRose/100daysofjs
*/



// Obje Oluşturma
let dev;
const developer = {
    name: "Burak Osman",
    age: 15,
    langs: ["Java","Flutter","C#","Javascipt"],

    address: {
        city: "Antalya",
        neighborhood: "Atatürk"
    },

    work: function(){
        console.log("He is a Developper");
    }


}

dev = developer.langs[0]; // Java
dev = developer.age;  // 15
dev = developer.name; // Burak Osman
dev = developer.address.neighborhood; // Atatürk
dev = developer.work(); // He is a Developper

console.log(dev);

let devs;
const developers = [
    {name: "berkant" , age: 20},
    {name: "mert" , age: 16}
];

devs = developers[0]; // {name: "berkant", age: 20}
devs = developers[0].name; // mert

console.log(devs);

//-----------------------------------------------------------------------------------------
let value;

// Date Objesi
const now = new Date(); // şuanki zamanı almamızı sağlar
console.log(now); // Fri Nov 27 2020 00:31:16 GMT+0300 (GMT+03:00

// Belirli Zaman Seçmede
const date1 = new Date("7-6-2005 12:00:00"); 
console.log(date1); // Wed Jul 06 2005 12:00:00 GMT+0300 (GMT+03:00)

const date2 = new Date("July 6 2005"); 
console.log(date2); // Wed Jul 06 2005 00:00:00 GMT+0300 (GMT+03:00)

const date3 = new Date("7/6/2005"); 
console.log(date3); // Wed Jul 06 2005 00:00:00 GMT+0300 (GMT+03:00)

value = now;
value = now.getDay(); // 27
value = now.getMonth(); // 10
value = now.getFullYear(); // 2020
value = now.setFullYear(2023); // 27.10.2023

console.log(value);





