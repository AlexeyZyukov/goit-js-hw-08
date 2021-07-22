"use strict"

const list = document.querySelector(".list");
console.log('list', list);

// Добавлем элемент в конец списка
const item = document.createElement("li");
const addItemToList = (item, text) => document.createElement(item).textContent(text);
//item.textContent = "Poly";
list.append(item);

// Добавляем элемент в начало списка
const clone = item.cloneNode(true);
clone.textContent = "Ajax";
list.prepend(clone);

// Добавляет заголовок перед списком
const title = document.createElement("h2");
title.textContent = "Список клиентов";
list.before(title);

// Добавляет абзац после списка
const text = document.createElement("p");
text.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
list.after(text);