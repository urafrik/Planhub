Component({
  data: {
    "color": "#8FBC8F",
    "selectedColor": "#006400",
    "backgroundColor": "#ffffff",
    "borderStyle": "black",
    list: [ {
      "pagePath": "/pages/planWall/planWall",
      "text": "任务",
      "position": "top",
      "icon": "todo-list-o",
      "selectedIcon":"todo-list"
    },
    {
      "pagePath": "/pages/message/message",
      "text": "消息",
      "position": "top",
      "icon": "chat-o",
      "selectedIcon":"chat"
    },
    {
      "pagePath": "/pages/user/user",
      "text": "我的",
      "position": "top",
      "icon": "manager-o",
      "selectedIcon":"manager"
    },
    {
      "pagePath": "/pages/index/index",
      "text": "系统",
      "position": "top",
      "icon": "setting-o",
      "selectedIcon": "setting"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
     // this.setData({
     //   selected: data.index
     // })
    }
  }
})