export default async function handler(request, response) {
  try {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();

    // ✅ Enable CORS for Farcaster
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.status(200).json(data);
  } catch (err) {
    console.error("Error fetching quote:", err);
    response.status(500).json({ error: "Failed to load quote" });
  }
}
