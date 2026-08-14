let de_nav = document.getElementById("bars");
document.querySelectorAll(".nav-items").forEach(el => el.addEventListener("click", navigation))

de_nav.addEventListener("click", ShowHide);
// console.log(nav_items);


if (window.screen.width < 750){
    Menu.style.display = "none";
}

function ShowHide(){
    var Menu = document.getElementById("Menu");
    if(de_nav.classList.contains("change")){
        Menu.style.display = "none";
        de_nav.classList.remove("change");
    }else{
        Menu.style.display = "block";
        de_nav.classList.add("change");
    }
}

function navigation(){
    if(de_nav.classList.contains("change")){
        Menu.style.display = "none";
        de_nav.classList.remove("change");
    }
}

let scrollNav = document.querySelector('.scroll-nav');
let sections = Array.from(document.querySelectorAll('.article-section'));
let links = Array.from(document.querySelectorAll('.scroll-nav a'));

const setActiveLink = () => {
    const scrollPosition = window.scrollY + 140;
    let currentId = sections[0]?.id || '';

    sections.forEach((section) => {
    if (section.offsetTop <= scrollPosition) {
        currentId = section.id;
    }
    });

    links.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${currentId}`;
    link.classList.toggle('active', isActive);
    });
};

window.addEventListener('scroll', () => {
    setActiveLink();
});

window.addEventListener('load', setActiveLink);