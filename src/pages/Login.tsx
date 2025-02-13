import React, { useState } from 'react'
import { Eye, EyeOff, Mail, Lock, Smartphone, Github } from "lucide-react";

const Login = () => {
    
    const [darkMode, setDarkMode] = useState(false)
    const [email, setEmail] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

  return (
    <>
        <div className='min-h-screen w-full flex items-center justify-center p-4 ${darkMode ? "dark bg-gray-900" : "bg-gray-50'>
            <div className='w-full max-w-md'>
                <div className='rounded-lg shadow-lg p-6 sm:p-8 ${darkMode ? "bg-gray-800" : "bg-white"}'>
                    <div className="flex justify-between items-center mb-8">
                        <h1
                            className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
                        >
                            Login
                        </h1>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login