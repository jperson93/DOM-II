import './less/index.less'

// Your code goes here!


console.log('hello world'); 

//EVENT #1 : LOAD EVENT (WHEN WEBPAGES FIRST LOAD )
window.onload = function (event) {
    console.log(`event ${event.type} fired! Ready to go!`);


const heading = document.querySelector('h1');
console.log(heading); //check console for heading it should display it to you
heading.textContent = 'Lets Get Going!!!!'; //changec text content of header 


//EVENT #2 COPY EVENT (WHEN SOMETHING IS BEING COPIED FROM WEBPAGE ) 

window.addEventListener('copy', () => {
    navigator.clipboard.readText()
    .then(text => heading.textContent += text)
})



//EVENT #3  CLICK EVENT (SOMETHING HAPPENING WHEN YOU CLICK ON IT)

document.body.addEventListener('click', event => {
    event.target.classList.toggle('jaboris'
    )
}) // ADDS WHATS IN QUOTES (JABORIS) TO THE CLASS LIST NAME . GOES AWAY IF YOU CLICK AGAIN 



//EVENT 4 DOUBLE CLICK  (SOMETHING HAPPENS WHEN YOU DOUBLE CLICK AN OBJECT)

document.body.addEventListener('dblclick', event => 
event.target.outerHTML = '') 
//MAKES THE DOUBLE CLICKED OBJECT DISAPPEAR



//EVENT #5 MOUSEOVER 
document.body.addEventListener('mouseover', event => 
onmouseover = (event) =>  event.target.style.color = "orange");



//EVENT #6 KEYDOWN  (FUNCTIONS IF A CERTAIN KEY IS PRESSED)

window.addEventListener('keydown', event => {
console.log(event);
});

//EVENT #7 SCROLL  (FUNCTIONS IF A CERTAIN KEY IS PRESSED)

window.addEventListener('scroll', event => {
    console.log('event scoll fired!!');
    });

//EVENT #8 MOUSEMOVE (FUNCTIONS BASED ON WHERE MOUSE MOVES) 

document.body.addEventListener('mousemove', event => {
    event.target.style.background = 'red';
});

//EVENT #9 PASTE EVENT 
document.addEventListener('paste', event => {
    console.log('paste event fired');
});

//EVENT #10 CUT EVENT
document.addEventListener('paste', event => {
    console.log('cut event fired');
});
}


