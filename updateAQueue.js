require('dotenv').config()
const freeclimbSDK = require('@freeclimb/sdk')
const accountId = process.env.ACCOUNT_ID
const authToken = process.env.AUTH_TOKEN
const freeclimb = freeclimbSDK(accountId, authToken)

// New queue options
const options = {
  alias: 'New Name',
  maxSize: 100
}

// Invoke the update queue resource
freeclimb.api.queues.update(queueId, options).then(queue => {
  // Use updated Queue
}).catch(err => {
  // Handle Errors
})