import api from 'api';
import auth from 'auth';

const Address = {
  key: 'ADDRESS_LIST',
  //获取全国地址列表，如果本地存储，则获取本地，否则远端请求
  getAddressAll: () => {
    let list = wx.getStorageSync(Address.key),
      now = Date.now();
    if (list && list.time && now - list.time < 24 * 60 * 60 * 1000) {
      return Promise.resolve(list.data);
    } else {
      return api({ url: 'address/all', method: 'get', notNeedLogin: true })
        .then(data => {
          wx.setStorageSync(Address.key, {
            data,
            time: now
          });
          return Promise.resolve(data);
        });
    }
  },
  //创建选择器所使用的数组
  createObj: (arr, name) => {
    let list = [],
      index = 0;
    arr.forEach((item, idx) => {
      list.push({
        label: item.name,
        val: item.id
      });
      if (name === item.name) {
        index = idx;
      }
    });
    return {
      list,
      index
    };
  },
  //创建省列表
  setProvinceArr: (arr = [], province) => {
    return Address.createObj(arr, province);
  },
  //创建城市列表
  setCityArr: (arr = [], provinceId, city) => {
    arr = arr.filter(item => item.id === provinceId);
    arr = arr.length && arr[0].subItems;
    return Address.createObj(arr, city);
  },
  //创建区县列表
  setCountyArr: (arr = [], provinceId, cityId, county) => {
    arr = arr.filter(item => item.id === provinceId);
    arr = arr.length && arr[0].subItems;
    arr = arr.filter(item => item.id === cityId);
    arr = arr.length && arr[0].subItems;
    return Address.createObj(arr, county);
  }
};
const GoodsList = {
  key: 'GoodsList',
  //获取已存储的商品信息
  getData: () => {
    let siteId = auth.getSiteId(),
      data = [];
    if (siteId) {
      let list = wx.getStorageSync(GoodsList.key),
        now = Date.now();
      if (list && list.siteId === siteId && list.time && now - list.time < 24 * 60 * 60 * 1000 * 30) {
        data = list.data;
      }
    }
    return data;
  },
  setData: data => {
    let siteId = auth.getSiteId();
    if (siteId) {
      wx.setStorage({
        key: GoodsList.key,
        data: {
          data,
          siteId,
          time: Date.now()
        }
      });
    }
  }
};

export { Address, GoodsList };