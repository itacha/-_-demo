import wepy from 'wepy'
export default class extends wepy.mixin{
    data = {
        // 轮播图数据
        swiperList: [],
        // 分类选项数据
        cateItems: [],
        floorData: []
      }
      onLoad() {
        this.getSwipeData()
        this.getCateItems()
        this.getFloorData()
      }

      methods = {
        // 点击楼层图片跳转到相应页面
        goGoodsList(url){
            wepy.navigateTo({
                url
            })
        }
      }
      // 获取轮播图数据
      async getSwipeData() {
        const { data: res } = await wepy.get('/home/swiperdata')
        if (res.meta.status !== 200) {
          //   return console.log('获取数据失败！')
          return wepy.baseToast
        }
        this.swiperList = res.message
        this.$apply()
      }
      //   获取首页分类选项数据
      async getCateItems() {
        const { data: res } = await wepy.get('/home/catitems')
        if (res.meta.status !== 200) {
          return wepy.baseToast
        }
        this.cateItems = res.message
        this.$apply()
    }
    // 获取楼层数据
    async getFloorData(){
        const { data : res } = await wepy.get('/home/floordata')
        if (res.meta.status !== 200) {
            return wepy.baseToast
        }
        this.floorData = res.message
        this.$apply()
    }
}