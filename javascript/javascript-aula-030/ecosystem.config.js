module.exports = {
  apps: [
    {
      script: './app.js',
      cwd: 'frontend/',
      name: 'app.js',
      watch: true
    },
    {
      script: './server.js',
      cwd: 'backend/',
      name: 'server.js',
      watch: true
    }
  ]
}
