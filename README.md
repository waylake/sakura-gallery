# Sakura Gallery

![Sakura Gallery Banner](background-1.png)

Sakura Gallery is a beautiful, responsive web application that showcases cherry blossom images using the Pixabay API. With features like infinite scrolling, dark mode, and a masonry layout, it provides an immersive viewing experience for cherry blossom enthusiasts.

[Visit the Live Demo](https://sakura-gallery.vercel.app/)

## Features

- 🌸 Infinite scrolling of cherry blossom images
- 🌙 Dark mode toggle for comfortable viewing
- 📱 Responsive design for all device sizes
- 🖼️ Masonry layout for aesthetically pleasing image display
- 🔍 Modal view for detailed image inspection
- 🍃 Animated cherry blossom petals for an immersive experience

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Express.js (for API proxy)
- Vercel (for deployment)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn or bun

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/sakura-gallery.git
   cd sakura-gallery
   ```

2. Install dependencies:

   ```
   bun install
   ```

3. Create a `.env` file in the root directory and add your Pixabay API key:
   ```
   PIXABAY_API_KEY=your_api_key_here
   ```

### Running the Application

1. Start the development server:

   ```
   bun run dev
   ```

2. Open your browser and visit `http://localhost:5173`

## Project Structure

```
sakura-gallery/
├── api/
│   ├── image-proxy.js
│   └── images.js
├── public/
├── server/
├── src/
│   ├── components/
│   ├── contexts/
│   ├── hooks/
│   ├── types/
│   └── utils/
├── .env
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vercel.json
```

## Deployment

The project is deployed on Vercel. Any push to the main branch will trigger a new deployment.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

![Cherry Blossom Background](background-2.png)
