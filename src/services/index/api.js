import { MAIN_DOMAIN } from '../../common/js/config';
//查询用户信息
const apiInfo = () => `${MAIN_DOMAIN}/api/wx/user/get_my_basic_info`

// 获取申请成功结果 试用排队人数
const getApplyResult = () => `${MAIN_DOMAIN}/api/user/tryout/queue`

// 分页查询商品信息
const apiGoodsList = () => `${MAIN_DOMAIN}/api/buy/goods/find_page`

// 获取商品详情
const apiGetGoodsDetails = (goodsId,si,sk,qrScene,room_id) => `${MAIN_DOMAIN}/api/buy/goods/get_goods_details/${goodsId}?si=${si}&sk=${sk}&qrScene=${qrScene}&room_id=${room_id}`

// 根据scene获取商品ID
const apiGetGoodsIdByShare = () => `${MAIN_DOMAIN}/api/buy/goods/get_by_share_id`

// 获取商品分享图片
const apiGetGoodsShare = (goodsId) => `${MAIN_DOMAIN}/api/buy/goods/get_goods_details_share/${goodsId}`

// 首页 => 获取首页数据 new
const apiGetHomeData = () => `${MAIN_DOMAIN}/api/home/get_newhome_data`
// 首页 => 获取首页数据 new
const apigetIntroduce = () => `${MAIN_DOMAIN}/api/goods/infos`
// 是否申请试用 new
const getIsApply = () => `${MAIN_DOMAIN}/api/user/tryout/has_try`



export {
  apiInfo,
  apiGoodsList,
  apiGetGoodsDetails,
  apiGetGoodsIdByShare,
  apiGetGoodsShare,
  apiGetHomeData,
  apigetIntroduce,
  getApplyResult,
  getIsApply
}
