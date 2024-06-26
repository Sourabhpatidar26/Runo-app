"use client";
import Link from "next/link";
import "./Header.css";
import { useEffect, useState } from "react";
import { cinzel } from "@/app/utils/fonts";

export default function Header() {
  const [scrolltopdata, setscrolltopdata] = useState("");

  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(!opened);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 500) {
        setscrolltopdata("");
      } else {
        setscrolltopdata("header-scrolled");
      }
    });
  }, []);
  return (
    <>
      <div className={`header-box fixed z-30 ${scrolltopdata} max-sm:h[100vh]`}>
        <div className="grid grid-cols-2 gap-4 p-3 mb-2">
          <div className={`ml-8 text-3xl font-bold uppercase ${cinzel.className}`}>Runo</div>
          <div className="max-lg:block hidden relative">
            <div className="absolute right-3">
              <div
                id="nav-icon1"
                className={`menu ${opened ? "open" : ""}`}
                onClick={handleClick}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="max-lg:hidden lg:block">
            <div className="head-links flex justify-center text-center gap-2">
              <span>
                <Link href="/">Home</Link>
              </span>
              <span>
                <Link href="/about">About us</Link>
              </span>
              <span>
                <Link href="/">Articles</Link>
              </span>
              <span>
                <Link href="/contact-us">Contact us</Link>
              </span>
              <div className="flex gap-3 items-center cursor-pointer">
                <Link href="/myprofile">
                  <img
                    className="h-10 w-10 rounded-xl"
                    src={
                      "https://images.unsplash.com/photo-1551847812-f815b31ae67c?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {opened && (
          <div className="mob-head">
            <div className="max-lg:block hidden max-lg:p-4">
              <div className="head-links flex flex-col justify-center text-center gap-2">
                <span>
                  <Link href="/">Home</Link>
                </span>
                <span>
                  <Link href="/about">About us</Link>
                </span>
                <span>
                  <Link href="/">Articles</Link>
                </span>
                <span>
                  <Link href="/contact-us">Contact us</Link>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
