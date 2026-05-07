# User Management System - MERN Stack

A full-stack web application built with **MongoDB**, **Express**, **React**, and **Node.js** for managing user information with a responsive UI.

## Features

✅ **CRUD Operations** - Create, Read, Update, Delete user information  
✅ **Pagination** - Navigate through user lists with pagination support  
✅ **Search Functionality** - Search users by name or email  
✅ **CSV Export** - Export user data to CSV format  
✅ **Form Validation** - Client-side validation with error messages  
✅ **Responsive Design** - Mobile-friendly UI for desktop and mobile devices  
✅ **Multiple Routes** - List view, Add form, Edit form, and View details pages  
✅ **Component Architecture** - Modular and reusable components  
✅ **Error Handling** - Comprehensive error handling with toast notifications  

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Fast-CSV** - CSV export functionality

### Frontend
- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **React Toastify** - Notification system
- **CSS3** - Styling with responsive design

## Project Structure

```
internship/
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── userController.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
└── client/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── Button.jsx
    │   │   ├── Header.jsx
    │   │   ├── Input.jsx
    │   │   ├── Pagination.jsx
    │   │   ├── SearchBar.jsx
    │   │   ├── Select.jsx
    │   │   ├── Spinner.jsx
    │   │   ├── Toast.jsx
    │   │   └── UserTable.jsx
    │   ├── pages/
    │   │   ├── AddPage.jsx
    │   │   ├── EditPage.jsx
    │   │   ├── ListPage.jsx
    │   │   └── ViewPage.jsx
    │   ├── services/
    │   │   └── api.js
    │   ├── styles/
    │   │   ├── App.css
    │   │   ├── Button.css
    │   │   ├── FormPage.css
    │   │   ├── Header.css
    │   │   ├── Input.css
    │   │   ├── ListPage.css
    │   │   ├── Pagination.css
    │   │   ├── SearchBar.css
    │   │   ├── Select.css
    │   │   ├── Spinner.css
    │   │   ├── Toast.css
    │   │   ├── UserTable.css
    │   │   └── ViewPage.css
    │   ├── utils/
    │   │   └── validation.js
    │   ├── App.jsx
    │   ├── index.css
    │   └── index.js
    ├── .gitignore
    └── package.json
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the server directory:
```env
MONGODB_URI=mongodb://localhost:27017/user-management
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key_here
```

4. Start the backend server:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open on `http://localhost:3000`

## API Endpoints

### Users API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users with pagination |
| GET | `/api/users/:id` | Get user by ID |
| POST | `/api/users` | Create new user |
| PUT | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |
| GET | `/api/users/search/query` | Search users |
| GET | `/api/users/export/csv` | Export users to CSV |

## Usage

### Create a User
1. Click **"+ Add User"** button on the list page
2. Fill in all required fields with valid data
3. Click **"Create User"**

### Edit a User
1. Click the **Edit (✏️)** button on a user row
2. Update the fields as needed
3. Click **"Update User"**

### View User Details
1. Click the **View (👁️)** button on a user row
2. See all user information in a formatted view

### Delete a User
1. Click the **Delete (🗑️)** button on a user row
2. Confirm the deletion

### Search Users
1. Use the **Search** box at the top of the list
2. Type a user's name or email
3. Results update in real-time

### Export to CSV
1. Click **"📥 Export to CSV"** button
2. The CSV file will download automatically

## Validation Rules

- **Full Name**: 2-50 characters required
- **Email**: Valid email format required, must be unique
- **Mobile**: 10 digits required
- **Gender**: Must select M, F, or Other
- **Status**: Must select Active or Inactive
- **Location**: Optional, max 100 characters

## Features Implemented

✅ Responsive Design (Mobile/Tablet/Desktop)  
✅ Component-based Architecture  
✅ Form Validation with Error Messages  
✅ Pagination Support  
✅ Search Functionality  
✅ CSV Export  
✅ Error Handling & Notifications  
✅ Consistent File Structure  
✅ Professional UI/UX  
✅ Proper Naming Conventions  

## Deployment

### Deploy Backend (Heroku)
1. Create Heroku account and install CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Set environment variables: `heroku config:set MONGODB_URI=your_mongodb_uri`
5. Deploy: `git push heroku main`

### Deploy Frontend (Netlify)
1. Build the project: `npm run build`
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Deploy

## License

This project is open source and available under the MIT License.

## Author

Internship Assessment Task - MERN Stack Full Stack Development
