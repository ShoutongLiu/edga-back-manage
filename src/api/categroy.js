import request from '@/utils/request'

export function addCategroy (data) {
    return request({
        url: '/categroy/add',
        method: 'post',
        data
    })
}


export function getCategroy (data) {
    return request({
        url: '/categroy/get',
        method: 'post',
        data
    })
}

export function delCategroy (data) {
    return request({
        url: '/categroy/del',
        method: 'post',
        data
    })
}

export function updateCategroy (data) {
    return request({
        url: '/categroy/update',
        method: 'post',
        data
    })
}
