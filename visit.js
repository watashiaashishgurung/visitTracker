// Select table body element
const visitTableBody = document.querySelector('#visitTable tbody');
const printButton = document.getElementById('printButton');

// Load visits from localStorage and display them in the table
document.addEventListener('DOMContentLoaded', function () {
    let visits = JSON.parse(localStorage.getItem('visits')) || [];
    visits.forEach(visit => addVisitToTable(visit));
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
    `;

    visitTableBody.appendChild(row);
}

// Handle print button click
printButton.addEventListener('click', function () {
    window.print();
});