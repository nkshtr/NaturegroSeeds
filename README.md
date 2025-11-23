# Naturegro Seeds Website

A modern, responsive website for Naturegro Seeds, built with HTML, CSS, JavaScript, and Vite.

## Project Setup

Before running the project, make sure you have [Node.js](https://nodejs.org/) installed.

1.  Open your terminal/command prompt.
2.  Navigate to the project folder.
3.  Install dependencies:
    ```bash
    npm install
    ```

## Running Locally (Development)

To start the development server with hot-reloading (changes appear instantly):

```bash
npm run dev
```

-   The site will usually be available at `http://localhost:5173`.
-   Press `Ctrl + C` in the terminal to stop the server.

## Building for Production

To create an optimized build for deployment:

```bash
npm run build
```

This will create a `dist` folder containing the production-ready files.

## Previewing Production Build

To test the production build locally:

```bash
npm run preview
```

## Project Structure

-   `src/`: Source code
    -   `assets/`: Images and static resources
    -   `data/`: Data files (e.g., product information)
    -   `styles/`: CSS files
    -   `js/`: Additional JavaScript modules
-   `index.html`: Main entry point (Home page)
-   `product.html`: Product details template
-   `vite.config.js`: Vite configuration settings
