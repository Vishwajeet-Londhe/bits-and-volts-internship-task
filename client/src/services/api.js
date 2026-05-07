import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// User API endpoints
export const userAPI = {
  // Get all users with pagination and search
  getUsers: (page = 1, limit = 10, search = '') => {
    return api.get('/users', {
      params: { page, limit, search },
    });
  },

  // Get single user by ID
  getUserById: (id) => {
    return api.get(`/users/${id}`);
  },

  // Create new user
  createUser: (userData) => {
    return api.post('/users', userData);
  },

  // Update user
  updateUser: (id, userData) => {
    return api.put(`/users/${id}`, userData);
  },

  // Delete user
  deleteUser: (id) => {
    return api.delete(`/users/${id}`);
  },

  // Search users
  searchUsers: (query, page = 1, limit = 10) => {
    return api.get('/users/search/query', {
      params: { q: query, page, limit },
    });
  },

  // Export to CSV
  exportToCSV: () => {
    return api.get('/users/export/csv', {
      responseType: 'blob',
    });
  },
};

export default api;
