import Link from "next/link";
import React from "react";

function SignUp() {
  return (
    <>
      <div className="hidden w-full h-screen  md:flex font-poppins">
        <div className=" relative w-1/3 bg-main pl-28 pr-4">
          <div className="space-y-24">
            <img src="/dandyxwhite.png" alt="" />
            <h2 className="font-semibold text-2xl text-white">
              Experience the fastest trading <br /> experience with your A1
              Vendor
            </h2>
          </div>

          <img
            src="/signupcard.png"
            className="absolute bottom-0 z-10 -right-28"
            alt=""
          />
        </div>
        <div className=" w-2/3 px-28 xl:px-60 py-36">
          <div className="w-full h-full p-2">
            <h1 className="text-5xl text-heading font-bold">Create Account</h1>
            <div className="flex flex-col space-y-6 py-24">
              <div className="flex space-x-7">
                <div className="w-full space-y-1">
                  <label className="text-heading font-semibold">
                    First Name
                  </label>
                  <input className="border border-border w-full  rounded-lg h-12" />
                </div>
                <div className="w-full space-y-1">
                  <label className="text-heading font-semibold">
                    Last Name
                  </label>
                  <input className="border border-border w-full  rounded-lg h-12" />
                </div>
              </div>
              <div className="w-full space-y-1">
                <label className="text-heading font-semibold">Email</label>
                <input className="border border-border w-full  rounded-lg h-12" />
              </div>
              <div className="w-full space-y-1">
                <label className="text-heading font-semibold">Password</label>
                <input className="border border-border w-full  rounded-lg h-12" />
              </div>
              <div className="w-full space-y-1">
                <label className="text-heading font-semibold">
                  Re-type Passsword
                </label>
                <input className="border border-border w-full  rounded-lg h-12" />
              </div>

              <div className="w-full py-4 space-y-2">
                <button className="bg-main flex text-center items-center justify-center h-12 w-full rounded-lg text-white font-medium text-2xl">
                  Sign up
                </button>
                <p className="text-heading text-lg font-medium">
                  Already have an account?{" "}
                  <Link href='/login'>
                  <span className="text-main text-xl">Login </span>
                  </Link>
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:hidden h-screen w-full bg-main">
        <div className="h-1/3 relative">
          <img
            src="/signupphone.png"
            className="absolute top-0 right-0 w-full"
            alt=""
          />
        </div>
        <div className="bg-white relative h-2/3 rounded-t-3xl z-10 p-6 flex flex-col justify-start items-center">
          <img src="/dandyx.png" alt="" />
          <div className="w-full h-full p-2 z-10">
            <h1 className="text-2xl text-heading font-bold text-center">
              Create Account
            </h1>
            <h3 className="text-main text-center text-sm font-medium">
              Welcome! Please input your details
            </h3>
            <div className="flex flex-col space-y-3 py-2">
              <div className="flex space-x-7">
                <div className="w-full ">
                  <label className="text-heading text-sm font-semibold">
                    First Name
                  </label>
                  <input className="border border-border w-full  rounded-lg h-8" />
                </div>
                <div className="w-full">
                  <label className="text-heading text-sm font-semibold">
                    Last Name
                  </label>
                  <input className="border border-border w-full  rounded-lg h-8" />
                </div>
              </div>
              <div className="w-full">
                <label className="text-heading text-sm font-semibold">
                  Email
                </label>
                <input className="border border-border w-full  rounded-lg h-8" />
              </div>
              <div className="w-full">
                <label className="text-heading text-sm font-semibold">
                  Password
                </label>
                <input className="border border-border w-full  rounded-lg h-8" />
              </div>
              <div className="w-full">
                <label className="text-heading text-sm font-semibold">
                  Re-type Passsword
                </label>
                <input className="border border-border w-full  rounded-lg h-8" />
              </div>

              <div className="w-full py-4 space-y-2">
                <button className="bg-main flex text-center items-center justify-center h-8 w-full rounded-lg text-white font-medium text-sm">
                  Sign up
                </button>
                <p className="text-heading text-sm font-medium">
                  Already have an account?{" "}
                  <Link href='/login'>
                  <span className="text-main text-base">Login </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <p className=" whitespace-nowrap text-sm z-10 text-main font-medium">Experience the fastest trading <span className="text-white">experience with your A1 Vendor </span></p>
          <img src="/layers.png" className="absolute bottom-0 right-0 w-full" alt="" />
        </div>
      </div>
    </>
  );
}

export default SignUp;
