// ===== GLOBAL VARIABLES =====
let currentStep = 1;
let totalSteps = 5;
let selectedGoal = '';
let selectedDiet = '';
let selectedAllergies = [];
let selectedDetails = {};
let currentLanguage = 'de';

// ===== LANGUAGE TRANSLATIONS =====
const translations = {
  de: {
    hero_title: "Dein smarter Ernährungsplan per KI",
    hero_subtitle: "Erhalte individuelle Wochenpläne, Rezepte und Einkaufsliste auf Basis deiner Präferenzen!",
    cta_start: "Jetzt kostenlos starten",
    trust_rating: "4.9/5 Sterne",
    trust_users: "10.000+ Nutzer",
    trust_secure: "DSGVO-konform",
    nav_features: "Funktionen",
    nav_pricing: "Preise",
    nav_blog: "Blog",
    nav_contact: "Kontakt",
    onboarding_title: "Starte dein Onboarding",
    step: "Schritt",
    of: "von",
    step1_title: "Was ist dein Hauptziel?",
    goal_lose_weight: "Abnehmen",
    goal_build_muscle: "Muskeln aufbauen",
    goal_stay_fit: "Fit bleiben",
    goal_eat_healthy: "Gesünder essen",
    step2_title: "Wie ernährst du dich?",
    diet_omnivore: "Alles",
    diet_vegetarian: "Vegetarisch",
    diet_vegan: "Vegan",
    diet_keto: "Keto",
    step3_title: "Hast du Allergien oder Unverträglichkeiten?",
    allergy_common: "Häufige Allergien:",
    allergy_gluten: "Gluten",
    allergy_lactose: "Laktose",
    allergy_nuts: "Nüsse",
    allergy_shellfish: "Meeresfrüchte",
    allergy_eggs: "Eier",
    allergy_soy: "Soja",
    allergy_fish: "Fisch",
    allergy_sesame: "Sesam",
    allergy_custom: "Weitere Allergien:",
    allergy_placeholder: "z.B. Tomaten, Zwiebeln...",
    add: "Hinzufügen",
    allergy_selected: "Ausgewählt:",
    step4_title: "Weitere Details",
    people_count: "Anzahl Personen:",
    cooking_time: "Kochzeit pro Mahlzeit:",
    budget: "Budget pro Person/Tag:",
    step5_title: "Fast geschafft!",
    step5_subtitle: "Wir senden dir deinen personalisierten Plan per E-Mail zu.",
    email_placeholder: "deine@email.de",
    privacy_consent: "Ich stimme der Datenschutzerklärung zu",
    newsletter_consent: "Ich möchte den Newsletter erhalten (optional)",
    prev: "Zurück",
    next: "Weiter",
    create_plan: "Plan erstellen",
    menu_title: "Dein 7-Tage Menüplan",
    menu_subtitle: "Jeden Tag neue, gesunde und leckere Gerichte",
    chat_tooltip: "Frag mich alles!",
    chat_title: "🤖 FitPause Assistent",
    chat_welcome: "Hallo! Ich bin dein FitPause-Assistent. Wie kann ich dir helfen?",
    chat_placeholder: "Stelle mir eine Frage...",
    send: "Senden",
    cookie_text: "Wir nutzen Cookies für bestes Nutzererlebnis. Daten & Tracking erst nach Einwilligung!",
    accept: "Akzeptieren",
    decline: "Ablehnen"
  },
  en: {
    hero_title: "Your Smart Nutrition Plan by AI",
    hero_subtitle: "Get weekly plans & recipes tailored to your goals.",
    cta_start: "Start for free",
    trust_rating: "4.9/5 stars",
    trust_users: "10,000+ users",
    trust_secure: "GDPR compliant",
    nav_features: "Features",
    nav_pricing: "Pricing",
    nav_blog: "Blog",
    nav_contact: "Contact",
    onboarding_title: "Start your onboarding",
    step: "Step",
    of: "of",
    step1_title: "What is your main goal?",
    goal_lose_weight: "Lose weight",
    goal_build_muscle: "Build muscle",
    goal_stay_fit: "Stay fit",
    goal_eat_healthy: "Eat healthier",
    step2_title: "How do you eat?",
    diet_omnivore: "Everything",
    diet_vegetarian: "Vegetarian",
    diet_vegan: "Vegan",
    diet_keto: "Keto",
    step3_title: "Do you have allergies or intolerances?",
    allergy_common: "Common allergies:",
    allergy_gluten: "Gluten",
    allergy_lactose: "Lactose",
    allergy_nuts: "Nuts",
    allergy_shellfish: "Shellfish",
    allergy_eggs: "Eggs",
    allergy_soy: "Soy",
    allergy_fish: "Fish",
    allergy_sesame: "Sesame",
    allergy_custom: "Other allergies:",
    allergy_placeholder: "e.g. tomatoes, onions...",
    add: "Add",
    allergy_selected: "Selected:",
    step4_title: "More details",
    people_count: "Number of people:",
    cooking_time: "Cooking time per meal:",
    budget: "Budget per person/day:",
    step5_title: "Almost done!",
    step5_subtitle: "We'll send your personalized plan via email.",
    email_placeholder: "your@email.com",
    privacy_consent: "I agree to the privacy policy",
    newsletter_consent: "I want to receive the newsletter (optional)",
    prev: "Back",
    next: "Next",
    create_plan: "Create plan",
    menu_title: "Your 7-Day Menu Plan",
    menu_subtitle: "New, healthy and delicious dishes every day",
    chat_tooltip: "Ask me anything!",
    chat_title: "🤖 FitPause Assistant",
    chat_welcome: "Hello! I'm your FitPause assistant. How can I help you?",
    chat_placeholder: "Ask me a question...",
    send: "Send",
    cookie_text: "We use cookies for the best user experience. Data & tracking only after consent!",
    accept: "Accept",
    decline: "Decline"
  },
  es: {
    hero_title: "Tu Plan Nutricional Inteligente por IA",
    hero_subtitle: "Obtén planes semanales y recetas adaptadas a tus objetivos.",
    cta_start: "Comenzar gratis",
    trust_rating: "4.9/5 estrellas",
    trust_users: "10,000+ usuarios",
    trust_secure: "Conforme RGPD",
    nav_features: "Características",
    nav_pricing: "Precios",
    nav_blog: "Blog",
    nav_contact: "Contacto",
    // ... (add more Spanish translations)
  },
  fr: {
    hero_title: "Votre Plan Nutritionnel Intelligent par IA",
    hero_subtitle: "Obtenez des plans hebdomadaires et recettes adaptés à vos objectifs.",
    cta_start: "Commencer gratuitement",
    trust_rating: "4.9/5 étoiles",
    trust_users: "10,000+ utilisateurs",
    trust_secure: "Conforme RGPD",
    nav_features: "Fonctionnalités",
    nav_pricing: "Prix",
    nav_blog: "Blog",
    nav_contact: "Contact",
    // ... (add more French translations)
  }
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
  // Detect browser language
  detectLanguage();
  
  // Initialize UI
  initializeUI();
  
  // Show cookie consent if not accepted
  showCookieConsentIfNeeded();
  
  // Initialize admin bypass
  checkAdminBypass();
  
  // Add smooth scrolling
  initializeSmoothScrolling();
});

// ===== LANGUAGE FUNCTIONS =====
function detectLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  const savedLang = localStorage.getItem('fitpause-language');
  const browserLang = navigator.language.slice(0, 2);
  
  if (urlLang && translations[urlLang]) {
    currentLanguage = urlLang;
  } else if (savedLang && translations[savedLang]) {
    currentLanguage = savedLang;
  } else if (translations[browserLang]) {
    currentLanguage = browserLang;
  } else {
    currentLanguage = 'de'; // fallback
  }
  
  switchLanguage(currentLanguage);
}

function switchLanguage(lang) {
  if (!translations[lang]) return;
  
  currentLanguage = lang;
  localStorage.setItem('fitpause-language', lang);
  
  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    }
  });
  
  // Update all translated texts
  updateTexts();
  
  // Update document language
  document.documentElement.lang = lang;
  
  // Update URL without reload
  const url = new URL(window.location);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url);
}

function updateTexts() {
  const texts = translations[currentLanguage];
  
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (texts[key]) {
      element.textContent = texts[key];
    }
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.dataset.i18nPlaceholder;
    if (texts[key]) {
      element.placeholder = texts[key];
    }
  });
}

// ===== UI INITIALIZATION =====
function initializeUI() {
  updateTexts();
  updateProgressBar();
  
  // Initialize mobile menu
  initializeMobileMenu();
  
  // Initialize parallax effect
  initializeParallax();
}

function initializeMobileMenu() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
      navToggle.classList.toggle('active');
    });
  }
}

function initializeParallax() {
  const heroImage = document.querySelector('.hero-image');
  
  if (heroImage) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      heroImage.style.transform = `translateY(${rate}px)`;
    });
  }
}

function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ===== ONBOARDING FUNCTIONS =====
function startOnboarding() {
  const modal = document.getElementById('onboarding-modal');
  modal.classList.remove('hidden');
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
  
  // Reset to first step
  currentStep = 1;
  showCurrentStep();
  updateProgressBar();
}

function closeOnboarding() {
  const modal = document.getElementById('onboarding-modal');
  modal.classList.add('hidden');
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
}

function nextStep() {
  if (validateCurrentStep()) {
    currentStep++;
    showCurrentStep();
    updateProgressBar();
  }
}

function previousStep() {
  if (currentStep > 1) {
    currentStep--;
    showCurrentStep();
    updateProgressBar();
  }
}

function showCurrentStep() {
  // Hide all steps
  document.querySelectorAll('.onboarding-step').forEach(step => {
    step.classList.remove('active');
  });
  
  // Show current step
  const currentStepElement = document.getElementById(`step-${currentStep}`);
  if (currentStepElement) {
    currentStepElement.classList.add('active');
  }
  
  // Update step counter
  document.getElementById('current-step').textContent = currentStep;
  
  // Update navigation buttons
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const submitBtn = document.getElementById('submit-btn');
  
  if (currentStep === 1) {
    prevBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'block';
  }
  
  if (currentStep === totalSteps) {
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'block';
  } else {
    nextBtn.style.display = 'block';
    submitBtn.style.display = 'none';
  }
}

function updateProgressBar() {
  const progressFill = document.getElementById('progress-fill');
  const percentage = (currentStep / totalSteps) * 100;
  progressFill.style.width = `${percentage}%`;
}

function validateCurrentStep() {
  switch (currentStep) {
    case 1:
      return selectedGoal !== '';
    case 2:
      return selectedDiet !== '';
    case 3:
      return true; // Allergies are optional
    case 4:
      return validateDetails();
    case 5:
      return validateEmail();
    default:
      return true;
  }
}

function validateDetails() {
  const peopleCount = document.getElementById('people-count').value;
  const cookingTime = document.getElementById('cooking-time').value;
  const budget = document.getElementById('budget').value;
  
  return peopleCount && cookingTime && budget;
}

function validateEmail() {
  const email = document.getElementById('user-email').value;
  const privacyConsent = document.getElementById('privacy-consent').checked;
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && privacyConsent;
}

// ===== OPTION SELECTION =====
function selectOption(element) {
  const parent = element.closest('.onboarding-step');
  
  // Remove selected class from siblings
  parent.querySelectorAll('.option-btn').forEach(btn => {
    btn.classList.remove('selected');
  });
  
  // Add selected class to clicked element
  element.classList.add('selected');
  
  // Store selection based on current step
  if (currentStep === 1) {
    selectedGoal = element.dataset.goal;
  } else if (currentStep === 2) {
    selectedDiet = element.dataset.diet;
  }
}

// ===== ALLERGY FUNCTIONS =====
function toggleAllergy(element) {
  const allergy = element.dataset.allergy;
  
  if (element.classList.contains('selected')) {
    // Remove allergy
    element.classList.remove('selected');
    selectedAllergies = selectedAllergies.filter(a => a !== allergy);
  } else {
    // Add allergy
    element.classList.add('selected');
    selectedAllergies.push(allergy);
  }
  
  updateAllergyTags();
}

function addCustomAllergy() {
  const input = document.getElementById('custom-allergy-input');
  const customAllergy = input.value.trim();
  
  if (customAllergy && !selectedAllergies.includes(customAllergy)) {
    selectedAllergies.push(customAllergy);
    input.value = '';
    updateAllergyTags();
  }
}

function updateAllergyTags() {
  const container = document.getElementById('allergy-tags');
  
  container.innerHTML = selectedAllergies.map(allergy => 
    `<div class="allergy-tag">
      ${allergy}
      <button onclick="removeAllergy('${allergy}')" type="button">×</button>
    </div>`
  ).join('');
  
  // Show/hide selected section
  const selectedSection = document.getElementById('selected-allergies');
  selectedSection.style.display = selectedAllergies.length > 0 ? 'block' : 'none';
}

function removeAllergy(allergy) {
  selectedAllergies = selectedAllergies.filter(a => a !== allergy);
  
  // Update button state
  const allergyBtn = document.querySelector(`[data-allergy="${allergy}"]`);
  if (allergyBtn) {
    allergyBtn.classList.remove('selected');
  }
  
  updateAllergyTags();
}

// ===== FORM SUBMISSION =====
function submitOnboarding() {
  if (!validateCurrentStep()) {
    alert('Bitte füllen Sie alle erforderlichen Felder aus.');
    return;
  }
  
  // Collect all data
  const formData = {
    goal: selectedGoal,
    diet: selectedDiet,
    allergies: selectedAllergies,
    peopleCount: document.getElementById('people-count').value,
    cookingTime: document.getElementById('cooking-time').value,
    budget: document.getElementById('budget').value,
    email: document.getElementById('user-email').value,
    newsletter: document.getElementById('newsletter-consent').checked,
    timestamp: new Date().toISOString(),
    language: currentLanguage
  };
  
  // Store data locally (for demo purposes)
  localStorage.setItem('fitpause-userdata', JSON.stringify(formData));
  
  // Simulate API call
  simulateApiCall(formData);
}

function simulateApiCall(data) {
  // Show loading state
  const submitBtn = document.getElementById('submit-btn');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Erstelle Plan...';
  submitBtn.disabled = true;
  
  // Simulate network delay
  setTimeout(() => {
    // Generate personalized plan
    const plan = generatePersonalizedPlan(data);
    
    // Show success message
    showSuccessMessage(plan);
    
    // Reset button
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
    
    // Close modal
    closeOnboarding();
  }, 2000);
}

function generatePersonalizedPlan(userData) {
  // This is a simplified plan generator
  // In production, this would call your AI API
  
  const basePlans = {
    'lose-weight': [
      { day: 'Montag', meal: 'Grüner Smoothie Bowl', calories: 280 },
      { day: 'Dienstag', meal: 'Zucchini-Nudeln mit Tofu', calories: 320 },
      { day: 'Mittwoch', meal: 'Quinoa-Gemüse-Pfanne', calories: 350 }
    ],
    'build-muscle': [
      { day: 'Montag', meal: 'Protein-Pancakes', calories: 450 },
      { day: 'Dienstag', meal: 'Hähnchen mit Süßkartoffeln', calories: 520 },
      { day: 'Mittwoch', meal: 'Lachs mit Avocado', calories: 480 }
    ],
    'stay-fit': [
      { day: 'Montag', meal: 'Mediterrane Bowl', calories: 380 },
      { day: 'Dienstag', meal: 'Vollkorn-Pasta mit Gemüse', calories: 420 },
      { day: 'Mittwoch', meal: 'Bunter Salat mit Nüssen', calories: 350 }
    ],
    'eat-healthy': [
      { day: 'Montag', meal: 'Regenbogen-Salat', calories: 300 },
      { day: 'Dienstag', meal: 'Gemüse-Curry', calories: 380 },
      { day: 'Mittwoch', meal: 'Vollkorn-Wrap', calories: 360 }
    ]
  };
  
  const selectedPlan = basePlans[userData.goal] || basePlans['eat-healthy'];
  
  return {
    plan: selectedPlan,
    preferences: userData,
    shoppingList: generateShoppingList(selectedPlan),
    tips: generatePersonalizedTips(userData)
  };
}

function generateShoppingList(plan) {
  // Simplified shopping list generator
  return [
    'Gemüse: Spinat, Tomaten, Paprika',
    'Proteine: Tofu, Hähnchen, Lachs',
    'Kohlenhydrate: Quinoa, Süßkartoffeln',
    'Extras: Olivenöl, Gewürze, Nüsse'
  ];
}

function generatePersonalizedTips(userData) {
  const tips = [];
  
  if (userData.goal === 'lose-weight') {
    tips.push('Trinken Sie vor jeder Mahlzeit ein Glas Wasser');
    tips.push('Essen Sie langsam und achten Sie auf Ihr Sättigungsgefühl');
  }
  
  if (userData.goal === 'build-muscle') {
    tips.push('Essen Sie innerhalb von 30 Minuten nach dem Training');
    tips.push('Achten Sie auf ausreichend Protein in jeder Mahlzeit');
  }
  
  if (userData.allergies.includes('gluten')) {
    tips.push('Nutzen Sie glutenfreie Alternativen wie Quinoa oder Reis');
  }
  
  if (userData.allergies.includes('lactose')) {
    tips.push('Probieren Sie pflanzliche Milchalternativen');
  }
  
  return tips;
}

function showSuccessMessage(plan) {
  const message = `
    🎉 Ihr personalisierter Plan wurde erstellt!
    
    📧 Sie erhalten in Kürze eine E-Mail mit:
    • Ihrem 7-Tage-Menüplan
    • Einkaufsliste
    • Personalisierten Tipps
    
    Vielen Dank für Ihr Vertrauen in FitPause!
  `;
  
  alert(message);
  
  // In production, redirect to success page
  // window.location.href = '/success.html';
}

// ===== CHAT FUNCTIONS =====
function toggleChat() {
  const chatWindow = document.getElementById('chat-window');
  
  if (chatWindow.classList.contains('hidden')) {
    chatWindow.classList.remove('hidden');
    chatWindow.classList.add('show');
  } else {
    chatWindow.classList.add('hidden');
    chatWindow.classList.remove('show');
  }
}

function handleChatInput(event) {
  if (event.key === 'Enter') {
    sendChatMessage();
  }
}

function sendChatMessage() {
  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  
  if (message) {
    addChatMessage(message, 'user');
    input.value = '';
    
    // Simulate bot response
    setTimeout(() => {
      const response = generateChatResponse(message);
      addChatMessage(response, 'bot');
    }, 1000);
  }
}

function addChatMessage(message, type) {
  const messagesContainer = document.getElementById('chat-messages');
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('chat-message', type);
  messageDiv.textContent = message;
  
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateChatResponse(userMessage) {
  const message = userMessage.toLowerCase();
  
  // Simple keyword-based responses
  if (message.includes('preis') || message.includes('kosten') || message.includes('price')) {
    return 'Unser Pro-Plan kostet 9,90€ pro Monat. Der kostenlose Plan ist unbegrenzt verfügbar!';
  }
  
  if (message.includes('allergi') || message.includes('allergy')) {
    return 'Wir unterstützen alle gängigen Allergien und Unverträglichkeiten. Sie können diese bei der Anmeldung angeben.';
  }
  
  if (message.includes('rezept') || message.includes('recipe')) {
    return 'Unsere KI erstellt personalisierte Rezepte basierend auf Ihren Zielen und Vorlieben!';
  }
  
  if (message.includes('kündig') || message.includes('cancel')) {
    return 'Sie können Ihr Abo jederzeit monatlich kündigen. Keine Mindestlaufzeit!';
  }
  
  if (message.includes('hilf') || message.includes('help')) {
    return 'Gerne helfe ich Ihnen! Fragen Sie mich zu Preisen, Rezepten, Allergien oder unserem Service.';
  }
  
  // Default response
  return 'Das ist eine interessante Frage! Für detaillierte Informationen empfehle ich Ihnen unseren kostenlosen Test. Haben Sie weitere Fragen zu unserem Service?';
}

// ===== PRICING FUNCTIONS =====
function upgradeToPro() {
  // Check if admin bypass is active
  if (checkAdminBypass()) {
    alert('🔓 Admin-Zugang erkannt! Pro-Features sind freigeschaltet.');
    return;
  }
  
  // In production, integrate with Digistore24
  const digistore24Url = 'https://www.digistore24.com/product/fitpause-pro';
  
  // For demo, show info
  const message = `
    🚀 Upgrade zu FitPause Pro
    
    • Unbegrenzte Rezepte
    • KI-Chat-Assistent
    • Erweiterte Allergie-Filter
    • Nährwertangaben
    
    Preis: 9,90€/Monat
    Jederzeit kündbar
    
    Weiterleitung zu Digistore24...
  `;
  
  if (confirm(message)) {
    // window.open(digistore24Url, '_blank');
    alert('Demo-Modus: In der Produktionsversion würden Sie zu Digistore24 weitergeleitet.');
  }
}

// ===== ADMIN FUNCTIONS =====
function checkAdminBypass() {
  const urlParams = new URLSearchParams(window.location.search);
  const adminKey = urlParams.get('admin');
  
  if (adminKey === 'wizard2025') {
    document.body.classList.add('admin-mode');
    localStorage.setItem('fitpause-admin', 'true');
    return true;
  }
  
  return localStorage.getItem('fitpause-admin') === 'true';
}

function showAdminDashboard() {
  if (checkAdminBypass()) {
    const userData = localStorage.getItem('fitpause-userdata');
    const adminInfo = `
      🔧 FitPause Admin Dashboard
      
      Status: Admin-Modus aktiv
      Benutzer: ${userData ? 'Daten vorhanden' : 'Keine Daten'}
      Sprache: ${currentLanguage}
      Timestamp: ${new Date().toLocaleString()}
      
      Alle Pro-Features sind freigeschaltet.
    `;
    
    alert(adminInfo);
  }
}

// ===== COOKIE FUNCTIONS =====
function showCookieConsentIfNeeded() {
  const cookieConsent = localStorage.getItem('fitpause-cookies');
  
  if (!cookieConsent) {
    const consentDiv = document.getElementById('cookie-consent');
    consentDiv.classList.add('show');
  }
}

function acceptCookies() {
  localStorage.setItem('fitpause-cookies', 'accepted');
  document.getElementById('cookie-consent').classList.remove('show');
  
  // Initialize tracking (in production)
  // initializeAnalytics();
}

function declineCookies() {
  localStorage.setItem('fitpause-cookies', 'declined');
  document.getElementById('cookie-consent').classList.remove('show');
}

// ===== PERFORMANCE & SEO =====
function initializeAnalytics() {
  // Only initialize if cookies are accepted
  const cookieConsent = localStorage.getItem('fitpause-cookies');
  
  if (cookieConsent === 'accepted') {
    // Initialize Google Analytics, Facebook Pixel, etc.
    // gtag('config', 'GA_MEASUREMENT_ID');
  }
}

// Lazy loading for images
function initializeLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// ===== EVENT LISTENERS =====
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const navMenu = document.querySelector('.nav-menu');
  const navToggle = document.querySelector('.nav-toggle');
  
  if (navMenu.classList.contains('show') && 
      !navMenu.contains(event.target) && 
      !navToggle.contains(event.target)) {
    navMenu.classList.remove('show');
    navToggle.classList.remove('active');
  }
});

// Close modal when clicking outside
document.addEventListener('click', function(event) {
  const modal = document.getElementById('onboarding-modal');
  
  if (modal.classList.contains('show') && event.target === modal) {
    closeOnboarding();
  }
});

// Handle form submission errors
window.addEventListener('error', function(event) {
  console.error('FitPause Error:', event.error);
  
  // In production, log to error tracking service
  // Sentry.captureException(event.error);
});

// ===== EXPORT FOR GLOBAL ACCESS =====
window.FitPause = {
  switchLanguage,
  startOnboarding,
  closeOnboarding,
  nextStep,
  previousStep,
  selectOption,
  toggleAllergy,
  addCustomAllergy,
  removeAllergy,
  submitOnboarding,
  toggleChat,
  sendChatMessage,
  upgradeToPro,
  acceptCookies,
  declineCookies,
  checkAdminBypass,
  showAdminDashboard
};

console.log('🍽️ FitPause initialized successfully!');
