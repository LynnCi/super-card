// pages/servers/servers.js
const app = getApp()
var util = require('../../utils/util.js');


Page({
  data: {
    nowOp: '',
    userOp: '',
    page:1,
    pageTotal:1,
    list:[
      {
        id:1,
        src:'/img/bg.jpg',
        title:'社会组织财税服务1',
        info:'社会注重财税只是大课堂，社会注重财税只是大课堂，社会注重财税只是大课堂，社会注重财税只是大课堂，社会注重财税只是大课堂'
      },
      {
        id: 2,
        src: '/img/bg.jpg',
        title: '社会组织财税服务2',
        info: '社会注重财税只是大课堂，社会注重财税只是大课堂，社会注重财税只是大课堂，社会注重财税只是大课堂，社会注重财税只是大课堂'
      },
      {
        id: 3,
        src: '/img/bg.jpg',
        title: '社会组织财税服务3',
        info: '社会注重财税只是大课堂，社会注重财税只是大课堂，社会注重财税只是大课堂，社会注重财税只是大课堂，社会注重财税只是大课堂'
      },
      {
        id: 1,
        src: '/img/bg.jpg',
        title: '社会组织财税服务1',
        info: '社会注重财税只是大课堂，社会注重财税只是大课堂，社会注重财税只是大课堂，社会注重财税只是大课堂，社会注重财税只是大课堂'
      },
      {
        id: 2,
        src: '/img/bg.jpg',
        title: '社会组织财税服务2',
        info: '社会注重财税只是大课堂，社会注重财税只是大课堂，社会注重财税只是大课堂，社会注重财税只是大课堂，社会注重财税只是大课堂'
      },
      {
        id: 3,
        src: '/img/bg.jpg',
        title: '社会组织财税服务3',
        info: '社会注重财税只是大课堂，社会注重财税只是大课堂，社会注重财税只是大课堂，社会注重财税只是大课堂，社会注重财税只是大课堂'
      }
    ]
  },
  onLoad: function (options) {
  
  },
  lower: function (e) {
    let that = this
    if (that.data.page < that.data.pageTotal) {
      let page = that.data.page * 1 + 1
      that.setData({
        page: page
      })
      // wx.request({
      //   url: util.urlStr + '/home/index/lueying',
      //   data: {
      //     page: page
      //   },
      //   header: {
      //     'content-type': 'application/x-www-form-urlencoded'
      //   },
      //   method: 'post',
      //   success: res => {
      //     that.setData({
      //       ly: [...that.data.ly, ...res.data.data]
      //     })
      //   }
      // })
    } else {
      wx.showToast({
        title: '这是全部数据了',
        icon: 'none'
      })
    }
  },
})