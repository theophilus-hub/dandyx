import Link from "next/link";
import React from "react";

function Section1() {
  return (
    <div className='hidden md:flex flex-1 h-32 py-72 px justify-center items-center bg-[url("../public/bg1.jpg")] bg-cover text-text'>
      <div className="space-y-6">
        <h1 className="font-bold text-5xl text-center">
          We bring fresh vibe
          <br />
          to the exchange
          <br />
          scene
        </h1>
        <h3 className="text-center font-normal text-xl">
          DANDY brings a fresh vibe to the exchange scene, offering
          <br />
          folks the opportunity to engage not just to sell gift cards, but
          <br />
          also purchase and trade diverse types of cryptocurrencies
        </h3>
        <div className="space-y-2">
          <h4 className="text-center font-bold text-base">
            Don’t have an account yet?
          </h4>
          <div className="flex justify-center items-center  space-x-2">
            <Link href="/signup">
              <button className="border border-outline rounded-2xl py-3 px-8 md:px-14 flex items-center shadow-xl shadow-shadow justify-center font-bold text-sm md:text-lg text-white bg-main whitespace-nowrap">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
