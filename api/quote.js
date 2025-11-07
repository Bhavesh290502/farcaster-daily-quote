export const config = {
  runtime: "nodejs",
};

export default async function handler(req, res) {
  try {
    const response = await fetch("https://zenquotes.io/api/random", {
      headers: {
        "User-Agent": "FarcasterMiniApp/1.0",
        "Accept": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Upstream error: ${response.status}`);
    }

    const data = await response.json();

    // ✅ ZenQuotes returns an array, so we grab the first element
    const quote = {
      content: data[0]?.q || "Keep pushing forward.",
      author: data[0]?.a || "Unknown",
    };

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(quote);
  } catch (error) {
    console.error("❌ Quote API error:", error.message);
    res.status(500).json({ error: "Failed to load quote", detail: error.message });
  }
}
