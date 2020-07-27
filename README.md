# wepy小程序备注

### 开发框架
[WePY](https://tencent.github.io/wepy/)

### 小程序框架wepy 使用手册：
=======
### 使用
```js
# 如果电脑未安装node环境，必须先安装配置（vue也适用）
> 安装链接：https://www.cnblogs.com/lgx5/p/10732016.html

# install dependencies（安装依赖使用以下命令）
> npm install

# dev（运行项目调试使用以下命令）
> wepy build --watch

# build（调试完成后打包，可以使用如下命令。ps：这一步可以忽略，小程序代码无需打包发布服务器）
> wepy build
```
### 套用本模板注意点：
```js
# 后续小程序项目直接套用本模板需修改以下几点：
1、project.config.json该文件是小程序开发者工具项目配置文件，修改该文件里面的appid（对应不同的小程序）以及projectname改为你的项目名称
2、修改接口api域名，在common/js/config.js文件里MAIN_DOMAIN字段值改成你的后端提供的接口域名,该文件里面的miniprogram可以设置页面在开发者工具上选择切换
3、app.wpy修改tabbar的样式，如图片、导航栏栏目数量名称
4、接口调用失败返回401会重新登录，跳转授权页面，wepy-pro.js文件 请求里面看  404暂未设置
```
#####（代码版本管理工具推荐：SourceTree或者Git Extensions，都是可视化的图形管理界面）

### 版本开发规范
##### 1.基于版本规范制定的开发分支规范。master为稳定的主版本，一旦master发布一个稳定版本后打一个tag 基于master 平行拉取出dev分支(该分支作为功能版本分支，发布后y版本升级)，并由dev分支拉取出特定的功能分支，如feature/integration-1.0分支和feature/marketing-1.o, 两个feature分支独立开发，按照既定版本进行发布并升级。feature分支开发完后，合并到dev，然后合并到master。
##### 2.基于master拉取bug分支hotfix(如当前稳定版本为1.0.0-RELASE),拉取出1.0.1,发布完成后版本升级至1.0.1。然后合并到dev和对应的feature分支 如果feature/integration-1.0开发完成发布后版本升为1.1.0。
