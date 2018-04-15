import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xEf4203113FAde0a774ad278FE4B6c378bC7CcB54'
);

export default instance;