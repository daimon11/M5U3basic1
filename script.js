'use strict';

const start = () => {
  const list = document.querySelector('.list');

  const deleteValue = (a) => {
    a.removeChild(a.lastElementChild);
  };

  const clearValue = (a) => {
    a.textContent = '';
  };

  const writeValue = (date) => {
    const userElem = document.createElement('li');
    list.insertAdjacentElement('beforeend', userElem);
    userElem.insertAdjacentText('beforeend', date);
  };

  const asking = () => {
    const userDate = prompt('Введите данные:', '');
    switch (true) {
      case (userDate === 'exit' || userDate === null):
        return;
      case (userDate === 'del'):
        deleteValue(list);
        break;
      case (userDate === 'clear'):
        clearValue();
        break;
      case (userDate.trim() !== ''):
        writeValue(userDate);
        break;
    }
    return asking();
  };
  asking();
};
start();
