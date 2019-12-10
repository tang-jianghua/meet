// pages/find/find.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    circular: true,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
      userList:[
        {
          headImg:"../../images/tab/test.png",
          username:"爱吃的饕餮",
          images: ["../../images/test/1.jpg", "../../images/test/2.jpg", "../../images/test/3.jpg"],
          media:"",
          evaluate:[
            {id:"1",
              username:"爱吃的饕餮",
            content:"我是评论1"
            },
            {
              id: "1",
              username: "爱吃的饕餮",
              content: "我是评论2"
            }
          ]
        },
        {
          headImg: "../../images/tab/test.png",
          username: "爱吃的饕餮",
          images: ["../../images/test/1.jpg", "../../images/test/2.jpg", "../../images/test/3.jpg"],
          media: "../../media/test.mp4",
          evaluate: [
            {
              id: "1",
              username: "爱吃的饕餮",
              content: "我是评论1"
            },
            {
              id: "1",
              username: "爱吃的饕餮",
              content: "我是评论2"
            }
          ]
        },
        {
          headImg: "../../images/tab/test.png",
          username: "爱吃的饕餮",
          images: ["../../images/test/1.jpg", "../../images/test/2.jpg", "../../images/test/3.jpg"],
          media: "",
          evaluate: [
            {
              id: "1",
              username: "爱吃的饕餮",
              content: "我是评论1"
            },
            {
              id: "1",
              username: "爱吃的饕餮",
              content: "我是评论2"
            }
          ]
        },
        {
          headImg: "../../images/tab/test.png",
          username: "爱吃的饕餮",
          images: ["../../images/test/1.jpg", "../../images/test/2.jpg", "../../images/test/3.jpg"],
          media: "../../media/test.mp4",
          evaluate: [
            {
              id: "1",
              username: "爱吃的饕餮",
              content: "我是评论1"
            },
            {
              id: "1",
              username: "爱吃的饕餮",
              content: "我是评论2"
            }
          ]
        },
        {
          headImg: "../../images/tab/test.png",
          username: "爱吃的饕餮",
          images: ["../../images/test/1.jpg", "../../images/test/2.jpg", "../../images/test/3.jpg"],
          media: "",
          evaluate: [
            {
              id: "1",
              username: "爱吃的饕餮",
              content: "我是评论1"
            },
            {
              id: "1",
              username: "爱吃的饕餮",
              content: "我是评论2"
            }
          ]
        },
        {
          headImg: "../../images/tab/test.png",
          username: "爱吃的饕餮",
          images: ["../../images/test/1.jpg", "../../images/test/2.jpg", "../../images/test/3.jpg"],
          media: "../../media/test.mp4",
          evaluate: [
            {
              id: "1",
              username: "爱吃的饕餮",
              content: "我是评论1"
            },
            {
              id: "1",
              username: "爱吃的饕餮",
              content: "我是评论2"
            }
          ]
        }
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
    onReady: function () {
      console.log("onReady");

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
    onHide: function () {
      console.log("onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
    onUnload: function () {
      console.log("onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
    onPullDownRefresh: function () {
      console.log("onPullDownRefresh");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom");
  },

  /**
   * 用户点击右上角分享
   */
    onShareAppMessage: function () {
      console.log("onShareAppMessage");
  },
 upper(e) {
    console.log(e)
  },

  lower(e) {
    console.log(e)
  },

  scroll(e) {
    console.log(e)
  },

  scrollToTop() {
    this.setAction({
      scrollTop: 0
    })
  },

  tap() {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },

  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})