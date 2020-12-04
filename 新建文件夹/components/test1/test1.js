// components/test1.js
Component({
  options:{
    // 启用样式隔离
    // 页面影响组件
    // styleIsolation:'apply-shared'
    // 项目影响
      styleIsolation:'shared'
    // 都不影响
    // styleIsolation:"isolated"
  },
  /**
   * 组件的属性列表
   */
  properties: {
    max:{
      type:Number,
      value:10
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    conent:1,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getConent(){
      if(this.data.conent >= this.properties.max) return
      this.setData({
        conent:this.data.conent + 1
      })
      this._showConent()
    },
    _showConent(){
      wx.showToast({
        title: `当前的值是${this.data.conent}`,
      })
    }
  }
})
