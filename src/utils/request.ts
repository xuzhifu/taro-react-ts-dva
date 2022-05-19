import Taro from "@tarojs/taro";
import { HOST_WEAPP } from "./reauestHost";
const token = "840";
export default function request(params) {
  console.log("params", params);
  return new Promise((resolve, reject) => {
    let { url, method = "GET", data } = params;
    let contentType = "application/x-www-form-urlencoded";
    contentType = params.contentType || contentType;
    return Taro.request({
      isShowLoading: false,
      url: HOST_WEAPP + url,
      data: data,
      method: method,
      //   header: { "content-type": contentType, token: token }, // 默认contentType ,预留token
      // eslint-disable-next-line no-unused-vars
      success(res) {
        resolve(res);
      },
      error(e) {
        // eslint-disable-next-line no-undef
        reject(logError("api", "请求接口出现问题", e));
      },
    });
  });
}

