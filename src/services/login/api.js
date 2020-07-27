import { MAIN_DOMAIN } from '../../common/js/config';

// 用户模块 => 解析用户信息登录
const apiWechatLogin = () => `${MAIN_DOMAIN}/api/wx/user/login`

// 用户模块 => 解析用户手机号
const apiPasePhone = () => `${MAIN_DOMAIN}/api/wx/user/parse_phone`

// 用户模块 => 判断是否登录
const apiIsWechatLogin = () => `${MAIN_DOMAIN}/api/wx/user/isLogin`

export {
  apiWechatLogin,
  apiPasePhone,
  apiIsWechatLogin
}
