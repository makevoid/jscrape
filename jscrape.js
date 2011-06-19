(function() {
  var Frame, Page, Scrapable, jScrape;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  if (!(window.console || console.log)) {
    window.console = {};
    console.log = function() {};
  }
  if ($.jScrape_server === void 0) {
    $.jScrape_server = "jscrape.it";
  }
  Scrapable = (function() {
    function Scrapable() {}
    Scrapable.prototype.get = function(url, callback) {
      var that;
      url = encodeURIComponent(url);
      this.data = void 0;
      that = this;
      $.get("http://" + $.jScrape_server + "/q/" + url, __bind(function(data) {
        this.page = new Page(data, that);
        this.data = data;
        return callback(this.page);
      }, this));
      return this;
    };
    return Scrapable;
  })();
  Frame = (function() {
    __extends(Frame, Scrapable);
    function Frame(elem) {
      this.elem = elem;
    }
    return Frame;
  })();
  Page = (function() {
    function Page(html, frame) {
      this.html = html;
      this.frame = frame;
    }
    Page.prototype.fetch = function(selector) {
      this.html = $(this.html).find(selector);
      this.render();
      return this.html;
    };
    Page.prototype.render = function() {
      return $(this.frame.elem).html(this.html);
    };
    return Page;
  })();
  jScrape = (function() {
    __extends(jScrape, Scrapable);
    function jScrape() {
      this.timeout = 3000;
    }
    jScrape.prototype.frame = function(frame_elem) {
      this.frame_elem = frame_elem;
      return this.frame = new Frame(this.frame_elem);
    };
    return jScrape;
  })();
  $.jScrape = jScrape;
}).call(this);
