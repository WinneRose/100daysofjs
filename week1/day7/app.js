/*
Tarih : 30.11.2020 / #100daysofjs / day 7
https://github.com/WinneRose/100daysofjs
*/

let i = 0
// While : belli bir koşul verilip koşulu sağlayana kadar işlemleri uygular
while(i < 6){
    console.log(i); // sırasıyla 0'den 5'e kadar yazdı 
    i++; 
}

//-----------------------------------------------------------------------------------------

let i2 = 0;
// Do While : ilk önce do'da verilen işlemler uygulanır sonra döngü kontrol edilir
do {
    console.log(`${i2}. Yapı`);
    i2++;
} while (i2< 10);


//-----------------------------------------------------------------------------------------

// For 

/*
for(döngü değişkeni;koşul;arttırma){
    //işlem
}
*/

for(let sayi = 0; sayi < 10;sayi++){
    console.log(`Sayımız: ${sayi}`); 
}

let langs = ["TR","EN","FR"];
for(let index = 0; index < langs.length; index++){
    console.log(langs[index]); // TR, EN, FR
}

//-----------------------------------------------------------------------------------------

// Foreach

langs.forEach(function(lang,index){
 console.log(`Foreach Diller: ${lang} ${index}`); // Foreach Diller: TR 0, Foreach Diller: EN 1, Foreach Diller: FR 2
});

//-----------------------------------------------------------------------------------------

// Map

const users = [
    {name: "burak", age: 15},
    {name: "mert", age: 17},
    {name: "berkant", age:18}
]

const names = users.map(function(user){
    return user.name
})

console.log(names); // app.js:64 (3) 


//-----------------------------------------------------------------------------------------

const user = [
    {name: "burak", age: 15},
]

for(let key in user){
    console.log(key,user[key]);
}