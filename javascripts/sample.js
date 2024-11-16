function operateCSS() {
    const element = document.getElementsByTagName("p")[0];
    // element.classList.add("background_pink");
    // element.classList.remove("blue");
    element.addEventListener('click', function(){
        this.classList.toggle('background_pink');
    });
};

window.onload = operateCSS;


function alertClick() {
    alert("you clicked me!");
};

const button = document.getElementById("btn");
button.onclick = alertClick;


function clickBtn() {
    const button = document.getElementById("btn");
    button.addEventListener("click", alertClick3);
};
button.addEventListener("click", function(){
    console.log("don't click me!!!");
});

function alertClick2() {
    alert("don't click me!!!");
};

function alertClick3(e) {
    e.target.style.backgroundColor = "orange";
    console.log(e);
};

window.onload = clickBtn;