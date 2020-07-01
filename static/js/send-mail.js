const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


export default function sendMail(senderName, senderEmail, content) {
  return sgMail.send({
    from: 'Dudeson',
    to: 'cedrickdomingo048@gmail.com',
    subject: 'Somebody Sent me a Mail',
    html: `<b>Name:</b> ${senderName}\n<b>Email:</b> ${senderEmail}\n<p>${content}</p>`
  });
}