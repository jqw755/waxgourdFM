import axios from 'axios'
import qs from 'qs'
import store from '../store/store'

//请求拦截
axios.interceptors.request.use(config => {
    // loading
    store.commit('loading');
    return config
}, error => {
    return Promise.reject(error);
})

//响应拦截
axios.interceptors.response.use(response => {
    store.commit('hideLoading');
    return response
}, error => {
    console.log('响应出错,测试下面的return promise.resolve');
    return Promise.resolve(error.response);
})

//检查响应状态
function checkStatus(response) {
    // loading
    // 如果http状态码正常，则直接返回数据
    if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
        // 如果不需要除了data之外的数据，可以直接 return response.data
        return response;
    }
    // 异常状态下，把错误信息返回去
    return {
        status: -404,
        msg: '网络异常'
    }
}

//检查状态码
function checkCode(res) {
    // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
    if (res.status === -404) {
        console.log('是不是网络不好，刷新再试试吧');
    }
    if (res && (res.data.code < 0)) {
        console.log(res.data.msg)
    }
    return res;
}

function post(url, data) {
    return axios({
        method: 'post',
        // baseURL: 'https://api.imjad.cn/qqfm/',
        url,
        data: qs.stringify(data),
        timeout: 10000,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    }).then((response) => {
            return checkStatus(response)
        }
    ).then((res) => {
        return checkCode(res)
    })
}

function get(url, params) {
    params.page = 1;
    params.page_size = 3;
    return axios({
        method: 'get',
        // baseURL: 'https://api.imjad.cn/qqfm/',
        url,
        params, // get 请求时带的参数
        timeout: 10000,
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    }).then((response) => {
            return checkStatus(response)
        }
    ).then((res) => {
            return checkCode(res)
        }
    )
}

//导出调用
export default {post, get};
