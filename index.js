class BrowserDetector {
  constructor() {
    // 测试条件编译
    // IE6~10支持
    this.isIE_Gte6Lte10 = /*@cc_on!@*/ false;
    // 测试documentMode
    // IE7~11支持
    this.isIE_Gte7Lte11 = !!document.documentMode;
    // 测试StyleMedia构造函数
    // Edge20及以上版本支持
    this.isEdge_Gte20 = !!window.StyleMedia;
    // 测试Firefox专有扩展安装API
    // 所有版本Firefox支持
    this.isFirefox_Gte1 = typeof InstallTrigger !== "undefined";
    // 测试Chrome对象及其webstore属性
    // Opera的某些版本有window.chrome, 但没有window.chrome.webstore属性
    // 所有版本Chrome支持
    this.isChrome_Gte1 = !!window.chrome && !!window.chrome.webstore;
    // Safari 早期版本会给构造函数的标签符追加"Constructor"字样，如：
    // window.Element.toString(); // [object ElementConstructor]
    // Safari 3~9.1 支持
    this.isSafari_Gte3Lte9_1 = /constructor/i.test(window.Element);
    // 推送通知 API 暴露在 window 对象
    // 使用默认参数值以避免对 undefined 调用 toString()
    // Safari 7.1 及以上版本支持
    this.isSafari_Gte7_1 = (({ pushNotification = {} } = {}) =>
      pushNotification.toString() == "[object SafariRemoteNotification]")(
      window.safari,
    );
    // 测试 addons 属性
    // Opera 20 及以上版本支持
    this.isOpera_Gte20 = !!window.opr && !!window.opr.addons;
  }

  isIE() {
    return this.isIE_Gte6Lte10 || this.isIE_Gte7Lte11;
  }
  isEdge() {
    return this.isEdge_Gte20 && !this.isIE();
  }
  isFirefox() {
    return this.isFirefox_Gte1;
  }
  isChrome() {
    return this.isChrome_Gte1;
  }
  isSafari() {
    return this.isSafari_Gte3Lte9_1 || this.isSafari_Gte7_1;
  }
  isOpera() {
    return this.isOpera_Gte20;
  }
}
