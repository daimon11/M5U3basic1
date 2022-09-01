'use strict';

const start = () => {
  const list = document.querySelector('.list');
  const userDate = prompt('Введите данные:', '');
  const userElem = document.createElement('li');
  console.log(userDate);
  const exit = () => {
    const choice = confirm('Точно ли Вы хотите выйти?');
    if (choice === true) {
      alert(`Пока-пока!`);
      return;
    } else {
      return start();
    }
  };

  const dataVerification = (a) => {
    switch (true) {
      case (a === 'del'):
        list.removeChild(list.lastElementChild);
        return start();
      case (a === 'clear'):
        list.textContent = '';
        return start();
      case (a === 'exit' || a === null):
        return exit();
      default:
        return a;
    }
  };
  const writeValue = (b, c, d) => {
    if (dataVerification(b) === undefined) {
      return;
    } else {
      c.insertAdjacentElement('beforeend', d);
      d.insertAdjacentText('beforeend', b);
      return start();
    }
  };

  return writeValue(userDate, list, userElem);
};
start();
