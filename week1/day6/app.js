/*
Tarih : 29.11.2020 / #100daysofjs / day 6
https://github.com/WinneRose/100daysofjs
*/


const process = 2;
/*
switch yapısı else if yapıysıla yapılan işlemlere benzerdir 

switch(key){
    case (value):
        //eğer key value değerine eşit ise burası çalışır
        break;
    
    default:
        // eğer case değerlerinde olmayan veri ise burası çalışır
}
*/
switch (process) {
    case 1:
        console.log("İşlem Birdesiniz");
        break;

    case 2:
        console.log("İşlem İkidesiniz");
        break;

    default:
        console.log("Şuan Herhangi Bir İşlemde Olabiliriz");
        break;
}

//-----------------------------------------------------------------------------------------

/* 
Function atama şu şekilde yapılır

function function_name (key = "default value" , key2 = "default value"){
    // işlemler
}

function_name(key,key2); // eğer işlemlerde değerleri kullanmazsak hata alırız

*/
function deneme() {
    console.log("deneme function");
}
deneme(); // çıktı: deneme function

function kontrol(name = "İsim Bilgisi Girilmedi", age = "Yaş Bilgisi Girilmedi"){
    console.log(`İsim: ${name}, Yaş: ${age}`);
}

kontrol("Burak Osman",15); // İsim: Burak Osman, Yaş: 15
kontrol("Burak Osman",); // İsim: Burak Osman, Yaş: Yaş Bilgisi Girilmedi
kontrol(); // İsim: İsim Bilgisi Girilmedi, Yaş: Yaş Bilgisi Girilmedi


// function return kullanımı
function islem(x){
    return x*x;

    console.log("Burası Çalışmayacak Çünkü Return Aynı Zamanda Sonraki İşlemere Geçmemizi Önler");
}

function islem2(x){
    return x*x*x;
}

let a = islem2(islem(2));
console.log(a); // 2^6 = 64


// function expression
const merhaba = function(isim){
    console.log(`merhaba ${isim}`);
}
merhaba("ataberk");

//immediately invoked function expression (IIFE)
(function(name){
    console.log(`merhaba ${name}`);
})("efe");


const ogrenci = {
    ad: function(ad) {
        console.log(`Öğrencinin Adı: ${ad}`);
    },
    yas: function(yas) {
        console.log(`Öğrencinin Yaşı: ${yas}`);
    },

    devamsizlik: function(devamsizlik) {
        console.log(`Öğrencinin Devamsızlığı: ${devamsizlik}`);
    }
}

console.log(`${ogrenci.ad("Mehmet")} , ${ogrenci.yas(17)} , ${ogrenci.devamsizlik(2)}`); // Öğrencinin Adı: Mehmet , Öğrencinin Yaşı: 17 , Öğrencinin Devamsızlığı: 2
