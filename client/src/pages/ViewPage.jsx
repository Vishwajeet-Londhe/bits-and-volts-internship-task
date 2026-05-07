import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { userAPI } from '../services/api';
import { showError } from '../components/Toast';
import Button from '../components/Button';
import Spinner from '../components/Spinner';
import '../styles/ViewPage.css';

const ViewPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await userAPI.getUserById(id);
        setUser(response.data.data);
      } catch (error) {
        showError('Failed to fetch user');
        navigate('/');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id, navigate]);

  if (loading) {
    return <Spinner />;
  }

  if (!user) {
    return <div className="no-data">User not found</div>;
  }

  return (
    <div className="view-page">
      <div className="view-container">
        <h2>User Details</h2>
        
        <div className="user-profile">
          <div className="profile-avatar">
            {user.fullName.charAt(0).toUpperCase()}
          </div>
          
          <div className="profile-info">
            <div className="info-grid">
              <div className="info-item">
                <label>Full Name:</label>
                <p>{user.fullName}</p>
              </div>
              
              <div className="info-item">
                <label>Email:</label>
                <p>{user.email}</p>
              </div>
              
              <div className="info-item">
                <label>Mobile:</label>
                <p>{user.mobile}</p>
              </div>
              
              <div className="info-item">
                <label>Gender:</label>
                <p>{user.gender}</p>
              </div>
              
              <div className="info-item">
                <label>Status:</label>
                <p>
                  <span className={`status-badge status-${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </p>
              </div>
              
              <div className="info-item">
                <label>Location:</label>
                <p>{user.location || 'N/A'}</p>
              </div>
              
              {user.createdAt && (
                <div className="info-item">
                  <label>Created At:</label>
                  <p>{new Date(user.createdAt).toLocaleDateString()}</p>
                </div>
              )}
              
              {user.updatedAt && (
                <div className="info-item">
                  <label>Updated At:</label>
                  <p>{new Date(user.updatedAt).toLocaleDateString()}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="view-actions">
          <Button
            variant="primary"
            onClick={() => navigate(`/users/edit/${user._id}`)}
          >
            ✏️ Edit User
          </Button>
          <Button
            variant="secondary"
            onClick={() => navigate('/')}
          >
            ← Back to List
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
