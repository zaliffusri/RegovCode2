# Question 2

This system allows users to create an account, log in, and log out, accessing a simple homepage upon login. It is built with React for the frontend, Node.js for the backend, and MySQL for the database.

## Features

- **Account Creation**: Users can create a new account.
- **Login/Logout**: Users can log in to access the homepage and log out when done.
- **Homepage Access**: Upon login, users are directed to a simple homepage.

## Technology Stack

- **Frontend**: React
- **Backend**: Node.js
- **Database**: MySQL

## Database Setup

Before running the application, set up the MySQL database using the following SQL script:

```sql
-- Database: `signup`
-- Table structure for table `login`
CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
