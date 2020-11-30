// pages/infoList/infoList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query:{},
    infoList:[],
    page:1,
    pageSize:10,
    total:'',
    isPull:false
  },
  // 发送请求获取数据
  getInfoList(cd){
    wx.showLoading({
      title: '正在加载数据',
    })
    this.setData({
      isPull: true
    })
    wx.request({
      url: `https://www.escook.cn/categories/${this.data.query.id}/shops`,
      method:'GET',
      data:{
        _page:this.data.page,
        _limit:this.data.pageSize
      },
      success:(res)=>{
          this.setData({
            infoList:[...this.data.infoList,...res.data],
            total:res.header["X-Total-Count"]-0
          })
          console.log(res.data);
      },
      complete:()=>{
        wx.hideLoading(),
        this.setData({isPull: false})
        cd&&cd()
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      query:options
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getInfoList()
    wx.setNavigationBarTitle({
      title: this.data.query.name,
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      page:1,
      infoList:[],
      total:'',
    })
    this.getInfoList(()=>{
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
   if(this.data.page * this.data.pageSize>= this.data.total) {
    return wx.showToast({
      title: '已经加载到最后了',
      icon:'none'
    })
   }
    this.setData({
      page:this.data.page + 1,
    })
    this.getInfoList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  }
})