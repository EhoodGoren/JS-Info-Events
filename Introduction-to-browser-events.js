// Hide on click
function buttonHide(){
    const textToHide = document.querySelectorAll("#text")[0];
    textToHide.hidden = true;
    console.log(textToHide);
}
const hiderButton = document.querySelectorAll("#hider")[0];
hiderButton.addEventListener("click", buttonHide);

// Hide self
const selfHideButton = document.querySelectorAll("#selfHide")[0];
selfHideButton.onclick = () => {selfHideButton.hidden = true};

// Move the ball across the field
function ballMove(event){
    const ball = document.querySelectorAll("#ball")[0];
    const field = document.querySelectorAll("#field")[0];
    let fieldCoords = this.getBoundingClientRect();

    // Ball coordinates will be the mouse's coordinates
    let ballX = event.clientX;
    let ballY = event.clientY;

    // Ball offsets from the field
    const ballOffsetLeft = ball.clientWidth/2;
    const ballOffsetTop = ball.clientHeight/2;

    // Ball center coordinates will be the mouse's coordinates
    ballX -= ballOffsetLeft;
    ballY -= ballOffsetTop;
    
    const fieldOffsetLeft = fieldCoords.x;
    const fieldOffsetTop = fieldCoords.y;
    const fieldWidth = field.clientWidth;
    const fieldHeight = field.clientHeight;

    // If the ball is outside the field on the left
    const leftMin = fieldOffsetLeft + field.clientLeft;
    if (ballX < leftMin){
        ballX = leftMin;
    }

    // If the ball is outside the field on the right
    const leftMax = fieldOffsetLeft + field.clientLeft + fieldWidth - 2*ballOffsetLeft;
    if (ballX > leftMax){
        ballX = leftMax;
    }

    // If the ball is outside the field on the top
    const topMin = fieldOffsetTop + field.clientTop;
    if (ballY < topMin){
        ballY = topMin;
    }
    
    // If the ball is outside the field on the bottom
    const topMax = fieldOffsetTop + field.clientTop + fieldHeight - 2*ballOffsetTop;
    if (ballY > topMax){
        ballY = topMax;
    }
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
}

const field = document.querySelectorAll("#field")[0];
field.addEventListener("click", ballMove);

// Create a sliding menu
function showList(){
    const list = document.querySelectorAll("#list")[0];
    if(list.style.display === "none"){
        list.style.display = "block";
        document.querySelectorAll("#menu")[0].innerText = "▼ Sweeties (click me)!"
    } else{
        list.style.display = "none";
        document.querySelectorAll("#menu")[0].innerText = "▶ Sweeties (click me)!"
    }
}
const slideMenu = document.querySelectorAll("#menu")[0];
slideMenu.addEventListener("click",showList);

// Add a closing button
const animals = document.querySelectorAll(".pane");
for (let animal of animals){
    const closeButton = document.createElement("button");
    closeButton.innerText = "[x]";
    closeButton.onclick = () => {
        animal.remove();
    }
    animal.appendChild(closeButton);
}
// Carousel
