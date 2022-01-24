module.exports = {
    apps: [
      {
        script: './server.js',
        cwd: 'frontend/',
        name: 'server.js',
        watch: true
      },
      {
        script: './app.js',
        cwd: 'backend/',
        name: 'app.js',
        watch: true
      }
    ]
  }