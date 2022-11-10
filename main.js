const iconoMenu = document.querySelector("#icono-menu");
       menu = document.querySelector("#menu");

iconoMenu.addEventListener ("click" , (e) => {
    menu.classList.toggle("active");
    document.bosy.classList.toggle("opacity");

    const rutaActual = e.target.getAttribute("src");

    if(rutaActual == "menu.svg"){
        e.target.setAttribute("src" , "menu2.svg");
    }else{
        e.target.setAttribute("src" , "menu.svg")
    }

})
