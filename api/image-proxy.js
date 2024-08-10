import fetch from "node-fetch";

export default async function handler(req, res) {
  const imageUrl = req.query.url;
  if (!imageUrl) {
    return res.status(400).send("Image URL is required");
  }

  try {
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) throw new Error("Failed to fetch image");

    const contentType = imageResponse.headers.get("content-type");
    res.setHeader("Content-Type", contentType || "image/jpeg");

    return new Promise((resolve, reject) => {
      imageResponse.body.pipe(res);
      imageResponse.body.on("end", resolve);
      imageResponse.body.on("error", reject);
    });
  } catch (error) {
    console.error("Error proxying image:", error);
    res.status(500).send("Error fetching image");
  }
}
