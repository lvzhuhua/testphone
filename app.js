//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    numberarray: ['1', '2', '3', '4', '5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'],
    typearray: ['借出', '归还'],
    typephone: ['华为[EVA-TL100]', '华为[PRA-AL00]', '华为[ATH-TL00]','小米[HM 2LTE-CMCC]', 'Vivo[Y35]', 'Vivo[X5ProD]', 'Vivo[X9]', '三星[SM-G9350]', '三星[SM-A8000]', '苹果[iphone6]', '苹果[iphone5s]', '苹果[iPhone6s]', 'OPPO[OPPO R9m]', 'OPPO[OPPO A57]', '乐视[乐视乐2]']
    // typearray: ['购物', '餐饮', '交通', '住宿', '玩乐', '其他','借出', '归还']

  }
})