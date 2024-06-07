# Service worker for data storage and background sync - Proof of Concept

🎉 Welcome to our educational project! This repository showcases how to create a Progressive Web App (PWA) using Vite, Vue, and TypeScript, along with a simple Express-based server. The project demonstrates how to use a service worker to store data in the browser's IndexedDB and perform periodic syncs with a backend, making the app installable and capable of offline functionality.

## Features

- ⚡ **Vite + Vue + TypeScript**: Modern frontend stack for fast development and optimal performance.
- 🔒 **HTTPS Support**: Run both frontend and backend with HTTPS, even in development mode.
- 🛠️ **Express Backend**: A simple Express-based server also running with HTTPS.
- 🛡️ **Service Worker**: Manages data storage in IndexedDB and syncs with the backend.
- 📲 **PWA**: Installable app with offline capabilities.

## Getting Started

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/arusak/mighty-service-worker.git
   cd vite-vue-ts-pwa-express
   ```

2. **Install dependencies for both frontend and backend:**

   ```sh
   npm install
   cd server
   npm install
   ```

### Running the Development Server

1. **Generate SSL Certificates:**

   To enable HTTPS, you need SSL certificates. You can generate self-signed certificates using the following command:

   ```sh
   openssl req -nodes -new -x509 -keyout server.key -out server.cert
   ```

   This will create `server.key` and `server.cert` files. Move these files to the `certs` directory in both the root and `backend` folders.

2. **Start the backend server:**

   ```sh
   cd backend
   npm run dev
   ```

   The backend server will start on `https://localhost:8787`.

3. **Start the frontend app:**

   ```sh
   cd ..
   npm run dev
   ```

   The frontend app will start on `https://localhost:3000`.

### Building for Production

1. **Build the frontend app:**

   ```sh
   npm run build
   ```

2. **Serve the frontend app:**

   ```sh
   npm run serve
   ```

### Installing the PWA

1. **Open the app in your browser:**

   Navigate to `https://localhost:3000`.

2. **Install the PWA:**

    - On Chrome, click the install icon in the address bar.
    - On Firefox, open the browser menu and select "Install".

## Contributing

We welcome contributions! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

---

Thank you for checking out our project! We hope this inspires you to create your own PWAs and leverage the power of service workers and IndexedDB. Happy coding! 🚀