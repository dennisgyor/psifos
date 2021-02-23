const Block = require('./block');

// instantiate new block instance and test out the outputs for block and genesis block
// you can run this test with 'npm run dev-test'
const block = new Block('1', '9000', '9001', 'Block test.');
console.log(block.toString());
console.log(Block.genesis().toString());

