import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userAPI } from '../services/api';
import { showSuccess, showError } from '../components/Toast';
import UserTable from '../components/UserTable';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import Button from '../components/Button';
import '../styles/ListPage.css';

const ListPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers(currentPage, searchTerm);
  }, [currentPage, searchTerm]);

  const fetchUsers = async (page, search = '') => {
    try {
      setLoading(true);
      const response = await userAPI.getUsers(page, 10, search);
      setUsers(response.data.data);
      setTotalPages(response.data.pagination.totalPages);
      setTotalUsers(response.data.pagination.totalUsers);
    } catch (error) {
      showError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
    
    try {
      setLoading(true);
      if (value.trim() === '') {
        const response = await userAPI.getUsers(1, 10);
        setUsers(response.data.data);
        setTotalPages(response.data.pagination.totalPages);
        setTotalUsers(response.data.pagination.totalUsers);
      } else {
        const response = await userAPI.searchUsers(value, 1, 10);
        setUsers(response.data.data);
        setTotalPages(response.data.pagination.totalPages);
        setTotalUsers(response.data.pagination.totalResults);
      }
    } catch (error) {
      showError('Search failed');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await userAPI.deleteUser(id);
      showSuccess('User deleted successfully');
      fetchUsers(currentPage, searchTerm);
    } catch (error) {
      showError('Failed to delete user');
    }
  };

  const handleExportCSV = async () => {
    try {
      const response = await userAPI.exportToCSV();
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'users_export.csv');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      showSuccess('CSV exported successfully');
    } catch (error) {
      showError('Failed to export CSV');
    }
  };

  return (
    <div className="list-page">
      <div className="page-header">
        <h2>Users List</h2>
        <div className="header-actions">
          <Button variant="success" onClick={() => navigate('/users/add')}>
            + Add User
          </Button>
          <Button variant="secondary" onClick={handleExportCSV}>
            📥 Export to CSV
          </Button>
        </div>
      </div>

      <div className="page-content">
        <SearchBar onSearch={handleSearch} />

        <div className="stats">
          <p>Total Users: <strong>{totalUsers}</strong></p>
        </div>

        <UserTable
          users={users}
          onDelete={handleDelete}
          loading={loading}
        />

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default ListPage;
