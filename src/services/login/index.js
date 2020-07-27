import wepy from 'wepy'
import { apiGetCode, apiLogin, apiWechatLogin, apiPasePhone } from './api';
import packagePromise from '../packagePromise';
// import { request } from '../request';
import { WECHAT_APP_NAME, WECHAT_AUTH_BASE, EVENT_QUEUE_NAME } from '../../common/js/config'
// import { request } from '../request'
import miniPro from '../../utils/wepy-pro'
let request = miniPro.request
import Validate from '../Validate';
import Auth from '../../common/js/authProcess.js';

/**
  * 获取验证码
 */
const getCodeFetch = (data = {}) => packagePromise((resolve, reject) => {
  let _params = data;
  let vArr = [
    ['phoneNumber', _params.phoneNumber, '电话号码', 'empty']
  ]
  if (!Validate(vArr)) { return }
  request({
    url: apiGetCode(),
    method: "POST",
    data: {
      mobile: _params.phoneNumber
    }
  }).then((msg) => {
    miniPro.tipDelaySuccess('发送成功, 有效期5分钟', () => { resolve(msg) }, 'none')
  }).catch((err) => { reject(err) })
})

/**
 * 登录
 */
const loginFetch = (data) => packagePromise((resolve, reject) => {
  let _params = data;
  let vArr = [
    ['phoneNumber', _params.phoneNumber, '电话号码', 'empty|phone'],
    ['verifyCode', _params.verifyCode, '验证码', 'empty|verifyCode']
  ]
  if (!Validate(vArr)) { return };
  authProcess(() => {
    request({
      url: apiLogin(),
      method: 'POST',
      // header: {
      //   'Authorization': `Basic ${WECHAT_AUTH_BASE}`  //先注释
      // },
      data: {
        grant_type: 'wechat',
        sms_verify: true,
        username: _params.phoneNumber,
        password: _params.verifyCode,
        wechatToken: miniPro.getBindToken()
      }
    })
      .then(msg => {
        resolve(msg.data)
        // miniPro.tipDelaySuccess('登陆成功', () => {
        // }, 'success')
      })
      .catch(err => reject(err))
  })
})

const wechatLogin = (data) => packagePromise((resolve, reject) => {
  let _isGettingToken = wepy.getStorageSync('isGettingToken')
  if (_isGettingToken) {

    return
  }
  wepy.setStorageSync('isGettingToken', true)  //登录之后 设置为true 不再走登录流程  这个是解决防止token失效，返回401之后防止多个接口同时调用登录的问题
  let { signature, rawData, encryptedData, iv } = JSON.parse(data.miniprogramParam)
  let qrCode = wepy.$instance.globalData.qrCode
  request({
    url: apiWechatLogin(),
    method: 'POST',
    // header: {
    //   'Authorization': `Basic ${WECHAT_AUTH_BASE}` //先注释
    // },
    data: {
      code: data.code,
      signature,
      rawData,
      encryptedData,
      iv: iv,
      qrCode
    }
  })
    .then(msg => {
      wepy.setStorageSync('isGettingToken', false)
      resolve(msg)
    })
    .catch(err => {
      wepy.setStorageSync('isGettingToken', false)
      reject(err)
    })
})

// const apiPasePhoneF = (data) => packagePromise((resolve, reject) => {
//   let { signature, rawData, encryptedData, iv } = JSON.parse(data.miniprogramParam)
//   request({
//     url: apiPasePhone(),
//     method: 'POST',
//     header: {
//     },
//     data: {
//       code: data.code,
//       signature,
//       rawData,
//       encryptedData,
//       iv: iv
//     }
//   })
//     .then(msg => {
//     })
//     .catch(err => {
//     })
// })
const apiPasePhoneF = (data) => packagePromise((resolve, reject) => {
  let { signature, rawData, encryptedData, iv,sessionKey } = JSON.parse(data.miniprogramParam)
  console.log(data)
  request({
    url: apiPasePhone(),
    method: 'POST',
    header: {
    },
    data: {
      code: data.code,//可不传。undefind
      signature,
      rawData,
      encryptedData,
      iv: iv,
      sessionKey
    }
  })
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

export {
  wechatLogin,
  getCodeFetch,
  loginFetch,
  apiPasePhoneF
}
