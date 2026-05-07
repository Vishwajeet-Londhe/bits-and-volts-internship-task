# User Management Frontend - README

## Setup Instructions

### Prerequisites
- Node.js v14+
- npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure API endpoint in `.env`:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

3. Start the development server:
```bash
npm start
```

### Build for Production

```bash
npm run build
```

### Features

- **List Page** - View all users with pagination
- **Add Page** - Create new user with form validation
- **Edit Page** - Update user information
- **View Page** - View user details
- **Search** - Real-time user search
- **Export** - Download users as CSV

### Components

- Button - Reusable button component
- Header - Navigation header
- Input - Form input with validation
- Pagination - Pagination control
- SearchBar - Search functionality
- Select - Form select dropdown
- Spinner - Loading indicator
- Toast - Notification system
- UserTable - User listing table

### Pages

- ListPage - User list with search and pagination
- AddPage - Create new user form
- EditPage - Edit user form
- ViewPage - View user details
