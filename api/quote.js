export const config = {
  runtime: "nodejs",
};

// ✅ Local quotes list (feel free to expand)
const quotes = [
  { content: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { content: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { content: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { content: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { content: "Happiness depends upon ourselves.", author: "Aristotle" },
  { content: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  { content: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
];

export default async function handler(req, res) {
  try {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(random);
  } catch (error) {
    console.error("❌ Error serving quote:", error.message);
    res.status(500).json({ error: "Failed to load quote" });
  }
}
