"use client";
import HomepageBlogs from "./HomepageBlogs";

function BlogDisplay() {
  return (
    <>
      <div className="px-2 pt-6 border-b-grey border-b-[1px] mb-7">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex items-center justify-between">
            <span className="border-b-2 py-4 font-semibold cursor-pointer">
              All
            </span>
            <span>Technology</span>
            <span>Health</span>
            <span>Sports</span>
            <span>Fashion</span>
            <span>Music</span>
          </div>
        </div>
      </div>
      <div className="pb-8">
        <HomepageBlogs />
      </div>
    </>
  );
}

export default BlogDisplay;
