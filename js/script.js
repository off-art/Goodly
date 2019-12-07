let desc = document.querySelectorAll('.item-card__desc_text'); // Кнопка "Важная информация"
let hid = document.querySelectorAll('.item-card-hide'); // Скрытый блок
let close = document.querySelectorAll('.item-card-hide_close'); // Кнопка крестик


desc.forEach(function(element) {
  element.onclick = show;
});

function show(e) {
  e.preventDefault();
  let data = this.getAttribute('data');
  let hide = document.querySelector(`.item-card-hide[data = "${data}"]`);
  hide.classList.toggle('show');
}

// // Кнопка закрытия 
close.forEach( function(el) {
  el.onclick = function(e) {
    hid.forEach(function(elem) {
      e.preventDefault();
      elem.classList.remove('show')
    })
  }
})



