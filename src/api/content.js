import request from '@/utils/request'

export function getContent (data) {
    return request({
        url: '/content/get',
        method: 'post',
        data
    })
}


export function delContent (data) {
    return request({
        url: '/content/del',
        method: 'post',
        data
    })
}



export function addContent (data) {
    return request({
        url: '/content/add',
        method: 'post',
        data
    })
}


export function updateContent (data) {
    return request({
        url: '/content/add',
        method: 'post',
        data
    })
}
