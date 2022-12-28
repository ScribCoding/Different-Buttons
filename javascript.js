




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

  //SHAPE BUTTON---------------------------------------------
  shape = document.getElementById("overflow_wrapper");
  const button6 = () =>{
    shape.classList.add("overflow_wrapper_active");
    shape.classList.remove("overflow_wrapper");
  }


  //DROP DOWN ------------------------------------------------
  let dropdownAnimation = anime({
    targets: '.drop_down_menu',
    overflow: 'visible',
    autoplay: false,
    height: 100,
    translateY: 80,
    easing: 'easeInOutElastic(1, 2)'
  });

const button7_hover = () => {
    document.getElementById("drop_down_menu").classList.add("drop_down_menu_show");
    document.getElementById("drop_down_menu").classList.remove("drop_down_menu");
}

const button7_unhover = () => {
    document.getElementById("drop_down_menu").classList.remove("drop_down_menu_show");
    document.getElementById("drop_down_menu").classList.add("drop_down_menu");
}

    document.getElementById("drop_down_menu").onmouseenter = button7_hover;
    document.getElementById("drop_down_menu").onmouseleave = button7_unhover;
    buttons[6].click = button7_hover;
    buttons[6].onmouseenter = button7_hover;
    buttons[6].onmouseleave = button7_unhover;
 //buttons[6].onmouseenter = dropdownAnimation.play;
