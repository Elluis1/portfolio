(function(){
  var T={
    es:{title:"Luigi Mete — Estudiante de Lic. en Sistemas",desc:"Portfolio de Luigi Mete, estudiante de 5.º año de Lic. en Sistemas en FCyT UADER y Analista en Sistemas.",
      skip:"Saltar al contenido",navLabel:"Navegación",nH:"Inicio",nP:"Proyectos",nS:"Stack",nA:"Sobre mí",nC:"Contacto",nCv:"Descargar CV",nGh:"GitHub",nLi:"LinkedIn",zoom:"Ampliar captura",close:"Cerrar",shots:"Capturas",altSd1:"Savedeco, pantalla de carga: el código de exportación de una partida de ejemplo pegado en el campo de texto, con los botones Subir archivo y Decodificar.",altSd2:"Savedeco, resultados: panel “Resumen de la partida” con los datos decodificados de la partida de ejemplo, en tarjetas.",altCg1:"Comgen en modo oscuro: a la izquierda el enunciado “Cadenas binarias que terminan en 01”; a la derecha el autómata finito determinista generado, con su definición y su diagrama de estados.",altCg2:"Comgen, diagrama en primer plano: autómata de dos estados para “cantidad par de unos”, con su tabla de transiciones.",navP:"proyectos",navS:"stack",navA:"sobre mí",navC:"contacto",
      role:"Estudiante de Lic. en Sistemas / Analista en Sistemas",loc:"5.º año · FCyT UADER · Concepción del Uruguay, Entre Ríos",
      ctaP:"ver proyectos",ctaCv:"descargar CV",ctaC:"contacto",hP:"proyectos",
      sd:"Visor web que decodifica partidas guardadas de juegos y muestra su contenido en paneles.",
      cg:"Genera autómatas a partir de enunciados en español y los exporta a JFLAP.",
      st:"App de escritorio para consultorios odontológicos: pacientes, agenda de turnos integrada con Google Calendar, ficha clínica con tratamientos y pagos, y odontograma con funciones por voz.",sv:"App de stock por empresa: inventario de productos, registro de ventas, compras y ajustes en un libro diario, y resumen mensual y anual con balance y productos más vendidos.",priv:"código privado",altSt1:"SmileTracker: panel de trabajo con pacientes, turnos del día y calendario",altSt2:"SmileTracker: agenda semanal de turnos conectada a Google Calendar",altSt3:"SmileTracker: ficha clínica con tratamientos, pagos y saldo pendiente",altSt4:"SmileTracker: odontograma con controles de micrófono para dictado por voz",altSv1:"Stock-viewer: inventario de productos con datos de ejemplo",altSv2:"Stock-viewer: libro diario de ventas, compras y ajustes con datos de ejemplo",altSv3:"Stock-viewer: resumen mensual y anual con productos más vendidos, datos de ejemplo",
      kEd:"estudios",vEd:"Lic. en Sistemas · FCyT UADER · 5.º año",kTi:"título",vTi:"Analista en Sistemas",kLo:"ubicación",vLo:"Concepción del Uruguay, Entre Ríos",kEn:"inglés",kPr:"proyectos",
      repo:"repo ↗",hS:"stack",sL:"lenguajes",hA:"sobre mí",
      a1:"Lic. en Sistemas — FCyT UADER, 5.º año (en curso)",a2:"Título intermedio: Analista en Sistemas",a3:"Inglés B1",hC:"contacto",
      cv:"cv/Curriculum-Vitae-Luigi-Mete.pdf",langLabel:"Idioma"},
    en:{title:"Luigi Mete — Information Systems student",desc:"Portfolio of Luigi Mete, 5th-year Information Systems (Lic. en Sistemas) student at FCyT UADER and Systems Analyst.",
      skip:"Skip to content",navLabel:"Navigation",nH:"Home",nP:"Projects",nS:"Stack",nA:"About",nC:"Contact",nCv:"Download CV",nGh:"GitHub",nLi:"LinkedIn",zoom:"Enlarge screenshot",close:"Close",shots:"Screenshots",altSd1:"Savedeco, upload screen: a sample save’s export code pasted into the text field, with the Upload file and Decode buttons.",altSd2:"Savedeco, results: the “save summary” panel showing decoded data from the sample save, laid out in cards.",altCg1:"Comgen in dark mode: on the left, the statement “binary strings ending in 01”; on the right, the generated deterministic finite automaton with its definition and state diagram.",altCg2:"Comgen, diagram close-up: two-state automaton for “even number of ones”, with its transition table.",navP:"projects",navS:"stack",navA:"about",navC:"contact",
      role:"Information Systems student / Systems Analyst",loc:"5th year · FCyT UADER · Concepción del Uruguay, Entre Ríos, Argentina",
      ctaP:"see projects",ctaCv:"download CV",ctaC:"contact",hP:"projects",
      sd:"Web viewer that decodes game save files and shows their contents in panels.",
      cg:"Generates automata from problem statements written in Spanish and exports them to JFLAP.",
      st:"Desktop app for dental offices: patients, an appointment schedule integrated with Google Calendar, clinical records with treatments and payments, and a dental chart with voice features.",sv:"Per-company stock app: product inventory, a daily log of sales, purchases and adjustments, and monthly and yearly summaries with balance and best-selling products.",priv:"closed source",altSt1:"SmileTracker: dashboard with patients, today’s appointments and calendar",altSt2:"SmileTracker: weekly appointment schedule connected to Google Calendar",altSt3:"SmileTracker: clinical record with treatments, payments and pending balance",altSt4:"SmileTracker: dental chart with microphone controls for voice dictation",altSv1:"Stock-viewer: product inventory with sample data",altSv2:"Stock-viewer: daily log of sales, purchases and adjustments with sample data",altSv3:"Stock-viewer: monthly and yearly summary with best-selling products, sample data",
      kEd:"studies",vEd:"Information Systems (Lic. en Sistemas) · FCyT UADER · 5th year",kTi:"degree",vTi:"Systems Analyst",kLo:"location",vLo:"Concepción del Uruguay, Entre Ríos, Argentina",kEn:"english",kPr:"projects",
      repo:"repo ↗",hS:"stack",sL:"languages",hA:"about",
      a1:"Information Systems degree (Lic. en Sistemas) — FCyT UADER, 5th year (in progress)",a2:"Intermediate degree: Systems Analyst (Analista en Sistemas)",a3:"English B1",hC:"contact",
      cv:"cv/CV-Luigi-Mete-English.pdf",langLabel:"Language"}
  };
  function apply(l){
    var t=T[l];document.documentElement.lang=l;document.title=t.title;
    document.querySelector('meta[name="description"]').content=t.desc;
    document.querySelectorAll("[data-i18n]").forEach(function(e){e.textContent=t[e.dataset.i18n]});
    document.querySelectorAll("[data-i18n-aria]").forEach(function(e){e.setAttribute("aria-label",t[e.dataset.i18nAria])});
    document.querySelectorAll("[data-i18n-alt]").forEach(function(e){if(t[e.dataset.i18nAlt])e.alt=t[e.dataset.i18nAlt]});
    var lbi=document.querySelector("#lightbox img");if(lbi)lbi.alt=t.zoom;
    document.querySelectorAll(".cv-link").forEach(function(a){a.href=t.cv;a.setAttribute("download","")});
    document.querySelector(".lang").setAttribute("aria-label",t.langLabel);
    document.querySelectorAll(".lang button").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.lang===l)});
  }
  var saved=null;try{saved=localStorage.getItem("lang")}catch(e){}
  var nav=(navigator.languages&&navigator.languages[0])||navigator.language||"es";
  var lang=saved||(/^es/i.test(nav)?"es":"en");
  apply(lang);
  document.querySelectorAll(".lang button").forEach(function(b){b.addEventListener("click",function(){
    apply(b.dataset.lang);try{localStorage.setItem("lang",b.dataset.lang)}catch(e){}
  })});
  // ampliar capturas
  var lb=document.getElementById("lightbox");
  if(lb&&lb.showModal){
    document.querySelectorAll(".zoom").forEach(function(btn){btn.addEventListener("click",function(){
      var img=lb.querySelector("img");img.src=btn.dataset.full;img.alt=btn.querySelector("img").alt;lb.showModal();})});
    lb.querySelector(".lb-close").addEventListener("click",function(){lb.close()});
    lb.addEventListener("click",function(e){if(e.target===lb)lb.close()});
  }
  // ítem activo según scroll
  var links={};document.querySelectorAll('.sidenav a[href^="#"]').forEach(function(a){links[a.getAttribute("href").slice(1)]=a});
  function setActive(id){Object.keys(links).forEach(function(k){if(k===id)links[k].setAttribute("aria-current","true");else links[k].removeAttribute("aria-current")})}
  if("IntersectionObserver" in window){
    var lock=0;Object.keys(links).forEach(function(id){links[id].addEventListener("click",function(){setActive(id);lock=Date.now()+1200})});
    var io=new IntersectionObserver(function(es){if(Date.now()<lock)return;for(var i=0;i<es.length;i++){if(es[i].isIntersecting){setActive(es[i].target.id);break}}},{rootMargin:"-25% 0px -70% 0px"});
    Object.keys(links).forEach(function(id){var el=document.getElementById(id);if(el)io.observe(el)});
    window.addEventListener("scroll",function(){if(Date.now()>=lock&&window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-4)setActive("contacto")},{passive:true});
  }
  setActive(location.hash?location.hash.slice(1):"inicio");
})();
