// Select table body element
const visitTableBody = document.querySelector('#visitTable tbody');
const printButton = document.getElementById('printButton');
const downloadCSVButton = document.getElementById('downloadCSVButton');

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

// Handle download CSV button click
downloadCSVButton.addEventListener('click', function () {
    let visits = JSON.parse(localStorage.getItem('visits')) || [];
    let csvContent = "data:text/csv;charset=utf-8," 
        + "Customer Name,Customer Email,Customer Phone,Visit Date,Visit Time,Question or Issue,Response or Outcome\n"
        + visits.map(visit => 
            `${visit.customerName},${visit.customerEmail},${visit.customerPhone},${visit.visitDate},${visit.visitTime},${visit.visitIssue},${visit.visitOutcome}`
        ).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "visit_log.csv");
    document.body.appendChild(link); // Required for FF

    link.click();
    document.body.removeChild(link); // Clean up
});