import axios from "axios";

export const config = {
  runtime: "nodejs",
};

export default async function handler(req, res) {
  try {
    const { data } = await axios.get("https://zenquotes.io/api/random", {
      headers: {
        "User-Agent": "FarcasterMiniApp/1.0",
        "Accept": "application/json",
      },
      timeout: 8000,
    });

    if (!Array.isArray(data) || !data[0]) {
      throw new Error("Unexpected response format");
    }

    const quote = {
      content: data[0].q,
      author: data[0].a,
    };

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(quote);
  } catch (error) {
    console.error("❌ API fetch failed:", error.message);
    res.status(500).json({ error: "Failed to load quote", detail: error.message });
  }
}
