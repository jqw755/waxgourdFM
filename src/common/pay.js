import api from './api';

export default function (orderNo, fn = {}, callback = {}) {
  api({ url: 'order/pay', data: { orderNo } })
    .then(data => {
      wx.requestPayment({
        timeStamp: data.timeStamp,
        signType: data.signType,
        nonceStr: data.nonceStr,
        package: data.package,
        paySign: data.paySign,
        success: data => {
          callback.success && callback.success(data);
        },
        fail: e => {
          callback.fail && callback.fail(e);
        },
        complete: data => {
          callback.always && callback.always(data);
        }
      });
    })
    .catch(e => {
      fn.fail && fn.fail(e);
    })
    .always(() => {
      fn.always && fn.always();
    });
}