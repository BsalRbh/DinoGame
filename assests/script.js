const dino = document.getElementById("dino");
const bush = document.getElementById("bush");


function jump() {
  // avoid calling it more than once before animation completes.
  if (dino.classList != "jump") {
    dino.classList.add("jump");
    setTimeout(function () {
      dino.classList.remove("jump");
    }, 500);

  }

}
//when space(e.keyCode =32) is pressed ,call jump function

document.onkeydown = function (e) {
  if (e.keyCode === 32) {
    jump();
  }
};

setInterval(()=>{
    const bushY = bush.offsetLeft;
    const dinoX = dino.offsetTop+100;
    const bushX = bush.offsetTop+12;/*/adjustment due to image white space */
    console.log(bushX,dinoX);
    if(bushY>=20 && bushY<=85 && bushX<dinoX){
alert('game over')
location.reload()
    }
    },10 )
