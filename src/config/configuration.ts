export default () => ({
    port: parseInt(process.env.PORT, 10) || 4000,
    github: {
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET
    }
});
