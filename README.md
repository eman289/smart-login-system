# Project Name: Simple Login System

## Description

This project is a simple login system implemented using JavaScript. It consists of three pages: a signup page, a sign-in page, and a home page that displays a personalized welcome message for the user.

The signup page allows users to create an account by providing their name, email, and password. The entered information is validated, and upon successful signup, the user's data is stored locally.

The sign-in page verifies user credentials against the stored account information. If the provided email and password match an existing user, the user is directed to the home page.

The home page displays a welcome message using the user's name retrieved from local storage. Users can also log out from the home page, which redirects them to the sign-in page.

## Technologies Used

- HTML
- CSS
- JavaScript

## Project Structure

The project consists of the following files:

1. `index.html`: The main entry point for the sign-in page.
2. `signup.html`: Page for user registration.
3. `home.html`: Page displaying the welcome message for authenticated users.

## Usage

1. Click the "Sign Up" link on the sign-in page to access the registration page.
2. Fill out the registration form and click "Sign Up" to create an account.
3. Click the "Log in" link to access the sign-in page.
4. Use the email and password you used to log in.
5. After logging in, you'll be redirected to the home page, where your name will be displayed in the welcome message.
6. Click the "Log Out" button on the home page to log out and return to the sign-in page.

## GitHub Pages

The project is hosted on GitHub Pages. You can access it [here](https://eman289.github.io/smart-login-system/).

## Note

This project's functionality is basic and might not cover all security and validation aspects required for a production-level application. It's recommended to enhance security measures and error handling for a real-world deployment.
