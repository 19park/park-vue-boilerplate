module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/api/': {
                target: "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};
