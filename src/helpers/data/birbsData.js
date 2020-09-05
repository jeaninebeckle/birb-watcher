import axios from 'axios';
import apiKeys from '../apiKeys.json';
import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getBirbsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/birbs.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const getSingleBirb = (birbId) => axios.get(`${baseUrl}/birbs/${birbId}.json`);

const createBirb = (newBirb) => axios.post(`${baseUrl}/birbs.json`, newBirb);

const deleteBirb = (birbId) => axios.delete(`${baseUrl}/birbs/${birbId}.json`);

export default {
  getBirbsByUid,
  getSingleBirb,
  createBirb,
  deleteBirb,
};
