// pages/cardMy/cardMy.js
const app = getApp()
var util = require('../../utils/util.js');

Page({
  data: {
    // 名片信息 
    banImg: "/img/banner.png",//背景图
    logoImg: "/img/logo.png",//logo
    bannerTxt1: "超级明信片",
    bannerTxt2: "专门为社会组织设计的展示平台",
    showMyCard: true,//我的名片
    name: "姓名",
    nameLetter: "XINGMING",
    zhiwu: "职务",
    unit: "单位名单位名称单位位名称单位名单位名称单位位名称",

    // 添加桌面 
    showHideTab: false,

  },
  //添加到桌面弹框
  showHideBtn: function () {
    var that = this;
    that.setData({
      showHideTab: (!that.data.showHideTab)
    })
  },
  showHideBtn2: function () {
    var that = this;
    that.setData({
      showHideTab: (!that.data.showHideTab)
    })
  },

  onLoad: function (options) {
  },


  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  }
})