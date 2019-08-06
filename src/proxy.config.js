const PROXY_CONFIG = [
    {
        context: [
            '/todos',
            '/student'
        ],

        target: "http://localhost:4000",
        secure: false,
        changeOrigin: true
    }
]

module.exports = PROXY_CONFIG;
