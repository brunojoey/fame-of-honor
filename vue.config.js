module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 8080,
    public: '0.0.0.0:8080',
    proxy: {
      // wants to set /api/ = localhost only when in development
      '^/api': {
        target: "https://fame-of-honor-server.herokuapp.com/api/teams",
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/'},
      },
    }
  }
}