
const CORE7 = ["ilo","suru","pelko","viha","inho","yllatys","hapea"];

const SCENARIOS = [
  {cat:"Koti", text:"Rakensit pitkään legotornia, ja se kaatui juuri kun sait sen valmiiksi.",
   tags:["turhautuminen","artymys","suru"],
   follow:"Mitä teit, kun torni kaatui? Mikä olisi auttanut siinä hetkessä?"},
  {cat:"Kaverit", text:"Parhain kaverisi leikkiikin tänään jonkun toisen kanssa, etkä pääse mukaan.",
   tags:["suru","yksinaisyys","kateus"],
   follow:"Mitä olisit halunnut tehdä silloin? Voisiko asian sanoa kaverille ääneen?"},
  {cat:"Koti", text:"Sinulle luvattiin huomiseksi retki, mutta se peruuntuikin sateen takia.",
   tags:["alakuloisuus","artymys"],
   follow:"Mistä tiedät kehossasi, että olet pettynyt?",
   adult:"Milloin sinulta on viimeksi peruuntunut jokin, mitä odotit innolla?"},
  {cat:"Yllätys", text:"Avaat oven ja huoneessa onkin koko perhe juhlimassa sinun syntymäpäivääsi.",
   tags:["riemu","ilo","hammastys"],
   follow:"Miltä yllätys tuntui juuri sillä hetkellä, kun ovi avautui?"},
  {cat:"Koulu", text:"Opettaja pyytää sinua kertomaan jotain koko luokan edessä.",
   tags:["jannitys","ahdistus","nolous"],
   follow:"Mikä auttaisi, kun jännittää esiintyä muiden edessä?",
   adult:"Jännittikö sinua joskus lapsena esiintyminen? Mitä silloin teit?"},
  {cat:"Koti", text:"Söit vahingossa viimeisen keksin, joka oli säästetty siskollesi.",
   tags:["syyllisyys","nolous"],
   follow:"Mitä voisit tehdä, jos huomaat tehneesi jotain vahingossa väärin?"},
  {cat:"Kaverit", text:"Kaverisi antaa sinulle oman lempilelunsa lainaan koko päiväksi.",
   tags:["ilo","kiitollisuus","yllatys"],
   follow:"Miten kertoisit kaverille, että olet kiitollinen?"},
  {cat:"Harrastus", text:"Harjoittelit pitkään pyörällä ajamista, ja tänään onnistuit ensimmäistä kertaa ilman apupyöriä.",
   tags:["riemu","ylpeys","ilo"],
   follow:"Miltä ylpeys tuntuu kehossa, kun onnistut jossain vaikeassa?",
   adult:"Muistatko jonkin asian, jonka opit itse pitkän harjoittelun jälkeen?"},
  {cat:"Perhe", text:"Isovanhempasi soittavat videopuhelun, jota olet odottanut koko viikon.",
   tags:["ilo","kiitollisuus","into"],
   follow:"Ketä sinä odotat aina ilolla näkeväsi?"},
  {cat:"Koti", text:"Huomaat pimeässä huoneessa oudon varjon seinällä.",
   tags:["pelko","ahdistus","hammastys"],
   follow:"Mikä auttaisi sinua, jos joskus pelottaa pimeässä?",
   adult:"Pelottiko sinua joku asia lapsena? Mikä siihen auttoi?"},
  {cat:"Kaverit", text:"Kaverisi nauraa sinulle, kun kompastuit pihalla.",
   tags:["hapea","nolous","artymys"],
   follow:"Mitä voisit sanoa kaverille, jos naurunauru tuntuu pahalta?"},
  {cat:"Koulu", text:"Uusi lapsi tulee ryhmääsi, etkä tiedä vielä millainen hän on.",
   tags:["uteliaisuus","jannitys","hammennys"],
   follow:"Mitä voisit tehdä tai kysyä tutustuaksesi uuteen kaveriin?"},
  {cat:"Koti", text:"Sisaruksesi rikkoi vahingossa sinun piirustuksesi.",
   tags:["viha","artymys","suru"],
   follow:"Miten voisit näyttää, että olet vihainen, ilman että satutat ketään?"},
  {cat:"Harrastus", text:"Hävisit pelin, vaikka yritit tosi kovasti.",
   tags:["alakuloisuus","turhautuminen"],
   follow:"Mikä auttaa, kun häviäminen harmittaa?"},
  {cat:"Perhe", text:"Vanhempasi kehuvat sinua muiden kuullen jostain, minkä teit hyvin.",
   tags:["ylpeys","ilo","nolous"],
   follow:"Tuntuuko kehuminen aina pelkästään mukavalta, vai välillä myös vähän noloa?",
   adult:"Miltä sinusta tuntuu, kun sinua kehutaan muiden edessä?"},
  {cat:"Koti", text:"Et meinaa saada unta, koska huoneessa on ihan hiljaista ja pimeää.",
   tags:["pelko","yksinaisyys","ahdistus"],
   follow:"Mikä tuo sinulle turvallisen olon nukkumaan mennessä?"},
  {cat:"Kaverit", text:"Kaverisi tulee pyytämään anteeksi, että oli eilen tylsä sinulle.",
   tags:["helpotus","ilo","empatia"],
   follow:"Miltä anteeksipyyntö tuntuu, kun sen saa?"},
  {cat:"Koulu", text:"Sinun piti tehdä tehtävä, mutta unohdit sen kotiin.",
   tags:["syyllisyys","ahdistus","nolous"],
   follow:"Mitä voisit sanoa opettajalle, jos unohdat jotain?"},
  {cat:"Yllätys", text:"Löydät pihalta oudon näköisen kiven tai hyönteisen.",
   tags:["uteliaisuus","hammastys","ilo"],
   follow:"Mitä kaikkea haluaisit ottaa siitä selvää?"},
  {cat:"Perhe", text:"Perheenjäsenesi on sairaana eikä jaksa leikkiä kanssasi.",
   tags:["suru","empatia","huoli"],
   follow:"Miten voisit huomioida jonkun, joka voi huonosti?",
   adult:"Miten sinä toivot, että sinua huomioidaan, kun olet sairaana?"},
  {cat:"Koti", text:"Odotat innolla lempisarjasi uutta jaksoa koko päivän.",
   tags:["into","riemu","jannitys"],
   follow:"Mitä muuta sinä odotat aina innolla?"},
  {cat:"Kaverit", text:"Kaksi kaveriasi riitelee, ja molemmat haluavat sinut omalle puolelleen.",
   tags:["hammennys","ahdistus","turhautuminen"],
   follow:"Täytyykö riidassa aina valita puolta?"},
  {cat:"Harrastus", text:"Sinut valitaan joukkueen kapteeniksi ensimmäistä kertaa.",
   tags:["ylpeys","jannitys","ilo"],
   follow:"Mikä tuntuisi vaikealta ja mikä kivalta kapteenina olemisessa?",
   adult:"Muistatko tilanteen, jossa sinulle annettiin vastuuta ensimmäistä kertaa?"},
  {cat:"Koti", text:"Lempilelusi katoaa, etkä löydä sitä mistään.",
   tags:["huoli","artymys","ahdistus"],
   follow:"Mikä auttaisi, kun jotain tärkeää katoaa?"},
  {cat:"Koulu", text:"Näet toisen lapsen istuvan yksin, eikä kukaan leiki hänen kanssaan.",
   tags:["empatia","suru","huoli"],
   follow:"Mitä voisit tehdä, jos näet jonkun yksin?"},
  {cat:"Perhe", text:"Perheenne muuttaa pian uuteen kotiin, ja jätät tutun pihan taakse.",
   tags:["alakuloisuus","jannitys","uteliaisuus"],
   follow:"Voiko samaan aikaan olla sekä surullinen että innoissaan?",
   adult:"Oletko itse muuttanut jostain paikasta, josta piti luopua? Miltä se tuntui?"},
  {cat:"Koti", text:"Sinut herätetään yllättäen aamuyöllä ukkosen jyrinään.",
   tags:["pelko","ahdistus"],
   follow:"Mikä auttaisi rauhoittumaan yllättävän äänen jälkeen?"},
  {cat:"Kaverit", text:"Voitit rakennuspalikkakisan, jonka järjestitte kavereiden kesken.",
   tags:["riemu","ylpeys","kiitollisuus"],
   follow:"Miten voitosta voi iloita niin, ettei toisten häviö tunnu pahalta?"},
  {cat:"Koulu", text:"Et muista vastausta, kun opettaja kysyy sinulta jotain.",
   tags:["jannitys","nolous","hammennys"],
   follow:"Mitä voi sanoa, jos ei tiedä vastausta?"},
  {cat:"Yllätys", text:"Saat postissa yllätyskirjeen, jonka on lähettänyt joku tuttu.",
   tags:["hammastys","into","uteliaisuus"],
   follow:"Kenelle sinä haluaisit joskus lähettää yllätyskirjeen?"},
  {cat:"Koti", text:"On sunnuntai-iltapäivä, eikä mikään tunnu kivalta tekemiseltä.",
   tags:["tylsistyminen","kyllastyminen"],
   follow:"Mitä voisi tehdä, kun on tylsää eikä keksi mitään?"},
  {cat:"Koti", text:"Sinun pitäisi lopettaa leikkiminen ja lähteä kauppaan, vaikka et haluaisi.",
   tags:["kiukku","artymys"],
   follow:"Miten kiukun voi näyttää niin, ettei satuta ketään?",
   adult:"Miten sinä käsittelet kiukkua, kun sinun täytyy lopettaa jokin kesken?"},
  {cat:"Harrastus", text:"Harjoittelitte niin pitkän päivän, että illalla et jaksaisi enää mitään.",
   tags:["uupumus","artymys"],
   follow:"Mistä huomaat kehossasi, että olet väsynyt?"},
];

const COPING = [
  {title:"Ilmapallohengitys", text:"Hengitä sisään nenän kautta, ikään kuin täyttäisit ilmapalloa vatsaasi. Puhalla sitten hitaasti ulos suusta. Tehkää yhdessä kolme kertaa."},
  {title:"Halikahdeksikko", text:"Halatkaa niin tiukasti ja pitkään kuin molemmista tuntuu hyvältä."},
  {title:"Tömistys", text:"Jos kroppa on täynnä kiukkua, tömistelkää jalkoja lattiaan yhdessä, kunnes olo helpottaa."},
  {title:"Piirrä tunne", text:"Ottakaa kynä ja paperi. Piirtäkää, miltä tunne näyttäisi, jos sillä olisi väri ja muoto."},
  {title:"Rauhoittumispaikka", text:"Menkää hetkeksi rauhalliseen paikkaan, jossa saa olla ihan omassa rauhassa."},
  {title:"Sano se ääneen", text:"Sano ääneen: \"Minusta tuntuu ___, koska ___.\" Se auttaa usein jo yksinään."},
  {title:"Ravistele pois", text:"Ravistelkaa käsiä, jalkoja ja koko kehoa kymmenen sekuntia, ikään kuin pudistaisitte tunteen pois."},
  {title:"Laske kymmeneen", text:"Laskekaa yhdessä hitaasti kymmeneen ennen kuin päätätte, mitä tehdään seuraavaksi."},
  {title:"Vesilasi", text:"Juokaa pieni lasillinen vettä rauhassa, keskittyen vain siihen tunteeseen."},
  {title:"Jaa se jollekulle", text:"Kerro tunteesta jollekulle, johon luotat. Jaettu taakka on aina kevyempi."},
];

const BODY_ZONES = [
  {id:"paa", label:"Pää", cx:100, cy:36, r:20, note:"Ajatukset voivat pyöriä nopeasti tai olla ihan tyhjät."},
  {id:"kasvot", label:"Kasvot", cx:100, cy:66, r:13, note:"Posket voivat kuumottaa, tai suu vetäytyä hymyyn tai mutriin."},
  {id:"rinta", label:"Rintakehä", cx:100, cy:132, r:34, note:"Sydän voi hakata kovaa, tai rinnassa voi tuntua lämmin, kevyt olo."},
  {id:"vatsa", label:"Vatsa", cx:100, cy:196, r:28, note:"Vatsassa voi tuntua perhosia, tai kova solmu."},
  {id:"kadet", label:"Kädet", cx:38, cy:150, cx2:162, r:19, note:"Kädet voivat puristua nyrkkiin tai täristä vähän."},
  {id:"jalat", label:"Jalat", cx:100, cy:280, r:26, note:"Jalat voivat tuntua levottomilta ja haluta juosta, tai painavilta."},
];

function h(html, tag="div"){ const el = document.createElement(tag); el.innerHTML = html; return el; }
function shuffle(arr){ const a=arr.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function pick(arr,n){ return shuffle(arr).slice(0,n); }
function esc(s){ return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

/* Tunttu, pelin oma seikkailijamaskotti — piirretty samalla ilme-kielellä kuin tunnekuvakkeet */
const MASCOT_SVG = `<svg viewBox="0 0 100 100" role="img" aria-label="Tunttu-maskotti">
  <path d="M30 76 Q50 68 70 76 L64 91 Q50 85 36 91 Z" fill="#7C5A73" stroke="#2B2A33" stroke-width="2.6" stroke-linejoin="round"/>
  <circle cx="50" cy="50" r="33" fill="#F4DCB6" stroke="#2B2A33" stroke-width="3"/>
  <path d="M45 21 Q38 8 49 4 Q52 16 45 21 Z" fill="#8FBF8A" stroke="#2B2A33" stroke-width="2" stroke-linejoin="round"/>
  <path d="M55 21 Q64 10 55 2 Q50 14 55 21 Z" fill="#6FA86A" stroke="#2B2A33" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32 49 Q38 42 44 49" fill="none" stroke="#2B2A33" stroke-width="3" stroke-linecap="round"/>
  <path d="M56 49 Q62 42 68 49" fill="none" stroke="#2B2A33" stroke-width="3" stroke-linecap="round"/>
  <path d="M37 60 Q50 73 63 60" fill="none" stroke="#2B2A33" stroke-width="3.4" stroke-linecap="round"/>
  <ellipse cx="29" cy="60" rx="5" ry="3.3" fill="#F2A9A0" opacity=".8"/>
  <ellipse cx="71" cy="60" rx="5" ry="3.3" fill="#F2A9A0" opacity=".8"/>
</svg>`;

const STAR_SVG = `<svg viewBox="0 0 20 20" fill="#F2A900" stroke="#C98600" stroke-width="1"><path d="M10 1l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L10 15l-5.6 3.1 1.4-6.3L1 8.5l6.4-.6z"/></svg>`;

/* ---------------- brändäys: maskotti + esikatselurivi (staattista, ei riipu tilasta) ---------------- */
function initBranding(){
  document.getElementById("brandMark").innerHTML = MASCOT_SVG;
  document.getElementById("heroMascot").innerHTML = MASCOT_SVG;
  document.getElementById("recapMascot").innerHTML = MASCOT_SVG;
  const previews = [
    { slug:"uteliaisuus", label:"Tilannekortit" },
    { slug:"riemu",       label:"Ilme- ja elenäytös" },
    { slug:"empatia",     label:"Kehokartta" },
  ];
  document.getElementById("previewRow").innerHTML = previews.map(p=>{
    const e = EMOTION_ICONS[p.slug];
    return `<span class="preview-chip"><span class="pc-icon" style="background:${e.tint}">${e.svg}</span>${esc(p.label)}</span>`;
  }).join("");
}
initBranding();

let state = {
  screen: "start",
  names: { adult:"Aikuinen", child:"Lapsi" },
  advanced: true,
  turn: "adult",
  stars: 0,
  recap: [],          // [{slug,label}]
  scenarioOrder: [],
  scenarioIdx: 0,
  scenarioChips: [],  // current chip slugs
  scenarioSelected: new Set(),
  charadesSlug: null,
  charadesPeeked: false,
  charadesRevealed: false,
  charadesRound: 0,
  bodymapSlug: null,
  bodymapZones: new Set(),
};

function pool(){
  const keys = Object.keys(EMOTION_ICONS);
  return state.advanced ? keys : keys.filter(k => CORE7.includes(k));
}

function iconSVG(slug, size){
  const e = EMOTION_ICONS[slug];
  if(!e) return "";
  return e.svg;
}

function addRecap(slug){
  if(!state.recap.find(r=>r.slug===slug)){
    state.recap.push({slug, label: EMOTION_ICONS[slug].label});
  }
}

function addStar(n){
  state.stars += n || 1;
  document.getElementById("starCount").textContent = state.stars;
  const el = document.getElementById("starCounter");
  el.animate([{transform:"scale(1)"},{transform:"scale(1.25)"},{transform:"scale(1)"}], {duration:380, easing:"ease-out"});
  spawnStarBurst(el);
}

function spawnStarBurst(anchorEl){
  const n = 5;
  for(let i=0;i<n;i++){
    const p = document.createElement("span");
    p.className = "star-particle";
    p.innerHTML = STAR_SVG;
    const angle = (Math.PI * 2 * i) / n + (Math.random()*0.6-0.3);
    const dist = 34 + Math.random()*14;
    p.style.setProperty("--dx", `${Math.cos(angle)*dist}px`);
    p.style.setProperty("--dy", `${Math.sin(angle)*dist - 8}px`);
    anchorEl.appendChild(p);
    p.addEventListener("animationend", ()=>p.remove());
    setTimeout(()=>p.remove(), 900);
  }
}

function setAccent(slug){
  const c = slug && EMOTION_ICONS[slug] ? EMOTION_ICONS[slug].accent : "#7C5A73";
  document.documentElement.style.setProperty("--accent-live", c);
}

function turnLabel(who){
  return who === "adult" ? state.names.adult : state.names.child;
}
function avatarInitial(who){
  const name = turnLabel(who).trim();
  return (name.charAt(0) || (who==="adult"?"A":"L")).toUpperCase();
}
function renderTurnBadge(el, who, prefix){
  el.innerHTML = `<span class="avatar">${esc(avatarInitial(who))}</span> ${esc(prefix||"Vuorossa")}: ${esc(turnLabel(who))}`;
}
function toggleTurn(){ state.turn = state.turn === "adult" ? "child" : "adult"; }

/* ---------------- näytönvaihto ---------------- */
function showScreen(name){
  state.screen = name;
  ["start","menu","situation","charades","bodymap","recap"].forEach(s=>{
    document.getElementById("screen-"+s).hidden = (s!==name);
  });
  if(name==="menu") setAccent(null);
  window.scrollTo({top:0, behavior:"smooth"});
  saveSnapshot();
}

/* ---------------- START ---------------- */
document.getElementById("btnToMenu").addEventListener("click", () => {
  const a = document.getElementById("nameAdult").value.trim();
  const c = document.getElementById("nameChild").value.trim();
  state.names.adult = a || "Aikuinen";
  state.names.child = c || "Lapsi";
  state.advanced = document.getElementById("toggleAdvanced").checked;
  renderMenu();
  showScreen("menu");
});

/* ---------------- MENU ---------------- */
function renderMenu(){
  renderTurnBadge(document.getElementById("menuGreeting"), state.turn, "Tänään aloittaa");
  document.getElementById("modeIconSituation").innerHTML = iconSVG("uteliaisuus");
  document.getElementById("modeIconCharades").innerHTML = iconSVG("riemu");
  document.getElementById("modeIconBodymap").innerHTML = iconSVG("empatia");
}
document.querySelectorAll(".mode-card").forEach(btn=>{
  btn.addEventListener("click", () => {
    const mode = btn.dataset.mode;
    if(mode==="situation") startSituation();
    if(mode==="charades") startCharades();
    if(mode==="bodymap") startBodymap();
  });
});
document.getElementById("btnToRecap").addEventListener("click", () => { renderRecap(); showScreen("recap"); });

/* ---------------- TILANNEKORTIT ---------------- */
function startSituation(){
  state.scenarioOrder = shuffle(SCENARIOS.map((_,i)=>i));
  state.scenarioIdx = 0;
  setAccent(null);
  loadScenario();
  showScreen("situation");
}
function loadScenario(){
  if(state.scenarioIdx >= state.scenarioOrder.length){
    state.scenarioOrder = shuffle(SCENARIOS.map((_,i)=>i));
    state.scenarioIdx = 0;
  }
  const sc = SCENARIOS[state.scenarioOrder[state.scenarioIdx]];
  state.currentScenario = sc;
  state.scenarioSelected = new Set();
  document.getElementById("situationCat").textContent = sc.cat;
  document.getElementById("situationText").textContent = sc.text;
  document.getElementById("situationProgress").textContent = `Tilanne ${state.scenarioIdx+1} / ${SCENARIOS.length}`;
  document.getElementById("situationProgressFill").style.width = `${((state.scenarioIdx+1)/SCENARIOS.length)*100}%`;
  renderTurnBadge(document.getElementById("situationTurn"), state.turn, "Vastaa ensin");

  const p = pool();
  const extras = p.filter(k => !sc.tags.includes(k));
  const chipPool = shuffle([...sc.tags.filter(t=>p.includes(t)), ...pick(extras, 5)]);
  state.scenarioChips = chipPool;
  const row = document.getElementById("situationChips");
  row.innerHTML = "";
  chipPool.forEach(slug=>{
    const e = EMOTION_ICONS[slug];
    const chip = document.createElement("button");
    chip.className = "echip";
    chip.style.setProperty("--chip-accent", e.accent);
    chip.style.setProperty("--chip-tint", e.tint);
    chip.innerHTML = `<span class="eicon">${e.svg}</span>${esc(e.label)}`;
    chip.addEventListener("click", ()=>{
      if(state.scenarioSelected.has(slug)){ state.scenarioSelected.delete(slug); chip.classList.remove("selected"); }
      else { state.scenarioSelected.add(slug); chip.classList.add("selected"); setAccent(slug); }
    });
    row.appendChild(chip);
  });

  document.getElementById("situationFollowBox").hidden = true;
  document.getElementById("situationFollowText").textContent = sc.follow;
  const adultBox = document.getElementById("situationAdultBox");
  if(sc.adult){
    adultBox.hidden = true;
    document.getElementById("situationAdultLabel").textContent = `${state.names.adult}: jakohetki`;
    document.getElementById("situationAdultText").textContent = sc.adult;
  } else {
    adultBox.hidden = true;
  }
}
document.getElementById("btnSituationReveal").addEventListener("click", ()=>{
  document.getElementById("situationFollowBox").hidden = false;
  if(state.currentScenario.adult) document.getElementById("situationAdultBox").hidden = false;
});
document.getElementById("btnSituationNext").addEventListener("click", ()=>{
  state.scenarioSelected.forEach(slug => addRecap(slug));
  if(state.scenarioSelected.size>0) addStar(1);
  state.scenarioIdx++;
  toggleTurn();
  loadScenario();
});
document.getElementById("btnSituationMenu").addEventListener("click", ()=>{ renderMenu(); showScreen("menu"); });

/* ---------------- ILME- JA ELENÄYTÖS ---------------- */
function startCharades(){
  state.charadesRound = 0;
  drawCharades();
  showScreen("charades");
}
function drawCharades(){
  const p = pool();
  state.charadesSlug = p[Math.floor(Math.random()*p.length)];
  state.charadesPeeked = false;
  state.charadesRevealed = false;
  state.charadesRound += 1;
  setAccent(null);
  const shower = state.turn, guesser = state.turn==="adult" ? "child":"adult";
  document.getElementById("charadesProgress").textContent = `Kierros ${state.charadesRound}`;
  renderTurnBadge(document.getElementById("charadesTurn"), shower, "Näyttäjä");
  document.getElementById("charadesRole").textContent =
    `${turnLabel(shower)} näyttää tunteen vain ilmeillä ja kehon liikkeillä — ei sanoja! ${turnLabel(guesser)} yrittää arvata ääneen.`;
  document.getElementById("charadesFacedown").hidden = false;
  document.getElementById("charadesIcon").hidden = true;
  document.getElementById("charadesWord").hidden = true;
  document.getElementById("btnCharadesHide").hidden = true;
  document.getElementById("btnCharadesPeek").hidden = false;
  document.getElementById("charadesAnswerBox").hidden = true;
}
document.getElementById("btnCharadesPeek").addEventListener("click", ()=>{
  state.charadesPeeked = true;
  const e = EMOTION_ICONS[state.charadesSlug];
  document.getElementById("charadesFacedown").hidden = true;
  document.getElementById("charadesIcon").hidden = false;
  document.getElementById("charadesIcon").innerHTML = e.svg;
  document.getElementById("charadesWord").hidden = false;
  document.getElementById("charadesWord").textContent = e.label;
  document.getElementById("btnCharadesPeek").hidden = true;
  document.getElementById("btnCharadesHide").hidden = false;
});
document.getElementById("btnCharadesHide").addEventListener("click", ()=>{
  document.getElementById("charadesFacedown").hidden = false;
  document.getElementById("charadesIcon").hidden = true;
  document.getElementById("charadesWord").hidden = true;
  document.getElementById("btnCharadesHide").hidden = true;
  document.getElementById("btnCharadesPeek").hidden = false;
});
document.getElementById("btnCharadesReveal").addEventListener("click", ()=>{
  const e = EMOTION_ICONS[state.charadesSlug];
  state.charadesRevealed = true;
  setAccent(state.charadesSlug);
  document.getElementById("charadesFacedown").hidden = true;
  document.getElementById("charadesIcon").hidden = false;
  document.getElementById("charadesIcon").innerHTML = e.svg;
  document.getElementById("charadesWord").hidden = false;
  document.getElementById("charadesWord").textContent = e.label;
  document.getElementById("btnCharadesHide").hidden = true;
  document.getElementById("btnCharadesPeek").hidden = true;
  document.getElementById("charadesAnswerBox").hidden = false;
  document.getElementById("charadesAnswerText").textContent = e.label + ".";
  document.getElementById("charadesFollowText").textContent = `Muistatteko kumpikin tilanteen, jolloin olette viimeksi tunteneet tällaista?`;
  addRecap(state.charadesSlug);
  addStar(1);
});
document.getElementById("btnCharadesNext").addEventListener("click", ()=>{
  toggleTurn();
  drawCharades();
});
document.getElementById("btnCharadesMenu").addEventListener("click", ()=>{ renderMenu(); showScreen("menu"); });

/* ---------------- KEHOKARTTA ---------------- */
function startBodymap(){
  setAccent(null);
  state.bodymapSlug = null;
  state.bodymapZones = new Set();
  document.getElementById("bodymapStage").hidden = true;
  document.getElementById("btnBodymapDone").hidden = true;
  const p = pool();
  const recent = state.recap.map(r=>r.slug).filter(s=>p.includes(s));
  const choices = shuffle([...new Set([...recent.slice(-3), ...pick(p,6)])]).slice(0,7);
  const row = document.getElementById("bodymapChips");
  row.innerHTML = "";
  choices.forEach(slug=>{
    const e = EMOTION_ICONS[slug];
    const chip = document.createElement("button");
    chip.className = "echip";
    chip.style.setProperty("--chip-accent", e.accent);
    chip.style.setProperty("--chip-tint", e.tint);
    chip.innerHTML = `<span class="eicon">${e.svg}</span>${esc(e.label)}`;
    chip.addEventListener("click", ()=>{
      row.querySelectorAll(".echip").forEach(c=>c.classList.remove("selected"));
      chip.classList.add("selected");
      state.bodymapSlug = slug;
      setAccent(slug);
      document.getElementById("zoneEmotionWord").textContent = e.label.toLowerCase();
      state.bodymapZones = new Set();
      renderBodyFigure();
      document.getElementById("bodymapStage").hidden = false;
      document.getElementById("btnBodymapDone").hidden = false;
    });
    row.appendChild(chip);
  });
  showScreen("bodymap");
}
function renderBodyFigure(){
  const zonesSvg = BODY_ZONES.map(z=>{
    const active = state.bodymapZones.has(z.id);
    const fill = active ? (EMOTION_ICONS[state.bodymapSlug]?.accent || "#7C5A73") : "rgba(124,90,115,.10)";
    let circles = `<circle class="zone" data-zone="${z.id}" cx="${z.cx}" cy="${z.cy}" r="${z.r}" fill="${fill}" fill-opacity="${active?0.55:1}" stroke="#2B2A33" stroke-width="1.6"/>`;
    if(z.cx2 !== undefined){
      circles += `<circle class="zone" data-zone="${z.id}" cx="${z.cx2}" cy="${z.cy}" r="${z.r}" fill="${fill}" fill-opacity="${active?0.55:1}" stroke="#2B2A33" stroke-width="1.6"/>`;
    }
    return circles;
  }).join("");
  const svg = `<svg viewBox="0 0 200 320" role="img" aria-label="Kehokartta">
    <ellipse cx="100" cy="46" rx="30" ry="32" fill="#FDEFD6" stroke="#2B2A33" stroke-width="2.4"/>
    <path d="M70 96 Q100 82 130 96 L142 210 Q100 226 58 210 Z" fill="#FDEFD6" stroke="#2B2A33" stroke-width="2.4"/>
    <path d="M62 110 Q30 130 32 168" fill="none" stroke="#2B2A33" stroke-width="10" stroke-linecap="round"/>
    <path d="M138 110 Q170 130 168 168" fill="none" stroke="#2B2A33" stroke-width="10" stroke-linecap="round"/>
    <path d="M78 208 Q78 260 66 306" fill="none" stroke="#2B2A33" stroke-width="16" stroke-linecap="round"/>
    <path d="M122 208 Q122 260 134 306" fill="none" stroke="#2B2A33" stroke-width="16" stroke-linecap="round"/>
    ${zonesSvg}
  </svg>`;
  const holder = document.getElementById("bodyFigure");
  holder.innerHTML = svg;
  holder.querySelectorAll(".zone").forEach(circle=>{
    circle.style.cursor = "pointer";
    circle.addEventListener("click", ()=>{
      const id = circle.dataset.zone;
      if(state.bodymapZones.has(id)) state.bodymapZones.delete(id); else state.bodymapZones.add(id);
      renderBodyFigure();
      const z = BODY_ZONES.find(z=>z.id===id);
      document.getElementById("zoneTitle").textContent = z.label;
      document.getElementById("zoneText").innerHTML = z.note;
      renderZoneList();
    });
  });
}
function renderZoneList(){
  const list = document.getElementById("zoneList");
  list.innerHTML = "";
  BODY_ZONES.filter(z=>state.bodymapZones.has(z.id)).forEach(z=>{
    const tag = document.createElement("span");
    tag.className = "zone-tag";
    tag.textContent = z.label;
    list.appendChild(tag);
  });
}
document.getElementById("btnBodymapDone").addEventListener("click", ()=>{
  addRecap(state.bodymapSlug);
  addStar(1);
  renderMenu();
  showScreen("menu");
});
document.getElementById("btnBodymapMenu").addEventListener("click", ()=>{ renderMenu(); showScreen("menu"); });

/* ---------------- YHTEENVETO ---------------- */
function renderRecap(){
  setAccent(null);
  document.getElementById("recapStars").textContent = `${state.stars} ${state.stars===1?"tähti":"tähteä"} kerätty`;
  document.getElementById("recapIntro").textContent = state.recap.length
    ? `${state.names.adult} ja ${state.names.child} sanoittivat yhdessä ${state.recap.length} ${state.recap.length===1?"tunteen":"tunnetta"} tällä pelikerralla. Hienoa työtä!`
    : "Ei vielä kerättyjä tunteita — palatkaa pelaamaan, niin tähän kertyy sanoja!";
  const grid = document.getElementById("recapGrid");
  grid.innerHTML = "";
  state.recap.forEach(r=>{
    const e = EMOTION_ICONS[r.slug];
    const chip = document.createElement("span");
    chip.className = "recap-chip";
    chip.innerHTML = `<span class="eicon">${e.svg}</span>${esc(e.label)}`;
    grid.appendChild(chip);
  });
  const tip = pick(COPING, 1)[0];
  document.getElementById("copingTitle").textContent = tip.title;
  document.getElementById("copingText").textContent = tip.text;
}
document.getElementById("btnRecapAgain").addEventListener("click", ()=>{ renderMenu(); showScreen("menu"); });
document.getElementById("btnRecapRestart").addEventListener("click", ()=>{
  state.stars = 0; state.recap = []; state.turn = "adult";
  document.getElementById("starCount").textContent = 0;
  showScreen("start");
});

/* ---------------- avoinna olevien katsojien tilan säilytys ---------------- */
function snapshotState(){
  return {
    screen: state.screen, names: state.names, advanced: state.advanced, turn: state.turn,
    stars: state.stars, recap: state.recap,
  };
}
function saveSnapshot(){
  try{ window.claude?.hot?.snapshot?.(snapshotState()); }catch(e){}
}
function restoreFrom(data){
  if(!data) return false;
  try{
    state.names = data.names || state.names;
    state.advanced = data.advanced !== undefined ? data.advanced : state.advanced;
    state.turn = data.turn || state.turn;
    state.stars = data.stars || 0;
    state.recap = data.recap || [];
    document.getElementById("starCount").textContent = state.stars;
    if(data.screen && data.screen !== "start"){
      renderMenu();
      showScreen(data.screen === "situation" || data.screen === "charades" || data.screen === "bodymap" ? "menu" : data.screen);
    }
    return true;
  }catch(e){ return false; }
}

function boot(initial){
  restoreFrom(initial);
}
if(window.claude?.hot?.ready){
  window.claude.hot.ready((data)=>boot(data));
} else {
  boot(window.claude?.hot?.data);
}
