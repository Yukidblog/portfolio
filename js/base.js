"use strict";

(function (a) {
  var b = function () {
      c.add();
    },
    c = {
      add: function () {
        /*a(".slider").length &&
          a(".slider").each(function () {
            d.slider(this);
          }),*/
        a('a[href^="#"]').on("click", function (a) {
          d.pageScr(a);
        }),
          a(".hamburger").on("click", function () {
            d.hamburger(this);
          }),
          a(".gnav-list-item")
            .children("a")
            .on("click", function () {
              d.menuClose();
            }),
          d.headerSpace(),
          d.scrollSideNav(), // 20251001追加
          a(".matchHeight").length && d.mh(),
          a(".object-fit").length && d.of(),
          a(".footer-sitemap-main-item")
            .children(".noLink")
            .each(function () {
              a(this).on("click", function (a) {
                d.footerAccordion(a, this);
              });
            });
      },
    },
    d = {
      slider: function (b) {
        a(b).slick({
          arrows: !1,
          autoplay: !0,
          cssEase: "linear",
          fade: !0,
          speed: 1e3,
          dots: !0,
          pauseOnHover: !1,
        });
      },
      pageScr: function (b) {
        b.preventDefault();
        var c,
          d = a(b.currentTarget).attr("href");
        "#" === d
          ? a("body,html").animate({ scrollTop: 0 }, 400)
          : ((c = a(d).offset().top),
            a("body,html").animate({ scrollTop: c - 40 }, 400));
      },
      pagetopBtn: function () {
        var b,
          c = a(".pagetop");
        a(window).on("scroll", function () {
          (b = a(window).scrollTop()),
            500 < b ? c.stop().fadeIn() : c.stop().fadeOut();
        });
      },
      hamburger: function (b) {
        var c = a("#gnav-bg"),
          d = a("#gnav");
        a(b).toggleClass("is-active"),
          c.toggleClass("is-active"),
          d.toggleClass("is-active");
      },
      menuClose: function () {
        var b = a("#gnav");
        a(".hamburger").removeClass("is-active"), b.removeClass("is-active");
      },
      headerSpace: function () {
        var b = a("#js-header"),
          c = b.outerHeight();
        a("body").css("padding-top", c);
      },
      mh: function () {
        a(".matchHeight").matchHeight();
      },
      of: function () {
        var b = a(".object-fit").find("img");
        objectFitImages(b);
      },
      footerAccordion: function (b, c) {
        b.preventDefault();
        var d = a(c);
        d.toggleClass("is-open"),
          d.next(".footer-sitemap-main-accordion").stop().slideToggle(300);
      },
      /*---202501001追加---*/
      scrollSideNav: function () {
        var sideNav = a(".side-nav");
        var triggerPoint = 300;

        function toggleNav() {
          var scrollTop = a(window).scrollTop();
          if (scrollTop > triggerPoint) {
            sideNav.addClass("is-visible");
          } else {
            sideNav.removeClass("is-visible");
          }
        }

        a(window).on("scroll", toggleNav);
        toggleNav(); // 初期判定を即実行
      },
    };
  a(window).on("load", function () {
    window.scrollTo(0, 0); // ←202501001追加 スクロール位置をトップにリセット
    b(); // ← 初期化関数呼び出し
  });
})(jQuery);
