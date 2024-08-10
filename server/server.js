import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3001;
// Security middlewares
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            ...helmet.contentSecurityPolicy.getDefaultDirectives(),
            "img-src": ["'self'", "data:", "blob:"],
        },
    },
}));
app.use(cors());
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../../dist")));
// Proxy route for Pixabay API
app.get("/api/images", async (req, res) => {
    try {
        const { page } = req.query;
        const response = await fetch(`https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=cherry+blossom,sakura&image_type=photo&per_page=20&page=${page}`);
        const data = await response.json();
        res.json(data);
    }
    catch (error) {
        console.error("Error fetching images:", error);
        res.status(500).json({ error: "An error occurred while fetching images" });
    }
});
app.get("/api/image-proxy", async (req, res) => {
    const imageUrl = req.query.url;
    if (!imageUrl) {
        return res.status(400).send("Image URL is required");
    }
    try {
        const imageResponse = await fetch(imageUrl);
        if (!imageResponse.ok)
            throw new Error("Failed to fetch image");
        const contentType = imageResponse.headers.get("content-type");
        res.setHeader("Content-Type", contentType || "image/jpeg");
        imageResponse?.body?.pipe(res);
    }
    catch (error) {
        console.error("Error proxying image:", error);
        res.status(500).send("Error fetching image");
    }
});
// Handle React routing, return all requests to React app
app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../../dist", "index.html"));
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
