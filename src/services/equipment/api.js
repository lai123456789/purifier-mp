import { MAIN_DOMAIN } from '../../common/js/config';

// 文化衍生故事模块 => 删除自己评论
const apiTaleCommentDelete = (id) => `${MAIN_DOMAIN}/api/tale/comment/delete/${id}`

// 文化衍生故事模块 => 分页获取某个故事的评论
const apiTaleCommentFindPage = (id) => `${MAIN_DOMAIN}/api/tale/comment/find_page`

// 文化衍生故事模块 => 文化衍生故事发布评论
const apiTaleCommentSave = (id) => `${MAIN_DOMAIN}/api/tale/comment/save`

// 文化衍生故事模块 => 获取故事详情
const apiTaleFindDetails = (id) => `${MAIN_DOMAIN}/api/tale/info/${id}`

// 文化衍生故事模块 => 分页获取故事列表
const apiTaleFindPage = (id) => `${MAIN_DOMAIN}/api/tale/find_tale_page`

// 文化衍生故事模块 => 点赞
const apiTalePatronize = (taleId) => `${MAIN_DOMAIN}/api/tale/like/${taleId}`

// 文化衍生故事模块 => 点赞
const apiTaleUnpatronize = (taleId) => `${MAIN_DOMAIN}/api/tale/unpatronize/${taleId}`

// 当前用户绑定的所有设备 new
const apiGetBinding = () => `${MAIN_DOMAIN}/api/user/purifier/binding`

// 设备用水报告详情图表形式 new
const getUseWaterReport = (id,year,month) => `${MAIN_DOMAIN}/api/user/report/${id}/${year}/${month}`

// 用户绑定的设备列表(含用水报告月份信息) new
const getEquipList = () => `${MAIN_DOMAIN}/api/user/report/binding`

// 设备所有者解除他人的子绑定 new
const delEquip = (id) => `${MAIN_DOMAIN}/api/user/share/unbind/${id}`

// 获取当前用户的作为主绑定的所有设备 new
const getshareEquipList = () => `${MAIN_DOMAIN}/api/user/share/binding`

// 获取小程序设备分享码图片 new
const apiGetMyShare = (id) => `${MAIN_DOMAIN}/api/user/share/${id}`

// 当前用户绑定的所有设备 new
const apiGetDemo = () => `${MAIN_DOMAIN}/api/user/purifier/demo`

// 通过分享小程序码绑定设备 new
const apiGetByShare = (qrCode) => `${MAIN_DOMAIN}/api/user/share/bind/${qrCode}`

// 具体某天用水量
const apiUseWaterToday = (id) => `${MAIN_DOMAIN}/api/user/purifier/instant/${id}`

// 总记录用水量
const apiGetAllTimeData = (id) => `${MAIN_DOMAIN}/api/user/purifier/instantday/${id}`

// 水质详情
const apiWaterInfo = (id) => `${MAIN_DOMAIN}/api/user/purifier/quality/${id}`

// 滤芯详情
const apiFilterInfo = (id) => `${MAIN_DOMAIN}/api/user/purifier/filter/${id}`

// 主绑定编辑设备名称 new
const apiupdateEquip = (id) => `${MAIN_DOMAIN}/api/user/purifier/update/${id}`

//子绑定解绑
const apiunbindEquip = (id) => `${MAIN_DOMAIN}/api/user/purifier/unbind/${id}`

//开关阀门
const apiInstructValve = (id) => `${MAIN_DOMAIN}/api/user/purifier/instruct/${id}`

export {
  apiGetAllTimeData,
  apiGetByShare,
  delEquip,
  apiTaleCommentDelete,
  apiTaleCommentFindPage,
  apiTaleCommentSave,
  apiTaleFindDetails,
  apiTaleFindPage,
  apiTalePatronize,
  apiTaleUnpatronize,
  apiGetBinding,
  apiGetDemo,
  apiWaterInfo,
  apiFilterInfo,
  apiUseWaterToday,
  getUseWaterReport,
  getEquipList,
  apiupdateEquip,
  apiunbindEquip,
  apiInstructValve,
  getshareEquipList,
  apiGetMyShare
}
