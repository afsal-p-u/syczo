import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div 
      className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-40 flex items-center 
      justify-center"
    >
      <div 
        className="w-[450px] min-h-[200px] border-[1px] bg-[#eee] px-[40px] py-[30px] shadow-sm max-sm:w-[300px]
        rounded-md border-b-[3px] border-b-blue-500 border-slate-300"
      >
        <h4 className="text-center text-[25px] font-semibold text-blue-500">
          Login
        </h4>
        {/* <div className="flex flex-col mt-3">
          <label htmlFor="username" className="text-[13px] mb-1 text-blue-500">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="px-[10px] py-[7px] text-[14px] border-[1px] border-blue-500 outline-none rounded-md"
          />
        </div> */}
        <div className="flex flex-col mt-3">
          <label htmlFor="email" className="text-[13px] mb-1 text-blue-500">
            Enter email or phone number
          </label>
          <input
            type="text"
            name="logemailorphone"
            id="email"
            placeholder="Email address or phone number"
            className="px-[10px] py-[7px] text-[14px] border-[1px] border-blue-500 outline-none rounded-md"
          />
        </div>
        {/* <div className="flex flex-col mt-3">
          <label htmlFor="password" className="text-[13px] mb-1 text-blue-500">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="px-[10px] py-[7px] text-[14px] border-[1px] border-blue-500 outline-none rounded-nd"
          />
        </div> */}
        {/* <div className="mt-3 flex flex-col">
          <h6 className="text-blue-500 text-[12px] font-light text-end">
            Already have an account{" "}
            <Link className="text-red-700 underline font-medium" to="/login">
              Login
            </Link>
          </h6>
        </div> */}
        <div className="mt-5 flex justify-center">
          <button
            type="submit"
            className="px-[25px] py-[8px] bg-blue-500 text-white rounded-md text-[14px] font-medium"
          >
            Sent OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
