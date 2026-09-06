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
