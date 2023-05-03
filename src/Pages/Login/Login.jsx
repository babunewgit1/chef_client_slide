import React, { useContext, useState } from "react";
import Heading from "../../Shared/Heading/Heading";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MyContext } from "../../AuthProvidor/AuthProvidor";

const Login = () => {
  const { user } = useContext(MyContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState(null);
  const { googleSignIn, githubSingIn, customSignIn } = useContext(MyContext);

  const googleLogin = () => {
    setSuccess("");
    setError("");
    googleSignIn()
      .then((result) => {
        setSuccess("Login successfull");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const githublogin = () => {
    githubSingIn()
      .then((result) => {
        setSuccess("Login successfull");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handelSignIn = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    customSignIn(email, password)
      .then(() => {
        setSuccess("Login successfull");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="login py-20">
      <div className="mycontainer">
        <div className="loginWrapper">
          <Heading>Login</Heading>
        </div>
        <div className="formwrapper w-1/2 bg-white mx-auto p-7 rounded-md">
          <form onSubmit={handelSignIn}>
            <div className="formBox">
              <label className="block text-black font-semibold mb-3">
                Email :
              </label>
              <input
                name="email"
                className="block w-full"
                type="email"
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
                autoComplete="off"
                name="password"
                placeholder="Password"
              />
            </div>
            {user || error ? (
              <div className="message">
                <p className="text-green-500">{success}</p>
                <p className="text-red-600">{error}</p>
              </div>
            ) : (
              ""
            )}
            <button
              className="bgyell w-full block mt-10 py-3 font-semibold"
              type="submit"
            >
              Login
            </button>
          </form>
          <div className="gogleLogin text-black">
            <div className="text-center py-4 font-semibold">or login with</div>
            <button
              onClick={googleLogin}
              className="flex mb-4 gap-8 font-semibold py-3 items-center justify-center w-full border-2 border-[#F9A51A] rounded-full hover:bg-[#F9A51A] hover:text-white"
            >
              <FaGoogle></FaGoogle> Login with Google
            </button>
            <button
              onClick={githublogin}
              className="flex gap-8 font-semibold py-3 items-center justify-center w-full border-2 border-[#F9A51A] rounded-full hover:bg-[#F9A51A] hover:text-white"
            >
              <FaGithub></FaGithub> Login with Github
            </button>
          </div>
          <div className="para text-center mt-8">
            <p className="text-black font-semibold">
              Don’t have an account? <span></span>
              <Link className="textyell" to="/register">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
