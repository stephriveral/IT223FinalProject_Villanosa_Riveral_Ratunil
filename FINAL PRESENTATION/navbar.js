const nav = document.getElementById("navlinks");
const menu = document.getElementById('menubutton');
const mobilemenu = document.querySelector('.mobilemenu')
window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 812px)").matches) {
    nav.classList.add("hidden");
    menu.classList.remove("hidden");
    mobilemenu.classList.remove("hidden");
  } else {
    nav.classList.remove("hidden");
    menu.classList.add("hidden");
    mobilemenu.classList.add("hidden");
  }
});

if (window.matchMedia("(max-width: 812px)").matches) {
  nav.classList.add("hidden");
  menu.classList.remove("hidden");
  mobilemenu.classList.remove("hidden");
} else {
  nav.classList.remove("hidden");
  menu.classList.add("hidden");
  mobilemenu.classList.add("hidden");
}

menu.addEventListener('click', ()=>{
    mobilemenu.classList.toggle('menu-active')
})
