"use client";
import { useState, useEffect } from "react";

const page = (params) => {
  console.log("params:", params);
  const { slug } = params.params;
  console.log("slug after click:", slug);

  const apicall = async () => {
    console.log("slug in function", slug);
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
      next: { revalidate: 3600 },
    });
    const data = res.json();
    console.log("from api call data:", data);

    return data;
  };
  useEffect(() => {
    apicall();
  });

  return (
    <div>
      <div className="card" style={{ width: "30%" }}>
        <img
          src="https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM"
          style={{ width: "100%" }}
        ></img>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          pariatur.
        </p>
        <p>10/10/2020</p>
      </div>
    </div>
  );
};

export default page;
