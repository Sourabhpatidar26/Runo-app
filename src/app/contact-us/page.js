"use client"
import { useState } from "react";

export default function page() {
  const [user,setUser]=useState({
    userName:"",
    email:"",
    message:""
  })
const handleSubmit = (e) =>{
  e.preventDefault()
  console.log("submit",user);
}

  return (
    <main>
      <section>
        <div className="contact-banner min-h-screen relative brightness-[0.8]">
        <div className="absolute bottom-[20%] left-[10%]">
            {/* <div className="text-2xl font-bold text-white">Who we are</div> */}
            <div className="text-5xl h-[100%] font-bold mt-2 text-white">
              We Are Here For You
            </div>
            <div className="text-xl h-[100%] font-bold mt-2 ml-2 text-white">  We can help. Our team of experts <br /> is on hand to answer your questions.</div>
          </div>
        </div>
      </section>
      <section className="mt-10 mb-10">
        <div className="p-10 text-center">
        <div className="text-3xl font-bold mb-10">Contact us</div>
        <div className="shadow-xl">
          <div className="grid grid-cols-1 w-[100%] justify-items-center p-5 gap-3">
            <div className="bg-white w-[100%] flex justify-center">
              <div className="mt-3 mb-3 w-[100%] max-w-[50%] ">
                <div className="text-sm text-grey-200">Feel Free to contact us any time. We will get back to you as soon as we can!.</div>
                <div className="mb-2 p-2 mx-auto">
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 mx-auto">
                    <input type="text" name="userName" placeholder="Name" value={user.userName} onChange={(e)=>setUser(prevState=>{return{...prevState,userName:e.target.value}})} className="p-2 border-b-2 mb-2 focus:outline-none focus:border-blue-500"/>
                    <input type="email" name="email" placeholder="Email" value={user.email} onChange={(e)=>setUser(prevState=>{return{...prevState,email:e.target.value}})} className="p-2 border-b-2 mb-2 focus:outline-none focus:border-blue-500"/>
                    <textarea name="message" placeholder="Enter your message" onChange={(e)=>setUser(prevState=>{return{...prevState,message:e.target.value}})} className="p-2 border-b-2 mb-2 focus:outline-none focus:border-blue-500"/>
                    <button type="submit" className="transition ease-in mt-2 p-1 bg-gray-200 text-black border-2 border-gray-400 rounded-2xl hover:border-gray-800">Send</button>
                  </form>
                </div>
              </div>
            </div>
          
          </div>
        </div>
        </div>
        </section>
      <section className="mt-10">
        <div className="p-10 text-center">
          <div className="text-3xl font-bold mb-10">Find us on google map</div>
          <div>
          <iframe className="border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094339!2d88.04952462217592!3d22.6757520733225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1596988408134!5m2!1sen!2sin" width="100%" height="450" tabIndex="0"></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
