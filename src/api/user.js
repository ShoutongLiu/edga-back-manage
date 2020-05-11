/*
 * @Author: your name
 * @Date: 2020-05-11 17:24:27
 * @LastEditTime: 2020-05-11 18:37:29
 * @LastEditors: your name
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
        url: '/vue-admin-template/user/info',
        method: 'get',
        params: { token }
    })
}

export function logout () {
    return request({
        url: '/vue-admin-template/user/logout',
        method: 'post'
    })
}
