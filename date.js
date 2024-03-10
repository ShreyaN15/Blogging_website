var currentDate = new Date();

// Get the date components
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; // Months are zero-based
var year = currentDate.getFullYear();

// Display the date in the specified format
var formattedDate = day + '/' + month + '/' + year;

// Update the content of the paragraph with id "currentDate"
document.getElementById('currentDate').innerText = 'Current Date: ' + formattedDate;
