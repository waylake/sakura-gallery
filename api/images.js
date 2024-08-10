import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const { page } = req.query;
    const response = await fetch(
      `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=cherry+blossom,sakura&image_type=photo&per_page=20&page=${page}`,
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ error: "An error occurred while fetching images" });
  }
}
