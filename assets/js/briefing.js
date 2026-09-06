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

  // ---- pillars as policy cards ----
  top.appendChild(el("section", "bpil",
    `<div class="bwrap" id="pillars"><div class="brow">THE TRANSFORMATION PILLARS</div><h2>Seven connected pillars — one system</h2><div class="bpil-grid">` +
    POLICY_PILLARS.map(function (x) {
      return `<article class="bpil-c" id="${x.id}"><div class="bpil-ic">${x.icon}</div><h3>${x.title} <span class="bpil-bn">${x.bn}</span></h3><p class="bpil-idea">${x.idea}</p><dl>` +
        `<dt>The problem</dt><dd>${x.problem}</dd><dt>The proposal</dt><dd>${x.proposition}</dd>` +
        `<dt>How it works</dt><dd class="bchips">${x.mechanism.map(function (m) { return `<span>${m}</span>`; }).join("")}</dd>` +
        `<dt>Expected benefit</dt><dd>${x.outcome}</dd><dt>Decision</dt><dd class="bpil-dec">${x.decision}</dd></dl>` +
        `<div class="bpil-ev">${x.evidence.map(function (e) { return `<a href="${e.u}"${ext(e.u)}>${e.t}</a>`; }).join("")}</div>` +
        `<a class="bpil-go" href="${x.evidence[0].u}"${ext(x.evidence[0].u)}>Explore →</a></article>`;
    }).join("") + `</div></div>`));

  // ---- national transformation map ----
  top.appendChild(el("section", "bmap",
    `<div class="bwrap" id="map"><div class="brow">THE NATIONAL TRANSFORMATION MAP</div><h2>Not separate applications — one connected system</h2><div class="bmap-d">` +
    `<div class="bmap-top">${MAP.top}</div><div class="bmap-conn"></div>` +
    `<div class="bmap-row">${MAP.inputs.map(function (i) { return `<div class="bmap-n">${i}</div>`; }).join("")}</div><div class="bmap-conn"></div>` +
    `<div class="bmap-mid">${MAP.mid}</div><div class="bmap-conn"></div>` +
    `<div class="bmap-row bmap-out">${MAP.outcomes.map(function (o) { return `<span>${o}</span>`; }).join("")}</div><div class="bmap-conn"></div>` +
    `<div class="bmap-base">${MAP.base}</div></div></div>`));

  // ---- system flow ----
  top.appendChild(el("section", "bsys",
    `<div class="bwrap" id="system"><div class="brow">HOW THE SYSTEM WORKS</div><h2>Farmer → Data → Services → Markets</h2><div class="bsys-f">` +
    SYSTEM_FLOW.map(function (s, i) { return (i ? `<div class="bsys-a">→</div>` : "") + `<div class="bsys-s"><b>STEP ${i + 1}</b><span>${s}</span></div>`; }).join("") +
    `</div></div>`));

  // ---- evidence heading (existing tabbed library follows) ----
  top.appendChild(el("div", "bevh",
    `<div class="bwrap" id="evidence"><div class="brow">WHAT IS ALREADY BUILT — EVIDENCE & DEMONSTRATIONS</div><h2>See the system in action</h2>` +
    `<p>Live applications, video demonstrations, slide decks and policy documents — the evidence supporting this transformation.</p></div>`));

  // ---- roadmap + executive brief (injected before footer) ----
  var bot = el("div"); bot.id = "brief-bottom";
  var foot = document.querySelector("footer") || document.querySelector(".foot");
  if (foot) foot.before(bot); else document.body.appendChild(bot);
  bot.appendChild(el("section", "brm",
    `<div class="bwrap" id="roadmap"><div class="brow">IMPLEMENTATION ROADMAP</div><h2>Pilot → Scale → National integration</h2><div class="brm-g">` +
    ROADMAP.map(function (r) { return `<div class="brm-c"><h3>${r.phase}</h3><span class="brm-w">${r.when}</span><ul>${r.items.map(function (i) { return `<li>${i}</li>`; }).join("")}</ul></div>`; }).join("") +
    `</div></div>`));
  var fin = POLICY_BRIEF.sections.filter(function (s) { return s.final; })[0] || POLICY_BRIEF.sections[POLICY_BRIEF.sections.length - 1];
  bot.appendChild(el("section", "bbrf",
    `<div class="bwrap bwrap-n" id="brief"><div class="brow">EXECUTIVE DECISION</div><h2>${POLICY_BRIEF.title}</h2>` +
    POLICY_BRIEF.sections.map(function (s) { return `<div class="bbrf-s${s.final ? " bbrf-fin" : ""}"><h3>${s.h}</h3><p>${s.p}</p></div>`; }).join("") +
    `<div class="bbrf-cta"><button class="bbtn" id="bmode-open2">▶ Open Briefing Mode</button>` +
    `<a class="bbtn bbtn-out" href="BNP_Profile_Moniruzjaman.pdf" target="_blank" rel="noopener">Profile & Credentials (PDF)</a></div></div>`));

  // ---- briefing mode: guided ministerial deck ----
  var SLIDES = [
    { k: "The Challenge", h: OPPORTUNITY.title, b: OPPORTUNITY.paras[0] },
    { k: "The Vision", h: "One integrated agricultural ecosystem", b: OPPORTUNITY.paras[2] },
    { k: "The Pillars", h: "Seven connected pillars", b: POLICY_PILLARS.map(function (x) { return `${x.icon} <b>${x.title}</b> — ${x.idea}`; }).join("<br>") },
    { k: "The System", h: "Farmer → Data → Services → Markets", b: SYSTEM_FLOW.join(" → ") },
    { k: "The Evidence", h: "Already built and live", b: `<b>13</b> live applications · <b>11</b> video demonstrations · <b>60</b> slides · <b>14</b> policy documents` },
    { k: "The Roadmap", h: "Pilot → Scale → National", b: ROADMAP.map(function (r) { return `<b>${r.phase}</b> (${r.when}): ${r.items[0]}`; }).join("<br>") },
    { k: "The Decision", h: fin.h, b: fin.p }
  ];
  var bm = el("div", "bmode"); bm.id = "bmode";
  bm.innerHTML = `<div class="bmode-bar"><span id="bm-k"></span><span id="bm-n"></span><button id="bm-x">✕ Close</button></div>` +
    `<div class="bmode-prog"><i id="bm-p"></i></div>` +
    `<div class="bmode-body"><div class="brow">MINISTERIAL BRIEFING</div><h2 id="bm-h"></h2><div id="bm-b"></div></div>` +
    `<div class="bmode-nav"><button id="bm-prev">← Previous</button><div class="bmode-dots" id="bm-dots"></div><button id="bm-next">Next →</button></div>`;
  document.body.appendChild(bm);
  var dots = document.getElementById("bm-dots");
  dots.innerHTML = SLIDES.map(function (s, i) { return `<span data-i="${i}"></span>`; }).join("");
  var bi = 0;
  function bmRender() {
    var s = SLIDES[bi];
    document.getElementById("bm-k").textContent = s.k;
    document.getElementById("bm-n").textContent = (bi + 1) + " / " + SLIDES.length;
    document.getElementById("bm-h").textContent = s.h;
    document.getElementById("bm-b").innerHTML = s.b;
    document.getElementById("bm-p").style.width = ((bi + 1) / SLIDES.length * 100) + "%";
    document.getElementById("bm-prev").disabled = bi === 0;
    document.getElementById("bm-next").disabled = bi === SLIDES.length - 1;
    for (var i = 0; i < dots.children.length; i++) dots.children[i].className = i === bi ? "on" : "";
  }
  function bmOpen() { bi = 0; bmRender(); bm.classList.add("on"); document.body.style.overflow = "hidden"; }
  function bmClose() { bm.classList.remove("on"); document.body.style.overflow = ""; }
  document.getElementById("bmode-open").onclick = bmOpen;
  document.getElementById("bmode-open2").onclick = bmOpen;
  document.getElementById("bm-x").onclick = bmClose;
  document.getElementById("bm-prev").onclick = function () { if (bi > 0) { bi--; bmRender(); } };
  document.getElementById("bm-next").onclick = function () { if (bi < SLIDES.length - 1) { bi++; bmRender(); } };
  dots.onclick = function (e) { var d = e.target.getAttribute("data-i"); if (d != null) { bi = parseInt(d, 10); bmRender(); } };
  document.addEventListener("keydown", function (e) {
    if (!bm.classList.contains("on")) return;
    if (e.key === "Escape") bmClose();
    if (e.key === "ArrowRight" && bi < SLIDES.length - 1) { bi++; bmRender(); }
    if (e.key === "ArrowLeft" && bi > 0) { bi--; bmRender(); }
  });
  var tx = null;
  bm.addEventListener("touchstart", function (e) { tx = e.touches[0].clientX; }, { passive: true });
  bm.addEventListener("touchend", function (e) {
    if (tx === null) return;
    var dx = e.changedTouches[0].clientX - tx;
    if (dx < -50 && bi < SLIDES.length - 1) { bi++; bmRender(); }
    if (dx > 50 && bi > 0) { bi--; bmRender(); }
    tx = null;
  }, { passive: true });
