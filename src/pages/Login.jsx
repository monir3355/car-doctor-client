import React, { useContext, useState } from "react";
import loginImg from "../assets/images/login/login.svg";
import {
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";
import { Link, json, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [eye, setEye] = useState(false);
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        const loggedEmail = {
          email: loggedUser.email,
        };
        console.log(loggedEmail);
        setSuccess("User signIn successfully");
        // navigate(from, { replace: true });
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedEmail),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("jwt response", data);
            localStorage.setItem("car-access-token", data.token);
            navigate(from, { replace: true });
          });
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
            <h2 className="text-4xl text-center font-semibold pt-8">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="card-body pb-0">
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
                    value="Sign in"
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
                  Don't have an account{" "}
                  <Link
                    to="/register"
                    className="text-[#FF3811] hover:underline"
                  >
                    Sign Up
                  </Link>
                </small>
              </p>
              <p className="text-green-500">
                <small>{success}</small>
              </p>
              <p className="text-red-500">
                <small>{error}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
