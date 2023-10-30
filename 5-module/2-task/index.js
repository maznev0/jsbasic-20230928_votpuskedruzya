function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');

  button.addEventListener('click', function() {
    if (text.hidden == false) {
      text.hidden = true;
    } else if (text.hidden == true) {
      text.hidden = false; 
    } 
  }); 
}
