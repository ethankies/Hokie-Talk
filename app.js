function swapTheme(){
    if (document.documentElement.getAttribute("data-theme") == "light"){
        document.documentElement.setAttribute("data-theme", "dark");
    }
    else{
        document.documentElement.setAttribute("data-theme", "light");
    }
}

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
