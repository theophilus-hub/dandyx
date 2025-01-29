"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase";
import Link from "next/link";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [stateError, setStateError] = useState(null);
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (data.session != null) {
        console.log(data.session.user);
        const userId = data.session.user.id;

        if (userId) {
          if (userId == "bc91a5be-adad-4742-9b87-d52a133935ae") {
            router.push("admin");
          } else {
            const { data, error } = await supabase
              .from("profiles")
              .select()
              .eq("id", userId);

            if (data) {
              console.log(typeof data.length);
              if (data.length != 0) {
                router.push("/dashboard");
              }
            } else {
            }
          }
        }
      }
    };
    getSession();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleClick = async () => {
    setLoading(true);
    setStateError("");
    console.log(session);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error == null) {
      if (data) {
        if (data.user.id == "bc91a5be-adad-4742-9b87-d52a133935ae") {
          router.push("admin");
        } else {
          router.push("/dashboard");
        }
      }
    } else {
      console.log(email);
      console.log(password);
      setLoading(false);
      setStateError(error.message);
      console.log(error.message);
    }
  };

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
            <h1 className="text-5xl text-heading font-bold">Login</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col space-y-6 py-24">
                <div className="w-full space-y-1">
                  <label className="text-heading font-semibold">Email</label>
                  <input
                    className="border border-border w-full  rounded-lg h-12"
                    value={email}
                    onChange={(e) => setEmail(e.target.value.toLowerCase())}
                    required
                  />
                </div>
                <div className="w-full space-y-1">
                  <label className="text-heading font-semibold">Password</label>
                  <input
                    className="border border-border w-full  rounded-lg h-12"
                    value={password}
                    onChange={(e) => setPassword(e.target.value.toLowerCase())}
                    required
                  />
                </div>

                <div className="w-full py-4 space-y-2">
                  <button
                    onClick={handleClick}
                    disabled={loading}
                    className="bg-main flex text-center items-center justify-center h-12 w-full rounded-lg text-white font-medium text-2xl"
                  >
                    {loading ? "Signing In..." : "Sign In"}
                  </button>
                  <p className="text-xs text-red-500">{stateError}</p>
                  <p className="text-heading text-lg font-medium">
                    Already have an account?{" "}
                    <Link href="/signup">
                      <span className="text-main text-xl">Sign up </span>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
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
              Login
            </h1>
            <h3 className="text-main text-center text-sm font-medium">
              Welcome! Its’s so good to have you back
            </h3>
            <div className="flex flex-col space-y-3 py-2">
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

              <div className="w-full py-4 space-y-2">
                <button className="bg-main flex text-center items-center justify-center h-8 w-full rounded-lg text-white font-medium text-sm">
                  Login
                </button>
                <p className="text-heading text-sm font-medium">
                  Already have an account?{" "}
                  <Link href="/signup">
                    <span className="text-main text-base">Sign up </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <p className=" whitespace-nowrap text-sm z-10 text-main font-medium">
            Experience the fastest trading{" "}
            <span className="text-white">experience with your A1 Vendor </span>
          </p>
          <img
            src="/layers.png"
            className="absolute bottom-0 right-0 w-full"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Login;
