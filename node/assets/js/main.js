import { updateGrid, clearInputs, showMessage } from './utility/managePage.js';

const btnAdd = document.querySelector('#btn_add');
const btnSave = document.querySelector('#btn_save');
const btnDelete = document.querySelectorAll('.btn_delete');

document.addEventListener('click', async e => {

    if (e.target.id === 'btn_add' || e.target.id === 'btn_save') {
        const id = e.target.dataset.id;

        const userName = document.querySelector('#user_name').value;
        const userSurname = document.querySelector('#user_surname').value;
        const isActiveInput = document.querySelector('#chb_active').checked;

        const data = e.target.id === 'btn_add' ? {url: 'card/add', method: 'POST'} : {url: `card/${id}`, method: 'PUT'};

        const promise = await fetch(data.url, {
            method: data.method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: userName,
                surname: userSurname,
                isActive: isActiveInput
            })
        });

        const answer = await promise.json();
        showMessage(answer);
        
        if (answer.error) return;

        updateGrid();
        clearInputs();

        if (e.target.id === 'btn_save') {
            btnSave.classList.add('btn-hidden');
            btnAdd.classList.remove('btn-hidden');
        }
    }

    if (e.target.classList.contains('btn_delete')) {
        const id = e.target.dataset.id;

        const response = await fetch(`/card/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        });

        const answer = await response.json();
        showMessage(answer);

        updateGrid();
    }

    if (e.target.classList.contains('btn_edit')) {
        const id = e.target.dataset.id;

        const response = await fetch(`/card/${id}`, {
            headers: {
                'Accept': 'application/json'
            }
        });

        const answer = await response.json();

        const userName = document.querySelector('#user_name');
        const userSurname = document.querySelector('#user_surname');
        const isActiveInput = document.querySelector('#chb_active');

        userName.value = answer.name;
        userSurname.value = answer.surname;
        isActiveInput.checked = answer.active === 1;

        btnAdd.classList.add('btn-hidden');
        btnSave.classList.remove('btn-hidden');
        btnSave.dataset.id = answer.id;
    }
});
