(function(){
  var T={
    es:{title:"Luigi Mete — Estudiante de Lic. en Sistemas",desc:"Portfolio de Luigi Mete, estudiante de 5.º año de Lic. en Sistemas en FCyT UADER y Analista en Sistemas.",
      skip:"Saltar al contenido",navP:"proyectos",navS:"stack",navA:"sobre mí",navC:"contacto",
      role:"Estudiante de Lic. en Sistemas / Analista en Sistemas",loc:"5.º año · FCyT UADER · Concepción del Uruguay, Entre Ríos",
      ctaP:"ver proyectos",ctaCv:"descargar CV",ctaC:"contacto",hP:"proyectos",
      sd:"Visor web que decodifica partidas guardadas de juegos y muestra su contenido en paneles.",
      cg:"Genera autómatas a partir de enunciados en español y los exporta a JFLAP.",
      repo:"repo ↗",hS:"stack",sL:"lenguajes",hA:"sobre mí",
      a1:"Lic. en Sistemas — FCyT UADER, 5.º año (en curso)",a2:"Título intermedio: Analista en Sistemas",a3:"Inglés B1",hC:"contacto",
      cv:"cv/Curriculum-Vitae-Luigi-Mete.pdf",langLabel:"Idioma"},
    en:{title:"Luigi Mete — Information Systems student",desc:"Portfolio of Luigi Mete, 5th-year Information Systems (Lic. en Sistemas) student at FCyT UADER and Systems Analyst.",
      skip:"Skip to content",navP:"projects",navS:"stack",navA:"about",navC:"contact",
      role:"Information Systems student / Systems Analyst",loc:"5th year · FCyT UADER · Concepción del Uruguay, Entre Ríos, Argentina",
      ctaP:"see projects",ctaCv:"download CV",ctaC:"contact",hP:"projects",
      sd:"Web viewer that decodes game save files and shows their contents in panels.",
      cg:"Generates automata from problem statements written in Spanish and exports them to JFLAP.",
      repo:"repo ↗",hS:"stack",sL:"languages",hA:"about",
      a1:"Information Systems degree (Lic. en Sistemas) — FCyT UADER, 5th year (in progress)",a2:"Intermediate degree: Systems Analyst (Analista en Sistemas)",a3:"English B1",hC:"contact",
      cv:"cv/CV-Luigi-Mete-English.pdf",langLabel:"Language"}
  };
  function apply(l){
    var t=T[l];document.documentElement.lang=l;document.title=t.title;
    document.querySelector('meta[name="description"]').content=t.desc;
    document.querySelectorAll("[data-i18n]").forEach(function(e){e.textContent=t[e.dataset.i18n]});
    var cv=document.getElementById("cv");cv.href=t.cv;cv.setAttribute("download","");
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
})();
