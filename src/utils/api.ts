import axios from 'axios';

import { setAuthHeader } from './functions';

export const get = async (url: string, params?: Object) => {
  setAuthHeader();
  const result = await axios.get(url, params);
  return result.data;
};

export const post = async (url: string, params: Object) => {
  setAuthHeader();
  const result = await axios.post(url, params);
  return result.data;
};