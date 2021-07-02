
const toggleTheme = () => {
	let pageContent = document.body;
	let card = document.getElementsByClassName("card");
	for (let i = 0; i < card.length; i++) {
		card[i].classList.toggle("dark-card");
		card[i].classList.toggle("light")
	}
	pageContent.classList.toggle("dark-mode");
	toggleButton()

	console.log("theme changed")
}


const toggleButton = () => {
	let button = document.getElementById("toggleButton");
	button.classList.toggle("light-icon");
	if (button.innerHTML === "dark_mode") {
		document.getElementById("toggleButton").innerHTML = "light_mode"
	} else {
		document.getElementById("toggleButton").innerHTML = "dark_mode"
	}
}


window.onload = () => {
	document.getElementById("toggleButton").innerHTML = "dark_mode"
}
