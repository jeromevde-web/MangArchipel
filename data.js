/* MangArchipel — fixtures partagées
   La source pourra être remplacée plus tard par une API/CMS sans changer les pages. */
window.MA_FIXTURES = {
  images:{
    n1:'assets/images/news-1.jpg', n2:'assets/images/news-2.jpg', n3:'assets/images/news-3.jpg',
    c1:'assets/images/cover-1.jpg', c2:'assets/images/cover-2.jpg', c3:'assets/images/cover-3.jpg',
    c4:'assets/images/cover-4.jpg', c5:'assets/images/cover-5.jpg'
  },

    meta:{mock:true,updatedAt:null},
    /* format : lead (1) · feature (2) · brief (texte court). hype 0-100. */
    news:[
      {id:'n1',format:'lead',tag:'One Piece',category:'Sortie',date:'2026-09-23',hype:91,title:'Le Tome 109 de One Piece frappe les librairies !',excerpt:"L'anarchie est totale sur Egghead. Luffy Gear 5 repousse les limites du dessin dans un combat déjà historique.",image:'assets/images/news-1.jpg',alt:'Luffy en Gear 5',url:'article.html?id=n1'},
      {id:'n2',format:'feature',tag:'Jujutsu Kaisen',category:'Anime',date:'2026-09-22',hype:84,title:"Le Culling Game s'annonce ultra-sombre",image:'assets/images/news-2.jpg',alt:'Sukuna dans Jujutsu Kaisen',url:'article.html?id=n2'},
      {id:'n3',format:'feature',tag:'Naruto',category:'Rumeur',date:'2026-09-20',hype:77,title:'Un retour inattendu pour la série ?',image:'assets/images/news-3.jpg',alt:'Naruto',url:'article.html?id=n3'},
      {id:'b1',format:'brief',tag:'Blue Lock',category:'Analyse',date:'2026-09-24',hype:74,title:'Pourquoi le dernier chapitre divise les lecteurs',url:'article.html?id=b1'},
      {id:'b2',format:'brief',tag:'Chainsaw Man',category:'Sortie',date:'2026-09-23',hype:69,title:'Le prochain chapitre confirmé pour vendredi',url:'article.html?id=b2'},
      {id:'b3',format:'brief',tag:'Frieren',category:'Anime',date:'2026-09-22',hype:66,title:'De nouveaux visuels dévoilés pour la suite',url:'article.html?id=b3'},
      {id:'b4',format:'brief',tag:'Raws',category:'Raws',date:'2026-09-21',hype:71,title:'Raws de la semaine : le point sur les sorties',url:'article.html?id=b4'}
    ],
    /* trend = variation de hype (points). Le classement final viendra du serveur. */
    crew:[
      {id:'one-piece',rank:1,previousRank:1,title:'One Piece',genre:'Aventure',cover:'assets/images/cover-1.jpg',hype:94,trend:4,votes:null,favorites:null},
      {id:'jujutsu-kaisen',rank:2,previousRank:3,title:'Jujutsu Kaisen',genre:'Action',cover:'assets/images/cover-2.jpg',hype:88,trend:1,votes:null,favorites:null},
      {id:'blue-lock',rank:3,previousRank:2,title:'Blue Lock',genre:'Sport',cover:'assets/images/cover-3.jpg',hype:81,trend:2,votes:null,favorites:null},
      {id:'chainsaw-man',rank:4,previousRank:4,title:'Chainsaw Man',genre:'Action',cover:'assets/images/cover-4.jpg',hype:77,trend:-3,votes:null,favorites:null},
      {id:'frieren',rank:5,previousRank:6,title:'Frieren',genre:'Fantasy',cover:'assets/images/cover-5.jpg',hype:72,trend:5,votes:null,favorites:null}
    ],
    /* signals : compteurs bruts (null tant qu'il n'y a pas de backend) · why : raisons éditoriales affichées */
    underground:[
      {id:'kagurabachi',rank:1,previousRank:19,title:'Kagurabachi',genre:'Action',cover:null /* "assets/covers/kagurabachi.webp" */,hype:87,trend:24,votes:null,favorites:null,searches:null,updatedAt:null,url:'article.html?id=kagurabachi',
        hook:"Une vengeance à coups de katana, un trait nerveux : le bouche-à-oreille s'accélère.",why:['142 nouveaux favoris','+32% de recherches','Découvert par le Crew']},
      {id:'akane-banashi',rank:2,previousRank:9,title:'Akane-banashi',genre:'Drame',cover:null,hype:71,trend:18,votes:null,favorites:null,searches:null,updatedAt:null,url:'article.html?id=akane-banashi',
        hook:'Le rakugo comme un sport de combat.',why:['Très recherché cette semaine']},
      {id:'astro-royale',rank:3,previousRank:12,title:'Astro Royale',genre:'Sci-Fi',cover:null,hype:58,trend:12,votes:null,favorites:null,searches:null,updatedAt:null,url:'article.html?id=astro-royale',
        hook:'Un battle royale dans l’espace.',why:['Le Crew commence à le découvrir']},
      {id:'ruri-dragon',rank:4,previousRank:null,title:'Ruri Dragon',genre:'Fantasy',cover:null,hype:47,trend:9,votes:null,favorites:null,searches:null,updatedAt:null,url:'article.html?id=ruri-dragon',
        hook:'Une lycéenne mi-humaine, mi-dragon.',why:['Nouvelle entrée cette semaine']},
      {id:'mato-seihei',rank:5,previousRank:7,title:'Mato Seihei no Slave',genre:'Action',cover:null,hype:39,trend:7,votes:null,favorites:null,searches:null,updatedAt:null,url:'article.html?id=mato-seihei',
        hook:'Des démons, des pouvoirs, un pacte.',why:['En forte progression']}
    ],
    /* planches : image = "assets/planches/xxx.webp" plus tard */
    planches:[
      {id:'pl1',slot:'a',manga:'Jujutsu Kaisen',kind:'Scène marquante',image:'assets/images/news-2.jpg',pos:'center 30%',alt:'Planche Jujutsu Kaisen'},
      {id:'pl2',slot:'b',manga:'One Piece',kind:'Double page',image:'assets/images/news-1.jpg',pos:'center 20%',alt:'Planche One Piece'},
      {id:'pl3',slot:'c',manga:'Naruto',kind:'Couverture',image:'assets/images/news-3.jpg',pos:'center 30%',alt:'Illustration Naruto'},
      {id:'pl4',slot:'d',manga:'One Piece',kind:'Panel du jour',image:'assets/images/news-1.jpg',pos:'center 65%',alt:'Panel One Piece'}
    ],
    /* status : today · tomorrow · soon */
    planning:[
      {id:'p1',date:'2026-09-24',title:'One Piece',type:'Chapitre 1160',status:'today'},
      {id:'p2',date:'2026-09-25',title:'Chainsaw Man',type:'Nouveau chapitre',status:'tomorrow'},
      {id:'p3',date:'2026-09-26',title:'Jujutsu Kaisen',type:'Nouveau volume',status:'soon'},
      {id:'p4',date:'2026-09-27',title:'Blue Lock',type:'Nouveau chapitre',status:'soon'},
      {id:'p5',date:'2026-09-28',title:'Frieren',type:'Épisode anime',status:'soon'},
      {id:'p6',date:'2026-09-30',title:'Kagurabachi',type:'Nouveau chapitre',status:'soon'}
    ],
    tags:[{label:'Shonen'},{label:'Seinen'},{label:'Romance'},{label:'Dark'},{label:'Isekai'},{label:'Sport'},{label:'Raws'},{label:'Underground',hot:true}],
    socials:[{id:'discord',label:'Discord',url:'index.html#crew'},{id:'youtube',label:'YouTube',url:'index.html#crew'},{id:'x',label:'X',url:'index.html#crew'},{id:'instagram',label:'Instagram',url:'index.html#crew'}],
articles:[
      {id:'n1',newsId:'n1',title:'Le Tome 109 de One Piece frappe les librairies !',tag:'One Piece',category:'Sortie',date:'2026-09-23',image:'assets/images/news-1.jpg',alt:'Luffy en Gear 5',excerpt:"L'anarchie est totale sur Egghead. Luffy Gear 5 repousse les limites du dessin dans un combat déjà historique.",body:["One Piece continue de faire monter la pression sur Egghead avec un tome qui concentre action, mouvement et détails graphiques.","Dans ce mock éditorial, le Crew revient sur les moments qui ont le plus marqué la lecture et sur la manière dont le découpage accompagne l'affrontement.","La fiche est volontairement alimentée par des données de démonstration : elle pourra ensuite recevoir le contenu réel depuis un CMS ou une API."]},
      {id:'n2',newsId:'n2',title:"Le Culling Game s'annonce ultra-sombre",tag:'Jujutsu Kaisen',category:'Anime',date:'2026-09-22',image:'assets/images/news-2.jpg',alt:'Sukuna dans Jujutsu Kaisen',excerpt:"Le Culling Game s'annonce ultra-sombre.",body:["Cette fiche mock suit la production et l'esthétique sombre associées au Culling Game.","Le traitement visuel permet ici de tester une vraie page de lecture avec métadonnées, image, corps d'article et navigation entre contenus.","Les données réelles pourront remplacer cette fixture sans modifier la structure de la page."]},
      {id:'n3',newsId:'n3',title:'Un retour inattendu pour la série ?',tag:'Naruto',category:'Rumeur',date:'2026-09-20',image:'assets/images/news-3.jpg',alt:'Naruto',excerpt:'Un retour inattendu pour la série ?',body:["Cette publication de démonstration sert à tester le format article de MangArchipel.","Le contenu, les visuels et les métadonnées sont isolés dans la couche de fixtures afin que la page ne dépende pas de données écrites directement dans son HTML.","Lorsque les sources réelles seront branchées, seule la source de données aura vocation à changer."]},
      {id:'b1',newsId:'b1',title:'Pourquoi le dernier chapitre divise les lecteurs',tag:'Blue Lock',category:'Analyse',date:'2026-09-24',image:'assets/images/cover-3.jpg',alt:'Blue Lock',excerpt:'Pourquoi le dernier chapitre divise les lecteurs',body:["Analyse mock autour du dernier chapitre de Blue Lock, avec une structure prête à accueillir une publication complète.","On conserve volontairement le vocabulaire et les catégories déjà présents dans la homepage."]},
      {id:'b2',newsId:'b2',title:'Le prochain chapitre confirmé pour vendredi',tag:'Chainsaw Man',category:'Sortie',date:'2026-09-23',image:'assets/images/cover-4.jpg',alt:'Chainsaw Man',excerpt:'Le prochain chapitre confirmé pour vendredi',body:["Article mock consacré au calendrier de sortie et à l'actualité de Chainsaw Man.","La fixture pourra être remplacée sans changement de composant."]},
      {id:'b3',newsId:'b3',title:'De nouveaux visuels dévoilés pour la suite',tag:'Frieren',category:'Anime',date:'2026-09-22',image:'assets/images/cover-5.jpg',alt:'Frieren',excerpt:'De nouveaux visuels dévoilés pour la suite',body:["Article mock consacré aux nouveaux visuels de Frieren.","Le composant d'article gère déjà l'image, les métadonnées, les paragraphes et la navigation suivante/précédente."]},
      {id:'b4',newsId:'b4',title:'Raws de la semaine : le point sur les sorties',tag:'Raws',category:'Raws',date:'2026-09-21',image:'assets/images/cover-1.jpg',alt:'Raws de la semaine',excerpt:'Raws de la semaine : le point sur les sorties',body:["Récapitulatif mock des sorties raws de la semaine.","Cette entrée est surtout là pour tester la navigation multi-articles."]},
      {id:'kagurabachi',title:'Kagurabachi : la pépite hors radar',tag:'Kagurabachi',category:'Underground',date:'2026-09-24',image:'assets/images/cover-2.jpg',alt:'Kagurabachi',excerpt:"Une vengeance à coups de katana, un trait nerveux : le bouche-à-oreille s'accélère.",body:["Kagurabachi occupe la première place du radar underground dans les fixtures actuelles.","La page reprend le hook déjà utilisé par le bloc Hors radar afin de garder une continuité éditoriale."]},
      {id:'akane-banashi',title:'Akane-banashi : le rakugo comme un sport de combat',tag:'Akane-banashi',category:'Underground',date:'2026-09-24',image:'assets/images/cover-3.jpg',alt:'Akane-banashi',excerpt:'Le rakugo comme un sport de combat.',body:["Fiche mock pour tester un article issu du classement underground."]},
      {id:'astro-royale',title:'Astro Royale : un battle royale dans l’espace',tag:'Astro Royale',category:'Underground',date:'2026-09-24',image:'assets/images/cover-4.jpg',alt:'Astro Royale',excerpt:'Un battle royale dans l’espace.',body:["Fiche mock pour tester la navigation depuis le radar underground."]},
      {id:'ruri-dragon',title:'Ruri Dragon : une nouvelle entrée du radar',tag:'Ruri Dragon',category:'Underground',date:'2026-09-24',image:'assets/images/cover-5.jpg',alt:'Ruri Dragon',excerpt:'Une lycéenne mi-humaine, mi-dragon.',body:["Fiche mock pour tester une entrée sans historique de classement."]},
      {id:'mato-seihei',title:'Mato Seihei no Slave : en forte progression',tag:'Mato Seihei no Slave',category:'Underground',date:'2026-09-24',image:'assets/images/cover-1.jpg',alt:'Mato Seihei no Slave',excerpt:'Des démons, des pouvoirs, un pacte.',body:["Fiche mock pour tester une entrée du radar avec progression."]}
    ],
    crewMembers:[
      {id:'crew-01',name:'Kuro',role:'Veille & Actu',bio:'Repère les sorties, annonces et signaux qui peuvent intéresser le Crew.',hype:96,mark:'K'},
      {id:'crew-02',name:'Mika',role:'Planches & Visuels',bio:'Sélectionne les planches et les images qui donnent le ton du moment.',hype:91,mark:'M'},
      {id:'crew-03',name:'Jin',role:'Radar Underground',bio:'Suit les séries hors radar et leurs progressions dans les fixtures.',hype:88,mark:'J'},
      {id:'crew-04',name:'Ryo',role:'Planning',bio:'Structure les dates, chapitres, volumes et épisodes à venir.',hype:84,mark:'R'},
      {id:'crew-05',name:'Nox',role:'Community',bio:'Relie les découvertes du site aux tendances de la communauté.',hype:81,mark:'N'}
    ]
  }