const app = getApp()
var util = require('../../utils/util.js');

Page({
  data: {
    nowOp:'',
    userOp:'',
    isShow:0,  //  0：都隐藏 1:发名片  2 收藏名片 
    userInfo:{
      bg:'/img/card_bg.jpg',
      logo:'/img/logo.png',
      title:'/img/title.png',
      biaoyu:'专门为社会组织设计的展示平台',
      name:'安晓杰',
      namePingying:'ANXIAOJIE',
      danwei:'北京易魔方科技集团有限公司',
      zhiwei:'经理',
      tel:'17736031292',
      weixin:'axj1292',
      email:'axj545439067@126.com',
      addrs:'河北省石家庄市高新区天山花园',
      latitude:'',
      longitude:''
    },
    userJianjie:{
      info:'①  我们依托北京大学地方政府治理与创新研究中心等优势资源，致力于成为1家满足社会发展与创新需求的服务与资源整合机构。 \n ②  我们已探索出为企业和社团组织2大最具活力主体提供高价值服务的模式与手段。 \n ③  我们构建“财税专业委员会”、“信息化专业委员会”和“能力建设专业委员会”  \n ④  我们打造4个特色平台，卓有成效地成为政府职能转移的实力承接者：北京社会组织众扶平台、一带一路合作促进平台、知诚创新创业公共服务平台、新华政商大',
      images: ['/img/bg.jpg', '/img/bg.jpg']
    }
  },
  onLoad:function(option) {
    console.log(option);
    this.setData({
      op: option
    })
  },
  phone: function () { //拨打电话
    let that = this
    wx.makePhoneCall({
      phoneNumber: that.data.userInfo.tel
    })
  },
  copyWx: function () { //复制微信
    let that = this
    wx.setClipboardData({
      data: that.data.userInfo.weixin,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制成功',
              icon: 'success'
            })
          }
        })
      }
    })
  },
  copyEmail: function () { //复制Email
    let that = this
    wx.setClipboardData({
      data: that.data.userInfo.email,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制成功',
              icon: 'success'
            })
          }
        })
      }
    })
  },
  maps: function () {
    let that = this
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度  
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: 39.992871,
          longitude: 116.308742,
          scale: 18,
          name: that.data.userInfo.danwei,
          address: that.data.userInfo.addrs,
        })
      }
    })
  },
  onShareAppMessage: function (res) {
    let that = this
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '超级名信片',
      path: "/pages/index/index?openid=1",
      // imageUrl: this.data.thumb,
      success: function (res) {
        
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})