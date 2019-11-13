import wepy from 'wepy'
const baseURL='https://www.zhengzhicheng.cn/api/public/v1'

// 弹框提示一个无图标的toast消息，@str 要提示的消息
wepy.baseToast= function(str = '获取数据失败！'){
    wepy.showToast({
        title: str,
        icon: 'none',
        duration: 1500
    })
}
// 发起get请求的API，@url 请求的地址，必须以/开头，@data请求的参数对象
wepy.get = function(url,data = {}){
    return wepy.request({
        url: baseURL + url,
        method: 'GET',
        data
    })
}
// 发起post请求的API，@url 请求的地址，必须以/开头，@data请求的参数对象
wepy.post = function(url,data = {}){
    return wepy.request({
        url: baseURL + url,
        method: 'POST',
        data
    })
}