import "./blog.css";
export default function BlogCard({blog}) {
  return (
            <article className="flex max-w-xl flex-col items-start justify-between relative">
              <div className="flex items-center gap-x-4 text-xs relative">
                <img className="rounded" src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <a
                  href="#"
                  className="absolute right-2 top-3 z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {blog.tags[0]}
                </a>
              </div>
              <div className={`inner-card mt-2`}>
              <time className="text-gray-500 select-none">Mar 16, 2020</time>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"><a href="#"><span className="absolute inset-0"></span>{blog.blogHeading}</a></h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{blog.description}</p>
              </div>
              </div>
            </article>
  );
}
