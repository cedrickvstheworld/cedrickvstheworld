const withCSS = require('@zeit/next-css')
module.exports = {
  ...withCSS(),
  env: {
    SENDGRID_API_KEY: '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',
  },
}