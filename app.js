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
        window.localStorage.setItem("light-mode", 'light');
    }
})
document.getElementById('theme-switch').addEventListener('click', swapTheme());

const ep1 = {
    "title": "Hokies Vote Caucus",
    "duration": "24",
    "description": "blah blah blah",
    "date": "10/09/2020",
    "link": "https://www.buzzsprout.com/1818832.js?artist=&container_id=buzzsprout-small-player-limit-1&limit=1&player=small",
}

function generateEpisodes(episode){
    const section = document.getElementById('episode-section');

    section.innerHTML += `<button type="button" class="collapsible">
    <div class="left-button-div">${episode.title}</div>
    <div class="right-button-div">${episode.date}</div>
</button>
<div class="faq_content">
    <div id='buzzsprout-small-player-limit-5'></div><script type='text/javascript' charset='utf-8' src='${episode.link}'></script>
    <p>${episode.description}</p>
</div>`;

}

for(let i = 0; i < 10; i++){

    generateEpisodes(ep1);
}
