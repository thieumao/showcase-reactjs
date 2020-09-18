import axiosClient from './axiosClient.js'

const projectAPI = {
  getAll: (params) => {
    const url = '/list.json?raw=true';
    return axiosClient.get(url, { params });
  },
  get: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
}

export default projectAPI;