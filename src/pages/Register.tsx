import React, { useState } from "react";
import { Eye, EyeOff, Mail, User, Phone, Lock, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "../components/DarkModeToggle";
import InputField from "../components/InputField";
import PasswordStrength from "../components/PasswordStrength";
import { LoadingSpinner } from "../components/LoadingSpinner";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [mobileOTP, setMobileOTP] = useState<string>("");
  const [showMobileOTP, setShowMobileOTP] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 2000);
  };

  return (
    <div className={`py-20 min-h-screen flex items-center justify-center px-4 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className={`w-full max-w-md p-6 rounded-2xl shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"} transition-all`}>
        <h1 className="text-3xl font-bold text-center">Create Account</h1>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {/* User Info */}
          <div>
            <InputField label="Username" type="text" placeholder="Enter username" icon={User} darkMode={darkMode} value={username} onChange={(e) => setUsername(e.target.value)} />
            <InputField label="Email" type="email" placeholder="Enter email" icon={Mail} darkMode={darkMode} value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          {/* Mobile Info with OTP in one line */}
          <div>
            <label className={`block text-sm font-medium mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Mobile Number</label>
            <div className="relative flex items-center">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Phone size={18} />
              </span>
              <input
                type="tel"  
                className={`w-full pl-10 pr-24 py-2 rounded-lg border ${darkMode ? "bg-gray-700 border-gray-600 text-white focus:border-blue-500" : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"} focus:ring-1 focus:ring-blue-500 outline-none`}
                placeholder="Enter mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowMobileOTP(true)}
                className="absolute right-2 bottom-2 px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Send OTP
              </button>
            </div>
          </div>
          {showMobileOTP && (
            <InputField label="OTP" type="text" placeholder="Enter OTP" icon={Smartphone} darkMode={darkMode} value={mobileOTP} onChange={(e) => setMobileOTP(e.target.value)} />
          )}
          
          
          {/* Password Section */}
          <div>
            <InputField label="Password" type="password" placeholder="Enter password" icon={Lock} darkMode={darkMode} value={password} onChange={(e) => setPassword(e.target.value)} isPassword={true} />
            <PasswordStrength password={password} darkMode={darkMode} />
        </div>
          
          {/* Terms & Conditions */}
          <div className="flex items-center">
            <input type="checkbox" checked={termsAccepted} onChange={() => setTermsAccepted(!termsAccepted)} className="mr-2" />
            <label className="text-sm">I agree to the terms and conditions</label>
          </div>
          
          {/* Submit Button */}
          <button type="submit" disabled={loading || !termsAccepted} className="w-full py-2 mt-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50">
            {loading ? <LoadingSpinner /> : "Create Account"}
          </button>
        </form>
        
        {/* Already have an account? */}
        <p className="mt-4 text-center text-sm mb-2">
          Already have an account? <a href="/login" className="text-blue-500 hover:text-blue-600 font-medium">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
