/*
Tarih : 2.11.2020 / #100daysofjs / day 9
https://github.com/WinneRose/100daysofjs
*/

let value;

value = document.all; // Bununla Birlikte Html Collection Çağrılır
value = document.all.length; // Sayfada 44 Tane Html Objesi Var
value = document.all[0]; // 0'ncı indexi aldık ve html etiketi karşımıza çıktı

console.log(value);

// Html Collectionlar Arasında Gezinme

const elements = document.all;

for(let i = 0;i < elements.length;i++){
    //console.log(elements[i]);
}

// Foreach ile yapacaksak html collection'ı arraye dönüştürmeliyiz

const collections = Array.from(document.all); // Bununla Birlikte Html Collection Çağrılır ve Gezinmeyi Sağlar

collections.forEach(function(collection){
//console.log(collection);
})

// scriptler
value = document.scripts; //  HTMLCollection(4) [scrıpt, scrıpt, scrıpt, scrıpt] olan scriptleri bize gösterdi
value = document.scripts.length // olan script sayısını gösterdi (4)
value = document.scripts[0]; // 0'ncı indexteki scripti gösterdi   <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>

// linkler
value = document.links;
value = document.links[0]; //  <a href = "#" class ="delete-item"> ...
value = document.links[0].getAttribute("class"); // delete-item
value = document.links[0].className // delete-item
value = document.links[0].classList // DOMTokenList ["delete-item", value: "delete-item"],

// formlar
value = document.forms; // HTMLCollection [form#todo-form, todo-form: form#todo-form, form: form#todo-form]
value = document.forms[0]; // <form id = "todo-form" name="form"> ... </form>
value = document.forms["form"]; // <form id = "todo-form" name="form"> ... </form>
value = document.forms[0].id; // todo-form
value = document.forms[0].name; // form
value = document.forms[0].method; // get



console.log(value); 