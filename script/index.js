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


function blink(key){
  key= key.toLowerCase();
  console.log(key);
  console.log(`div[data-key="${key}"]`)
  
  document.querySelector(`div[data-key="${key}"]`).style.boxShadow = "0 0 30px white";
  setTimeout(function(){
    document.querySelector(`div[data-key="${key}"]`).style.boxShadow = null;  
    console.log("fome");
  },10);
  
  
}



var lists = document.querySelectorAll('div[data-key]');
lists.forEach(function(item){
  item.addEventListener("click",function(e){
    console.log(e);
  });
});
  

document.addEventListener("keydown",function(e){
  var key = e.key;
  console.log("pressed " + key)
  document.getElementById("test").innerHTML = "TEST Success"
  if(key =='a' || key == "A"){
    console.log("played")
    clap.play();
    blink(key);
  }
  else if(key =='s' || key == "S"){
    console.log("played")
    hihat.play();
    blink(key);
  }
  else if(key =='d' || key == "D"){
    console.log("played")
    kick.play();
    blink(key);
  }
  else if(key =='f' || key == "F"){
    openhat.play();
    blink(key);
  }
  else if(key =='g' || key == "G"){
    boom.play();
    blink(key);
  }
  else if(key =='h' || key == "H"){
    ride.play()
    blink(key);
  }
  else if(key =='j' || key == "J"){
    snare.play();
    blink(key);
  }
  else if(key =='k' || key == "K"){
    tom.play();
    blink(key);
  }
  else if(key =='l' || key == "L"){
    tink.play();
    blink(key);
  }
},false);