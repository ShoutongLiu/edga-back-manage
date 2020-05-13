import request from '@/utils/request'

export function addLocation (data) {
    return request({
        url: '/location/add',
        method: 'post',
        data
    })
}


export function getLocation (data) {
    return request({
        url: '/location/get',
        method: 'post',
        data
    })
}

export function delLocation (data) {
    return request({
        url: '/location/del',
        method: 'post',
        data
    })
}

export function updateLocation (data) {
    return request({
        url: '/location/update',
        method: 'post',
        data
    })
}
