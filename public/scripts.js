#!/usr/bin/env node
// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

const rps = document.getElementById("rps");
const rpsls = document.getElementById("rpsls");
const option = document.getElementById("option");
let timesClicked = 0;
//function that resets selections and interface (or reloads it)
function reset(){
    document.getElementById('option').checked =false;
    document.getElementById("rps-label").style.visibility = "visible";
    document.getElementById("rps-label").innerText = "Play Rock, Paper, Scissors";
    document.getElementById("rpsls-label").style.visibility = "visible";
    document.getElementById("rpsls-label").innerText = "Play Rock, Paper, Scissors, Lizard, Spock";
    document.getElementById("option-3").style.visibility = "hidden";
    document.getElementById("option-4").style.visibility = "hidden";
    document.getElementById("option-5").style.visibility = "hidden";
    document.getElementById("rules").style.visibility = "hidden";
    document.getElementById("result").style.visibility="hidden";
    document.getElementById("result").innerHTML = "Default"
    document.getElementById("title").innerText="Play Rock, Paper, Scissors or Rock, Paper, Scissors, Lizard, Spock!";
}


//a function that displays the rules on click
function Rules(){

    if(document.getElementById("rules").style.visibility === 'visible'){
        document.getElementById("rules").style.visibility = 'hidden';
    } else{
        document.getElementById("rules").style.visibility = "visible";
    }


}
//a function that presents options for rps
function playRps(){
    
    if (document.getElementById("option").checked = true){
    if (timesClicked !== 0 && document.getElementById("rps-label").innerText !== "Play Rock, Paper, Scissors"){
       display(play(1))
    } else {
    document.getElementById("title").innerText="Rock, Paper, Scissors";
    timesClicked++;
    
    document.getElementById("rps-label").style.visibility = "hidden";
    document.getElementById("rpsls-label").innerText = "Rock";
    document.getElementById("option-3").innerText = 'Paper';
    document.getElementById("option-3").style.visibility = "visible";
    document.getElementById("option-4").innerText = 'Scissors';
    document.getElementById("option-4").style.visibility = "visible";
   } }else{
    display(play(0))
   }
}

//a function that presents options for rpsls
function playRpsls(){
    if (document.getElementById("option").checked = true){
    if (timesClicked !== 0 && document.getElementById("rpsls-label").innerText !== "Play Rock, Paper, Scissors, Lizard, Spock"){
        display(play(2));
        //reset();
    } else {
    document.getElementById("title").innerText="Rock, Paper, Scissors, Lizard, Spock";
   timesClicked++;
    
        document.getElementById("rps-label").style.visibility = "visible";
        document.getElementById("rps-label").innerText = "Rock";
        document.getElementById("rpsls-label").style.visibility = "visible";
        document.getElementById("rpsls-label").innerText = "Paper";
        document.getElementById("option-3").innerText = 'Scissors';
        document.getElementById("option-3").style.visibility = "visible";
        document.getElementById("option-4").innerText = 'Lizard';
        document.getElementById("option-4").style.visibility = "visible";
        document.getElementById("option-5").innerText = 'Spock';
        document.getElementById("option-5").style.visibility = "visible";
       } 
    
}else{
    
            display(play(-1))
        
       }
    }

//needs work
 function play(shot){
display()
//determined if rps or rpsls is being played
const options = ["rock/", "paper/", "scissors/", "lizard/", "spock/"]
if (shot === 0){
    let url = `/app/rps`
 const response = fetch(url).then(response => response.json()).then(data => {
    
    return data;
 }).catch(error => console.error(error))
}

if (shot ===-1){
    let url = `/app/rpsls`
    const response = fetch(url).then(response => response.json()).then(data => {
      
       return data;
    }).catch(error => console.error(error))
}
if (shot === 1){
 
 let url = `/app/rps/play/${options[shot-2]}`
 const response = fetch(url).then(response => response.json()).then(data => {
    return data;
 }).catch(error => console.error(error))
}
if (shot === 2){
    
 let url = `/app/rpsls/play/${options[shot-1]}`
 const response = fetch(url).then(response => response.json()).then(data => {
    return data;
 }).catch(error => console.error(error))
}
}


function display(shot){
    //need to connect this to the play calls and display results
        document.getElementById("rps-label").style.visibility = "hidden";
        document.getElementById("rpsls-label").style.visibility = "hidden";
        document.getElementById("option-3").style.visibility = "hidden";
        document.getElementById("option-4").style.visibility = "hidden";
        document.getElementById("option-5").style.visibility = "hidden";
        document.getElementById("result").style.visibility = "visible";
        document.getElementById("result").innerHTML = `Results:    You Lost :(<br>
                                                        <div class="gap-30"></div>
                                                        Opponent: Spock<br>
                                                        <div class="gap-30"></div>
                                                        Player: Scissors<br>`
       }
