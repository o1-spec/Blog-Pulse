"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import { HomepageBlogInterface } from "./TypeInterface";

export const useFetchBlogs = () => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState<HomepageBlogInterface[]>([]);

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
          console.log(err.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, []);

  return { loading, blogs };
};
