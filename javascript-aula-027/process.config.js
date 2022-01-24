module.exports = {
    apps: [
      {
        script: 'node',
        cwd: 'frontend/',
        name: 'server.js',
        watch: true
      },
      {
        script: 'node',
        cwd: 'backend/',
        name: 'app.js',
        watch: true
      }
    ]
  }