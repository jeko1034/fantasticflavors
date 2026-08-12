let de_nav = document.getElementById("bars");
document.querySelectorAll(".nav-items").forEach(el => el.addEventListener("click", navigation))

de_nav.addEventListener("click", ShowHide);
// console.log(nav_items);


if (window.screen.width < 960){
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