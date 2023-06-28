/* 
/* let myButton = document.querySelector('.button')
myButton.addEventListener('click', function () {
    let inputText = parseInt(document.querySelector('.inputText')).value;
    alert('Число це' + inputText)
    if (inputText > 10 && inputText <20) {
        alert('Число входить в діапазон від 10 до 20');
    }
    else {
        alert ('Число не входить в діапазон від 10 до 20');
    }
}) */

/*  let name 
let email 
let password 
 */


/* let month = parseInt(prompt("Введіть номер місяця (від 1 до 12):"));
if (month >= 1 && month <= 12) {
  if (month >= 3 && month <= 5) {
    alert("Весна");
  } else if (month >= 6 && month <= 8) {
    alert("Літо");
  } else if (month >= 9 && month <= 11) {
    alert("Осінь");
  } else {
    alert("Зима");
  }
} else {
  alert("Невірний номер місяця. Введіть число від 1 до 12.");
} */


/* function calculator(num1, num2, operator) {
let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      alert('Невірна операція');
      return;
  }

    alert('Результат: ' + result);
} */
/* alert("Підвердіть що ви тато");
let result = confirm("Ви тато?");

if (result == true) {
  alert("Дякую за підтвердження! Ласкаво просимо на сайт.");
} else {
  alert("Вам не дозволено вхід. Спробуйте перезавантажити сайт.");
} */
/* let myButton = document.querySelector('.button')
myButton.addEventListener('click' , function()  {

    let balance= parseInt(document.querySelector('.balance').value);
    let payment= parseInt(document.querySelector('.payment').value);
    alert('Вартість замовлення ' + payment + 'Перевіряємо кількість грошей на рахунку' )
    if (payment <= balance) {
        balance -= payment;
        alert('На вашому рахунку' + balance + 'коштів');
    }
    else {
        alert('Поповніть рахунок');
    }
})  
 */

/* let myButton = document.querySelector('.myButton');
let imageS1 = document.querySelector('.img-s1');
let imageS2 = document.querySelector('.img-s2')
myButton.addEventListener('click' , () => {
    if(imageS1.className === 'img-s1') {
      imageS1.classList.add('active');
    } else {
      imageS1.classList.remove('active');
    };
});
myButton.addEventListener('click' , () => {
  if(imageS2.className === 'img-s2') {
    imageS2.classList.add('active');
  } else {
    imageS2.classList.remove('active');
  };
});

let myBtn = document.querySelector('.myBtn');
let blocks = document.querySelectorAll('.block');

myBtn.addEventListener('click', () => {
  for (let i = 0; i < blocks.length; i++) {
    let block = blocks[i];
    let text = block.querySelector('p');
    let img = block.querySelector('.img');

    if (text.style.display === 'none') {
      text.style.display = 'block';
      img.style.display = 'none';
    } else {
      text.style.display = 'none';
      img.style.display = 'block';
    }
  }
}); */






/* let a = 0;
while (a < 10) {
    console.log(a);
    a+=1;
} */

/* let client = 34;
const maxClient = 57;

while(client < maxClient) {
    console.log(client)
    client+=1 ;
} */

/* let birth = 0;
let adult = 18;

while(birth<adult) {
  console.log(birth)
  birth+=1;
} */
/* const max = 10;

for (let i = 0; i<max;i += 1) {
  console.log(i);
} */

/* const numb = 3;
let sum = 0;

for (let i = 0; i <= numb; i+=1){
  sum+= i;
}
console.log(sum); */
/* let number = 10;

for (let i = 0; i < number; i += 1) {
  if (i === 5) {
      break;
  }
} */
/* for (let i=1; i<=50;i+=1 ){
  if (i % 2 !== 1) {
    console.log(i);
  }
}
for (let i = 1; i <= 50; i+= 2) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
 */


/* const number = 7;
for (let i = 1; i <= 10; i++) {
  console.log(number*i);
} */


/* let number ;
do {
  number = parseInt(prompt('Введіть число більше 100 або натисніть відміна'));
}
while (isNaN(number) || number<= 100) {
  console.log(number)
} */

/* const triggerButton = document.querySelector('.triggerButton');
triggerButton.addEventListener('click' , () => {
  const employees = 10;
  let totalSalary = 0;
  for (let i = 0; i <= employees; i++)  {
    let salary = Math.floor(Math.random() * (5000 - 500 + 1) )+ 500;
    
    totalSalary+= salary
  }
  console.log(totalSalary)
}) */
/* 



const employees = 10;
let totalSalary = 0; 


for (let i = 0; i < employees; i++) {
   salary = Math.floor(Math.random() * (5000 - 500 + 1) + 500); 
  totalSalary += salary; 
}
console.log(totalSalary);
 */




/*  let amount = parseFloat(document.getElementById('amount').value);
  let months = parseInt(document.getElementById('months').value);
  let result = (document.getElementById('result').value);
  let button = (document.getElementById('button'));
if(months=>3 && months<=24) {
  button.addEventListener ('click', function calculateInstallment() {
  let interestRate = 2.99;
  
  let monthlyPayment = (amount / months) * (1 + interestRate / 100);
  
  document.getElementById("result").value = monthlyPayment.toFixed(2);
  })
}  */

 function calculateInstallment() {
  let amount1 = parseFloat(document.getElementById('amount').value);
  let months = parseInt(document.getElementById('months').value);
  let displayNumber3 = (document.getElementById('displayNumber3').value);
  let button = (document.getElementById('button'));

  let interestRate = 2.99;
  
  let monthlyPayment = (amount1 / months) * (1 + interestRate / 100);
  
  document.getElementById("displayNumber3").value = monthlyPayment.toFixed(2);
}

let sum = (document.querySelector('.sum'))
let myAmount = (document.querySelector('.amount'))
myAmount.addEventListener('click', () => {
  if (myAmount.className === 'amount' && sum.className === 'sum') {
    myAmount.classList.add('active');
    sum.classList.add('active');
}
else {
  myAmount.classList.remove('active');
  sum.classList.remove('active');
};
})

let month = (document.querySelector('.G_month'))
let amount2 = (document.querySelector('.G_month2'))
amount2.addEventListener('click', () => {
  if (amount2.className === 'G_month2' && month.className === 'G_month') {
    amount2.classList.add('active');
    month.classList.add('active');
}
else {
  amount2.classList.remove('active');
  month.classList.remove('active');
};
})


/* let date = (document.querySelector('.G_date'))
let date2 = (document.querySelector('.G_date2'))
date2.addEventListener('click', () => {
  if (date.className === 'G_date' && date2.className === 'G_date2') {
    date.classList.add('active');
    date2.classList.add('active');
}
else {
  date.classList.remove('active');
  date2.classList.remove('active');
};
}) */
/* let myButton = document.querySelector('.myButton');
myButton.addEventListener('click', function (){
    let myName = document.querySelector('.name').value;
    let password = document.querySelector('.password').value;
    let email = document.querySelector ('.email').value;

if (
    myName.length < 3 || email.includes('@') || password.length < 8) {
    window.location.href = 'https://meet.google.com/hjn-beaa-oai';
}
else{
    alert('Помилка: Неправильно заповнені дані!');
}
}) */