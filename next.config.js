import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import CopyPlugin from "copy-webpack-plugin";
import withPlugins from 'next-compose-plugins';
import withTM from 'next-transpile-modules'

const withTMCompiled = withTM(['@shoelace-style/shoelace']);

const __dirname = dirname(fileURLToPath(import.meta.url));

export default withPlugins([withTMCompiled], {
        experimental: { esmExternals: true },
        webpack: (config) => {
            config.plugins.push(
                new CopyPlugin({
                    patterns: [
                        {
                            from: resolve(
                                __dirname,
                                "node_modules/@shoelace-style/shoelace/dist/assets/icons"
                            ),
                            to: resolve(__dirname, "static/icons"),
                        },
                    ],
                })
            );
            return config;
        },
    });
