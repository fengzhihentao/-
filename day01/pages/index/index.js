
Page({
  data: {
    msg:"hello world",
    imgSrc:"https://attach.52pojie.cn/forum/201911/03/191212mkkyhw3kkxfkkkmn.png",
    randomNum: Math.random()*10,
    randomNum1: Math.random().toFixed(2),
  },
  // 获取轮播图
  getInfo(){
    wx.request({
      url: 'https://www.escook.cn/slides',
      method:'GET',
      success:res=>{
        console.log(res)
      },
      fail(err){
        console.log(err);
      }
    })
  },
  // 发送post请求
  postInfo(){},
  onLoad: function () {
  
  },
  
})