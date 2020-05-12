import request from '@/utils/request'

export function getBanner () {
    return request({
        url: '/banner',
        method: 'get'
    })
}


export function delBanner (data) {
    return request({
        url: '/delbanner',
        method: 'post',
        data
    })
}
