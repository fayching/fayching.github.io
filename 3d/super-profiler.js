(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.SuperProfiler = factory());
}(this, (function () { 'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var floor = function floor(n, m) {
    m = m || 0;
    return Math.floor(n * Math.pow(10, m)) / Math.pow(10, m);
};
var round = Math.round;

var Panel = function Panel(name, fg, bg) {
    classCallCheck(this, Panel);

    var min = Infinity,
        max = 0;
    var PR = round(window.devicePixelRatio || 1);

    var WIDTH = 280 * PR,
        HEIGHT = 70 * PR,
        TEXT_X = 3 * PR,
        TEXT_Y = 2 * PR,
        GRAPH_X = 3 * PR,
        GRAPH_Y = 15 * PR,
        GRAPH_WIDTH = 270 * PR,
        GRAPH_HEIGHT = 55 * PR;

    var canvas = document.createElement('canvas');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    canvas.style.cssText = 'width:280px;height:70px;margin:0px;display:block;';

    var context = canvas.getContext('2d');
    context.font = 'bold ' + 9 * PR + 'px Helvetica,Arial,sans-serif';
    context.textBaseline = 'top';

    context.fillStyle = bg;
    context.fillRect(0, 0, WIDTH, HEIGHT);

    context.fillStyle = fg;
    context.fillText('S_P', TEXT_X, TEXT_Y);
    context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);

    context.fillStyle = bg;
    context.globalAlpha = 1;
    context.fillRect(0, 0, WIDTH, GRAPH_Y);

    context.fillStyle = '#fff';
    context.globalAlpha = 0.72;
    context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);

    this.dom = canvas;
    this.update = function (value, MAX) {
        min = Math.min(min, value);
        max = Math.max(max, value);
        MAX = Math.max(max, MAX);
        var scale = floor(value * 100 / MAX, 4);

        context.fillStyle = bg;
        context.globalAlpha = 1;
        context.fillRect(0, 0, WIDTH, GRAPH_Y);

        context.fillStyle = fg;
        var title = 'S_P: ' + round(value) + ' ' + name + '(' + round(min) + '-' + round(max) + '-' + round(MAX) + ') SCALE:' + scale + '%';
        context.fillText(title, TEXT_X, TEXT_Y);

        context.drawImage(canvas, GRAPH_X + PR, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT, GRAPH_X, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT);
        context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, GRAPH_HEIGHT);

        context.fillStyle = '#fff';
        context.globalAlpha = 0.72;
        context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, (1 - scale / 100) * GRAPH_HEIGHT);
    };
};

var floor$1 = function floor(n, m) {
    m = m || 0;
    return Math.floor(n * Math.pow(10, m)) / Math.pow(10, m);
};

var SBarChart = function () {
    function SBarChart(canvas, data, options) {
        classCallCheck(this, SBarChart);

        this.canvas = typeof canvas == 'string' ? document.getElementById(canvas) : canvas;
        this.canvas.width = options.width;
        this.canvas.height = options.height;
        this.ctx = this.canvas.getContext('2d');
        this.data = data; // 存放图表数据
        this.dataLength = this.data.length; // 图表数据的长度
        this.width = options.width; // canvas 宽度
        this.height = options.height; // canvas 高度
        this.padding = 40; // canvas 内边距
        this.yEqual = 5; // y轴分成5等分
        this.yLength = 0; // y轴坐标点之间的真实长度
        this.xLength = 0; // x轴坐标点之间的真实长度
        this.yFictitious = 0; // y轴坐标点之间显示的间距
        this.yRatio = 0; // y轴坐标真实长度和坐标间距的比
        this.bgColor = '#ffffff'; // 默认背景颜色
        this.fillColor = '#1E9FFF'; // 默认填充颜色
        this.axisColor = '#666666'; // 坐标轴颜色
        this.contentColor = '#eeeeee'; // 内容横线颜色
        this.titleColor = '#000000'; // 图表标题颜色
        this.title = ''; // 图表标题
        this.titlePosition = 'top'; // 图表标题位置: top / bottom
        this.looped = null; // 是否循环
        this.current = 0; // 当前加载柱状图高度的百分数
        this.currentIndex = -1;
        this.onceMove = -1;
        this.init(options);
    }

    createClass(SBarChart, [{
        key: 'init',
        value: function init(options) {
            if (options) {
                this.padding = options.padding || 40;
                this.yEqual = options.yEqual || 5;
                this.bgColor = options.bgColor || '#ffffff';
                this.fillColor = options.fillColor || '#1E9FFF';
                this.axisColor = options.axisColor || '#666666';
                this.contentColor = options.contentColor || '#eeeeee';
                this.titleColor = options.titleColor || '#000000';
                this.title = options.title;
                this.titlePosition = options.titlePosition || 'top';
            }
            this.yLength = Math.floor((this.height - this.padding * 1.5 - 10) / this.yEqual);
            this.xLength = Math.floor((this.width - this.padding * 1.5 - 10) / this.dataLength);
            this.yFictitious = this.getYFictitious(this.data);
            this.yRatio = this.yLength / this.yFictitious;
            this.looping();
        }
    }, {
        key: 'looping',
        value: function looping() {
            this.looped = requestAnimationFrame(this.looping.bind(this));
            if (this.current < 100) {
                this.current = this.current + 3 > 100 ? 100 : this.current + 3;
                this.drawAnimation();
            } else {
                window.cancelAnimationFrame(this.looped);
                this.looped = null;
                this.watchHover();
            }
        }
    }, {
        key: 'drawAnimation',
        value: function drawAnimation() {
            for (var i = 0; i < this.dataLength; i++) {
                var x = Math.ceil(this.data[i].value * this.current / 100 * this.yRatio);
                var y = this.height - this.padding - x;

                this.data[i].left = this.padding + this.xLength * (i + 0.25);
                this.data[i].top = y;
                this.data[i].right = this.padding + this.xLength * (i + 0.75);
                this.data[i].bottom = this.height - this.padding;
                this.drawUpdate();
            }
        }
    }, {
        key: 'drawUpdate',
        value: function drawUpdate() {
            this.ctx.fillStyle = this.bgColor;
            this.ctx.fillRect(0, 0, this.width, this.height);
            this.drawAxis();
            this.drawPoint();
            this.drawTitle();
            this.drawChart();
        }
    }, {
        key: 'drawChart',
        value: function drawChart() {
            this.ctx.fillStyle = this.fillColor;
            for (var i = 0; i < this.dataLength; i++) {
                this.ctx.fillRect(this.data[i].left, this.data[i].top, this.data[i].right - this.data[i].left, this.data[i].bottom - this.data[i].top);
                this.ctx.font = '12px Arial';
                this.ctx.fillText(floor$1(this.data[i].value * this.current / 100, 3), this.data[i].left + this.xLength / 4, this.data[i].top - 5);
            }
        }
    }, {
        key: 'drawAxis',
        value: function drawAxis() {
            this.ctx.beginPath();
            this.ctx.strokeStyle = this.axisColor;
            // y轴线, +0.5是为了解决canvas画1像素会显示成2像素的问题
            this.ctx.moveTo(this.padding + 0.5, this.height - this.padding + 0.5);
            this.ctx.lineTo(this.padding + 0.5, this.padding + 0.5);
            // x轴线
            this.ctx.moveTo(this.padding + 0.5, this.height - this.padding + 0.5);
            this.ctx.lineTo(this.width - this.padding / 2 + 0.5, this.height - this.padding + 0.5);
            this.ctx.stroke();
        }
    }, {
        key: 'drawPoint',
        value: function drawPoint() {
            // x轴坐标点
            this.ctx.beginPath();
            this.ctx.font = '12px Microsoft YaHei';
            this.ctx.textAlign = 'center';
            this.ctx.fillStyle = this.axisColor;
            for (var i = 0; i < this.dataLength; i++) {
                var xAxis = this.data[i].xAxis;
                var xlen = this.xLength * (i + 1);
                this.ctx.moveTo(this.padding + xlen + 0.5, this.height - this.padding + 0.5);
                this.ctx.lineTo(this.padding + xlen + 0.5, this.height - this.padding + 5.5);
                this.ctx.fillText(xAxis, this.padding + xlen - this.xLength / 2, this.height - this.padding + 15);
            }
            this.ctx.stroke();

            // y轴坐标点
            this.ctx.beginPath();
            this.ctx.font = '12px Microsoft YaHei';
            this.ctx.textAlign = 'right';
            this.ctx.fillStyle = this.axisColor;
            this.ctx.moveTo(this.padding + 0.5, this.height - this.padding + 0.5);
            this.ctx.lineTo(this.padding - 4.5, this.height - this.padding + 0.5);
            this.ctx.fillText(0, this.padding - 10, this.height - this.padding + 5);
            for (var _i = 0; _i < this.yEqual; _i++) {
                var y = this.yFictitious * (_i + 1);
                var ylen = this.yLength * (_i + 1);
                this.ctx.beginPath();
                this.ctx.strokeStyle = this.axisColor;
                this.ctx.moveTo(this.padding + 0.5, this.height - this.padding - ylen + 0.5);
                this.ctx.lineTo(this.padding - 4.5, this.height - this.padding - ylen + 0.5);
                this.ctx.stroke();
                this.ctx.fillText(y, this.padding - 10, this.height - this.padding - ylen + 5);
                this.ctx.beginPath();
                this.ctx.strokeStyle = this.contentColor;
                this.ctx.moveTo(this.padding + 0.5, this.height - this.padding - ylen + 0.5);
                this.ctx.lineTo(this.width - this.padding / 2 + 0.5, this.height - this.padding - ylen + 0.5);
                this.ctx.stroke();
            }
        }
    }, {
        key: 'drawTitle',
        value: function drawTitle() {
            if (this.title) {
                this.ctx.beginPath();
                this.ctx.textAlign = 'center';
                this.ctx.fillStyle = this.titleColor;
                this.ctx.font = '16px Microsoft YaHei';
                if (this.titlePosition === 'bottom' && this.padding >= 40) {
                    this.ctx.fillText(this.title, this.width / 2, this.height - 5);
                } else {
                    this.ctx.fillText(this.title, this.width / 2, this.padding / 2);
                }
            }
        }
        /**
         * 监听鼠标移动事件
         */

    }, {
        key: 'watchHover',
        value: function watchHover() {
            var self = this;
            self.canvas.addEventListener('mousemove', function (ev) {
                ev = ev || window.event;
                self.currentIndex = -1;
                for (var i = 0; i < self.data.length; i++) {
                    if (ev.offsetX > self.data[i].left && ev.offsetX < self.data[i].right && ev.offsetY > self.data[i].top && ev.offsetY < self.data[i].bottom) {
                        self.currentIndex = i;
                    }
                }
                self.drawHover();
            });
        }
    }, {
        key: 'drawHover',
        value: function drawHover() {
            if (this.currentIndex !== -1) {
                if (this.onceMove === -1) {
                    this.onceMove = this.currentIndex;
                    this.canvas.style.cursor = 'pointer';
                }
            } else {
                if (this.onceMove !== -1) {
                    this.onceMove = -1;
                    this.canvas.style.cursor = 'inherit';
                }
            }
        }
        /**
         * y轴坐标点之间显示的间距
         * @param data 
         * @return y轴坐标间距
         */

    }, {
        key: 'getYFictitious',
        value: function getYFictitious(data) {
            var arr = data.slice(0);
            arr.sort(function (a, b) {
                return -(a.value - b.value);
            });
            var len = Math.ceil(arr[0].value / this.yEqual);
            var pow = len.toString().length - 1;
            pow = pow > 2 ? 2 : pow;
            return Math.ceil(len / Math.pow(10, pow)) * Math.pow(10, pow);
        }
    }]);
    return SBarChart;
}();

/*
    用法：
	import SuperProfiler from './SuperProfiler.js'

	let myProfiler = new SuperProfiler();
	document.body.appendChild( myProfiler.container );

	function animate(){
		myProfiler.begin();
		// 你的要监控的代码，可以它查看耗时和fps
		let num = 0;
		for ( let  i = 0; i < 2000; i ++ ) {
		  let newArr = new Array(5000);
		  newArr.forEach((element, i) => {
			newArr[i] = num ++;
		  });
		}
		myProfiler.end();
		requestAnimationFrame( animate );
	}

	requestAnimationFrame( animate );
*/

var SuperProfiler = function () {
	function SuperProfiler() {
		classCallCheck(this, SuperProfiler);

		this.delay = 300;
		this.frames = 0;
		this.prevTime = 0;
		this.beginTime = 0;
		// 页面创建div浮层
		var container = document.createElement('div');
		container.setAttribute('id', 'superProfilerWrap');
		container.style.cssText = 'position:fixed;top:0;right:0;cursor:pointer;opacity:0.9;z-index:10000;width:300px;';
		this.container = container;
		this.beginTime = (performance || Date).now();
		this.prevTime = this.beginTime;

		this.fpsPanel = this.addPanel(new Panel('FPS', '#0064cb', '#002'));
		this.msPanel = this.addPanel(new Panel('MS', '#00b100', '#020'));
		if (self.performance && self.performance.memory) this.memPanel = this.addPanel(new Panel('MB', '#f08', '#201'));
	}

	createClass(SuperProfiler, [{
		key: 'addPanel',
		value: function addPanel(panel) {
			this.container.appendChild(panel.dom);
			return panel;
		}
	}, {
		key: 'showPanel',
		value: function showPanel(id) {
			for (var i = 0; i < this.container.children.length; i++) {
				this.container.children[i].style.display = 'block';
			}
		}
	}, {
		key: 'begin',
		value: function begin() {
			this.beginTime = (performance || Date).now();
		}
	}, {
		key: 'end',
		value: function end() {
			this.frames++;
			var time = (performance || Date).now();

			this.msPanel.update(time - this.beginTime, 110);

			if (time >= this.prevTime + this.delay) {
				// fps 每秒更新一次
				this.fpsPanel.update(this.frames / ((time - this.prevTime) / 1000), 60);
				this.prevTime = time;
				this.frames = 0;
				if (this.memPanel) {
					var memory = performance.memory;
					this.memPanel.update(memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576 / 10);
				}
			}
			return time;
		}
	}, {
		key: 'update',
		value: function update() {
			this.beginTime = this.end();
		}

		// 页面数据一次性获得

	}], [{
		key: 'getTiming',
		value: function getTiming() {
			var _this = this;

			var time = performance.timing;
			var loadTime = (time.loadEventEnd - time.loadEventStart) / 1000;
			if (loadTime < 0) {
				setTimeout(function () {
					_this.getTiming();
				}, 200);
				return;
			}

			var timingObj = {};
			timingObj['白屏时间'] = (time.responseStart - time.navigationStart) / 1000;
			timingObj['重定向时间'] = (time.redirectEnd - time.redirectStart) / 1000;
			timingObj['DNS解析时间'] = (time.domainLookupEnd - time.domainLookupStart) / 1000;
			timingObj['TCP链接耗时'] = (time.connectEnd - time.connectStart) / 1000;
			timingObj['HTTP请求响应完成时间'] = (time.responseEnd - time.requestStart) / 1000;
			timingObj['DOM开始加载前所花费时间'] = (time.responseEnd - time.navigationStart) / 1000;
			timingObj['DOM加载完成时间'] = (time.domComplete - time.domLoading) / 1000;
			timingObj['DOM结构解析完成时间'] = (time.domInteractive - time.domLoading) / 1000;
			timingObj['脚本加载时间'] = (time.domContentLoadedEventEnd - time.domContentLoadedEventStart) / 1000;
			timingObj['onload事件时间'] = (time.loadEventEnd - time.loadEventStart) / 1000;

			var timeOrign = performance.timeOrigin;
			for (var _key in time) {
				if (time.hasOwnProperty(_key)) {
					time[_key] = time[_key] > 0 ? time[_key] - timeOrign : time[_key];
				}
			}

			var resource = performance.getEntriesByType('resource');
			var len = resource.length;
			var cssNum = 0,
			    jsNum = 0,
			    imgNum = 0;
			resource.forEach(function (el) {
				if (/.js$/.test(el.name.toLowerCase())) {
					jsNum++;
				} else if (/.gif|.jpg|.jpeg|.png$/.test(el.name.toLowerCase())) {
					imgNum++;
				} else if (/.css$/.test(el.name.toLowerCase())) {
					cssNum++;
				}
			});

			var params = {
				time: {
					'白屏时间': {
						End: time.responseStart,
						Start: time.navigationStart
					},
					'重定向时间': {
						End: time.redirectEnd,
						Start: time.redirectStart
					},
					'DNS解析时间': {
						End: time.domainLookupEnd,
						Start: time.domainLookupStart
					},
					'TCP链接耗时': {
						End: time.connectEnd,
						Start: time.connectStart
					},
					'HTTP请求响应完成时间': {
						End: time.responseEnd,
						Start: time.requestStart
					},
					'DOM开始加载前所花费时间': {
						End: time.responseEnd,
						Start: time.navigationStart
					},
					'DOM加载完成时间': {
						End: time.domComplete,
						Start: time.domLoading
					},
					'DOM结构解析完成时间': {
						End: time.domInteractive,
						Start: time.domLoading
					},
					'脚本加载时间': {
						End: time.domContentLoadedEventEnd,
						Start: time.domContentLoadedEventStart
					},
					'onload事件时间': {
						End: time.loadEventEnd,
						Start: time.loadEventStart
					},
					'页面加载完成时间': {
						End: time.loadEventEnd,
						Start: time.navigationStart
					},
					'读取页面首字节耗时': {
						End: time.responseStart,
						Start: time.navigationStart
					}
				},
				other: {
					time: timeOrign,
					resource: resource.length,
					cssNum: cssNum,
					jsNum: jsNum,
					imgNum: imgNum
				}
			};

			var detailUrl = 'http://tnfe.webdev.com/super?params=' + encodeURIComponent(JSON.stringify(params));

			timingObj['页面完全加载时间'] = timingObj['重定向时间'] + timingObj['DNS解析时间'] + timingObj['TCP链接耗时'] + timingObj['HTTP请求响应完成时间'] + timingObj['DOM结构解析完成时间'] + timingObj['DOM加载完成时间'];
			/* 数据写入 */

			var key = 'profiler_' + window.location.pathname;
			var storage = window.localStorage;
			var timingData = storage[key] || JSON.stringify([]);
			var newTiming = JSON.parse(timingData);
			newTiming.push(timingObj);
			var newTiming10 = newTiming.slice(-10);
			storage[key] = JSON.stringify(newTiming10);
			for (var item in timingObj) {
				console.log(item + ":" + timingObj[item] + '秒');
			}

			var canvasCharts = document.createElement('canvas');
			canvasCharts.style.cssText = 'width:280px;height:200px;margin:0px;display:block;';
			document.getElementById('superProfilerWrap').appendChild(canvasCharts);

			var data = [{ xAxis: 'dns', value: new Number(timingObj['DNS解析时间']) }, { xAxis: 'http', value: new Number(timingObj['HTTP请求响应完成时间']) }, { xAxis: 'DOM', value: new Number(timingObj['DOM加载完成时间']) }, { xAxis: 'scpt', value: new Number(timingObj['脚本加载时间']) }, { xAxis: 'load', value: new Number(timingObj['onload事件时间']) }, { xAxis: 'full', value: new Number(timingObj['页面完全加载时间']) }];
			var chart = new SBarChart(canvasCharts, data, {
				width: 280, height: 200,
				title: '本次性能测试数据表',
				bgColor: '#002d64',
				titleColor: '#ffffff', // 标题颜色
				titlePosition: 'top', // 标题位置
				fillColor: '#72f6ff', // 柱状填充色
				axisColor: '#eeeeee', // 坐标轴颜色
				contentColor: '#bbbbbb' // 内容横线颜色
			});

			var canvasChartsAverage = document.createElement('canvas');
			canvasChartsAverage.style.cssText = 'width:280px;height:200px;margin:0px;display:block;';
			document.getElementById('superProfilerWrap').appendChild(canvasChartsAverage);
			var averageData = this.getAverageNum(newTiming10);
			var data2 = [{ xAxis: 'dns', value: averageData['DNS解析时间'] }, { xAxis: 'http', value: averageData['HTTP请求响应完成时间'] }, { xAxis: 'DOM', value: averageData['DOM加载完成时间'] }, { xAxis: 'scpt', value: averageData['脚本加载时间'] }, { xAxis: 'load', value: averageData['onload事件时间'] }, { xAxis: 'full', value: averageData['页面完全加载时间'] }];

			chart = new SBarChart(canvasChartsAverage, data2, {
				width: 280, height: 200,
				title: '平均性能测试数据表（最近10次）',
				bgColor: '#136204',
				titleColor: '#ffffff', // 标题颜色
				titlePosition: 'top', // 标题位置
				fillColor: '#72f6ff', // 柱状填充色
				axisColor: '#eeeeee', // 坐标轴颜色
				contentColor: '#bbbbbb' // 内容横线颜色
			});

			var moreBtn = document.createElement('a');
			moreBtn.setAttribute('href', detailUrl);
			moreBtn.style.cssText = 'display:block;width:280px;height:30px;text-align:center;border-radius:0px;margin:0;cursor: pointer;background-color:#e3e3e3';
			moreBtn.innerHTML = '生成报表';
			document.getElementById('superProfilerWrap').appendChild(moreBtn);
		}
	}, {
		key: 'getAverageNum',
		value: function getAverageNum(data) {
			var total = {};
			var len = data.length;
			data.forEach(function (el) {
				for (var key in el) {
					if (el.hasOwnProperty(key)) {
						var vl = el[key];
						total[key] = total[key] || 0;
						total[key] += vl;
					}
				}
			});
			for (var key in total) {
				if (total.hasOwnProperty(key)) {
					total[key] = new Number(total[key] / len);
				}
			}
			return total;
		}
	}]);
	return SuperProfiler;
}();

handleAddListener('load', getSuperProfiler);
function getSuperProfiler() {
	SuperProfiler.getTiming();
}
function handleAddListener(type, fn) {
	if (window.addEventListener) {
		window.addEventListener(type, fn);
	} else {
		window.attachEvent('on' + type, fn);
	}
}

return SuperProfiler;

})));
//# sourceMappingURL=super-profiler.js.map
