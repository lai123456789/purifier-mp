import wepy from 'wepy'
import {
  SignIn,
  apiGetSignInfo,
  apiGetUserInfo,
  apiExchang,
  apiGetpointsRecord
} from './api'
import packagePromise from '../packagePromise'
import miniPro from '../../utils/wepy-pro'
let request = miniPro.request

// 立即签到
const apiSignInF = (fun) => packagePromise((resolve, reject) => {
  request({
    url: SignIn(),
    method: 'POST'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})
// 获取积分记录
const apiGetpointsRecordF = (data,fun) => packagePromise((resolve, reject) => {
  request({
    url: apiGetpointsRecord(),
    method: 'POST',
    noOutData: true,//分页标记
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})
// 获取签到信息
const apiGetSignInfoF = (fun) => packagePromise((resolve, reject) => {
  request({
    url: apiGetSignInfo(),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})
// 获取用户积分会员等级信息
const apiGetUserInfoF = (fun) => packagePromise((resolve, reject) => {
  request({
    url: apiGetUserInfo(),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})
// 兑换专区 积分使用兑换会员
const apiExchangF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiExchang(),
    method: 'POST',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})
export {
  apiSignInF,
  apiGetSignInfoF,
  apiGetUserInfoF,
  apiExchangF,
  apiGetpointsRecordF
}
