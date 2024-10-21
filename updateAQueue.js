require('dotenv').config()
const freeclimbSDK = require('@freeclimb/sdk')
const accountId = process.env.ACCOUNT_ID
const apiKey = process.env.API_KEY
const queueId = 'YOUR_QUEUE_ID'
const configuration = freeclimbSDK.createConfiguration({ accountId, apiKey })
const freeclimb = new freeclimbSDK.DefaultApi(configuration)

freeclimb.updateAQueue(queueId, { alias: 'New Name', maxSize: 100 })
  .then(queue => {
    console.log('updated queue', queue)
  }).catch(err => {
    console.log(err)
  })