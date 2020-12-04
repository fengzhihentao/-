// components/test5/test5.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    add(){
      ' '
      this.setData({
        count:+this.properties.count + 1
      })
      console.log(this.properties.count);
    }
  }
})
