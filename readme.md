
# Customer Tracker & Satisfaction Survey Form

## Project Overview

This project is a web application that combines a **Customer Tracker** with a **Customer Satisfaction Survey**. The application is built using **HTML**, **CSS**, and **JavaScript**. Users can input customer details such as name, contact information, and additional notes, while also capturing customer satisfaction through a simple survey form. The customer data and their satisfaction ratings are displayed dynamically on the same page.

## Features

- **Customer Tracker Form**: Users can add customer details including name, email, phone number, and notes.
- **Customer Satisfaction Survey**: Users can rate their experience or satisfaction level using a 1-5 rating system (e.g., 1 = Poor, 5 = Excellent).
- **Dynamic Data Display**: Customer details and their satisfaction ratings are displayed dynamically in a table below the form.
- **Real-time Updates**: The form automatically updates the table after submission without reloading the page.
- **Form Validation**: Basic validation ensures that required fields such as name, email, and the satisfaction rating are correctly filled out.
- **Local Storage**: (Optional enhancement) Customer data and survey responses can be saved locally on the user’s device for persistence across page reloads.

## Technologies Used

- **HTML**: For the structure of the form and table.
- **CSS**: For styling the form, buttons, table, and survey elements.
- **JavaScript**: For handling form submissions, validating inputs, and dynamically displaying the customer and survey data.

## Project Setup

### Prerequisites

You need a code editor (such as VS Code) and a web browser to run the application locally. No additional installations are required, as this project uses only HTML, CSS, and JavaScript.

### How to Run

1. Clone or download the repository.
2. Navigate to the project folder.
3. Open the `index.html` file in your web browser to view the application.
4. Start adding customers and their satisfaction ratings using the form on the web page.

### Folder Structure

```
.
├── index.html       # The main HTML file containing the form, survey, and table
├── style.css        # The CSS file for styling the form, buttons, table, and survey
├── script.js        # The JavaScript file for handling form submissions and displaying customer/survey data
└── README.md        # This README file
```

## How to Use

1. Open the **Customer Tracker & Satisfaction Survey Form** in your browser.
2. Enter customer details in the provided fields: `Name`, `Email`, `Phone Number`, and any additional `Notes`.
3. Complete the **Customer Satisfaction Survey** by selecting a rating between 1 and 5, where:
   - 1 = Poor
   - 2 = Fair
   - 3 = Good
   - 4 = Very Good
   - 5 = Excellent
4. Click the **Submit** button to add the customer details and satisfaction survey to the table.
5. The customer details along with their satisfaction rating will be dynamically displayed below the form.

## Form Fields

- **Name**: Full name of the customer (required)
- **Email**: Customer's email address (required, validated for correct format)
- **Phone Number**: Customer's contact number (optional)
- **Notes**: Any additional information about the customer (optional)
- **Customer Satisfaction Survey**: A rating system (1 to 5) to capture the customer's satisfaction level (required).

## Future Improvements

- **Edit and Delete Functionality**: Allow users to modify or remove customer data and satisfaction ratings from the table.
- **Search Functionality**: Include a search bar to filter customers by name or satisfaction rating.
- **Backend Integration**: Connect the form to a database or API to store and retrieve customer data and survey responses.
- **Responsive Design**: Enhance the user interface for a better experience on mobile devices.
- **Graphical Representation**: Add charts or graphs to display customer satisfaction trends over time.

## Contributions

If you'd like to contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed.
