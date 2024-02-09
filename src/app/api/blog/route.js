import { signIn } from "../lib/auth";

export const POST = async (req, res) => {
  try {
    const { provider } = req.body;
    console.log("p in api", provider);
    await signIn(provider, { redirect: false });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(500).json({ error: "Failed to sign in" });
  }
};
