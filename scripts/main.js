function resetAll() {
    localStorage.clear();
    getFirstQ();
    showPage();
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        resetAll();
    }
});

const menuButton = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
  
menuButton.addEventListener("click", function() {
if (isMenuOpen == false) {
    menuAction('on');
} else {
    menuAction('off');  
}
});

function howToReset(action) {
    if(action == 'show' && localStorage.getItem('howToReset') != 'true') {
        document.getElementById('howToReset').style.display = 'flex';
    } else if(action == 'hide') {
        document.getElementById('howToReset').style.display = 'none';
        localStorage.setItem('howToReset', 'true');
        saveLastVisit();
    }
}

let slideIndex = 0;
function slideShow() {
    let i;
    const slides = document.getElementsByClassName('slide');
    for(i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.opacity = 1;
    setTimeout(slideShow, 4000);
}
slideShow();