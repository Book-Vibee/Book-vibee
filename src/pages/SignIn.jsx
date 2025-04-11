import React from 'react';
import useAuth from '../Hooks/useAuth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import GoogleLogin from '../Components/SocialLogin/GoogleLogin';

export default function SignIn() {
  const { loginUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate=useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    loginUser(data.email, data.password);
    navigate("/");
  };

  return (
    <div className="w-full max-w-sm p-6 m-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mb-34 mt-30">
      <div className="text-2xl font-semibold mb-4 text-center">Login</div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
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

      

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-6 py-2.5 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700"
          >
            Sign In
          </button>
        </div>
      </form>

      {/* Social Media Login Option */}
      <div>
        <GoogleLogin></GoogleLogin>
      </div>

      {/* Sign up link */}
      <p className="mt-8 text-xs font-light text-center text-gray-400">
        Don't have an account?{" "}
        <a href="/signup" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">
          Create One
        </a>
      </p>
    </div>
  );
}
