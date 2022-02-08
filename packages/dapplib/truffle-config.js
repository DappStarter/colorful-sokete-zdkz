require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi bridge tooth guard render remind hospital hidden close bone genius'; 
let testAccounts = [
"0xce51afb1596feec497963871edf29044ed1c671eac173cc00d281cef985328de",
"0x6b75b0c9962aa3d1aae296a15b1f1d41944f618afa1c147c43f72ae75d9a7956",
"0x20f86d1e94b595c2fb4708b9797ff02a0c9e58b19ed6f5f20d1af59869c6eb3f",
"0x7d32db8a9543c5e4836c4b8fe5741136a8b3a65fa0b8d7eec816aba1c290f5c8",
"0xda8762f2d6f095acce05119b82b47163ee1ebb8af3819ce2cd9648ae146bd26a",
"0xd79d4d3b1cb8b6bb184fd437039c300ed0c692b7a17761ac4428fda6b7887949",
"0x271b1edbc2d194f1caa5fb8a6ab1b901c2cb6773c64861afe1668cb8d6556359",
"0xd3e6b1ddf556e8715583781be45e1cf10236b48eb941f89bf93bdbcec6d8ae23",
"0xf646fa78c340a7e4bcd8bb6e9e6e9075ac72bf31da89c81d0f34a3f109895947",
"0x37c2df62e3dc5c5df74ae4e26f5698e534bfe87213056731633697096e53703f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
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
            version: '^0.8.0'
        }
    }
};

