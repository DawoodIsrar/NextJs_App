// import authInstance from "../../../../lib/auth";

// export const POST = async (req, res) => {
//   try {
//     const { provider } = req.body;
//     console.log("p in api", provider);
//     await authInstance.signIn(provider, { redirect: false });

//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error("Error signing in:", error);
//     res.status(500).json({ error: "Failed to sign in" });
//   }
// };
// import authInstance from "../../../../lib/auth";

// export default async function handler(req, res) {
//   try {
//     const { provider } = req.body;
//     console.log("provider in route.js", provider);
//     await authInstance.signIn(provider, { redirect: false });

//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error("ERRRRR signing in:", error);
//     res.status(500).json({ error: "Failed to sign in" });
//   }
// }

export { GET, POST, signIn, signOut, auth } from "../../../../lib/auth";
