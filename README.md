## NOTICE & INFO

`bfd-api-redux` is an official bot-page API wrapper for [Discords.com](https://discords.com) (formerly botsfordiscord.com). Please direct all inqueries and support requests to [our support server.](https://discord.gg/dsl)

## Usage

Constructing a new API interface:
```js
var bfd = require('bfd-api-redux');
var api = new bfd('BFD_Token', 'botID');
```
**NOTE:** *Everything has to be used inside async functions with an `await`, for example:*
```js
async function user() {
    console.log(await api.getUser('254287885585350666'));
}
user();
```
All of the following functions only require `id`, which is the ID of the bot/user that is being searched and return a JSON object when done:
```js
api.getUser('254287885585350666') //requires user ID
api.getUserBots('254287885585350666') //requires user ID
api.getBot('621352902656524288') //requires bot ID
api.getWidget('621352902656524288') //requires bot ID

api.getVotes() //Automatically gets your votes, no input required
```

You can easily update your Bot's guild count using this function:
```js
let serverCount = client.guilds.cache.size; 
api.setServers(serverCount)
```

## Examples

### Get votes
With callback
```js
api.getVotes().then(votes => {
    console.log(votes)
})
```

Without callback
```js
async function votes() {
    console.log(await api.getVotes());
}
votes();
```

