// Global Application State
const app = {
    currentLanguage: 'de',
    currentStep: 1,
    totalSteps: 5,
    questionnaire: {},
    user: null,
    chatOpen: false,
    mealPlan: null
};

// Translation System
const translations = {
    de: {
        // Navigation
        home: "Start",
        how_it_works: "So funktioniert's",
        pricing: "Preise",
        blog: "Blog", 
        contact: "Kontakt",
        login: "Anmelden",
        register: "Registrieren",
        logout: "Abmelden",
        
        // Hero Section
        hero_title: "Personalisierte Ernährung war noch nie so einfach",
        hero_subtitle: "KI-gestützte Wochenpläne & Rezepte für jeden Geschmack",
        get_started: "Jetzt starten",
        
        // Rotating Messages
        message_1: "✨ Individuell angepasst an deine Bedürfnisse",
        message_2: "🥗 Gesunde Rezepte für jeden Tag",
        message_3: "🛒 Automatische Einkaufslisten",
        message_4: "⏰ Spart Zeit und Aufwand",
        
        // Example Plan
        example_plan_title: "So könnte dein Wochenplan aussehen",
        monday: "Montag",
        tuesday: "Dienstag", 
        wednesday: "Mittwoch",
        thursday: "Donnerstag",
        friday: "Freitag",
        saturday: "Samstag",
        sunday: "Sonntag",
        monday_meal: "Mediterrane Gemüsepfanne",
        tuesday_meal: "Quinoa-Salat mit Avocado",
        wednesday_meal: "Lachs mit Süßkartoffeln",
        thursday_meal: "Hähnchen-Curry mit Reis",
        friday_meal: "Pasta mit Gemüse",
        saturday_meal: "Veggie-Burger",
        sunday_meal: "Asiatisches Stir-Fry",
        
        // Trust Badges
        gdpr_compliant: "DSGVO-konform",
        secure_email: "Sichere E-Mails",
        ai_powered: "KI-gestützt",
        mobile_optimized: "Mobil optimiert",
        
        // Questionnaire
        questionnaire_title: "Erzähle uns von dir",
        step: "Schritt",
        of: "von",
        next: "Weiter",
        back: "Zurück",
        submit: "Absenden",
        
        // Questionnaire Steps
        goals: "Deine Ziele",
        weight_loss: "Gewicht verlieren",
        muscle_gain: "Muskeln aufbauen", 
        healthy_eating: "Gesünder essen",
        save_time: "Zeit sparen",
        
        allergies: "Allergien & Unverträglichkeiten",
        no_allergies: "Keine Allergien",
        lactose: "Laktose",
        gluten: "Gluten",
        nuts: "Nüsse",
        shellfish: "Meeresfrüchte",
        
        diet_style: "Ernährungsweise",
        omnivore: "Alles",
        vegetarian: "Vegetarisch",
        vegan: "Vegan",
        pescatarian: "Pescatarisch",
        keto: "Keto",
        
        details: "Details",
        people_count: "Anzahl Personen",
        cooking_time: "Kochzeit pro Mahlzeit",
        time_15: "Bis 15 Minuten",
        time_30: "Bis 30 Minuten",
        time_45: "Bis 45 Minuten",
        time_60: "Über 1 Stunde",
        budget: "Budget pro Person/Tag",
        
        email_title: "Fast geschafft!",
        email: "E-Mail-Adresse",
        email_help: "Wir senden dir deinen personalisierten Plan per E-Mail zu.",
        
        // Generation
        generating_plan: "Erstelle deinen persönlichen Plan...",
        analyzing_preferences: "🔍 Analysiere deine Vorlieben...",
        selecting_recipes: "🍳 Wähle passende Rezepte aus...",
        creating_plan: "📋 Erstelle Wochenplan...",
        generating_shopping_list: "🛒 Generiere Einkaufsliste...",
        
        // Meal Plan
        your_meal_plan: "Dein Wochenplan",
        meal_plan: "Essensplan",
        shopping_list: "Einkaufsliste",
        print: "Drucken",
        save: "Speichern",
        breakfast: "Frühstück",
        lunch: "Mittagessen",
        dinner: "Abendessen",
        
        // Pricing
        free_plan: "Kostenlos",
        premium_plan: "Premium",
        per_month: "pro Monat",
        feature_basic_plan: "✓ 1 Wochenplan pro Monat",
        feature_basic_recipes: "✓ Grundrezepte",
        feature_shopping_list: "✓ Einkaufsliste",
        feature_unlimited: "✓ Unbegrenzte Pläne",
        feature_premium_recipes: "✓ Premium-Rezepte",
        feature_nutrition: "✓ Nährwertanalyse",
        feature_export: "✓ PDF-Export",
        feature_chat: "✓ KI-Chat-Assistent",
        subscribe: "Abonnieren",
        
        // How It Works
        step1_title: "Fragebogen ausfüllen",
        step1_desc: "Erzähle uns von deinen Zielen, Allergien und Vorlieben.",
        step2_title: "KI erstellt deinen Plan",
        step2_desc: "Unsere KI analysiert deine Angaben und erstellt einen personalisierten Wochenplan.",
        step3_title: "Kochen & genießen",
        step3_desc: "Erhalte Rezepte mit Einkaufsliste und koche gesund und abwechslungsreich.",
        
        // Chat
        ai_assistant: "KI-Assistent",
        welcome_message: "Hallo! Ich bin dein KI-Assistent. Wie kann ich dir helfen?",
        chat_placeholder: "Stelle mir eine Frage...",
        send: "Senden",
        
        // Legal
        privacy: "Datenschutz",
        terms: "AGB",
        imprint: "Impressum",
        legal: "Rechtliches",
        privacy_intro: "Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten auf.",
        terms_intro: "Diese Allgemeinen Geschäftsbedingungen regeln die Nutzung der Fitpause-Plattform.",
        responsible_for_content: "Verantwortlich für den Inhalt:",
        
        // Footer
        quick_links: "Quick Links",
        follow_us: "Folge uns",
        footer_tagline: "Personalisierte Ernährung mit KI",
        all_rights_reserved: "Alle Rechte vorbehalten.",
        
        // Auth
        name: "Name",
        password: "Passwort",
        no_account: "Noch kein Konto? Jetzt registrieren",
        have_account: "Schon ein Konto? Jetzt anmelden",
        
        // Cookie Consent
        cookie_notice: "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Durch die Nutzung unserer Website stimmen Sie unserer Cookie-Richtlinie zu.",
        accept: "Akzeptieren",
        decline: "Ablehnen"
    },
    
    en: {
        // Navigation
        home: "Home",
        how_it_works: "How It Works",
        pricing: "Pricing",
        blog: "Blog",
        contact: "Contact", 
        login: "Login",
        register: "Register",
        logout: "Logout",
        
        // Hero Section
        hero_title: "Personalized nutrition has never been easier",
        hero_subtitle: "AI-powered weekly plans & recipes for every taste",
        get_started: "Get Started",
        
        // Rotating Messages  
        message_1: "✨ Individually tailored to your needs",
        message_2: "🥗 Healthy recipes for every day",
        message_3: "🛒 Automatic shopping lists",
        message_4: "⏰ Saves time and effort",
        
        // Example Plan
        example_plan_title: "This is what your weekly plan could look like",
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday", 
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday",
        monday_meal: "Mediterranean Veggie Pan",
        tuesday_meal: "Quinoa Salad with Avocado",
        wednesday_meal: "Salmon with Sweet Potatoes",
        thursday_meal: "Chicken Curry with Rice",
        friday_meal: "Pasta with Vegetables",
        saturday_meal: "Veggie Burger",
        sunday_meal: "Asian Stir-Fry",
        
        // Trust Badges
        gdpr_compliant: "GDPR Compliant",
        secure_email: "Secure Emails",
        ai_powered: "AI-Powered",
        mobile_optimized: "Mobile Optimized",
        
        // Questionnaire
        questionnaire_title: "Tell us about yourself",
        step: "Step", 
        of: "of",
        next: "Next",
        back: "Back",
        submit: "Submit",
        
        // Questionnaire Steps
        goals: "Your Goals",
        weight_loss: "Lose Weight",
        muscle_gain: "Build Muscle",
        healthy_eating: "Eat Healthier",
        save_time: "Save Time",
        
        allergies: "Allergies & Intolerances",
        no_allergies: "No Allergies",
        lactose: "Lactose",
        gluten: "Gluten", 
        nuts: "Nuts",
        shellfish: "Shellfish",
        
        diet_style: "Diet Style",
        omnivore: "Everything",
        vegetarian: "Vegetarian",
        vegan: "Vegan",
        pescatarian: "Pescatarian",
        keto: "Keto",
        
        details: "Details",
        people_count: "Number of People",
        cooking_time: "Cooking Time per Meal",
        time_15: "Up to 15 minutes",
        time_30: "Up to 30 minutes", 
        time_45: "Up to 45 minutes",
        time_60: "Over 1 hour",
        budget: "Budget per Person/Day",
        
        email_title: "Almost done!",
        email: "Email Address",
        email_help: "We'll send your personalized plan via email.",
        
        // Generation
        generating_plan: "Creating your personalized plan...",
        analyzing_preferences: "🔍 Analyzing your preferences...",
        selecting_recipes: "🍳 Selecting suitable recipes...",
        creating_plan: "📋 Creating weekly plan...",
        generating_shopping_list: "🛒 Generating shopping list...",
        
        // Meal Plan
        your_meal_plan: "Your Meal Plan",
        meal_plan: "Meal Plan", 
        shopping_list: "Shopping List",
        print: "Print",
        save: "Save",
        breakfast: "Breakfast",
        lunch: "Lunch",
        dinner: "Dinner",
        
        // Pricing
        free_plan: "Free",
        premium_plan: "Premium",
        per_month: "per month",
        feature_basic_plan: "✓ 1 weekly plan per month",
        feature_basic_recipes: "✓ Basic recipes",
        feature_shopping_list: "✓ Shopping list",
        feature_unlimited: "✓ Unlimited plans",
        feature_premium_recipes: "✓ Premium recipes", 
        feature_nutrition: "✓ Nutritional analysis",
        feature_export: "✓ PDF export",
        feature_chat: "✓ AI chat assistant",
        subscribe: "Subscribe",
        
        // How It Works
        step1_title: "Fill out questionnaire",
        step1_desc: "Tell us about your goals, allergies and preferences.",
        step2_title: "AI creates your plan",
        step2_desc: "Our AI analyzes your information and creates a personalized weekly plan.",
        step3_title: "Cook & enjoy",
        step3_desc: "Get recipes with shopping list and cook healthy and varied meals.",
        
        // Chat
        ai_assistant: "AI Assistant", 
        welcome_message: "Hello! I'm your AI assistant. How can I help you?",
        chat_placeholder: "Ask me a question...",
        send: "Send",
        
        // Legal
        privacy: "Privacy",
        terms: "Terms",
        imprint: "Imprint",
        legal: "Legal",
        privacy_intro: "This privacy policy explains the type, scope and purpose of processing personal data.",
        terms_intro: "These Terms of Service govern the use of the Fitpause platform.",
        responsible_for_content: "Responsible for content:",
        
        // Footer
        quick_links: "Quick Links",
        follow_us: "Follow Us",
        footer_tagline: "Personalized nutrition with AI",
        all_rights_reserved: "All rights reserved.",
        
        // Auth
        name: "Name",
        password: "Password",
        no_account: "Don't have an account? Sign up now",
        have_account: "Already have an account? Sign in now",
        
        // Cookie Consent
        cookie_notice: "We use cookies to improve your experience. By using our website, you agree to our cookie policy.",
        accept: "Accept",
        decline: "Decline"
    }
};

// Sample Data
const sampleMealPlan = {
    monday: {
        breakfast: {de: "Overnight Oats mit Beeren", en: "Overnight Oats with Berries"},
        lunch: {de: "Mediterrane Gemüsepfanne", en: "Mediterranean Veggie Pan"},
        dinner: {de: "Lachs mit Süßkartoffeln", en: "Salmon with Sweet Potatoes"}
    },
    tuesday: {
        breakfast: {de: "Joghurt mit Nüssen", en: "Yogurt with Nuts"},
        lunch: {de: "Quinoa-Salat mit Avocado", en: "Quinoa Salad with Avocado"},
        dinner: {de: "Hähnchen-Curry mit Reis", en: "Chicken Curry with Rice"}
    },
    wednesday: {
        breakfast: {de: "Avocado Toast", en: "Avocado Toast"},
        lunch: {de: "Linsensuppe", en: "Lentil Soup"},
        dinner: {de: "Pasta mit Gemüse", en: "Pasta with Vegetables"}
    },
    thursday: {
        breakfast: {de: "Smoothie Bowl", en: "Smoothie Bowl"},
        lunch: {de: "Buddha Bowl", en: "Buddha Bowl"},
        dinner: {de: "Veggie-Burger", en: "Veggie Burger"}
    },
    friday: {
        breakfast: {de: "Chia Pudding", en: "Chia Pudding"},
        lunch: {de: "Wrap mit Hähnchen", en: "Chicken Wrap"},
        dinner: {de: "Asiatisches Stir-Fry", en: "Asian Stir-Fry"}
    },
    saturday: {
        breakfast: {de: "Pancakes mit Früchten", en: "Pancakes with Fruits"},
        lunch: {de: "Caprese Salat", en: "Caprese Salad"},
        dinner: {de: "Pizza Margherita", en: "Pizza Margherita"}
    },
    sunday: {
        breakfast: {de: "French Toast", en: "French Toast"},
        lunch: {de: "Gazpacho", en: "Gazpacho"},
        dinner: {de: "Gegrillter Fisch", en: "Grilled Fish"}
    }
};

const blogPosts = [
    {
        id: 1,
        title: {de: "5 Meal-Prep Tipps für Anfänger", en: "5 Meal Prep Tips for Beginners"},
        excerpt: {de: "Entdecke wie du Zeit und Geld sparst", en: "Discover how to save time and money"},
        category: "meal-prep",
        readTime: 5,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop"
    },
    {
        id: 2,
        title: {de: "Gesunde Snacks fürs Büro", en: "Healthy Office Snacks"},
        excerpt: {de: "Die besten Snack-Ideen für den Arbeitsplatz", en: "The best snack ideas for the workplace"},
        category: "healthy-eating",
        readTime: 3,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop"
    }
];

const chatResponses = {
    faq: {
        "what is fitpause": {
            de: "Fitpause ist eine KI-gestützte Plattform für personalisierte Ernährungspläne und Rezepte. Wir helfen dir dabei, gesund und abwechslungsreich zu kochen.",
            en: "Fitpause is an AI-powered platform for personalized nutrition plans and recipes. We help you cook healthy and varied meals."
        },
        "how does it work": {
            de: "Du beantwortest einen kurzen Fragebogen über deine Vorlieben und Ziele. Unsere KI erstellt dann einen personalisierten Wochenplan mit Rezepten und Einkaufsliste.",
            en: "You answer a short questionnaire about your preferences and goals. Our AI then creates a personalized weekly plan with recipes and shopping list."
        },
        "is it free": {
            de: "Ja! Die Grundfunktionen sind komplett kostenlos. Premium-Features kosten 4,99€/Monat.",
            en: "Yes! The basic features are completely free. Premium features cost €4.99/month."
        },
        "allergies": {
            de: "Unsere KI berücksichtigt alle deine Allergien und Unverträglichkeiten bei der Planerstellung. Du kannst diese im Fragebogen angeben.",
            en: "Our AI takes into account all your allergies and intolerances when creating plans. You can specify these in the questionnaire."
        }
    }
};

// Language Detection and Management
function detectLanguage() {
    // Check URL parameter first
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    
    // Check localStorage
    const savedLang = localStorage.getItem('preferred_language');
    
    // Check browser language
    const browserLang = navigator.language.substring(0, 2);
    
    // Simulate GeoIP detection (would be server-side in real app)
    const geoLang = detectLanguageByGeo();
    
    // Priority: URL > localStorage > Browser > Geo > Default
    app.currentLanguage = urlLang || savedLang || browserLang || geoLang || 'de';
    
    // Ensure supported language
    if (!translations[app.currentLanguage]) {
        app.currentLanguage = 'de';
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = app.currentLanguage;
    
    // Update language selector
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.value = app.currentLanguage;
    }
}

function detectLanguageByGeo() {
    // Simulated GeoIP detection - in real app would use MaxMind GeoLite2 or similar
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    if (timezone.includes('Europe/London')) return 'en';
    if (timezone.includes('Europe/Madrid')) return 'es';
    if (timezone.includes('Europe/Paris')) return 'fr';
    if (timezone.includes('Europe/Berlin') || timezone.includes('Europe/Zurich')) return 'de';
    
    return 'en'; // Default for unknown locations
}

// Global function to change language - accessible from HTML
window.changeLanguage = function(lang) {
    app.currentLanguage = lang;
    localStorage.setItem('preferred_language', lang);
    document.documentElement.lang = lang;
    updateTranslations();
    
    // Update URL without reload
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url);
};

function updateTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = getTranslation(key);
        if (translation) {
            element.placeholder = translation;
        }
    });
}

function getTranslation(key) {
    return translations[app.currentLanguage]?.[key] || translations['de']?.[key] || key;
}

// Rotating Messages Animation
function initializeRotatingMessages() {
    const messages = document.querySelectorAll('.rotating-message');
    if (messages.length === 0) return;
    
    let currentIndex = 0;
    
    setInterval(() => {
        messages[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % messages.length;
        messages[currentIndex].classList.add('active');
    }, 3000);
}

// Page Navigation - Global function accessible from HTML
window.showPage = function(pageId) {
    console.log('Navigating to page:', pageId);
    
    // Hide all pages
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show requested page
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
        targetPage.classList.add('active');
        console.log('Page shown:', pageId);
        
        // Special handling for certain pages
        if (pageId === 'blog') {
            loadBlogPosts();
        } else if (pageId === 'questionnaire') {
            // Reset questionnaire to first step
            app.currentStep = 1;
            updateQuestionnaire();
        }
    } else {
        console.error('Page not found:', pageId);
    }
    
    // Close mobile menu
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.remove('active');
    }
};

// Global function for mobile menu toggle
window.toggleMobileMenu = function() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
};

// Questionnaire Management - Global functions accessible from HTML
window.nextStep = function() {
    console.log('Next step called, current:', app.currentStep);
    
    if (validateCurrentStep()) {
        if (app.currentStep < app.totalSteps) {
            app.currentStep++;
            updateQuestionnaire();
            console.log('Moved to step:', app.currentStep);
        }
    } else {
        console.log('Validation failed for step:', app.currentStep);
    }
};

window.previousStep = function() {
    console.log('Previous step called, current:', app.currentStep);
    
    if (app.currentStep > 1) {
        app.currentStep--;
        updateQuestionnaire();
        console.log('Moved to step:', app.currentStep);
    }
};

function validateCurrentStep() {
    const currentStepElement = document.querySelector(`[data-step="${app.currentStep}"]`);
    if (!currentStepElement) {
        console.error('Current step element not found:', app.currentStep);
        return false;
    }
    
    const requiredInputs = currentStepElement.querySelectorAll('input[required], select[required]');
    
    let isValid = true;
    requiredInputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    // Special validation for checkboxes/radio buttons in steps 1-3
    if (app.currentStep <= 3) {
        const inputs = currentStepElement.querySelectorAll('input[type="checkbox"], input[type="radio"]');
        const hasSelection = Array.from(inputs).some(input => input.checked);
        if (!hasSelection) {
            isValid = false;
            console.log('No selection made in step:', app.currentStep);
        }
    }
    
    console.log('Step validation result:', isValid);
    return isValid;
}

function updateQuestionnaire() {
    console.log('Updating questionnaire for step:', app.currentStep);
    
    // Update progress bar
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        const progressPercentage = (app.currentStep / app.totalSteps) * 100;
        progressFill.style.width = `${progressPercentage}%`;
    }
    
    // Update step counter
    const currentStepElement = document.getElementById('current-step');
    if (currentStepElement) {
        currentStepElement.textContent = app.currentStep;
    }
    
    // Show/hide form steps
    const allSteps = document.querySelectorAll('.form-step');
    allSteps.forEach(step => {
        step.classList.remove('active');
    });
    
    const currentStep = document.querySelector(`[data-step="${app.currentStep}"]`);
    if (currentStep) {
        currentStep.classList.add('active');
    }
    
    // Update buttons
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    
    if (prevBtn) {
        prevBtn.style.display = app.currentStep === 1 ? 'none' : 'block';
    }
    
    if (nextBtn && submitBtn) {
        if (app.currentStep === app.totalSteps) {
            nextBtn.classList.add('hidden');
            submitBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            submitBtn.classList.add('hidden');
        }
    }
}

function handleQuestionnaireSubmit(e) {
    e.preventDefault();
    console.log('Questionnaire submitted');
    
    if (!validateCurrentStep()) {
        return;
    }
    
    // Collect form data
    const formData = new FormData(e.target);
    const questionnaire = {};
    
    // Process checkboxes for goals and allergies
    const goals = [];
    const allergies = [];
    
    document.querySelectorAll('input[name="goals"]:checked').forEach(input => {
        goals.push(input.value);
    });
    
    document.querySelectorAll('input[name="allergies"]:checked').forEach(input => {
        allergies.push(input.value);
    });
    
    questionnaire.goals = goals;
    questionnaire.allergies = allergies;
    questionnaire.diet_style = formData.get('diet_style');
    questionnaire.people_count = formData.get('people_count');
    questionnaire.cooking_time = formData.get('cooking_time');
    questionnaire.budget = formData.get('budget');
    questionnaire.email = formData.get('email');
    
    app.questionnaire = questionnaire;
    console.log('Questionnaire data:', questionnaire);
    
    // Show generation page
    showPage('generating');
    simulateMealPlanGeneration();
}

// Meal Plan Generation
function simulateMealPlanGeneration() {
    console.log('Starting meal plan generation simulation');
    
    const steps = document.querySelectorAll('.generation-step');
    let currentStep = 0;
    
    const interval = setInterval(() => {
        if (currentStep > 0) {
            steps[currentStep - 1].classList.remove('active');
        }
        
        if (currentStep < steps.length) {
            steps[currentStep].classList.add('active');
            currentStep++;
        } else {
            clearInterval(interval);
            // Generation complete
            setTimeout(() => {
                generateMealPlan();
                showPage('meal-plan');
            }, 1000);
        }
    }, 1500);
}

function generateMealPlan() {
    const lang = app.currentLanguage;
    app.mealPlan = {
        plan: sampleMealPlan,
        shoppingList: generateShoppingList()
    };
    
    console.log('Meal plan generated:', app.mealPlan);
    displayMealPlan();
}

function generateShoppingList() {
    return {
        vegetables: [
            {name: "Zucchini", quantity: "2 Stück"},
            {name: "Paprika", quantity: "3 Stück"},
            {name: "Tomaten", quantity: "500g"},
            {name: "Avocado", quantity: "2 Stück"}
        ],
        grains: [
            {name: "Quinoa", quantity: "200g"},
            {name: "Reis", quantity: "300g"},
            {name: "Pasta", quantity: "250g"}
        ],
        proteins: [
            {name: "Lachs", quantity: "400g"},
            {name: "Hähnchenbrust", quantity: "300g"},
            {name: "Eier", quantity: "6 Stück"}
        ],
        dairy: [
            {name: "Joghurt", quantity: "500g"},
            {name: "Milch", quantity: "1L"}
        ]
    };
}

function displayMealPlan() {
    const lang = app.currentLanguage;
    const planContent = document.getElementById('meal-plan-content');
    const shoppingContent = document.getElementById('shopping-list-content');
    
    if (!planContent || !shoppingContent) {
        console.error('Meal plan content elements not found');
        return;
    }
    
    // Display meal plan
    let planHTML = '';
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    
    days.forEach(day => {
        const dayData = app.mealPlan.plan[day];
        planHTML += `
            <div class="day-plan">
                <h3 class="day-title">${getTranslation(day)}</h3>
                <div class="meals">
                    <div class="meal">
                        <div class="meal-type">${getTranslation('breakfast')}</div>
                        <div class="meal-name">${dayData.breakfast[lang] || dayData.breakfast.de}</div>
                        <div class="meal-details">320 kcal • 15 min</div>
                    </div>
                    <div class="meal">
                        <div class="meal-type">${getTranslation('lunch')}</div>
                        <div class="meal-name">${dayData.lunch[lang] || dayData.lunch.de}</div>
                        <div class="meal-details">450 kcal • 25 min</div>
                    </div>
                    <div class="meal">
                        <div class="meal-type">${getTranslation('dinner')}</div>
                        <div class="meal-name">${dayData.dinner[lang] || dayData.dinner.de}</div>
                        <div class="meal-details">380 kcal • 30 min</div>
                    </div>
                </div>
            </div>
        `;
    });
    
    planContent.innerHTML = planHTML;
    
    // Display shopping list
    let shoppingHTML = '<div class="shopping-list">';
    const categories = {
        vegetables: lang === 'de' ? 'Gemüse' : 'Vegetables',
        grains: lang === 'de' ? 'Getreide & Beilagen' : 'Grains & Sides',
        proteins: lang === 'de' ? 'Proteine' : 'Proteins',
        dairy: lang === 'de' ? 'Milchprodukte' : 'Dairy'
    };
    
    Object.entries(app.mealPlan.shoppingList).forEach(([category, items]) => {
        shoppingHTML += `
            <div class="shopping-category">
                <h4 class="category-title">${categories[category]}</h4>
                <ul class="shopping-items">
        `;
        
        items.forEach(item => {
            shoppingHTML += `
                <li>
                    <span class="item-name">${item.name}</span>
                    <span class="item-quantity">${item.quantity}</span>
                </li>
            `;
        });
        
        shoppingHTML += '</ul></div>';
    });
    
    shoppingHTML += '</div>';
    shoppingContent.innerHTML = shoppingHTML;
}

// Global function for tabs
window.showTab = function(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Show/hide content
    const planContent = document.getElementById('meal-plan-content');
    const shoppingContent = document.getElementById('shopping-list-content');
    
    if (planContent) {
        planContent.classList.toggle('hidden', tabName !== 'plan');
    }
    if (shoppingContent) {
        shoppingContent.classList.toggle('hidden', tabName !== 'shopping');
    }
};

// Global functions for meal plan actions
window.printMealPlan = function() {
    window.print();
};

window.saveMealPlan = function() {
    // Simulate saving to user account
    alert(getTranslation('plan_saved') || 'Plan gespeichert!');
};

// Chat Assistant - Global function accessible from HTML
window.toggleChat = function() {
    console.log('Toggle chat called, current state:', app.chatOpen);
    
    app.chatOpen = !app.chatOpen;
    const chatWindow = document.getElementById('chat-window');
    
    if (chatWindow) {
        chatWindow.classList.toggle('hidden', !app.chatOpen);
        console.log('Chat window toggled, open:', app.chatOpen);
    } else {
        console.error('Chat window element not found');
    }
};

window.sendChatMessage = function() {
    const input = document.getElementById('chat-input');
    if (!input) {
        console.error('Chat input not found');
        return;
    }
    
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addChatMessage(message, 'user');
    input.value = '';
    
    // Generate bot response
    setTimeout(() => {
        const response = generateChatResponse(message);
        addChatMessage(response, 'bot');
    }, 500);
};

function addChatMessage(message, sender) {
    const messagesContainer = document.getElementById('chat-messages');
    if (!messagesContainer) {
        console.error('Chat messages container not found');
        return;
    }
    
    const messageElement = document.createElement('div');
    messageElement.className = `chat-message ${sender}`;
    messageElement.textContent = message;
    
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateChatResponse(message) {
    const lang = app.currentLanguage;
    const lowerMessage = message.toLowerCase();
    
    // Simple keyword matching for responses
    if (lowerMessage.includes('fitpause') || lowerMessage.includes('what')) {
        return chatResponses.faq["what is fitpause"][lang];
    } else if (lowerMessage.includes('how') || lowerMessage.includes('work')) {
        return chatResponses.faq["how does it work"][lang];
    } else if (lowerMessage.includes('free') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
        return chatResponses.faq["is it free"][lang];
    } else if (lowerMessage.includes('allerg') || lowerMessage.includes('intoleran')) {
        return chatResponses.faq["allergies"][lang];
    }
    
    // Default responses
    const defaultResponses = {
        de: [
            "Das ist eine interessante Frage! Kann ich dir dabei helfen, einen personalisierten Ernährungsplan zu erstellen?",
            "Gerne helfe ich dir weiter. Hast du schon unseren Fragebogen ausgefüllt?",
            "Für spezifische Ernährungsfragen empfehle ich dir, mit unserem Plan-Generator zu starten."
        ],
        en: [
            "That's an interesting question! Can I help you create a personalized nutrition plan?",
            "I'd be happy to help you. Have you already filled out our questionnaire?",
            "For specific nutrition questions, I recommend starting with our plan generator."
        ]
    };
    
    const responses = defaultResponses[lang] || defaultResponses['en'];
    return responses[Math.floor(Math.random() * responses.length)];
}

// Authentication - Global functions
window.handleLogin = function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    
    // Simulate login
    app.user = {
        email: email,
        name: email.split('@')[0],
        role: 'member'
    };
    
    updateUserInterface();
    showPage('home');
    alert(getTranslation('login_success') || 'Erfolgreich angemeldet!');
};

window.handleRegister = function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Simulate registration
    app.user = {
        email: formData.get('email'),
        name: formData.get('name'),
        role: 'member'
    };
    
    updateUserInterface();
    showPage('home');
    alert(getTranslation('registration_success') || 'Erfolgreich registriert!');
};

window.logout = function() {
    app.user = null;
    updateUserInterface();
    showPage('home');
};

function updateUserInterface() {
    const authButtons = document.querySelector('.auth-buttons');
    const userMenu = document.getElementById('user-menu');
    const userName = document.getElementById('user-name');
    
    if (app.user) {
        if (authButtons) authButtons.classList.add('hidden');
        if (userMenu) userMenu.classList.remove('hidden');
        if (userName) userName.textContent = app.user.name;
    } else {
        if (authButtons) authButtons.classList.remove('hidden');
        if (userMenu) userMenu.classList.add('hidden');
    }
}

// Subscription Management - Global function
window.startSubscription = function() {
    // Simulate Digistore24 redirect
    alert(getTranslation('redirect_payment') || 'Weiterleitung zum Zahlungsanbieter...');
    
    // In real app, would redirect to Digistore24
    setTimeout(() => {
        // Simulate successful payment
        if (app.user) {
            app.user.role = 'premium';
            alert(getTranslation('subscription_success') || 'Abonnement erfolgreich abgeschlossen!');
        } else {
            showPage('register');
        }
    }, 1000);
};

// Admin Access
function checkAdminAccess() {
    const path = window.location.pathname;
    if (path.includes('admin-access-2024')) {
        app.user = {
            email: 'admin@fitpause.de',
            name: 'Admin',
            role: 'admin'
        };
        updateUserInterface();
    }
}

// Blog Management
function loadBlogPosts() {
    const blogContainer = document.getElementById('blog-posts');
    if (!blogContainer) return;
    
    const lang = app.currentLanguage;
    
    let blogHTML = '';
    blogPosts.forEach(post => {
        blogHTML += `
            <article class="blog-post">
                <img src="${post.image}" alt="${post.title[lang] || post.title.de}" loading="lazy">
                <div class="blog-post-content">
                    <div class="blog-meta">
                        <span class="category">${post.category}</span>
                        <span class="read-time">${post.readTime} min</span>
                    </div>
                    <h3>${post.title[lang] || post.title.de}</h3>
                    <p class="blog-excerpt">${post.excerpt[lang] || post.excerpt.de}</p>
                    <a href="#" class="btn btn--outline btn--sm">${getTranslation('read_more') || 'Weiterlesen'}</a>
                </div>
            </article>
        `;
    });
    
    blogContainer.innerHTML = blogHTML;
}

// Cookie Consent - Global functions
function initializeCookieConsent() {
    window.cookieConsent = {
        accept: function() {
            setCookie('cookie_consent', 'accepted', 365);
            const banner = document.getElementById('cookie-banner');
            if (banner) {
                banner.classList.add('hidden');
            }
        },
        decline: function() {
            setCookie('cookie_consent', 'declined', 365);
            const banner = document.getElementById('cookie-banner');
            if (banner) {
                banner.classList.add('hidden');
            }
        }
    };
}

// Event Listeners
function initializeEventListeners() {
    // Language selector
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', function(e) {
            changeLanguage(e.target.value);
        });
    }
    
    // Form submissions
    const questionnaireForm = document.getElementById('questionnaire-form');
    if (questionnaireForm) {
        questionnaireForm.addEventListener('submit', handleQuestionnaireSubmit);
    }
    
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
    
    // Chat
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendChatMessage();
            }
        });
    }
}

// Utility Functions
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    detectLanguage();
    updateTranslations();
    initializeEventListeners();
    initializeRotatingMessages();
    initializeCookieConsent();
    loadBlogPosts();
    checkAdminAccess();
    
    // Show cookie banner if not consented
    if (!getCookie('cookie_consent')) {
        const cookieBanner = document.getElementById('cookie-banner');
        if (cookieBanner) {
            cookieBanner.classList.remove('hidden');
        }
    }
}
