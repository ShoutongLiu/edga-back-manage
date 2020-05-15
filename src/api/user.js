/*
 * @Author: your name
 * @Date: 2020-05-11 17:24:27
 * @LastEditTime: 2020-05-12 10:49:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \edu-kid-face-weapp-deve:\外接项目\edga-back-manage\src\api\user.js
 */
import request from '@/utils/request'

export function login (data) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}

export function getInfo (token) {
    return request({
        url: '/user/info',
        method: 'get',
        params: { token }
    })
}

export function logout () {
    return request({
        url: '/user/logout',
        method: 'post'
    })
}


export function update (data) {
    return request({
        url: '/user/update',
        method: 'post',
        data
    })
}
