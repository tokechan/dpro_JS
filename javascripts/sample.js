function operateCSS() {
    const element = document.getElementsByTagName("p")[0];
    // element.classList.add("background_pink");
    // element.classList.remove("blue");
    element.addEventListener('click', function(){
        this.classList.toggle('background_pink');
    });
};

window.onload = operateCSS;
