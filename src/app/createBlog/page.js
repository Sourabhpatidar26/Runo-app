"use client"
import { useRef, useState } from "react";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-pro-react"), {
  ssr: false,
});

export default function page() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/docs/,
    uploader: {
      url: "https://xdsoft.net/jodit/finder/?action=fileUpload",
    },
    filebrowser: {
      ajax: {
        url: "https://xdsoft.net/jodit/finder/",
      },
      height: 1000,
    },
  };
  return (
    <>
      <section>
        <div className="p-6 mb-20 pt-24">
          <div className="text-xl h-[100%] font-bold mt-2 ml-2 text-black mb-4">
            {" "}
            Let's create a blog
          </div>
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={10} // tabIndex of textarea
            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={(newContent) => {
              console.log("content", newContent);
            }}
          />
        </div>
      </section>
    </>
  );
}
