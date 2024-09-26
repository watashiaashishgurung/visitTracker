document.getElementById('surveyForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const surveyData = {
        customerName: document.getElementById('customerName').value,
        visitDate: document.getElementById('visitDate').value,
        satisfactionLevel: document.getElementById('satisfactionLevel').value,
        issueResolved: document.getElementById('issueResolved').value,
        comments: document.getElementById('comments').value
    };

    // Generate PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Customer Satisfaction Survey", 20, 20);
    doc.text(`Customer Name: ${surveyData.customerName}`, 20, 30);
    doc.text(`Visit Date: ${surveyData.visitDate}`, 20, 40);
    doc.text(`Satisfaction Level: ${surveyData.satisfactionLevel}`, 20, 50);
    doc.text(`Issue Resolved: ${surveyData.issueResolved}`, 20, 60);
    doc.text(`Comments: ${surveyData.comments}`, 20, 70);

    doc.save("survey.pdf");

    // Generate CSV
    const csvContent = `data:text/csv;charset=utf-8,Customer Name,Visit Date,Satisfaction Level,Issue Resolved,Comments\n`
        + `${surveyData.customerName},${surveyData.visitDate},${surveyData.satisfactionLevel},${surveyData.issueResolved},${surveyData.comments}`;

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "survey.csv");
    document.body.appendChild(link); // Required for FF

    link.click();
    document.body.removeChild(link); // Clean up

    // Reset the form
    document.getElementById('surveyForm').reset();
});