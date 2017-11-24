const TOKEN = 'BIRTHDAY_APP_TOKEN',
  IS_LOGIN = 'BIRTHDAY_APP_IS_LOGIN',
  SITE_ID = 'BIRTHDAY_SITE_ID',
  SITE_NAME = 'BIRTHDAY_SITE_NAME';
const auth = {
  //设置是否登录
  setIsLogin: (isLogin = 0) => {
    wx.setStorageSync(IS_LOGIN, isLogin);
  },
  //是否登录
  isLogin: () => {
    return !!wx.getStorageSync(IS_LOGIN) && !!auth.getToken();
  },
  getLogin: () => {
    return wx.getStorageSync(IS_LOGIN);
  },
  //设置token
  setToken: token => {
    wx.setStorageSync(TOKEN, token);
  },
  //获取token
  getToken: () => {
    return wx.getStorageSync(TOKEN);
  },
  //删除token
  removeToken: () => {
    wx.removeStorageSync(IS_LOGIN);
  },
  //获取站点id
  getSiteId: () => {
    return wx.getStorageSync(SITE_ID);
  },
  //获取站点name
  getSiteName: () => {
    return wx.getStorageSync(SITE_NAME);
  },
  //设置站点id
  setSiteId: siteId => {
    wx.setStorageSync(SITE_ID, siteId);
  },
  //设置站点name
  setSiteName: siteName => {
    wx.setStorageSync(SITE_NAME, siteName);
  },
  //退出后删除所有个人信息
  removeAllToken: () => {
    wx.removeStorageSync(IS_LOGIN);
    wx.removeStorageSync(TOKEN);
    wx.removeStorageSync('siteId');
    wx.removeStorageSync('siteName');
  },
  //返回首页
  goHome: (params = '', isRedirect = true) => {
    const url = `/pages/index/index?${params}`;
    if (isRedirect) {
      wx.redirectTo({ url });
    } else {
      wx.navigateTo({ url });
    }
  },
  //跳转登录
  goLogin: (params = '', isRedirect = false) => {
    const url = `/pages/login/login?${params}`;
    if (isRedirect) {
      wx.redirectTo({ url });
    } else {
      wx.navigateTo({ url });
    }
  },
};

export default auth;