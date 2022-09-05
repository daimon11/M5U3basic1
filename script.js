'use strict';

const start = () => {
  const deleteValue = (a) => {
    a.removeChild(a.lastElementChild);
    return start();
  };

  const clearValue = (a) => {
    a.textContent = '';
    return start();
  };

  const writeValue = (a, b, c) => {
    b.insertAdjacentElement('beforeend', c);
    c.insertAdjacentText('beforeend', a);
    return start();
  };

  const asking = () => {
    const list = document.querySelector('.list');
    const userElem = document.createElement('li');
    const userDate = prompt('Введите данные:', '');
    switch (true) {
      case (userDate === 'del'):
        deleteValue(list);
        break;
      case (userDate === 'clear'):
        clearValue();
        break;
      case (userDate === 'exit' || userDate === null):
        break;
      case (userDate.trim() !== ''):
        writeValue(userDate, list, userElem);
        break;
      default:
        return asking();
    }
  };

  return asking();
};
start();
