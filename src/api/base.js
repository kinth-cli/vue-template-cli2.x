/**
 * 接口域名的管理
 */
let base = {}
if (process.env.NODE_ENV === 'development') {
  base = {
    rest: location.protocol + '//' + location.host.replace(/:[\S]+/, ':8081') + '/gd/app/clic-mall-new'
  }
} else if (process.env.NODE_ENV === 'production') {
  base = {
    rest: 'http://training.kinthtech.com/guangxi/api/app/vipShop'
  }
}

export default base
