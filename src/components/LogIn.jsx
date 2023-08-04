import React,{useState} from "react";
import {  EmailAuthCredential, signInWithEmailAndPassword } from "firebase/auth";
import { CgProfile } from "react-icons/cg";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const [email,  setEmail]= useState('');
  const [password, setPassword] =useState('')
 
  const signIn =(e)=> {
    e.preventDefault();
    signInWithEmailAndPassword(EmailAuthCredential, email, password)
    .then((userCredential)=>{
      console.log(userCredential);
    }).catch((error)=>{
      console.log(error);
    })
    }
  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" p-6 md:w-[34%] sm:w-[10%] shadow-lg bg-white space-y-8 rounded-md">
        <p className="text-3xl block text-center font-semibold">Sign In</p>
        <div className="flex flex-col items-center justify-center space-y-2 ">
          <form action="POST" onSubmit={signIn}>
            <div className="flex items-center border rounded-md px-2 text-2xl font-semibold">
              <CgProfile size={20} />
              <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                className=" w-full h-[50px] text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              />
            </div>
            <div className="flex items-center border rounded-md px-2 text-2xl font-semibold ">
              <FaLock size={20} />
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                className=" w-full h-[50px] text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 "
              />
            </div>
          </form>
        </div>
        <div className="flex mt-3 justify-between items-center">
          <div>
            <input type="checkbox" />
            <label>Remember Me?</label>
          </div>
          <p className="text-slate-500">Forgot Password</p>
        </div>
        <Link to="/dashboard">
          <div className="mt-5 ">
            <button
              type="submit"
              className="border-2 border-[#37a137] rounded-lg bg-[#37a137] text-white hover:text-slate-600 hover:bg-transparent text-xl font-semibold py-1 w-full"
            >
              Sign in
            </button>
          </div>
        </Link>

        <p className="flex justify-center items-center">Or</p>
        {/* Google & Facebook */}
        <div className="p-6 ">
          <div className="flex md:flex-row sm:flex-col justify-center items-center md:space-x-10">
            <div className="flex  mt-5 items-start w-full bg-[#f31111] rounded-lg hover:bg-transparent px-5">
              <button
                type="submit"
                className="text-white hover:text-slate-600 text-xl font-semibold  py-1 w-full"
              >
                Google
              </button>
            </div>
            {/* Facebook */}
            <div className="flex  mt-5 items-center w-full bg-[#160674da] rounded-lg hover:bg-transparent px-5">
              <button
                type="submit"
                className="text-white hover:text-slate-600 text-xl font-semibold  py-1 w-full"
              >
                Facebook
              </button>
            </div>
          </div>
          {/* Linledin & GitHub */}
          <div className="flex md:flex-row sm:flex-col items-center justify-center md:space-x-10">
            <div className="flex  mt-5 items-center w-full bg-[#336492] rounded-lg hover:bg-transparent px-5">
              <button
                type="submit"
                className="text-white hover:text-slate-600 text-xl font-semibold  py-1 w-full"
              >
                Linkedin
              </button>
            </div>
            {/* Github */}

            <div className="flex  mt-5 items-center w-full bg-[#1b1a1a] rounded-lg hover:bg-transparent px-5">
              <button
                type="submit"
                className="text-white hover:text-slate-600 text-xl font-semibold  py-1 w-full"
              >
                GitHub
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl font-semibold text-[#37a137] hover:underline cursor-pointer">
            Why Create an Account?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
