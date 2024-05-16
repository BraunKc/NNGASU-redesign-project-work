// Сначала сохраняем ссылки на DOM-элементы, а не на их стили.
var box1 = document.querySelector('.box1');
var box2 = document.querySelector('.box2');
var box3 = document.querySelector('.box3');
var box4 = document.querySelector('.box4');
box1.style.width = '1000px';
function setWidthOfAllBoxes(width) {
  // Установка одинаковой ширины для всех блоков
  [box1, box2, box3, box4].forEach(box => {
    box.style.width = width;
  });
}

function select1(x) {
  requestAnimationFrame(() => {
    const selectedBox = [box1, box2, box3, box4][x];
    if (selectedBox.style.width !== '1000px') {
      setWidthOfAllBoxes('70px');
    }

    requestAnimationFrame(() => {
      selectedBox.style.width = '1000px';
    });
  });
}
