import React, { useContext, useState } from "react";
import Heading from "../../Shared/Heading/Heading";
import { MyContext } from "../../AuthProvidor/AuthProvidor";
import { updateProfile } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
const Register = () => {
  const { customregister } = useContext(MyContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handelRegister = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    if (!email || !password) {
      setError("Email and Password can not be empty");
      return;
    }

    if (password.length < 6) {
      setError("Password can not be less then 6 characters");
      return;
    }

    customregister(email, password)
      .then((user) => {
        const getuser = user.user;
        updateProfile(getuser, {
          displayName: name,
          photoURL: photo,
        });
        setSuccess("Sign up successfull");
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="rigister py-12">
      <div className="mycontainer">
        <div className="loginWrapper">
          <Heading>Register</Heading>
        </div>
        <div className="formwrapper lg:w-1/2 bg-white mx-auto p-7 rounded-md">
          <form onSubmit={handelRegister}>
            <div className="formBox">
              <label className="block text-black font-semibold mb-3">
                Name :
              </label>
              <input
                name="name"
                className="block w-full"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="formBox mt-6">
              <label className="block text-black font-semibold mb-3">
                Email :
              </label>
              <input
                className="block w-full"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="formBox mt-6">
              <label className="block text-black font-semibold mb-3">
                Password :
              </label>
              <input
                className="block w-full"
                type="password"
                name="password"
                autoComplete="off"
                placeholder="Password"
              />
            </div>
            <div className="formBox mt-6">
              <label className="block text-black font-semibold mb-3">
                Photo URL :
              </label>
              <input
                className="block w-full"
                type="text"
                name="photo"
                placeholder="Photo URL"
              />
            </div>
            <div className="message mt-3">
              <p className="text-green-500">{success}</p>
              <p className="text-red-600">{error}</p>
            </div>
            <button
              className="bgyell w-full block mt-10 py-3 font-semibold"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
