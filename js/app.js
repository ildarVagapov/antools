(() => {
  "use strict";
  function e(e) {
    this.type = e;
  }
  (e.prototype.init = function () {
    const e = this;
    (this.оbjects = []),
      (this.daClassname = "_dynamic_adapt_"),
      (this.nodes = document.querySelectorAll("[data-da]"));
    for (let e = 0; e < this.nodes.length; e++) {
      const t = this.nodes[e],
        o = t.dataset.da.trim().split(","),
        n = {};
      (n.element = t),
        (n.parent = t.parentNode),
        (n.destination = document.querySelector(o[0].trim())),
        (n.breakpoint = o[1] ? o[1].trim() : "767"),
        (n.place = o[2] ? o[2].trim() : "last"),
        (n.index = this.indexInParent(n.parent, n.element)),
        this.оbjects.push(n);
    }
    this.arraySort(this.оbjects),
      (this.mediaQueries = Array.prototype.map.call(
        this.оbjects,
        function (e) {
          return (
            "(" + this.type + "-width: " + e.breakpoint + "px)," + e.breakpoint
          );
        },
        this
      )),
      (this.mediaQueries = Array.prototype.filter.call(
        this.mediaQueries,
        function (e, t, o) {
          return Array.prototype.indexOf.call(o, e) === t;
        }
      ));
    for (let t = 0; t < this.mediaQueries.length; t++) {
      const o = this.mediaQueries[t],
        n = String.prototype.split.call(o, ","),
        i = window.matchMedia(n[0]),
        r = n[1],
        s = Array.prototype.filter.call(this.оbjects, function (e) {
          return e.breakpoint === r;
        });
      i.addListener(function () {
        e.mediaHandler(i, s);
      }),
        this.mediaHandler(i, s);
    }
  }),
    (e.prototype.mediaHandler = function (e, t) {
      if (e.matches)
        for (let e = 0; e < t.length; e++) {
          const o = t[e];
          (o.index = this.indexInParent(o.parent, o.element)),
            this.moveTo(o.place, o.element, o.destination);
        }
      else
        for (let e = t.length - 1; e >= 0; e--) {
          const o = t[e];
          o.element.classList.contains(this.daClassname) &&
            this.moveBack(o.parent, o.element, o.index);
        }
    }),
    (e.prototype.moveTo = function (e, t, o) {
      t.classList.add(this.daClassname),
        "last" === e || e >= o.children.length
          ? o.insertAdjacentElement("beforeend", t)
          : "first" !== e
          ? o.children[e].insertAdjacentElement("beforebegin", t)
          : o.insertAdjacentElement("afterbegin", t);
    }),
    (e.prototype.moveBack = function (e, t, o) {
      t.classList.remove(this.daClassname),
        void 0 !== e.children[o]
          ? e.children[o].insertAdjacentElement("beforebegin", t)
          : e.insertAdjacentElement("beforeend", t);
    }),
    (e.prototype.indexInParent = function (e, t) {
      const o = Array.prototype.slice.call(e.children);
      return Array.prototype.indexOf.call(o, t);
    }),
    (e.prototype.arraySort = function (e) {
      "min" === this.type
        ? Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint
              ? e.place === t.place
                ? 0
                : "first" === e.place || "last" === t.place
                ? -1
                : "last" === e.place || "first" === t.place
                ? 1
                : e.place - t.place
              : e.breakpoint - t.breakpoint;
          })
        : Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint
              ? e.place === t.place
                ? 0
                : "first" === e.place || "last" === t.place
                ? 1
                : "last" === e.place || "first" === t.place
                ? -1
                : t.place - e.place
              : t.breakpoint - e.breakpoint;
          });
    });
  new e("max").init();
  let t = (e, t = 500, o = 0) => {
      e.classList.contains("_slide") ||
        (e.classList.add("_slide"),
        (e.style.transitionProperty = "height, margin, padding"),
        (e.style.transitionDuration = t + "ms"),
        (e.style.height = `${e.offsetHeight}px`),
        e.offsetHeight,
        (e.style.overflow = "hidden"),
        (e.style.height = o ? `${o}px` : "0px"),
        (e.style.paddingTop = 0),
        (e.style.paddingBottom = 0),
        (e.style.marginTop = 0),
        (e.style.marginBottom = 0),
        window.setTimeout(() => {
          (e.hidden = !o),
            !o && e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            !o && e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            e.classList.remove("_slide");
        }, t));
    },
    o = (e, t = 500, o = 0) => {
      if (!e.classList.contains("_slide")) {
        e.classList.add("_slide"),
          (e.hidden = !e.hidden && null),
          o && e.style.removeProperty("height");
        let n = e.offsetHeight;
        (e.style.overflow = "hidden"),
          (e.style.height = o ? `${o}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          e.offsetHeight,
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = n + "px"),
          e.style.removeProperty("padding-top"),
          e.style.removeProperty("padding-bottom"),
          e.style.removeProperty("margin-top"),
          e.style.removeProperty("margin-bottom"),
          window.setTimeout(() => {
            e.style.removeProperty("height"),
              e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t);
      }
    },
    n = !0,
    i = (e = 500) => {
      let t = document.querySelector("body");
      if (n) {
        let o = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < o.length; e++) {
            o[e].style.paddingRight = "0px";
          }
          (t.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (n = !1),
          setTimeout(function () {
            n = !0;
          }, e);
      }
    },
    r = (e = 500) => {
      let t = document.querySelector("body");
      if (n) {
        let o = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < o.length; e++) {
          o[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (t.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (n = !1),
          setTimeout(function () {
            n = !0;
          }, e);
      }
    };
  function s(e) {
    setTimeout(() => {
      window.FLS && console.log(e);
    }, 0);
  }
  function a(e, t) {
    const o = Array.from(e).filter(function (e, o, n) {
      if (e.dataset[t]) return e.dataset[t].split(",")[0];
    });
    if (o.length) {
      const e = [];
      o.forEach((o) => {
        const n = {},
          i = o.dataset[t].split(",");
        (n.value = i[0]),
          (n.type = i[1] ? i[1].trim() : "max"),
          (n.item = o),
          e.push(n);
      });
      let n = e.map(function (e) {
        return (
          "(" + e.type + "-width: " + e.value + "px)," + e.value + "," + e.type
        );
      });
      n = (function (e) {
        return e.filter(function (e, t, o) {
          return o.indexOf(e) === t;
        });
      })(n);
      const i = [];
      if (n.length)
        return (
          n.forEach((t) => {
            const o = t.split(","),
              n = o[1],
              r = o[2],
              s = window.matchMedia(o[0]),
              a = e.filter(function (e) {
                if (e.value === n && e.type === r) return !0;
              });
            i.push({ itemsArray: a, matchMedia: s });
          }),
          i
        );
    }
  }
  let l = (e, t = !1, o = 500, n = 0) => {
      const r = document.querySelector(e);
      if (r) {
        let a = "",
          l = 0;
        t &&
          ((a = "header.header"), (l = document.querySelector(a).offsetHeight));
        let c = {
          speedAsDuration: !0,
          speed: o,
          header: a,
          offset: n,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (i(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(r, "", c);
        else {
          let e = r.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: l ? e - l : e, behavior: "smooth" });
        }
        s(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else s(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    },
    c = !1;
  setTimeout(() => {
    if (c) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      let e = document.querySelector(".icon-menu");
      e &&
        e.addEventListener("click", function (e) {
          n &&
            (((e = 500) => {
              document.documentElement.classList.contains("lock") ? i(e) : r(e);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        });
    })(),
    (function () {
      const e = document.querySelectorAll("[data-spollers]");
      if (e.length > 0) {
        const n = Array.from(e).filter(function (e, t, o) {
          return !e.dataset.spollers.split(",")[0];
        });
        n.length && r(n);
        let i = a(e, "spollers");
        function r(e, t = !1) {
          e.forEach((e) => {
            (e = t ? e.item : e),
              t.matches || !t
                ? (e.classList.add("_spoller-init"),
                  s(e),
                  e.addEventListener("click", l))
                : (e.classList.remove("_spoller-init"),
                  s(e, !1),
                  e.removeEventListener("click", l));
          });
        }
        function s(e, t = !0) {
          const o = e.querySelectorAll("[data-spoller]");
          o.length > 0 &&
            o.forEach((e) => {
              t
                ? (e.removeAttribute("tabindex"),
                  e.classList.contains("_spoller-active") ||
                    (e.nextElementSibling.hidden = !0))
                : (e.setAttribute("tabindex", "-1"),
                  (e.nextElementSibling.hidden = !1));
            });
        }
        function l(e) {
          const n = e.target;
          if (n.closest("[data-spoller]")) {
            const i = n.closest("[data-spoller]"),
              r = i.closest("[data-spollers]"),
              s = !!r.hasAttribute("data-one-spoller");
            r.querySelectorAll("._slide").length ||
              (s && !i.classList.contains("_spoller-active") && c(r),
              i.classList.toggle("_spoller-active"),
              ((e, n = 500) => {
                e.hidden ? o(e, n) : t(e, n);
              })(i.nextElementSibling, 500)),
              e.preventDefault();
          }
        }
        function c(e) {
          const o = e.querySelector("[data-spoller]._spoller-active");
          o &&
            (o.classList.remove("_spoller-active"),
            t(o.nextElementSibling, 500));
        }
        i &&
          i.length &&
          i.forEach((e) => {
            e.matchMedia.addEventListener("change", function () {
              r(e.itemsArray, e.matchMedia);
            }),
              r(e.itemsArray, e.matchMedia);
          });
      }
    })(),
    (function () {
      function e(e) {
        if ("click" === e.type) {
          const t = e.target;
          if (t.closest("[data-goto]")) {
            const o = t.closest("[data-goto]"),
              n = o.dataset.goto ? o.dataset.goto : "",
              i = !!o.hasAttribute("data-goto-header"),
              r = o.dataset.gotoSpeed ? o.dataset.gotoSpeed : "500";
            l(n, i, r), e.preventDefault();
          }
        } else if ("watcherCallback" === e.type && e.detail) {
          const t = e.detail.entry,
            o = t.target;
          if ("navigator" === o.dataset.watch) {
            const e = o.id,
              n =
                (document.querySelector("[data-goto]._navigator-active"),
                document.querySelector(`[data-goto="${e}"]`));
            t.isIntersecting
              ? n && n.classList.add("_navigator-active")
              : n && n.classList.remove("_navigator-active");
          }
        }
      }
      document.addEventListener("click", e),
        document.addEventListener("watcherCallback", e);
    })();
})();
