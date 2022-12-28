


//BUTTONS LIST
let buttons = document.getElementsByTagName("button");

//CLICK
let button1 = () =>{
    buttons[0].classList.toggle("lightcoral");
}

//BACKGROUND--------------------------------------
let body = document.getElementById("body");
let background_change = anime({
    targets: body,
    background: [
        {value:"rgb(240, 128, 128)", duration: 5000},
        {value:"rgb(173,216,230)", duration: 5000},
        {value:"rgb(255,160,122)", duration: 5000},
        {value:"rgb(255,182,193)", duration: 5000},
        {value:"rgb(32,178,170)", duration: 5000},
    ],
    duration: 5000,
    loop: true,
    direction: "alternate",
    autoplay: true

});

//POP BUTTON--------------------------------------
const createParticle = index =>{
    let particle = document.createElement("div");
    particle.classList.add("pop");
    return particle;

}

const createParticles = amount => {
 Array.from(Array(amount)).map((particle, index) => {
    buttons[3].appendChild(createParticle(index));
 });
};



var randomMovement = function() {
    return anime.random(-10, 10) + 'em';
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


let loadBar = document.createElement("div");
loadBar.classList.add("load");
buttons[4].appendChild(loadBar);

let progressDisplay = document.createElement("p");
progressDisplay.innerHTML = "lol";
progressDisplay.classList.add("progress");
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
  let shape = document.getElementById("overflow_wrapper");
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
    buttons[6].onclick = button7_hover;
    buttons[6].onmouseleave = button7_unhover;
 //buttons[6].onmouseenter = dropdownAnimation.play;

  //SHAKE ------------------------------------------------
let bonbon = document.getElementById("bonbon");
function animate_eight(el, duration, value){
    let shakeAnimation = anime({
        targets: el,
        rotate: [
            {value: -value, duration: duration},
            {value: value, duration: duration},
        ],
        duration: 200,
        loop: true,
        easing: 'easeOutElastic(1, .8)'
  });
};

function animate_eight_bonbon(el, y){
    let popupAnimation = anime({
        targets: el,
        translateY: [
            {value:y,easing: "spring(1,100,10,0)", duration:500},
            {value:-y-48,easing: "spring(1,100,10,0)"}
        ],

       // easing: "spring(1,100,10,0)",
    });
};


    function enterButton(el){
        animate_eight(el, 100,5);
    };

    function leaveButton(el){
        animate_eight(el, 0,0);
    };

    function clickButton(el){
        animate_eight_bonbon(el, -49);
    };


    buttons[7].addEventListener('mouseenter', function(e){
        enterButton(e.target);
    });

    buttons[7].addEventListener('mouseleave', function(e){
        leaveButton(e.target);
    });

    buttons[7].addEventListener('click', function(e){
        clickButton(bonbon);
        leaveButton(e.target);
    });

      //SHAKE ------------------------------------------------

let pulse = document.getElementById("pulse_container");
let pulse_animation = anime({
    targets: pulse,
    width: 200,
    height:200,
    easing: "spring(1,300,20,0)",
    opacity: 0,
    duration: 5000,
    autoplay: false
});

buttons[8].addEventListener('click', function(){
    pulse_animation.play;
});

buttons[8].onclick = pulse_animation.restart;

//SVG PATH------------------------------------------------------
