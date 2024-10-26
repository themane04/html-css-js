# HTML/CSS/JavaScript

Ah yes...pure HTML/CSS and JavaScript are just things that are innvideble as a programmer. Throught my apprenticeship I had the opporutinty to create some projects with these technologies at my school and at my first company as a first project.

> [!NOTE]
> You can visit and view the projects directly in the browser they are all static websites, but if you want to test the contact form for the WardrobeGenius project you will have to set up the node server first.

## Setup for the Backend Server for WardrobeGenius
### Clone the Repository
First, clone the project repository to your local machine using Git:
```
git clone git@github.com:themane04/html-css-js.git
cd html-css-js/wardrobegenius
```
### Install Dependencies
Navigate to the project directory and install the necessary Node.js dependencies:
```
cd backend_for_form
npm install
```
### Create a .env file
To enable email functionality from the contact form, create a .env file in the *backend_for_form directory* with the following entries:
```
EMAIL_USER = 'your_email'
EMAIL_PASS = 'your_password'
```
* *your_email:* This is your email address from which the form data will be sent.
* *your_password:* Use the App-password generated by your email service, especially if you have 2-Factor Authentication (2FA) enabled.

### Start the Node Server
To launch the Node server which manages the contact form, run:
```
node server.js
```
### Open the Website
Open the main index.html file and navigate to the WardrobeGenius project from the list.
