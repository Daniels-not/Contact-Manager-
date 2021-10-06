const cardList = document.getElementById('card__container');

//* FETCH DATA FROM THE API *//

async function loadContacts() {
    return (await fetch('http://www.raydelto.org/agenda.php')).json();
}

//* LOAD CONTACTS *//
document.addEventListener('DOMContentLoaded', async () => {
    let contacts = [];

    try {

        contacts = await loadContacts();

    } catch(e) {
        console.log("Error!");
        console.log(e);
    }

    //* DISPLAY DATA *//
    console.log(contacts);

    cardList.innerHTML = '';

    for(let i = 0; i < contacts.length; i++) { //* Loop through all the contacts *//
        const nombre = contacts[i].nombre;
        const apellido = contacts[i].apellido;
        const telefono = contacts[i].telefono;

        //* Create the card *//
        cardList.innerHTML += `
            <div class="box">
                <div class="avatar"></div>
                <div class="content">
                    <p class="text-content">${nombre} ${apellido}</p>
                    <span>${telefono}</span>
                </div>
            </div>
        `
    }
    Swal.fire({
        icon: 'info',
        title: 'All Contacts has been loaded !',
        text: 'Thanks you for waiting',
    })
});


//* SEARCH FUNCTION*//

const mySearcher = () => {
    const input = document.getElementById('search__input'); //* Get the input value *//
    const filter = input.value;
    const card = document.getElementsByClassName('box'); //* Get all the cards *//

    for(let i = 0; i < card.length; i++) { //* Loop through all the cards *//
        let name = card[i].getElementsByClassName('text-content')[0].innerHTML; //* Get the name of the card *//
        if(name.indexOf(filter) > -1) { //* If the name contains the filter *//
            card[i].style.display = ''; //* Show the card *//
        } else {
            card[i].style.display = 'none'; //* Hide the card *//
        }
    }
}