!function(e){function n(i){if(t[i])return t[i].exports;var o=t[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var t={};n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){var i=t(1)(),o=t(2),r={name:"腾讯直播",icon:"http://i.gtimg.cn/qqlive/images/20170420/i1492675070_1.jpg",pkg:"com.tencent.qqlivebroadcast",pkgurl:"qqlivebroadcast://can_open_me_if_install_and_register_this_scheme",downloadUrl:function(){return i.os.ios?"https://itunes.apple.com/cn/app/teng-xun-zhi-bo-qi-e-zhi-bo/id1059716058":i.os.android?"http://mcgi.v.qq.com/commdatav2?cmd=59&confid={confid}":"http://v.qq.com/download.html"}(),md5:function(e){return"//mcgi.v.qq.com/commdatav2?cmd=58&confid="+e},uaname:"QQLiveBroadcast",wxappid:"wx8752aa8596b3e9ee",appappid:"wxd05ee4ba80b6f917"},a={tryopen:t(19)(),wx:t(20)(r)};window.liveBanner=e.exports=function(e){function n(n,t){var o=t.openurl,r=t.downloadurl;2==n?i.browser.WeChat?a.wx(o,{onfail:function(){a.tryopen(o,{onfail:function(){location.href=r}})}}):a.tryopen(o,{onfail:function(){location.href=r}}):1==n||14==n?i.browser.WeChat?a.wx(o,{debug:e.debug,onfail:function(){a.tryopen(o,{onfail:function(){location.href=r}})}}):setTimeout(function(){location.href=o},50):10==n?t.downloader.pause():11==n||13==n?t.downloader.install():t.downloader&&15!=n?t.downloader.start({url:r,confid:t.model.confid}):setTimeout(function(){location.href=r},50)}e=e||{};var t=o({package:e.package||r}).openFixer(function(e,n){return"qqlivebroadcast://views/LiveDetailView?program_id="+n.pid+"&stream_style="+(void 0===n.streamStyle?1:n.streamStyle)+"&style=2&is_full_screen=1"});return!1!==e.defaultAction&&t.on("action",n),t}},function(e,n){function t(e){if(e){var n={},t={},i={iphone:e.match(/(iphone)\sos\s([\d_]+)/i),ipad:e.match(/(ipad).*\s([\d_]+)/i),ipod:e.match(/(ipod).*\s([\d_]+)/i),android:e.match(/(android)\s([\d\.]+)/i),windows:e.match(/Windows(\s+\w+)?\s+?(\d+\.\d+)/)};i.ipod&&(n.ios=n.ipod=!0,n.version=i.ipod[2].replace(/_/g,"."),n.name="ipod"),i.ipad&&(n.ios=n.ipad=!0,n.version=i.ipad[2].replace(/_/g,"."),n.name="ipad"),i.iphone&&(n.iphone=n.ios=!0,n.version=i.iphone[2].replace(/_/g,"."),n.name="iphone"),i.android&&(n.android=!0,n.version=i.android[2],n.name="android"),i.windows&&(n.windows=!0,n.version=i.windows[2],n.name="windows");var o={WeChat:e.match(/MicroMessenger\/((\d+)\.(\d+))\.(\d+)/)||e.match(/MicroMessenger\/((\d+)\.(\d+))/),MQQClient:!e.match(/QQReader/)&&e.match(/QQ\/(\d+\.\d+)/i)||e.match(/V1_AND_SQ_([\d\.]+)/),MQQReader:e.match(/QQReader/i),QQvideo:e.match(/QQLiveBrowser\/([\d.]+)/),TBSSDK:e.match(/MQQBrowser\/(\d+\.\d+)/i)&&e.match(/MSDK\/(\d+\.\d+)/),MQQBrowser:e.match(/MQQBrowser\/(\d+\.\d+)/i),UCBrowser:e.match(/ucbrowser\/(\d+\.\d+)/i),Qzone:e.match(/Qzone\/[\w\d\_]*(\d\.\d)[\.\w\d\_]*/i),Weibo:e.match(/Weibo/i),qqnews:e.match(/qqnews\/(\d+\.\d+\.\d+)/i),QQLiveBroadcast:e.match(/QQLiveBroadcast/i),kuaibao:e.match(/qnreading\/(\d+\.\d+\.\d+)/i),liebao:e.match(/LieBaoFast\/(\d+\.\d+\.\d+)/i),IEMobile:e.match(/IEMobile(\/|\s+)(\d+\.\d+)/)||e.match(/WPDesktop/),douban:e.match(/com\.douban\.frodo\/(\d+\.\d+\.\d+)/i),MiuiBrowser:e.match(/MiuiBrowser\/(\d+\.\d+)/i),Chrome:n.ios?e.match(/CriOS\/(\d+\.\d+)/):e.match(/Chrome\/(\d+\.\d+)/),Safari:e.match(/Safari\/(\d+\.\d+)/)};if(o.MQQReader)t.MQQReader=!0,t.version=1,t.name="MQQReader";else if(o.IEMobile)t.IEMobile=!0,t.version=1,t.name="IEMobile";else for(var r in o)if(o[r]){t[r]=!0,t.version=o[r][1],t.name=r;break}return{browser:t,os:n}}}var i=null,o=function(){return i||(i=t(navigator.userAgent))};o.__express=function(e,n,i){e.ua=t(e.headers["user-agent"]),i()},o.__jquery=function(e){e=e||window.jQuery||window.Zepto;var n=i||(i=t(navigator.userAgent));e.browser=n.browser,e.os=n.os},o.__clearCache=function(){i=null},e.exports=o},function(e,n,t){var i=t(1)(),o=t(3),r=t(6),a={},s=window.appBanner=e.exports=function(e){function n(n,t){var o=t.openurl,r=t.downloadurl;console.log("txv-banner ",n,r,o),2==n?i.browser.WeChat?p.wx(o,{onfail:function(){p.tryopen(o,{onfail:function(){location.href=r}})}}):p.tryopen(o,{onfail:function(){location.href=r}}):1==n||14==n?i.browser.WeChat?p.wx(o,{debug:e.debug}):setTimeout(function(){location.href=o},50):10==n?t.downloader.pause():11==n||13==n?t.downloader.install():t.downloader&&f&&15!=n?t.downloader.start({url:r,confid:t.model.confid}):setTimeout(function(){location.href=r},50)}e=e||{};var t=e.package||c,s=o({native:a[t.pkg]||(a[t.pkg]=r(t)),package:t});if(t==c){var f=!1!==e.useDownloader;s.openFixer(d).downloadFixer(l),!1!==e.defaultAction&&s.on("action",n)}return e.$el&&(e.template&&s.on("render",function(n,t){var i=e.template;Object.keys(u).forEach(function(e){i=i.replace("{"+e+"}",u[e][n]||u[e][0]||"")},this),i=i.replace("{progress}",t.progress||0),e.$el.innerHTML=i}),!1!==e.bindListener&&e.$el.addEventListener("click",function(){s.on("ready",function(){s.action()})})),s};Object.defineProperties(s,{TXVPACKAGE:{value:{name:"腾讯视频",icon:"http://i.gtimg.cn/qqlive/images/20150608/logo_app.png",pkg:i.os.iphone?"com.tencent.live4iphone":"com.tencent.qqlive",pkgurl:"tenvideo2://can_open_me_if_install_and_regeister_this_scheme",scheme:i.os.ipad?"tenvideohd://?":"tenvideo2://?",downloadid:"TencentVideo",appid:100730521,via:"ANDROID.QQLIVE",downloadUrl:function(){return i.os.ios?i.os.iphone?"http://itunes.apple.com/cn/app/id458318329?mt=8":"https://itunes.apple.com/cn/app/teng-xun-shi-pinhd/id407925512?mt=8":i.os.android?"http://mcgi.v.qq.com/commdatav2?cmd=4&confid={confid}&platform=aphone":"http://v.qq.com/download.html"}(),md5:function(e){return"//mcgi.v.qq.com/commdatav2?cmd=39&confid="+e},playerDownloadCallback:"str_stopPlayerListenerWxDownloadState",wxappid:"wx5a3178167066897b",appappid:"wxca942bbff22e0e51",uaname:"QQvideo"}},TXVOPENFIXER:{value:function(e,n){return n.cover_id?e+="&action=1&cover_id="+n.cover_id+(n.video_id?"&video_id="+n.video_id:"")+(n.column_id?"&column_id="+n.column_id:""):n.video_id?e+="&action=5&video_id="+n.video_id:n.column_id&&(e+="&action=2&column_id="+n.column_id),n.exsource&&(e+="&exsource=1"),e+="&from="+(n.from||n.confid||location.pathname&&location.pathname.replace(/\//g,"")),-1!=e.indexOf("?&")&&(e=e.replace(/\?\&/,"?")),e}},TXVDOWNLOADFIXER:{value:function(e,n){return e.replace("{confid}",n.confid)}},TXVWORDING:{value:{text:{0:"提升3倍流畅度，安装腾讯视频",1:"提升3倍流畅度，打开腾讯视频",2:"提升3倍流畅度，安装腾讯视频",3:"提升3倍流畅度，升级腾讯视频",10:"正在下载腾讯视频",11:"下载完成，安装腾讯视频",12:"已暂停，点击恢复下载",13:"下载完成，安装腾讯视频",14:"安装成功，打开腾讯视频",15:"下载出错，点此重新安装",16:"下载已取消，点此重新安装"},status:{0:"down",1:"open",2:"down",3:"down",10:"downloading",11:"install",12:"pause",13:"install",14:"open",15:"down",16:"down"}}}});var c=s.TXVPACKAGE,d=s.TXVOPENFIXER,l=s.TXVDOWNLOADFIXER,u=s.TXVWORDING,p={tryopen:t(19)(),wx:t(20)(c)};s.openInWX=p.wx},function(e,n,t){var i=t(4).EventEmitter,o=t(5);e.exports=function(e){function n(){if(a){var n=o({},r.model,s),t=e.package.scheme;c.forEach(function(e){t=e(t,n)});var i=e.package.downloadUrl;d.forEach(function(e){i=e(i,n)}),l.emit("action",r.state,{openurl:t,downloadurl:i,model:n,downloader:r.downloader})}}function t(){a=!0,l.emit("ready",r.state),l.removeAllListeners("ready")}var r=e.native,a=!1,s={},c=[],d=[],l=Object.create(new i,{action:{value:function(){return a?n():this.on("ready",function(){n()}),this}},openFixer:{value:function(e){return c.push(e),this}},downloadFixer:{value:function(e){return d.push(e),this}},model:{value:function(e){return Object.keys(e).forEach(function(n){s[n]=e[n]}),this}},on:{value:function(e,n){return n&&("render"==e?(n(r.state,{}),i.prototype.on.apply(this,arguments)):"ready"==e&&a?n(r.state):i.prototype.on.apply(this,arguments)),this}}});return r.on("progress",function(e){l.emit("progress",e),l.emit("render",r.state,{progress:e})}),r.on("state_change",function(e,n){l.emit("state_change",e,n),l.emit("render",r.state,{progress:0})}),r.readyState?t():r.once("ready",t),Object.defineProperty(l,"state",{get:function(){return r.state}}),l}},function(e,n){function t(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function o(e){return"number"==typeof e}function r(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}e.exports=t,t.EventEmitter=t,t.prototype._events=void 0,t.prototype._maxListeners=void 0,t.defaultMaxListeners=10,t.prototype.setMaxListeners=function(e){if(!o(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},t.prototype.emit=function(e){var n,t,o,s,c,d;if(this._events||(this._events={}),"error"===e&&(!this._events.error||r(this._events.error)&&!this._events.error.length)){if((n=arguments[1])instanceof Error)throw n;var l=new Error('Uncaught, unspecified "error" event. ('+n+")");throw l.context=n,l}if(t=this._events[e],a(t))return!1;if(i(t))switch(arguments.length){case 1:t.call(this);break;case 2:t.call(this,arguments[1]);break;case 3:t.call(this,arguments[1],arguments[2]);break;default:s=Array.prototype.slice.call(arguments,1),t.apply(this,s)}else if(r(t))for(s=Array.prototype.slice.call(arguments,1),d=t.slice(),o=d.length,c=0;c<o;c++)d[c].apply(this,s);return!0},t.prototype.addListener=function(e,n){var o;if(!i(n))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(n.listener)?n.listener:n),this._events[e]?r(this._events[e])?this._events[e].push(n):this._events[e]=[this._events[e],n]:this._events[e]=n,r(this._events[e])&&!this._events[e].warned&&(o=a(this._maxListeners)?t.defaultMaxListeners:this._maxListeners)&&o>0&&this._events[e].length>o&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},t.prototype.on=t.prototype.addListener,t.prototype.once=function(e,n){function t(){this.removeListener(e,t),o||(o=!0,n.apply(this,arguments))}if(!i(n))throw TypeError("listener must be a function");var o=!1;return t.listener=n,this.on(e,t),this},t.prototype.removeListener=function(e,n){var t,o,a,s;if(!i(n))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(t=this._events[e],a=t.length,o=-1,t===n||i(t.listener)&&t.listener===n)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,n);else if(r(t)){for(s=a;s-- >0;)if(t[s]===n||t[s].listener&&t[s].listener===n){o=s;break}if(o<0)return this;1===t.length?(t.length=0,delete this._events[e]):t.splice(o,1),this._events.removeListener&&this.emit("removeListener",e,n)}return this},t.prototype.removeAllListeners=function(e){var n,t;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(n in this._events)"removeListener"!==n&&this.removeAllListeners(n);return this.removeAllListeners("removeListener"),this._events={},this}if(t=this._events[e],i(t))this.removeListener(e,t);else if(t)for(;t.length;)this.removeListener(e,t[t.length-1]);return delete this._events[e],this},t.prototype.listeners=function(e){return this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},t.prototype.listenerCount=function(e){if(this._events){var n=this._events[e];if(i(n))return 1;if(n)return n.length}return 0},t.listenerCount=function(e,n){return e.listenerCount(n)}},function(e,n){"use strict";var t=Object.prototype.hasOwnProperty,i=Object.prototype.toString,o=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===i.call(e)},r=function(e){if(!e||"[object Object]"!==i.call(e))return!1;var n=t.call(e,"constructor"),o=e.constructor&&e.constructor.prototype&&t.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!n&&!o)return!1;var r;for(r in e);return void 0===r||t.call(e,r)};e.exports=function e(){var n,t,i,a,s,c,d=arguments[0],l=1,u=arguments.length,p=!1;for("boolean"==typeof d?(p=d,d=arguments[1]||{},l=2):("object"!=typeof d&&"function"!=typeof d||null==d)&&(d={});l<u;++l)if(null!=(n=arguments[l]))for(t in n)i=d[t],a=n[t],d!==a&&(p&&a&&(r(a)||(s=o(a)))?(s?(s=!1,c=i&&o(i)?i:[]):c=i&&r(i)?i:{},d[t]=e(p,c,a)):void 0!==a&&(d[t]=a));return d}},function(e,n,t){var i=t(4).EventEmitter,o=t(1)(),r={qq:t(7),wx:t(11),mqb:t(12)},a=e.exports=function(e){function n(e,n){c.readyState=!0,!e&&(c.state=n),c.emit("ready")}var s=2,c=Object.create(new i,{package:{value:e},state:{get:function(){return s},set:function(e){if(!(e in a.STATE))throw new Error("appBannerFactory: illegal state.."+e+"..just choose:"+JSON.stringify(a.STATE));if(e!=s){var n=s;s=e,this.emit("state_change",e,n)}}},readyState:{value:!1,writable:!0},downloader:{value:null,writable:!0},model:{value:{}}});try{o.browser.MQQReader?n(null,0):o.browser.WeChat?(r.wx(e,function(){n.apply(this,arguments),c.model.callback="weixin%3A%2F%2F",c.model.sender="weixin"}),o.os.android&&t(13)(c,function(e,n){e&&console.error("wxdownloader async err",e),e&&e.stack&&console.error(e.stack),c.downloader=n})):o.browser.MQQClient?(r.qq(e,function(){n.apply(this,arguments),c.model.callback="mqqapi%3A%2F%2F",c.model.sender="%E6%89%8B%E6%9C%BAQQ"}),o.os.android&&t(17)(c,function(e,n){e&&console.error("qqdownloader async err:",e),e&&e.stack&&console.error(e.stack),c.downloader=n})):o.browser.MQQBrowser?r.mqb(e,function(){n.apply(this,arguments),c.model.callback="mqqbrowser%3A%2F%2F",c.model.sender="QQ%E6%B5%8F%E8%A7%88%E5%99%A8"}):o.browser[e.uaname]?n(null,1):n(null,2)}catch(e){}return c};a.STATE=t(18).native},function(e,n,t){function i(e,n){var t=o.os.iphone,i=t?e.pkgurl:e.pkg;!t&&window.QQApi&&QQApi.checkAppInstalled?QQApi.checkAppInstalled(i,function(e){e&&0!=e?(e=e.split("."),e=e[e.length-1],n(null,1,e)):n(null,0)}):window.mqq&&mqq.app&&mqq.app.isAppInstalled?mqq.app.isAppInstalled(i,function(e){n(null,e?1:0)}):n(null,2)}var o=t(1)(),r=t(8);e.exports=function(e,n){var t=!1,o=function(){t||(t=!0,n.apply(this,arguments))};r(function(n){n?i(e,o):o(null,2)}),setTimeout(function(){o(null,2)},6e3)}},function(e,n,t){"use strict";function i(){window.WebViewJavascriptBridge&&(window.TenvideoJSBridge=window.WebViewJavascriptBridge,window.TenvideoJSBridge.invoke=window.WebViewJavascriptBridge.callHandler,window.TenvideoJSBridge.on=window.WebViewJavascriptBridge.registerHandler),d=window.TenvideoJSBridge,l.ready=!0}var o=t(9),r=t(1)(),a=t(10),s=[],c=!1,d=null,l=Object.create({},{ready:{set:function(e){if(c!=e){c=e,a("//btrace.qq.com/kvcollect?BossId=3882&Pwd=784260133&event="+r.browser.name+(d?"suc":"fail")+"&ua="+navigator.userAgent+"&qq=0&vuserid=0&main_login=0&refer="+document.referrer+"&url="+location.href+"&_dc="+Math.random());for(var n;n=s.shift();)setTimeout(function(e){return function(){e(d)}}(n),0)}},get:function(){return c}}});if(e.exports=function(e){l.ready?e(d):s.push(e)},r.browser.WeChat){var u=!1,p=!1,f=function(e){"bridge"==e&&(p=!0),"js"==e&&(u=!0),u&&p&&(d=h.WeixinJSBridge,l.ready=!0)},h=window==top?window:top;if(top.WeixinJSBridge)f("bridge");else try{h.document.addEventListener("WeixinJSBridgeReady",function(){f("bridge")})}catch(e){d=null,l.ready=!0}h.wx?f("js"):o("//res.wx.qq.com/open/js/jweixin-1.2.0.js",function(){f("js")}),setTimeout(function(){l.ready||(d=null,l.ready=!0)},1e4)}else if(r.browser.MQQClient){if(window.mqq||window.QQApi)d=window.mqq||window.QQApi,l.ready=!0;else{o("//s.url.cn/qqmobile/qqapi.js?_bid=152",function(){d=window.mqq||window.QQApi,l.ready=!0})}setTimeout(function(){l.ready||(d=null,l.ready=!0)},6e3)}else if(r.browser.QQvideo)if(window.TenvideoJSBridge||window.WebViewJavascriptBridge)i();else{document.addEventListener("onTenvideoJSBridgeReady",i),document.addEventListener("WebViewJavascriptBridgeReady",i);var m=setInterval(function(){window.TenvideoJSBridge||window.WebViewJavascriptBridge?(clearInterval(m),i()):l.ready&&clearInterval(m)},200);setTimeout(function(){l.ready||(d=null,l.ready=!0)},6e3)}else r.browser.qqnews?(window.TencentNews?(d=window.TencentNews,l.ready=!0):o("http://mat1.gtimg.com/www/js/newsapp/jsapi/news.js?_tsid=1",function(){if(window.TencentNews)d=window.TencentNews,l.ready=!0;else var e=setInterval(function(){(window.TencentNews||l.ready)&&(clearInterval(e),d=window.TencentNews,l.ready=!0)},500)}),setTimeout(function(){l.ready||(d=null,l.ready=!0)},6e3)):(d=null,l.ready=!1)},function(e,n){"use strict";e.exports=function(e,n){var t=document.createElement("script"),i=document.getElementsByTagName("script")[0];t.src=e,t.type="text/javascript",t.onload=t.onerror=t.onreadystatechange=function(){/loaded|complete|undefined/.test(t.readyState)&&function(){t.onload=t.onerror=t.onreadystatechange=null,t.parentNode.removeChild(t),t=void 0,n&&n()}()},i.parentNode.insertBefore(t,i)}},function(e,n){"use strict";function t(){}e.exports=function(e){var n=document.createElement("img");n.onerror=t,n.onload=t,n.onabort=t,n.src=e}},function(e,n,t){function i(e,n){var t=window.WeixinJSBridge;t.invoke||n(new Error("could not access weixinjsbridge")),setTimeout(function(){t.invoke("getInstallState",{packageUrl:e.pkgurl,packageName:e.pkg},function(e){e.err_msg.indexOf("get_install_state:yes")>-1?n(null,1):n(null,0)})},50)}var o=t(8);e.exports=function(e,n){var t=!1,r=function(){t||(t=!0,n.apply(this,arguments))};o(function(n){n?i(e,function(e,n){r(e,n)}):r(null,0)}),setTimeout(function(){r(null,0)},1e4)}},function(e,n,t){function i(e,n){if(window.x5&&x5.ios&&x5.ios.getMobileAppSupport){var t={scheme:e.pkgurl};x5.ios.getMobileAppSupport(t,function(e){n(null,e&&1==e.isSupportApp?1:0)},function(){n(null,0)})}else n(null,0);setTimeout(function(){n(null,0)},300)}var o=t(7),r=t(9),a=t(1)();e.exports=function(e,n){var t=!1,s=function(){t||(t=!0,n.apply(this,arguments))};if(!a.os.iphone&&window.QQApi&&QQApi.checkAppInstalled)return o.apply(this,arguments);if(!a.os.iphone&&window.x5mtt&&window.x5mtt.isApkInstalled){var c=window.x5mtt.isApkInstalled('{"packagename": '+e.pkg+"}");s(null,-1!=c?1:0)}else if(a.os.iphone&&parseInt(a.os.version)>5)if(window.x5)i(e,s);else{r("//res.imtt.qq.com/browser_lightapp/QQBrowserApi/getCryptext/browser_interface_getCryptext.js",function(){window.x5?i(e,s):s(null,2)})}else s(null,2);setTimeout(function(){s(null,2)},6e3)}},function(e,n,t){function i(e,n){var t=l.getItem("m_video_download_md5"),i=l.getItem("m_video_download_confid"),r=l.getItem("m_video_download_id"),a=l.getItem("m_video_download_progress"),s=Date.now()-l.getItem("m_video_download_time");t&&i&&r&&s<1296e6?WeixinJSBridge.invoke("queryDownloadTask",{download_id:r},function(s){"download_succ"==s.state||"downloading"==s.state?n(null,o(e,{md5:t,confid:i,download_id:r,progress:a,local:!0})):n(null,o(e,{local:!1}))}):n(null,o(e,{local:!1}))}function o(e,n){var t={md5:n.md5,confid:n.confid,id:n.download_id,progress:n.progress||0,url:""},i={native:{value:e},local:{value:n.local,writable:!0}};Object.keys(t).forEach(function(n){i[n]={get:function(){return t[n]},set:function(e){t[n]=e,l.setItem("m_video_download_"+n,e),l.setItem("m_video_download_time",Date.now())}},"progress"==n&&(i.progress.set=function(i){t[n]=i,l.setItem("m_video_download_"+n,i),e.emit("progress",i)})});var o=Object.create(p,i),r=function(n){n=n.data||n._args||n;try{window[e.package.playerDownloadCallback](n)}catch(e){}console.log("wxdownloader:state_change",n),n.download_id!=o.id&&""!=n.download_id||(console.log(n.state,u[n.state]),e.state=u[n.state])};return e.package.wxDownloaderCallback?window[e.package.wxDownloaderCallback]=r:document.addEventListener("wxdownloader:state_change",function(e){r.call(this,e.detail)}),o}function r(e,n){d(e,function(e,t){e&&n(304),t&&t.md5&&"null"!=t.md5?n(null,t):n(501)})}function a(e,n,t){var i=this;WeixinJSBridge.invoke("addDownloadTask",{task_name:e,task_url:n,file_md5:t,thumb_url:i.native.package.icon,title:i.native.package.name},function(e){console.log("wxdownloader start:"+e.download_id);var o=e.err_msg;i.id=e.download_id,i.md5=t,i.url=n,i.local=!0,o.indexOf("add_download_task:ok")>-1?(i.native.state=s.DOWNLOADING,!i.timer&&(i.timer=setInterval(function(){i.native.state==s.INSTALLING||i.native.state==s.DOWNLOADED?setTimeout(function(){WeixinJSBridge.invoke("getInstallState",{packageName:i.native.package.pkg,packageUrl:i.native.package.pkgurl},function(e){e.err_msg.indexOf("yes")>-1&&(i.native.state=s.INSTALLED)})},50):i.native.state==s.DOWNLOADING&&(i.progress=Math.min(100,i.progress+1))},150))):o.indexOf("add_download_task:cancel")>-1&&(i.native.state=s.CANCEL)})}var s=t(6).STATE,c=t(8),d=t(14),l=window.localStorage||{setItem:function(){},getItem:function(){}},u={download_removed:s.CANCEL,download_succ:s.DOWNLOADED,downloading:s.DOWNLOADING,download_fail:s.FAIL,installing:s.INSTALLING,install_succ:s.INSTALLED,pause:s.PAUSE};e.exports=function(e,n){var t=!1,o=function(){t||(t=!0,n.apply(this,arguments))};c(function(n){n?(i(e,o),e.package.wxDownloaderCallback||WeixinJSBridge.on("wxdownload:state_change",function(e){console.log("trigger",e),document.dispatchEvent(new CustomEvent("wxdownloader:state_change",{detail:e}))})):o(!1)}),setTimeout(function(){o(null,null)},6e3)};var p={start:function(e){if(!e.confid||!e.url)throw new Error("wx downloader:need confid and downloadurl");if(!this.native.package.md5)throw new Error("wx downloader:need md5 cgi");var n=this;console.log("wxdownloader restart from local:"+this.local),this.local?a.call(this,this.native.package.name,this.url,this.md5):r(this.native.package.md5(e.confid),function(t,i){t?location.href=e.url:a.call(n,n.native.package.name,e.url,i.md5)})},pause:function(){this.cancel.apply(this,arguments)},cancel:function(){var e=this;WeixinJSBridge.invoke("cancelDownloadTask",{download_id:this.id,file_md5:this.md5},function(n){n.err_msg.indexOf("cancel_download_task:ok")>-1&&(console.log("wxdownloader cancel:",e.id,e.md5,n.err_msg),e.native.state=s.PAUSE)})},restart:function(){this.start.apply(this,arguments)},install:function(){var e=this;WeixinJSBridge.invoke("installDownloadTask",{download_id:this.id,file_md5:this.md5},function(n){console.log(n),n.err_msg.indexOf("install_download_task:ok")>-1&&(e.native.state=s.INSTALLING)})}}},function(e,n,t){"use strict";function i(){}function o(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function r(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function a(e,n,t){var a=arguments;return s(function(s,m){var v;if("object"==typeof n&&(v=n,n=t,t=a[3]),v=v||{},t=t||{},"function"!=typeof(n=n||i))throw Error("illegal jsonp callback function:",n);var w=document.getElementsByTagName("head")?document.getElementsByTagName("head")[0]:document.body,g=document.createElement("script");g.charset="UTF-8";var _=[t.ns||l,p++,o()].join("_"),y=!0,b="_t",x=t.time;t.callbackid&&(_=t.callbackid),!1===x?y=!1:x&&(b=x),v[t.pn||t.callbackName||u]=_,y&&(v[b]=+new Date);var k=function(e){r(g),n(null,e),s&&s(e)},A=function(e){r(g),n(e||"error"),window[_]=k=A=i,m&&m(e||error)},E=window[_];window[_]=function(e){window[_]=i;try{E&&E(e)}finally{k(e),k=A=i}},g.onerror=g.onabort=function(e){A(e?e.type:"error")},c.forEach(h,function(n){"function"==c.type(n)&&(e=n(e,v)||e)}),g.src=d.queryJoin(e,v),w.appendChild(g),setTimeout(function(){A("timeout")},t.timeout||f)})}function s(e){if(window.Promise)return new Promise(e);e(i,i)}var c=t(15),d=t(16),l="_jsonp",u="callback",p=0,f=2e4,h=[];a.timeout=function(e){f=e},a.ns=function(e){l=e},a.pn=function(e){u=e},a.before=function(e){h.push(e)},e.exports=a},function(e,n){"use strict";function t(e,n){return e&&e.hasOwnProperty&&e.hasOwnProperty(n)}var i={escape:function(e){return e?String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&quot;"):""},type:function(e){if(null===e)return"null";if(void 0===e)return"undefined";var n=/\[object (\w+)\]/.exec(Object.prototype.toString.call(e));return n?n[1].toLowerCase():""},keys:function(e){var n=[];return e?Object.keys?Object.keys(e):(this.objEach(e,function(e){n.push(e)}),n):n},bind:function(e,n){return e.bind?e.bind(n):function(){return e.apply(n,arguments)}},extend:function(e){if("object"!=this.type(e)&&"function"!=this.type(e))return e;for(var n,i,o=1,r=arguments.length;o<r;o++){n=arguments[o];for(i in n)t(n,i)&&(e[i]=n[i])}return e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/gm,"")},indexOf:function(e,n){if(e.indexOf)return e.indexOf(n);var t=-1;return i.some(e,function(e,i){if(e===n)return t=i,!0}),t},forEach:function(e,n){if(e.forEach)return e.forEach(n);for(var t=e.length,i=0;i<t;i++)n(e[i],i);return e},some:function(e,n){if(e.some)return e.some(n);for(var t=e.length,i=!1,o=0;o<t;o++)if(n(e[o],o)){i=!0;break}return i},map:function(e,n){if(e.map)return e.map(n);for(var t=e.length,i=[],o=0;o<t;o++)i.push(n(e[o],o));return i},objEach:function(e,n){if(e)for(var i in e)if(t(e,i)&&!1===n(i,e[i]))break},reduce:function(e,n){if("function"!=i.type(n))throw new TypeError("Array.prototype.reduce callback must be a function");var t=e.length;if(0===t&&2===arguments.length)throw new TypeError("reduce of empty array with no initial value");var o,r=0;if(arguments.length>=3)o=arguments[2];else for(;;){if(r in e){o=e[r++];break}if(++r>=t)throw new TypeError("reduceRight of empty array with no initial value")}for(;r<t;r++)o=n(o,e[r],r,e);return o},filter:function(e,n,t){if(e.filter)return e.filter(n);for(var i=e.length,o=[],r=0;r<i;r++){var a=e[r];n.call(t,a,r,e)&&o.push(a)}return o},nextTick:function(){var e=this;return function(){setTimeout.apply(e,arguments)}}(),lock:function(e){var n;return function(){if(!n){n=!0;var t=[].slice.call(arguments,0);t.unshift(function(){n=!1}),e.apply(this,t)}}},queue:function(e,n){function t(){var e=o.shift();if(!e)return void(r=n);r--;var a=e[0],s=e[1],c=e[2];c.unshift(function(){r++,t.apply(this,arguments)}),i.nextTick(function(){return a.apply(s,c)})}n=n||1;var o=[],r=n;return function(){if(o.push([e,this,[].slice.call(arguments,0)]),r)return t()}},delegator:function(e){var n,t=[];return function(o){if(n)return t.push(o);n=!0,e.call(this,function(){n=!1;var e=this,r=arguments;o&&o.apply(e,r),i.forEach(t,function(n){n&&n.apply(e,r)})})}},once:function(e){var n,t=arguments;return function(){if(!n&&e)return n=!0,e.apply(t.length>=2?t[1]:null,arguments)}},verCompare:function(e,n){if(e===n)return 0;e=e.split("."),n=n.split(".");for(var t=e.length>=n.length?e.length:n.length,i=0;t--;){var o=Number(e[i]||0),r=Number(n[i++]||0);if(r>o)return 1;if(r<o)return-1}return 0}};e.exports=i},function(e,n,t){"use strict";var i=t(15),o={queryParse:function(e,n){if(!e)return{};n=n||"&";var t=e.replace(/^\?/,""),o={},r=t?t.split(n):null;return r&&r.length>0&&i.forEach(r,function(e){e=e.split("=");var n=e.splice(0,1),t=e.join("=");o[n]=t}),o},queryJoin:function(e,n){var t=o.queryStringify(n);if(!t)return e;var i;return i=/[\?&]$/.test(e)?"":~e.indexOf("?")?"&":"?",e+i+t},queryStringify:function(e,n){return e?i.map(i.keys(e),function(n){return n+"="+encodeURIComponent(e[n])}).join(n||"&"):""}};e.exports=o},function(e,n,t){"use strict";function i(e,n){n(null,o(e))}function o(e){var n=0,t={native:{value:e},appid:{value:e.package.appid+u++},url:{value:"",writable:!0},confid:{value:"",writable:!0},progress:{get:function(){return n},set:function(t){n=t,e.emit("progress",t)}}},i=Object.create(p,t);return document.addEventListener("qqdownloader:state_change",function(n){var t=n.detail;try{window[e.package.playerDownloadCallback](t)}catch(n){}console.log("qqdownloader:state_change",i.appid,t),t=t[0]?t:[t],t.forEach(function(n){n.appid==i.appid+i.confid&&(e.state=d[t.state])})}),i}function r(e,n){e=String(e).split("."),n=String(n).split(".");try{for(var t=0,i=Math.max(e.length,n.length);t<i;t++){var o=isFinite(e[t])&&Number(e[t])||0,r=isFinite(n[t])&&Number(n[t])||0;if(o<r)return-1;if(o>r)return 1}}catch(e){return-1}return 0}var a=t(6).STATE,s=t(8),c=t(15);window.__QQDOWNLOADERCALLBACK=function(e){document.dispatchEvent(new CustomEvent("qqdownloader:state_change",{detail:e}))},s(function(e){e&&window.mqq.invoke("q_download","registerDownloadCallBackListener","__QQDOWNLOADERCALLBACK")});var d={1:a.NOTSURE,2:a.DOWNLOADING,3:a.PAUSE,4:a.DOWNLOADED,"-1":a.FAIL,5:a.INSTALLING,13:a.INSTALLED,6:a.INSTALLED,9:a.UNINSTALLED,20:a.DOWNLOADING},l={DOWNLOAD:2,CANCEL:10,PAUSE:3,INSTALL:5,UPDATE:12};e.exports=function(e,n){var t=!1,o=function(){t||(t=!0,n.apply(this,arguments))};r(function(e){return e&&e[1]||0}(navigator.userAgent.match(/V1_AND_SQ_([\d\.]+)/)),"4.5.0")<0&&o(null,null),s(function(n){n?i(e,o):o({},null)}),setTimeout(function(){o(null,null)},6e3)};var u=0,p={start:function(e){if(!e.confid||!e.url)throw new Error("qq downloader:need confid and downloadurl");this.confid=e.confid,this.url=e.url;var n=this;mqq.app.downloadApp(c.extend({appid:this.appid,url:e.url,confid:this.confid,packageName:this.native.package.pkg,via:this.native.package.via,appName:this.native.package.name,actionCode:l.DOWNLOAD},this.native.package.qqdownload_extends),function(e){console.log(e),e.errorCode?n.native.state=a.FAIL:(n.native.state=d[e.state],4==e.state&&n.install(),n.progress=e.pro)})},pause:function(){var e=this;mqq.app.downloadApp(c.extend({actionCode:l.PAUSE,appid:this.appid,url:this.url,packageName:this.native.package.pkg,via:this.native.package.via,appName:this.native.package.name},this.native.package.qqdownload_extends),function(n){console.log(n),n.errorCode?e.native.state=a.FAIL:(e.native.state=d[n.state],e.progress=n.pro)})},cancel:function(){var e=this;mqq.app.downloadApp(c.extend({actionCode:l.CANCEL,appid:this.appid,url:this.url,packageName:this.native.package.pkg,via:this.native.package.via,appName:this.native.package.name},this.native.package.qqdownload_extends),function(n){console.log(n),n.errorCode?e.native.state=a.FAIL:(e.native.state=d[n.state],e.progress=n.pro)})},restart:function(){this.start()},install:function(){var e=this;mqq.app.downloadApp(c.extend({actionCode:l.INSTALL,appid:this.appid,url:this.url,packageName:this.native.package.pkg,via:this.native.package.via,appName:this.native.package.name},this.native.package.qqdownload_extends),function(n){console.log(n),n.errorCode?e.native.state=a.FAIL:(e.native.state=d[n.state],e.progress=n.pro)})}}},function(e,n){e.exports={native:{UNINSTALLED:0,OPENABLE:1,NOTSURE:2,NEEDUPDATE:3,DOWNLOADING:10,DOWNLOADED:11,PAUSE:12,INSTALLING:13,INSTALLED:14,FAIL:15,CANCEL:16,0:"UNINSTALLED",1:"OPENABLE",2:"NOTSURE",3:"NEEDUPDATE",10:"DOWNLOADING",11:"DOWNLOADED",12:"PAUSE",13:"INSATLLING",14:"INSATLLED",15:"FAIL",16:"CANCEL"}}},function(e,n){"use strict";e.exports=function(){return function(e,n){n=n||{};var t=document.createElement("iframe");t.style.cssText="width:1px;height:1px;position:fixed;top:0;left:0;opacity:0;",t.src=e,document.body.appendChild(t);var i=Date.now();setTimeout(function(){Date.now()-i<1550&&n.onfail&&n.onfail()},1500)}}},function(e,n,t){"use strict";var i=(t(8),navigator.userAgent.match(/MicroMessenger\/(\d+\.\d+(\.\d+)?)/)),o=t(21),r=t(15),a=t(1)();e.exports=function(e){if(!e)throw new Error("需要传入package对象，获得公众号appid和应用appid");var n=e.wxappid,t=e.appappid;return function(e,s){s=s||{},i&&1!=r.verCompare("6.5.5",i[1])?setTimeout(function(){location.href=e},50):a.os.ipad?(s.debug&&alert(e),WeixinJSBridge.invoke("launchApplication",{schemeUrl:e},function(e){s.debug&&alert(JSON.stringify(e)),"launchApplication:ok"!=e.err_msg&&s.onfail&&s.onfail()})):(s.debug&&alert(e),o({appId:n},function(){wx.invoke("launchApplication",{appID:t,extInfo:e,parameter:e},function(e){s.debug&&alert(JSON.stringify(e)),"launchApplication:ok"!=e.err_msg&&s.onfail&&s.onfail()})}))}}},function(e,n,t){"use strict";function i(e,n){n=l.once(n||o);var t=l.extend({debug:!1,beta:!0,appId:f},e);u(t.api||"//video.qq.com/fcgi-bin/get_js_signature",{otype:"json",appid:t.appId,url:location.href.split("#")[0]},function(e,i){function o(){wx.config({beta:t.beta,debug:t.debug,appId:t.appId,timestamp:i.timestamp,nonceStr:i.ramdon_str,signature:i.signature,
jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone","hideMenuItems","showMenuItems","hideAllNonBaseMenuItem","showAllNonBaseMenuItem","translateVoice","startRecord","stopRecord","onVoiceRecordEnd","playVoice","onVoicePlayEnd","pauseVoice","stopVoice","uploadVoice","downloadVoice","chooseImage","previewImage","uploadImage","downloadImage","getNetworkType","openLocation","getLocation","hideOptionMenu","showOptionMenu","closeWindow","scanQRCode","chooseWXPay","openProductSpecificView","addCard","chooseCard","openCard","launchApplication"].concat(t.jsApiList||[])}),wx.ready(function(){n(null,i)}),wx.error(function(e){n(e||"WX sign error.",i)})}if(0!==i.ret)return n(e||i.msg||"error");window.wx?o():document.addEventListener("WeixinJSBridgeReady",o)},{pn:"callback_func"})}function o(){}function r(e,n){return n=n||o,p.isWX()?d?void n(null,c):(s?console.log("[wxsign] Sign action delegator by:",a):(a=e,s=l.delegator(function(e){return i(a,function(n,t){n||(d=!0,c=t),e(n,t)})}),window.addEventListener("popstate",function(){c=d=null,s()}),h&&(history.pushstate=function(){return setTimeout(function(){c=d=null,s()},0),h.apply(history,arguments)})),s(n)):void n("Only work for wx app")}var a,s,c,d,l=t(15),u=t(14),p=t(22),f="wx5a3178167066897b",h=history.pushstate;r.appId=f,r.ready=function(e){function n(){wx.ready(e)}e&&(window.wx?n():document.addEventListener("WeixinJSBridgeReady",n))},e.exports=r},function(e,n){"use strict";var t=navigator.userAgent,i=t.toLowerCase();e.exports={isIE:function(){return/; msie\b|; trident\b|\bedge\//.test(i)},isWX:function(){return/micromessenger/.test(i)},isQQ:function(){return/\bqq\b/.test(i)},isQQBrowser:function(){return/mqqbrowser/.test(i)},isQQLive:function(){return/qqlive/.test(i)},isMobile:function(){return!!(t.match(/Android/i)||t.match(/android/i)||t.match(/iPhone/i)||t.match(/iPod/i)||t.match(/webOS/i)||t.match(/BlackBerry/i)||t.match(/BB/i)||t.match(/Windows Phone/i)||t.match(/ApacheBench/i)||t.match(/iPad.*MicroMessenger/i)||t.match(/IEMobile/i)||t.match(/spider/i)||t.match(/bot/i)||t.match(/curl/i))},isIOS:function(){return/iPad|iPhone|iPod/.test(t)&&!window.MSStream},isAndroid:function(){return/android/.test(i)},wxVer:function(){var e=i.match(/micromessenger\/([\d\.]+)/);return e?e[1]:""}}}]);