const baseUrl = "https://cdn.jsdelivr.net/gh/35538239053/535353@3553482";
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: PuSet.gTranslate.pageLang,
    includedLanguages: PuSet.gTranslate.includedLangs,
    autoDisplay: PuSet.gTranslate.autoDisplay,
    multilanguagePage: PuSet.gTranslate.multiLangPage,
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, "google_translate_element");
}

function puViews() {
    if (PuSet.realViews.databaseUrl != "" && getid("fb-db") != null && firebase.apps.length > 0) {
        for (var n = qSell(".pu-views"), u = firebase.database(), d = 0; d < n.length; d++) {
            var a = n[d];
            var r = a.getAttribute("data-id");
            (r = u.ref("BlogID_" + blogID + "/PostID_" + r)).once("value", function(u, d) {
                return function(e) {
                    if ((e = e.exists() ? e.val() : 0) > 0) {
                        if (PuSet.realViews.abbreviation == "true") {
                            u.setAttribute("data-text", Pu.abv(e));
                        } else {
                            u.setAttribute("data-text", e);
                        }
                        remCt(u, "hidden");
                    }
                    if (u.getAttribute("data-add") == "true") {
                        u.setAttribute("data-add", false);
                        e = parseInt(e) + 1;
                        d.set(e);
                    }
                };
            }(a, r));
        }
    }
}

function blogAdmin() {
  if (qSel("#maintainCont") != null) {
    addCt(qSel("#maintainCont"), "hdn");
  }
}
var aryLzJs = [];
function loadLzJs() {
  var t;
  var n;
  aryLzJs.push(1);
  ldJs(baseUrl + "/js/AdditionalJavascripts.min.js", "adtnl-js", false, "body", function () {
    if (qSel("#themeBtn") != null) {
      ldCss(baseUrl + "/css/ThemeColor.min.css", "thmC-css");
    }
  });
  
  Defer(function () {
    var _0x21f223 = "TutoriaLines";
    var _0x35fdb2 = "www.tutorialines.com";
    console.log("Licensed to: " + _0x21f223 + " Licensed for: " + _0x35fdb2);
  }, 0);
  if (typeof PuSet.license.licenseKey != null) {
    if (isSingleItem == "true") {
      ldJs(baseUrl + "/js/CopyPreContent.min.js", "pre-js", true, "body");
    }
    ldJs(baseUrl + "/js/NoInternetWidget.min.js", "noInt-js", true, "body");
    if (isSingleItem == "true") {
      t = qSell("#postToc, #autoToc");
      n = qSell("#postBody h1, #postBody h2, #postBody h3, #postBody h4, #postBody h5, #postBody h6");
      if (t.length > 0 && n.length > 0) {
        ldJs(baseUrl + "/js/TableOfContents.min.js", "toc-js", true, "head", function () {
          ldCss(baseUrl + "/css/TableOfContents.min.css", "toc-css", function () {
            if (qSel("#postToc") != null) {
              new TableOfContents({
                from: qSel("#postBody"),
                to: qSel("#postToc")
              }).generateToc();
            }
            if (qSel("#autoToc") != null) {
              new TableOfContents({
                from: qSel("#postBody"),
                to: qSel("#autoToc")
              }).generateToc();
            }
          });
        });
      }
    }
	
	 Defer(function () {
      function e() {
        dataLayer.push(arguments);
      }
      var u;
      if (qSel(".gTrans") != null) {
        ldJs(baseUrl + "/js/GoogleTranslate.min.js", "gt-js", true, "body", function () {
          setTimeout(function () {
            if (getclass("goog-te-gadget-simple")[0] != null) {
              remCt(qSel(".isTrans"), "hidden");
            }
          }, 0);
        });
      }
	  
	  ldCss("https://www.blogger.com/dyn-css/authorization.css?targetBlogID=" + blogID, "auth-css", function () {
        var e = qSel("#admCk");
        if (e != null && window.getComputedStyle(e).display == "block") {
          blogAdmin();
        }
      });
      if (qSell(".dldCo").length > 0) {
        ldJs(baseUrl + "/js/CountdownDownloadBox.min.js", "cdb-js", true, "body", function () {
          ldCss(baseUrl + "/css/CountdownDownloadBox.min.css", "cdb-css");
        });
      }
      if (qSel("#musicPlayer") != null) {
        ldJs(baseUrl + "/lib/vue-2.6.11.min.js", "vue-js", true, "body", function () {
          ldCss(baseUrl + "/css/MusicPlayer.min.css", "msp-css", function () {
            ldJs(baseUrl + "/js/MusicPlayer.min.js", "msp-js", true, "body");
          });
        });
      }
      if (qSell("div.hl pre").length > 0) {
        ldJs(baseUrl + "/lib/highlight-11.5.0.min.js", "hl-js", true, "body", function () {
          qSell("div.hl pre").forEach(e => {
            hljs.highlightElement(e);
          });
        });
      }
      if (isPost == "true" && isPrivateBlog != "true") {
        if (qSel("#rPst") != null) {
          ldCss(baseUrl + "/css/RelatedPosts.min.css", "rPst-css", function () {
            ldJs(baseUrl + "/js/RelatedPosts.min.js", "rPst-js", true, "body");
          });
        }
        if (qSel("#aRel") != null) {
          ldJs(baseUrl + "/js/AutoRelated.min.js", "aRel-js", true, "body");
        }
        if (qSel("#aChp") != null) {
          ldJs(baseUrl + "/js/AutoChapters.min.js", "aChp-js", true, "body");
        }
      }
	  
	  if (PuSet.analytics.propertyID != "") {
        (u = document.createElement("script")).src = "https://www.googletagmanager.com/gtag/js?id=" + PuSet.analytics.propertyID;
        document.body.appendChild(u);
        window.dataLayer = window.dataLayer || [];
         __DECODE_0__(new Date() - 939, "js");
         __DECODE_0__(PuSet.analytics.propertyID - 939, t(631, 590));
      }
      if (PuSet.realViews.databaseUrl != "") {
        ldJs("https://www.gstatic.com/firebasejs/8.4.2/firebase-app.js", "fb-app", true, "head", function () {
          ldJs("https://www.gstatic.com/firebasejs/8.4.2/firebase-database.js", "fb-db", true, "head", function () {
            var t = qSell(".pu-views");
            var n = {
              databaseURL: PuSet.realViews.databaseUrl
            };
            firebase.initializeApp(n);
            for (var d = firebase.database(), a = 0; a < t.length; a++) {
              var r = t[a];
              var s = r.getAttribute("data-id");
              (s = d.ref("BlogID_" + blogID + "/PostID_" + s)).once("value", function (u, _0x43779d) {
                return function (e) {
                  if ((e = e.exists() ? e.val() : 0) > 0) {
                    if (PuSet.realViews.abbreviation == "true") {
                      u.setAttribute("data-text", Pu.abv(e));
                    } else {
                      u.setAttribute("data-text", e);
                    }
                    remCt(u, "hidden");
                  }
                  if (u.getAttribute("data-add") == "true") {
                      u.setAttribute("data-add", false);
                      e = parseInt(e) + 1;
                      d.set(e);
                  }
                };
              }(r, s));
            }
          });
        });
      }
    }, 100);
	
	setTimeout(function () {
      if (qSel(".isBkm") != null) {
        ldJs(baseUrl + "/js/BookmarkPosts.min.js", "bkm-js", true, "body", function () {
          ldCss(baseUrl + "/css/BookmarkPosts.min.css", "bkm-css");
        });
      }
    }, 0);
    if (isError != "true") {
      if (PuSet.adsenseAds.loadType == "lazy") {
        ldJs(baseUrl + "/js/AdsenseAds.min.js", "adstr-js", true, "body");
      } else if (PuSet.adsenseAds.loadType == "defer") {
        Defer.js(baseUrl + "/js/AdsenseAds.min.js", "adstr-js");
      }
    }
    lazyCustomJs();
  }
}

var aryLzJsM = [];
function loadLzJsM() {
  var e;
  var t;
  aryLzJsM.push(1);
  if (isMobile == "true" && PuSet.fontFamily.mobileFonts != "") {
    (t = (e = document).createElement("style")).id = "styleFonts";
     t.textContent = PuSet.fontFamily.mobileFonts;
     e.getElementsByTagName("head")[0].appendChild(t);
  }
}
var lazyJs = false;
Defer.dom(".lazy", 0, "loaded", null, {
  rootMargin: "1px"
});
if (typeof infinite_scroll != "undefined") {
  infinite_scroll.on("load", function () {
    Defer.dom(".lazy", 0, "loaded", null, {
      rootMargin: "1px"
    });
  });
}

 qSel("body").addEventListener("click", e => {
  if (aryLzJs.length == 0 && Pu.gLS("Lz_Js") == null) {
    loadLzJs();
    Pu.sLS("Lz_Js", 1);
  }
  if (aryLzJsM.length == 0 && Pu.gLS("Lz_JsM") == null) {
    loadLzJsM();
    Pu.sLS("Lz_JsM", 1);
  }
});
if (Pu.gLS("Lz_Js")) {
  loadLzJs();
}
if (Pu.gLS("Lz_JsM")) {
  loadLzJsM();
}
Defer.dom(".lazy", 0, "loaded", null, {
  rootMargin: "1px"
});
if (typeof infinite_scroll != "undefined") {
  infinite_scroll.on("load", function () {
    Defer.dom(".lazy", 0, "loaded", null, {
      rootMargin: "1px"
    });
  });
}

   !function (_0x378857, _0x45903e) {
  'use strict';

  if (typeof define == "function" && define.amd) {
    define([], _0x45903e);
  } else if (typeof exports == "object") {
    module.exports = _0x45903e();
  } else {
    _0x378857.Imgur = _0x45903e();
  }
}(this, function () {
  'use strict';

  var _0x58d4e4 = function (_0x3656fb) {
    if (!(this && this instanceof _0x58d4e4)) {
      return new _0x58d4e4(_0x3656fb);
    }
    if (!(_0x3656fb = _0x3656fb || {}).clientid) {
      throw "Provide a valid Client Id here: https://api.imgur.com/";
    }
    this.clientid = _0x3656fb.clientid;
    this.endpoint = "https://api.imgur.com/3/image";
    this.callback = _0x3656fb.callback || undefined;
    this.dropzone = document.querySelectorAll(".dropzone");
    this.infoimg = document.querySelectorAll(".infoimg");
    this.run();
  };
  
  _0x58d4e4.prototype = {
    createEls: function (_0x2cbacb, _0x2f4141, _0x5d9304) {
      var _0x1ac09a;
      var _0x15f408 = document.createElement(_0x2cbacb);
      for (_0x1ac09a in _0x2f4141) {
        if (_0x2f4141.hasOwnProperty(_0x1ac09a)) {
          _0x15f408[_0x1ac09a] = _0x2f4141[_0x1ac09a];
        }
      }
      if (_0x5d9304) {
        _0x15f408.appendChild(document.createTextNode(_0x5d9304));
      }
      return _0x15f408;
    },
    insertAfter: function (_0x9452a1, _0x5a49c9) {
      _0x9452a1.parentNode.insertBefore(_0x5a49c9, _0x9452a1.nextSibling);
    },
    post: function (_0x2045a8, _0x2bf423, _0x3a4604) {
      var _0x4fe5ad = new XMLHttpRequest();
      _0x4fe5ad.open("POST", _0x2045a8, true);
      _0x4fe5ad.setRequestHeader("Authorization", "Client-ID " + this.clientid);
      _0x4fe5ad.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (!(this.status >= 200 && this.status < 300)) {
            throw new Error(this.status + " - " + this.statusText);
          }
          var _0x4b8d04 = "";
          try {
            _0x4b8d04 = JSON.parse(this.responseText);
          } catch (_0x5bf085) {
            _0x4b8d04 = this.responseText;
          }
          _0x3a4604.call(window, _0x4b8d04);
        }
      };
      _0x4fe5ad.send(_0x2bf423);
      _0x4fe5ad = null;
    },
    createDragZone: function () {
      var _0x18a9a1 = this.createEls("p", {}, PuSet.imgur.imageClickMes);
      var _0x4ccd4e = this.createEls("p", {}, PuSet.imgur.imageClickAltMes);
      var _0x178783 = this.createEls("input", {
        type: "file",
        className: "ImgurInput",
        accept: "image/*"
      });
      Array.prototype.forEach.call(this.infoimg, function (_0x20f9e1) {
        _0x20f9e1.appendChild(_0x18a9a1);
        _0x20f9e1.appendChild(_0x4ccd4e);
      }.bind(this));
      Array.prototype.forEach.call(this.dropzone, function (_0x35015c) {
        _0x35015c.appendChild(_0x178783);
        this.status(_0x35015c);
        this.upload(_0x35015c);
      }.bind(this));
    },
    loading: function () {
      var _0x685147 = this.createEls("div", {
        className: "Ldm"
      });
      var _0x513340 = this.createEls("table", {
        className: "Ldt"
      });
      var _0x23d3be = this.createEls("img", {
        className: "loading-image",
        src: "https://firebasestorage.googleapis.com/v0/b/huydc-090288.appspot.com/o/Images%20Upload%2Floading-spin.svg?alt=media&token=8a1fd8dc-30b2-4b74-acc6-9e4ce55a89b0"
      });
      _0x685147.appendChild(_0x513340);
      _0x513340.appendChild(_0x23d3be);
      document.body.appendChild(_0x685147);
    },
    status: function (_0x58e0c3) {
      var _0x3fc2ea = this.createEls("div", {
        className: "Imgurstatus"
      });
      this.insertAfter(_0x58e0c3, _0x3fc2ea);
    },
    matchFiles: function (_0x59eacb, _0x1f1468) {
      var _0x43f22e = _0x1f1468.nextSibling;
      if (_0x59eacb.type.match(/image/) && _0x59eacb.type !== "image/svg+xml") {
        document.body.classList.add("Ldr");
        _0x43f22e.classList.remove("Success", "bg-danger");
        _0x43f22e.innerHTML = "";
        (_0x1f1468 = new FormData()).append("image", _0x59eacb);
        this.post(this.endpoint, _0x1f1468, function (_0x315061) {
          document.body.classList.remove("Ldr");
          if (typeof this.callback == "function") {
            this.callback.call(this, _0x315061);
          }
        }.bind(this));
      } else {
        _0x43f22e.classList.remove("Success");
        _0x43f22e.classList.add("bg-danger");
        _0x43f22e.innerHTML = "Invalid archive";
      }
    },
    upload: function (_0x1f7c63) {
      var _0x5032af;
      var _0x9d9a50;
      var _0x47fb01;
      var _0x2e3a55;
      _0x1f7c63.addEventListener("change", function (_0x2b5420) {
        if (_0x2b5420.target && _0x2b5420.target.nodeName === "INPUT" && _0x2b5420.target.type === "file") {
          _0x9d9a50 = _0x2b5420.target.files;
          _0x47fb01 = 0;
          _0x2e3a55 = _0x9d9a50.length;
          for (; _0x47fb01 < _0x2e3a55; _0x47fb01 += 1) {
            _0x5032af = _0x9d9a50[_0x47fb01];
            this.matchFiles(_0x5032af, _0x1f7c63);
          }
        }
      }.bind(this), false);
      ["dragenter", "dragleave", "dragover", "drop"].map(function (_0x2be033) {
        _0x1f7c63.addEventListener(_0x2be033, function (_0x5a8474) {
          if (_0x5a8474.target && _0x5a8474.target.nodeName === "INPUT" && _0x5a8474.target.type === "file") {
            if (_0x2be033 === "dragleave" || _0x2be033 === "drop") {
              _0x5a8474.target.parentNode.classList.remove("dropzone-dragging");
            } else {
              _0x5a8474.target.parentNode.classList.add("dropzone-dragging");
            }
          }
        }, false);
      });
    },
    run: function () {
      if (!document.querySelector(".Ldm")) {
        this.loading();
      }
      this.createDragZone();
    }
  };
  return _0x58d4e4;
});
var feedback = function (_0x2de18d) {
  if (_0x2de18d.success === true) {
    _0x2de18d = _0x2de18d.data.link.replace(/^http:\/\//i, "https://");
    document.querySelector(".Imgurstatus").classList.add("Success");
    document.querySelector(".Imgurstatus").innerHTML = "<div class=\"linkimg\"><input class=\"image-url\" id=\"copyrahlinkimg\" onclick=\"this.select()\" value=\"" + _0x2de18d + "\"/></div><div class=\"showimg\"><img class=\"img fullN\" alt=\"" + PuSet.imgur.altImageMes + "\" src=\"" + _0x2de18d + "\"/></div>";
  }
  rahtoastNt(PuSet.imgur.imgurMes);
  rahVoice(PuSet.imgur.imgurVoiceMes);
  vibRate(53);
};
new Imgur({
  clientid: PuSet.imgur.clientID,
  callback: feedback
});
