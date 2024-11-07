import React from 'react';
    import { useNavigate } from 'react-router-dom';

    const Header = ({ setAuthenticated }) => {
      const navigate = useNavigate();

      const handleLogout = () => {
        setAuthenticated(false);
        navigate('/');
      };

      return (
        <header className="bg-primary text-white p-3">
          <div className="container d-flex justify-content-between align-items-center">
            <h1 className="mb-0">Digital Assessment App</h1>
            <button onClick={handleLogout} className="btn btn-danger">Logout</button>
          </div>
        </header>
      );
    };

    export default Header;
