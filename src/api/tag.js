import request from '@/utils/request'

export function addTag (data) {
    return request({
        url: '/tag/add',
        method: 'post',
        data
    })
}


export function getTag (data) {
    return request({
        url: '/tag/get',
        method: 'post',
        data
    })
}

export function delTag (data) {
    return request({
        url: '/tag/del',
        method: 'post',
        data
    })
}

export function updateTag (data) {
    return request({
        url: '/tag/update',
        method: 'post',
        data
    })
}
