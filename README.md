## NOTICE & INFO

`bfd-api-redux` is an official bot-page API wrapper for [Discords.com](https://discords.com) (formerly botsfordiscord.com). Please direct all inqueries and support requests to [our support server.](https://discord.gg/dsl)

## Usage

Constructing a new API interface:
```js
var bfd = require('bfd-api-redux');
var api = new bfd('BFD_Token', 'botID');
```
**NOTE:** *If you do now wish to use callbacks, then all actions must be used inside async functions with an `await`, for example:*
```js
async function user() {
    console.log(await api.getUser('254287885585350666'));
}
user();
```

You can easily update your Bot's guild count using this function:
```js
let serverCount = client.guilds.cache.size; 
api.setServers(serverCount)
```

## Examples

### Get votes
```js
api.getVotes12().then(votes => {
    console.log(votes)
})
```

### Get user
```js
api.getUser("254287885585350666").then(user => {
    console.log(user)
})
```

### Get user bots
```js
api.getUserBots("254287885585350666").then(bots => {
    console.log(bots)
})
```

### Get bot
```js
api.getUser("621352902656524288").then(bot => {
    console.log(bot)
})
```

### Get widget
```js
api.getWidget("621352902656524288").then(widget => {
    console.log(widget)
})
```


