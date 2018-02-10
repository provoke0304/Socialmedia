// Asynchronous
const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

module.exports = {
 uri: 'mongodb://kennethcamus:4136531@ds231568.mlab.com:31568/meandb1', // Databse URI and database name
 secret: crypto, // Cryto-created secret
 db: 'meandb1' // Database name
}