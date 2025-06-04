[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/sebastianvelo/wikirdle)

# Wikirdle

**Wikirdle** is a web game where players navigate from one Wikipedia article to another using only internal links, aiming to reach the target page in the fewest number of clicks.

## 🌐 Live Site

👉 [wikirdle.web.app](https://wikirdle.web.app)

## 🚀 How to Play

1. **Start**: Choose a starting Wikipedia article and a target one.
2. **Navigate**: Click on internal links within the articles to progress toward your goal.
3. **Finish**: The game tracks the number of clicks, time taken, and the full path taken.

## 🧱 Technologies Used

- **React** 18.2.0
- **TypeScript** 4.9.5
- **Tailwind CSS** 3.4.17
- **React Router DOM** 7.1.1
- **Webpack** 5.99.7
- **Firebase Hosting**
- **Axios** for HTTP requests
- **Lucide React** for icons
- **PostCSS + Autoprefixer** for CSS processing

## Development Setup

This guide will help you set up and run the **Wikirdle** project locally.

### 🛠️ Requirements

- Node.js (v18 or later recommended)
- npm

### 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/sebastianvelo/wikirdle.git
cd wikirdle
```

2. **Install dependencies**

```bash
npm install
```

### 🚀 Development

To run the development server:

```bash
npm start
```

This uses `webpack serve` in development mode.

To watch and build Tailwind CSS automatically:

```bash
npm run tw:watch
```

### 🏗️ Build for Production

To build the project and compile Tailwind CSS:

```bash
npm run build
```

This will:
- Compile Tailwind (`tw:build`)
- Build the app with Webpack in production mode

### 📂 Tailwind CSS Manual Build

If you need to build Tailwind CSS separately:

```bash
npm run tw:build
```

This reads from `src/styles.css` and outputs to `src/output.css`.

---

## 📂 Project Structure

- `@common/*`: Shared helpers and utility functions
- `@context/*`: React context providers for state management
- `@layout/*`: Layout components like headers and footers
- `@screens/*`: Main application screens and their logic
- `@components/*`: Reusable UI components

## 🔒 Privacy

Wikirdle does **not** collect or transmit personal data. It uses `localStorage` to save user preferences like language and theme. See the [Privacy Policy](https://wikirdle.web.app/privacy-policy) for details.

## 📬 Contact

If you have any questions or feedback, feel free to reach out:

- **Email**: wikirdle@gmail.com