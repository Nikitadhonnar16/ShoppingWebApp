import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, toggleUserStatus, signup } from "../app/Features/authSlice";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, isNewUser } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(""); // For error messages
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (isNewUser) {
      // Check if the email already exists
      const existingUser = users.find((user) => user.email === form.email);
  
      if (existingUser) {
        setError("User already exists.");
        return;
      }
  
      if (form.password !== form.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
  
      // Save new user to localStorage
      const newUser = { email: form.email, password: form.password };
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
  
      // Clear errors and form fields on success
      setError("");
      setForm({ email: "", password: "", confirmPassword: "" });
  
      // Switch to login form
      dispatch(toggleUserStatus());
    } else {
      // Login validation
      const user = users.find(
        (user) => user.email === form.email && user.password === form.password
      );
  
      if (!user) {
        setError("Invalid email or password.");
        return;
      }
  
      // Clear errors and form fields on success
      setError("");
      setForm({ email: "", password: "", confirmPassword: "" });
      dispatch(login({ email: form.email, password: form.password }));
    }
  };
  
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <section className="bg-white dark:bg-gray-900 flex items-center justify-center min-h-screen w-full">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          {isNewUser ? "Signup" : "Login"}
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          {isNewUser
            ? "Create a new account to get started."
            : "Login to your account."}
        </p>
        {error && (
          <div className="text-red-500 font-bold mb-4">{error}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@domain.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="••••••••"
              required
            />
          </div>
          {isNewUser && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="••••••••"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="py-3 px-5 text-sm bg-gray-700 text-white rounded-lg w-full"
          >
            {isNewUser ? "Signup" : "Login"}
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch(toggleUserStatus());
              setError(""); // Clear errors when toggling
            }}
            className="mt-4 text-sm text-gray-500 dark:text-gray-400 underline"
          >
            {isNewUser
              ? "Already have an account? Login"
              : "Don't have an account? Signup"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginSignup;
