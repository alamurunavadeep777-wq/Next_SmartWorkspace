async function getTemp(){

let response = await fetch("http://localhost:3000/temperature");
let data = await response.json();

document.getElementById("temp").innerText = data.value;

}

async function getSound(){

let response = await fetch("http://localhost:3000/sound");
let data = await response.json();

document.getElementById("sound").innerText = data.value;

}

async function getLight(){

let response = await fetch("http://localhost:3000/light");
let data = await response.json();

document.getElementById("light").innerText = data.value;

}