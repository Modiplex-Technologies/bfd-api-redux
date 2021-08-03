## NOTICE

bfd-api-redux is a community made API wrapper for the BotsForDiscord API and is not official. If you find any issues with this module, please DO NOT report them to the developer team of BFD but to me directly `Kub_Luk#0926`

## Usage

Constructing a new API interface:
```js
var bfd = require('bfd-api-redux');
var api = new bfd('BFD_Token', 'botID');
```
**NOTE:** *Everything has to be used inside async functions with an `await`, for example:*
```js
asnyc function user() {
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