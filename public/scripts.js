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
    document.getElementById("rpsls-label").innerText = "Play Rock, Paper, Scissors, Lizard, Spock";
    document.getElementById("option-3").style.visibility = "hidden";
    document.getElementById("option-4").style.visibility = "hidden";
    document.getElementById("option-5").style.visibility = "hidden";
    document.getElementById("rules").style.visibility = "hidden";
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
    
    
    if (timesClicked !== 0 && document.getElementById("rps-label").innerText !== "Play Rock, Paper, Scissors"){
        play(1);
    } else {
    document.getElementById("title").innerText="Rock, Paper, Scissors";
    timesClicked++;
    if (document.getElementById("option").checked = true){
    document.getElementById("rps-label").style.visibility = "hidden";
    document.getElementById("rpsls-label").innerText = "Rock";
    document.getElementById("option-3").innerText = 'Paper';
    document.getElementById("option-3").style.visibility = "visible";
    document.getElementById("option-4").innerText = 'Scissors';
    document.getElementById("option-4").style.visibility = "visible";
   } else{
    
   }
}
}

//a function that presents options for rpsls
function playRpsls(){
    
    if (timesClicked !== 0 && document.getElementById("rpsls-label").innerText !== "Play Rock, Paper, Scissors, Lizard, Spock"){
        play(2);
    } else {
    document.getElementById("title").innerText="Rock, Paper, Scissors, Lizard, Spock";
   timesClicked++;
    if (document.getElementById("option").checked = true){
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
       } else{
        //random play
       }
    
}}

async function play(shot){

//determined if rps or rpsls is being played
const options = ["rock/", "paper/", "scissors/", "lizard/", "spock/"]
if (document.getElementById("title") === "Rock, Paper, Scissors"){
 const endpoint = `/app/rps/play/${options[shot-1]}`
 const url = document.baseURI.endpoint
 await fetch(url).then(function(response){
    
    return response.json();
 }).then(function(result){
    document.getElementById("title") = Test;
 })
}

if (document.getElementById("title") === "Rock, Paper, Scissors, Lizard, Spock"){
    const endpoint = `/app/rpsls/play/${options[shot-1]}`
    const url = document.baseURI.endpoint
    await fetch(url).then(function(response){
       
       return response.json();
    }).then(function(result){
       document.getElementById("title") = Test;
    })
}
}