"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/dash/nav";
import Header from "@/components/dash/header";
import MobileNav from "@/components/dash/mobileNav";
import Link from "next/link";
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";

function Dashboard() {
const router = useRouter();
   const [email, setEmail] = useState(null);
  const [user, setUser] = useState({
    name: null,
  });

  useEffect(() => {
    getSession();
  }, []);

  const getSession = async () => {
    const { data, error } = await supabase.auth.getSession();

    if (data.session) {
      setEmail(data.session.user.email);
      const id = data.session.user.id;
      console.log(data.session.user);
      getUserDetails(id);
    }
    if (data.session == null) {
      router.push("login");
    }
  };

  const getUserDetails = async (id) => {
    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("id", id);

    if (data) {
      console.log(data);
      setUser({
        name: data[0].fname,
      });
      console.log(user.name);
    }
    if (error) console.log(error);
  };


  const logout = async () => {
    let { error } = await supabase.auth.signOut();

    if (!error) {
      router.push("login");
    }
  };


  return (
    <>
      <div className="hidden w-full min-h-screen  md:flex font-poppins ">
        <Nav />

        <div className=" w-2/3 xl:w-3/4 px-4 xl:px-12 py-32">
          <Header />
        </div>
      </div>

      {/* mobile */}
      <div className="font-poppins text-text flex flex-col md:hidden">
        <main className=" font-poppins ">
          <div className="relative h-[50vh] bg-main">
            <img
              src="/Group.png"
              className="absolute top-0 w-[100vw] h-[50vh] z-0"
              alt=""
            />
            <div className="z-30">
              <MobileNav />
            </div>
            <div className="px-6 py-4 space-y-4 ">
              <div className="space-y-8 ">
                <div className="space-y-2">
                  <h2 className="text-3xl text-white">
                    Hi <span className="font-bold">{user.name}</span>!
                  </h2>
                  <h4 className="text-white text-[15px]">Welcome Back</h4>
                </div>
                <div className="w-full flex justify-between items-end pr-6">
                  <div className="flex flex-col space-y-1">
                    <h3 className="text-[9px] font-medium">
                      Available balance
                    </h3>
                    <div className=" flex items-center justify-start space-x-4">
                      <h2 className="text-white text-3xl font-semibold">
                        ₦ 0.00
                      </h2>
                      <img src="/eye.png" alt="" />
                    </div>
                  </div>
                  <div className="flex space-x-1 items-center py-2">
                    <h2 className="text-white text-xs">NGN</h2>
                    <img src="/droparrow.png" alt="" />
                  </div>
                </div>
              </div>

              <div className=" relative">
                <Link href={"/dashboard/wallet"}>
                 <button className="flex py-1 px-3 text-[9px] gap-1 font-medium bg-secmain rounded-lg items-center justify-center">
                  <span>
                    <img src="/cash.png" alt="" />
                  </span>
                  Withdraw
                </button>
                </Link>
               
              </div>
            </div>
          </div>
          <div className="bg-white h-64 w-full relative -top-12 rounded-t-[36px] p-4 space-y-4">
            <h2 className="font-semibold text-lg">Quick Access</h2>
            <div className="w-full grid grid-cols-2 gap-x-3 gap-y-2">
              <Link href={"/dashboard/giftcards/sell"}>
                <div className="w-full h-24 bg-secmain flex flex-col space-y-4 justify-between items-start px-3 py-2 rounded-[15px]">
                  <img src="/cashq.png" alt="" />
                  <h2 className="text-xs font-medium">Sell Gift cards</h2>
                </div>
              </Link>
              <Link href={"/dashboard/giftcards/buy"}>
                <div className="w-full h-24 bg-secmain flex flex-col space-y-4 justify-between items-start px-3 py-2 rounded-[15px]">
                  <img src="/giftq.png" alt="" />
                  <h2 className="text-xs font-medium">Buy Gift cards</h2>
                </div>
              </Link>
              <Link href={"/dashboard/crypto"}>
                <div className="w-full h-24 bg-secmain flex flex-col space-y-4 justify-between items-start px-3 py-2 rounded-[15px]">
                  <img src="/cryptoq.png" alt="" />
                  <h2 className="text-xs font-medium">Trade Crypto</h2>
                </div>
              </Link>
              <Link href={"/"}>
                <div className="w-full h-24 bg-secmain flex flex-col space-y-4 justify-between items-start px-3 py-2 rounded-[15px]">
                  <img src="/chatq.png" alt="" />
                  <h2 className="text-xs font-medium">Live Chat</h2>
                </div>
              </Link>
              <Link href={"/"}>
                <div className="w-full h-24 bg-secmain flex flex-col space-y-4 justify-between items-start px-3 py-2 rounded-[15px]">
                  <img src="/calcq.png" alt="" />
                  <h2 className="text-xs font-medium">Rate Calculator</h2>
                </div>
              </Link>
              <Link href={"/"}>
                <div className="w-full h-24 bg-secmain flex flex-col space-y-4 justify-between items-start px-3 py-2 rounded-[15px]">
                  <img src="/hotq.png" alt="" />
                  <h2 className="text-xs font-medium">Hottest cards</h2>
                </div>
              </Link>
            </div>

            <div className="space-y-2 py-4">
              <h2>Recent Transactions</h2>
              <div className=" w-full border border-main rounded-2xl min-h-24 flex items-center justify-center">
                <p className="text-xs ">All past transactions will appear here</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;
