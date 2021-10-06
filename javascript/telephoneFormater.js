const telephoneNumber = document.getElementById('telephone');

telephoneNumber.addEventListener('keyup', function(){ // keyup is a event
    let phoneValue = telephoneNumber.value; // get the value of the input
    let output; // variable to store the output
    phoneValue = phoneValue.replace(/[^0-9]/g, ''); // replace all non-numeric characters with nothing
        var area = phoneValue.substr(0, 3);
        var pre = phoneValue.substr(3, 3);
        var tel = phoneValue.substr(6, 4);
        if (area.length < 3) { // if the area code is less than 3 digits
            output = "(" + area;
        }
        else if (area.length == 3 && pre.length < 3) { // if the area code is 3 digits and the prefix is less than 3 digits
            output = "(" + area + ")" + " " + pre;
        }
        else if (area.length == 3 && pre.length == 3) { // if the area code is 3 digits and the prefix is 3 digits
            output = "(" + area + ")" + " " + pre + " - "+tel;
        }
    telephoneNumber.value = output;

});