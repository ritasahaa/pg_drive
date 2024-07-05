import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import "./index.css";
import { useNavigate} from 'react-router-dom';

const Login = () => {
  const containerRef = useRef(null);

  // State for registration and login
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    number: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate=useNavigate();

  useEffect(() => {
    const container = containerRef.current;
    const handleRegisterClick = () => container.classList.add("active");
    const handleLoginClick = () => container.classList.remove("active");

    const registerButton = document.getElementById('register');
    const loginButton = document.getElementById('login');

    if (registerButton) {
      registerButton.addEventListener('click', handleRegisterClick);
    }
    if (loginButton) {
      loginButton.addEventListener('click', handleLoginClick);
    }

    return () => {
      if (registerButton) {
        registerButton.removeEventListener('click', handleRegisterClick);
      }
      if (loginButton) {
        loginButton.removeEventListener('click', handleLoginClick);
      }
    };
  }, []);

  const handleChange = (e, setState) => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e, endpoint, data) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3001/api/${endpoint}`, data);
      console.log(response.data);
      
      if(response.data){
        navigate("/bike-rental/rent");
      }

    } catch (error) {
      console.error(`Error submitting ${endpoint} data:`, error);
    }
  };


  return (
    <div className="user-main-container">
      <div className="user-container" id="user-container" ref={containerRef}>
        <Form
          title="Create Account"
          socialIcons
          onSubmit={(e) => handleSubmit(e, 'register', formData)}
          inputs={[
            { type: "text", name: "name", placeholder: "Name", value: formData.name },
            { type: "email", name: "email", placeholder: "Email", value: formData.email },
            { type: "password", name: "password", placeholder: "Password", value: formData.password },
            { type: "number", name: "number", placeholder: "Phone Number", value: formData.number }
          ]}
          handleChange={(e) => handleChange(e, setFormData)}
        />
        <Form
          title="Sign In"
          socialIcons
          onSubmit={(e) => handleSubmit(e, 'login', loginData)}
          inputs={[
            { type: "email", name: "email", placeholder: "Email", value: loginData.email },
            { type: "password", name: "password", placeholder: "Password", value: loginData.password }
          ]}
          handleChange={(e) => handleChange(e, setLoginData)}
        />
        <Toggle />
      </div>
    </div>
  );
};

const Form = ({ title, socialIcons, onSubmit, inputs, handleChange }) => (
  <div className={`user-form-container ${title === "Create Account" ? "sign-up" : "sign-in"}`}>
    <form onSubmit={onSubmit}>
      <h1>{title}</h1>
      {socialIcons && (
        <div className="social-icons">
          <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
          <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
          <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
        </div>
      )}
      <span>or use your email for {title === "Create Account" ? "registration" : "login"}</span>
      {inputs.map((input, index) => (
        <input
          key={index}
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
          value={input.value}
          onChange={handleChange}
        />
      ))}
      {title === "Sign In" && <a href="#">Forget Your Password?</a>}
      <button type="submit">{title}</button>
    </form>
  </div>
);

const Toggle = () => (
  <div className="toggle-container">
    <div className="toggle">
      <div className="toggle-panel toggle-left">
        <h1>Welcome Back!</h1>
        <p>Enter your personal details to use all of the site's features</p>
        <button className="hidden" id="login">Sign In</button>
      </div>
      <div className="toggle-panel toggle-right">
        <h1>Hello, Friend!</h1>
        <p>Register with your personal details to use all of the site's features</p>
        <button className="hidden" id="register">Sign Up</button>
      </div>
    </div>
  </div>
);

export default Login;
