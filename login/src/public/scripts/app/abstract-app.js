class AbstractApp{
  constructor(options){
    // 这里传入container，做page的父容器
  }

  //根据路由的变化，跳转页面
  gotoPage() {

  }

  //根据路由 hash（#）内容的变化打开对应的子页面
  gotoInnerPage() {

  }

  // 隐藏页面时，使用相应的动画，可以不要动画
  hidePage() {

  }

  // 页面都是absolute的，显示页面时，使用相应的动画
  showPage() {

  }
}