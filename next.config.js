const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add support for loading .mp3 files
    config.module.rules.push({
      test: /\.mp3$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "/_next/static/sounds/",
            outputPath: `${isServer ? "../" : ""}static/sounds/`,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
