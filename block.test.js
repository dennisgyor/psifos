const Block = require('./block');

describe('Block', () => {
  // create 3 undefined vars to hold test data
  let data, lastBlock, block;      

  beforeEach(() => {
    data = 'This is the data in the actual block.';
    lastBlock = Block.genesis(); 
    block = Block.mineBlock(lastBlock, data);
  });
  // Test case 1: verify data in block
  it('Checks `data` and compares it to the input', () => {
      expect(block.data).toEqual(data); 
  }); 
  // Test case 1: verify data in block
  it('Checks the `lastHash` of the current block and verify that it matches the hash of the previous block.', () => {
      expect(block.lastHash).toEqual(lastBlock.hash); 
  });
});  