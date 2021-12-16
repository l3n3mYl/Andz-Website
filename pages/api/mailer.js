const mailjet = require ('node-mailjet')
.connect('be5f6c521fb05bdf2a2d2617718da38b', '85f7ddb81921fc61d64cf5f3f3632e9f')

// eslint-disable-next-line import/no-anonymous-default-export
export default async function(req, res) {

  const { email, name, message, subject } = JSON.parse(req.body)
  const htmlMessage = `
    <h3>Begin messsage:</h3><br>
    ----------------------------------------------------------------<br>
    ${message}
    <br>
    ----------------------------------------------------------------<br>
    <h3>Message end.</h3>
    Sent from: ${email}
  `
  
  const request = mailjet
    .post("send", {'version': 'v3.1'})
    .request({
      "Messages":[
        {
          "From": {
            "Email": "asavkinas123@gmail.com",
            "Name": name
          },
          "To": [
            {
              "Email": "asavkinas123@gmail.com",
              "Name": "authorName"
            }
          ],
          "Subject": subject,
          "TextPart": message,
          "HTMLPart": htmlMessage,
          "CustomID": "Enjoy"
        }
      ]
    })
  await request
    .then(_ => res.status(200).json({ status: 'OK' }))
    .catch((err) => {
      res.status(405)
      console.log(err)
    })
}