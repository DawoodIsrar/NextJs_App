import { Post } from "../../../../lib/models";
import { connectDB } from "../../../../lib/util";
import { NextResponse } from "next/server";

export const GET = async (request, params) => {
  const { slug } = params.params;
  console.log("slug recieved in api:", slug);
  try {
    await connectDB();
    const posts = await Post.findById(slug);
    console.log("from blog api:::::::", posts);
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch posts");
  }
};
