"use client";
import React from "react";
import { useEffect, useState } from "react";
import { collection, onSnapshot, Timestamp } from "firebase/firestore";
import { db } from "../_lib/firebase";
import Image from "next/image";
import { Excerpts } from "../_lib/utils";
import { Manrope } from "next/font/google";
import { HomepageBlogInterface } from "../_lib/TypeInterface";

const manrope = Manrope({
  subsets: ["latin"],
  weight: "400",
});


function HomepageBlogs() {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState<HomepageBlogInterface[]>([]);
  const [secondBlogs, setSecondBlogs] = useState<HomepageBlogInterface[]>([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const unsub = onSnapshot(
          collection(db, "blogDisplay"),
          (snapshot) => {
            const list: HomepageBlogInterface[] = [];
            snapshot.docs.forEach((doc) => {
              list.push({ id: doc.id, ...doc.data() } as HomepageBlogInterface);
            });
            setBlogs(list);
            console.log(list);
            setLoading(false);
          },
          (error) => {
            console.log(error);
          }
        );

        return () => {
          unsub();
        };
      } catch (err) {
        if (err instanceof Error) {
          // e is narrowed to Error!
          console.log(err.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, []);

  useEffect(() => {
    if (blogs.length >= 3) {
      setSecondBlogs(blogs.slice(1, 3));
    }
  }, [blogs]);

  if (loading) {
    return <div>Loading .....</div>;
  }

  return (
    <div className={`${manrope.className} max-w-[1100px] mx-auto pt-6`}>
      <div>
        <div className="flex gap-2 pb-20">
          <div className="basis-[50%]">
            <Image
              src={blogs[0]?.details_image}
              alt={blogs[0]?.title}
              width="450"
              height="400"
              className=" rounded-xl"
            />
          </div>
          <div className="basis-[50%] pt-4">
            <div className="flex items-center gap-1 pb-2">
              <span className="font-semibold text-[15px] tracking-wider text-purple uppercase">
                {blogs[0]?.category}
              </span>
              <div className="w-4 h-[1px] bg-grey"></div>
              <span className="font-light">
                {blogs[0]?.date_added.toDate().toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <h6 className="font-bold text-xl tracking-wider pb-2 uppercase">
              {blogs[0]?.title}
            </h6>
            <p className="text-[16px] font-[500]">
              {Excerpts(blogs[0]?.details, 220)}
            </p>
            <div className="flex items-center gap-3 pt-4">
              <Image
                src={blogs[0]?.icon}
                width="48"
                height="48"
                alt={blogs[0]?.title}
                className="rounded-[50%]"
              />
              <div className="font-bold text-lg">{blogs[0]?.author}</div>
            </div>
          </div>
        </div>
        <div className="flex gap-16">
          {secondBlogs.map((blog, index) => (
            <div key={index} className="flex flex-col gap-2 mt-4">
              <div className="basis-[50%]">
                <Image
                  src={blog.details_image}
                  alt={blog.title}
                  width="470"
                  height="40"
                  className="rounded-xl h-[250px]"
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
                <h6 className="font-bold text-xl tracking-wider pb-2 uppercase">
                  {blog.title}
                </h6>
                <p className="text-[16px] font-[500]">
                  {Excerpts(blog.details, 220)}
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <Image
                    src={blog.icon}
                    width="48"
                    height="48"
                    alt={blog.title}
                    className="rounded-[50%]"
                  />
                  <div className="font-bold text-lg">{blog.author}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomepageBlogs;
