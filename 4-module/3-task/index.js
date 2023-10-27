function highlight(table) {
  for (let tr of table.tBodies[0].rows) {
    if (tr.cells[3].dataset.available === 'true') {
      tr.classList.add('available');
    } else if (tr.cells[3].dataset.available === 'false') {
      tr.classList.add('unavailable');
    } else {
      //tr.setAttribute('hidden'); // почему не надо писать?
      tr.hidden = true;
    }

    tr.cells[2].textContent == 'm' 
    ? tr.classList.add('male') 
    : tr.classList.add('female');

    if (tr.cells[1].textContent < 18) tr.style = "text-decoration: line-through";
  } 
}
