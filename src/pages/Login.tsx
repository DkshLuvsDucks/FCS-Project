import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import DarkModeToggle from "../components/DarkModeToggle";
import InputField from "../components/InputField";

const Login = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className={`w-full max-w-sm p-6 rounded-2xl shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"} transition-all`}>
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm font-medium`}>
            Sign in to your account
          </p>
        </div>

        <form className="mt-6">
          {/* Email Input */}
          <InputField
            label="Email / Mobile Number"
            type="text"
            placeholder="Enter email or mobile number"
            icon={Mail}
            darkMode={darkMode}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Input using InputField */}
          <InputField
            label="Password"
            type="password"
            placeholder="Enter password"
            icon={Lock}
            darkMode={darkMode}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isPassword={true} // Enable password toggle
          />

          <div className="text-right mt-2">
            <a href="#" className="text-sm text-blue-500 hover:text-blue-600">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <div className="py-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </div>

          {/* Don't have an account? Sign up */}
            <div className="text-center">
                <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm`}>
                    Don't have an account?{" "}
                    <a href="/register" className="text-blue-500 hover:text-blue-600 font-medium">
                    Sign up
                    </a>
                </p>
            </div>

          {/* Divider */}
          <div className={`relative my-6 ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className={`px-2 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-2">
            <button type="button" className={`flex items-center justify-center py-2 px-4 rounded-lg border ${darkMode ? "bg-gray-700 border-gray-600 text-white hover:bg-gray-600" : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"}`}>
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
              Google
            </button>
            <button type="button" className={`flex items-center justify-center py-2 px-4 rounded-lg border ${darkMode ? "bg-gray-700 border-gray-600 text-white hover:bg-gray-600" : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"}`}>
              <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5 mr-2" />
              Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;