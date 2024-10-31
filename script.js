const menu=document.querySelector (".menu");
const NavMenu=document.querySelector (".nav-menu");

menu.addEventListener ("click", ()=> {
menu.classList.toogle("ativo");
NavMenu.classList.toogle("ativo");
})

let trilho=document.getElementById ("trilho");
let body=document.querySelector ("body");

trilho.addEventListener ("click", ()=> {
trilho.classList.toggle ("dark");
body.classList.toggle ("dark");
})