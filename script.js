// Select form and table elements
const visitForm = document.getElementById('visitForm');
const visitTableBody = document.querySelector('#visitTable tbody');
const showVisitLogButton = document.getElementById('ShowVisitLog');
const clearAllButton = document.getElementById('clearAllButton');

// Handle form submission
visitForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const customerName = document.getElementById('customerName').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const visitDate = document.getElementById('visitDate').value;
    const visitTime = document.getElementById('visitTime').value;
    const visitIssue = document.getElementById('visitIssue').value;
    const visitOutcome = document.getElementById('visitOutcome').value;

    const visit = { customerName, customerEmail, customerPhone, visitDate, visitTime, visitIssue, visitOutcome };

    // Add visit to table
    addVisitToTable(visit);

    // Save visit to localStorage
    saveVisitToLocalStorage(visit);

    // Reset form
    visitForm.reset();

    // Open visit.html in a new window
    window.open('visit.html', '_blank');
});

// Function to add visit to the table
function addVisitToTable(visit) {
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${visit.customerName}</td>
        <td>${visit.customerEmail}</td>
        <td>${visit.customerPhone}</td>
        <td>${visit.visitDate}</td>
        <td>${visit.visitTime}</td>
        <td>${visit.visitIssue}</td>
        <td>${visit.visitOutcome}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    // Handle delete button click with confirmation
    row.querySelector('.delete-btn').addEventListener('click', function () {
        if (confirm('Are you sure you want to delete this visit?')) {
            row.remove();
            deleteVisitFromLocalStorage(visit);
        }
    });

    visitTableBody.appendChild(row);
}

// Function to save visit to localStorage
function saveVisitToLocalStorage(visit) {
    let visits = JSON.parse(localStorage.getItem('visits')) || [];
    visits.push(visit);
    localStorage.setItem('visits', JSON.stringify(visits));
}

// Function to delete visit from localStorage
function deleteVisitFromLocalStorage(visitToDelete) {
    let visits = JSON.parse(localStorage.getItem('visits')) || [];
    visits = visits.filter(visit => 
        visit.customerName !== visitToDelete.customerName || 
        visit.customerEmail !== visitToDelete.customerEmail ||
        visit.customerPhone !== visitToDelete.customerPhone ||
        visit.visitDate !== visitToDelete.visitDate ||
        visit.visitTime !== visitToDelete.visitTime
    );
    localStorage.setItem('visits', JSON.stringify(visits));
}

// Handle "Show Visit Log" button click
showVisitLogButton.addEventListener('click', function () {
    window.open('visit.html', '_blank');
});

// Handle clear all button click
clearAllButton.addEventListener('click', function () {
    if (confirm('Are you sure you want to clear all visits?')) {
        visitTableBody.innerHTML = '';
        localStorage.removeItem('visits');
    }
});