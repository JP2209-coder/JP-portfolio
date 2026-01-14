var audio = document.getElementById("audioPlayer");
var loader = document.getElementById("preloader");

function settingtoggle() {
	document.getElementById("setting-container").classList.toggle("settingactivate");
	document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow");
	document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow");
}

function playpause() {
	if (!document.getElementById("switchforsound").checked) {
		audio.pause();
	} else {
		audio.play();
	}
}

function visualmode() {
	document.body.classList.toggle("light-mode");
	document.querySelectorAll(".needtobeinvert").forEach(function (e) {
		e.classList.toggle("invertapplied");
	});
}

window.addEventListener("load", function () {
	loader.style.display = "none";
	var hey = document.querySelector(".hey");
	if (hey) hey.classList.add("popup");
});

var emptyArea = document.getElementById("emptyarea");
var mobileTogglemenu = document.getElementById("mobiletogglemenu");

function hamburgerMenu() {
	document.body.classList.toggle("stopscrolling");
	document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
	document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
	document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
	document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

function hidemenubyli() {
	document.body.classList.toggle("stopscrolling");
	document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
	document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
	document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
	document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li");
const mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

window.addEventListener("scroll", () => {
	let currentSectionId = "";

	sections.forEach(section => {
		const offsetTop = section.offsetTop;
		if (pageYOffset >= offsetTop - 200) {
			currentSectionId = section.getAttribute("id");
		}
	});

	mobilenavLi.forEach(li => {
		li.classList.remove("activeThismobiletab");
		if (li.classList.contains(currentSectionId)) {
			li.classList.add("activeThismobiletab");
		}
	});

	navLi.forEach(li => {
		li.classList.remove("activeThistab");
		if (li.classList.contains(currentSectionId)) {
			li.classList.add("activeThistab");
		}
	});
});



var mybutton = document.getElementById("backtotopbutton");

function scrollFunction() {
	if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

function scrolltoTopfunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
	scrollFunction();
};

document.addEventListener(
	"contextmenu",
	function (e) {
		if (e.target && e.target.nodeName === "IMG") {
			e.preventDefault();
		}
	},
	false
);

var Pupils = document.getElementsByClassName("footer-pupil");
var pupilsArr = Array.from(Pupils);
var pupilStartPoint = -10;
var pupilRangeX = 20;
var pupilRangeY = 15;
var mouseXStartPoint = 0;
var mouseXEndPoint = window.innerWidth;
var currentXPosition = 0;
var fracXValue = 0;
var mouseYEndPoint = window.innerHeight;
var currentYPosition = 0;
var fracYValue = 0;
var mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = e => {
	fracXValue = (currentXPosition = e.clientX - mouseXStartPoint) / mouseXRange;
	fracYValue = (currentYPosition = e.clientY) / mouseYEndPoint;

	let translateX = pupilStartPoint + fracXValue * pupilRangeX;
	let translateY = pupilStartPoint + fracYValue * pupilRangeY;

	pupilsArr.forEach(pupil => {
		pupil.style.transform = `translate(${translateX}px, ${translateY}px)`;
	});
};

const windowResize = e => {
	mouseXEndPoint = window.innerWidth;
	mouseYEndPoint = window.innerHeight;
	mouseXRange = mouseXEndPoint - mouseXStartPoint;
};

window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);