const dotenv = require('dotenv')
dotenv.config()
const fetch = require('node-fetch')

exports.handler = async (event, _context, callback) => {
  const { passkey } = JSON.parse(event.body)
  if (passkey === process.env.PASSKEY) {
    const result = await fetch('https://api.netlify.com/build_hooks/5fb193291db4d7d11c563c731', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ passkey }),
    })
      .then(response => response.json())
      .catch(err => callback(err, null))

    callback(null, { statusCode: 200, body: JSON.stringify({ result }) })
  }
  const err = new Error('The passkey was incorrect')
  callback(err, null)
}
