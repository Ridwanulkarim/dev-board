function updateDate() {
	const date = new Date();
	const dayName = date.toLocaleDateString("en-US", { weekday: "short" }) + " ,";
	const month = date.toLocaleDateString("en-US", { month: "short" });
	const day = date.getDate().toString().padStart(2, "0");
	const year = date.getFullYear();
	const fullDate = `${month} ${day} ${year}`;

	const dayElement = document.getElementById("day");
	const dateElement = document.getElementById("full-date");

	if (dayElement) {
		dayElement.textContent = dayName;
	}
	if (dateElement) {
		dateElement.textContent = fullDate;
	}
}

updateDate();