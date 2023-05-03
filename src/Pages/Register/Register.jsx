import React, { useContext } from "react";
import Heading from "../../Shared/Heading/Heading";
import { MyContext } from "../../AuthProvidor/AuthProvidor";
import { updateProfile } from "firebase/auth";
const Register = () => {
  const { customregister } = useContext(MyContext);
  const handelRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    customregister(email, password)
      .then((user) => {
        const getuser = user.user;
        updateProfile(getuser, {
          displayName: name,
          photoURL: photo,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="rigister py-12">
      <div className="mycontainer">
        <div className="loginWrapper">
          <Heading>Register</Heading>
        </div>
        <div className="formwrapper w-1/2 bg-white mx-auto p-7 rounded-md">
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
