window.onload = function() {
    const forms = document.forms;
    forms[0].name.value = "tyep your name";;
};

function confirmSubmit() {
    const forms = document.forms;
    forms[0].onsubmit = function() {
        const name = forms[0].name.value;
     if (!(confirm(`${name}, Are you sure ?`))) {
        alert("Canceled");
        return false;
     }
    };
};

window.onload = confirmSubmit;