function generateHtml({ name, email, message }) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Booking Confirmation</title>
      <style>
        * {
          margin: 0;
          font-family: 'Open Sans', sans-serif;
        }
        h1 {
          padding: 1rem;
          background-color: #413973;
          color: #eeeeee;
          text-align: center;
        }
        p {
          padding: 0.8rem 1rem;
          color: #413973;
          background-color: #fbfbfb;
        }
      </style>
    </head>
    <body>
      <h1>Enquiry</h1>
  
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
    </body>
  </html>
  `
}
exports.generateHtml = generateHtml
