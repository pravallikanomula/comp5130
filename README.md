
Full-Stack Estate Application

Overview

A comprehensive web application for real estate listings. Users can register, log in, create posts, and interact with other users through real-time chat. The app is responsive and optimized for various screen sizes, providing a seamless experience across devices.

Features

User authentication and role-based authorization.

Create, read, update, and delete (CRUD) operations for posts.

Real-time chat and notifications.

Responsive design with support for major browsers.

Secure API integration using HTTPS and JWT authentication.

Installation

Prerequisites

Node.js (v16+)

npm (v8+)

MongoDB instance

Steps

Clone the repository:

git clone <repository_url>
cd <project_directory>

Install dependencies:

npm install

Configure environment variables:

Create a .env file in the root directory with the following:

MONGO_URI=<your_mongo_connection_string>
JWT_SECRET=<your_secret_key>
PORT=8800

Start the backend server:

npm start

Start the frontend development server:

npm run dev

Usage

Access the app at https://localhost:5173.

Register or log in to explore features.

Create new posts, interact with other users, and explore listings.

System Requirements

Browser: Chrome, Firefox, Edge, or Safari (latest versions)

OS: Windows 10+, macOS 11+, Linux (Ubuntu 20.04+)

Known Issues

Minor responsiveness issues on older Safari versions.

Notifications may delay under high traffic.

Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

License

This project is licensed under the MIT License. See LICENSE for more details.

