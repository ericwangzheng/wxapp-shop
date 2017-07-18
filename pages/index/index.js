Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    sortIcons: [
      '../../images/sort-arrow.png',
      '../../images/sort-arrow-top.png',
      '../../images/sort-arrow-bottom.png'
    ],
    classifyList: [
      {
        count: 50,
        name: '全部商品',
        index: 0,
      }, {
        count: 0,
        name: '上新',
        index: 1,
      }, {
        count: 8,
        name: '热销',
        index: 2,
      }],
    filterList: [{
      name: '推荐',
      index: 0
    }, {
      name: '销量',
      index: 1
    }, {
      name: '新品',
      index: 2
    }, {
      name: '价格',
      index: 4,
      sortable: true,
    },],
    productList: [{
      img: '../../images/shop1.jpg',
      description: 'Mozilla（缩写MF或MoFo）全称Mozilla基金会，是为支持和领导开源的Mozilla项目而设立的一个非营利组织',
      price:2000.00,
      id:1,
    }, {
      img: '../../images/shop1.jpg',
      description: 'Mozilla（缩写MF或MoFo）全称Mozilla基金会，是为支持和领导开源的Mozilla项目而设立的一个非营利组织',
      price: 2000.00,
      id: 2,
    }, {
      img: '../../images/shop1.jpg',
      description: 'Mozilla（缩写MF或MoFo）全称Mozilla基金会，是为支持和领导开源的Mozilla项目而设立的一个非营利组织',
      price: 2000.00,
      id: 3,
    }, {
      img: '../../images/shop1.jpg',
      description: 'Mozilla（缩写MF或MoFo）全称Mozilla基金会，是为支持和领导开源的Mozilla项目而设立的一个非营利组织',
      price: 2000.00,
      id: 4,
    }, {
      img: '../../images/shop1.jpg',
      description: 'Mozilla（缩写MF或MoFo）全称Mozilla基金会，是为支持和领导开源的Mozilla项目而设立的一个非营利组织',
      price: 2000.00,
      id: 5,
    }],
    sortStatus: 0,
    classify: 0,
    filter: 0,
    interval: 5000,
    duration: 1000
  },
  onShow() {
    let that = this;
    
  },
  changeClassify(e) {
    let that = this;
    that.setData({
      classify: e.currentTarget.dataset.index
    })
  },
  changeFilter(e) {
    let that = this;
    that.setData({
      filter: e.currentTarget.dataset.index
    })
    if (e.currentTarget.dataset.sort) {
      that.changeSort(e.currentTarget.dataset)
    } else {
      that.setData({
        sortStatus: 0
      })
    }
  },
  changeSort(e) {
    let that = this
    let status = that.data.sortStatus == 2 ? 1 : that.data.sortStatus + 1
    that.setData({
      sortStatus: status
    })
  },
  productDetail(e){
    wx.navigateTo({
      url:'../../pages/product/product'
    })
  }
})