"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword,  } from "firebase/auth";
import auth from "./firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState(null);
  const router = useRouter();

  const register = async (e) => {
    try {
      e.preventDefault();
      const res = await createUserWithEmailAndPassword(auth, email, pass);
      setUser(res.user.uid);

      // Debugging
      console.log("User registered successfully");
      router.push("/planets/mercury");
    }  catch (err) {
        toast.error(err.code, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        console.log(err.code)
      
    }
  };

  useEffect(() => {
    if (user === "null" || user === null) {
      return;
    }
   
    localStorage.setItem("user", user);
    
  }, [user]);

  useEffect(() => {
    setUser(localStorage?.user);
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-400 to-indigo-600 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Register for an Account
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              className="text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              type="password"
              name="password"
              className="text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <button
              type="submit"
              onClick={register}
              className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none"
            >
              Register
            </button>
          </div>
        </form>
        <div className="mt-4 text-gray-600 text-center">
          Already registered?{" "}
          <a className="text-indigo-600 hover:underline" href="/login">
            Login here
          </a>
        </div>
      </div>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </div>
  );
};

export default Registration;
