function completeTask(button, e, card_title) {
	if (e && e.preventDefault) {
		e.preventDefault();
	}

	if (!button || button.disabled) {
		return;
	}

	const taskAssignElem = document.getElementById("task-assign-num");
	const completeTaskElem = document.getElementById("complete-task-num");

	const taskAssignNum = parseInt(taskAssignElem.innerText, 10);
	const completeTaskNum = parseInt(completeTaskElem.innerText, 10);

	let taskTitle = "";
	if (typeof card_title === "string") {
		const elem = document.getElementById(card_title);
		taskTitle = elem ? elem.innerText.trim() : card_title;
	} else if (card_title && card_title.innerText) {
		taskTitle = card_title.innerText.trim();
	} else {
		const card = button.closest(".task-card") || button.closest(".p-5");
		const h2 = card ? card.querySelector("h2") : null;
		taskTitle = h2 ? h2.innerText.trim() : "Task";
	}

	// Decrement assigned task count
	const currentTaskAssNum = taskAssignNum - 1;
	taskAssignElem.innerText =
		currentTaskAssNum < 10 && currentTaskAssNum >= 0
			? "0" + currentTaskAssNum
			: currentTaskAssNum;

	// Increment completed task count
	const currentCompleteTaskNum = completeTaskNum + 1;
	completeTaskElem.innerText = currentCompleteTaskNum;

	// Append entry to Activity Log
	const container = document.getElementById("task-complete-container");
	if (container) {
		const div = document.createElement("div");
		div.className = "w-full";
		div.innerHTML = `
			<div class="p-1 w-full">
				<p class="bg-[#F4F7FF] p-3 rounded-xl text-xs sm:text-sm text-gray-700 leading-relaxed shadow-xs">
					You have Complete The Task <span class="font-semibold text-gray-900">${taskTitle}</span> at <span class="font-medium text-blue-600">${currentTime()}</span>
				</p>
			</div>
		`;
		container.appendChild(div);
	}

	// Disable button and update styles
	button.disabled = true;
	button.classList.remove("bg-[#3752FD]", "hover:bg-blue-700", "active:scale-95", "cursor-pointer");
	button.classList.add("bg-gray-300", "text-gray-400", "cursor-not-allowed");
	button.style.backgroundColor = "#d1d5db";
	button.style.color = "#9ca3af";
	button.style.cursor = "not-allowed";

	// Show update alert
	alert("Board Updated Successfully");

	// Show completion alert when all tasks are done
	if (currentTaskAssNum === 0) {
		alert("Congrats!!! You have completed all the current task");
	}
}

function currentTime() {
	const now = new Date();
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();
	const ampm = hours >= 12 ? "PM" : "AM";

	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'

	const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
	const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

	return `${hours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
}
