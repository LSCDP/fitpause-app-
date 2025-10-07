// Übersetzungen für die Seite
const translations = {
  de: {
    cookie_text: "Wir verwenden Cookies, um deine Erfahrung zu verbessern. Durch die Nutzung unserer Website stimmst du unserer Cookie-Richtlinie zu.",
    accept_cookies: "Akzeptieren",
    nav_features: "Features",
    nav_pricing: "Preise",
    nav_how: "So funktioniert's",
    hero_title: "Personalisierte Ernährung war noch nie so einfach",
    hero_subtitle: "KI-gestützte Wochenpläne & Rezepte für jeden Geschmack",
    feature_1: "✨ Individuell angepasst an deine Bedürfnisse",
    feature_2: "🥗 Gesunde Rezepte für jeden Tag",
    feature_3: "🛒 Automatische Einkaufslisten",
    feature_4: "⏰ Spart Zeit und Aufwand",
    get_started: "Jetzt kostenlos starten",
    example_title: "So könnte dein Wochenplan aussehen",
    allergy_gluten: "Gluten",
    allergy_lactose: "Laktose",
    add_custom_allergy: "Hinzufügen",
    meal_mon: "Gemüsepfanne", mon:"Montag",
    meal_tue: "Quinoa-Salat mit Avocado", tue:"Dienstag",
    meal_wed: "Lachs mit Süßkartoffeln", wed:"Mittwoch",
    meal_thu: "Hähnchen-Curry mit Reis", thu:"Donnerstag",
    meal_fri: "Pasta mit Gemüse", fri:"Freitag",
    meal_sat: "Veggie-Burger", sat:"Samstag",
    meal_sun: "Asiatisches Stir-Fry", sun:"Sonntag",
    trust_gdpr: "DSGVO-konform",
    trust_email: "Sichere E-Mails",
    trust_ai: "KI-gestützt",
    trust_mobile: "Mobil optimiert",
    custom_allergy_placeholder: "Eigene Allergie hinzufügen"
  },
  en: {
    cookie_text: "We use cookies to improve your experience. By using our website, you agree to our cookie policy.",
    accept_cookies: "Accept",
    nav_features: "Features",
    nav_pricing: "Pricing",
    nav_how: "How it works",
    hero_title: "Personalized nutrition has never been easier",
    hero_subtitle: "AI-powered weekly plans & recipes for every taste",
    feature_1: "✨ Individually tailored to your needs",
    feature_2: "🥗 Healthy recipes for every day",
    feature_3: "🛒 Automatic shopping lists",
    feature_4: "⏰ Saves time and effort",
    get_started: "Start for free now",
    example_title: "This could be your weekly plan",
    allergy_gluten: "Gluten",
    allergy_lactose: "Lactose",
    add_custom_allergy: "Add",
    meal_mon: "Vegetable Stir-Fry", mon:"Monday",
    meal_tue: "Quinoa Salad with Avocado", tue:"Tuesday",
    meal_wed: "Salmon with Sweet Potatoes", wed:"Wednesday",
    meal_thu: "Chicken Curry with Rice", thu:"Thursday",
    meal_fri: "Pasta with Vegetables", fri:"Friday",
    meal_sat: "Veggie Burger", sat:"Saturday",
    meal_sun: "Asian Stir-Fry", sun:"Sunday",
    trust_gdpr: "GDPR-compliant",
    trust_email: "Secure emails",
    trust_ai: "AI-powered",
    trust_mobile: "Mobile-optimized",
    custom_allergy_placeholder: "Add your own allergy"
  },
  es: {
    cookie_text: "Utilizamos cookies para mejorar tu experiencia. Al usar nuestro sitio web, aceptas nuestra política de cookies.",
    accept_cookies: "Aceptar",
    nav_features: "Características",
    nav_pricing: "Precios",
    nav_how: "Cómo funciona",
    hero_title: "La nutrición personalizada nunca fue tan fácil",
    hero_subtitle: "Planes y recetas semanales con IA para todos los gustos",
    feature_1: "✨ Adaptado individualmente a tus necesidades",
    feature_2: "🥗 Recetas saludables para cada día",
    feature_3: "🛒 Listas de compras automáticas",
    feature_4: "⏰ Ahorra tiempo y esfuerzo",
    get_started: "Comienza gratis ahora",
    example_title: "Así podría verse tu plan semanal",
    allergy_gluten: "Gluten",
    allergy_lactose: "Lactosa",
    add_custom_allergy: "Agregar",
    meal_mon: "Verduras salteadas", mon:"Lunes",
    meal_tue: "Ensalada de quinoa y aguacate", tue:"Martes",
    meal_wed: "Salmón con batatas", wed:"Miércoles",
    meal_thu: "Pollo al curry con arroz", thu:"Jueves",
    meal_fri: "Pasta con verduras", fri:"Viernes",
    meal_sat: "Hamburguesa vegetariana", sat:"Sábado",
    meal_sun: "Salteado asiático", sun:"Domingo",
    trust_gdpr: "Cumple con GDPR",
    trust_email: "Correos electrónicos seguros",
    trust_ai: "Con IA",
    trust_mobile: "Optimizado para móviles",
    custom_allergy_placeholder: "Agrega tu propia alergia"
  },
  fr: {
    cookie_text: "Nous utilisons des cookies pour améliorer votre expérience. En utilisant notre site, vous acceptez notre politique de cookies.",
    accept_cookies: "Accepter",
    nav_features: "Fonctionnalités",
    nav_pricing: "Tarifs",
    nav_how: "Comment ça marche",
    hero_title: "La nutrition personnalisée n’a jamais été aussi facile",
    hero_subtitle: "Plans hebdomadaires et recettes pilotés par l’IA",
    feature_1: "✨ Adapté à vos besoins individuels",
    feature_2: "🥗 Recettes saines pour chaque jour",
    feature_3: "🛒 Listes de courses automatiques",
    feature_4: "⏰ Gain de temps et d’efforts",
    get_started: "Commencez gratuitement",
    example_title: "Voici à quoi pourrait ressembler votre semaine",
    allergy_gluten: "Gluten",
    allergy_lactose: "Lactose",
    add_custom_allergy: "Ajouter",
    meal_mon: "Poêlée de légumes", mon:"Lundi",
    meal_tue: "Salade de quinoa à l’avocat", tue:"Mardi",
    meal_wed: "Saumon aux patates douces", wed:"Mercredi",
    meal_thu: "Curry de poulet au riz", thu:"Jeudi",
    meal_fri: "Pâtes aux légumes", fri:"Vendredi",
    meal_sat: "Burger végétarien", sat:"Samedi",
    meal_sun: "Wok asiatique", sun:"Dimanche",
    trust_gdpr: "Conforme RGPD",
    trust_email: "Emails sécurisés",
    trust_ai: "Piloté par l’IA",
    trust_mobile: "Optimisé mobile",
    custom_allergy_placeholder: "Ajoutez votre allergie"
  }
};

let currentLanguage = "de";

// Automatische IP-basierte Sprachempfehlung (Geo-IP)
fetch("https://ipapi.co/json/")
  .then(response => response.json())
  .then(data => {
    const country = data.country_code;
    const map = { DE: "de", AT: "de", CH: "de", FR: "fr", ES: "es", GB: "en", US: "en" };
    if(map[country]) {
      switchLanguage(map[country]);
    }
  }).catch(() => switchLanguage("de"));

function switchLanguage(lang) {
  currentLanguage = lang;
  Object.keys(translations[lang]).forEach(key => {
    const el = document.getElementById(key);
    if (el) {
      if(key==="custom_allergy_placeholder") el.placeholder = translations[lang][key];
      else el.textContent = translations[lang][key];
    }
  });
  // Button-Highlight
  ["de","en","es","fr"].forEach(l => {
    let b = document.getElementById("lang_" + l);
    if(b) b.classList.toggle("active", l===lang);
  });
}

// Cookie-Banner
function acceptCookies() {
  document.getElementById('cookie-notice').style.display = "none";
}

// Questionnaire/Allergie
let selectedAllergies = [];
function toggleAllergy(allergy, event) {
  const button = event.target;
  if (selectedAllergies.includes(allergy)) {
    selectedAllergies = selectedAllergies.filter(a => a !== allergy);
    button.classList.remove('selected');
  } else {
    selectedAllergies.push(allergy);
    button.classList.add('selected');
  }
  updateAllergyDisplay();
}
function addCustomAllergy() {
  const input = document.getElementById('custom-allergy');
  const customAllergy = input.value.trim();
  if (customAllergy && !selectedAllergies.includes(customAllergy)) {
    selectedAllergies.push(customAllergy);
    input.value = '';
    updateAllergyDisplay();
  }
}
function updateAllergyDisplay() {
  const tagsContainer = document.getElementById('allergy-tags');
  const hiddenInput = document.getElementById('allergies-hidden');
  tagsContainer.innerHTML = selectedAllergies.map(allergy => `<span class="allergy-tag">${allergy}</span>`).join('');
  hiddenInput.value = selectedAllergies.join(', ');
}
function removeAllergy(allergy) {
  selectedAllergies = selectedAllergies.filter(a => a !== allergy);
  const button = document.querySelector(`[onclick="toggleAllergy('${allergy}', event)"]`);
  if (button) button.classList.remove('selected');
  updateAllergyDisplay();
}
// Chat Funktion
function toggleChat() {
  alert("KI-Chat Assistent - Bald verfügbar!");
}

// Initialisieren Übersetzung
document.addEventListener("DOMContentLoaded", function(){
  switchLanguage(currentLanguage);
});
