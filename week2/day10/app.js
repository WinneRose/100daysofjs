/*
Tarih : 3.11.2020 / #100daysofjs / day 10
https://github.com/WinneRose/100daysofjs
*/

let element

// Element ID'ye göre seçme
element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

// Element Name'e göre seçme
element = document.getElementsByName("form");

// Element Class'a göre seçme
element = document.getElementsByClassName("form-row");
element = document.getElementsByClassName("fa fa-remove");

// Element Html Tag'a göre seçme
element = document.getElementsByTagName("div");

//-----------------------------------------------------------------------------------------

// Css Selector , Query Selector (Tek Bir Element Seç)
element = document.querySelector("#todo-form");
element = document.querySelector(".list-group-item");
element = document.querySelector("li");  // sayfada bulduğu ilk li elementini gösterecek

// QuerySelectorAll (Tüm Elementleri Seç)
element = document.querySelectorAll("li");
element.forEach(function(el){
    console.log(el)
})

console.log(element);