// ----- Sprachwahl Dropdown (weitere Sprache-Features können ergänzt werden) -----
const langSelect = document.querySelector('.menu-lang');
if (langSelect) {
  langSelect.addEventListener('change', function (e) {
    // Placeholder: Später echten i18n-Mechanismus ergänzen
    alert('Sprachauswahl: ' + e.target.value);
    // Optional: Seite könnte hier dynamisch übersetzt werden
  });
}

// ----- Navigation: Aktiver Link hervorheben -----
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    // Placeholder: Später Navigation/Scroll zu Sektionen ergänzen
  });
});

// ----- Dummy-Login & Registrierung (Platzhalter) -----
document.querySelectorAll('.nav-actions button').forEach(btn => {
  btn.addEventListener('click', function () {
    if (this.classList.contains('secondary')) {
      alert('Login-Funktion bald verfügbar!');
    } else {
      alert('Registrierung bald verfügbar!');
    }
  });
});

// ----- Example: Hero-Button Interaktion für spätere Features -----
const startBtn = document.querySelector('.cta-btn');
if (startBtn) {
  startBtn.addEventListener('click', function () {
    alert('Du bist bereit für deine Fitpause, mehr Features folgen!');
  });
}

// ----- Weitere, zukunftsfähige Strukturen / Features können hier ergänzt werden -----
