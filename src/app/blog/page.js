"use client";
import { useEffect } from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

export default function page() {
  // useEffect(()=>{
  //   async function api(){
  //     const response=await fetch("/api/route")
  //     // .then((res)=>res.json())
  //     .then((res)=>{
  //       console.log(res);
  //     })
  //     .catch((err)=>console.log(err))
  //     console.log(response)
  //   }
  //   api()
  // },[])

  const TagD = ({ text }) => (
    <div className="slide-tag p-3 bg-white-500 border-slate-600 border-[1px] w-fit rounded-xl mix-blend-hard-light text-xs mx-auto">
      {text}
    </div>
  );
  return (
    <main>
      <section>
        <div
          className="blog-banner min-h-screen relative brightness-[0.8]"
          style={{
            background: `url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          }}
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
              <div className="text-lg font-bold">By Jennifer</div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex p-10">
          <div className="w-60 h-auto mr-5">
            <div className="text-sm font-bold">8.8.2021 - 4 minutes</div>
          </div>
          <div className="w-[60%]">
            <div className="blog-descriptions">
              <div className="des1">
                {" "}
                Seamlessly syndicate cutting-edge architectures rather than
                collaborative collaboration and idea-sharing. Proactively
                incubate visionary interfaces whereas premium benefits.
                Seamlessly negotiate ubiquitous leadership skills rather than
                parallel ideas. Dramatically visualize superior interfaces for
                best-of-breed alignments. Synergistically formulate performance
                based users through customized relationships. Interactively
                deliver cross-platform ROI via granular systems. Intrinsicly
                enhance effective initiatives vis-a-vis orthogonal outsourcing.
                Rapidiously monetize market-driven opportunities with
                multifunctional users. Collaboratively enhance visionary
                opportunities through revolutionary schemas. Progressively
                network just in time customer service without real-time
                scenarios.
              </div>
              <div className="des2 mt-5">
                {" "}
                Synergistically drive e-business leadership with unique synergy.
                Compellingly seize market positioning ROI and bricks-and-clicks
                e-markets. Proactively myocardinate timely platforms through
                distributed ideas. Professionally optimize enabled core
                competencies for leading-edge sources. Professionally enhance
                stand-alone leadership with innovative synergy. Rapidiously
                generate backend experiences vis-a-vis long-term high-impact
                relationships. Authoritatively supply market-driven mindshare
                and bricks-and-clicks opportunities. Holisticly create diverse
                innovation through adaptive communities. Efficiently empower
                seamless meta-services with impactful opportunities.
                Distinctively transition virtual outsourcing with focused
                e-tailers.
              </div>
            </div>
            <div className="blogTags flex w-fit gap-3 mt-10">
              {["Technology", "Photo", "Design"].map((data, index) => (
                <TagD key={index} text={data} />
              ))}
            </div>
            <div className="mt-5">
              <div className="flex  justify-between items-center">
                <div className="flex gap-3 items-center">
                  <img
                    className="h-10 w-10 rounded-xl"
                    src={
                      "https://images.unsplash.com/photo-1551847812-f815b31ae67c?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                  />
                  <div>
                    <div className="text-lg font-bold">By Jennifer</div>
                    <div className="text-lg text-gray-600">
                      Thinkner & Designer
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 text-2xl">
                 <FaFacebook />
                 <FaInstagram />
                 <FaPinterest />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}