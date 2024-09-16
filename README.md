# Deprecation notice for <1.2.2
**IMPORTANT:** `bfd-api-redux` versions 1.2.2 and below are NO LONGER SUPPORTED for interfacing with the Discords.com Bots API.

## NOTICE & INFO

`bfd-api-redux` is an official bot-page API wrapper for [Discords.com](https://discords.com) (formerly botsfordiscord.com). Please direct all inquiries and support requests to [our support server.](https://discord.gg/dsl)

*The current version of the Discords.com Bot API will be deprecated
upon the release of the BotsV3 runtime (website rewrite).
Please keep in mind that any bots using a custom wrapper for the API will need to migrate; the current version of this package will also be deprecated and an update will be required.*


## Usage

Constructing a new API interface:

```js
const bfd = require('bfd-api-redux');
const api = new bfd('BFD_Token', 'botID');
```

**NOTE:** All methods return Promises, so you can use either `.then()` or `async/await` syntax.

## Examples

### Get votes
```js
api.getVotes()
  .then(votes => {
    console.log(votes);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

// Or, using async/await:
try {
  const votes = await api.getVotes();
  console.log(votes);
} catch (error) {
  console.error('Error:', error.message);
}
```


### Checking a vote for one specific user (including structure)
```js
api.checkVote("254287885585350666")
  .then(vote => {
    console.log(vote); // { voted: true/false, votes: [...] }
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
```


### Checking a vote for one specific user (lightweight)
```js
api.checkVoteLight("254287885585350666")
  .then(hasVoted => {
    console.log(hasVoted); // true or false
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
```


### Update server count
```js
const serverCount = client.guilds.cache.size;
api.setServers(serverCount)
  .then(response => {
    console.log('Server count updated:', response);
  })
  .catch(error => {
    console.error('Error updating server count:', error.message);
  });
```


## Error Handling


All methods can throw errors, so it's recommended to use try-catch blocks or .catch() when using these methods.

## Note on API Responses

The structure of the API responses may vary. Always check the returned data to ensure it matches your expectations.