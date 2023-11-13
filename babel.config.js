// {"presets":[
//     ["@babel/preset-react", {"runtime": "automatic"}]
// ]
// }
// "@babel/preset-env"

// module.exports = (api) => {
//     // This caches the Babel config by environment.
//     api.cache.using(() => process.env.NODE_ENV);
//     return {
//       // ... other options
//       plugins: [
//         // ... other plugins
//         // Applies the react-refresh Babel plugin on non-production modes only
//         !api.env('production') && 'react-refresh/babel',
//       ].filter(Boolean),
//     };
//   };

module.exports = (api) => {
  // This caches the Babel config
  api.cache.using(() => process.env.NODE_ENV);
  return {
    presets: [
      "@babel/preset-env",
      // Enable development transform of React with new automatic runtime
      [
        "@babel/preset-react",
        { development: !api.env("production"), runtime: "automatic" },
      ],
    ],
    // Applies the react-refresh Babel plugin on non-production modes only
    ...(!api.env("development") && { plugins: ["react-refresh/babel"] }),
  };
};