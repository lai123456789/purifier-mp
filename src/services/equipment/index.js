import wepy from 'wepy'
import {
  apiTaleCommentDelete,
  apiTaleCommentFindPage,
  apiTaleCommentSave,
  apiTaleFindDetails,
  apiTaleFindPage,
  apiTalePatronize,
  apiTaleUnpatronize,
  apiGetBinding,
  apiupdateEquip,
  apiGetDemo,
  apiWaterInfo,
  apiFilterInfo,
  apiUseWaterToday,
  getUseWaterReport,
  getEquipList,
  apiunbindEquip,
  apiInstructValve,
  getshareEquipList,
  delEquip,
  apiGetMyShare,
  apiGetByShare,
  apiGetAllTimeData
} from './api'
import packagePromise from '../packagePromise'
// import { request } from '../request'
import miniPro from '../../utils/wepy-pro'
let request = miniPro.request

// 文化衍生故事模块 => 删除自己评论
const apiTaleCommentDeleteF = (id, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiTaleCommentDelete(),
    method: 'DELETE'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 文化衍生故事模块 => 分页获取某个故事的评论 【分页暂时不做】
const apiTaleCommentFindPageF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiTaleCommentFindPage(),
    method: 'POST',
    noOutData: true,
    data: {
      limit: 20,
      ...data
    }
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 文化衍生故事模块 => 文化衍生故事发布评论
const apiTaleCommentSaveF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiTaleCommentSave(),
    method: 'POST',
    data: {
      ...data
    }
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 文化衍生故事模块 => 获取故事详情
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

// 文化衍生故事模块 => 分页获取故事列表【分页已做】
const apiTaleFindPageF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiTaleFindPage(),
    method: 'POST',
    noOutData: true,
    data: {
      limit: 200,
      ...data
    }
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 文化衍生故事模块 => 点赞
const apiTalePatronizeF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiTalePatronize(data.id),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 文化衍生故事模块 => 点赞
const apiTaleUnpatronizeF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiTaleUnpatronize(data.id),
    method: 'DELETE'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 当前用户绑定的所有设备 new
const apiGetBindingF = (fun) => packagePromise((resolve, reject) => {
  request({
    url: apiGetBinding(),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 解绑(设备所有者解除他人的子绑定) new
const delEquipF = (id,fun) => packagePromise((resolve, reject) => {
  request({
    url: delEquip(id),
    method: 'POST'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 用户绑定的设备列表(含用水报告月份信息) new
const getEquipListF = (fun) => packagePromise((resolve, reject) => {
  request({
    url: getEquipList(),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 设备的用水报告详情图表 new
const getUseWaterReportF = (id,year,month,fun) => packagePromise((resolve, reject) => {
  request({
    url: getUseWaterReport(id,year,month),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 当前演示设备 new
const apiGetDemoF = (fun) => packagePromise((resolve, reject) => {
  request({
    url: apiGetDemo(),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 通过分享小程序码绑定设备 new
const apiGetByShareF = (qrCode,fun) => packagePromise((resolve, reject) => {
  request({
    url: apiGetByShare(qrCode),
    method: 'POST'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})


// 获取当前用户的作为主绑定的所有设备 new
const getshareEquipListF = (fun) => packagePromise((resolve, reject) => {
  request({
    url: getshareEquipList(),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})


// 所有记录的用水量 new  默认7天的记录
const apiGetAllTimeDataF = (id,data,fun) => packagePromise((resolve, reject) => {
  request({
    url: apiGetAllTimeData(id),
    method: 'GET',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 某天用水量 new
const apiUseWaterTodayF = (id,data,fun) => packagePromise((resolve, reject) => {
  request({
    url: apiUseWaterToday(id),
    method: 'GET',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})


// 水质详情 new
const apiWaterInfoF = (id,fun) => packagePromise((resolve, reject) => {
  request({
    url: apiWaterInfo(id),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 滤芯详情 new
const apiFilterInfoF = (id,fun) => packagePromise((resolve, reject) => {
  request({
    url: apiFilterInfo(id),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 主绑定编辑设备名称 new
const apiupdateEquipF = (id,data,fun) => packagePromise((resolve, reject) => {
  request({
    url: apiupdateEquip(id),
    method: 'POST',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 子绑定解除设备
const apiunbindEquipF = (id,fun) => packagePromise((resolve, reject) => {
  request({
    url: apiunbindEquip(id),
    method: 'POST',
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 开关阀门 new
const apiInstructValveF = (id,data,fun) => packagePromise((resolve, reject) => {
  request({
    url: apiInstructValve(id),
    method: 'POST',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 获取分享设备小程序码 new
const apiGetMyShareF = (id,data,fun) => packagePromise((resolve, reject) => {
  request({
    url: apiGetMyShare(id),
    method: 'POST',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

export {
  apiGetAllTimeDataF,
  apiGetByShareF,
  delEquipF,
  getshareEquipListF,
  apiInstructValveF,
  apiunbindEquipF,
  apiTaleCommentDeleteF,
  apiTaleCommentFindPageF,
  apiTaleCommentSaveF,
  apiTaleFindDetailsF,
  apiTaleFindPageF,
  apiTalePatronizeF,
  apiTaleUnpatronizeF,
  apiGetBindingF,
  apiGetDemoF,
  apiWaterInfoF,
  apiFilterInfoF,
  apiUseWaterTodayF,
  getUseWaterReportF,
  getEquipListF,
  apiupdateEquipF,
  apiGetMyShareF
}
