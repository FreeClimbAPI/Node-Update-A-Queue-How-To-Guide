const persephonySDK = require('@persephony/sdk')
const accountId = process.env.accountId
const authToken = process.env.authToken
const persephony = persephonySDK(accountId, authToken)

// New queue options
const options = {
  alias: 'New Name',
  maxSize: 100
}

// Invoke the update queue resource
persephony.api.queues.update(queueId, options).then(queue => {
  // Use updated Queue
}).catch(err => {
  // Handle Errors
})