// components/color/fullColor.js
Component({
  options:{
    pureDataPattern:/^_/,
    multipleSlots:true
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    fullColor:'0,0,0',
    _rgb:{
      r:0,
      g:0,
      b:0,
    }
  },
  observers:{
    "_rgb.**":function(r,g,b){
      this.setData({
        fullColor:Object.values(this.data._rgb).toString()
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    bgr(){this.setData({"_rgb.r":this.data._rgb.r < 255 ? this.data._rgb.r + 30 : 0})},
    bgg(){this.setData({"_rgb.g":this.data._rgb.g < 255 ? this.data._rgb.g + 5: 0})},
    bgb(){this.setData({"_rgb.b":this.data._rgb.b < 255 ? this.data._rgb.b + 5: 0})},
    _randomColor(){
      this.setData({
        _rgb:{
          r:Math.floor(Math.random()*256),
          g:Math.floor(Math.random()*256),
          b:Math.floor(Math.random()*256)
        }
      })
    }
  },
  lifetimes:{
    // 组件实例刚刚被创建时执行
    created(){
      console.log('created');
    },
    // 在组件实例进入页面节点树时执行
    attached(){},
    // 在组件实例从页面节点树移出
    detached(){}
  },
  pageLifetimes:{
    show(){
      this._randomColor()
    },
    hide(){},
    resize(size){
      console.log(size);
    }
  }
})
