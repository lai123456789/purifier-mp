import { MAIN_DOMAIN } from '../../common/js/config';

// 资讯模块 => 获取资讯列表
const apiGetInfoList = () => `${MAIN_DOMAIN}/api/tale/list`

//  => 获取资讯详情
const apiTaleFindDetails = (id) => `${MAIN_DOMAIN}/api/tale/info/${id}`

//  => 点赞
const apiTalePatronize = (taleId) => `${MAIN_DOMAIN}/api/tale/like/${taleId}`

export {
  apiGetInfoList,
  apiTaleFindDetails,
  apiTalePatronize
}
