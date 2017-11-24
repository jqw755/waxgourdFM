//接口: http://192.168.0.161:20888/swagger-ui.html
const config = {
  active: 'dev',
  dev: {
    image: 'http://imagecdn.lecake.com/postsystem/docroot/images/goods/',
    baseUrl: 'http://192.168.0.162:20877/',
    voiceUrl: "http://wxcmsupload.lecake.com/wxcms/test/",
    wxCmsUrl: "https://wxcmstest.lecake.com",
    bgmList: ['http://192.168.0.161:7777/birthday/music/bitter_sweet.mp3', 'http://192.168.0.161:7777/birthday/music/old_memory.mp3']
  },
  pro: {
    image: 'http://imagecdn.lecake.com/postsystem/docroot/images/goods/',
    baseUrl: 'https://qapi.lecake.com/birthday/',
    voiceUrl: "http://wxcmsupload.lecake.com/wxcms/wxvoic/",
    wxCmsUrl: "https://wxcms.lecake.com",
    bgmList: ['http://images.xinliving.com/birthday/music/bitter_sweet.mp3', 'http://images.xinliving.com/birthday/music/old_memory.mp3']
  },
  getActive: () => this.active,
  setActive: active => this.active = active
};

function getConfig() {
  return config[config.active];
}

export default config;
export { getConfig };