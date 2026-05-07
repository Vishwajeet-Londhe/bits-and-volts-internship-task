import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { userAPI } from '../services/api';
import { showSuccess, showError } from '../components/Toast';
import { validateUserForm } from '../utils/validation';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import Spinner from '../components/Spinner';
import '../styles/FormPage.css';

const EditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    gender: '',
    status: 'Active',
    location: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  const genderOptions = [
    { value: 'M', label: 'Male' },
    { value: 'F', label: 'Female' },
    { value: 'Other', label: 'Other' },
  ];

  const statusOptions = [
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' },
  ];

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setInitialLoading(true);
        const response = await userAPI.getUserById(id);
        setFormData(response.data.data);
      } catch (error) {
        showError('Failed to fetch user');
        navigate('/');
      } finally {
        setInitialLoading(false);
      }
    };
    fetchUser();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { isValid, errors: validationErrors } = validateUserForm(formData);
    
    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      await userAPI.updateUser(id, formData);
      showSuccess('User updated successfully');
      navigate('/');
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to update user';
      showError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
    return <Spinner />;
  }

  return (
    <div className="form-page">
      <div className="form-container">
        <h2>Edit User</h2>
        
        <form onSubmit={handleSubmit} className="user-form">
          <div className="form-row">
            <Input
              label="Full Name"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              error={errors.fullName}
            />
            <Input
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              error={errors.email}
            />
          </div>

          <div className="form-row">
            <Input
              label="Mobile Number"
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter 10-digit mobile number"
              error={errors.mobile}
            />
            <Select
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              options={genderOptions}
              error={errors.gender}
            />
          </div>

          <div className="form-row">
            <Select
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              options={statusOptions}
              error={errors.status}
            />
            <Input
              label="Location"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location (optional)"
              error={errors.location}
            />
          </div>

          <div className="form-actions">
            <Button
              type="submit"
              variant="primary"
              disabled={loading}
            >
              {loading ? 'Updating...' : 'Update User'}
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => navigate('/')}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
