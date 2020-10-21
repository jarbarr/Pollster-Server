const secp256k1 = require('secp256k1');
const { randomBytes, createHash } = require('crypto');

module.exports = {
  generateKeys: (request, callback, err) => {
    // console.log('keys - received from controllers:', request);
    if (err) {
      console.error(`crypto | privKey - err: ${err}`)
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
      console.log(keys);
      callback(null, keys);
      console.log(`crypto | privKey - success`)
    }
  },
  // getPublicKey: (request, callback, err) => {
  //   if (err) {
  //     console.error(`crypto | pubKey - err: ${err}`)
  //     callback(err, null);
  //   } else {

  //     callback(null, );
  //     console.log(`crypto | pubKey - success`)
  //   }
  // }
};