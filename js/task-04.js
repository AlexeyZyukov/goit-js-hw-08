// Счетчик состоит из спана и кнопок, которые должны увеличивать и 
//уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

const counterValue = document.querySelector('#value');
//console.log(counterValue);
//console.log(counterValue.textContent);//возвращает текстовое значение span

const incrementBtn = document.querySelector('button[data-action="increment"]');
//console.log(incrementBtn.textContent);
const decrementBtn = document.querySelector('button[data-action="decrement"]')
//console.log(decrementBtn.textContent);

incrementBtn.addEventListener('click', () => {
    //console.log(event);
    let num = Number(counterValue.textContent);
    num += 1;
    counterValue.textContent = num;
    //console.log(counterValue.textContent);
})

decrementBtn.addEventListener('click', () => {
    //console.log(event);
    let num = Number(counterValue.textContent);
    num -= 1;
    counterValue.textContent = num;
    //console.log(counterValue.textContent);
})
