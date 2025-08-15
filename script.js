let menu_btn1 = document.querySelector("#menu_btn1");
let menu_btn2 = document.querySelector("#menu_btn2");
let complete_menu = document.querySelector(".complete_menu");



menu_btn1.addEventListener("click", ()=>{
    complete_menu.style.display="block";
    
} );

menu_btn2.addEventListener("click", ()=>{
    complete_menu.style.display="none";
})