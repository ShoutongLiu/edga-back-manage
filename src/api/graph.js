import request from '@/utils/request'

export function getGraph () {
    return request({
        url: '/graph/get',
        method: 'get'
    })
}


export function delGraph (data) {
    return request({
        url: '/graph/del',
        method: 'post',
        data
    })
}



export function addGraph (data) {
    return request({
        url: '/graph/add',
        method: 'post',
        data
    })
}
