import request from "../utils/request";
export default class {
  static questMassage(params) {
    return request({
      url: "/messages/findByPage",
      method: "POST",
      data: params || {},
    });
  }
}

