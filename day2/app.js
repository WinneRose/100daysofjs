/*
Tarih : 24.11.2020 / #100daysofjs / day 2
https://github.com/WinneRose/100daysofjs
*/


// String methods

let value;
const ad = "Burak Osman"
const soyad = "Yaldız"
const diller = "js,c#,flutter,java"

//methods
value = ad + " " + soyad;
value = ad.concat(" " + soyad + " " + "antalya"); // ad + " " + soyad + " " + "antalya" (ekleme yapmaya yarar)
value = ad.toUpperCase(); // harfleri büyütmeye yarar
value = ad.toLowerCase(); // harfleri küçütmeye yarar

value = ad[0]; // 0'ncı indexteki terimi alır (B)
value = ad.charAt(2); // 2'nci indexteki terimi bulmamızı sağlar (r)
value = ad.indexOf("B"); //B teriminin kaçıncı indexte olduğunu bulmamızı sağlar (0)
value = diller.split(","); // diller kısmındaki verileri ayırmamızı sağlar (["js", "c#", "flutter", "java"])
value = diller.replace("js","javascript"); // diller'deki js verisini javascript ile değiştirmeyi sağlar (javascript,c#,flutter,java)
value = diller.includes("csharp"); // diller kısmındaki verilerde csharp var mı diye kontrol eder fakat bulunamadığı için false olarak döner



console.log(value);

//-----------------------------------------------------------------------------------------

// Template Literal

const adi = "Burak Osman"
const soyadi = "Yaldız"
const is = "Öğrenci"

const a = "Adı" + " " + adi + " " + "Soyadı" + soyadi + " " + "İşi" + is; // uzun hali
const b = `Adı: ${ad} \nSoyadı: ${soyad} \nİşi: ${is}`;
console.log(b); 

//-----------------------------------------------------------------------------------------

// Array 
let value2;

// Array Tanımlamanın İki Yolu
const sayilar = [20,50,60,80];
//const sayilar2 = new Array [20,50,60,80]; 

//methods
value2 = sayilar.length;
value2 = sayilar[0];
value2 = sayilar[sayilar.length - 1]; // son indexe ulaşmanın yolu (80)

sayilar.unshift(10); // sayilar dizisinin başına 10 sayısını ekledi [10, 20, 50, 60, 80]
sayilar.push(100); // sayilar dizisinin sonuna 100 sayısını ekledi  [10, 20, 50, 60, 80, 100]
value2 = sayilar; // (6) [10, 20, 50, 60, 80, 100]

sayilar.pop(); // sondaki dizini sildi  (5) [10, 20, 50, 60, 80]
sayilar.shift(); // baştaki dizini sildi (4) [20, 50, 60, 80]
value2 = sayilar; 

sayilar.splice(0,2); //0'ncı indexten 2'nci indexe kadar sayıların silinmesi
value2 = sayilar; // (2) [60, 80]

sayilar.reverse(); // elamanları ters çevirmeye yarar
value2 = sayilar; // [80, 60, 50, 20]


// Sıralama
sayilar.sort(); // ilk rakamına bakarak küçükten büyüğe sıralar
value2 = sayilar; // [20, 50, 60, 80]

value = numbers.sort(function(x,y){ // Küçükten Büyüğe
    return x - y;
});

value = numbers.sort(function(x,y){ // Büyükten Küçüğe
    return y-x;
});

value2 = sayilar;



console.log(value2);