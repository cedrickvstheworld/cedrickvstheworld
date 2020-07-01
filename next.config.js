const withCSS = require('@zeit/next-css')
module.exports = {
  ...withCSS(),
  env: {
    EMAILJS_USER_ID: 'user_nfpqNRqsHa2fJLnp75Y2O',
    EMAILJS_TEMPLATE_ID: 'template_9xRrWv3T'
  },
}