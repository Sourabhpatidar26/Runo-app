"use client";
import Image from "next/image";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SimpleImageSlider from "react-simple-image-slider";
import bannerImg1 from "../../public/images/bannerImg1.png";
import bannerImg2 from "../../public/images/bannerImg2.png";
import hpBanner from "../../public/images/hpBanner.png";
import BlogCard from "./components/Blog/blogCard";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import Modal from "./components/Model";

export default function Home() {
  const images = [
    {
      url: bannerImg1.src,
    },
    {
      url: bannerImg2.src,
    },
    {
      url: "https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const blogsData = [
    {
      id: 1,
      blogHeading: "Introduction to JSON Blogging",
      blogHandle: "json-blogging",
      image: "https://source.unsplash.com/featured/?blogging",
      description:
        "Exploring the wonders of JSON-based blogging and its applications.",
      createdDate: "2024-03-07T12:00:00Z",
      updatedDate: "2024-03-07T14:30:00Z",
      tags: ["technology", "branding"],
    },
    {
      id: 2,
      blogHeading: "Mastering Python for Web Development",
      blogHandle: "python-web-dev",
      image: "https://source.unsplash.com/featured/?python,web",
      description:
        "A comprehensive guide to becoming proficient in Python for web development.",
      createdDate: "2024-03-08T10:30:00Z",
      updatedDate: "2024-03-08T15:45:00Z",
      tags: ["technology"],
    },
    {
      id: 3,
      blogHeading: "The Art of Mobile Photography",
      blogHandle: "mobile-photography",
      image: "https://source.unsplash.com/featured/?mobile,photography",
      description:
        "Unlocking the secrets to capturing stunning photos with your mobile device.",
      createdDate: "2024-03-09T08:45:00Z",
      updatedDate: "2024-03-09T12:20:00Z",
      tags: ["adventure", "fashion"],
    },
    {
      id: 4,
      blogHeading: "Exploring Machine Learning Algorithms",
      blogHandle: "ml-algorithms",
      image: "https://source.unsplash.com/featured/?machine-learning",
      description:
        "Dive into the world of machine learning and understand popular algorithms.",
      createdDate: "2024-03-10T14:00:00Z",
      updatedDate: "2024-03-10T16:45:00Z",
      tags: ["technology"],
    },
    {
      id: 5,
      blogHeading: "Healthy Living: A Holistic Approach",
      blogHandle: "healthy-living",
      image: "https://source.unsplash.com/featured/?health",
      description:
        "Tips and tricks for maintaining a healthy lifestyle and overall well-being.",
      createdDate: "2024-03-11T09:30:00Z",
      updatedDate: "2024-03-11T11:15:00Z",
      tags: ["adventure"],
    },
    {
      id: 6,
      blogHeading: "JavaScript Frameworks Comparison",
      blogHandle: "js-frameworks",
      image: "https://source.unsplash.com/featured/?javascript,frameworks",
      description:
        "An in-depth analysis of popular JavaScript frameworks and their strengths.",
      createdDate: "2024-03-12T12:15:00Z",
      updatedDate: "2024-03-12T14:40:00Z",
      tags: ["technology"],
    },
    {
      id: 7,
      blogHeading: "Traveling on a Budget: Tips and Tricks",
      blogHandle: "budget-travel",
      image: "https://source.unsplash.com/featured/?travel,budget",
      description:
        "Explore the world without breaking the bank with these budget-friendly travel tips.",
      createdDate: "2024-03-13T11:00:00Z",
      updatedDate: "2024-03-13T13:25:00Z",
      tags: ["travel", "adventure"],
    },
    {
      id: 8,
      blogHeading: "The Evolution of Virtual Reality",
      blogHandle: "virtual-reality",
      image: "https://source.unsplash.com/featured/?virtual-reality",
      description:
        "Tracing the history and advancements in virtual reality technology.",
      createdDate: "2024-03-14T15:30:00Z",
      updatedDate: "2024-03-14T18:00:00Z",
      tags: ["technology"],
    },
  ];

  const TagD = ({ text }) => (
    <div className="slide-tag p-3 bg-slate-500 w-fit rounded-xl mix-blend-hard-light text-xs mx-auto">
      {text}
    </div>
  );

  useEffect(()=>{
    Aos.init({once: true});
  },[])

  return (
    <div className="min-h-screen relative max-sm:w-[100%]">
      <section>
        <div>
          <div className="home-slider relative">
            <SimpleImageSlider
              width={"100%"}
              height={"100svh"}
              images={images}
              showBullets={true}
              // showNavs={true}
              autoPlay
              loop
              autoPlayDelay={3}
            />
            <div className="slide-text-section absolute bottom-20 text-white left-5 w-1/2">
              <div className="slide-tag p-3 bg-slate-500 w-fit rounded-xl mix-blend-hard-light text-xs">
                ADVENTURE
              </div>
              <div className="slide-heading mt-3 text-5xl">
                Richird Norton photorealistic rendering as real photos
              </div>
              <div className="slide-description mt-3">
                <div className="grid grid-rows-3 grid-flow-col gap-4">
                  <div className="row-span-3">08.08.2021 ------</div>
                  <div className="row-span-2 col-span-2">
                    Progressively incentivize cooperative systems through
                    technically sound functionalities. The credibly productivate
                    seamless data.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <div className="container mx-auto px-5">
          <div className="text-3xl font-bold">Popular topics</div>
          <div className="blog-filters mt-4">
            <div className="flex flex-row gap-4 text-center">
              <div className="">All</div>
              <div className="">Adventure</div>
              <div className="">Travel</div>
              <div className="">Technology</div>
              <div className="">Branding</div>
            </div>
          </div>
          <div className="blogs">
            <div className="bg-white mt-12 mb-12">
              <div className="">
                <div className=" mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4 sm:justify-items-center">
                  {blogsData && blogsData.length > 0 ? (
                    blogsData.map((blog) => (
                      <div data-aos="fade-up">
                        <BlogCard blog={blog} type={"blogs"}/>
                      </div>
                    ))
                  ) : (
                    <h2>No blogs found</h2>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16">
        <div
          style={{ backgroundImage: `url('${hpBanner.src}')` }}
          className="hp-middle-banner bg-no-repeat bg-cover"
        >
          <div
            className={` min-h-screen text-white flex justify-center items-center text-center`}
          >
            <div className="w-1/2">
              <TagD text={"Fashion"} />
              <div className="slide-heading mt-3 text-5xl">
                Richird Norton photorealistic rendering as real photos
              </div>
              <p className="mt-5 mb-5">
                Progressively incentivize cooperative systems through
                technically sound functionalities. The credibly productivate
                seamless data.
              </p>
              <p className="border-b mt-5 mb-5"></p>
              <div>08.08.2021</div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <div className="container mx-auto px-5">
          <div className="text-3xl font-bold">Editor's pick</div>
          <div className="blogs">
            <div className="bg-white mt-12 mb-12">
              <div className="editors-pick">
                <div className=" mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                  {blogsData && blogsData.length > 0 ? (
                    blogsData.map((blog,index) => {
                    if(index >= 3) return false
                      return(
                      <div data-aos="fade-up">
                        <BlogCard blog={blog} type={"editor"}/>
                      </div>
                    )
                  })
                  ) : (
                    <h2>No blogs found</h2>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        {/* <Modal /> */}
      </section>
    </div>
  );
}
