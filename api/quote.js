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

    // ZenQuotes returns an array with one quote object
    const quote = {
      content: data[0].q,
      author: data[0].a,
    };

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(quote);
  } catch (error) {
    console.error("❌ Quote API error:", error.message);
    res.status(500).json({ error: "Failed to load quote", detail: error.message });
  }
}
