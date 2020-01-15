# hackSeason ghost博客主题简介
### [实地考察](http://w3more.cn/)

>注意：适用于ghost1.X版本（其低版本未测试,目前博客已经升级到2.X），使用完整功能，请打开后台的==Labs>Public PAI==，主题只是对默认主题首页重写，其他页面未做大调整



## 主题功能/特色
>所有自定义内容，请配置到后台==Code injection>Blog Header==中
* 顶部下拉菜单：自定义菜单内容，搜索框和首页不支持自定义。
* 搜索框：支持标题和内容搜索，没有语言限制。
* banner：根据季节、24节气、节假日（目前只添加国庆建军节中秋节）自动变换banner图片/视频和文字，暂未支持自定义显示。
* 农历展示：自动计算显示农历，老祖宗留下的东西，不能丢。
* 翻页：将ghost传统的点击翻页修改为下拉自动加载。
* 作者列表：按发布文章数降序排列，点击进入该作者主页。
* 标签云：展示所有数量大于0的标签，按文章数降序排列，背景颜色刷新随机变化。
* 友情链接：可自行配置，默认显示杉木博客。
* 备案号：有备案号的可在后台添加。
* 右侧会有两个固定悬浮菜单，是关于ghost的使用教程，可在artical-list.hbs删除。
* 文章目录：文章查看自动生成目录
## 如果你想什么都不做，马上就实用这个博客，下面的内容你也不用看了，你只需要[点击这里](https://jq.qq.com/?_wv=1027&k=5lq4CQD)
## 上图片
并没有图片，看图片难道有[实地考察](http://w3more.cn/)真实吗？
##  配置代码（请放入==Code injection>Blog Header==）
```js
<script>
  //==================头部菜单==================
  var topNemuArr = [
      {
          'name':'前端',//一级菜单名字
          'link':'javascript:;',//一级菜单链接 不跳转填 [javascript:;]
          'subMenu':{//下拉二级菜单 不需要就删除
              'brandSrc':'http://xxx.xxx.com/xxx.png',//下拉菜单标识大图 250x300
              'menuItems':[
                  {
                      'itemImgSrc':'http://xxx.xxx.com/xx.png',//二级菜单图标 65x65
                      'itemName':'HTML',//二级菜单名字 区分大小写 一般使用标签作为二级菜单
                      'itemLink':'/tag/html/'//二级菜单跳转链接 本站标签页不用加域名 标签名不区分大小写
                  },
                  {
                      'itemImgSrc':'http://xxx.xxx.com/css.png',//二级菜单图标 65x65
                      'itemName':'CSS',//二级菜单名字 区分大小写 一般使用标签作为二级菜单
                      'itemLink':'/tag/css/'//二级菜单跳转链接 本站标签页不用加域名 标签名不区分大小写
                  }
              ]
          }
      },
      {
          'name':'后端',//一级菜单名字
          'link':'javascript:;',//一级菜单链接 不跳转填 [javascript:;]
          'subMenu':{//下拉二级菜单 不需要就删除
              'brandSrc':'http://xxx.xxx.com/houtai.png',//下拉菜单标识大图 250x300
              'menuItems':[
                  {
                      'itemImgSrc':'http://xxx.xxx.com/java.png',//二级菜单图标 65x65
                      'itemName':'Java',//二级菜单名字 区分大小写 一般使用标签作为二级菜单
                      'itemLink':'/tag/java/'//二级菜单跳转链接 本站标签页不用加域名 标签名不区分大小写
                  },
                  {
                      'itemImgSrc':'http://xxx.xxx.com/mybatis.png',//二级菜单图标 65x65
                      'itemName':'Mybatis',//二级菜单名字 区分大小写 一般使用标签作为二级菜单
                      'itemLink':'/tag/mybatis/'//二级菜单跳转链接 本站标签页不用加域名 标签名不区分大小写
                  }
              ]
          }
      },
      {
          'name':'随笔',//一级菜单名字
          'link':'/tag/sui-bi/',//一级菜单链接 不跳转填 [javascript:;]
      }
  ];

  //==================友情链接==================
  var linkArr = [
      {
          'name':'码酱博客',
          'url':'http://luokangyuan.com/'
      },
      {
          'name':'Ghost官网',
          'url':'https://ghost.org/zh_CN/'
      },
      {
          'name':'Ghost中文网',
          'url':'http://www.ghostchina.com/'
      }
  ];

  //=================版权信息==================
  var footCopyRight = '蜀2387653号';
</script>
```