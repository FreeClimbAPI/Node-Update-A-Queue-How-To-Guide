# Node - Update a Queue Tutorial

This project serves as a guide to help you build an application with FreeClimb. View this tutorial on [FreeClimb.com](https://docs.freeclimb.com/docs/update-a-queue#section-nodejs). Specifically, the project will:

- Updates the options of a call queue   

## Setting up your new app within your FreeClimb account

To get started using a FreeClimb account, follow the instructions [here](https://docs.freeclimb.com/docs/getting-started-with-freeclimb).

## Setting up the Tutorial

1. Install the node packages necessary using command:

   ```bash
   $ yarn install
   ```

2. Configure environment variables (this tutorial uses the [dotenv package](https://www.npmjs.com/package/dotenv)).

   | ENV VARIABLE            | DESCRIPTION                                                                                                                                                                             |
   | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | ACCOUNT_ID              | Account ID which can be found under [API credentials](https://www.freeclimb.com/dashboard/portal/account/authentication) in Dashboard                                                         |
   | API_KEY              | API key which can be found under [API credentials](https://www.freeclimb.com/dashboard/portal/account/authentication) in Dashboard                                               |

3. Provide a value for the variable `queueId` which is a queue Id in updateAQueue.js. You can learn more about queues [here](https://docs.freeclimb.com/reference/call-queues)

## Runnning the Tutorial

1. Run the application using command:

   ```bash
   $ node updateAQueue.js
   ```

## Getting Help

If you are experiencing difficulties, [contact support](https://freeclimb.com/support).
