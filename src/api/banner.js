import request from '@/utils/request'

export function getBanner () {
    return request({
        url: '/banner/get',
        method: 'get'
    })
}


export function delBanner (data) {
    return request({
        url: '/banner/del',
        method: 'post',
        data
    })
}



export function addBanner (data) {
    return request({
        url: '/banner/add',
        method: 'post',
        data
    })
}
