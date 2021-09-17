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

