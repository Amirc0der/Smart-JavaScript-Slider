const timerlength = 7000 // Change it if you want to change the autoslide speed (in miliseconds, 10000 means 10 seconds) 
const slider = document.querySelector(".slider");
const sliderImg = slider.querySelectorAll("img");
const sliderPreviusButton = slider.querySelector(".left")
const sliderNextButton = slider.querySelector(".right")
const slider_dots_holder = slider.querySelector(".slider_dots_holder")
const sliderCount = slider.querySelectorAll("img").length - 1
const imgHolder = slider.querySelector(".imgholder")

let currentSlider = 0;
let dotsnum = sliderCount + 1;
// CreateDots function creates clickable dots based on the number of images
function CreateDots () {
	if ( dotsnum != 0 ) {
		const realId = sliderCount-(dotsnum-1)
		const newDot = document.createElement("div");
		newDot.classList.add("slider_dots");
		newDot.setAttribute("id", realId);
		newDot.setAttribute("onclick", ("sliderJump" + "(" + realId + ")") )
		slider_dots_holder.appendChild(newDot);
		dotsnum--;
		CreateDots()
	}
}
CreateDots()
// Below codes are for Next and previous butttons 
const sliderdots =  slider.querySelectorAll(".slider_dots")

function sliderShow () {
	sliderImg[currentSlider].style.opacity = "1";
	sliderdots[currentSlider].style.opacity = "1";

}
function sliderHide () {
	sliderImg[currentSlider].style.opacity = "0";
	sliderdots[currentSlider].style.opacity = "0.5";
}
function slidNext () {
	if (currentSlider < sliderCount) {
		sliderHide();
		currentSlider ++;
		sliderShow();
	}
}
function slidePrevius () {
	if (currentSlider > 0) {
		sliderHide();
		currentSlider --;
		sliderShow();
	}
}
function sliderJump(number) {
	sliderHide();
	currentSlider = number;
	sliderShow();
	resetTimer()
}

sliderPreviusButton.addEventListener("click", slidePrevius);
sliderNextButton.addEventListener("click", slidNext);
sliderShow()

// Auto Play Codes (autoplay is Optional. you can remove the below code if you do not want Autoplay)
function slideTimer () {
	if (currentSlider < sliderCount) {
		slidNext ()
		window.setTimeout (slideTimer, timerlength) 
	} else {
		sliderJump(0)
		window.setTimeout (slideTimer, timerlength) 
	}
}
window.setTimeout (slideTimer, timerlength);
function resetTimer () {	
}
