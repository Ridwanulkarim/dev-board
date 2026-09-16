function updateDate() {
    const date = new Date();
    const options = { weekday: 'short' }; 
    const dayName = date.toLocaleDateString('en-US', options);
    const fullDate = date.toLocaleDateString('en-US', { 
        month: 'short', day: '2-digit', year: 'numeric' 
    });

    document.getElementById("day").textContent = dayName;
    document.getElementById("full-date").textContent = fullDate;
}

updateDate();