import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UserTable.css';

const UserTable = ({ users, onDelete, loading }) => {
  const navigate = useNavigate();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!users || users.length === 0) {
    return <div className="no-data">No users found</div>;
  }

  const handleView = (id) => {
    navigate(`/users/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/users/edit/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      onDelete(id);
    }
  };

  return (
    <div className="table-responsive">
      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.gender}</td>
              <td>
                <span className={`status-badge status-${user.status.toLowerCase()}`}>
                  {user.status}
                </span>
              </td>
              <td>{user.location || '-'}</td>
              <td>
                <div className="action-buttons">
                  <button
                    className="btn-action view"
                    onClick={() => handleView(user._id)}
                    title="View"
                  >
                    👁️
                  </button>
                  <button
                    className="btn-action edit"
                    onClick={() => handleEdit(user._id)}
                    title="Edit"
                  >
                    ✏️
                  </button>
                  <button
                    className="btn-action delete"
                    onClick={() => handleDelete(user._id)}
                    title="Delete"
                  >
                    🗑️
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
