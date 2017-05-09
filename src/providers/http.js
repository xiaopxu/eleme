import Vue from 'vue'
import ElementUI from 'element-ui'

/**
 * @description 统一处理请求
 * 
 * @export
 * @class Http
 */
export class Http {
  constructor() {}

  /**
   * @description post请求
   * 
   * @param {any} param 请求参数（包含url及params）
   * @returns {Promise}
   * 
   * @memberOf Http
   */
  post(param) {
    //打印日志
    console.group("======================发起请求=========================")
    console.log("请求接口：" + param.url)
    console.log("请求参数：")
    console.log(param.params)

    //发起请求
    return new Promise((resolve, reject) => {
      Vue.http.post(param.url, param.params)
        //通讯成功
        .then(res => {
          console.log('响应参数：')
          console.log(res.body)
          console.groupEnd();

          if (res.body.code == 200 && res.body.data != null) {
            resolve(res.body.data)
          } else if (res.body.code == 400 || res.body.data == null) {
            ElementUI.Message.error(res.body.message)
            reject(res.body)
          }
        })
        //通讯失败
        .catch(err => {
          ElementUI.Message.error(err)
          reject(err)
        })
    })
  }
  handleErr(err) {
    ElementUI.Message.error(err)
  }
}


