var score1 = document.querySelector('.score1'); //emp
var score2 = document.querySelector('.score2'); //syn
var score3 = document.querySelector('.score3'); //bo
var score4 = document.querySelector('.score4'); //loa
var totevent = document.querySelector('.event_para');
var event_header = document.querySelector('.event_header');

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://boh.froshtiet.com/mentorsonly/score');
ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText); 
    console.log(ourData.clans[0].name);
    for(let i=0; i<4; i++){
        if(ourData.clans[i].name === "theEmpire") score1.textContent = ourData.clans[i].score;
        else if(ourData.clans[i].name === "theSyndicate") score2.textContent = ourData.clans[i].score;
        else if(ourData.clans[i].name === "blackOrder") score3.textContent = ourData.clans[i].score;
        else if(ourData.clans[i].name === "theLeagueOfAssassins") score4.textContent = ourData.clans[i].score;
    }
    for(var i=0; i<ourData.events.length; i++){
        event_header.innerHTML += "<h1 class='event-head-js'>"+ ourData.events[i].header_name + "</h1>"
    }
    for(var i=0; i<ourData.events.length; i++){
        totevent.innerHTML += "<a target=”_blank” href=" +ourData.events[i].link + ">" + ourData.events[i].name + "</a>"
    }
};


ourRequest.send();

// header_name ka data send krna hai