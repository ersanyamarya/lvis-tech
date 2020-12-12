const dotenv = require('dotenv')
dotenv.config()

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.flockmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
})

const { generateHtml } = require('./utils/generate-html')

exports.handler = async (event, _context, callback) => {
  const { name, email, message } = JSON.parse(event.body)

  const toSend = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'New booking Confirmation',
    html: generateHtml({ name, email, message }),
  }
  callback(null, { statusCode: 200, body: JSON.stringify({ name, email, message }) })
  transporter.sendMail(toSend, function (err, info) {
    if (err) {
      console.log(err)
      callback(err, null)
    } else {
      console.log(info)
      callback(null, { statusCode: 200, body: JSON.stringify({ info }) })
    }
  })
}
