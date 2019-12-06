let desc = document.querySelectorAll('.item-card__desc_text'); // Кнопка "Важная информация"
let hide = document.querySelectorAll('.item-card-hide'); // Скрытый блок
let close = document.querySelectorAll('.item-card-hide_close'); // Кнопка крестик


// Кнопка переключатель
desc.forEach(function(element) {
  element.onclick = function(e) {
    e.preventDefault();
    // e.currentTarget.parentNode += 'snow';
    hide.forEach(function(elem) {
      elem.classList.toggle('show')
    })
  }
})
// Кнопка закрытия 
close.forEach( function(el) {
  el.onclick = function(e) {
    hide.forEach(function(elem) {
      e.preventDefault();
      elem.classList.remove('show')
    })
  }
})

