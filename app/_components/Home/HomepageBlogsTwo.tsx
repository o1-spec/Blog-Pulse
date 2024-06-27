"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Excerpts } from "../../_lib/utils";
import { HomepageBlogInterface } from "../../_lib/TypeInterface";
import { useFetchBlogs } from "@/app/_lib/actions";

function HomepageBlogsTwo() {
  const { loading, blogs } = useFetchBlogs();
  const [thirdBlogs, setThirdBlogs] = useState<HomepageBlogInterface[]>([]);

  useEffect(() => {
    if (blogs.length >= 6) {
      setThirdBlogs(blogs.slice(3, 6));
    }
  }, [blogs]);

  if (loading) {
    return <div>Loading .....</div>;
  }

  return (
    <div className={`max-w-[1000px] mx-auto py-10 pb-16`}>
      <div className="flex gap-8">
        {thirdBlogs.map((blog, index) => (
          <div key={index} className="flex flex-col gap-2 mt-4">
            <div className="basis-[50%]">
              <Image
                src={blog.details_image}
                alt={blog.title}
                width="350"
                height="40"
                className="rounded-xl h-[200px]"
              />
            </div>
            <div className="basis-[50%] pt-4">
              <div className="flex items-center gap-1 pb-2">
                <span className="font-semibold text-[15px] tracking-wider text-purple uppercase">
                  {blog.category}
                </span>
                <div className="w-4 h-[1px] bg-grey"></div>
                <span className="font-light">
                  {blog.date_added.toDate().toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <h6 className="font-bold text-lg tracking-wide pb-2 uppercase">
                {blog.title}
              </h6>
              <p className="text-[15px] font-[500]">
                {Excerpts(blog.details, 120)}
              </p>
              <div className="flex items-center gap-3 pt-4">
                <Image
                  src={blog.icon}
                  width="48"
                  height="48"
                  alt={blog.title}
                  className="rounded-[50%] object-cover"
                />
                <div className="font-bold text-md">{blog.author}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomepageBlogsTwo;
