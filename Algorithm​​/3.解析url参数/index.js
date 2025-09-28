// 解析url参数变为一个对象
const url = 'http://www.baidu.com/?user=anonymous&hobby=111&hobby=456&city=%E5%8C%97%E4%BA%AC'
const obj = {
    user: 'anonymous',
    hobby: [111, 456],
    city: "北京"
}
function parseUrl(url) {
    const queryString = url.split('?')[1]
    const pairs = queryString.split('&')
    const result = {}
    for (const pair of pairs) {
        let [key, value] = pair.split('=')
        // 将url上的utf8解码为中文
        key = decodeURI(key)
        value = decodeURI(value)
        // 处理重复键中不是当前重复key中的第一个键值对的后续键值对，如hobby=111&hobby=456&hobby=789中的hobby=456、hobby=789
        if (result.hasOwnProperty(key)) {
            // 当前重复key对应的value是数组，直接加入push，用于hobby=111&hobby=456&hobby=789中的hobby=789
            if (Array.isArray(result[key])) {
                result[key].push(value)
            } else { // 当前重复key对应的value还不是数组，变为数组，用于hobby=111&hobby=456&hobby=789中的hobby=456
                result[key] = [result[key], value]
            }
        } else {
            result[key] = value
        }
    }
    return result
}
console.log(parseUrl(url));