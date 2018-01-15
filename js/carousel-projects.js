/*
 * Author: Nokey
 * Date: 2016/12/06
 * Dependencies: jQuery, Tween.js
 */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CarouselPoint = function () {
  function CarouselPoint(initState) {
    _classCallCheck(this, CarouselPoint);

    var _me = this;
    // jQuery DOM
    this.dom = initState.dom;

    // TranslateX
    this.x = 0;

    // Scale()
    this.s = 0;

    // z-index
    this.z = 0;

    // 获取父组件属性
    this.A = initState.A;
    this.S = initState.S;
    this.Z = initState.Z;

    // 当前的总弧度
    this.rad = initState.rad;

    // 动画器
    this.tween = new TWEEN.Tween(_me).onStart(function () {
      _me.start();
    }).onUpdate(function () {
      _me.setState();
    }).onComplete(function () {
      _me.complete();
    });

    // 动画时间
    this.time = initState.time;
  }

  _createClass(CarouselPoint, [{
    key: 'setState',
    value: function setState() {
      // theta 是每次增加或减少的弧度值
      // this.rad += theta;
      var _me = this;
      _me.x = _me.A * _me.checkMinNum(Math.cos(_me.rad));
      _me.s = _me.S * Math.sin(_me.rad) + 1;
      _me.z = parseInt(_me.Z * ((1 + _me.checkMinNum(Math.sin(_me.rad))) / 2));
      // Render
      _me.render();

      return _me;
    }
  }, {
    key: 'checkMinNum',
    value: function checkMinNum(n) {
      if (Math.abs(n) < 0.001) {
        return 0;
      }
      return Math.floor(n * 1000) / 1000;
    }
  }, {
    key: 'start',
    value: function start() {
      console.log('This image Tween Start...');
      // 动画开始前取消 Focus 状态
      this.dom.removeClass('focus-3d');
    }
  }, {
    key: 'complete',
    value: function complete() {
      console.log('This image Tween Complete...');
      // 检查当前元素是否在 Focus 位置
      if (this.x === 0 && this.z === this.Z) {
        this.dom.addClass('focus-3d');
      }
    }
  }, {
    key: 'animate',
    value: function animate(theta) {
      var _me = this;
      _me.tween.stop().to({ rad: _me.rad + theta }, _me.time).start();
    }
  }, {
    key: 'render',
    value: function render() {
      var _me = this;
      _me.dom.css({
        'z-index': _me.z,
        '-webkit-transform': 'scale(' + _me.s + ') translate(' + _me.x + 'px,0)',
        '-ms-transform': 'scale(' + _me.s + ') translate(' + _me.x + 'px,0)',
        'transform': 'scale(' + _me.s + ') translate(' + _me.x + 'px,0)'
      });
    }
  }]);

  return CarouselPoint;
}();

var Carousel3D = function () {
  function Carousel3D(initState) {
    _classCallCheck(this, Carousel3D);

    // a: 椭圆长轴；b: 椭圆短轴
    this.a = initState.a;
    this.b = initState.b;

    // DOM数组元素
    this.doms = initState.doms;

    // CarouselPoint 对象数组 [Array]
    this.CPs = [];

    // CarouselPoint 数量
    this.num = initState.doms.length;

    // 缩放可变范围 [Number] 1 ± s
    this.scaleDelta = initState.scaleDelta;

    // z-index 可变范围 [Number]
    this.zIndexMax = initState.zIndexMax;

    // 每个点相差的弧度
    this.deltaRad = Math.PI * 2 / this.num;

    // 动画时间
    this.time = initState.time;

    // 动画控制标志
    this.moving = false;
  }

  // 初始化控件

  var CURINFO = "";

  _createClass(Carousel3D, [{
    key: 'init',
    value: function init() {
      if (this.num < 1) {
        throw 'There is no element to show!';
      } else {
        var _me = this;

        _me.doms.each(function (i, e) {
          var $e = $(e),
              o = new CarouselPoint({
            dom: $e,
            rad: Math.PI / 2 + _me.deltaRad * i,
            time: _me.time,
            A: _me.a,
            S: _me.scaleDelta,
            Z: _me.zIndexMax
          });
          _me.CPs.push(o);

          // 初始化 Focus
          i === 0 && $e.addClass('focus-3d');

          // 将dom映射到GP对象
          $e.data('gpnum', i);

          // 给每个dom绑定click事件
          $e.click(function (ev) {
            if ($('.focus-3d').attr('id') != $(e).attr('id')){
              $('.carousel-3d .carousel-item p').css('font-size', '0vh');
              $('.carousel-3d .carousel-item').fadeTo('fast', 0.2);
              $(ev.target).fadeTo('fast', 1);
              $(ev.target).find('p').css('font-size', '3vh');
            }
            else {
              var queryStr = '.' + $('.focus-3d').attr('id');
              $('.projects').fadeTo('slow', 0);
              $('dropdown').fadeTo('slow', 0);
              $('dropdown').css('z-index', -1);
              $('.desc').fadeTo('slow', 0);
              $('.overlay').show();
              $('.overlay').css('z-index', 10001);
              $(queryStr).fadeTo('slow', 1);
              $(queryStr).css('z-index', 10000);
              $('.cancel').on('click', function(){
                $('.projects').fadeTo('slow', 1);
                $('dropdown').fadeTo('slow', 1);
                $('.desc').fadeTo('slow', 1);
                $('.overlay').hide();
                $(queryStr).fadeTo('slow', 0);
                $('.cancel').off('click');
                $(queryStr).css('z-index', 0);
                $('overlay').css('z-index', 0);
                $('dropdown').css('z-index', 0);
              });
            }
            // 确定要旋转的弧度
            var i = $(ev.target).data('gpnum'),
                theta = _me.getNextTheta(i);

            // 开始 tween
            _me.animate(theta);
          });
        });

        _me.render();

        return _me;
      }
    }

    // 动画

  }, {
    key: 'animate',
    value: function animate(theta) {
      this.CPs.forEach(function (e) {
        e.animate(theta);
      });
    }

    // 获取即将变化的theta

  }, {
    key: 'getNextTheta',
    value: function getNextTheta(i) {
      var currentGP = this.CPs[i],
          diff_theta = currentGP.rad % (Math.PI * 2) - Math.PI / 2,
          temp_theta = Math.abs(diff_theta) - Math.PI,
          next_theta;

      if (temp_theta >= 0) {
        if (diff_theta >= 0) {
          next_theta = Math.PI - temp_theta;
        } else {
          next_theta = -1 * (Math.PI - temp_theta);
        }
      } else {
        next_theta = -1 * diff_theta;
      }

      return next_theta;
    }

    // 初始化渲染每个点

  }, {
    key: 'render',
    value: function render() {
      if (this.num < 1) {
        throw 'There is no element to update!';
      } else {
        this.CPs.forEach(function (e, i) {
          e.setState();
        });

        return this;
      }
    }
  }]);

  return Carousel3D;
}();

var C3D = new Carousel3D({
  a: 200,
  b: 20,
  doms: $('.carousel-item'),
  scaleDelta: 0.15,
  zIndexMax: 100,
  time: 500
}).init();

animate();

function animate() {
  requestAnimationFrame(animate);

  // Tween FPS
  TWEEN.update();
}