function completeTask(button, e, card_title) {
	e.preventDefault();

	const TaskAssignNum = parseInt(
		document.getElementById("task-assign-num").innerText
	);
	const completeTaskNum = parseInt(
		document.getElementById("complete-task-num").innerText
	);
	const taskTitle = document.getElementById(card_title).innerText;

	const currentTaskAssNum = TaskAssignNum - 1;
	document.getElementById("task-assign-num").innerText =
		currentTaskAssNum < 10 ? "0" + currentTaskAssNum : currentTaskAssNum;

	const currentCompleteTaskNum = completeTaskNum + 1;
	document.getElementById("complete-task-num").innerText = currentCompleteTaskNum;

	const container = document.getElementById("task-complete-container");
	const div = document.createElement("div");
	div.className = "w-full";
	div.innerHTML = `
        <div class="p-1 w-full">
            <p class="bg-[#F4f7FF] p-3 rounded-xl text-xs sm:text-sm text-gray-700 leading-relaxed">
              You have completed the task <span class="font-semibold text-gray-900">${taskTitle}</span> at <span class="font-medium text-blue-600">${currentTime()}</span>
            </p>
        </div>
    `;

	container.appendChild(div);

	button.style.backgroundColor = "gray";
	button.style.cursor = "not-allowed";
	button.disabled = true;

	alert("Board Updated Successfully");

	if (currentTaskAssNum === 0) {
		alert("Congrats!!! You have completed all the current tasks!");
	}
}

function currentTime() {
	let now = new Date();

	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();
	let ampm;

	if (hours >= 12) {
		ampm = "PM";
	} else {
		ampm = "AM";
	}

	if (hours > 12) {
		hours = hours - 12;
	} else if (hours === 0) {
		hours = 12;
	}

	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	return hours + ":" + minutes + ":" + seconds + " " + ampm;
}
