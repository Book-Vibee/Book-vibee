import React from "react";
import useAuth from "../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "../Components/SocialLogin/GoogleLogin";

export default function SignUp() {
  const { registerUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password");  // Get the password value for validation
  const navigate=useNavigate();

  const onSubmit = (data) => {
    // Handle user registration logic here
    console.log(data);
    registerUser(data.email, data.password);
    navigate("/");
  };

  return (
    <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mb-20 mt-28">
      <form
        onSubmit={handleSubmit(onSubmit)}
        
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === password || "Passwords do not match", // Check if passwords match
            })}
          />
          {errors.confirmPassword && (
            <span className="text-red-500">{errors.confirmPassword.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Sign Up
        </button>
        <div>
          <GoogleLogin></GoogleLogin>
        </div>

        {/* Link to Login Page */}
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-500 hover:underline">
            Log in here
          </a>
        </p>
      </form>
    </div>
  );
}
