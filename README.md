# Online Contact Management

## Features

<code>+</code>Authentication<br>

User can sign in to the application with their email and password.

<code>+</code>Contact Management<br>

- Users can create, update, read the contacts
- When creating a contact, users can upload the avatar image, search the location with google map api.

## Technologies

The technologies that I used here are as follows.

- Frontend
  - TypeScript
  - Nuxt.js (v3)
  - Vee-validate
  - Tailwind CSS
  - Pinia
- Backend
  - Laravel
- Database
  - MySQL

## How to start

### Run the frontend

```
cd frontend
npm install
cp .env.example .env
npm run dev
```

### Run the backend

Before running the below command, we need to create the onlinecontact schema in the mysql.

```
cd api
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan db:seed
php artisan serve
```
