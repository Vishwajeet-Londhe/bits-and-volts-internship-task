import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Toast from './components/Toast';
import ListPage from './pages/ListPage';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import ViewPage from './pages/ViewPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ListPage />} />
            <Route path="/users/add" element={<AddPage />} />
            <Route path="/users/edit/:id" element={<EditPage />} />
            <Route path="/users/:id" element={<ViewPage />} />
          </Routes>
        </main>
        <Toast />
      </div>
    </Router>
  );
};

export default App;
