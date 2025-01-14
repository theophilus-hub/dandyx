function Section3() {
  return (
    <div className="hidden md:grid grid-cols-2 py-6 items-center justify-start">
      <div className=" relative left-0 xl:w-3/4">
        <img src={"/frame3.png"} className=" " />
      </div>

      <div className="flex p-4 justify-center">
        <div className="flex flex-col  justify-center items-start py-6 px-12 space-y-4 w-[620px]">
          <h2 className="font-bold text-center text-4xl text-text px-10">
            All Advantages in One{" "}
          </h2>
          <div className="flex space-x-1 items-start px-10 py-6">
            <img src={"/icon.png"} className="h-[32px] mt-1" />
            <div className="flex flex-col px-2 self-start space-y-1">
              <h2 className="font-bold text-xl text-text">User Privacy</h2>
              <p className="text-textsecc font-normal text-sm">
                At Dandy, no need for your funds or intrusive personal info. No
                KYC or access to private docs. Your privacy is respected.
                Business stays Business
              </p>
            </div>
          </div>
          <div className="flex space-x-1 items-start px-10 ">
            <img src={"/icon.png"} className="h-[32px] mt-1" />
            <div className="flex flex-col px-2 self-start space-y-1">
              <h2 className="font-bold text-xl text-text">Safety</h2>
              <p className="text-textsecc font-normal text-sm">
                The risk of hack is at absolute zero as there's no fear of loss
                by our customers as we consistently eliminate all potential
                security risks and continuously implement the latest digital
                updates
              </p>
            </div>
          </div>
          <div className="flex space-x-1 items-start px-10 ">
            <img src={"/icon.png"} className="h-[32px] mt-1" />
            <div className="flex flex-col px-2 self-start space-y-1">
              <h2 className="font-bold text-xl text-text">
                Streamlined Transaction
              </h2>
              <p className="text-textsecc font-normal text-sm">
                Dandyx simplifies asset and currency swaps. Our fast,
                hassle-free system cuts out delays and paperwork. No waiting or
                document hassles—just swift transactions from A to B
              </p>
            </div>
          </div>
          <div className="flex space-x-1 items-start px-10 ">
            <img src={"/icon.png"} className="h-[32px] mt-1" />
            <div className="flex flex-col px-2 self-start space-y-1">
              <h2 className="font-bold text-xl text-text">
                Stalwart protection protocols
              </h2>
              <p className="text-textsecc font-normal text-sm">
                Our platform, a digital fortress, prioritises unwavering
                security. Registered under Nigerian law, it safeguards
                transactions and personal data, enhancing trustworthiness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
