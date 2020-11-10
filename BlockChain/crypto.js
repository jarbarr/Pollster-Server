const secp256k1 = require('secp256k1');
const { randomBytes, createHash } = require('crypto');
const models = require('../dbms/models');

module.exports = {
  generateKeys: (request, callback, err) => {
    // console.log('keys - received from controllers:', request);
    if (err) {
      // console.error(`crypto | generateKeys - err: ${err}`)
      callback(err, null);
    } else {
      let keys = {};
      let privKey;
      do {
        privKey = randomBytes(32);
      } while (!secp256k1.privateKeyVerify(privKey));
      // const buf = Buffer.from(privKey, 'hex');
      // console.log(privKey)
      let pubKey = secp256k1.publicKeyCreate(privKey);
      // console.log(pubKey)
      keys.privKey = privKey.toString('hex');
      keys.pubKey = pubKey.toString('hex');
      // console.log(keys);
      callback(null, keys);
      // console.log(`crypto | generateKeys - success`);
    }
  },

  signAndVerify: (request, callback, err) => {
    if (err) {
      console.error(`crypto | signAndVerify - error: ${err}`);
      callback(err, null);
    } else {
      const privKey = Buffer.from(request.privateKey, 'hex');
      // console.log('privKey', privKey);
      const vote = createHash('sha256').update(request.ballot).digest();
      // console.log('vote', vote);
      let sigObj = secp256k1.sign(vote, privKey);
      // console.log('sigObj', sigObj);
      const pubKey = Buffer.from(request.publicKey, 'hex');
      // console.log('pubKey', pubKey)
      if (secp256k1.verify(vote, sigObj.signature, pubKey)) {
        callback(null, sigObj.signature.toString('hex'));
        models.addUserBallot(sigObj.signature.toString('hex'), request.privateKey)
        console.log('signature verified');
      } else {
        console.log('signature not verified');
      }
    }
  }
};

