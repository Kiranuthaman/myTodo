import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Auth.scss";
import { loginUserAPI, registerUserAPI } from "../service/userAPI";

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
  const [error, setError] = useState<string>("");

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

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
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

    try {
      const result = await registerUserAPI(reqBody);
      if (result.status === 201) {
        alert("Registration Successfull !");
        localStorage.setItem("user", JSON.stringify(result.data));
        localStorage.setItem("token", JSON.stringify(result.data.token));
        navigate("/dashboard");
      } else if (result.status === 500) {
        alert("Account exist. Please login !");
        navigate("/");
      }
    } catch (error) {
      console.error("Registeration Error:", error);
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Please fill up all fields!");
      return;
    } else {
      const reqBody = {
        email: formData.email,
        password: formData.password,
      };
      try {
        const result = await loginUserAPI(reqBody);
        console.log(result);

        if (result.status === 200) {
          localStorage.setItem("user", JSON.stringify(result.data));
          localStorage.setItem("token", JSON.stringify(result.data.token));
          navigate("/dashboard");
        } else {
          setError(result.response.data.error);
        }
      } catch (error) {
        console.error("LOGIN ERROR :", error);
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user") && localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, []);

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
                <button type="submit" className="button">
                  Register
                </button>
              </form>
            </section>
          ) : (
            <section className="login-section">
              <h2>Login Here</h2>
              <p>Login to your account</p>
              <form onSubmit={handleLogin}>
                <input
                  type="email"
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
                {error && (
                  <p
                    style={{
                      color: "red",
                      marginTop: "2px",
                      marginBottom: "20px",
                      fontSize: "0.8rem",
                    }}
                  >
                    {error}
                  </p>
                )}
                <button type="submit" className="button">
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
