//add animations
var boom = new Audio("sounds/boom.wav");
var clap = new Audio("sounds/clap.wav");
var hihat =  new Audio("sounds/hihat.wav");
var kick = new Audio("sounds/kick.wav");
var openhat = new Audio("sounds/openhat.wav");
var ride = new Audio("sounds/ride.wav");
var snare = new Audio("sounds/snare.wav");
var tink =  new Audio("sounds/tink.wav");
var tom =  new Audio("sounds/tom.wav");


function playSound(key){
  console.log("playing "+ key);
  switch(key){
    case 'a':
    case 'A':
      clap.play();
      break;
    case 's':
    case 'S':
      hihat.play();
      break;
    case 'd':
    case 'D':
      kick.play();
      break;
    case 'e':
    case 'E':
      openhat.play();
      break;
    case 'f':
    case 'F':
      openhat.play();
      break;
    case 'g':
    case 'G':
      boom.play();
      break;
    case 'h':
    case 'H':
      ride.play();
      break;
    case 'j':
    case 'J':
      snare.play();
      break;
    case 'k':
    case 'K':
      tom.play();
      break;
    case 'l':
    case 'L':
      tink.play();
      break;
  }
}


function blink(key){
  if(key ==='a' || key === "A" || key ==='s' || key === "S" || key ==='d' || key === "D" || key ==='f' || key === "F" || key ==='g' || key === "G" || key ==='h' || key === "H" || key ==='j' || key === "J" || key ==='k' || key === "K" || key ==='l' || key === "L"){
    key= key.toLowerCase();
    console.log(key);
    console.log(`div[data-key="${key}"]`)
    document.querySelector(`div[data-key="${key}"]`).style.boxShadow = "0 0 30px white";
    setTimeout(function(){
      document.querySelector(`div[data-key="${key}"]`).style.boxShadow = null;  

    },10); 
}
}



var lists = document.querySelectorAll('div[data-key]');
lists.forEach(function(item){
  item.addEventListener("click",function(event){
    console.log(event.path[1].getAttribute("data-key"));
    var keyPressed = event.path[1].getAttribute("data-key");
    if(keyPressed != null){
      playSound(keyPressed);
      blink(keyPressed);
    }

  });
});
  


document.addEventListener("keydown",function(e){
  var key = e.key;
  console.log("pressed " + key)
  
  playSound(key);
  blink(key);
  console.log("played "+key);

},false);