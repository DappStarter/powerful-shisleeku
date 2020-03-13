require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea knife sun tooth guard render remind home harvest opinion bone slight'; 
let testAccounts = [
"0x6e3e8c099d09dcd7faf6824530f53512997cf253422794c11e6ed626fc7a5d4f",
"0x5c77191f02cbdf9f2a3a021a5e24c89a28217d176dadbd3316df47d95244b6a2",
"0x8525664999114c7bcebc644d3ea2f18df10ca27b773f4aa2f7eace1cf4f9a6c3",
"0x8305f41320052c1e98feecdef57c4680e591ed0c1eb324a6c84fcc2b58750ab7",
"0xde48bcc0b8ae27e5464b19b864e781d34d9268ce2b9828735ffadfae7b1ef12d",
"0x77a3c4269538b0c01af536db2912fcf76e1524dab380694b806606c6d5ca398a",
"0x7bc57a294d1832a259da87ced44ab6094dbdd4986025b957a675547ffab11047",
"0x4509b5a5cec21c9932bea4108a5cbbf49efbd6feffd113621902e5434c8dd7a7",
"0x8678f6aecafccdd6ed8a9df07d68dbdde736e46d11713d9f13426f9b3461e818",
"0x23f2114cedcd9e3fe8fbb0376326e0011cc91eb55000deb9880c960e501f9692"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
