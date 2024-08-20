const button = document.querySelector("#button");
const tos = document.querySelector("#tosO");
const grey = document.querySelector("#grey");

const scrollingElement = (document.scrollingElement || document.body);
let scrolling =false;

if(button != null) {button.addEventListener('mousedown', () => {
        tos.style.display = "block";
        grey.style.display = "block";

        scrolling = true;
    })
}

setInterval(() => {
    if(scrolling) scrollingElement.scrollTop -= 15;
    if(scrollingElement.scrollTop <= 0) scrolling = false;

}, 20)


const x = document.querySelector('#x');

if (x != null) {
        x.addEventListener('mousedown', () => {
        tos.style.display = "none";
        grey.style.display = "none";
    })
}

let sure = 0;
const disagree = document.querySelector("#disagree");

if (disagree != null) {
    disagree.addEventListener('mousedown', () => {
        if(sure< 5) sure++;
    })
}

var linkB = true;
setInterval(() => {
    if(sure == 1) disagree.textContent = "are you sure?";
    else if(sure == 2) disagree.textContent = "are you sure?";
    else if(sure == 3) disagree.textContent = "are you really sure?";
    else if(sure == 4) disagree.textContent = "are you certainly sure?";
    else if(sure == 5 && linkB) {
        // var link = document.createElement("This is link");
        // disagree.appendChild(link);// = "are you extremely sure?";
        // linkB = false;
        // disagree.title = "hello";
        // disagree.href = "google.com";
        var a = document.createElement('a');
        var linkText = document.createTextNode("are you extremely sure?");
        a.appendChild(linkText);
        a.title = "my title text";
        a.href = "two.html";
        disagree.textContent = "";
        disagree.appendChild(a);
        linkB = false;
    }

}, 40);