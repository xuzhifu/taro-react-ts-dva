Taro.request({
    url: "http://java.wxq.kekeschool.com:8087/messages/findByPage",
    data: {
        noticeType: 2,
        noticeTitle: ''
    },
    method: 'POST',
    header: {
        "content-type": "application/json", // 默认值
    },
    success: function (res) {
        console.log(res.data);
    },
});
