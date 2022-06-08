export const updateGrid = async () => {
    const getCards = await fetch('card/');
    const cards = await getCards.json();

    const gridContainer = document.querySelector('.container-grid');
    gridContainer.innerHTML = '';
    
    cards.forEach(card => {
        gridContainer.innerHTML += `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Name: ${card.name}</h5>
                    <div>Surame: ${card.surname}</div>
                    <div>Active: ${card.active}</div>

                    <button type="button" data-id="${card.id}" class="btn btn-danger btn_delete">Delete</button>
                    <button type="button" data-id="${card.id}" class="btn btn-primary btn_edit">Edit</button>
                </div>
            </div>
        `;
    });
};

export const clearInputs = () => {
    const inputName = document.getElementById('user_name');
    const inputSurname = document.getElementById('user_surname');
    const inputChbxActive = document.getElementById('chb_active');

    inputName.value = '';
    inputSurname.value = '';
    inputChbxActive.checked = false;
};

export const showMessage = (answer) => {
    const msgBox = document.querySelector('#msg-box');
    msgBox.classList.remove('div-hidden');
    msgBox.classList.remove('alert-danger');
    msgBox.classList.remove('alert-success');
    msgBox.classList.add(answer.error ? 'alert-danger' : 'alert-success');
    msgBox.innerHTML = answer.msg;

    setTimeout(() => {
        msgBox.classList.add('div-hidden');
        msgBox.innerHTML = '';
    }, 3000);
};
