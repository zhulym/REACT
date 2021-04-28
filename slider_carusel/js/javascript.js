let width = 130;
let count = 1;
let position = 0;

let listElem = document.querySelectorAll('li');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let images = document.querySelector('.images');

next.addEventListener('click', moveForward);
prev.addEventListener('click', moveBackward);

function moveForward() {
  position -= width * count;
  if (Math.abs(position) >= (listElem.length - 2) * width) {
    position += width;
    return;
  }
  images.style.transform = `translateX(${position}px)`;
}

function moveBackward() {
  if (position === 0) return;
  position += width * count;
  images.style.transform = `translateX(${position}px)`;
}





































