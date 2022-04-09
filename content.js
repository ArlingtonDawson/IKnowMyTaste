
function nodeInsertedCallback(event) {

    if (event.srcElement.ariaLabel === "Recommended Channels") {
        console.log("We Should Hide");
        event.srcElement.classList.remove("dzgehN");
        event.srcElement.className = '';
        event.srcElement.style.display = "none";
    }

    var divs = document.querySelectorAll('div[class$="find-me"]');
    console.log("Recommened: " + divs.length);

    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";
    }
};
document.addEventListener('DOMNodeInserted', nodeInsertedCallback);
