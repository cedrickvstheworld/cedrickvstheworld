  import axios from 'axios';

  export default function sendMail(senderName, senderEmail, content) {
    return axios.post(
      'https://api.sendgrid.com/v3/mail/send',
      {
        "personalizations": [
          {
            "to": [
              {
                "email": "cedrickdomingo57@gmail.com"
              }
            ],
            "subject": "Somebody Mailed Me"
          }
        ],
        "from": {
          "email": "cedrickdomingo57@gmail.com"
        },
        "content": [
          {
            "type": "text/plain",
            "value": `name: ${senderName}\nemail: ${senderEmail}\n${content}`
          }
        ]
      },
      {
        headers: { Authorization: `Bearer ${process.env.SENDGRID_API_KEY}` }
      }
    )
  }