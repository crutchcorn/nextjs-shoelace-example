const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    webpack: (config) => {
        config.plugins.push(
            new CopyPlugin({
                patterns: [
                    {
                        from: path.resolve(
                            __dirname,
                            "node_modules/@shoelace-style/shoelace/dist/shoelace/icons"
                        ),
                        to: path.resolve(__dirname, "static/icons"),
                    },
                ],
            })
        );
        return config;
    },
};
