// import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";

// const options = {
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//   ],
// };

// const authInstance = NextAuth(options);

// export default authInstance;

// import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";

// const options = {
//   providers: [
//     GithubProvider({
//       clientId: "c23c9058489130c0b943",
//       clientSecret: "d265fb3dc8a3976e7617f27c5a8f900c61530e60",
//     }),
//   ],
//   baseUrl: process.env.NEXTAUTH_URL,
// };

// const authInstance = NextAuth(options);

// export default authInstance;
// import NextAuth from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import GitHub from "next-auth/providers/github";
import NextAuth from "next-auth";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  providers: [
    GitHub({
      clientId: "c23c9058489130c0b943",
      clientSecret: "d265fb3dc8a3976e7617f27c5a8f900c61530e60",
    }),
  ],
});
