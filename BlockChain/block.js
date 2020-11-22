const { randomBytes, createHash } = require('crypto');

module.exports =
  class Block {
    constructor(transactions, previousHash) {
      this.transactions = transactions;
      this.previousHash = previousHash;
      this.nonce = 0;
      // this.nonce = randomBytes(16).toString('base64');
      // this.nonce = Math.floor(Math.random() * 3916);
      this.hash;
    }
    calculateHash(nonce) {
      let newInt16Array = new Int16Array(this.transactions);
      let hash = createHash('sha256')
        .update(nonce.toString(16))
        .update(this.previousHash)
        .update(newInt16Array)
        .digest('hex');
      this.hash = hash;
    }
  }