"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getPost } from "../../lib/data";

const Blogpage = () => {
  const [postData, setPostData] = useState([]);
  const data = [
    { title: "web development", id: 1 },
    { title: "ios development", id: 2 },
    { title: "Desktop development", id: 3 },
  ];

  const [slug, setSlug] = useState(null);
  const router = useRouter();

  const apicall = async () => {
    const res = await fetch("http://localhost:3000/api/blog", {
      next: { revalidate: 3600 },
    });
    const data = res.json();
    console.log("from api call data:", data);

    return data;
  };

  useEffect(() => {
    apicall();
    console.log("posts", postData);
  }, [slug]);
  useEffect(() => {
    if (slug !== null) {
      const posts = getPost();
      setPostData(posts);
      console.log("posts", postData);
      // Navigate to the blog detail page when a card is clicked
      router.push(`/blog/${slug}`);
    }
  }, [slug, router]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {data.map((item, index) => (
        <div
          className="card"
          onClick={() => setSlug(item.id)}
          key={index}
          style={{ width: "30%", cursor: "pointer" }}
        >
          <img
            src="https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM"
            style={{ width: "100%" }}
            alt="Card Image"
          />
          <h3>{item.title}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            pariatur.
          </p>
          <p>10/10/2020</p>
        </div>
      ))}
    </div>
  );
};

export default Blogpage;
