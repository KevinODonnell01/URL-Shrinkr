# URL-Shrinkr
I've always seen applications like tinyurl and thought about their design so I decided to design my own and make a similar app called URL-Shrinkr. 
 The front-end is built using React JS, while the server and database are established with Python Flask and Firebase Database, respectively. The application is deployed on Heroku.

Client (React JS):

The primary interface is a form (Form class component) that captures a long URL and an optional preferred alias.
User input is validated; checks are made to ensure the URL is in the correct format and any provided alias is unique.
If the user doesn't specify an alias, the application employs nanoid to create a 5-character long random alias.
The new shortened URL is constructed using the base URL of the application followed by the alias.
Data about the long URL, alias, and generated URL are saved to Firebase Database.
Once the shortened URL is generated, users have the option to copy it to their clipboard.
Styling details are specified in App.css and index.css.

Server (Python Flask):

The Flask application serves the React build as static files.
When accessing the root path, the server redirects to the "/app" route, which serves the React application.
For any given path correlating to an alias, Flask interacts with Firebase to retrieve the original long URL and redirects the user to it. If the alias doesn't exist in the database, a 404 error is displayed.

Firebase Configuration:

Firebase is initialized in both the client and server side.
On the client, Firebase handles storing of the shortened URLs and corresponding original URLs.
On the server, Flask uses Firebase to fetch the original URL for redirection based on the shortened alias.

Deployment (Heroku):

The application is ready for deployment on Heroku, as evidenced by the presence of a Procfile.
Gunicorn, a WSGI server, is specified in the Procfile to serve the Flask application.
This succinct architecture facilitates an efficient URL shortening service with real-time data storage and retrieval capabilities.
