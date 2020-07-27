import wepy from 'wepy'
import Validate from '../Validate'
import  {Version} from '../../common/js/config'
import {
  apiCreateOrder,
  apiFindOrderDetail,
  apiAddressByParent,
  apiFindDefAddress,
  apiPayCreate,
  apiAddressFind,
  apiAddressFindAll,
  apiAddressSave,
  apiAddressUpdate,
  apiAddressSetDefault,
  wxFileUpload,
  apiMyOrderInfo,
  apiMyOrderInfoComment,
  wxSubscribeMessage,
  apiSubmitSave,
  apiAddequi,
  apiGetPhone,
  apiGetOrderList,
  apiGetOrderInfo
} from './api'
import packagePromise from '../packagePromise'
// import { request } from '../request'
import miniPro from '../../utils/wepy-pro'
import { apiGetGoodsShare } from '../index/api';
let request = miniPro.request
let upload = miniPro.upload


// 我的订单 => 查看订单详情
const apiMyOrderInfoF = (orderChildId,orderMasterId, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiMyOrderInfo(orderChildId,orderMasterId),
    method: 'GET',
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 我的订单 => 查看订单详情  (评价的准备信息 商品信息)
const apiMyOrderInfoCommentF = (orderChildId, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiMyOrderInfoComment(orderChildId),
    method: 'GET',
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

//进入收银台 prepare  new
const apiFindOrderDetailF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiFindOrderDetail(),
    method: 'POST',
    header: {
      'content-type': 'application/json'
    },
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 订单模块 => 查询订单详情 new
const apiGetOrderInfoF = (id,fun) => packagePromise((resolve, reject) => {
  request({
    url: apiGetOrderInfo(id),
    method: 'GET',
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})
// 订单模块 => 下单
const apiCreateOrderF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiCreateOrder(),
    method: 'POST',
    header: {
      'content-type': 'application/json'
    },
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})


// 订单模块 => 查询订单列表
const apiGetOrderListF = (fun) => packagePromise((resolve, reject) => {
  request({
    url: apiGetOrderList(),
    method: 'GET',
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 支付模块 => 创建支付订单
const apiPayCreateF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiPayCreate(),
    method: 'POST',
    header: {
      'content-type': 'application/json' // application/json
    },
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 收货地址模块 => 删除收货地址
const apiAddressDeleteF = (id, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiAddressDelete(id),
    method: 'DELETE'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 收货地址模块 => 获取地址详情
const apiAddressFindF = (id, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiAddressFind(id),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 收货地址模块 => 获取城市数据 new
const apiAddressByParentF = (id, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiAddressByParent(id),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 收货地址模块 => 获取默认地址
const apiFindDefAddressF = (fun) => packagePromise((resolve, reject) => {
  request({
    url: apiFindDefAddress(),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})
// apiFindDefAddress

// 收货地址模块 => 分页获取我的收货地址
const apiAddressFindAllF = (fun) => packagePromise((resolve, reject) => {
  request({
    url: apiAddressFindAll(),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 提交试用申请 new
const apiSubmitSaveF = (data, fun) => packagePromise((resolve, reject) => {
  let vArr = [  //验证是否为空
    ['addressId', data.addressId, '地址', 'empty'],
  ]
  let _Validated = Validate(vArr)
  if (!_Validated) { return }
  request({
    url: apiSubmitSave(),
    method: 'POST',
    header:{
      "content-type":"application/json"
    },
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 扫码添加设备提交信息 new
const apiAddequiF = (data, fun) => packagePromise((resolve, reject) => {
  let vArr = [
    ['name', data.name, '设备名称', 'empty'],
      ['province', data.province, '设备地址', 'empty'],//校验不为空
    ['address', data.address, '详细地址', 'empty']
  ]
  let _Validated = Validate(vArr)
  if (!_Validated) { return }
  request({
    url: apiAddequi(),
    method: 'POST',
    // header:{
    //   "content-type":"application/json"
    // },
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 收货地址模块 => 添加收货地址 new
const apiAddressSaveF = (data, fun) => packagePromise((resolve, reject) => {
  let _params = data
  let vArr = [
    ['name', _params.name, '收货人', 'empty'],
    ['phone', _params.phone, '联系电话', 'empty|phone'],
    ['cityId', _params.cityId, '收货地址', 'empty'],
    ['address', _params.address, '详细地址', 'empty']
  ]
  let _Validated = Validate(vArr)
  if (!_Validated) { return }
  request({
    url: apiAddressSave(),
    method: 'POST',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 收货地址模块 => 修改收货地址
const apiAddressUpdateF = (data, fun) => packagePromise((resolve, reject) => {
  let _params = data
  let vArr = [
    ['name', _params.name, '收货人', 'empty'],
    ['phone', _params.phone, '联系电话', 'empty|phone'],
    ['cityId', _params.cityId, '收货地址', 'empty'],
    ['address', _params.address, '详细地址', 'empty']
  ]
  let _Validated = Validate(vArr)
  if (!_Validated) { return }
  request({
    url: apiAddressUpdate(),
    method: 'PUT',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 收货地址模块 => 设置默认地址
const apiAddressSetDefaultF = (id, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiAddressSetDefault(id),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})



//文件图片上传
const wxFileUploadF = (dataType,fun,fileUrl,fileName,cb) => packagePromise((resolve, reject) => {
  const Access_Token = miniPro.getAccessToken()
  wx.uploadFile({
    url: wxFileUpload(),
    filePath: fileUrl,
    name: fileName,
    method: 'POST',//请求方式
    header: {
      'version': `${Version}`,
      'Authorization': `${Access_Token}`,
      'content-type': 'multipart/form-data', // application/json
    },
    formData: {
      type: dataType
    },
    success (res){
      const data = res.data
      let string = JSON.parse(data);
      cb(string)
    }
  })
});

/* 消息订阅  new*/
const wxSubscribeMessageF = (type) => packagePromise((resolve, reject) => {
  request({  //消息订阅
    url: wxSubscribeMessage(type),
    method: 'GET',
  }, null)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
});

/* 获取客服电话  new*/
const apiGetPhoneF = () => packagePromise((resolve, reject) => {
  request({
    url: apiGetPhone(),
    method: 'GET',
  }, null)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
});

export {
  apiCreateOrderF,
  apiFindOrderDetailF,
  apiPayCreateF,
  apiAddressDeleteF,
  apiAddressByParentF,
  apiFindDefAddressF,
  apiAddressFindF,
  apiAddressFindAllF,
  apiAddressSaveF,
  apiAddressUpdateF,
  apiAddressSetDefaultF,
  wxFileUploadF,
  apiMyOrderInfoF,
  apiMyOrderInfoCommentF,
  apiSubmitSaveF,
  apiAddequiF,
  wxSubscribeMessageF,
  apiGetPhoneF,
  apiGetOrderListF,
  apiGetOrderInfoF
}
