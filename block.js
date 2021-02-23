class Block {
    constructor(timestamp, lastHash, hash, data) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }
    toString() {
        return `Block -
            Time Stamp : ${this.timestamp}
            Last Hash  : ${this.lastHash.substring(0, 10)}
            This Hash  : ${this.hash.substring(0, 10)}
            Data       : ${this.data}`;
    }
}
module.exports = Block;
