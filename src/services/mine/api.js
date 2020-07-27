import { MAIN_DOMAIN } from '../../common/js/config';
import { apiwithdrawRecordF } from './index';


// 订单模块 => 下单
const apiCreateOrder = () => `${MAIN_DOMAIN}/api/buy/order/create`

// 订单模块 => 订单详情 new
// const apiFindOrderDetail = () => `${MAIN_DOMAIN}/api/buy/order/prepare`
const apiFindOrderDetail = () => `${MAIN_DOMAIN}/api/user/order/prepare`

// 订单模块 => 查看 订单详情 新
const apiMyOrderInfo = (orderChildId,orderMasterId) => `${MAIN_DOMAIN}/api/buy/order/infos?orderMasterId=${orderMasterId}&orderChildId=${orderChildId}`

// 订单模块 => 查看 订单详情 （评价进来的商品准备信息 ）
const apiMyOrderInfoComment = (orderChildId) => `${MAIN_DOMAIN}/api/buy/order/list/detail?orderChildId=${orderChildId}`



// 支付模块 => 创建支付订单
// const apiPayCreate = (id) => `${MAIN_DOMAIN}/api/buy/order/create`
const apiPayCreate = (id) => `${MAIN_DOMAIN}/api/buy/order/placeorder`

// 收货地址模块 => 获取地址详情
const apiAddressFind = (id) => `${MAIN_DOMAIN}/api/user/address/find_by_id/${id}`

// 收货地址模块 => 获取城市数据
const apiAddressByParent = (parentId) => `${MAIN_DOMAIN}/api/dict/address/find_by_parentid/${parentId}`

// 收货地址模块 => 获取默认地址
const apiFindDefAddress = () => `${MAIN_DOMAIN}/api/user/address/find_def_address`

// 收货地址模块 => 分页获取我的收货地址
const apiAddressFindAll = () => `${MAIN_DOMAIN}/api/user/address/find_all`

// 提交试用申请 new
const apiSubmitSave = () => `${MAIN_DOMAIN}/api/user/order/placeorder`

// 扫码添加设备 new
const apiAddequi = () => `${MAIN_DOMAIN}/api/user/purifier/bind`

// 收货地址模块 => 添加收货地址
const apiAddressSave = () => `${MAIN_DOMAIN}/api/user/address/save`

// 收货地址模块 => 修改收货地址
const apiAddressUpdate = () => `${MAIN_DOMAIN}/api/user/address/update`

// 收货地址模块 => 设置默认地址
const apiAddressSetDefault = (id) => `${MAIN_DOMAIN}/api/user/address/set_def/${id}`

// 微信文件上传
const wxFileUpload = () => `${MAIN_DOMAIN}/api/image/upload`

// 订阅消息F new
const wxSubscribeMessage = (type) => `${MAIN_DOMAIN}/wx/subscribe/message?subscribe=${type}`

// 客服电话 new
const apiGetPhone = (type) => `${MAIN_DOMAIN}/api/config/hotline`
// 订单模块 => 分页查询全部订单列表
const apiGetOrderList = () => `${MAIN_DOMAIN}/api/user/order/list`
// 订单模块 => 查询订单详情
const apiGetOrderInfo = (id) => `${MAIN_DOMAIN}/api/user/order/${id}`

export {
  apiCreateOrder,
  apiFindOrderDetail,
  apiGetOrderList,
  apiPayCreate,
  apiAddressFind,
  apiAddressByParent,
  apiFindDefAddress,
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
  apiGetOrderInfo
}
