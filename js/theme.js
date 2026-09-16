const button = document.getElementById("theme-controller");
const body = document.body;

function randomLightColor() {
	const letters = "ABCDEF"; 
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * letters.length)];
	}
	return color;
}

button.addEventListener("click", function () {
	body.style.backgroundColor = randomLightColor();
});
