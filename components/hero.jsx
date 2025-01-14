import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="w-full flex justify-center items-center pt-12 text-text">
      <div className="w-[364px] md:w-[911px] flex flex-col justify-center items-center text-text px-16 md:px-36 space-y-12">
        <div className="space-y-8">
          <div className=" flex items-center justify-center">
            <h2 className="font-semibold md:font-normal text-3xl md:text-6xl text-center">
              What are you
              <br />
              trading with us
              <br />
              today?
            </h2>
          </div>
          <div className="  flex justify-center items-center">
            <h4 className="text-center">
              Experience best market rates
              <br />
              anywhere in Nigeria in a blink
            </h4>
          </div>
        </div>
        <div className="flex justify-center items-center  space-x-2 z-10">
          <Link href="/signup">
            <button className="border border-outline rounded-2xl py-3 px-8 md:px-14 flex items-center shadow-xl shadow-shadow justify-center font-bold text-sm md:text-lg text-white bg-main whitespace-nowrap">
              Sign up
            </button>
          </Link>
          <Link href="/login">
            <button className="border border-outline rounded-2xl py-3 px-8 md:px-14 flex items-center shadow-xl shadow-shadow justify-center font-bold text-sm md:text-lg text-main">
              Login
            </button>
          </Link>
        </div>
        <img
          src={"/blur.png"}
          className="absolute w-[500px] top-28 md:top-32  "
        />

        <img src={"/phone.png"} className="hidden md:block" />
        <img src={"/phone2.png"} className="block md:hidden" />
      </div>
    </div>
  );
}

export default Hero;
