import axios from 'axios'
import { Message } from 'element-ui';
import config from '@config/config.js'
import store from '@store'
let insURL = config.apiPath.insURL
//地图数据操作
const instance = axios.create({
    baseURL: insURL + '/api',
    //解决跨域
    crossDomain: true,
    timeout: 30000,
    //转换res为json
    responseType: 'json',
});

// request拦截器
instance.interceptors.request.use(
    config => {
        // 每次发送请求之前检测都vuex存有token,那么都要放在请求头发送给服务器
         
        let iAdminID = localStorage.getItem('iAdminID')
        let Token = store.getters['login/userToken']
        if(Token){
             config.headers.Token = Token
        }else if(iAdminID ){ 
            config.headers.Token = JSON.parse(iAdminID).Token
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)


instance.interceptors.response.use(
    response => {  //成功请求到数据
        // //这里根据后端提供的数据进行对应的处理
        if (response.data.ErrorType === 3) {
            return response;
        } else
        if(response.data.ErrorType === 5){
            Message({  //用户被删除
                type: "error",
                message: response.data.Msg,
                showClose: true
            });
            sessionStorage.setItem("store",null);     
            location.replace("/Login");
        } else {
            Message({  //常规错误处理
                type: "error",
                message: response.data.Msg,
                showClose: true
            });
            return Promise.reject(response)
        }
    },
    error => {  //响应错误处理
        console.log(error);
        Message({
            type: "warn",
            message: '网络异常，请重试',
            showClose: true
        });

        return Promise.reject(error)
    }
);

export default instance