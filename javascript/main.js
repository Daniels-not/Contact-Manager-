//* VARIABLES *//
const form = document.getElementById('form');
const submitButton = document.getElementById('submit');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const telephone = document.getElementById('telephone');

//*VALIDATING THE FORM BEFORE SUBMITTING THE DATA*/
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(firstName.value === '') { //if the first name is empty
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a name for the Contact!',
        })
    }
    else {
        if(lastName.value === '') { //if the last name is empty
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter a last name for the Contact!',
            })
        }
        else {
            if(telephone.value === '') { //if the telephone is empty
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please enter a phone number for the Contact!',
                })
            }
        }
    }


    //*SUBMITTING THE DATA TO THE SERVER (API) LINK: http://www.raydelto.org/agenda.php */
    var payload = {
        nombre: firstName.value, //first name
        apellido: lastName.value, //last name
        telefono: telephone.value //telephone
    };

    var data = new FormData(); //creating a new form data
    data.append( "json", JSON.stringify( payload ) ); //adding the payload to the form data

    fetch("http://www.raydelto.org/agenda.php",
    {
        method: "POST",
        body: data
    })
    .then(function(res){ return res.json(); })
    .then(function(data){
        //alert( JSON.stringify( data ) )
        Swal.fire({
            icon: 'success',
            text: 'Contact Added Successfully!, Good Job!',
            width: 400,
            padding: '3em',
            backdrop: `
                rgba(0,0,123,0.4)
                url("https://i.ibb.co/tC2zntC/giphy.gif")
                left top
                no-repeat
            `
        })
        console.log(data);
    })
    .catch(function(err){
        Swal.fire(
            'Oops something goes wrong submitting your contact, try again later.',
            'Check if your name, last name, and telephone number are corrects',
            'error'
        )
        console.error(err);
    });

    firstName.value = ""; //clearing the first name input
    lastName.value = ""; //clearing the last name input
    telephone.value = ""; //clearing the telephone input
})
