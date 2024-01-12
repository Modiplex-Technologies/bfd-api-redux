# Deprecation notice for <1.2.2
**IMPORTANT:** `bfd-api-redux` versions 1.2.2 and below are NO LONGER SUPPORTED for interfacing with the Discords.com Bots API.

## NOTICE & INFO

`bfd-api-redux` is an official bot-page API wrapper for [Discords.com](https://discords.com) (formerly botsfordiscord.com). Please direct all inqueries and support requests to [our support server.](https://discord.gg/dsl)

*The current version of the Discords.com Bot API will be depracated
upon the release of the BotsV3 runtime (website rewrite).
Please keep in mind that any bots using a custom wrapper for the API will need to migrate, the current version if this package will also be deprecated and an update will be required.*

## Usage

Constructing a new API interface:
```js
var bfd = require('bfd-api-redux');
var api = new bfd('BFD_Token', 'botID');
```
**NOTE:** *If you do now wish to use callbacks, then all actions must be used inside async functions with an `await`, for example:*

You can easily update your Bot's guild count using this function:
```js
let serverCount = client.guilds.cache.size; 
api.setServers(serverCount)
```

## Examples

### Get votes
```js
api.getVotes().then(votes => {
    console.log(votes)
})

// Or, if running inside an async function:

await api.getVotes()
```

### Cheking a vote for one specific user (including structure)
```js
api.checkVote("254287885585350666").then(vote => { //Provide a user id
    console.log(vote) //true or false + vote structure
})
```

### Cheking a vote for one specific user (lightweight structure)
```js
api.checkVoteLight("254287885585350666").then(vote => { //Provide a user id
    console.log(vote) //true or false
})
```


