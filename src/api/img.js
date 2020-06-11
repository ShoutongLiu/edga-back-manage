import request from '@/utils/request'

export function delPic (data) {
    return request({
        url: '/img/delpic',
        method: 'post',
        data
    })
}


export function delWx (data) {
    return request({
        url: '/img/delwx',
        method: 'post',
        data
    })
}