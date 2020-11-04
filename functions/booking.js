const dotenv = require('dotenv')
const { query } = require('./utils/hasura')
dotenv.config()
exports.handler = async (event, _context, callback) => {
  const { name, phone, date, time } = JSON.parse(event.body)
  const result = await query({
    query: `
    mutation MyMutation($date: date!, $name: String!, $phone: String!, $time: timetz!) {
      insert_Bookings_one(object: {time: $time, phone: $phone, name: $name, date: $date}) {
        id
        name
      }
    }
    `,
    variables: { name, phone, date, time },
  }).catch(err => callback(err, null))
  callback(null, { statusCode: 200, body: JSON.stringify({ result }) })
}
