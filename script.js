/* Ruang Resepsi — mesin undangan. Data pelanggan ada di config.js; file ini tidak perlu diedit. */
/* ================================ ENGINE ============================== */
const $=s=>document.querySelector(s), C=CONFIG, D=new Date(C.date), OK=!isNaN(D);
const MON=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
/* Tema warna + font: data di themes.js, dipilih lewat CONFIG.theme; CONFIG.colors (opsional) menimpa warna tertentu */
/* Mode demo (CONFIG.demo=true): ?theme=sage di alamat undangan menampilkan tema itu, untuk katalog. Klien biasa tidak terpengaruh. */
const QT=C.demo?new URLSearchParams(location.search).get("theme"):null,QOK=!!(QT&&THEMES[QT]);
const TH=QOK?THEMES[QT]:(THEMES[C.theme]||THEMES.champagne),COL=Object.assign({},TH.c,QOK?{}:(C.colors||{}));
{const R=document.documentElement.style,rgb=h=>{h=String(h).replace("#","");if(h.length===3)h=h.replace(/./g,"$&$&");return[0,2,4].map(i=>parseInt(h.substr(i,2),16)||0).join(",")};
for(const k in COL)R.setProperty("--"+k,COL[k]);
R.setProperty("--ov",rgb(COL.deep));R.setProperty("--ivrgb",rgb(COL.ivory));
R.setProperty("--fh",TH.fh);R.setProperty("--fb",TH.fb);R.setProperty("--hs",TH.hs||1);
const l=document.createElement("link");l.rel="stylesheet";l.href="https://fonts.googleapis.com/css2?"+TH.g.map(f=>"family="+f).join("&")+"&display=swap";document.head.appendChild(l);
const m=document.querySelector('meta[name="theme-color"]');if(m)m.content=COL.ivory}
const cv=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim();
function ph(src,i){ if(src) return `url("${src}")`;
  const [a,b]=[[cv("--cream"),cv("--champ")],[cv("--champ"),cv("--beige")]][i%2],g=cv("--gold");
  const svg=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${a}'/><stop offset='1' stop-color='${b}'/></linearGradient></defs><rect width='400' height='500' fill='url(%23g)'/><g fill='none' stroke='${g}' stroke-opacity='.55' stroke-width='1.2'><circle cx='200' cy='210' r='46'/><path d='M120 440c0-70 36-120 80-120s80 50 80 120'/><path d='M200 164c-30-40-8-72 0-72s30 32 0 72z'/></g></svg>`;
  return `url("data:image/svg+xml;utf8,${svg.replace(/#/g,'%23').replace(/\n/g,'')}")`; }
const setBg=(el,src,i)=>el.style.backgroundImage=ph(src,i);
const fmtDate=d=>`${d.getDate()} ${MON[d.getMonth()]} ${d.getFullYear()}`;
/* Personalisasi tamu: baca ?to=Nama langsung dari URL (JavaScript biasa, tanpa fitur khusus Claude) */
const GUEST=(function(){let n="";try{n=new URLSearchParams(location.search).get("to")||""}catch(e){}
n=Array.from(n.replace(/[\u0000-\u001f\u007f<>]/g," ").replace(/\s+/g," ").trim()).slice(0,60).join("").trim();
$("#cTo").textContent=n||"Bapak/Ibu/Saudara/i";return n})();
document.title=`The Wedding of ${C.groom.short} & ${C.bride.short}`;
$("#cA").textContent=C.groom.short;$("#cB").textContent=C.bride.short;
$("#cDate").textContent=OK?fmtDate(D).toUpperCase():"[TANGGAL ACARA]";
$("#hNames").innerHTML=`${esc(C.groom.short)} <em>&</em> ${esc(C.bride.short)}`;
$("#hLine").textContent=C.heroLine;
$("#hD").textContent=OK?String(D.getDate()).padStart(2,"0"):"00";
$("#hM").innerHTML=OK?`${MON[D.getMonth()]}<br>${D.getFullYear()}`:"[BULAN]<br>[TAHUN]";
$("#qText").textContent="“"+C.quote.text+"”";$("#qSrc").textContent=C.quote.source;
$("#gTxt").textContent=C.giftText;$("#addr").innerHTML=C.giftAddress?`<div class="eyebrow">Alamat Pengiriman Hadiah</div>${esc(C.giftAddress)}`:"";
$("#cTxt").textContent=C.closing;$("#cNames").innerHTML=`${esc(C.groom.short)} <em>&</em> ${esc(C.bride.short)}`;
$("#hash").textContent=(C.hashtag||"").replace(/^#/,"");$("#brand").textContent=C.brand?"Dibuat oleh "+C.brand:"";
setBg($("#cover .bg"),C.coverPhoto,0);setBg($("#hero .bg"),C.heroPhoto,1);setBg($("#close .bg"),C.closingPhoto,2);
/* mempelai */
$("#people").innerHTML=[C.groom,C.bride].map((p,i)=>`${i?'<div class="amp rv">&</div>':''}<div class="person rv"><div class="pic ph" data-bg="${i}"></div><h3>${esc(p.full)}</h3><p>${esc(p.child)} dari<br>${esc(p.parents)}</p></div>`).join("");
document.querySelectorAll("[data-bg]").forEach((el,i)=>setBg(el,[C.groom,C.bride][i].photo,i));
/* acara */
$("#events").innerHTML=C.events.map(e=>`<div class="card rv"><h3>${esc(e.name)}</h3><div class="d">${esc(e.date)}</div><div class="t">${esc(e.time)}</div><p class="v"><b style="font-weight:500">${esc(e.venue)}</b><br>${esc(e.address)}</p><a class="btn" target="_blank" rel="noopener" href="${/^https?:/.test(e.maps||"")?esc(e.maps):"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(e.maps||e.venue+" "+e.address)}">Google Maps</a></div>`).join("");
/* story */
$("#tl").innerHTML=C.story.map((s,i)=>`<div class="tli rv"><div class="pic ph" data-sp="${i}"></div><div><small>${esc(s.when)}</small><h4>${esc(s.title)}</h4><p>${esc(s.text)}</p></div></div>`).join("");
document.querySelectorAll("[data-sp]").forEach(el=>setBg(el,C.story[el.dataset.sp].photo,+el.dataset.sp+1));
/* galeri + lightbox */
$("#gal").innerHTML=C.gallery.map((g,i)=>`<div class="ph rv" data-g="${i}"></div>`).join("");
document.querySelectorAll("[data-g]").forEach(el=>{const i=+el.dataset.g;setBg(el,C.gallery[i],i);el.onclick=()=>{setBg($("#lb div"),C.gallery[i],i);$("#lb").classList.add("on")}});
$("#lb").onclick=()=>$("#lb").classList.remove("on");
document.addEventListener("keydown",e=>e.key==="Escape"&&$("#lb").classList.remove("on"));
/* rekening */
$("#accs").innerHTML=C.banks.map((b,i)=>`<div class="acc rv"><div class="bk">${esc(b.bank)}</div><div class="no">${esc(b.no)}</div><div class="nm">a.n. ${esc(b.name)}</div><button class="btn" data-c="${i}">Salin Nomor</button></div>`).join("");
const toast=m=>{const t=$("#toast");t.textContent=m;t.classList.add("on");setTimeout(()=>t.classList.remove("on"),2200)};
document.querySelectorAll("[data-c]").forEach(b=>b.onclick=async()=>{const v=C.banks[b.dataset.c].no;
  try{await navigator.clipboard.writeText(v)}catch(e){const t=document.createElement("textarea");t.value=v;document.body.appendChild(t);t.select();try{document.execCommand("copy")}catch(_){}t.remove()}
  toast("Nomor rekening disalin")});
/* countdown */
function tick(){let x=Math.max(0,OK?D-Date.now():0)/1000;
  [["d",86400],["h",3600],["m",60],["s",1]].forEach(([id,u])=>{const v=Math.floor(x/u);x-=v*u;$("#"+id).textContent=id==="d"?v:String(v).padStart(2,"0")})}
tick();setInterval(tick,1000);
/* scroll reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("on");io.unobserve(e.target)}}),{threshold:.12});
const reveal=()=>document.querySelectorAll(".rv:not(.on)").forEach(el=>io.observe(el));reveal();
/* cover, musik */
const aud=$("#aud"),mu=$("#mu");
if(C.music.src){aud.src=C.music.src;mu.classList.add("on","off")}
mu.onclick=()=>{if(aud.paused){aud.play().then(()=>mu.classList.remove("off")).catch(()=>{})}else{aud.pause();mu.classList.add("off")}};
$("#open").onclick=()=>{$("#cover").classList.add("gone");document.body.classList.remove("lock");$("#nav").classList.add("on");
  if(C.music.src)aud.play().then(()=>mu.classList.remove("off")).catch(()=>{});window.scrollTo(0,0)};
/* RSVP + buku tamu. Urutan pilihan penyimpanan:
   1) Supabase  (CONFIG.backend.supabase: url, key, invitation) -> tersimpan di database, tampil untuk semua tamu
   2) Google Apps Script (CONFIG.backend.url)                    -> tersimpan di Google Sheets
   3) Tanpa backend                                              -> hanya tersimpan di browser tamu */
/* Kode invitation yang masih diawali [ (belum diganti) dianggap belum diisi: tidak tersambung ke database, ucapan tersimpan lokal saja. */
const SBC=(C.backend&&C.backend.supabase)||{};
const SB=(SBC.url&&SBC.key&&SBC.invitation&&!/^\s*\[/.test(String(SBC.invitation)))?{url:String(SBC.url).trim().replace(/\/+$/,""),key:String(SBC.key).trim(),inv:String(SBC.invitation).trim()}:null;
const BE=SB?"":((C.backend&&C.backend.url)||"").trim(),REMOTE=!!(SB||BE),LS="wishes_"+(C.hashtag||"undangan");
const A2C={"Hadir":"hadir","Tidak Hadir":"tidak_hadir","Masih Ragu":"ragu"},C2A={hadir:"Hadir",tidak_hadir:"Tidak Hadir",ragu:"Masih Ragu"};
/* Mode uji: buka undangan dengan ?debug (contoh .../?debug&to=Nama) untuk melihat penyebab pasti jika koneksi ke database gagal. */
const DBG=/[?&]debug(&|=|$)/.test(location.search);let loadErr="";
let store=[],remote=[];try{store=JSON.parse(localStorage.getItem(LS)||"[]")}catch(e){}
const meta=w=>[w.a,w.g?w.g+" tamu":""].filter(Boolean).join(" · ");
function render(list){list=list.slice().sort((a,b)=>b.t-a.t);
  $("#wishes").innerHTML=(DBG&&loadErr?`<p style="color:#b00020;text-align:center;font-size:12px">Gagal memuat buku tamu: ${esc(loadErr)}</p>`:"")+(list.length?list.map(w=>`<div class="w"><b>${esc(w.n)}</b><em>${esc(meta(w))}</em><p>${esc(w.m)}</p></div>`).join(""):`<p style="color:var(--mute);text-align:center">Jadilah yang pertama mengirimkan doa.</p>`)}
const all=()=>REMOTE?remote.concat(store):store;
async function loadRemote(){
  if(SB){try{
    const r=await fetch(`${SB.url}/rest/v1/rpc/get_wishes`,{method:"POST",headers:{apikey:SB.key,"Content-Type":"application/json"},body:JSON.stringify({p_invitation:SB.inv})});
    if(!r.ok){loadErr="kode "+r.status;render(all());return}loadErr="";const d=await r.json();
    if(Array.isArray(d)){remote=d.map(x=>({n:x.name,a:C2A[x.attendance]||"",g:x.guests,m:x.message||"",t:Date.parse(x.created_at)||0}));render(all())}
  }catch(e){loadErr="jaringan: "+(e&&e.message||e);if(DBG)console.error(e);render(all())}return}
  if(!BE)return;try{const d=await(await fetch(BE)).json();if(Array.isArray(d)){remote=d;render(all())}}catch(e){}}
render(all());loadRemote();
/* buku tamu diperbarui otomatis tiap 30 detik selama halaman terbuka, supaya ucapan tamu lain ikut muncul */
if(SB)setInterval(()=>{if(!document.hidden)loadRemote()},30000);
if(GUEST)$("#n").value=GUEST;
const waNum=(()=>{let d=String(C.whatsapp||"").replace(/\D/g,"");if(d.length<8)return"";if(d[0]==="0")d="62"+d.slice(1);return d})();
if(waNum)$("#wa").hidden=false;
const entry=()=>({n:$("#n").value.trim(),a:$("#a").value,g:$("#g").value,m:$("#t").value.trim(),t:Date.now()});
$("#wa").onclick=()=>{const f=$("#f");if(!f.reportValidity())return;const w=entry();
  const msg=`Halo, saya ${w.n}.\nKonfirmasi kehadiran: ${w.a} (${w.g} tamu).\nUcapan: ${w.m}`;
  window.open("https://wa.me/"+waNum+"?text="+encodeURIComponent(msg),"_blank","noopener")};
$("#f").onsubmit=async e=>{e.preventDefault();const w=entry();if(!w.n||!w.m)return;
  const btn=e.target.querySelector(".fill");btn.disabled=true;let sent=false,why="";
  if(SB){
    try{const r=await fetch(`${SB.url}/rest/v1/rsvp`,{method:"POST",headers:{apikey:SB.key,"Content-Type":"application/json",Prefer:"return=minimal"},
      body:JSON.stringify({invitation:SB.inv,name:w.n,attendance:A2C[w.a]||"hadir",guests:parseInt(w.g,10)||1,message:w.m})});sent=r.ok;
      if(!sent){let t="";try{t=(await r.text()).slice(0,200)}catch(_){}why="kode "+r.status+" "+t}}catch(_){why="jaringan: "+(_&&_.message||_)}
    if(sent){remote.unshift(w);render(all());setTimeout(loadRemote,1500)}
  }else if(BE){
    try{await fetch(BE,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(w)});sent=true;remote.unshift(w);render(all());setTimeout(loadRemote,2500)}catch(_){}
  }
  if(!sent){store.push(w);try{localStorage.setItem(LS,JSON.stringify(store))}catch(x){}render(all())}
  e.target.reset();if(GUEST)$("#n").value=GUEST;btn.disabled=false;
  if(DBG&&!sent&&why){console.error(why);try{alert("DEBUG - gagal kirim: "+why)}catch(_){}}
  toast(sent||!REMOTE?"Terima kasih atas doa & konfirmasinya":"Koneksi bermasalah, doa tersimpan sementara di perangkat ini");location.hash="guest"};
