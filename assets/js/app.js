// ─ STATE ───────────────────────────────────────────────────────────
let curDeck=null,curSlide=0;
const dIdx={};

// ─ RENDER VIDEOS ───────────────────────────────────────────────────
function rv(g){
  const vids=g==="all"?VIDS:VIDS.filter(v=>v.g===g);
  document.getElementById("vgrid").innerHTML=vids.map(v=>`
    <div class="vc" onclick="openLB('${v.id}','${esc(v.t)}','${esc(v.s)}')">
      <div class="vt">
        <img src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg"
             loading="lazy" onerror="this.style.opacity='.2'">
        <div class="vplay"><div class="vpbtn">▶</div></div>
        <span class="vtag ${v.tag}">${TL[v.tag]||v.tag}</span>
        <span class="vstat live"><span style="width:5px;height:5px;border-radius:50%;background:#7ec850;display:inline-block;"></span>LIVE</span>
      </div>
      <div class="vb">
        <div class="vcat ${v.tag}">${v.cat}</div>
        <h4>${v.t}</h4><p>${v.s}</p>
      </div>
    </div>`).join("");
}
function fv(g,btn){
  document.querySelectorAll("#vf .nt").forEach(b=>b.classList.remove("act"));
  btn.classList.add("act"); rv(g);
}

// ─ RENDER DECKS ────────────────────────────────────────────────────
function rd(){
  document.getElementById("dgrid").innerHTML=Object.entries(SLIDE_DECKS).map(([k,d])=>{
    const th=d.slides[0]?`data:image/jpeg;base64,${d.slides[0]}`:"";
    return `<div class="dc" id="dc-${k}">
      <div class="dt" onclick="openSV('${k}',0)">
        ${th?`<img src="${th}" alt="">`:
             `<div style="height:148px;background:#0A1428;display:flex;align-items:center;justify-content:center;font-size:2.5rem;">${d.icon}</div>`}
        <div class="dto"><span>🔍 View all slides</span></div>
      </div>
      <div class="dn">
        <span class="dc-cnt" id="dc-c-${k}">Slide 1 / ${d.count}</span>
        <div class="db-btns">
          <button class="db-btn" onclick="qn('${k}',-1)">◀</button>
          <button class="db-btn" onclick="qn('${k}',1)">▶</button>
        </div>
      </div>
      <div class="dbd">
        <h4>${d.icon} ${d.title}</h4>
        <p>${d.desc}</p>
        <div class="dbtns">
          <button class="dbtn p" onclick="openSV('${k}',0)">📽 Fullscreen Slideshow</button>
        </div>
      </div>
    </div>`;
  }).join("");
}
function qn(k,dir){
  const d=SLIDE_DECKS[k]; if(!d) return;
  if(!dIdx[k]) dIdx[k]=0;
  dIdx[k]=(dIdx[k]+dir+d.count)%d.count;
  const img=document.querySelector(`#dc-${k} .dt img`);
  if(img&&d.slides[dIdx[k]]) img.src=`data:image/jpeg;base64,${d.slides[dIdx[k]]}`;
  const c=document.getElementById(`dc-c-${k}`);
  if(c) c.textContent=`Slide ${dIdx[k]+1} / ${d.count}`;
}

// ─ RENDER DOCS ─────────────────────────────────────────────────────
function rdoc(){
  document.getElementById("docgrid").innerHTML=DOCS.map((d,i)=>`
    <div class="docc" id="doc-${i}">
      <div class="docb">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;gap:6px;">
          <span class="vtag ${d.tag}" style="position:static;">${TL[d.tag]||d.tag}</span>
          <span style="font-size:.6rem;color:var(--mu);font-family:monospace;">${d.pg}</span>
        </div>
        <h4>${d.t}</h4><p>${d.s}</p>
        <div style="display:flex;gap:.48rem;">
          <button onclick="td(${i})" class="dbtn p" style="flex:1;" id="db-${i}">📄 View Here</button>
          <a href="https://docs.google.com/document/d/${d.did}/edit" target="_blank"
             class="dbtn s" style="display:flex;align-items:center;justify-content:center;">↗ Docs</a>
        </div>
      </div>
      <div id="df-${i}" style="display:none;" class="docframe">
        <iframe src="https://docs.google.com/document/d/${d.did}/preview" title="${esc(d.t)}"></iframe>
      </div>
    </div>`).join("");
}
function td(i){
  const df=document.getElementById(`df-${i}`);
  const btn=document.getElementById(`db-${i}`);
  if(df.style.display==="none"){df.style.display="block";btn.textContent="▲ Close";}
  else{df.style.display="none";btn.textContent="📄 View Here";}
}

// ─ RENDER APPS ─────────────────────────────────────────────────────
function ra(){
  document.getElementById("appgrid").innerHTML=APPS.map(a=>`
    <div class="appc" onclick="${a.internal?"scrollIntoView('sec-ebill')":
    `openAM('${a.url}','${esc(a.t)}')`}" style="cursor:pointer;">
      <div class="appth" style="background:linear-gradient(135deg,${a.col}55,${a.col}bb);">
        <div style="font-size:2.6rem;">${a.icon}</div>
        <div style="font-size:.6rem;color:rgba(255,255,255,.4);font-family:monospace;margin-top:.35rem;">
          ${a.url.replace("https://","")}</div>
        <span class="vstat live" style="position:absolute;top:8px;left:8px;">
          <span style="width:5px;height:5px;border-radius:50%;background:#7ec850;display:inline-block;"></span>LIVE</span>
      </div>
      <div class="appb">
        <div style="margin-bottom:6px;"><span class="vtag ${a.tag}" style="position:static;">${TL[a.tag]||a.tag}</span></div>
        <h3>${a.icon} ${a.t}</h3><p>${a.s}</p>
        <div style="display:flex;gap:.48rem;">
          <button class="dbtn p" onclick="event.stopPropagation();${a.internal?
    "scrollTo('#sec-ebill')":
    `openAM('${a.url}','${esc(a.t)}')`}">View Here</button>
          ${!a.internal?`<a href="${a.url}" target="_blank" class="dbtn s"
             onclick="event.stopPropagation()">↗ New Tab</a>`:""}
        </div>
      </div>
    </div>`).join("");
}
function scrollIntoView(id){document.getElementById(id)?.scrollIntoView({behavior:"smooth"});}

// ─ MODALS ──────────────────────────────────────────────────────────
function openLB(id,t,s){
  document.getElementById("lb-fr").src=`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
  document.getElementById("lb-t").textContent=t;
  document.getElementById("lb-s").textContent=s;
  document.getElementById("lb").classList.add("show");
  document.body.style.overflow="hidden";
}
function closeLB(){
  document.getElementById("lb").classList.remove("show");
  document.getElementById("lb-fr").src="";
  document.body.style.overflow="";
}
function openSV(k,idx){
  curDeck=k;curSlide=idx;
  const d=SLIDE_DECKS[k]; if(!d||!d.slides.length) return;
  document.getElementById("sv-img").src=`data:image/jpeg;base64,${d.slides[idx]}`;
  document.getElementById("sv-cnt").textContent=`${idx+1}/${d.count}`;
  document.getElementById("sv-ttl").textContent=d.title;
  document.getElementById("sv").classList.add("show");
  document.body.style.overflow="hidden";
}
function svNav(dir){
  if(!curDeck) return;
  const d=SLIDE_DECKS[curDeck];
  curSlide=(curSlide+dir+d.count)%d.count;
  document.getElementById("sv-img").src=`data:image/jpeg;base64,${d.slides[curSlide]}`;
  document.getElementById("sv-cnt").textContent=`${curSlide+1}/${d.count}`;
}
function closeSV(){
  document.getElementById("sv").classList.remove("show");
  document.body.style.overflow="";
}
function openAM(url,t){
  document.getElementById("am-url").textContent=url;
  document.getElementById("am-fr").src=url;
  document.getElementById("am-nt").href=url;
  document.getElementById("am").classList.add("show");
  document.body.style.overflow="hidden";
}
function closeAM(){
  document.getElementById("am").classList.remove("show");
  document.getElementById("am-fr").src="";
  document.body.style.overflow="";
}
function openPDF(){
  const m=document.getElementById("pdf-modal");
  m.classList.add("show");
  document.getElementById("pdf-frame").src="BNP_Profile_Moniruzjaman.pdf";
  document.body.style.overflow="hidden";
}
function closePDF(){
  document.getElementById("pdf-modal").classList.remove("show");
  document.getElementById("pdf-frame").src="";
  document.body.style.overflow="";
}
function showTab(t,btn){
  document.querySelectorAll(".n-tabs .nt").forEach(b=>b.classList.remove("act"));
  btn.classList.add("act");
  ["author","video","deck","doc","app"].forEach(s=>{
    const el=document.getElementById("sec-"+s);
    if(el) el.style.display=(t==="all"||t===s)?"block":"none";
  });
}
document.addEventListener("keydown",e=>{
  if(document.getElementById("sv").classList.contains("show")){
    if(e.key==="ArrowRight"||e.key==="ArrowDown") svNav(1);
    if(e.key==="ArrowLeft"||e.key==="ArrowUp") svNav(-1);
    if(e.key==="Escape") closeSV();
  }
  if(document.getElementById("lb").classList.contains("show")&&e.key==="Escape") closeLB();
  if(document.getElementById("am").classList.contains("show")&&e.key==="Escape") closeAM();
  if(document.getElementById("pdf-modal").classList.contains("show")&&e.key==="Escape") closePDF();
});
function esc(s){return(s||"").replace(/'/g,"\\'").replace(/"/g,"&quot;");}
document.addEventListener("DOMContentLoaded",()=>{rv("all");rd();rdoc();ra();});
