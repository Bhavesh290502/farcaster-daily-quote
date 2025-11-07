export const config = {
  runtime: "nodejs",
};

const localQuotes = [
  { content: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { content: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { content: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { content: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
];

export default async function handler(req, res) {
  try {
    const random = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(random);
  } catch (err) {
    res.status(500).json({ error: "Failed to load quote" });
  }
}
