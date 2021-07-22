// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
//подставляет его текущее значение в span#name - output.
//Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const refs = {
    inputField: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
};

//refs - объявлен объект ссылок на элементы вместо:
// const input = document.querySelector('#name-input');
// const nameOutput = document.querySelector('#name-output');

refs.inputField.addEventListener('input', onInputChange);

function onInputChange(event) {
    // console.log(event);
    // console.log(refs.nameOutput.textContent);
    // const initialNameOutput = refs.nameOutput.textContent;

    if (event.currentTarget.value === '')
    {
        refs.nameOutput.textContent = 'незнакомец';
    }
    
    else if 
    (event.currentTarget.value !== '') {
        refs.nameOutput.textContent = event.currentTarget.value;
    }
    
    // console.log(initialNameOutput);
}; //event.currentTarget.value - содержит информацию о введенных данных в поле input формы
