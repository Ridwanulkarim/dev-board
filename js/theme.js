const themeButton = document.getElementById("theme-controller");

function getRandomLightColor() {
	const letters = "ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * letters.length)];
	}
	return color;
}

if (themeButton) {
	themeButton.addEventListener("click", function () {
		document.body.style.backgroundColor = getRandomLightColor();
	});
}
