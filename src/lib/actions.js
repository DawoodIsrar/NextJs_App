"use server";

import { Post } from "./models";
import { connectDB } from "./util";

export const addPost = async (formdata) => {
  const { title, desc, slug, userId, email } = Object.fromEntries(formdata);
  //   console.log(title, desc, slug, userid);
  try {
    await connectDB();
    const newPost = await new Post({
      title,
      desc,
      slug,
      userId,
      email,
    });

    await newPost.save();

    console.log(newPost);
  } catch (error) {
    console.log(error);
  }
};
export const deletePost = async (id) => {
  console.log("id recieve", id);
  try {
    await connectDB();
    const deleted = await Post.findByIdAndDelete(id);

    console.log("from db deleted ", deleted);
  } catch (error) {
    console.log(error);
  }
};
