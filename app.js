// Fitpause App JavaScript
let currentLanguage = 'de';

// Übersetzungen (KORRIGIERTE VERSION mit ES/FR)
const translations = {
    de: {
        hero_title: "Personalisierte Ernährung war noch nie so einfach",
        hero_subtitle: "KI-gestützte Wochenpläne & Rezepte für jeden Geschmack",
        get_started: "Jetzt starten",
        questionnaire_title: "Erzähle uns von dir"
    },
    en: {
        hero_title: "Personalized nutrition has never been easier",
        hero_subtitle: "AI-powered weekly plans & recipes for every taste",
        get_started: "Get Started",
        questionnaire_title: "Tell us about yourself"
    },
    es: {
        hero_title: "La nutrición personalizada nunca fue tan fácil",
        hero_subtitle: "Planes semanales y recetas con IA para todos los gustos",
        get_started: "Empezar ahora",
        questionnaire_title: "Cuéntanos sobre ti"
    },
    fr: {
        hero_title: "La nutrition personnalisée n'a jamais été aussi simple",
        hero_subtitle: "Plans hebdomadaires IA et recettes pour tous les goûts",
        get_started: "Commencer maintenant",
        questionnaire_title: "Parlez-nous de vous"
    }
};

// Sprache wechseln
function switchLanguage(lang) {
    currentLanguage = lang;
    updateUI();
    localStorage.setItem('fitpause-language', lang);
}

// UI aktualisieren
function updateUI() {
    const elements = {
        'hero-title': 'hero_title',
        'hero-subtitle': 'hero_subtitle', 
        'get-started': 'get_started'
    };
    
    Object.keys(elements).forEach(elementId => {
        const element = document.getElementById(elementId);
        const translationKey = elements[elementId];
        if (element && translations[currentLanguage][translationKey]) {
            element.textContent = translations[currentLanguage][translationKey];
        }
    });
}

// Fragebogen anzeigen
function showQuestionnaire() {
    document.getElementById('questionnaire').style.display = 'block';
    document.querySelector('.hero').style.display = 'none';
}

// Chat togglen
function toggleChat() {
    alert('KI-Chat-Assistent: Hallo! Wie kann ich Ihnen helfen?');
}

// Form Submit Handler
document.addEventListener('DOMContentLoaded', function() {
    // Gespeicherte Sprache laden
    const savedLang = localStorage.getItem('fitpause-language');
    if (savedLang) {
        currentLanguage = savedLang;
        updateUI();
    }
    
    // Form Handler
    const form = document.getElementById('user-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Meal Plan anzeigen
            document.getElementById('questionnaire').style.display = 'none';
            document.getElementById('meal-plan').style.display = 'block';
        });
    }
});
