"use server";
import { connectDB } from "./util";
import { Post, User } from "./models";
export const getPost = async () => {
  try {
    connectDB();
    console.log("Post model:", Post); // Add this line for debugging

    const posts = await Post.find();
    console.log("in api", posts);
    return posts.json;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getPostbySlug = async ({ slug }) => {
  try {
    connectDB();
    const posts = await Post.find({ slug });
    return posts;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (id) => {
  try {
    connectDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
  }
};
