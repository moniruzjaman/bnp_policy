// ================================================================
//  MINISTERIAL BRIEFING LAYER - narrative over the existing portal
//  Depends on policy-data.js (loaded first). Additive and guarded:
//  if policy data is missing, this script does nothing.
// ================================================================
(function () {
  if (typeof POLICY_PILLARS === "undefined") return;
  var el = function (t, c, h) { var n = document.createElement(t); if (c) n.className = c; if (h != null) n.innerHTML = h; return n; };
  var ext = function (u) { return u.indexOf("http") === 0 ? ` target="_blank" rel="noopener"` : ""; };

  // ---- sticky ministerial nav ----
  var LINKS = [["top","Home"],["vision","Vision"],["pillars","Pillars"],["system","System"],["evidence","Evidence"],["roadmap","Roadmap"],["brief","Brief"]];
  var bnav = el("nav", "bnav");
  bnav.innerHTML = `<div class="bnav-in"><span class="bnav-logo">🇧🇩 BNP Policy<em>Agriculture Transformation</em></span>` +
    `<div class="bnav-links">` + LINKS.map(function (l) { return `<a href="#${l[0]}" data-spy="${l[0]}">${l[1]}</a>`; }).join("") + `</div>` +
    `<button class="bbtn-gold" id="bmode-open">▶ Briefing Mode</button></div>`;
  document.body.prepend(bnav);
  var top = el("div"); top.id = "brief-top"; bnav.after(top);

  // ---- hero ----
  top.appendChild(el("section", "bhero",
    `<div class="bhero-in" id="top"><div class="brow">NATIONAL AGRICULTURAL TRANSFORMATION</div>` +
    `<h1>A more productive, resilient and farmer-centered agriculture for Bangladesh</h1>` +
    `<p class="bsub">An integrated approach connecting farmer identity, soil intelligence, digital services, fertilizer transparency, circular agriculture and market access — designed to strengthen agricultural productivity, rural livelihoods and national resilience.</p>` +
    `<p class="bsub2">Powered by integrated agricultural systems and <b>GreenLoop 3.0</b>.</p>` +
    `<div class="bcta"><a class="bbtn" href="#vision">Explore the Transformation</a><a class="bbtn bbtn-out" href="#brief">Read the Executive Brief</a></div>` +
    `<div class="bout">` + OUTCOMES.map(function (o) { return `<div class="bout-c"><b>${o.n}</b><span>${o.l}</span><i>${o.s}</i></div>`; }).join("") + `</div></div>`));

  // ---- hide legacy hero; neutralize old sticky header ----
  var oldHero = document.querySelector(".hero"); if (oldHero) oldHero.style.display = "none";
  var nt = document.querySelector(".n-title");
  if (nt) { var p = nt; while (p && p !== document.body) { var cs = getComputedStyle(p); if (cs.position === "sticky" || cs.position === "fixed") p.style.position = "static"; p = p.parentElement; } }

  // ---- vision ----
  top.appendChild(el("section", "bvis",
    `<div class="bwrap" id="vision"><div class="brow">${OPPORTUNITY.eyebrow}</div><h2>${OPPORTUNITY.title}</h2>` +
    OPPORTUNITY.paras.map(function (x) { return `<p>${x}</p>`; }).join("") +
    `<blockquote>${OPPORTUNITY.quote}</blockquote></div>`));
