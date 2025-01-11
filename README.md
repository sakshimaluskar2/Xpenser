# Project Description
Developed a responsive Expense Tracker web application using React, Redux, and CSS, enabling users to add, delete, and search expenses efficiently. Integrated features like form validation, date formatting (Moment.js), and notifications (React Toastify) for enhanced user experience. Focused on scalability, modular design, and state management to ensure a seamless and maintainable solution.

# Project Overview
I developed a responsive Expense Tracker application where users can add, edit, delete, and track their expenses in real time. The application is designed with React and Redux for managing the state, ensuring smooth updates and responsiveness. The goal was to create a simple, efficient tool that allows users to keep track of their spending

# Tech Stack
React: "I used React for building the user interface because of its component-based structure, which allowed for better code reuse and maintainability. It enabled me to break down the application into smaller, manageable pieces (like ExpenseList, ExpenseItem, etc.)."
Redux: "For state management, I used Redux to handle global application state. It was particularly useful for managing the list of expenses across various components and ensuring that updates in one part of the application were reflected across all others seamlessly."
CSS: "I used CSS for styling the application, ensuring it was responsive. I employed techniques like media queries and flexbox to ensure the application looks good on both mobile and desktop screens."
Moment.js: "To handle and format dates effectively, I used Moment.js, which simplified the process of formatting date strings and calculating the durations of expenses over time."
React Toastify: "For providing notifications and alerts, I integrated React Toastify to show success or error messages when adding, updating, or deleting expenses, improving the user experience by giving feedback for their actions

# Core Features
Adding, Editing, and Deleting Expenses: "I implemented CRUD operations (Create, Read, Update, Delete) for expenses. Users can input the expense name, amount, and date. The expense list automatically updates upon submission. I also implemented form validation to ensure the data is entered correctly before submission."
Search and Filter: "A search functionality allows users to filter expenses by name, and I also provided the ability to filter by date ranges to track expenses over different periods."
Expense Categories: "I categorized the expenses for better organization, enabling users to track different types of expenses (like food, transport, etc.)."

# Challenges 
State Management: "Managing the state for an application of this size can get complex. Initially, I started with React's local state, but as the app grew, I switched to Redux to better manage the global state, especially for expense data and user notifications."
Form Validation: "Ensuring that users entered valid data, especially for expenses (e.g., valid numbers for amount, correct date format), was a challenge. I implemented form validation checks and error handling to prevent incorrect data from being submitted."
Responsive Design: "Ensuring the application looked good on all devices was another challenge. I used CSS media queries to make the layout responsive and optimized it for mobile devices."

The project successfully allowed users to track their expenses with ease, and the real-time updates provided a smooth user experience. This project helped me gain expertise in managing state with Redux, building responsive web applications, and implementing form validation. I also learned how to deploy and maintain a live web application

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
