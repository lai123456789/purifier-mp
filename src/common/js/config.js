/*
 * 项目配置（每个小程序项目都必须用到）
 * @Author: icarbonx-mini
 * @Date: 2018-06-29 11:10:20
 * @Last Modified by: icarbonx-mini
 * @Last Modified time: 2018-07-05 18:27:081
 */

/**
 * 每个项目需要改变
 * BASE_NAME：前端随便取个适合自己项目的名字
 * WECHAT_APP_NAME：【重要】 由后台定义给出
 * WECHAT_AUTH_BASE: 【重要】由后台定义每个项目不一样
 */
const BASE_NAME = 'CHENG-MALL'
const WECHAT_APP_NAME = 'Wechat_Sugar_Mini_Program'; // app name
const WECHAT_AUTH_BASE = '';
const TOAST_DURATION = 2000 // toast duration
const DEBOUNCE_TIME = 300 // debounce time
// const MAIN_DOMAIN = 'http://localhost:9010' //本地域名
// const MAIN_DOMAIN = 'https://purifier.chengmall.cn' //测试域名192.168.1111
const MAIN_DOMAIN = 'https://mp.ismartclean.com' // 正式域名
const Version = '1.0'
const WBVIEW_PAGE_URL = '/pages/webview/index'
const WECHAT_ACCESS_TOKEN_NAME = `${BASE_NAME}_Access_TOKEN` // access_token存储名字
const EVENT_QUEUE_NAME = 'eventQueue'
const TIP_GLYCEMIC_TEXT = 'GlycemicText'
export {
  TOAST_DURATION,
  DEBOUNCE_TIME,
  MAIN_DOMAIN,
  WBVIEW_PAGE_URL,
  WECHAT_APP_NAME,
  WECHAT_AUTH_BASE,
  WECHAT_ACCESS_TOKEN_NAME,
  EVENT_QUEUE_NAME,
  TIP_GLYCEMIC_TEXT,
  Version
}
