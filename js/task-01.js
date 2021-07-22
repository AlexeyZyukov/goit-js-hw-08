"use strict"

// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, 
//то есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
//текст заголовка элемента(тега h2) и количество элементов в категории 
//(всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const categoriesList = document.querySelectorAll(".item") //возвращает массив "узлов" элемента с перечнем их аттрибутов и св-в
const showNumbersOfCategories = array => `В списке ${array.length} категории.`
console.log(showNumbersOfCategories(categoriesList));
console.log('categoriesList', categoriesList); 

const showCategories = array => array.forEach(item =>
    console.log(`Категория: ${item.querySelector(`h2`).textContent}. 
Количество элементов: ${item.querySelectorAll(`li`).length}.`))
showCategories(categoriesList);


//========================================================
// const ulAll = document.querySelectorAll(".item"); //возвращает массив "узлов" элемента с перечнем их аттрибутов и св-в
// console.log(`В списке ul#categories ${ulAll.length} категории.`);
// console.log('ulAll', ulAll);

// const ulCategories = document.querySelector('ul'); //querySelector возвращает массив с html-разметкой элемента, показывает все li с их структурой в формате html-разметки
// console.log('ulCategories', ulCategories);
// console.log('ulCategories.children', ulCategories.children);


