import React, { useContext, useState } from "react";
import loginImg from "../assets/images/login/login.svg";
import {
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [eye, setEye] = useState(false);
  const { createUser } = useContext(AuthContext);
  // console.log(user);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User signUp successfully");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left mr-8 hidden lg:flex">
            <img className="py-4" src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-md lg:max-w-sm shadow-2xl bg-base-100 border">
            <h2 className="text-4xl text-center font-semibold pt-8">Sign Up</h2>
            <form onSubmit={handleRegister}>
              <div className="card-body pb-0">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={eye ? "text" : "password"}
                      name="password"
                      placeholder="password"
                      className="input input-bordered w-full"
                    />
                    {eye ? (
                      <FaEyeSlash
                        onClick={() => setEye(!eye)}
                        className="absolute right-3 text-xl cursor-pointer bottom-3"
                      />
                    ) : (
                      <FaEye
                        onClick={() => setEye(!eye)}
                        className="absolute right-3 text-xl cursor-pointer bottom-3"
                      />
                    )}
                  </div>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-3">
                  <input
                    className="btn btn-error"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </div>
            </form>
            <div className="text-center space-y-3 my-4">
              <p>Or Sign In with</p>
              <div className="flex gap-4 justify-center items-center">
                <FaFacebook className="text-xl" />
                <FaLinkedin className="text-xl" />
                <FaGoogle className="text-xl" />
              </div>
              <p>
                <small>
                  Already have an account{" "}
                  <Link to="/login" className="text-[#FF3811] hover:underline">
                    Sign in
                  </Link>
                </small>
              </p>
              <p className="text-green-500 px-4">
                <small>{success}</small>
              </p>
              <p className="text-red-500 mx-4">
                <small>{error}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
