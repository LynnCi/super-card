import WeCropper from '../we-cropper/dist/we-cropper.js'

const device = wx.getSystemInfoSync() // 获取设备信息
const width = device.windowWidth // 示例为一个与屏幕等宽的正方形裁剪框
const height = width

Page({
  data: {
    cropperOpt: {
      id: 'cropper',
      width,  // 画布宽度
      height, // 画布高度
      scale: 2.5, // 最大缩放倍数
      zoom: 8, // 缩放系数
      cut: {
        x: (width - 344) / 2, // 裁剪框x轴起点
        y: (width - 318) / 2, // 裁剪框y轴期起点
        width: 344 , // 裁剪框宽度
        height: 318 // 裁剪框高度
      }
    },
    nowOp: '',
    userOp: '',
    isShow: 0,  //  0：都隐藏 1:发名片  2 收藏名片 
    userInfo: {
      bg: '/img/card_bg.jpg',
      logo: '/img/logo.png',
      title: '/img/title.png',
      biaoyu: '专门为社会组织设计的展示平台',
      name: '安晓杰',
      namePingying: 'ANXIAOJIE',
      danwei: '北京易魔方科技集团有限公司',
      zhiwei: '经理',
      tel: '17736031292',
      weixin: 'axj1292',
      email: 'axj545439067@126.com',
      addrs: '河北省石家庄市高新区天山花园',
      latitude: '',
      longitude: ''
    },
    userJianjie: {
      info: '①  我们依托北京大学地方政府治理与创新研究中心等优势资源，致力于成为1家满足社会发展与创新需求的服务与资源整合机构。 \n ②  我们已探索出为企业和社团组织2大最具活力主体提供高价值服务的模式与手段。 \n ③  我们构建“财税专业委员会”、“信息化专业委员会”和“能力建设专业委员会”  \n ④  我们打造4个特色平台，卓有成效地成为政府职能转移的实力承接者：北京社会组织众扶平台、一带一路合作促进平台、知诚创新创业公共服务平台、新华政商大',
      images: ['/img/bg.jpg', '/img/bg.jpg']
    }
  },
  onLoad:function(option) {
    const { cropperOpt } = this.data

    // 若同一个页面只有一个裁剪容器，在其它Page方法中可通过this.wecropper访问实例
    new WeCropper(cropperOpt)
      .on('ready', (ctx) => {
        console.log(`wecropper is ready for work!`)
      })
      .on('beforeImageLoad', (ctx) => {
        console.log(`before picture loaded, i can do something`)
        console.log(`current canvas context: ${ctx}`)
        wx.showToast({
          title: '上传中',
          icon: 'loading',
          duration: 20000
        })
      })
      .on('imageLoad', (ctx) => {
        console.log(`picture loaded`)
        console.log(`current canvas context: ${ctx}`)
        wx.hideToast()
      })

    // 若同一个页面由多个裁剪容器，需要主动做如下处理

    // this.A = new weCropper(cropperOptA)
    // this.B = new weCropper(cropperOptB)
  },
  uploadTap: function() {
    const self = this

    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success(res) {
        const src = res.tempFilePaths[0]
        console.log(src)
        self.wecropper.pushOrign(src)
      }
    })
  },
  getCropperImage:function() {
    this.wecropper.getCropperImage((src) => {
      if (src) {
        console.log(src)
        wx.previewImage({
          current: '', // 当前显示图片的http链接
          urls: [src] // 需要预览的图片http链接列表
        })
        wx.getImageInfo({
          src: src,
          success: (res) => {
            console.log(res)
          }
        })
      } else {
        console.log('获取图片地址失败，请稍后重试')
      }
    })
  },
  touchStart:function(e) {
    this.wecropper.touchStart(e)
  },
  touchMove: function(e) {
    this.wecropper.touchMove(e)
  },
  touchEnd: function(e) {
    this.wecropper.touchEnd(e)
  }
})