/* ============================================================
   BHOJRAJ KAMDI — INTERACTION SCRIPT
   Menu focus, archive filtering, record disclosure, copy-email,
   carousels, reveal, scrollspy and print handling.
   ============================================================ */

(function () {
  "use strict";

  var doc = document;

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(pointer: fine)").matches;

  /* ---------- Footer year ---------- */
  var yearEl = doc.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Topbar scrolled state ---------- */
  var topbar = doc.getElementById("topbar");
  function onScroll() {
    if (!topbar) return;
    topbar.classList.toggle("scrolled", window.scrollY > 10);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ----------
     The CSS makes visibility flip immediately on open, so focus can move
     into the panel in the same frame. Opening is still animated; closing
     delays visibility until the fade finishes. */
  var toggle = doc.getElementById("navToggle");
  var menu = doc.getElementById("mobileMenu");

  function menuIsOpen() {
    return !!(menu && menu.classList.contains("open"));
  }

  function menuFocusables() {
    if (!menu) return [];
    return [].slice.call(menu.querySelectorAll("a[href], button:not([disabled])"));
  }

  function closeMenu(restoreFocus) {
    if (!menu || !toggle) return;
    menu.classList.remove("open");
    if (topbar) topbar.classList.remove("menu-is-open");
    doc.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    if (restoreFocus) {
      try { toggle.focus(); } catch (e) {}
    }
  }

  function openMenu() {
    if (!menu || !toggle) return;
    menu.classList.add("open");
    if (topbar) topbar.classList.add("menu-is-open");
    doc.body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");

    // Force layout so the panel is painted and visible before focus moves.
    void menu.offsetWidth;

    var first = menu.querySelector("a[href], button:not([disabled])");
    if (first) {
      try { first.focus(); } catch (e) {}
    }
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      if (menuIsOpen()) closeMenu(true);
      else openMenu();
    });

    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { closeMenu(false); });
    });

    doc.addEventListener("keydown", function (e) {
      if (!menuIsOpen()) return;

      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu(true);
        return;
      }

      if (e.key !== "Tab") return;
      var items = menuFocusables();
      if (!items.length) return;
      var first = items[0];
      var last = items[items.length - 1];

      if (e.shiftKey && (doc.activeElement === first || !menu.contains(doc.activeElement))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (doc.activeElement === last || !menu.contains(doc.activeElement))) {
        e.preventDefault();
        first.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 980 && menuIsOpen()) closeMenu(false);
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = [].slice.call(doc.querySelectorAll(".rv"));
  function rvDone(el) { el.style.willChange = "auto"; }

  if ("IntersectionObserver" in window && !reducedMotion) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var t = entry.target;
          t.classList.add("in");
          t.addEventListener("transitionend", function () { rvDone(t); }, { once: true });
          observer.unobserve(t);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );
    revealEls.forEach(function (el) {
      el.addEventListener("transitionend", function () { rvDone(el); }, { once: true });
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); rvDone(el); });
  }

  /* ---------- Accordions (archive records) ----------
     Each button toggles its nearest .acc-item. The content lives inside
     an open record disclosure, so there is no hidden duplicate on Home. */
  var accBtns = doc.querySelectorAll("[data-acc-btn]");
  accBtns.forEach(function (btn) {
    var item = btn.closest(".acc-item");
    if (!item) return;
    btn.addEventListener("click", function () {
      var open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  /* ---------- Archive filtering ----------
     Chips filter records in the same section. Counts are derived from the
     DOM rather than hard-coded, so the live count always matches. */
  function updateArchiveCount(scope, value) {
    var countEl = scope.querySelector("[data-archive-count]");
    if (!countEl) return;
    var total = scope.querySelectorAll(".record[data-cat]").length;
    var shown = scope.querySelectorAll(".record[data-cat]:not([hidden])").length;
    countEl.textContent = value === "all"
      ? total + " records total"
      : shown + " of " + total + " records";
  }

  var chips = doc.querySelectorAll("[data-filter]");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      var scope = chip.closest("section") || doc;
      var value = chip.getAttribute("data-filter");

      scope.querySelectorAll("[data-filter]").forEach(function (c) {
        c.setAttribute("aria-pressed", c === chip ? "true" : "false");
      });

      scope.querySelectorAll(".record[data-cat]").forEach(function (row) {
        var show = value === "all" || row.getAttribute("data-cat") === value;
        if (show) row.removeAttribute("hidden");
        else row.setAttribute("hidden", "");
      });

      updateArchiveCount(scope, value);
    });
  });

  /* ---------- Record links ----------
     Index links and direct hashes open the record's disclosure before the
     browser scrolls. If a filter is hiding the target, reset to All. */
  function openRecord(id) {
    if (!/^p\d{2}$/.test(id)) return null;
    var target = doc.getElementById(id);
    if (!target) return null;

    if (target.hasAttribute("hidden")) {
      var allChip = doc.querySelector('[data-filter="all"]');
      if (allChip) allChip.click();
    }

    var details = target.querySelector("details.rec-details");
    if (details && !details.open) details.open = true;
    return target;
  }

  function openRecordFromHash() {
    var id = window.location.hash.replace("#", "");
    var target = openRecord(id);
    if (!target) return;
    window.setTimeout(function () {
      target.scrollIntoView({ block: "start" });
    }, 0);
  }

  doc.addEventListener("click", function (e) {
    var link = e.target.closest ? e.target.closest('a[href^="#p"]') : null;
    if (!link) return;
    openRecord(link.getAttribute("href").slice(1));
  });

  window.addEventListener("hashchange", openRecordFromHash);
  if (window.location.hash) openRecordFromHash();

  /* ---------- Copy email ---------- */
  function legacyCopy(text) {
    var area = doc.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.top = "-1000px";
    area.style.opacity = "0";
    doc.body.appendChild(area);
    area.select();
    var ok = false;
    try { ok = doc.execCommand("copy"); } catch (e) { ok = false; }
    doc.body.removeChild(area);
    return ok;
  }

  doc.querySelectorAll("[data-copy-email]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy-email");
      var wrap = btn.parentNode;
      var status = wrap ? wrap.querySelector(".copy-status") : null;
      var label = btn.querySelector("[data-copy-label]");
      if (!text) return;

      function done(ok) {
        if (status) {
          status.textContent = ok
            ? "Email address copied to clipboard."
            : "Copy failed — select the address manually.";
          status.setAttribute("data-state", ok ? "ok" : "error");
        }
        if (label) {
          label.textContent = ok ? "Copied" : "Copy";
        }
        window.setTimeout(function () {
          if (label) label.textContent = "Copy";
        }, 2200);
      }

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(function () { done(true); }, function () {
          done(legacyCopy(text));
        });
      } else {
        done(legacyCopy(text));
      }
    });
  });

  /* ---------- IN PRACTICE slideshows ---------- */
  var DURATION = 2500;
  var TRANSITION = 750;

  function ipPreload(stage, i) {
    var slides = stage._ip.slides;
    var n = slides.length;
    if (!n) return;
    var img = slides[((i % n) + n) % n].querySelector("img");
    if (img && !img.complete) {
      var preloader = new Image();
      preloader.src = img.currentSrc || img.src;
    }
  }

  function ipRender(stage) {
    var st = stage._ip;
    var slides = st.slides;
    var n = slides.length;
    if (!n) return;

    slides.forEach(function (s, k) {
      var on = k === st.idx;
      s.classList.toggle("active", on);
      if (!on) s.classList.remove("is-leaving");
      s.setAttribute("aria-hidden", on ? "false" : "true");
    });

    var box = stage.parentNode;
    var count = box.querySelector(".ip-count");
    if (count) {
      count.textContent = String(st.idx + 1).padStart(2, "0") + " / " + String(n).padStart(2, "0");
    }

    var dots = box.querySelectorAll(".ip-dots button");
    dots.forEach(function (d, k) {
      d.setAttribute("aria-selected", k === st.idx ? "true" : "false");
      d.setAttribute("aria-label", "Slide " + (k + 1) + " of " + n);
    });

    var bar = box.querySelector(".ip-progress i");
    if (bar) {
      bar.style.transition = "none";
      bar.style.width = "0%";
      void bar.offsetWidth;
      if (st.playing && !reducedMotion) {
        bar.style.transition = "width " + DURATION + "ms linear";
        bar.style.width = "100%";
      }
    }

    ipPreload(stage, st.idx + 1);
  }

  function ipGo(stage, i, animate) {
    var st = stage._ip;
    var n = st.slides.length;
    if (!n || st.locked) return;
    var target = ((i % n) + n) % n;
    if (target === st.idx) return;

    var prev = st.slides[st.idx];
    var box = stage.parentNode;
    var cap = box.parentNode.querySelector(".ip-cap");

    if (animate === false) {
      st.idx = target;
      ipRender(stage);
      return;
    }

    st.locked = true;
    prev.classList.remove("active");
    prev.classList.add("is-leaving");
    prev.setAttribute("aria-hidden", "true");
    if (cap) cap.classList.add("is-switching");

    setTimeout(function () {
      prev.classList.remove("is-leaving");
      st.idx = target;
      ipRender(stage);
      if (cap) {
        void cap.offsetWidth;
        cap.classList.remove("is-switching");
      }
      setTimeout(function () { st.locked = false; }, TRANSITION);
    }, 60);
  }

  var IP_ICON_PLAY = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M8 5l11 7-11 7V5z"/></svg>';
  var IP_ICON_PAUSE = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M9 5v14M15 5v14"/></svg>';

  function ipStop(stage, silent) {
    var st = stage._ip;
    if (st.timer) { clearInterval(st.timer); st.timer = null; }
    st.playing = false;
    stage.classList.remove("playing");

    var box = stage.parentNode;
    var bar = box.querySelector(".ip-progress i");
    if (bar) { bar.style.transition = "none"; bar.style.width = "0%"; }
    if (silent) return;

    var pb = box.querySelector("[data-ip-pause]");
    if (pb) {
      pb.setAttribute("aria-label", "Play slideshow");
      pb.setAttribute("aria-pressed", "true");
      pb.innerHTML = IP_ICON_PLAY;
    }
    var badge = stage.querySelector("[data-ip-paused]");
    if (badge) badge.removeAttribute("hidden");
  }

  function ipPlay(stage) {
    var st = stage._ip;
    if (reducedMotion) { ipStop(stage); return; }
    if (st.userPaused || doc.hidden || !st.visible) return;

    st.playing = true;
    stage.classList.add("playing");

    var box = stage.parentNode;
    var pb = box.querySelector("[data-ip-pause]");
    if (pb) {
      pb.setAttribute("aria-label", "Pause slideshow");
      pb.setAttribute("aria-pressed", "false");
      pb.innerHTML = IP_ICON_PAUSE;
    }

    var badge = stage.querySelector("[data-ip-paused]");
    if (badge) badge.setAttribute("hidden", "");

    if (st.timer) clearInterval(st.timer);
    ipRender(stage);
    st.timer = setInterval(function () {
      if (!st.locked) ipGo(stage, st.idx + 1);
    }, DURATION);
  }

  function ipPauseToggle(stage) {
    if (stage._ip.playing) {
      stage._ip.userPaused = true;
      ipStop(stage);
    } else {
      stage._ip.userPaused = false;
      ipPlay(stage);
    }
  }

  var ipStages = [].slice.call(doc.querySelectorAll("[data-ip]"));
  ipStages.forEach(function (stage) {
    var slides = [].slice.call(stage.querySelectorAll(".ip-slide"));
    stage._ip = {
      slides: slides,
      idx: 0,
      timer: null,
      playing: false,
      locked: false,
      userPaused: false,
      visible: true
    };

    var box = stage.parentNode;
    var dotsWrap = box.querySelector(".ip-dots");
    if (dotsWrap && !dotsWrap.children.length) {
      slides.forEach(function (s, k) {
        var d = doc.createElement("button");
        d.setAttribute("role", "tab");
        d.setAttribute("aria-selected", k === 0 ? "true" : "false");
        d.setAttribute("aria-label", "Slide " + (k + 1) + " of " + slides.length);
        d.addEventListener("click", function () {
          stage._ip.userPaused = false;
          ipGo(stage, k);
          ipPlay(stage);
        });
        dotsWrap.appendChild(d);
      });
    }

    function go(d) {
      stage._ip.userPaused = false;
      ipGo(stage, stage._ip.idx + d);
      ipPlay(stage);
    }

    var prev = box.querySelector("[data-ip-prev]");
    var next = box.querySelector("[data-ip-next]");
    var pause = box.querySelector("[data-ip-pause]");
    if (prev) prev.addEventListener("click", function () { go(-1); });
    if (next) next.addEventListener("click", function () { go(1); });
    if (pause) pause.addEventListener("click", function () { ipPauseToggle(stage); });

    stage.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
      else if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
      else if (e.key === " ") { e.preventDefault(); ipPauseToggle(stage); }
    });

    box.addEventListener("mouseenter", function () { if (stage._ip.playing) ipStop(stage); });
    box.addEventListener("mouseleave", function () { if (!stage._ip.userPaused) ipPlay(stage); });
    box.addEventListener("focusin", function () { if (stage._ip.playing) ipStop(stage); });
    box.addEventListener("focusout", function (e) {
      if (!box.contains(e.relatedTarget) && !stage._ip.userPaused) ipPlay(stage);
    });

    var tx = null;
    stage.addEventListener("touchstart", function (e) { tx = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener("touchend", function (e) {
      if (tx === null) return;
      var dx = e.changedTouches[0].clientX - tx;
      tx = null;
      if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    }, { passive: true });

    stage._ip.idx = 0;
    ipRender(stage);
    ipPlay(stage);
  });

  if ("IntersectionObserver" in window && ipStages.length) {
    var ipIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var stage = en.target._ip ? en.target : null;
        if (!stage) return;
        stage._ip.visible = en.isIntersecting;
        if (en.isIntersecting) {
          if (!stage._ip.userPaused) ipPlay(stage);
        } else {
          ipStop(stage, true);
        }
      });
    }, { threshold: 0.2 });
    ipStages.forEach(function (s) { ipIO.observe(s); });
  }

  doc.addEventListener("visibilitychange", function () {
    ipStages.forEach(function (s) {
      if (doc.hidden) ipStop(s, true);
      else if (!s._ip.userPaused && s._ip.visible) ipPlay(s);
    });
  });

  /* ---------- Print ----------
     Records are collapsed by default. Open every disclosure for printing
     and restore the reader's previous state afterwards. */
  var printState = [];
  window.addEventListener("beforeprint", function () {
    printState = [];
    doc.querySelectorAll("details.rec-details").forEach(function (d) {
      printState.push([d, d.open]);
      d.open = true;
    });
  });
  window.addEventListener("afterprint", function () {
    printState.forEach(function (pair) { pair[0].open = pair[1]; });
    printState = [];
  });

  /* ---------- Scrollspy ---------- */
  (function scrollspy() {
    var links = [].slice.call(doc.querySelectorAll(".nav a[href^='#']"));
    if (!links.length || !("IntersectionObserver" in window)) return;

    var byId = {};
    links.forEach(function (a) {
      var id = a.getAttribute("href").slice(1);
      var sec = id && doc.getElementById(id);
      if (!sec) return;
      if (!byId[id]) byId[id] = { sec: sec, links: [] };
      byId[id].links.push(a);
    });

    var ids = Object.keys(byId);
    if (!ids.length) return;

    function clear() {
      links.forEach(function (a) { a.removeAttribute("aria-current"); });
    }

    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        clear();
        (byId[en.target.id].links || []).forEach(function (a) {
          a.setAttribute("aria-current", "page");
        });
      });
    }, { rootMargin: "-42% 0px -52% 0px", threshold: 0 });

    ids.forEach(function (id) { spy.observe(byId[id].sec); });
  })();

  /* ---------- Launch QA ---------- */
  var html = doc.documentElement.outerHTML;
  var issues = [];
  if (html.indexOf("bhojraj@bhojrajkamdi.com") !== -1) issues.push("Stale placeholder email present: bhojraj@bhojrajkamdi.com");
  if (html.indexOf("linkedin.com/in/bhojraj-kamdi") !== -1) issues.push("Stale placeholder LinkedIn URL present");
  if (html.indexOf("assets/bhojraj-kamdi-resume.pdf") !== -1) issues.push("Resume file not published at assets/ — use the Google Doc link instead");
  if (window.console && window.console.warn && issues.length) {
    issues.forEach(function (msg) { console.warn("[Pre-launch] " + msg); });
  }
})();
