const logo = document.querySelector('.B_header_logo');
 logo.addEventListener('click', () => {
     window.location.href = ""//тут буде посилання на головну сторінку
});
const submit = document.getElementById('B_transfer_submit')
let result = document.querySelector('.B_result');
let resultBlock = document.querySelector(".B_resultBlock");
let card = String(document.getElementById('B_transfer_card'));
let email = String(document.getElementById('B_transfer_email'));
submit.addEventListener('click', () => {
  let sumInput = document.getElementById("B_transfer_sumInput"); 
  let numberInput = document.getElementById("B_transfer_numberInput");  
  let sum = parseFloat(sumInput.value); 
  let number = parseFloat(numberInput.value);
  if (isNaN(sum) || isNaN(number) || sum < number || sum <= 0 || number <= 0 || card.length == 19 || email.includes('.com')){
    resultBlock.textContent = sum - number + '₴';
    result.setAttribute("style", "transform: translate(0px)");
  } else {
  }
})
const cross = document.querySelector('.B_cross')
 cross.addEventListener('click', () => {
     result.setAttribute("style", "transform: translate(-200px)");
})
