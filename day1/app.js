/*
Tarih : 23.11.2020 / #100daysofjs / day 1
https://github.com/WinneRose/100daysofjs
*/



//Konsola Bilgi Vermek Amacılıyla Kullandığımız Terimler
console.log("test");
console.warn("bu bir uyarı");
console.error("bu bir hata");

//-----------------------------------------------------------------------------------------

//Değişken Oluşturma (değişken türü  değişken ismi = değer) 
var a = 10;
var b = 30;
var c = 10;
console.log(a+b+c); // (çıktı: 50)

//primitive veri tipleri
var a = 10;
console.log(typeof a); //typeof a değişkeninin veri tipini görmemizi sağlar  (çıktı: number)

//string: yazılı ifadelerde kullanılan değişken
var name = "WinneRose";
console.log(typeof name); // (çıktı: string)

//boolen: koşul kontrol etmede kullanılır
var boolean = true;
console.log(typeof boolean); // (çıktı: boolean)

//null: hiçbir şey taşımayan veri tipi
var a = null;
console.log(typeof a); // (çıktı: object)

//undefined: değer atanmamış değişkenler
var a;
console.log(typeof a); // (çıktı: undefined)

//-----------------------------------------------------------------------------------------

/*
var:
var keyword’ü aralarında en geniş kapsama sahip keyword’dür. Örneklerle inceleyecek olursak
.Sonradan tekrar değiştirilebilir
.Kodun herhangi bir noktasında tekrar tekrar tanımlanabilir.
.Sadece fonksion ile kapsanabilir (function scope) fonksiyon süslü parantezleri içerisinde var ile tanımlanan değişkene dışarıdan erişilemez.


let:
let keyword’ü sadece tanımlandığı kapsam (block scope) içerisinden erişilebilir. Block scope’dan kasıt her bir süslü parantezin ({}) içerisidir
.Sonradan tekrar değiştirilebilir
.Aynı kapsam (scope) içerisinde sadece bir sefer tanımlanabilir. Tekrar tanımlanmaya çalıştığında kod hata verir ve çalışmayı durdurur.


const:
const keyword’ü de let gibi sadece tanımlandığı kapsam (block scope) içerisinden erişilebilir. const adından da anlaşılabileceği gibi (constant kelimesinin kısaltılmasıdır) sabittir.
.Sonradan değiştirilemez
.Aynı kapsam (scope) içerisinde sadece bir sefer tanımlanabilir. Tekrar tanımlanmaya çalıştığında kod hata verir ve çalışmayı durdurur

*/

//-----------------------------------------------------------------------------------------

let value;

// Veritiplerini String'e Çevirme

value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String(function() {console.log()});
value = String([1,2,3,4]);


value = (10).toString();
value = (3.14).toString();

// Veritiplerini Sayılara Çevirme
value = Number("123");
value = Number(null);
value = Number(undefined); //(çıktı : null)
value = Number("Hello World"); //(çıktı : null)
value = Number(function(){console.log()}); //(çıktı : null)
value = Number([1,2,3,4]); //(çıktı : null)

value = Number("3.14");
value = parseFloat("3.14");

value = parseInt("3"); //(çıktı : 3)



const constn = Number("34") + 53; //(çıktı : 87)

console.log(constn);
console.log(typeof constn);



console.log(value);
console.log(typeof value);

//-----------------------------------------------------------------------------------------

mathv = Math.PI; //(çıktı: pi sayısı)

// sayı yuvarlama
mathv = Math.round(3.5); //(çıktı: 4) 
mathv = Math.round(3.4); //(çıktı: 3)

// sayıyı bi değer düşüğe yuvarlama
mathv = Math.floor(3.5); //(çıktı: 3) 
mathv = Math.floor(3.4); //(çıktı: 3)

// sayıyı bi değer yükseğe yuvarlama
mathv = Math.ceil(3.5); //(çıktı: 4) 
mathv = Math.ceil(3.4); //(çıktı: 4)

// sayının karekökünü alma
mathv = Math.sqrt(16); //(çıktı: 4) 

// sayının mutlak değerini alma
mathv = Math.abs(-16); //(çıktı: 16)

// sayının üssünü  alma
mathv = Math.pow(2,4); //(çıktı: 16)

// max ile bulunan sayılar içerisinden en yüksek olanı , min ile bulunan sayılar içerisinden en küçük olanı
mathv = Math.max(2,4,30,50); //(çıktı: 50)
mathv = Math.min(2,4,30,50); //(çıktı: 2)

// random ile rastgele sayı oluşturmamızı olanak sağlar
mathv = Math.random();
mathv = Math.floor(Math.random() * 20 + 1); //(çıktı: 1 ile 20 arası sayı oluşturur)

console.log(mathv);

//-----------------------------------------------------------------------------------------