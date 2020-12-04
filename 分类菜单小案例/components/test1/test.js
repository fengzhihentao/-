// components/test1/test.js
Component({
  observers:{
    "rgb":function(){

    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    max:{
      type:Number,
      value:10
    },
    // max:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    count:0,
    rgb:{
      r:0,
      g:0,
      b:0
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
