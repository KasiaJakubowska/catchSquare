const div = document.querySelector('div');
let divX = 150;
let divY = 50;
div.style.left = divX + "px";
div.style.top = `${divY}px`;

let drawActive = false;

let insertDivX;
let insertDivY;

div.addEventListener('mousedown', (e) => {
 div.style.backgroundColor = "pink";
 drawActive = !drawActive;
 // drawActive = true;

 insertDivX = e.offsetX;
 insertDivY = e.offsetY;
 console.log(insertDivX, insertDivY);

})

div.addEventListener('mousemove', (e) => {
 if (drawActive) {


  divX = e.clientX - insertDivX;
  divY = e.clientY - insertDivY;
  div.style.left = `${divX}px`;
  div.style.top = `${divY}px`;
 }
})

div.addEventListener('mouseup', () => {
 div.style.backgroundColor = "red";
 drawActive = !drawActive;
 // drawActive = false;
})