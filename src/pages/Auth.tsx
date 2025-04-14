import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Auth.scss";

interface RegisterProps {
  register?: boolean;
}

interface FormData {
  fname: string;
  mname: string;
  lname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Auth: React.FC<RegisterProps> = ({ register }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    fname: "",
    mname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordMatch, setPasswordMatch] = useState<boolean>(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const updatedForm = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedForm);

    if (name === "confirmPassword") {
      setPasswordMatch(updatedForm.password === value);
    }
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!passwordMatch) {
      alert("Passwords do not match");
      return;
    }

    const reqBody = {
      data: {
        fname: formData.fname,
        mname: formData.mname,
        lname: formData.lname,
        email: formData.email,
        password: formData.password,
      },
      entity: "user",
    };

    console.log("Request Body:", reqBody);
    // Call API here
  };

  const handleLogin = async () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="auth-card">
        <div className="auth-content">
          {register ? (
            <section className="register-section">
              <h2>Register</h2>
              <p>Don't have an account? Create one now.</p>
              <form onSubmit={handleRegister}>
                <input
                  type="text"
                  placeholder="First Name"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Middle Name"
                  name="mname"
                  value={formData.mname}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Email address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {!passwordMatch && (
                  <p style={{ color: "red", marginTop: "-10px" }}>
                    Passwords do not match
                  </p>
                )}
                <button
                  type="submit"
                  className="button"
                >
                  Register
                </button>
              </form>
            </section>
          ) : (
            <section className="login-section">
              <h2>Login Here</h2>
              <p>Login to your account</p>
              <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button
                  onClick={() => handleLogin()}
                  type="submit"
                  className="button"
                >
                  Login
                </button>
              </form>
            </section>
          )}

          <div className="line"></div>

          {/* Toggle Button */}
          <button
            className="toggle-btn"
            onClick={() => navigate(register ? "/" : "/register")}
          >
            {register ? "Already have an account? Login" : "Create an account"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
