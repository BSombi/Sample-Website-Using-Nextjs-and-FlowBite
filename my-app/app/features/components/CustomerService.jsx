import NavBar from '@/app/components/NavBar'
import Image from 'next/image'
import React from "react"

export default function CustomerService() {
  return (
    <div>
      <NavBar />
      <div className="text-center">
        <h1 className="font-bold text-[50px]">Manage all your interactions</h1>
        <h1 className="font-bold text-[50px]">from one place</h1>
        <p className="py-8">Respond to all customers from one place. Work together as a team with notes, <br></br>
        reminders, assignments, and powerful notifications.</p>
        <a href="#" className="rounded-md bg-[#243665] px-5 py-5 text-sm font-semibold text-white shadow-sm hover:bg-[#8BD8BD] focus-visible:outline focus-visible:outline-2 
        focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get Free Trial</a>
      </div>

      <div class=" mx-auto bg-white rounded-xl shadow-md overflow-hidden px-8 pt-32 pb-8 sm:text-center sm:flex-1">
        <div class="md:flex px-3 sm:text-left sm:flex">
           <div class="pl-20 p-[50px] pr-30 flex-1 pt-1">
            <h2 className="text-[30px] font-semibold py-1 text-justify">Zero clutter shared inbox</h2>
            <p className="text-justify text-gray-500">With a familiar and clean ready-to-use design, never lose a request from any of your customers from any channel.</p>
            <p className="py-4 text-justify text-gray-500">Auto-assign and collaborate with your teammates to provide faster resolutions.</p>
          </div>
          <div class="md:shrink-0 flex-1 md:flex-1 sm:flex">
            <Image class="h-48 w-full object-cover"
                  src="/f18a0990.png"
                  alt="Picture of the author"
                  width={500} 
                  height={500} 
                  blurDataURL="data:..." 
                  placeholder="blur" // Optional blur-up while loading
                />
          </div>
        </div>
      </div>

      <div class=" mx-auto bg-white rounded-xl shadow-md overflow-hidden px-8 py-8 sm:text-center sm:flex-1">
        <div class="md:flex px-3 sm:text-left sm:flex">
          <div class="md:shrink-0 flex-1 md:flex-1 sm:flex">
            <Image class="h-48 w-full object-cover"
                  src="/f18a0990.png"
                  alt="Picture of the author"
                  width={500} 
                  height={500} 
                  blurDataURL="data:..." 
                  placeholder="blur" // Optional blur-up while loading
                />
          </div>
          <div class="pr-20 p-[50px] pl-30 flex-1 pt-1">
            <h2 className="text-[30px] font-semibold py-1 text-justify">Zero clutter shared inbox</h2>
            <p className="text-justify text-gray-500">With a familiar and clean ready-to-use design, never lose a request from any of your customers from any channel.</p>
            <p className="py-4 text-justify text-gray-500">Auto-assign and collaborate with your teammates to provide faster resolutions.</p>
          </div>
        </div>
      </div>

      <div class=" mx-auto bg-white rounded-xl shadow-md overflow-hidden px-8 py-8 sm:text-center sm:flex-1">
        <div class="md:flex px-3 sm:text-left sm:flex">
           <div class="pl-20 p-[50px] pr-30 flex-1 pt-1">
            <h2 className="text-[30px] font-semibold py-1 text-justify">Zero clutter shared inbox</h2>
            <p className="text-justify text-gray-500">With a familiar and clean ready-to-use design, never lose a request from any of your customers from any channel.</p>
            <p className="py-4 text-justify text-gray-500">Auto-assign and collaborate with your teammates to provide faster resolutions.</p>
          </div>
          <div class="md:shrink-0 flex-1 md:flex-1 sm:flex">
            <Image class="h-48 w-full object-cover"
                  src="/f18a0990.png"
                  alt="Picture of the author"
                  width={500} 
                  height={500} 
                  blurDataURL="data:..." 
                  placeholder="blur" // Optional blur-up while loading
                />
          </div>
        </div>
      </div>

      <div class=" mx-auto bg-white rounded-xl shadow-md overflow-hidden px-8 py-8 sm:text-center sm:flex-1">
        <div class="md:flex px-3 sm:text-left sm:flex">
          <div class="md:shrink-0 flex-1 md:flex-1 sm:flex">
            <Image class="h-48 w-full object-cover"
                  src="/f18a0990.png"
                  alt="Picture of the author"
                  width={500} 
                  height={500} 
                  blurDataURL="data:..." 
                  placeholder="blur" // Optional blur-up while loading
                />
          </div>
          <div class="pr-20 p-[50px] pl-30 flex-1 pt-1">
            <h2 className="text-[30px] font-semibold py-1 text-justify">Zero clutter shared inbox</h2>
            <p className="text-justify text-gray-500">With a familiar and clean ready-to-use design, never lose a request from any of your customers from any channel.</p>
            <p className="py-4 text-justify text-gray-500">Auto-assign and collaborate with your teammates to provide faster resolutions.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

