let config;

if (process.env.BUILD_MODE === "production") {
  config = {
    SOCKET:"https://ims-project-backend.vercel.app",
    API_URL: "https://ims-project-backend.vercel.app/api",
    IMAGE: {},
  };
} else {
  config = {
    API_URL: "https://ims-project-backend.vercel.app/api",
    SOCKET: "https://ims-project-backend.vercel.app",
    // SOCKET: "http://localhost:5000",
    // API_URL: "http://localhost:5000/api",
    IMAGE: {},
  };
}

export default config;
