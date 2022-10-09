function swapTheme(){
    if (document.documentElement.getAttribute("data-theme") == "light"){
        document.documentElement.setAttribute("data-theme", "dark");
    }
    else{
        document.documentElement.setAttribute("data-theme", "light");
    }
}