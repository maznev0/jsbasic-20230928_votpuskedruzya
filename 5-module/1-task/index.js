function hideSelf() {
  let button = document.querySelector('.hide-self-button');

  button.addEventListener('click', () => button.hidden = true);
}
// почему в консоле браузера при введении "button", 
//для просмотра содержимого, выводит ошибку:
//ReferenceError: Can't find variable: button
