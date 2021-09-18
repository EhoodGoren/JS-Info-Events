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

// Carousel
