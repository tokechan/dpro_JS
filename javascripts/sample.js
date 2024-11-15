function addElement() {
    const parentElement = document.getElementsByTagName("div")[0];
    const target = document.getElementsByTagName("h1")[0];
    parentElement.removeChild(target);
};

window.onload = addElement;


function addLink() {
    const element = document.createElement("a");
    element.setAttribute("href", "https://apple.com");
    element.innerText ="What is this?";
    const parentElement = document.getElementsByTagName("div")[0];
    parentElement.appendChild(element);
};


function removeLink() {
    const link = document.getElementsByTagName("a")[0];
    link.removeAttribute("href");
}


window.onload = function() {
    addLink();
    removeLink();
}