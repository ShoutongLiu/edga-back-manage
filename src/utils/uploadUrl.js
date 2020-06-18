let url = ''
if (process.env.NODE_ENV === 'development') {
    // 开发环境
    url = 'http://127.0.0.1'

} else if (process.env.NODE_ENV === 'production') {
    // 生产环境
    url = 'https://hangjia.egda.com'
}


export default url