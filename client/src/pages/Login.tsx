import { useState, ChangeEvent } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useAuthContext } from '../context/AuthContext';

const Login = () => {
  const [inputValues, setInputValues] = useState<{[key: string]: string}>({})
  const navigate = useNavigate()
  const { setToken } = useAuthContext()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = async () => {
    axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/login`, inputValues).then((res) => {
      setToken(res.data)
      navigate('/')
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="w-full h-[80vh] flex items-center justify-center">
      <div className="w-[400px] min-h-[300px] bg-[--third-color] p-[20px] max-sm:w-[300px] rounded-sm shadow-lg">
        <h4 className="text-center text-[25px] font-semibold text-white">
          Login
        </h4>
        <div className="flex flex-col mt-3">
          <label htmlFor="email" className="text-[13px] mb-1 text-slate-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            onChange={(e) => handleChange(e)}
            className="px-[10px] py-[7px] text-[14px] border-[1px] border-slate-500 outline-none rounded-sm"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="password" className="text-[13px] mb-1 text-slate-300">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => handleChange(e)}
            placeholder="Password"
            className="px-[10px] py-[7px] text-[14px] border-[1px] border-slate-500 outline-none rounded-sm"
          />
        </div>
        <div className="mt-3 flex flex-col">
          <h6 className="text-white text-[12px] font-light text-end">
            Don't have a account{" "}
            <Link className="text-red-700 underline font-medium" to="/signup">
              Signup
            </Link>
          </h6>
          <h6 className="text-white text-[12px] font-light text-end">
            <Link className="text-white-700 underline" to="/password-reset">
              Forgot password
            </Link>
          </h6>
        </div>
        <div className="mt-5 flex justify-center">
          <button
            type="submit"
            className="px-[25px] py-[8px] bg-[#eee] rounded-md text-[14px] font-medium"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
