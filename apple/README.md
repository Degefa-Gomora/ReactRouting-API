# React + Vite

Apple Website Clone
Tech Stack: React, Node.js, Express.js, MySQL

Built a fully functional Apple website clone using a modern full-stack architecture. The project replicates core features of Apple’s official site with dynamic data management and an engaging UI:

Frontend (React): Developed a responsive, component-based interface mimicking Apple’s sleek design. Implemented React Router for seamless single-page navigation, including individual product detail pages.

Backend (Node.js & Express.js): Built a robust REST API to handle HTTP requests, connect to MySQL, and serve product data. Used environment configurations for secure deployment.

Database (MySQL): Designed relational schemas for products, descriptions, pricing, users, and orders, enabling scalable data storage and easy querying.

Single Product Pages: Dynamically fetched and displayed product details (like iPhones) by extracting slugs from product URLs, demonstrating practical use of React Router’s dynamic routes (/iphone/:pid).

Other Highlights:

  -Enabled CORS for cross-origin frontend-backend communication.

  -Structured code for maintainability with modular React components and Express routes.

  -Deployed frontend and backend separately, ensuring production-ready builds with proper environment settings.




















This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
