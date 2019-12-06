let desc = document.querySelectorAll('.item-card__desc_text');
let hide = document.querySelectorAll('.item-card-hide');
let close = document.querySelectorAll('.item-card-hide_close');

desc.forEach(function(element) {
  element.onclick = function(e) {
    e.preventDefault();
    hide.forEach(function(elem) {
      elem.classList.toggle('show')
    })
  }
})

close.forEach( function(el) {
  el.onclick = function(e) {
    hide.forEach(function(elem) {
      e.preventDefault();
      elem.classList.remove('show')
    })
  }
})

