const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require ('web3');
const compiledFactory = require ('./build/CampaignFactory.json');
const walletProvider = require('./HDWalletProvider');

console.log (walletProvider.providerString()[0]+ ', ' + walletProvider.providerString()[1]);
const provider = new HDWalletProvider (walletProvider.providerString()[0],walletProvider.providerString()[1]);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deply from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ gas: '1000000', from: accounts[0]});

    console.log('Contract deployed to', result.options.address);
};
deploy();

//Contract deployed to 0xEf4203113FAde0a774ad278FE4B6c378bC7CcB54
