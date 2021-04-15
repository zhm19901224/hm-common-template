import axios from 'axios';

export default function requeset(url, method, params = {}, otherConfigs = {}) {
  let baseConfig = {
    headers: {
      'content-type': ' application/json'
    },
    method,
    url
  };
  if (method === 'get') {
    baseConfig.params = params;
  } else {
    baseConfig.data = params;
  }
  return axios(Object.assign(baseConfig, otherConfigs)).then((res) => {
    return res.data;
  });
}
