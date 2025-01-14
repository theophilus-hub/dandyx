

function PhoneSection3() {
  return (
    <div className='flex flex-col md:hidden justify-center items-center py-6 space-y-4'>
      <h2 className='font-bold text-center text-2xl text-text'>All Advantages in One </h2>
        <div className='flex space-x-1 items-start px-10 '>
            <img 
            src={'/icon.png'}
            className="h-[32px] mt-1"
            />
            <div className="flex flex-col px-2 self-start space-y-1">
                <h2 className="font-bold text-sm text-text">User Privacy</h2>
                <p className="text-textsecc font-normal text-[9px]">At Dandy, no need for your funds or intrusive personal info. No KYC or access to private docs. Your privacy is respected. Business stays Business</p>
            </div>
        </div>
        <div className='flex space-x-1 items-start px-10 '>
            <img 
            src={'/icon.png'}
            className="h-[32px] mt-1"
            />
            <div className="flex flex-col px-2 self-start space-y-1">
                <h2 className="font-bold text-sm text-text">Safety</h2>
                <p className="text-textsecc font-normal text-[9px]">The risk of hack is at absolute zero as there's no fear of loss by our customers as we consistently eliminate all potential security risks and continuously implement the latest digital updates</p>
            </div>
        </div>
        <div className='flex space-x-1 items-start px-10 '>
            <img 
            src={'/icon.png'}
            className="h-[32px] mt-1"
            />
            <div className="flex flex-col px-2 self-start space-y-1">
                <h2 className="font-bold text-sm text-text">Streamlined Transaction</h2>
                <p className="text-textsecc font-normal text-[9px]">Dandyx simplifies asset and currency swaps. Our fast, hassle-free system cuts out delays and paperwork. No waiting or document hassles—just swift transactions from A to B</p>
            </div>
        </div>
        <div className='flex space-x-1 items-start px-10 '>
            <img 
            src={'/icon.png'}
            className="h-[32px] mt-1"
            />
            <div className="flex flex-col px-2 self-start space-y-1">
                <h2 className="font-bold text-sm text-text">Stalwart protection protocols</h2>
                <p className="text-textsecc font-normal text-[9px]">Our platform, a digital fortress, prioritises unwavering security. Registered under Nigerian law, it safeguards transactions and personal data, enhancing trustworthiness.</p>
            </div>
        </div>

        <img
          src={'/frame2.png'}
        />
    </div>
  )
}

export default PhoneSection3
