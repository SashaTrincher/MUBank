let aButtonOne = document.querySelector('.a_main_first_block_text_container_button_one');
let aButtonTwo = document.querySelector('.a_main_first_block_text_container_button_two');
let aNumberOfPeopleWithout = document.querySelector('.a_main_number_of_clients_first');
let aNumberOfPeopleWith = document.querySelector('.a_main_number_of_clients_second');

aButtonOne.addEventListener('click', () => {
    if (aNumberOfPeopleWithout.className === 'a_main_number_of_clients_first') {
        aNumberOfPeopleWithout.classList.add('a_active');
    } else {
        aNumberOfPeopleWithout.classList.remove('a_active');
    };

    if (aNumberOfPeopleWith.className === 'a_main_number_of_clients_second') {
        aNumberOfPeopleWith.classList.add('a_active_two');
    } else {
        aNumberOfPeopleWith.classList.remove('a_active_two');
    };

    if (aButtonTwo.className === 'a_main_first_block_text_container_button_two') {
        aButtonTwo.classList.add('a_active_three');
    } else {
        aButtonTwo.classList.remove('a_active_three');
    };

    if (aButtonOne.className === 'a_main_first_block_text_container_button_one') {
        aButtonOne.classList.add('a_active_four');
    } else {
        aButtonOne.classList.remove('a_active_four');
    };
});

aButtonTwo.addEventListener('click', () => {
    if (aNumberOfPeopleWithout.className === 'a_main_number_of_clients_first') {
        aNumberOfPeopleWithout.classList.add('a_active');
    } else {
        aNumberOfPeopleWithout.classList.remove('a_active');
    };

    if (aNumberOfPeopleWith.className === 'a_main_number_of_clients_second') {
        aNumberOfPeopleWith.classList.add('a_active_two');
    } else {
        aNumberOfPeopleWith.classList.remove('a_active_two');
    };

    if (aButtonTwo.className === 'a_main_first_block_text_container_button_two') {
        aButtonTwo.classList.add('a_active_three');
    } else {
        aButtonTwo.classList.remove('a_active_three');
    };

    if (aButtonOne.className === 'a_main_first_block_text_container_button_one') {
        aButtonOne.classList.add('a_active_four');
    } else {
        aButtonOne.classList.remove('a_active_four');
    };
});