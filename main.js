/* ── main.js — Serena Spa ────────────────────────────────────────────────
   Toda la interactividad de la página.
   Secciones:
     1. Navbar — sombra al hacer scroll
     2. Servicios — hover con color por tarjeta
     3. FAQ — acordeón
   ────────────────────────────────────────────────────────────────────── */


/* ── HERO CARRUSEL ──────────────────────────────────────────────────────── */

const slides = document.querySelectorAll('.slide');
const puntos = document.querySelectorAll('.punto');
let slideActual = 0;
let intervalo;

function mostrarSlide(n) {
  // Mantiene el índice dentro del rango (vuelve al inicio o al final)
  slideActual = (n + slides.length) % slides.length;

  slides.forEach(s => s.classList.remove('activa'));
  puntos.forEach(p => p.classList.remove('activo'));

  slides[slideActual].classList.add('activa');
  puntos[slideActual].classList.add('activo');
}

function siguienteSlide() { mostrarSlide(slideActual + 1); }
function anteriorSlide() { mostrarSlide(slideActual - 1); }

// Avance automático cada 6 segundos
function iniciarAuto() {
  intervalo = setInterval(siguienteSlide, 6000);
}
function reiniciarAuto() {
  clearInterval(intervalo);
  iniciarAuto();
}

// Flechas
document.querySelector('.flecha-der').addEventListener('click', () => {
  siguienteSlide();
  reiniciarAuto();
});
document.querySelector('.flecha-izq').addEventListener('click', () => {
  anteriorSlide();
  reiniciarAuto();
});

// Puntos
puntos.forEach(punto => {
  punto.addEventListener('click', () => {
    mostrarSlide(Number(punto.dataset.slide));
    reiniciarAuto();
  });
});

// Arranca
iniciarAuto();



/* ── 1. NAVBAR: sombra al hacer scroll ─────────────────────────────────── */

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


/* ── 2. SERVICIOS: hover cambia color de fondo con data-color ──────────── */




/* ── 3. FAQ: acordeón ───────────────────────────────────────────────────── */

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const btn = item.querySelector('.faq-btn');

  btn.addEventListener('click', () => {
    const estaAbierto = item.classList.contains('abierto');

    // Cierra todos los demás
    faqItems.forEach(i => i.classList.remove('abierto'));

    // Si no estaba abierto, lo abre
    if (!estaAbierto) {
      item.classList.add('abierto');
    }
  });
});
