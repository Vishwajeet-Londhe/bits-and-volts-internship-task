# User Management Backend - README

## Setup Instructions

### Prerequisites
- Node.js v14+
- MongoDB

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables in `.env`:
```env
MONGODB_URI=mongodb://127.0.0.1:27017/user-management
PORT=5000
NODE_ENV=development
JWT_SECRET=your_secret_key
```

3. Start the server:
```bash
npm run dev
```

### API Endpoints

- GET `/api/users` - Get all users with pagination
- GET `/api/users/:id` - Get user by ID
- POST `/api/users` - Create user
- PUT `/api/users/:id` - Update user
- DELETE `/api/users/:id` - Delete user
- GET `/api/users/search/query` - Search users
- GET `/api/users/export/csv` - Export to CSV

### Database Schema

**User Model:**
- fullName (String, required)
- email (String, required, unique)
- mobile (String, required)
- gender (String, enum: M, F, Other)
- status (String, default: Active)
- location (String)
- timestamps (createdAt, updatedAt)
