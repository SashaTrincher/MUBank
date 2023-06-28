// let button = document.querySelector('.button-one');

// button.addEventListener('click', function() {
//     let block = document.querySelector('.one')
//     if(block.className === 'one'){

//         block.classList.add('active')
//     }
//     else{
//         block.classList.remove('active')
//     }
// });





let buttonOne = document.querySelector('.P_button-one');

buttonOne.addEventListener('click', function() {
    let blockOne = document.querySelector('.P_one')

    if(blockOne.className === 'P_one'){
        blockOne.classList.add('P_active')
    }
    else{
        blockOne.classList.remove('P_active')
    }
});




let buttonTwo = document.querySelector('.P_button-two');

buttonTwo.addEventListener('click', function(){
    let blockTwo = document.querySelector('.P_two');

    if(blockTwo.className === 'P_two'){
        blockTwo.classList.add('P_go')
    }
    else{
        blockTwo.classList.remove('P_go')
    }
});



