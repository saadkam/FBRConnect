#!/bin/bash

echo "📦 Installing Tailwind and dependencies..."
npm install -D tailwindcss@latest postcss autoprefixer

echo "📁 Creating config files..."

# tailwind.config.js
cat > tailwind.config.js <<EOF
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
EOF

# postcss.config.js
cat > postcss.config.js <<EOF
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
EOF

# Ensure src folder exists
mkdir -p src

# index.css
cat > src/index.css <<EOF
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF

echo "✅ Tailwind setup complete. Make sure 'import \"./index.css\"' exists in src/main.jsx"
