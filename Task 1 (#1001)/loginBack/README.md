Steps to Start the Project

1. Open a new terminal window.
2. Navigate to the project directory: Execute cd loginback in your terminal.
3. Install project dependencies: Run npm install to install the dependencies listed in your package.json file.
4. Start the server: Execute node index.js to start a new server that connects to your MongoDB Atlas database and handles incoming requests and responses.
5. Access the login interface: Open the index.html file located in the Login_v1 folder in your web browser.

Testing

1. Enter your login credentials:
 Email: admin@gmail.com //for testing purposes.
 Password: admin123
2. Validation results:
 Invalid Email: If the entered email isn't found in the database, an alert box will display "Invalid Email".
 Invalid Password: If the password is incorrect, an alert box will show "Invalid Password".
 Valid User: When both email and password are correct, an alert box will display "Valid User", allowing you to proceed to other pages.