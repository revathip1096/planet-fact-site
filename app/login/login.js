"use client"
import React from "react";
import {useState,useEffect} from "react"
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase";
const  Login=() =>{
    const [email,setemail]=useState('');
    const [pass,setpass]=useState('');
    const [user,setUser]=useState(null);
    const router=useRouter();
    const register = async (e) => {
        try {
          e.preventDefault();
          const res = await signInWithEmailAndPassword(auth, email, pass);
          setUser(res.user.uid);
      
          // Debugging
          console.log("User login successfully");
          router.push("/planets/mercury");
        } catch (err) {
          console.error(err);
        }
      };
      
    useEffect(()=>{
        if (user==="null" || user===null) {
         return;
        } 
        localStorage.setItem("user",user);
      }, [user])
      useEffect(()=>{
        setUser(localStorage?.user);
      }, [])

   
    return (
        <div>
             Login
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form>
                       
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    onChange={(e)=>{setemail(e.target.value)}}
                                    type="email"
                                    name="email"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                            <input
    onChange={(e) => { setpass(e.target.value) }}
    value={pass} 
    type="password"
    name="password"
    className="block text-cyan w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
/>
                            </div>
                        </div>
                        
                        <div className="flex items-center justify-end mt-4">
                            <a
                                className="text-sm text-gray-600 underline hover:text-gray-900"
                                href="#"
                            >
                                Already registered?
                            </a>
                            <button
                                type="submit"
                                onClick={register}
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Login;


