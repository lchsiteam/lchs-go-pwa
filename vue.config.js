var childProcess = require('child_process')

process.env.VUE_APP_VERSION = require('./package.json').version
process.env.VUE_APP_COMMIT_COUNT = childProcess.execSync("git rev-list HEAD --count")
process.env.VUE_APP_COMMIT_SHASH = childProcess.execSync("git rev-parse --short HEAD")

module.exports = {
    devServer: {
        disableHostCheck: true
}}