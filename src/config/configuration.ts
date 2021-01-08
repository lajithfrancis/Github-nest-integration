export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    github: {
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    }
});
