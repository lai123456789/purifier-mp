import wepy from 'wepy'
import {
  apiGetInfoList,
  apiTalePatronize,
  apiTaleFindDetails
} from './api'
import packagePromise from '../packagePromise'
import miniPro from '../../utils/wepy-pro'
let request = miniPro.request

// 资讯模块 => 获取资讯列表
const apiGetInfoListF = (data,fun) => packagePromise((resolve, reject) => {
  request({
    url: apiGetInfoList(),
    method: 'POST',
    noOutData: true, //分页标记
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

//  => 获取资讯详情
const apiTaleFindDetailsF = (id, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiTaleFindDetails(id),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

//  => 点赞
const apiTalePatronizeF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiTalePatronize(data.id),
    method: 'POST'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

export {
  apiGetInfoListF,
  apiTalePatronizeF,
  apiTaleFindDetailsF
}
