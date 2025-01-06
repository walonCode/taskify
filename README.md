# Taskify

Taskify is a powerful task management application built with React, Node.js, and Express. It helps users efficiently manage their tasks with features like real-time updates, authentication, and persistent storage.

## Features

- User Authentication (Sign Up, Login, Logout)
- Create, Read, Update, and Delete (CRUD) tasks
- Real-time task updates
- Responsive and user-friendly UI
- Data persistence with MongoDB

## Technologies Used

- **Client:** React, Redux (for state management)
- **Server:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Styling:** TailwindCss, Shadcn UI

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/walonCode/taskify.git
   cd taskify
   ```

2. **Install dependencies:**
   - For the backend:
     ```bash
     cd server
     npm install
     ```
   - For the frontend:
     ```bash
     cd ../client
     npm install
     ```

3. **Set up environment variables:**
   - Create a `.env` file in the `server` directory with the following content:
     ```env
     DATABASE_URI=""
     ACCESS_TOKEN_SECRET=""
     REFRESH_TOKEN_SECRET=""
     PORT=""
     ```

4. **Run the application:**
   - Start the backend server:
     ```bash
     cd backend
     npm run dev
     ```
   - Start the frontend development server:
     ```bash
     cd ../frontend
     npm run dev
     ```

   The client will typically run on `http://localhost:5176` and the server on `http://localhost:3000`.

## Usage

- Navigate to the homepage.
- Register or log in with your credentials.
- Add, edit, or delete tasks as needed.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any inquiries or suggestions, please contact [Mohamed Lamin Walon-Jalloh](mailto:mohamedlaminwalonjalloh@gmail.com).

