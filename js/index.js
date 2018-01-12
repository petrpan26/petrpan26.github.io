
$(document).ready(function() {
  $('#fullpage').fullpage({
  	anchors: ['page1', 'page2', 'page3', 'page4'],
  	onLeave: function(index, nextIndex, direction){
		var leavingSection = $(this);
    $('.section').fadeTo("fast", 1);
		if (nextIndex==1){
      $(".desc").html("Space Adventure!  <i class=\"fa fa-space-shuttle\" aria-hidden=\"true\">");
			$("#toggleText").html("Menu");
			$("#toggleText").css('border-left', '0.7vh solid #1ABC9C');
			$("#toggleText").hover(function(){
				$("#toggleText").css("background", "#1ABC9C");
			}, function(){
				$("#toggleText").css("background", "rgba(0,0,0,0)");
			});
		}else if (nextIndex==2){
      $(".desc").html("I haven't commited any crime !");
			$("#toggleText").html("Profile");
			$("#toggleText").css('border-left', '0.7vh solid #E74C3C');
			$("#toggleText").hover(function(){
				$("#toggleText").css("background", "#E74C3C");
			}, function(){
				$("#toggleText").css("background", "rgba(0,0,0,0)");
			});
		} else if (nextIndex==3){
      $(".desc").html("How to not procrastinate 101 !");
			$("#toggleText").html("Projects");
			$("#toggleText").css('border-left', '0.7vh solid #0072B5');
			$("#toggleText").hover(function(){
				$("#toggleText").css("background", "#0072B5");
			}, function(){
				$("#toggleText").css("background", "rgba(0,0,0,0)");
			});

		} else if (nextIndex==4){
      $(".desc").html("Call me  <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>");
			$("#toggleText").html("Contact");
			$("#toggleText").css('border-left', '0.7vh solid #F9A825');
			$("#toggleText").hover(function(){
				$("#toggleText").css("background", "#F9A825");
			}, function(){
				$("#toggleText").css("background", "rgba(0,0,0,0)");
			});
		}
		}
	});
  var moving = true;
  var value = 10;
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    // some code..
    moving = false;
    value = 10;
    $('.inside').addClass('notransition');
    $('logo').addClass('notransition').removeClass('logo');
  }


  particlesJS("particles2", {
  "particles": {
    "number": {
      "value": value,
      "density": {
        "enable": true,
        "value_area": 100
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 0,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": moving,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 109.63042366068159,
        "line_linked": {
          "opacity": 0.9871505898224783
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

  
  $('#toggle1').on('change', function(){
  	if (this.checked){
  		$('.desc').hide();
      $('.section').fadeTo("fast", 0.2);
  	} else {
  		$('.desc').show();
      $('.section').fadeTo("fast", 1);
  	}
  });
  $('#anchorMain').on('click', function(){
  	$('#toggle1').attr('checked', false);
  	var x = document.URL;
  	var a = x[x.length-1];
  	if (a>='0' && a<='9'){
  		x = x.slice(0,-1);
  		window.location.href = x+"1";
  	} else {
  		window.location.href = x+"#page1";
  	}
  	setTimeout(function(){
  		$('.desc').show();
  	}, 0);
  });
  $('#anchorBio').on('click', function(){
  	$('#toggle1').attr('checked', false);
  	var x = document.URL;
  	var a = x[x.length-1];
  	if (a>='0' && a<='9'){
  		x = x.slice(0,-1);
  		window.location.href = x+"2";
  	} else {
  		window.location.href = x+"#page2";
  	}
  	$('.desc').show();
  });
  $('#anchorContacts').on('click', function(){
  	$('#toggle1').attr('checked', false);
  	var x = document.URL;
  	var a = x[x.length-1];
  	if (a>='0' && a<='9'){
  		x = x.slice(0,-1);
  		window.location.href = x+"4";
  	} else {
  		window.location.href = x+"#page4";
  	}
  	setTimeout(function(){
  		$('.desc').show();
  	}, 0);
  });
  $('#anchorProjects').on('click', function(){
  	$('#toggle1').attr('checked', false);
  	var x = document.URL;
  	var a = x[x.length-1];
  	if (a>='0' && a<='9'){
  		x = x.slice(0,-1);
  		window.location.href = x+"3";
  	} else {
  		window.location.href = x+"#page3";
  	}
  	setTimeout(function(){
  		$('.desc').show();
  	}, 0 );
  });
  $('#arrow-down').on('click', function(e){
  	var x = document.URL;
  	var a = x[x.length-1];
  	if (a>='0' && a<='9'){
  		x = x.slice(0, -1);
  		a = String.fromCharCode(a.charCodeAt() + 1) 
  		if (a<=5)
  			window.location.href = x+a;
  	} else {
  		window.location.href = x+"#page2";
  	}
  });
  window.addEventListener('hashchange', function(event){
    x = event.newURL;
    t = x.indexOf('#');
    if (t!=-1){
      v = x.slice(t, t.length);
      if (v.length!=6){
        window.location.href = x.slice(0, t);
      }else if (x.slice(t,t+5)!="#page"){
        alert(x.slice(t,t+5))
        window.location.href = x.slice(0, t);
      }else if (x[x.length-1]<'1' || x[x.length-1]>'5'){
        window.location.href = x.slice(0, t);
      }
    }
  });
  $('.contact li').each(function(idx, element){
  	$(element).hover(function(){
  		$(element).css('font-size', '42px');
  	}, function(){
  		$(element).css('font-size', '40px');
  	});
  });
});




(function () {
   'use strict';
	
	// WAIT FOR ALL TO BE LOADED
	window.onload = function() {
		
		// add loaded class to html
		var root = document.documentElement;
		root.className += ' loaded';

		// TYPING EFFECT
		Typed.new('#typed', {
            stringsElement: document.getElementById('typed-strings'),
			loop: true,
			typeSpeed: 7,
			backSpeed: 2,
			startDelay: 1000,
			backDelay: 1200
        });
	}; // all loaded
	
	  
}());





/*
	PLUGINS
*/



! function(t, s, e) {
	"use strict";
	var i = function(t, s) {
		var i = this;
		this.el = t, this.options = {}, Object.keys(r).forEach(function(t) {
			i.options[t] = r[t]
		}), Object.keys(s).forEach(function(t) {
			i.options[t] = s[t]
		}), this.isInput = "input" === this.el.tagName.toLowerCase(), this.attr = this.options.attr, this.showCursor = !this.isInput && this.options.showCursor, this.elContent = this.attr ? this.el.getAttribute(this.attr) : this.el.textContent, this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, e && this.options.stringsElement instanceof e ? this.stringsElement = this.options.stringsElement[0] : this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
	};
	i.prototype = {
		constructor: i,
		init: function() {
			var t = this;
			t.timeout = setTimeout(function() {
				for (var s = 0; s < t.strings.length; ++s) t.sequence[s] = s;
				t.shuffle && (t.sequence = t.shuffleArray(t.sequence)), t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
			}, t.startDelay)
		},
		build: function() {
			var t = this;
			if (this.showCursor === !0 && (this.cursor = s.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)), this.stringsElement) {
				this.strings = [], this.stringsElement.style.display = "none";
				var e = Array.prototype.slice.apply(this.stringsElement.children);
				e.forEach(function(s) {
					t.strings.push(s.innerHTML)
				})
			}
			this.init()
		},
		typewrite: function(t, s) {
			if (this.stop !== !0) {
				var e = Math.round(70 * Math.random()) + this.typeSpeed,
					i = this;
				i.timeout = setTimeout(function() {
					var e = 0,
						r = t.substr(s);
					if ("^" === r.charAt(0)) {
						var o = 1;
						/^\^\d+/.test(r) && (r = /\d+/.exec(r)[0], o += r.length, e = parseInt(r)), t = t.substring(0, s) + t.substring(s + o)
					}
					if ("html" === i.contentType) {
						var n = t.substr(s).charAt(0);
						if ("<" === n || "&" === n) {
							var a = "",
								h = "";
							for (h = "<" === n ? ">" : ";"; t.substr(s + 1).charAt(0) !== h && (a += t.substr(s).charAt(0), s++, !(s + 1 > t.length)););
							s++, a += h
						}
					}
					i.timeout = setTimeout(function() {
						if (s === t.length) {
							if (i.options.onStringTyped(i.arrayPos), i.arrayPos === i.strings.length - 1 && (i.options.callback(), i.curLoop++, i.loop === !1 || i.curLoop === i.loopCount)) return;
							i.timeout = setTimeout(function() {
								i.backspace(t, s)
							}, i.backDelay)
						} else {
							0 === s && i.options.preStringTyped(i.arrayPos);
							var e = t.substr(0, s + 1);
							i.attr ? i.el.setAttribute(i.attr, e) : i.isInput ? i.el.value = e : "html" === i.contentType ? i.el.innerHTML = e : i.el.textContent = e, s++, i.typewrite(t, s)
						}
					}, e)
				}, e)
			}
		},
		backspace: function(t, s) {
			if (this.stop !== !0) {
				var e = Math.round(70 * Math.random()) + this.backSpeed,
					i = this;
				i.timeout = setTimeout(function() {
					if ("html" === i.contentType && ">" === t.substr(s).charAt(0)) {
						for (var e = "";
							"<" !== t.substr(s - 1).charAt(0) && (e -= t.substr(s).charAt(0), s--, !(s < 0)););
						s--, e += "<"
					}
					var r = t.substr(0, s);
					i.attr ? i.el.setAttribute(i.attr, r) : i.isInput ? i.el.value = r : "html" === i.contentType ? i.el.innerHTML = r : i.el.textContent = r, s > i.stopNum ? (s--, i.backspace(t, s)) : s <= i.stopNum && (i.arrayPos++, i.arrayPos === i.strings.length ? (i.arrayPos = 0, i.shuffle && (i.sequence = i.shuffleArray(i.sequence)), i.init()) : i.typewrite(i.strings[i.sequence[i.arrayPos]], s))
				}, e)
			}
		},
		shuffleArray: function(t) {
			var s, e, i = t.length;
			if (i)
				for (; --i;) e = Math.floor(Math.random() * (i + 1)), s = t[e], t[e] = t[i], t[i] = s;
			return t
		},
		reset: function() {
			var t = this;
			clearInterval(t.timeout);
			this.el.getAttribute("id");
			this.el.textContent = "", "undefined" != typeof this.cursor && "undefined" != typeof this.cursor.parentNode && this.cursor.parentNode.removeChild(this.cursor), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, this.options.resetCallback()
		}
	}, i["new"] = function(t, e) {
		var r = Array.prototype.slice.apply(s.querySelectorAll(t));
		r.forEach(function(t) {
			var s = t._typed,
				r = "object" == typeof e && e;
			s && s.reset(), t._typed = s = new i(t, r), "string" == typeof e && s[e]()
		})
	}, e && (e.fn.typed = function(t) {
		return this.each(function() {
			var s = e(this),
				r = s.data("typed"),
				o = "object" == typeof t && t;
			r && r.reset(), s.data("typed", r = new i(this, o)), "string" == typeof t && r[t]()
		})
	}), t.Typed = i;
	var r = {
		strings: ["These are the default values", "Try them", "Use your own!", ".."],
		stringsElement: null,
		typeSpeed: 2000,
		startDelay: 0,
		backSpeed: 0,
		shuffle: !1,
		backDelay: 2000,
		loop: !1,
		loopCount: !1,
		showCursor: !0,
		cursorChar: "|",
		attr: null,
		contentType: "html",
		callback: function() {},
		preStringTyped: function() {},
		onStringTyped: function() {},
		resetCallback: function() {}
	}
}(window, document, window.jQuery);
