const buttons = document.querySelectorAll(".task-btn");

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function (e) {
		const cardTitleId = `card-title-${i + 1}`;
		completeTask(buttons[i], e, cardTitleId);
	});
}

const clearHistoryBtn = document.getElementById("clr-history-btn");
if (clearHistoryBtn) {
	clearHistoryBtn.addEventListener("click", function () {
		const container = document.getElementById("task-complete-container");
		if (container) {
			container.innerHTML = "";
		}
	});
}
