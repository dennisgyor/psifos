const SHA256 = require('crypto-js/sha256');


class Block {
    constructor(timestamp, lastHash, hash, data) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }
    // toString function to print out the results of the block contents to console
    toString() {
        return `Block -
            Time Stamp : ${this.timestamp}
            Last Hash  : ${this.lastHash.substring(0, 10)}
            Hash       : ${this.hash.substring(0, 10)}
            Data       : ${this.data}`;
    }
    static genesis() {
        //This is a static method to generate the genesis "dummy" block
        return new this('Genesis Block', '----------', 'Origin Block', []);
    }
    static mineBlock(lastBlock, data) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        //calling static hash method and passing 3 params
        const hash = Block.hash(timestamp, lastHash, data);

        return new this(timestamp, lastHash, hash, data);
    }
    static hash(timestamp, lastHash, data) {
        return SHA256(`${timestamp} ${lastHash} ${data}`).toString();
    }
    // Hash is generated using 3 params (timestamp, lasthash and data)
}
//export the module to be available for use in the project
module.exports = Block;
