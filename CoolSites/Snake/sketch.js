let Width = 100
let Height = 100
let score = document.getElementById("Score");


const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = canvas.height = 100 * 3;
const ctx = canvas.getContext("2d");


//  createCnvas(Width, Height);


  //strokeWeight(2)

//let appleX = Math.floor(Math.random() * (Width - 1) + 1)

//let appleY = Math.floor(Math.random() * (Height - 1) + 1)

let snakeX = [Width / 2]
let snakeY = [Height / 2]
let appleX = Math.floor(Math.random() * (Width - 1) + 1)
let appleY = Math.floor(Math.random() * (Height - 1) + 1)
let snakeLength = 1
let direction = 'no'
let hasLost = false
let isTurn = true
let frame = 0

let Size = 1

function draw() {
//alert(frame)
frame += 1
requestAnimationFrame(draw);
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  
  ctx.fillStyle = "rgb(0, 0, 0)";

  for (i = snakeLength - 1; i >= 0; i--) {
    if(isTurn == true){
    if(i == snakeLength - 1){
      if (snakeX[i] == undefined){
        snakeX[i] = snakeX[i-1]
        snakeY[i] = snakeY[i-1]
      }
    }
    else{
      if(hasLost == false){
      snakeX[i+1] = snakeX[i]
      snakeY[i+1] = snakeY[i]
      }
    }
    }
    
  
    if(i == 0){
      if(isTurn == true){
      if(direction == 'Up'){
        snakeY[i] = snakeY[i] - 1
      }
      if(direction == 'Right'){
        snakeX[i] = snakeX[i] + 1
      }
      if(direction == 'Left'){
        snakeX[i] = snakeX[i] - 1
      }
      if(direction == 'Down'){
        snakeY[i] = snakeY[i] + 1
      }
    setTimeout(() => {
      isTurn = true
}, 30);
    isTurn = false
      }
  }
    //point(snakeX[i], snakeY[i])
	ctx.fillRect(snakeX[i]* 3, snakeY[i]* 3, 3, 3)
    if(i > 1){
    if(snakeX[i] == snakeX[0] && snakeY[i] == snakeY[0] && direction != 'no'){
      direction = 'Stop'
      score.innerHTML = 'Snake GAME OVER Score: ' + (snakeLength - 1)
      hasLost = true
    }
    }
    if(snakeX[0] >= Width || snakeY[0] >= Height || snakeX[0] <= 0 || snakeY[0] <= 0){
      direction = 'Stop'
      hasLost = true
      score.innerHTML = 'Snake GAME OVER Score: ' + (snakeLength - 1)
    }
  }
  
 ctx.fillStyle = "rgb(255, 0, 0)";
ctx.fillRect(appleX* 3, appleY* 3, 3, 3)

  //point(appleX, appleY)
//alert("X: " + appleX + " Y: " + appleY)

//alert("X: " + snakeX[0] + " Y: " + snakeY[0])

  if(snakeX[0] == appleX && snakeY[0] == appleY){
    appleX = Math.floor(Math.random() * (Width - 1) + 1)
    appleY = Math.floor(Math.random() * (Height - 1) + 1)
    snakeLength++
    score.innerHTML = 'Snake &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Score: ' + (snakeLength - 1)
  }
}


document.addEventListener('keydown', (event) => {
  var name = event.key;
  if(hasLost == false){
  if (name === "ArrowUp" && direction != 'Down'){
    direction = 'Up'
  }
  if (name === "ArrowDown" && direction != 'Up'){
    direction = 'Down'
  }
  if (name === "ArrowRight" && direction != 'Left'){
    direction = 'Right'
  }
  if (name === "ArrowLeft" && direction != 'Right'){
    direction = 'Left'
  }
  if (name === "Enter"){
    snakeLength++
  }
  }
  else{direction = 'Stop'
if (name === "Enter"){
    location.reload()
  }}
}
                         
                         )

setInterval(draw, 10)