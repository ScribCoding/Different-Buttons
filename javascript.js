




//BUTTONS LIST
let buttons = document.getElementsByTagName("button");

//CLICK
let button1 = () =>{
    buttons[0].classList.toggle("lightcoral");
}


//POP BUTTON--------------------------------------
const createParticle = index =>{
    let particle = document.createElement("div");
    particle.classList.add("pop");
    return particle;

}

const createParticles = amount => {
 Array.from(Array(amount)).map((particle, index) => {
    buttons[3].appendChild(createParticle(index));
 })
}



var randomMovement = function() {
    return anime.random(-10, 10) + 'em'
};

let button4 = () => {
    createParticles(50);
    let pop = anime({
        targets: '.pop',
        translateX: randomMovement,
        translateY: randomMovement,
        rotateZ: anime.stagger([0, 90], {from: 'center', axis: 'x'}),
        
        easing: 'easeOutExpo',
        opacity: 0,
    })
    buttons[3].onclick = pop.restart;
}

//LOAD BUTTON----------------------------------------------


loadBar = document.createElement("div");
loadBar.classList.add("load");
buttons[4].appendChild(loadBar);

progressDisplay = document.createElement("p")
progressDisplay.innerHTML = "lol";
progressDisplay.classList.add("progress")
loadBar.appendChild(progressDisplay);

let loadAnimation = anime({
    targets: '.load',
    width: 200,
    easing: 'easeInOutSine',
    autoplay: false,
    update: function(anim){
        progressDisplay.innerHTML = Math.round(anim.progress)+'%'
    }
    
  });

  buttons[4].onmousedown = loadAnimation.play;
  buttons[4].onmouseup = loadAnimation.pause;
