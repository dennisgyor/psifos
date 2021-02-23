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
            This Hash  : ${this.hash.substring(0, 10)}
            Data       : ${this.data}`;
    }
    static genesis() {
        //This is a static method to generate the genesis block
        return new this('Genesis Block', '----------', 'Origin Block', []);
    }
    static mineBlock(lastBlock, data) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = 'TODO-hash';

        return new this(timestamp, lastHash, hash, data);
    }
}
//export the module to be available for use in the project
module.exports = Block;
