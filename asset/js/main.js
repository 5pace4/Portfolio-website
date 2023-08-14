//typing tetxt/////////////////////////////////////////////

let words = document.querySelectorAll(".word");
words.forEach((word)=> {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter)=> {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
// console.log(maxWordIndex); //for testing purpose
words[currentWordIndex].style.opacity = "1";

let changeText = ()=> {
    // console.log(currentWordIndex); //for testing purpose
    let currentWord = words[currentWordIndex];
    let nextWord = (currentWordIndex === maxWordIndex) ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i)=> {
        setTimeout(() => {
            letter.className = "letter out";
        },i * 80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter, i)=>{
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentWordIndex = (currentWordIndex === maxWordIndex) ? 0:(currentWordIndex + 1);
};
changeText();
setInterval(changeText, 3000)


//skill progress bar linear////////////////////////////////
const spans = document.querySelectorAll('.progress-bar span');

spans.forEach((span)=> {

    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;

})

//progress bar circular////////////////////////////////////
let number = document.getElementById('number');
let counter = 0;
setInterval(()=>{
    if(counter == 65) {
        clearInterval;
    } 
    else {
        counter+=1;
        number.innerHTML = `${counter}%`
    }
}, 30)


//circle skill ///////////////////////////////////////////
const circles = document.querySelectorAll('.circle');

circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;
    
    for(let i = 0; i < dots; i++) {
        points += ` <div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
})























//mix it up project section---------------------------------
var mixer = mixitup('.portfolio-gallery');



//active menu-------------------------------------------------




let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 110;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};


//sticky nav bar-------------------------------

const toogleBtn = document.querySelector('.toogle_btn');
const toogleBtnIcon = document.querySelector('.toogle_btn i');
const dropDownmenu = document.querySelector('.dropdown-menu')


toogleBtn.onclick = function () {
    dropDownmenu.classList.toggle('open');
    const isOpen = dropDownmenu.classList.querySelector('.dropdown_menu');

    // toogleBtnIcon.classList = isOpen
    //     ? 'fa-solid fa-xmark'  
    //     : 'fa-solid fa-bars'  
}



// script.js for header responsive
// const burger = document.querySelector('.burger');
// const navLinks = document.querySelector('.nav-links');

// burger.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });




//contact secction form refresh----------------------------------->

function refreshPage() {

    alert("Form submitted successfully!");
    
    // Refresh the page after a short delay (adjust the delay as needed)
    setTimeout(function() {
        location.reload();
    }, 100); // Refresh after 2000 milliseconds (2 seconds)
    
    return false; // Prevent default form submission
}


