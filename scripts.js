// const btn1 = document.querySelector(".btn1")
// const square1 = document.querySelector(".square1")

// // btn1.addEventListener ("click", function() {
// //     document.querySelector("square1").style.backgroundColor = "red";
// // });

// document.querySelector(".btn1").addEventListener("click", function() {
//     square1.querySelector(".square1").style.backgroundColor = "red";
// });

const btn1 = document.querySelector('.js-btn1')
const square1 = document.querySelector('.square1') 

btn1.addEventListener('click', function() {
    square1.style.backgroundColor = 'red';
});

const textContainer = document.querySelector('.square2');
const button2 = document.querySelector('.js-btn2');

button2.addEventListener('click', function() {
  textContainer.innerHTML = 'SUCCESS';
});

const hideBox = document.querySelector('.square3');
const button = document.querySelector('.js-btn3');

button.addEventListener('click', function() {
  hideBox.style.visibility = 'hidden';
});

const square4 = document.querySelector('.square4');
const button4 = document.querySelector('.btn4');
let isVisible = true;

button4.addEventListener('click', function() {
  if (isVisible) {
    targetDiv.style.visibility = 'hidden';
    isVisible = false;
  } else {
    targetDiv.style.visibility = 'visible';
    isVisible = true;
  }
});

const square5 = document.querySelector('.square5');
const button5 = document.querySelector('.js-btn5');
const colors = ['red', 'green', 'blue', 'purple', 'orange'];

button5.addEventListener('click', function() {
  square5.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

const js_square6 = document.querySelector('.js_square6');
const button6 = document.querySelector('.js-btn6');

let number = 1;
let intervalId;
button6.addEventListener('click', function() {
  intervalId = setInterval(() => {
    if (number === 10) {
      clearInterval(intervalId);
    }
    number++;
    js_square6.innerHTML = number;
  }, 3000);
});

const grid_items = document.querySelectorAll('.square1','.square2','.square3','.square4','.square5','.js_square6')
const bckground = document.querySelector('.container')
const button7 = document.querySelector('.btn7')

button7.addEventListener('click', function() {
    bckground.style.backgroundColor = '#000000'
    grid_items.forEach(function(grid_item) {
        grid_item.style.backgroundColor = 'red'
    })
})


