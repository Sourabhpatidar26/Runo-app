"use client";

import Link from "next/link";

export default function Page() {

  return (
    <div className="font-sans">
      <section>
        <div className="contact-banner min-h-screen relative brightness-[0.8] bg-cover bg-center bg-[url('/path/to/your/image.jpg')]">
          <div className="absolute bottom-[20%] left-[10%] animate-on-scroll">
            <div className="text-5xl font-extrabold text-white drop-shadow-md">
              This is my area
            </div>
            <div className="text-2xl font-semibold text-white drop-shadow-md mt-4">
              I create blogs for you
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 animate-on-scroll">
        <div className="p-16">
          <div className="text-4xl font-bold text-center">
            How to Start a Blog
          </div>
          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <ol className="p-10 text-xl list-decimal bg-gray-800 text-white rounded-lg leading-10 shadow-lg shadow-gray-700 animate-fade-in">
                <li>Understand your audience.</li>
                <li>Check out your competition.</li>
                <li>Determine what topics you'll cover.</li>
                <li>Identify your unique angle.</li>
                <li>Name your blog.</li>
                <li>Create your blog domain.</li>
                <li>Choose a CMS and set up your blog.</li>
                <li>Customize the look of your blog.</li>
                <li>Write your first blog post.</li>
              </ol>
              <div className="mx-auto text-center animate-fade-in">
                <div className="text-2xl font-bold mb-5">Start creating</div>
                <Link href={"/createBlog"} className="transition ease-in-out duration-200 mt-8 px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg shadow-lg hover:bg-lime-500">
                     Let's Go
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
