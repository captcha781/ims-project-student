let config;

if (process.env.BUILD_MODE === "production") {
    config = {
        API_URL: "https://ims-project-backend.vercel.app/api",
        IMAGE: {

        }
    }
} else {
    config = {
        API_URL: "https://ims-project-backend.vercel.app/api",
        IMAGE: {
            
        }
    }
}

export default config
