// Your code goes here

// Event-1 logo mouseenter

const logo =document.querySelector(".logo-heading");
logo.addEventListener('mouseenter',(e)=>{
    e.target.style.fontSize="5em";
    e.target.style.transform = "rotateY(-360deg)";
    e.target.style.transitionDuration = "1000ms";
    e.target.style.color = "red";
});

// Event-2 click
 const h2 = document.querySelector('h2');
 h2.addEventListener('click', (e) =>{
 e.target.style.color = 'blue';
 });

 
 // Event-3 dblclick
 const mapImage = document.querySelector('.content-section img');
 mapImage.addEventListener('dblclick', event => mapImage.style.border = '12px dashed #17A2B8');

// Event-4 mouseleave
const Button = document.querySelector(".btn");
Button.addEventListener("mouseleave", () => {
Button.style.background= 'red';
});

// Event-5 resize
 const navBar = document.querySelector('.main-navigation');
 window.addEventListener('resize', () => {
 navBar.style.background = '#00FFFF';  // aqua color
 
});

// Event-6 mouseover
const navMenu = document.querySelector('.main-navigation a');
navMenu.addEventListener("mouseover", () => {
navMenu.style.color = "#00FF00"; // lime color
navMenu.style.fontSize ='5em';
});
  
// Event-7 mousedown

const myP = document.querySelector("p");
myP.addEventListener("mousedown", ()=> {
myP.style.color = "#FFA500"; // orange color 
});

// Event-8 mouseUp
const mP = document.querySelector("p");
mP.addEventListener("mouseup", ()=> {
mP.style.color = "green";
});


// Event-9 Stop propagation
const body = document.querySelector("body");
body.addEventListener("click", () => {
body.style.backgroundColor = "pink"; // pink color
});

//Event-10 wheel

const wheelScrl = document.querySelector('html');
wheelScrl.addEventListener('wheel', () => {
wheelScrl.style.backgroundColor = 'red';
});


// stop navigation items from refreshing page
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
link.addEventListener('click', event => {
 event.preventDefault();
 event.stopPropagation();
 });
});


