const EventEmitter = require("events");
const https = require("https");

class bfd extends EventEmitter {
    constructor(apiToken, botID) {
        super();
        this._id = botID;
        this._token = apiToken;
    }

    async getUser(id) {
        return new Promise((resolve, reject) => {
            https.get(`https://discords.com/bots/api/user/${id}`, async (res) => {
                res.on('data', (d) => {
                    resolve(JSON.parse(d.toString("utf-8")));
                });
            }).on('error', (e) => {
                reject(e);
            })
        })
    }

    async getUserBots(id) {
        return new Promise((resolve, reject) => {
            https.get(`https://discords.com/bots/api/user/${id}/bots`, async (res) => {
                res.on('data', (d) => {
                    resolve(JSON.parse(d.toString("utf-8")));
                });
            }).on('error', (e) => {
                reject(e);
            })
        })
    }

    async getBot(id) {
        return new Promise((resolve, reject) => {
            https.get(`https://discords.com/bots/api/bot/${id}`, async (res) => {
                res.on('data', (d) => {
                    resolve(JSON.parse(d.toString("utf-8")));
                });
            }).on('error', (e) => {
                reject(e);
            })
        })
    }

    async getVotes(id = this._id, token = this._token) {
        return new Promise((resolve, reject) => {
            https.get({
                hostname: 'discords.com',
                path: `/bots/api/bot/${id}/votes`,
                headers: {
                    Authorization: token,
                    "Content-Type": "application/json"
                },
                parse: "json"
            }, async (res) => {
                res.on('data', (d) => {
                    resolve(JSON.parse(d.toString("utf-8")));
                });
            }).on('error', (e) => {
                reject(e);
            })
        })
    }

    async getWidget(id) {
        return new Promise((resolve, reject) => {
            https.get(`https://discords.com/bots/api/bot/${id}/widget`, async (res) => {
                res.on('data', (d) => {
                    resolve(d.toString("utf-8"));
                });
            }).on('error', (e) => {
                reject(e);
            })
        })
    }

    async setServers(serverCount, id = this._id, token = this._token) {
        return new Promise((resolve, reject) => {
            const data = JSON.stringify({
                server_count: serverCount
            })

            const options = {
                hostname: 'discords.com',
                port: 443,
                path: `/bots/api/bot/${id}`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            }

            const req = https.request(options, res => {

                res.on('data', d => {
                    resolve(JSON.parse(d.toString("utf-8")));
                })
            })

            req.on('error', error => {
                reject(error)
            })

            req.write(data)
            req.end()
        })
    }
}

module.exports = bfd;