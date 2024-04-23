import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../../../components/FormInput";
import "./AdminSignup.css";

const PGAdminpageSignup = () => {
  const [signupFields, setSignupFields] = useState({
    name: "",
    email: "",
    mobile: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, mobile, dob, password, confirmPassword } = signupFields;

  const handleChange = (e) => {
    setSignupFields((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupFields);
  }

  return (
    <div className="admin-signup-form-container-pg">
      {/* {JSON.stringify(signupFields)} */}
      <form className="admin-signup-form-pg" onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          inputType="text"
          placeholder="Enter your name"
          name="name"
          value={name}
          handleChange={handleChange}
        />

        <FormInput
          label="Email"
          inputType="text"
          placeholder="Enter your email"
          name="email"
          value={email}
          handleChange={handleChange}
        />

        <FormInput
          label="Mobile No"
          inputType="number"
          placeholder="Enter your mobile number"
          name="mobile"
          value={mobile}
          handleChange={handleChange}
        />

        <FormInput
          label="D.O.B."
          inputType="date"
          name="dob"
          value={dob}
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

        <FormInput
          label="Confirm Password"
          inputType="text"
          placeholder="confirm password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
        />

        <div className="btn-group">
          <Link to="/pg-rental/admin/login">Already have an account?</Link>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
};

export default PGAdminpageSignup;
