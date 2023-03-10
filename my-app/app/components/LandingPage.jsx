import React from "react";

export default function LandingPage() {
  return (
    <div className="container mx-auto text-center py-24 px-4bg-slate-100 bg-white bg-cover rounded ">
        <h1 className=" font-bold text-[50px] text-[#243665] font-sans 
        subpixel-antialiased sm:text-6xl py-10">
            Deliver Great Customer <a className="text-[#8BD8BD] sm:text-6xl underline decoration-sky-500/30 text-gradient">Service </a> <span className="font-bold text-[50px] text-[#243665] font-sans 
        subpixel-antialiased sm:text-6xl py-10">&</span> <a className="text-[#8BD8BD] sm:text-6xl underline decoration-sky-500/30 text-gradient"> Experience.</a>
        </h1>
        <p className="text-[20px] text-[#243556] py-10">
            Colossal Desk is built to elevate your customer service and experience. <br></br> We set your team
            for success by making sure they are engaging in meaningful conversations <br></br> and they are solving customer queries. 
        </p>
        <a href="#" className="rounded-md bg-[#243665] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#8BD8BD] focus-visible:outline focus-visible:outline-2 
        focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get Free Trial</a>
        <a href="#" className="pl-3 text-[15px] font-semibold leading-6 text-[#243665] ml-5">I want a Demo <span aria-hidden="true">→</span>
        </a>
    </div>
  );
}
