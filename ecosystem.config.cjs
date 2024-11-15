module.exports = {
  apps: [
    {
      name: "feet-on-the-go",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
