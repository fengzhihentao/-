// pages/shoplist/shoplist.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    query:{},
    shopLisy:[],
    page:1,
    pageSize:10,
    total:'',
    isLogin:false,
    // 下拉刷新控制
    isPullToRefresh:false
  },
// 获取每一项的数据
  getItem(cb){
    this.setData({
      isLogin:true
    }),
    wx.showLoading({
      title: '数据加载中',
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
          shopLisy:[...this.data.shopLisy,...res.data],
          total:res.header["X-Total-Count"]-0
        })
      },
      complete:()=>{
        wx.hideLoading()
        this.setData({
          isLogin:false
        })
        if(this.data.isPullToRefresh) {
          cd()
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      query:options
    })
    this.getItem()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
      shopLisy:[],
      page:1,
      total:0,
      isPullToRefresh:true
    })
    this.getItem(()=>{
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if(this.data.page*this.data.pageSize>=this.data.total){
      return wx.showToast({
        title: '数据展示完毕',
        icon:'none'
      })
    }
    if(this.data.isLogin) return
    this.setData({
      page:this.data.page + 1
    })
    this.getItem()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})