import React, { useState } from "react";
import { LucideIcon, Eye, EyeOff } from "lucide-react";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  icon: LucideIcon;
  darkMode: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isPassword?: boolean; // New prop to check if it's a password field
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  icon: Icon,
  darkMode,
  value,
  onChange,
  isPassword = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mt-4">
      <label className={`block text-sm font-medium mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
        {label}
      </label>
      <div className="relative py-1">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
          <Icon size={18} />
        </span>
        <input
          type={isPassword && !showPassword ? "password" : "text"}
          className={`w-full pl-10 pr-10 py-2 rounded-lg border ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white focus:border-blue-500"
              : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
          } focus:ring-1 focus:ring-blue-500 outline-none`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
