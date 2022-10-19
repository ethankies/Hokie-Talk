//This method will change the theme from light to dark or vice-versa
//depending on when the user clicks the toggle button
function swapTheme(){
    if (document.documentElement.getAttribute("data-theme") == "light"){
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("light-mode", 'dark');
    }
    else{
        document.documentElement.setAttribute("data-theme", "light");
        window.localStorage.setItem("light-mode", 'light');
    }
}

//this function sets the theme on page load
function setTheme(){
    document.documentElement.setAttribute("data-theme", window.localStorage.getItem('light-mode'));
}

//detects page load to set the theme
//also does a check to see if the local storage
//even has a value. If it doesn't it creates one
window.addEventListener('load', () => {
    if (window.localStorage.getItem('light-mode')){
        if(window.localStorage.getItem("light-mode") == 'dark'){
            document.getElementById('theme-switch-checkbox').checked = true;
        }
        setTheme();
    }
    else{
        window.localStorage.setItem("light-mode", 'dark');
        
    }
})
