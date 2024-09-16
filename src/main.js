const EventEmitter = require("events");
const https = require("https");

class bfd extends EventEmitter {
    constructor(apiToken, botID) {
        super();
        this._id = botID;
        this._token = apiToken;
    }

    async getVotes(id = this._id, token = this._token) {
        return new Promise((resolve, reject) => {
            https.get({
                hostname: 'discords.com',
                path: `/bots/api/bot/${id}/getvotes`,
                headers: {
                    Authorization: token,
                    "Content-Type": "application/json"
                },
                followRedirect: true,
                parse: "json"
            }, async (res) => {
                let resultdata = "";
                res.on('data', (d) => {
                    if (res.statusCode !== 200) {
                        reject(new Error(`HTTP error! status: ${res.statusCode}, message: ${d}`));
                        return;
                    }
                    resultdata += d.toString();
                });
                res.on('end', () => {
                    try {
                        resolve(JSON.parse(resultdata));
                    } catch (error) {
                        reject(new Error('Failed to parse response data'));
                    }
                });
            }).on('error', (e) => {
                reject(e);
            });
        });
    }

    async checkVoteLight(userid) {
        try {
            const votes = await this.getVotes();
            if (Array.isArray(votes.votes)) {
                return votes.votes.some(vote => vote.user_id === userid);
            } else {
                return false;
            }
        } catch (error) {
            throw new Error('Failed to check vote: ' + error.message);
        }
    }

    async checkVote(userid) {
        try {
            const votes = await this.getVotes();
            if (Array.isArray(votes.votes)) {
                let structure = { voted: votes.votes.some(vote => vote.user_id === userid), votes: []};
                votes.votes.forEach(vote => {
                    if (vote.user_id === userid) {
                        structure.votes.push(vote);
                    }
                });
                return structure;
            } else {
                return false;
            }
        } catch (error) {
            throw new Error('Failed to check vote: ' + error.message);
        }
    }

    async setServers(serverCount, id = this._id, token = this._token) {
        return new Promise((resolve, reject) => {
            const data = JSON.stringify({
                server_count: serverCount
            });

            const options = {
                hostname: 'discords.com',
                port: 443,
                path: `/bots/api/bot/${id}/setservers`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            };

            const req = https.request(options, res => {
                let resultdata = "";
                res.on('data', d => {
                    if (res.statusCode !== 200) {
                        reject(new Error(`HTTP error! status: ${res.statusCode}, message: ${d}`));
                        return;
                    }
                    resultdata += d.toString("utf-8");
                });
                res.on('end', () => {
                    try {
                        resolve(JSON.parse(resultdata));
                    } catch (error) {
                        reject(new Error('Failed to parse response data'));
                    }
                });
            });

            req.on('error', error => {
                reject(error);
            });

            req.write(data);
            req.end();
        });
    }
}

module.exports = bfd;