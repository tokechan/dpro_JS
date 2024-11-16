// window.onload = function() {
//     const forms = document.forms;
//     forms[0].name.value = "tyep your name";;
// };

// function confirmSubmit() {
//     const forms = document.forms;
//     forms[0].onsubmit = function() {
//         const name = forms[0].name.value;
//      if (!(confirm(`${name}, Are you sure ?`))) {
//         alert("Canceled");
//         return false;
//      }
//     };
// };

// window.onload = confirmSubmit;

// function emailValidation() {
//     const form = document.getElementById("form");
//     form.onsubmit = function() {
//         if(form.email.value !== form.email_confirm.value) {
//             const element = document.createElement("p")
//             const message = document.createTextNode("Emails do not match")
//             element.appendChild(message);
//             form.appendChild(element);
//             return false;
//         }
//     };
// };

// window.onload = emailValidation;
function emailValidation() {
    const form = document.getElementById("form");  //--1
    form.onsubmit = function() { //--2
      if(form.email.value !== form.email_confirm.value) { //--3
        const element = document.createElement("p") //--4
        const message = document.createTextNode("Eメールが一致しません") //--5
        element.appendChild(message); //--6
        form.appendChild(element); //--7
        element.classList.add("alert");
        return false;  //--8
      }
    };
  };    
  
  window.onload = emailValidation;