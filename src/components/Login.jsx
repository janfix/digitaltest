import React, { useState } from 'react';

    const Login = ({ setAuthenticated }) => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const handleLogin = () => {
        if (email === 'jean.philippe.riviere@gmail.com' && password === 'vimaju') {
          setAuthenticated(true);
        } else {
          alert('Invalid credentials');
        }
      };

      return (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="card p-4 shadow">
            <h2 className="mb-4">Login</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control mb-3"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control mb-3"
            />
            <button onClick={handleLogin} className="btn btn-primary w-100">
              Login
            </button>
          </div>
        </div>
      );
    };

    export default Login;
