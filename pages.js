/* MangArchipel — scripts partagés des pages internes */
(function(){
  'use strict';
  var $=function(s,r){return (r||document).querySelector(s)};
  var $$=function(s,r){return Array.from((r||document).querySelectorAll(s))};
  var norm=function(s){return String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')};
  var esc=function(s){return String(s||'').replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})};
  function setupMenu(){var drawer=$('#drawer'),burger=$('#burger');if(!drawer||!burger)return;function set(open){drawer.classList.toggle('open',open);burger.setAttribute('aria-expanded',String(open));document.body.style.overflow=open?'hidden':''}burger.addEventListener('click',function(){set(!drawer.classList.contains('open'))});drawer.addEventListener('click',function(e){if(e.target.closest('a'))set(false)});document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});}
  function markActive(){var file=location.pathname.split('/').pop()||'index.html';$$('.nav a').forEach(function(a){var href=a.getAttribute('href')||'';a.classList.toggle('active',href.split('#')[0]===file)});}
  function showEmpty(target,msg){target.innerHTML='<div class="empty-state">'+esc(msg)+'</div>';}
  function renderArticle(){
    var host=$('#article-root');if(!host)return;
    var id=new URLSearchParams(location.search).get('id')||MA_FIXTURES.news[0].id;
    var article=(MA_FIXTURES.articles||[]).find(function(a){return a.id===id});
    var list=MA_FIXTURES.articles||[];
    if(!article){showEmpty(host,'Article introuvable. Retourne à l\'actu pour choisir un contenu disponible.');return;}
    document.title='MangArchipel — '+article.title;
    var idx=list.findIndex(function(a){return a.id===article.id});
    var prev=idx>0?list[idx-1]:null,next=idx<list.length-1?list[idx+1]:null;
    host.innerHTML='<div class="breadcrumb"><a href="index.html">Accueil</a><span>·</span><span>Article</span></div><div class="page-hero"><span class="kicker"><b>'+esc(article.tag)+'</b> · '+esc(article.category)+'</span><h1>'+esc(article.title)+'</h1><p class="lede">'+esc(article.excerpt)+'</p></div><div class="inner-grid"><article class="content-panel"><div class="article-meta"><span>'+esc(article.category)+'</span><span>'+esc(article.date)+'</span><span class="hot">'+(MA_FIXTURES.meta&&MA_FIXTURES.meta.automated?'Automatique':'Fixture')+'</span></div><figure class="article-visual"><img src="'+esc(article.image)+'" alt="'+esc(article.alt)+'"></figure><div class="article-body">'+article.body.map(function(p,i){return '<p class="'+(i===0?'dropcap':'')+'">'+esc(p)+'</p>'}).join('')+(article.sourceUrl?'<p class="source-link"><a class="btn" target="_blank" rel="noopener noreferrer" href="'+esc(article.sourceUrl)+'">Lire la source originale ↗</a></p>':'')+'</div><div class="article-nav">'+(prev?'<a href="article.html?id='+encodeURIComponent(prev.id)+'"><small>Article précédent</small><strong>'+esc(prev.title)+'</strong></a>':'<div></div>')+(next?'<a href="article.html?id='+encodeURIComponent(next.id)+'"><small>Article suivant</small><strong>'+esc(next.title)+'</strong></a>':'<div></div>')+'</div><div class="panel-actions"><a class="btn btn-solid" href="index.html#actu">Retour à l’actu</a><a class="btn" href="planches.html">Voir les planches</a></div></article><aside><div class="side-card"><h3>Dans le Crew</h3><ul class="side-list">'+(MA_FIXTURES.news||[]).slice(0,5).map(function(n){return '<li><a href="article.html?id='+encodeURIComponent(n.id)+'">'+esc(n.title)+'</a></li>'}).join('')+'</ul></div></aside></div>';
  }
  function renderPlanches(){
    var host=$('#planches-root');if(!host)return;
    var items=MA_FIXTURES.planches||[];
    if(!items.length){showEmpty(host,'Aucune planche dans les fixtures.');return;}
    host.innerHTML='<div class="breadcrumb"><a href="index.html">Accueil</a><span>·</span><span>Planches</span></div><div class="page-hero"><span class="kicker">Lecture visuelle · Sélection du Crew</span><h1>Planches</h1><p class="lede">Une galerie dédiée aux scènes, doubles pages et panels qui donnent envie d’ouvrir le tome.</p></div><div class="planches-grid"><section>'+items.map(function(p,i){return '<figure class="planche-view" id="'+esc(p.id)+'"><img src="'+esc(p.image)+'" alt="'+esc(p.alt||p.manga)+'" style="object-position:'+esc(p.pos||'center')+'"><figcaption><b>'+esc(p.manga)+'</b><span>'+esc(p.kind)+'</span></figcaption></figure>'}).join('')+'</section><aside class="planches-side">'+items.slice(0,4).map(function(p,i){return '<a class="panel-card" href="#'+esc(p.id)+'"><div class="thumb"><img src="'+esc(p.image)+'" alt="'+esc(p.alt||p.manga)+'"></div><div class="card-body"><span class="kicker">0'+(i+1)+' · '+esc(p.kind)+'</span><h3>'+esc(p.manga)+'</h3><p>Voir la planche</p></div></a>'}).join('')+'</aside></div>';
  }
  function renderPlanning(){
    var host=$('#planning-root');if(!host)return;
    var items=MA_FIXTURES.planning||[];var label={today:"Aujourd’hui",tomorrow:'Demain',soon:'À venir'};
    host.innerHTML='<div class="breadcrumb"><a href="index.html">Accueil</a><span>·</span><span>Planning</span></div><div class="page-hero"><span class="kicker">Agenda du Crew</span><h1>Planning</h1><p class="lede">Chapitres, volumes et épisodes à venir, alimentés par les fixtures partagées du projet.</p></div><ul class="schedule">'+items.map(function(p){var d=new Date(p.date+'T12:00:00');var day=String(d.getDate()).padStart(2,'0');var month=d.toLocaleDateString('fr-FR',{month:'short'}).replace('.','');return '<li id="'+esc(p.id)+'"><time datetime="'+esc(p.date)+'"><b>'+day+'</b><span>'+esc(month)+'</span></time><div><strong>'+esc(p.title)+'</strong><span class="type">'+esc(p.type)+'</span></div><span class="status '+esc(p.status)+'">'+esc(label[p.status]||p.status)+'</span></li>'}).join('')+'</ul><div class="panel-actions"><a class="btn btn-solid" href="index.html">Retour à l’accueil</a><a class="btn" href="crew.html">Voir le Crew</a></div>';
  }
  function renderCrew(){
    var host=$('#crew-root');if(!host)return;
    var members=MA_FIXTURES.crewMembers||[];
    if(!members.length){showEmpty(host,'Aucun membre dans les fixtures.');return;}
    host.innerHTML='<div class="breadcrumb"><a href="index.html">Accueil</a><span>·</span><span>Crew</span></div><div class="page-hero"><span class="kicker">Communauté MangArchipel</span><h1>Le Crew</h1><p class="lede">Les profils sont mockés pour préparer la future couche membres, rôles et fiches individuelles.</p></div><section class="grid-2">'+members.map(function(m){return '<article class="crew-profile" id="'+esc(m.id)+'"><div class="avatar">'+esc(m.mark)+'</div><div><span class="kicker">'+esc(m.role)+'</span><h3>'+esc(m.name)+'</h3><p>'+esc(m.bio)+'</p></div><div class="crew-score">'+esc(m.hype)+'<small>HYPE</small></div></article>'}).join('')+'</section><div class="panel-actions"><a class="btn btn-solid" href="index.html#actu">Retour à l’actu</a><a class="btn" href="planning.html">Planning</a></div>';
  }
  function init(){setupMenu();markActive();renderArticle();renderPlanches();renderPlanning();renderCrew();}
  document.addEventListener('DOMContentLoaded',init);
})();
