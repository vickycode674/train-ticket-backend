<br/>
<p align="center">
  <a href="https://github.com/vickycode674/train-ticket-frontend">
    <img src="your-logo-or-project-image.png" alt="Train Ticket Frontend Logo" width="150">
  </a>

  <h3 align="center">Train Ticket Booking System</h3>

  <p align="center">
    A full-stack train seat reservation system with user authentication and smart seat allocation. Built with Next.js, React, Node.js, Express, and PostgreSQL.
    <br />
    <a href="your-deployed-application-link.com"><strong>🚀 View Live Demo</strong></a>
    <br />
    <a href="https://github.com/vickycode674/train-ticket-frontend/issues">🐞 Report Issues</a>
  </p>
</p>

<p>
  This Train Seat Reservation System operates through a full-stack architecture.
  The user interacts with the frontend, built using Next.js and React, to log in, sign up, view available seats, and make reservations.
  When a user attempts to log in or sign up, the frontend sends a request to the backend API, developed with Node.js and Express.
  The backend handles user authentication, potentially using JWT for secure session management.
  For seat availability, the frontend fetches data from the backend's <code>/seats</code> endpoint.
  When a user tries to reserve seats, the frontend sends a <code>POST</code> request to the <code>/reserve</code> endpoint, including the desired number of seats.
  The backend then implements a smart seat allocation algorithm to find the best available seats (same row or nearby) based on the defined rules.
  This reservation information, linking the user to the selected seats, is stored in the PostgreSQL database.
  To cancel a reservation, the frontend calls the <code>/cancel</code> backend endpoint.
  An administrative interface on the frontend allows authorized users to trigger a <code>POST</code> request to the <code>/reset</code> endpoint on the backend, which clears all seat reservations in the database.
  All data, including user accounts, seat status, and reservation records, is persistently stored and managed within the PostgreSQL database.
  The frontend uses Axios to make asynchronous HTTP requests to the backend API endpoints to perform these actions and update the user interface accordingly.
</p>

## 🛠️ Built With

* [Next.js](https://nextjs.org/) - The React Framework for Production
* [React.js](https://react.dev/) - A JavaScript library for building user interfaces
* [Node.js](https://nodejs.org/en/) - JavaScript runtime environment (for the backend)
* [Express.js](https://expressjs.com/) - Web application framework for Node.js (for the backend)
* [PostgreSQL](https://www.postgresql.org/) - Relational database management system
* [Axios](https://axios-http.com/docs/intro) - Promise based HTTP client for the browser and node.js
* [Your CSS Framework/Library] (e.g., [Bootstrap](https://getbootstrap.com/), [Tailwind CSS](https://tailwindcss.com/))
* [bcryptjs](https://www.npmjs.com/package/bcryptjs) - For password hashing
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - For creating JWT tokens

## ⚙️ Backend Setup Instructions (Separate `backend/` folder)

Follow these steps to set up the backend locally:

1.  **Navigate to the Backend Directory:**
    ```bash
    cd backend
    ```

2.  **Install Backend Dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Environment Variables:** Create a `.env` file in the `backend/` directory and add your database connection details and JWT secret:
    ```
    DATABASE_URL=postgresql://user:password@host:port/database
    JWT_SECRET=your-secret-key
    PORT=5000 # Or your preferred port
    ```
    Replace the placeholders with your actual PostgreSQL credentials and a strong secret key.

4.  **Run Database Migrations/Setup:** (Provide instructions on how you set up your database schema - e.g., using `psql` commands or an ORM if you used one).

5.  **Run the Backend Server:**
    ```bash
    npm start
    # or
    yarn start
    ```

    The backend server should start running on the specified port (e.g., `http://localhost:5000`).

## ⚙️ Frontend Setup Instructions (Root folder)

Follow these steps to set up the frontend locally:

1.  **Navigate to the Root Directory (if not already there):**
    ```bash
    cd .. # If you are in the backend folder
    ```

2.  **Install Frontend Dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Environment Variables:** Create a `.env.local` file in the root of the project and add your backend API URL:
    ```
    NEXT_PUBLIC_API_URL=http://localhost:5000/api # Adjust if your backend runs on a different port or has a different base path
    ```

4.  **Run the Development Server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open your browser and navigate to `http://localhost:3000` to see the application.

## ✨ Working Functionalities

* **👤 User Authentication:**
    * **Sign Up:** New users can create an account.
    * **Login:** Existing users can authenticate and log in.
* **💺 Smart Seat Allocation:**
    * Users can request to book up to 7 seats.
    * The system attempts to allocate seats in the same row first.
    * If not possible, it allocates nearby seats.
    * Already reserved seats are prevented from being booked.
* **🔒 Seat Locking:**
    * Once a seat is reserved by a user, it remains locked until the user cancels the reservation or an admin resets all seats.
* **<0xF0><0x9F><0xAA><0x9E> Seat Management:**
    * Users can view the availability of seats.
    * Administrators have the ability to reset all seat reservations.

## 🗺️ Database Schema
