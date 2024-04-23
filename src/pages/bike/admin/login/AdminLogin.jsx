import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../../../components/FormInput";
import "./AdminLogin.css";

const BikeAdminpageLogin = () => {
  const [loginFields, setLoginFields] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginFields;

  const handleChange = (e) => {
    setLoginFields((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginFields);
  };

  return (
    <div className="admin-login-form-container">
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          inputType="text"
          placeholder="Enter your email"
          name="email"
          value={email}
          handleChange={handleChange}
        />

        <FormInput
          label="Password"
          inputType="text"
          placeholder="Enter your password"
          name="password"
          value={password}
          handleChange={handleChange}
        />

        <div className="btn-group">
          <Link to="/bike-rental/admin/signup">Sign up</Link>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default BikeAdminpageLogin;
