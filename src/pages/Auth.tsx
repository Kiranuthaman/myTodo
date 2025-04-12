import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Auth.scss';

interface RegisterProps {
  register?: boolean; 
}

const Auth: React.FC<RegisterProps> = ({ register }) => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="auth-card">
        <div className="auth-content">
          {/* Register Section */}
          {register ? (
            <section className="register-section">
              <h2>Register</h2>
              <p>Don't have an account? Create one now.</p>
              <form>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Middle Name" />
                <input type="text" placeholder="Last Name" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button type="submit" className="button">Register</button>
              </form>
            </section>
          ) : (
            <section className="login-section">
              <h2>Login Here</h2>
              <p>Login to your account</p>
              <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit" className="button">Login</button>
              </form>
            </section>
          )}

          <div className="line"></div>

          {/* Toggle Button */}
          <button
            className="toggle-btn"
            onClick={() => navigate(register ? '/' : '/register')}
          >
            {register ? 'Already have an account? Login' : 'Create an account'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
