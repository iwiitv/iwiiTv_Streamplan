// script.js

// Highlight the current day in the table
function highlightCurrentDay() {
    const daysOfWeek = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    const today = new Date().getDay();
    const todayName = daysOfWeek[today];

    // Find the row matching today's name and add the 'current-day' class
    const rows = document.querySelectorAll("#schedule-body tr");
    rows.forEach(row => {
        if (row.dataset.day === todayName) {
            row.classList.add("current-day");
        }
    });
}

// Add a new stream to the schedule dynamically
function addStream(day, time, game, notes) {
    const tbody = document.getElementById("schedule-body");

    // Create a new table row
    const newRow = document.createElement("tr");
    newRow.dataset.day = day;

    // Add table cells for the new stream
    newRow.innerHTML = `
        <td>${day}</td>
        <td>${time}</td>
        <td>${game}</td>
        <td>${notes}</td>
    `;

    // Append the new row to the table
    tbody.appendChild(newRow);
}

// Run the function to highlight today's row
highlightCurrentDay();

// Example: Add a new stream dynamically (can be done in the browser console too)
addStream("Samstag", "16:00 - 18:00", "Dark Souls", "Blind Run");
