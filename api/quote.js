export const config = {
  runtime: "nodejs",
};

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Just return a static quote directly
  res.status(200).json({
    content: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  });
}
