<link rel="stylesheet" href="README.css" />

# Django React Auth System

This repo contains a Django & React production level authentication functionality. It has most if not all of the features you would expect from a production level authentication feature. It has a fully functional backend with a REST API and a fully functional React frontend. It has the following fully functional features:

- Account registration with email verification/activation
- Sign in with email and password with JWT authentication
- Sign in with Google
- Sign in with Facebook
- Password reset with email verification

A live demo of the project can be found [here](https://justicenyaga.pythonanywhere.com/).

## Major Packages used in the backend

1. [Django](https://www.djangoproject.com/)
2. [Django REST Framework](https://www.django-rest-framework.org/)
3. [Django REST Framework Simple JWT](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/)
4. [Djoser](https://djoser.readthedocs.io/en/latest/)
5. [social-auth-app-django](https://python-social-auth.readthedocs.io/en/latest/configuration/django.html)

## Getting Started

### Prerequisites

- [Python 3.8](https://www.python.org/downloads/)
- [Node.js](https://nodejs.org/en/download/)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Google OAuth2 Credentials](https://developers.google.com/identity/protocols/oauth2)
- [Facebook OAuth2 Credentials](https://developers.facebook.com/docs/facebook-login/web)

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/justicenyaga/django_react_auth_system.git && cd django_react_auth_system
   ```

2. Install Python packages. It is recommended to use a virtual environment.

   ```sh
   virtualenv venv && source venv/bin/activate # Create a virtual environment and activate it
   cd backend && pip install -r requirements.txt
   ```

3. (Optional) Install npm packages. You can skip this step if you don't want to run the frontend separately as the frontend is already built and being served by the backend.

   ```sh
   cd frontend && npm install
   ```

4. Create a `.env` file in backend directory and add the variables as shown in the .env-example file. You will need to add your own values for the variables. You can optionally export the variables as environment variables to your terminal.

5. Create a PostgreSQL database and add the database credentials to the `.env` file or export them as environment variables to your terminal.

6. Run the migrations

   ```sh
   python manage.py migrate
   ```

7. Run the backend server

   ```sh
   python manage.py runserver
   ```

   This will run the backend server on [http://localhost:8000](http://localhost:8000)

8. (Optional) Run the frontend server. You can skip this step if you don't want to run the frontend separately as the frontend is already built and being served by the backend.

   ```sh
   cd frontend && npm start
   ```

   This will run the frontend server on [http://localhost:3000](http://localhost:3000)

## API Endpoints

The following endpoints are available in the backend API as per the [Djoser](https://djoser.readthedocs.io/en/latest/base_endpoints.html) documentation:

<table>
  <colgroup>
    <col style="width: 5%">
    <col style="width: 35%">
    <col style="width: 10%">
    <col style="width: 25%">
    <col style="width: 25%">
  </colgroup>
  <thead>
    <tr>
      <th>HTTP Method</th>
      <th>Endpoint</th>
      <th>Body</th>
      <th>Headers</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>POST</td>
      <td>/auth/users/</td>
      <td>email, password, re_password</td>
      <td>Content-Type: application/json</td>
      <td>Register a new user</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/auth/users/activation/</td>
      <td>uid, token</td>
      <td>Content-Type: application/json</td>
      <td>Activate a new user</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/auth/jwt/create/</td>
      <td>email, password</td>
      <td>Content-Type: application/json</td>
      <td>Obtain a JSON web token pair for a given user</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/auth/jwt/refresh/</td>
      <td>refresh</td>
      <td>Content-Type: application/json</td>
      <td>Obtain a new access token for a given user</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/auth/jwt/verify/</td>
      <td>token</td>
      <td>Content-Type: application/json</td>
      <td>Verify a given access token</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/auth/users/me/</td>
      <td></td>
      <td>Content-Type: application/json, Authorization: JWT &lt;access_token&gt;</td>
      <td>Get the current user's details</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/auth/users/reset_password/</td>
      <td>email</td>
      <td>Content-Type: application/json</td>
      <td>Send a password reset email to a given user</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/auth/users/reset_password_confirm/</td>
      <td>uid, token, new_password, re_new_password</td>
      <td>Content-Type: application/json</td>
      <td>Reset a user's password</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/auth/o/google-oauth2/?redirect_uri=http://domain.com/complete/google-oauth2/</td>
      <td></td>
      <td>Content-Type: application/json</td>
      <td>Redirect to Google OAuth2 login page</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/auth/o/facebook/?redirect_uri=http//domain.com/complete/facebook/</td>
      <td></td>
      <td>Content-Type: application/json</td>
      <td>Redirect to Facebook OAuth2 login page</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/auth/o/google-oauth2/?code=&lt;code&gt;&state=&lt;state&gt;</td>
      <td></td>
      <td>Content-Type: application/x-www-form-urlencoded</td>
      <td>Obtain a JSON web token when using Google OAuth2</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/auth/o/facebook/?code=&lt;code&gt;&state=&lt;state&gt;</td>
      <td></td>
      <td>Content-Type: application/x-www-form-urlencoded</td>
      <td>Obtain a JSON web token when using Facebook OAuth2</td>
    </tr>
  </tbody>
</table>
