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
        <div className="text-4xl font-bold text-center mb-10 mt-10">
            Let's create a blog
          </div>
          <div className="mb-5">
          <form  className="grid grid-cols-1 mx-auto">
            <div>
                <label className="mr-4">Blog Title</label>
                    <input type="text" name="blogTitle" placeholder="Enter your blog title"  className="w-[20%] p-2 border-b-2 mb-2 focus:outline-none focus:border-blue-500"/>
            </div>
           </form>
          </div>
          <div className="mb-5">
          <JoditEditor
          
          forwardRef={editor}
            value={content}
            config={config}
            tabIndex={10} // tabIndex of textarea
            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            // onChange={(newContent) => setContent(newContent)}
          />
          </div>
          <div className="text-4xl font-bold text-center mb-10 mt-10">
            Blog preview
          </div>
          <div className="mt-5 mb-5">
            {!content && <p>Please create something</p>}
              <p dangerouslySetInnerHTML={{ __html: content }}>

              </p>
          </div>
        </div>
      </section>
    </>
  );
}
