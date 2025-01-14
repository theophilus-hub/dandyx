import React from "react";

function Header() {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-24">
      <div className="w-full flex items-center justify-between">
        <div className="space-y-2">
          <h1 className=" text-4xl font-bold">Hello Ejiro!</h1>
          <h3 className="text-3xl">What are you trading with us today?</h3>
        </div>
        <div className="flex items-center gap-7">
          <img src="/notification.png" alt="" />
          <button className="text-base font-semibold text-main border border-main rounded-2xl py-3.5 px-8">
            Log out
          </button>
        </div>
      </div>
      <div className=" grid grid-cols-3  w-full gap-2">
        <div className="w-full h-full flex flex-col justify-between items-center pt-4 pb-2 border border-main rounded-3xl">
          <img src="/dashgift.png" alt="" />
          <h4 className="text-text text-2xl">Giftcards</h4>
        </div>
        <div className="w-full h-full flex-col flex space-y-4 items-center justify-center">
            <h2 className="text-2xl">Current crypto rate</h2>
            <h1 className=" flex text-5xl font-bold text-text">
            ₦1,080/$
            </h1>
            <div className="w-full flex justify-evenly">
                <button className="bg-main text-white text-xs py-1 px-2 rounded-xl">
                    Sell rate
                </button>
                <button className=" text-text text-xs border border-main py-1 px-2 rounded-xl">
                    Buy rate
                </button>
            </div>

        </div>
        <div className="w-full bg-main flex flex-col justify-between items-center pt-10 pb-2 border border-main rounded-3xl">
          <img src="/dashcrypto.png" alt="" />
          <h4 className="text-text text-2xl">Crypto</h4>
        </div>
      </div>

      <div className="min-h-64 border-2 border-main w-full rounded-3xl px-8 py-4">
        <h2 className="text-text font-light text-3xl">Transactions</h2>
      </div>
    </div>
  );
}

export default Header;
