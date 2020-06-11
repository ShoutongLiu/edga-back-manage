import request from '@/utils/request'

export function addField (data) {
    return request({
        url: '/field/add',
        method: 'post',
        data
    })
}


export function getField (data) {
    return request({
        url: '/field/get',
        method: 'post',
        data
    })
}

export function delField (data) {
    return request({
        url: '/field/del',
        method: 'post',
        data
    })
}

export function updateField (data) {
    return request({
        url: '/field/update',
        method: 'post',
        data
    })
}
