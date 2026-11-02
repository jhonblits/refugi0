"use strict";

/* ============================================================
   PERSONALIZA AQUÍ: todos los textos y fotos de la página.
   Cámbialos por tus propias palabras: eso es lo que más vale.
   ============================================================ */
const CONFIG = {
  // Si lo llenas, el título dice "Respira, Nombre."
  nombre: "",
  firma: "Con todo mi cariño",

  fotoHero: { src: "assets/retrato-tulipanes.jpg", alt: "Una sonrisa tranquila junto a unos tulipanes" },
  video: { src: "assets/video-para-ti.mp4", poster: "assets/video-poster.jpg" },

  intro: "Este es un rincón tranquilo que hice para ti. Tómate tu tiempo: aquí no hay prisa ni nada que demostrar.",

  respira: {
    titulo: "Primero, respira",
    texto: "Si hoy se siente pesado, empecemos por aquí. Inhala cuando el círculo crece y suelta el aire cuando se achica."
  },

  sentir: {
    titulo: "¿Cómo te sientes hoy?",
    texto: "Elige lo que más se parezca. No hay respuestas incorrectas.",
    estados: [
      {
        etiqueta: "Cansada",
        titulo: "Descansar no es rendirse",
        texto: "Llevas mucho encima y es normal que tu cuerpo y tu mente pidan una pausa. No tienes que demostrar nada hoy.",
        gesto: "Toma un vaso de agua, suelta los hombros y respira tres veces profundo."
      },
      {
        etiqueta: "Triste",
        titulo: "Puedes estar triste, y está bien",
        texto: "No tienes que fingir una sonrisa conmigo. Si quieres llorar, llora; si quieres hablar, te escucho; si quieres silencio, me quedo en silencio contigo. Lo que sientes ahora no te define y no dura para siempre.",
        gesto: "Hoy no tienes que explicarlo todo. Solo déjate sentir."
      },
      {
        etiqueta: "Estresada",
        titulo: "Una cosa a la vez",
        texto: "No tienes que resolverlo todo hoy. Escribe en un papel lo que te preocupa y elige solo una cosa pequeña para empezar. El resto puede esperar. Y si se hace muy grande, me llamas y lo miramos juntos.",
        gesto: "Elige una sola cosa pequeña y haz solo esa."
      },
      {
        etiqueta: "Con miedo",
        titulo: "El miedo no significa que no puedas",
        texto: "Tener miedo es de quien se importa y quiere hacer las cosas bien. Ya saliste adelante de cosas difíciles antes, y esta vez no estás sola. Yo creo en ti, incluso cuando tú dudes.",
        gesto: "Pon una mano en el pecho y repite: «Puedo ir paso a paso»."
      },
      {
        etiqueta: "Sin ganas",
        titulo: "Hoy basta con lo mínimo",
        texto: "Hay días sin energía y no son un fracaso. Lo mínimo también cuenta. Mañana será otro día, y yo seguiré aquí.",
        gesto: "Lávate la cara, abre la ventana o come algo rico. Con eso ya hiciste bastante."
      },
      {
        etiqueta: "Bien",
        titulo: "Qué alegría verte bien",
        texto: "Guarda este momento. Me encanta cuando te ríes así. Y recuerda: cuando vuelvan los días grises, esta versión tuya sigue ahí, esperando.",
        gesto: "Haz algo que te guste hoy, solo porque sí."
      }
    ]
  },

  abre: {
    titulo: "Ábrelo cuando…",
    texto: "Cartas para tus días difíciles. Guárdalas y vuelve cuando las necesites.",
    cartas: [
      {
        cuando: "te sientas sola", tinte: "#FFF3E3",
        texto: [
          "No estás sola, aunque a veces lo parezca. Hay alguien que piensa en ti todos los días y se alegra de que existas.",
          "Escríbeme, llámame o imagina mi abrazo. Estoy a un mensaje de distancia."
        ]
      },
      {
        cuando: "dudes de ti", tinte: "#E4DBFF",
        texto: [
          "Mira todo lo que has logrado hasta aquí, y todo lo que has aguantado sin que nadie lo notara.",
          "Si tus dudas hablan muy fuerte, escucha lo que yo veo: una mujer valiente, inteligente y con un corazón enorme."
        ]
      },
      {
        cuando: "tengas un día pesado", tinte: "#FFD9C7",
        texto: [
          "Los días pesados también pasan. No tienes que ser fuerte todo el tiempo.",
          "Toma un respiro, come algo y, si puedes, sal a caminar un rato. Al final del día, ya habrás hecho suficiente."
        ]
      },
      {
        cuando: "no puedas dormir", tinte: "#D4E6FF",
        texto: [
          "Aparta el celular un momento, respira lento y piensa en algo bonito: un paseo, una risa, un lugar tranquilo.",
          "Aunque estemos lejos, estoy contigo. Descansa tranquila; mañana lo vemos con más calma."
        ]
      },
      {
        cuando: "temas no lograrlo", tinte: "#FFEBB8",
        texto: [
          "No tienes que hacerlo perfecto, solo dar un paso a la vez.",
          "Yo celebro cada avance tuyo, por pequeño que sea. Y si algo no sale como esperabas, seguimos intentando juntos."
        ]
      },
      {
        cuando: "me extrañes", tinte: "#FFD3E1", video: true,
        texto: [
          "Dale play a este video. Aunque no estemos juntos, estás en mi mente."
        ]
      }
    ]
  },

  veo: {
    titulo: "Lo que yo veo en ti",
    texto: "A veces uno se olvida. Por eso te lo recuerdo.",
    fotos: [
      { src: "assets/retrato-tulipanes.jpg", alt: "Sonriendo junto a unos tulipanes", pie: "Tu sonrisa tranquila: mi lugar favorito para descansar la mirada.", ratio: "1 / 1", pos: "55% 40%" },
      { src: "assets/lugar-rio.jpg",         alt: "Dentro del río, rodeada de rocas", pie: "Eres más fuerte de lo que crees. Como el río, siempre sigues avanzando.", ratio: "4 / 5", pos: "45% 50%" },
      { src: "assets/lugar-flamencos.jpg",   alt: "En un puente bajo dos flamencos gigantes", pie: "Tu ternura hace más bonito todo lo que toca.", ratio: "4 / 5", pos: "46% 50%" },
      { src: "assets/lugar-valle.jpg",       alt: "En un mirador sobre el valle", pie: "Incluso en los días nublados, sigues viendo lo bonito.", ratio: "1 / 1", pos: "78% 50%" },
      { src: "assets/juntos-comida.jpg",     alt: "Los dos sentados a una mesa", pie: "No tienes que cargar con todo sola. Estoy a tu lado.", ratio: "4 / 3", pos: "50% 50%" },
      { src: "assets/lugar-fuente.jpg",      alt: "Sentada junto a una fuente de piedra", pie: "Mereces descansar. Y mereces que te cuiden.", ratio: "1 / 1", pos: "40% 50%" }
    ]
  },

  jardin: {
    titulo: "Florecer toma su tiempo",
    texto: "No hay prisa. Cada día cuenta, incluso los lentos. Un tulipán no se obliga a abrir: crece a su ritmo."
  },

  promesas: {
    titulo: "Mis promesas para ti",
    lista: [
      "Escucharte sin apuro y sin juzgar, sin querer arreglarlo todo de golpe.",
      "Quedarme en los días difíciles, no solo en los buenos.",
      "Celebrar tus avances, aunque sean pequeños.",
      "Recordarte lo valiosa que eres cuando se te olvide.",
      "Abrazarte fuerte. Esa sí que la cumplo."
    ]
  },

  final: {
    titulo: "Siempre voy a estar para ti.",
    texto: "Después de la noche, siempre amanece. Y cuando amanezca, aquí voy a estar.",
    foto: { src: "assets/juntos-abrazo.jpg", alt: "Los dos juntos" },
    boton: "Quiero un abrazo",
    botonOtro: "Otro abrazo",
    abrazo: "Abrazo enviado. Respira hondo: estoy contigo."
  },

  // Línea de ayuda que aparece al final. Déjala vacía ("") para quitarla.
  ayuda: "Si alguna vez sientes que ya no puedes más, además de mí puedes llamar gratis a la Línea 113, opción 5 (salud mental, Minsa). Mereces apoyo de verdad."
};

/* ============================================================
   A partir de aquí no necesitas tocar nada.
   ============================================================ */
const $ = (s, r = document) => r.querySelector(s);
const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const azar = (a, b) => a + Math.random() * (b - a);
const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt) e.textContent = txt; return e; };

/* ---------- Textos principales ---------- */
if (CONFIG.nombre.trim()) {
  $("#titulo").innerHTML = "Respira, " + CONFIG.nombre.trim().replace(/[<>&]/g, "") + ".<br>Aquí estoy.";
}
$("#intro").textContent = CONFIG.intro;
$("#tRespira").textContent = CONFIG.respira.titulo;
$("#pRespira").textContent = CONFIG.respira.texto;
$("#tSentir").textContent = CONFIG.sentir.titulo;
$("#pSentir").textContent = CONFIG.sentir.texto;
$("#tAbre").textContent = CONFIG.abre.titulo;
$("#pAbre").textContent = CONFIG.abre.texto;
$("#tVeo").textContent = CONFIG.veo.titulo;
$("#pVeo").textContent = CONFIG.veo.texto;
$("#tJardin").textContent = CONFIG.jardin.titulo;
$("#pJardin").textContent = CONFIG.jardin.texto;
$("#tPromesas").textContent = CONFIG.promesas.titulo;
$("#tFinal").textContent = CONFIG.final.titulo;
$("#pFinal").textContent = CONFIG.final.texto;
$("#btnAbrazo").textContent = CONFIG.final.boton;
$("#ayuda").textContent = CONFIG.ayuda || "";

function foto(src, alt, lazy = true) {
  const i = document.createElement("img");
  i.src = src; i.alt = alt || ""; i.decoding = "async";
  if (lazy) i.loading = "lazy";
  return i;
}
$("#luna").appendChild(foto(CONFIG.fotoHero.src, CONFIG.fotoHero.alt, false));
$("#fotoFinal").appendChild(foto(CONFIG.final.foto.src, CONFIG.final.foto.alt));

/* ---------- Cielo: estrellas y luciérnagas ---------- */
const estrellas = $("#estrellas");
const luciernagas = $("#luciernagas");
for (let i = 0; i < 70; i++) {
  const s = el("span", "estrella");
  const t = azar(1, 3);
  s.style.cssText = `left:${azar(0, 100)}%;top:${azar(0, 100)}%;width:${t}px;height:${t}px;animation-delay:${-azar(0, 3.4)}s;animation-duration:${azar(2.4, 5)}s`;
  estrellas.appendChild(s);
}
if (!reducido) {
  const n = window.innerWidth < 600 ? 9 : 15;
  for (let i = 0; i < n; i++) {
    const l = el("span", "luciernaga");
    l.style.left = azar(3, 96) + "%";
    l.style.top = azar(8, 92) + "%";
    l.style.setProperty("--x1", azar(-60, 60) + "px");
    l.style.setProperty("--y1", azar(-80, 80) + "px");
    l.style.setProperty("--x2", azar(-120, 120) + "px");
    l.style.setProperty("--y2", azar(-120, 120) + "px");
    l.style.setProperty("--dur", azar(14, 26) + "s");
    l.style.setProperty("--del", -azar(0, 20) + "s");
    luciernagas.appendChild(l);
  }
}

// Las estrellas se apagan y las luciérnagas se van mientras amanece.
let pendiente = false;
function actualizarCielo() {
  pendiente = false;
  const h = document.documentElement;
  const p = window.scrollY / Math.max(1, h.scrollHeight - window.innerHeight);
  estrellas.style.opacity = Math.max(0, 1 - p * 1.8).toFixed(2);
  luciernagas.style.opacity = Math.max(0, 1 - Math.max(0, p - 0.55) * 3).toFixed(2);
}
window.addEventListener("scroll", () => {
  if (!pendiente) { pendiente = true; requestAnimationFrame(actualizarCielo); }
}, { passive: true });
actualizarCielo();

/* ---------- Respiración guiada ---------- */
const aire = $("#aire");
const aireTexto = $("#aireTexto");
const btnAire = $("#btnAire");
let respirando = false, tAire = 0, ciclos = 0;

function pasos() {
  if (!respirando) return;
  aire.classList.add("inhala");
  aireTexto.textContent = "Inhala…";
  tAire = setTimeout(() => {
    aireTexto.textContent = "Sostén…";
    tAire = setTimeout(() => {
      aire.classList.remove("inhala");
      aireTexto.textContent = "Exhala…";
      tAire = setTimeout(() => {
        ciclos++;
        if (ciclos >= 5) { detenerAire(true); return; }
        pasos();
      }, 6000);
    }, 1000);
  }, 4000);
}
function detenerAire(terminado = false) {
  respirando = false; clearTimeout(tAire);
  aire.classList.remove("inhala");
  aireTexto.textContent = terminado ? "Muy bien" : "Listos";
  btnAire.textContent = terminado ? "Repetir" : "Empezar";
}
btnAire.addEventListener("click", () => {
  if (respirando) { detenerAire(); return; }
  respirando = true; ciclos = 0;
  btnAire.textContent = "Detener";
  pasos();
});

/* ---------- ¿Cómo te sientes? ---------- */
const chips = $("#chips");
const caja = $("#mensaje");
CONFIG.sentir.estados.forEach(e => {
  const b = el("button", "chip", e.etiqueta);
  b.type = "button";
  b.setAttribute("aria-pressed", "false");
  b.addEventListener("click", () => {
    chips.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", "false"));
    b.setAttribute("aria-pressed", "true");
    $("#mTitulo").textContent = e.titulo;
    $("#mTexto").textContent = e.texto;
    $("#mGesto").textContent = e.gesto;
    caja.hidden = false;
    caja.style.animation = "none"; void caja.offsetWidth; caja.style.animation = "";
  });
  chips.appendChild(b);
});

/* ---------- Cartas "Ábrelo cuando…" ---------- */
const dlg = $("#carta");
const sobres = $("#sobres");
let abridor = null;

CONFIG.abre.cartas.forEach((c, i) => {
  const b = el("button", "sobre-carta");
  b.type = "button";
  b.style.setProperty("--tinte", c.tinte || "#FFF3E3");
  b.style.setProperty("--giro", [-2, 1.5, -1, 2, -1.5, 1][i % 6] + "deg");
  b.appendChild(el("span", "sello", "♥")).setAttribute("aria-hidden", "true");
  b.appendChild(el("small", "", "Ábrelo cuando"));
  b.appendChild(el("span", "cuando", c.cuando));
  b.addEventListener("click", () => abrirCarta(c, b));
  sobres.appendChild(b);
});

function abrirCarta(c, boton) {
  abridor = boton;
  $("#cartaTitulo").textContent = "Ábrelo cuando " + c.cuando;
  const cuerpo = $("#cartaCuerpo");
  cuerpo.textContent = "";
  if (c.video) {
    const v = document.createElement("video");
    v.controls = true; v.playsInline = true; v.preload = "metadata";
    v.poster = CONFIG.video.poster; v.src = CONFIG.video.src;
    cuerpo.appendChild(v);
  }
  c.texto.forEach(t => cuerpo.appendChild(el("p", "", t)));
  $("#cartaFirma").textContent = CONFIG.firma;
  if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
}
function cerrarCarta() {
  const v = $("#cartaCuerpo video");
  if (v) v.pause();
  if (typeof dlg.close === "function") dlg.close(); else dlg.removeAttribute("open");
}
$("#cartaCerrar").addEventListener("click", cerrarCarta);
dlg.addEventListener("click", ev => { if (ev.target === dlg) cerrarCarta(); });
dlg.addEventListener("close", () => {
  const v = $("#cartaCuerpo video");
  if (v) { v.pause(); v.removeAttribute("src"); v.load(); }
  if (abridor) abridor.focus({ preventScroll: true });
});

/* ---------- Postales ---------- */
const postales = $("#postales");
CONFIG.veo.fotos.forEach(f => {
  const fig = el("figure", "postal revela");
  fig.style.setProperty("--ratio", f.ratio || "4 / 5");
  fig.style.setProperty("--pos", f.pos || "50% 50%");
  fig.appendChild(foto(f.src, f.alt));
  fig.appendChild(el("figcaption", "", f.pie));
  postales.appendChild(fig);
});

/* ---------- Tulipanes que crecen ---------- */
function tulipan(color, alto, retraso) {
  const ns = "http://www.w3.org/2000/svg";
  const wrap = document.createElement("div");
  wrap.innerHTML =
    `<svg xmlns="${ns}" class="tulipan" viewBox="0 0 60 200" style="--h:${alto}px;--d:${retraso}s" aria-hidden="true">
       <path class="hoja" d="M29 190 C6 176 4 140 10 118 C26 132 32 160 29 190Z" fill="#7BC144"/>
       <path class="hoja" d="M31 176 C52 165 54 135 50 117 C36 129 30 151 31 176Z" fill="#5FA43A"/>
       <path class="tallo" d="M30 198 C28 150 32 110 30 66" fill="none" stroke="#5FA43A" stroke-width="5" stroke-linecap="round"/>
       <g transform="translate(30 62)">
         <g class="flor">
           <path d="M0 8 C-24 4 -26 -32 -19 -50 C-11 -40 -5 -42 0 -56 C5 -42 11 -40 19 -50 C26 -32 24 4 0 8Z" fill="${color}"/>
           <path d="M0 6 C-10 2 -12 -26 -8 -40 C-4 -30 -2 -30 0 -44 C2 -30 4 -30 8 -40 C12 -26 10 2 0 6Z" fill="rgba(255,255,255,.24)"/>
         </g>
       </g>
     </svg>`;
  return wrap.firstElementChild;
}
const jardin = $("#jardinTulipanes");
const base = window.innerWidth < 500 ? 0.8 : 1;
[
  ["#E86A8F", 200, 0.3], ["#F7B24A", 245, 0.9], ["#E0453A", 285, 0],
  ["#B9A7FF", 230, 0.6], ["#FF8A5B", 190, 1.2]
].forEach(([c, h, d]) => jardin.appendChild(tulipan(c, Math.round(h * base), d)));

/* ---------- Promesas ---------- */
const lista = $("#listaPromesas");
CONFIG.promesas.lista.forEach((t, i) => {
  const li = el("li", "revela", t);
  li.style.setProperty("--r", (i * 0.12) + "s");
  lista.appendChild(li);
});

/* ---------- Aparecer al hacer scroll ---------- */
const observador = "IntersectionObserver" in window
  ? new IntersectionObserver(entradas => {
      entradas.forEach(en => {
        if (!en.isIntersecting) return;
        en.target.classList.add("ve");
        observador.unobserve(en.target);
      });
    }, { threshold: 0.18 })
  : null;
document.querySelectorAll(".revela").forEach(e => observador ? observador.observe(e) : e.classList.add("ve"));

function alEntrar(nodo, clase, umbral = 0.35) {
  if (!observador) { nodo.classList.add(clase); return; }
  const o = new IntersectionObserver(es => {
    if (es.some(x => x.isIntersecting)) { nodo.classList.add(clase); o.disconnect(); }
  }, { threshold: umbral });
  o.observe(nodo);
}
alEntrar(jardin, "crece", 0.4);
alEntrar($("#amanecer"), "sale", 0.5);

/* ---------- Abrazo ---------- */
const capa = $("#capaAbrazo");
const COLORES = ["#E0453A", "#E86A8F", "#F7B24A", "#B9A7FF", "#FFF3E3", "#FF8A5B"];
let abrazos = 0;

function corazon() {
  const c = el("span", "corazon-sube", "♥");
  c.style.left = azar(2, 96) + "%";
  c.style.fontSize = azar(20, 50) + "px";
  c.style.color = COLORES[Math.floor(Math.random() * COLORES.length)];
  c.style.animationDuration = azar(4.5, 8) + "s";
  c.style.setProperty("--dx", azar(-70, 70) + "px");
  c.style.setProperty("--rot", azar(-40, 40) + "deg");
  c.addEventListener("animationend", () => c.remove());
  capa.appendChild(c);
}

$("#btnAbrazo").addEventListener("click", ev => {
  abrazos++;
  const r = ev.currentTarget.getBoundingClientRect();
  if (!reducido) {
    const b = el("span", "brillo");
    b.style.left = r.left + r.width / 2 + "px";
    b.style.top = r.top + r.height / 2 + "px";
    b.addEventListener("animationend", () => b.remove());
    capa.appendChild(b);
    for (let i = 0; i < 28; i++) setTimeout(corazon, i * 70);
  }
  $("#abrazoMsg").textContent = CONFIG.final.abrazo;
  ev.currentTarget.textContent = CONFIG.final.botonOtro;
});
