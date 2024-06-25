"use client";

import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';

export default function page() {
    useEffect(()=>{
        Aos.init();
      },[])

const dataArray=[{
    heading:"My Journey",
    description:`My journey in the world of blogs began [mention any significant
        event or moment that sparked your interest]. Since then, I've been
        on a mission to explore, learn, and share my knowledge with a wider
        audience. The road hasn't always been easy, but every challenge has
        been a stepping stone towards creating a meaningful space for
        [subject matter] enthusiasts.`,
        imgSrc:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    heading:"The Mission",
    description:` At Runo, our mission is to [describe the purpose and goals of your
        blog]. I believe that [subject matter] is not just a hobby but a way
        of life, and through this blog, I aim to [explain the value you want
        to provide to your readers]. Whether you're a seasoned [subject
        matter] pro or just starting your journey, I hope you find
        inspiration, information, and a sense of community here.`,
        imgSrc:"https://images.unsplash.com/photo-1523287562758-66c7fc58967f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

}
,
{
    heading:"What to Expect",
    description:` Expect a diverse range of content covering
    travelling,sports,technology,world,cooking and many more. From
    in-depth articles and tutorials to personal reflections and the
    latest trends, I strive to make Runo a comprehensive resource for
    [subject matter] enthusiasts.`,
    imgSrc:"https://images.unsplash.com/photo-1467746474745-41dd2c7524ce?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

}
,
{
    heading:"Let's Connect",
    description:`I love engaging with the Runo community. Connect with me on
    runo@example.com for real-time updates, behind-the-scenes glimpses,
    and more. Your thoughts and feedback are always welcome!`,
    imgSrc:"https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

}
,
{
    heading:"A Personal Note",
    description:`Thank you for being a part of this journey. Runo wouldn't be what it
    is without the incredible support of readers like you. I'm excited
    about the future and the opportunities to explore, learn, and grow
    together.`,
    imgSrc:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

}
,
{
    heading:"contact me",
    description:`Feel free to <a href="#contact">contact me</a> with any questions,
    suggestions, or just to say hello. Let's make this Runo a vibrant
    and enriching space for everyone!`,
    imgSrc:"https://images.unsplash.com/photo-1463573230746-1049c264?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

}
]

const AboutCard=({data,index})=>{
  return(
    <section data-aos={(index%2) === 0?"fade-left":"fade-right"} className="mt-5 mb-3 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl">
          <div className="md:flex"> 
             <div class="md:shrink-0">
               {data.imgSrc && <img className="h-48 w-full object-cover md:h-full md:w-48" src={data.imgSrc}/> || <img src="https://images.unsplash.com/photo-1610513320995-1ad4bbf25e55?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>}
            </div>
            <div class="p-8">
          <h2 className="font-bold text-xl" dangerouslySetInnerHTML={{__html:data.heading}}></h2>
          <p>{data.description}</p>
          </div>
          </div>
        </section>
  )
}

  return (
    <main>
      <section>
        <div className="about-banner min-h-screen relative brightness-[0.8]">
          <div className="absolute bottom-[20%] left-[10%]">
            <div className="text-2xl font-bold text-white">Who we are</div>
            <div className="text-5xl h-[100%] font-bold mt-2 text-white">
              Designer,thinkers & collaborators
            </div>
          </div>
        </div>
      </section>
      <div className="p-8">
        <div className="mt-5 mb-3">
          <div className="font-bold text-3xl">About Runo</div>
        </div>

        <section className="mt-5 mb-3">
          <h2>Welcome to Runo!</h2>
          <p>
            I'm Sam, the creator and passionate mind behind this platform. I
            started this blog out of a deep love for [subject matter], and it
            has become a space where I can share my thoughts, experiences, and
            insights with you.
          </p>
        </section>
        <div className="grid grid-cols-1">
            {
                dataArray && dataArray.length ? dataArray.map((data,index)=>(
                  <AboutCard data={data} index={index}/>
                )):""
            }
       </div>
        <div className="mt-5 mb-3">
          <p>
            Cheers,
            <br />
            Sam
          </p>
        </div>
      </div>
    </main>
  );
}
