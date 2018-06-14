import axios from 'axios'
import Qs from 'qs'
import 'babel-polyfill';
import router from './../router/index'
const handleErrorResponse = (response, config) => {
  if (response) {
    switch (response.status) {
      case 401: // 未登录或过期，跳至登录页
        if (router.currentRoute.path !== '/login') {
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          });
        }
        break;
      default:
        if (config && config.silent === true) break;
        if (response.data && response.data.success === false)
          alert(response.data.message);
        else
          alert('服务器发生 ' + response.status + ' 错误.');
        break;
    }
  } else if (!config || config.silent !== true) {
    alert("服务器连接失败");
  }
}
axios.interceptors.request.use(config => {
    if (config.method === 'post') {
      config.data = Qs.stringify(config.data)
    }
    return config
  },
  (error) => {console.log(error);Promise.reject(error)}
)
axios.interceptors.response.use(
  response => response,
  error => {
    handleErrorResponse(error.response, error.config);
    return Promise.reject(error) // 返回接口返回的错误信息
  }
)
export default axios;
