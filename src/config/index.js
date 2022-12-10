let config;

if (process.env.BUILD_MODE === "production") {
    config = {
        API_URL: "https://imsprojectapi.netlify.app/api",
        IMAGE: {

        }
    }
} else {
    config = {
        API_URL: "http://localhost:5000/api",
        IMAGE: {
            
        }
    }
}

export default config