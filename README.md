# Hotel Reservation System (Node JS, mongoDB, Express JS)

# Hotel Reservation System (Node.js, MongoDB, Express.js)

The Hotel Reservation System is a robust backend application designed to manage hotel operations and bookings. Built using Node.js, Express.js, and MongoDB, this project provides a comprehensive set of APIs for hotel management and reservation processes.

## Project Structure

1. **Server Setup**
   - The main `index.js` file initializes the Express server and connects to MongoDB.
   - Middleware such as `cors`, `cookieParser`, and `express.json()` are configured.
   - API routes are defined and connected to their respective route handlers.

2. **Database Models**
   - `Hotel.js`: Defines the schema for hotel information including name, type, location, rooms, and pricing.
   - `Room.js`: Outlines the structure for room data, including title, price, capacity, and availability dates.
   - `User.js`: (Not shown in the context, but likely exists) Would define user data structure for authentication.

3. **API Routes**
   - `auth.js`: Handles user authentication routes (login, register).
   - `user.js`: Manages user-related operations.
   - `hotels.js`: Deals with hotel CRUD operations and searches.
   - `rooms.js`: Handles room-related operations including creation and availability updates.

4. **Controllers**
   - `room.js`: Contains logic for room operations such as:
     - `createRoom`: Adds a new room to a specific hotel.
     - `updateRoomAvailability`: Updates the availability of a room for specific dates.

5. **Error Handling**
   - A custom error handling utility is implemented in `utils/error.js`.
   - Controllers use this utility to create and pass errors to the next middleware.

## Key Features

1. **Hotel Management**
   - Add, update, delete, and retrieve hotel information.
   - Associate rooms with specific hotels.

2. **Room Management**
   - Create rooms for hotels with details like price, capacity, and description.
   - Manage room availability for specific dates.

3. **Booking System**
   - Allow users to check room availability for desired dates.
   - Process room bookings and update availability accordingly.

4. **User Authentication**
   - Secure routes using authentication middleware.
   - Implement user registration and login functionality.

5. **Error Handling**
   - Centralized error handling for consistent error responses across the API.

## Getting Started

To set up and run this Hotel Reservation System backend:

1. Clone the repository to your local machine.
2. Install dependencies by running `npm install` in the project root.
3. Create a `.env` file in the root directory and add the following:
   ```
   PORT=3000
   URI=your_mongodb_connection_string
   ```
4. Start the server by running `node index.js` or `npm start` (if configured in package.json).

## API Endpoints

- **Auth:**
  - POST `/api/auth/register`: Register a new user
  - POST `/api/auth/login`: User login

- **Hotels:**
  - GET `/api/hotels`: Retrieve all hotels
  - POST `/api/hotels`: Add a new hotel
  - GET `/api/hotels/:id`: Get a specific hotel
  - PUT `/api/hotels/:id`: Update a hotel
  - DELETE `/api/hotels/:id`: Delete a hotel

- **Rooms:**
  - POST `/api/rooms/:hotelid`: Create a new room for a specific hotel
  - PUT `/api/rooms/availability/:id`: Update room availability

- **Users:** (Endpoints not shown in context, but likely include)
  - GET `/api/users/:id`: Get user information
  - PUT `/api/users/:id`: Update user information
  - DELETE `/api/users/:id`: Delete a user

## Conclusion

This Node.js-based Hotel Reservation System backend provides a solid foundation for managing hotel operations, room bookings, and user interactions. It offers scalability and flexibility, allowing for easy integration with various frontend applications or expansion of features as needed.
