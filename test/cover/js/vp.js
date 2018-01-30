/**
 * 对固定宽度页面使用viewport处理
 * @param uWidth 要设定的宽度
 * @param dWidth 设备获取实际像素宽(在android-dpi模式下用)
 * @param mode 处理viewport的模式[apple, android-2.2, andrpid-dpi, android-scale]
 * @param bConsole 是否进行测试输出(获取的数据)
 */
function adaptVP(param) {
    if(!param) return;
    var st = {
        'uWidth': 0,              // 要设定的ui宽(px)
        'dWidth': 0,              // 屏幕的实际宽(px)
        'ratio': 1,               // 物理像素/独立像素
        'mode': 'apple',          // 处理viewport的模式 apple for iOS; android-2.2 for android 2.2 or 2.3; android-scale for android 4.4+; android-dpi for 4.4-; wp for winphone
        'userAgent': null,        // 浏览器ua
        'bConsole': false         // 是否输出获取的参数 - 测试时用
    };

    initParam();
    initViewport();
    if(st.bConsole) { console() };

    function initParam() {
        st.uWidth = param.uWidth? param.uWidth : 640;
        st.dWidth = param.dWidth? param.dWidth : (window.screen.width || window.screen.availWidth);
        st.ratio = window.devicePixelRatio? window.devicePixelRatio : 1;
        st.userAgent = navigator.userAgent;
        st.bConsole = param.bConsole? param.bConsole : false;

        // 判断viewport的处理模式
        if(param.mode) { st.mode = param.mode; return; }
        // 从ua中判断android版本和wp版本，默认以apple模式处理
        // var isAndroid = st.userAgent.match(/Android\s(\d+.\d+)/i);
        // 部分手机ua中不会出现Android版本数字
        var isAndroid = st.userAgent.match(/Android/i);
        if(isAndroid) {
            st.mode = 'android-2.2';            // 默认处理方式
            // 检查版本
            var version = st.userAgent.match(/Android\s(\d+.\d+)/i);
            if(version) {
                version = parseFloat(version[1]);
            }

            if (version == 2.2 || version == 2.3) {
                st.mode = 'android-2.2';
            } else if (version < 4.4) {
                st.mode = 'android-dpi';
            } else if (version >= 4.4) {
                // 如果检测到的实际像素宽度为网页级别则
                if (st.dWidth > st.uWidth) {
                    st.mode = 'android-dpi';
                } else {
                    st.mode = 'android-scale';
                }
            }
        } 

        // 对wp的处理
    };

    function initViewport() {
        var initial = '';
        var isFix2_2 = false;
        switch(st.mode) {
            case 'apple':
                initial = 'width='+ st.uWidth + ', user-scalable=no';
                break;

            case 'android-2.2':
                if(!param.dWidth) {
                    if(st.ratio == 2) {
                        st.dWidth = 720;
                    } 
                    else if(st.ratio == 1.5) {
                        st.dWidth = 480;
                    } 
                    else if(st.ratio == 1) {
                        st.dWidth = 320;
                    } 
                    else if(st.ratio == 0.75) {
                        st.dWidth = 240;
                    } 
                    else {
                        st.dWidth = 480;
                    }
                }  

                // 假若能正确获取浏览器窗口分辨率则不用处理
                var dWidth = window.screen.width || window.screen.availWidth;
                if( dWidth == 320) {
                    st.dWidth = st.ratio * dWidth;
                } else if(dWidth<640) {
                    st.dWidth = dWidth;
                }

                st.mode = 'android-dpi';
                isFix2_2 = true;

            case 'android-dpi':
                //alert('uWidth:'+st.uWidth+';dWidth:'+st.dWidth+';ratio:'+st.ratio);
                var dpi = st.uWidth / st.dWidth * st.ratio * 160;           //uWidth：页面展示部分的尺寸大小。  dWidth：物理像素数量
                initial = 'target-densitydpi=' + dpi + ', width=' + st.uWidth + ", user-scalable=no";
                if(isFix2_2) { st.mode = 'android-2.2'; }
                break;

            case 'android-scale':
                //var scale = st.uWidth / st.dWidth;
                //initial = 'width='+ st.uWidth + ',initial-scale=' + scale + ' user-scalable=no';
                initial = 'width='+ st.uWidth + ', user-scalable=no';
                break;
        }

        var viewport = document.querySelector("meta[name='viewport']") || document.createElement('meta');
        viewport.name = 'viewport';
        viewport.content = initial;
        var head = document.getElementsByTagName('head');
        if (head.length > 0) {
            head[0].appendChild(viewport);
        }
    };

    function console() {
        var str = '';
        for(key in st) {
            str += key + ': ' + st[key] + '; ';  
        }
        alert(str);
    };
};

adaptVP({uWidth:640});