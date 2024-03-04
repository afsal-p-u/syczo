import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center ">
      <div className="w-[400px] min-h-[300px] bg-[--third-color] p-[20px] rounded-sm shadow-lg max-sm:w-[300px]">
        <h4 className="text-center text-[25px] font-semibold text-white">
          Signup
        </h4>
        <div className="flex flex-col mt-3">
          <label htmlFor="username" className="text-[13px] mb-1 text-slate-300">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="px-[10px] py-[7px] text-[14px] border-[1px] border-slate-500 outline-none rounded-sm"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="email" className="text-[13px] mb-1 text-slate-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
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
            placeholder="Password"
            className="px-[10px] py-[7px] text-[14px] border-[1px] border-slate-500 outline-none rounded-sm"
          />
        </div>
        <div className="mt-3 flex flex-col">
          <h6 className="text-white text-[12px] font-light text-end">
            Already have an account{" "}
            <Link className="text-red-700 underline font-medium" to="/login">
              Login
            </Link>
          </h6>
        </div>
        <div className="mt-5 flex justify-center">
          <button
            type="submit"
            className="px-[25px] py-[8px] bg-[#eee] rounded-md text-[14px] font-medium"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
