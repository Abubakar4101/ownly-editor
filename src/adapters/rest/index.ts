/* A library that is used to make http requests. */
// import ky from 'ky';
import axios from 'axios';
import {apiUrl} from '../../config';
export {Services} from './types';

const instance = axios.create({
  baseURL: apiUrl,
  // withCredentials: true,
});

instance.interceptors.request.use(config => {
  // config.headers.Authorization = instance.defaults.headers['Authorization'];
  return config;
});

export const authorizationToken = {
  get: () => instance.defaults.headers['Authorization']?.replace('Bearer ', ''),
  set: (token: string) => {
    instance.defaults.headers['Authorization'] = `Bearer ${token}`;
  },
  remove: () => {
    delete instance.defaults.headers['Authorization'];
  },
};

export const setInstanceId = (instanceId: string) => {
  instance.defaults.headers['x-instance-id'] = instanceId;
};

export default instance;
