/*
Tarih : 28.11.2020 / #100daysofjs / day 5
https://github.com/WinneRose/100daysofjs
*/



//Karşılaştırma Operatörleri

// == (eşit)
console.log(2 == 2);   // true
console.log("javascript" == "js");  // false

// === (değerler aynı mı tipler aynı mı)
console.log(2 == "2");  // burda tiplerine bakmaksızın değerlere bakılır
console.log(2 === "2"); // biri number biri string olduğundan dolayı eşit olmaz bu nedenle false döner

// != (eşit değilse)
console.log(2 != 6); // true
console.log(2 != 2); // false

// !== (değerler eşit değilse veya tipleri aynı değil ise)
console.log(2 !== "2"); // tipleri aynı olmadığından true 
console.log(2 !== 4);  // değerleri eşit olmadığından true

// > (büyüktür) ve < (küçüktür)
console.log(10 > 6); // true çünkü 10, 6'dan büyüktür
console.log(2 < 6); // true çünkü 2, 6'dan küçüktür

// >= (büyük veya eşit) ve <= (küçük veya eşit)
console.log(10 >= 6); // true çünkü 10, 6'dan büyüktür
console.log(6 <= 6); // true çünkü 6, 6'dan küçük değildir fakat eşittir


//Mantıksal Operatörler

// not (çıkan booleen değerin tersini alır true ise false, false ise true)
console.log(!(6 <= 6)); // false (normalde true)

// and (eğer true istiyorsak 2 durumunda true olması gerekir)
console.log((2 == 2) && (3 < 6)); // true
console.log((3 == 2) && (2 < 6)); //false

// or (eğer true olmasını istiyorsak değerlerden birinin true olması yeterlidir)
console.log((3 == 2) || (2 < 6)); // true

//-----------------------------------------------------------------------------------------

/*
if(koşul){
    koşul karşılanırsa oluşacak durum
}
else{
    koşul karşılanmazsa çalışacak durum
}

*/

const sayi = 20;

if(sayi == 20){
    console.log("sayı 20")
} 
else if(sayi > 20){
    console.log("sayı 20'den büyük")
}
else{
    console.log("sayı 20 değil")
}

//-----------------------------------------------------------------------------------------


// uzun if - kısa if 

const sayi2 = 30;

if(sayi2== 30){
    console.log("sayı 30")
} 

else{
    console.log("sayı 30 değil")
}

console.log(sayi2 == 30 ? "sayı 30" : "sayı 30 değil"); // sayı 30 (kısa if)


