# FitPause - KI-gestützte Ernährungs- und Meal-Planning-Plattform

> Eine intelligente, benutzerfreundliche Web-Anwendung für personalisierte Ernährungsplanung mit KI-Unterstützung, die dabei hilft, gesunde Ernährungsgewohnheiten zu entwickeln und aufrechtzuerhalten.

[![Status](https://img.shields.io/badge/Status-In%20Entwicklung-yellow)](https://github.com/LSCDP/fitpause-app-)
[![Lizenz](https://img.shields.io/badge/Lizenz-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/Version-1.0.0-green.svg)](https://github.com/LSCDP/fitpause-app-/releases)

## 📋 Inhaltsverzeichnis

- [Über das Projekt](#über-das-projekt)
- [Hauptfunktionen](#hauptfunktionen)
- [Technologie-Stack](#technologie-stack)
- [Installation](#installation)
- [Nutzung](#nutzung)
- [Projektstruktur](#projektstruktur)
- [Beitrag leisten](#beitrag-leisten)
- [Roadmap](#roadmap)
- [Lizenz](#lizenz)
- [Kontakt](#kontakt)

## 🚀 Über das Projekt

FitPause ist eine moderne Web-Anwendung, die künstliche Intelligenz nutzt, um personalisierte Ernährungspläne zu erstellen und Benutzern dabei zu helfen, ihre Gesundheitsziele zu erreichen. Die Plattform kombiniert wissenschaftlich fundierte Ernährungsrichtlinien mit benutzerfreundlichem Design und intelligenten Empfehlungen.

### Warum FitPause?

- **Personalisiert**: KI-basierte Empfehlungen basierend auf individuellen Bedürfnissen
- **Benutzerfreundlich**: Intuitive Benutzeroberfläche für alle Altersgruppen
- **Wissenschaftlich fundiert**: Basiert auf aktuellen Ernährungsrichtlinien
- **Mehrsprachig**: Unterstützung für Deutsch und weitere Sprachen
- **Datenschutz**: Lokale Datenspeicherung für maximale Privatsphäre

## ✨ Hauptfunktionen

### 🍽️ Meal-Planning
- **Personalisierte Mahlzeitenpläne**: Automatische Generierung basierend auf Präferenzen
- **Nährstoffanalyse**: Detaillierte Aufschlüsselung von Makro- und Mikronährstoffen
- **Einkaufslisten**: Automatische Generierung optimierter Einkaufslisten
- **Saisonale Anpassungen**: Berücksichtigung saisonaler Verfügbarkeit

### 🤖 KI-Unterstützung
- **Intelligente Empfehlungen**: Lernende Algorithmen für bessere Vorschläge
- **Anpassbare Diäten**: Unterstützung für verschiedene Ernährungsformen
- **Allergien & Unverträglichkeiten**: Automatische Filterung problematischer Zutaten
- **Fortschritts-Tracking**: Überwachung von Ernährungszielen

### 👤 Benutzererfahrung
- **Responsive Design**: Optimiert für Desktop, Tablet und Mobile
- **Dunkler/Heller Modus**: Anpassbare Benutzeroberfläche
- **Mehrsprachigkeit**: Deutsch, Englisch und weitere Sprachen
- **Offline-Funktionalität**: Grundfunktionen auch ohne Internetverbindung

## 🛠️ Technologie-Stack

### Frontend
- **HTML5**: Semantische Markup-Struktur
- **CSS3**: Modernes Styling mit Flexbox und Grid
- **JavaScript (ES6+)**: Interaktive Funktionalitäten
- **Progressive Web App (PWA)**: App-ähnliche Erfahrung

### Entwicklung
- **Responsive Design**: Mobile-First Ansatz
- **Vanilla JavaScript**: Keine Framework-Abhängigkeiten
- **CSS Custom Properties**: Dynamische Theming-Unterstützung
- **Web Components**: Modulare, wiederverwendbare Komponenten

### Tools & Services
- **GitHub**: Versionskontrolle und Projektmanagement
- **GitHub Pages**: Hosting der Anwendung
- **Local Storage**: Client-seitige Datenpersistierung
- **Service Worker**: Offline-Funktionalität

## 📦 Installation

### Voraussetzungen

- **Web-Browser**: Moderner Browser mit ES6+ Unterstützung
- **Git**: Für die lokale Entwicklung
- **HTTP-Server**: Für lokale Entwicklung (optional)

### Lokale Installation

1. **Repository klonen**
   ```bash
   git clone https://github.com/LSCDP/fitpause-app-.git
   cd fitpause-app-
   ```

2. **Lokalen Server starten** (Optional)
   ```bash
   # Mit Python 3
   python -m http.server 8000
   
   # Mit Node.js (http-server)
   npx http-server .
   
   # Mit PHP
   php -S localhost:8000
   ```

3. **Anwendung öffnen**
   - Direkter Aufruf: Öffnen Sie `index.html` in Ihrem Browser
   - Mit Server: Navigieren Sie zu `http://localhost:8000`

### Live-Demo

Besuchen Sie die Live-Demo der Anwendung:
🌐 **[FitPause Live-Demo](https://lscdp.github.io/fitpause-app-/)**

## 🎯 Nutzung

### Erste Schritte

1. **Profil erstellen**: Geben Sie Ihre persönlichen Daten und Präferenzen ein
2. **Ziele definieren**: Wählen Sie Ihre Ernährungsziele aus
3. **Präferenzen einstellen**: Allergien, Diätformen und Vorlieben angeben
4. **Plan generieren**: Lassen Sie die KI Ihren personalisierten Plan erstellen
5. **Tracking starten**: Verfolgen Sie Ihren Fortschritt und passen Sie bei Bedarf an

### Erweiterte Funktionen

- **Mahlzeiten-Editor**: Anpassen und Erstellen eigener Mahlzeiten
- **Rezept-Import**: Integration externer Rezeptquellen
- **Export-Funktionen**: PDF-Export von Plänen und Listen
- **Social Features**: Teilen von Plänen und Erfolgen

## 📁 Projektstruktur

```
fitpause-app-/
├── 📄 index.html          # Haupt-HTML-Datei
├── 🎨 style.css           # Stylesheet für das Design
├── ⚡ app.js              # Haupt-JavaScript-Datei
├── 📖 README.md           # Projektdokumentation
├── 📜 LICENSE             # Lizenzdatei
├── 🖼️ assets/            # Statische Ressourcen
│   ├── images/           # Bilder und Icons
│   ├── fonts/            # Schriftarten
│   └── icons/            # App-Icons
├── 📱 components/         # Wiederverwendbare Komponenten
│   ├── meal-planner/     # Meal-Planning Komponenten
│   ├── nutrition/        # Ernährungs-Komponenten
│   └── ui/               # UI-Komponenten
├── 🧠 ai/                # KI-Module
│   ├── recommendation.js # Empfehlungs-Engine
│   └── nutrition-calc.js # Nährstoff-Berechnungen
└── 🔧 utils/             # Utility-Funktionen
    ├── storage.js        # Datenspeicherung
    ├── validation.js     # Eingabevalidierung
    └── helpers.js        # Hilfsfunktionen
```

## 🤝 Beitrag leisten

Wir freuen uns über Beiträge zur Verbesserung von FitPause! Hier ist, wie Sie mithelfen können:

### Entwicklungs-Workflow

1. **Fork** des Repositories erstellen
2. **Feature-Branch** erstellen (`git checkout -b feature/AmazingFeature`)
3. **Änderungen committen** (`git commit -m 'Add some AmazingFeature'`)
4. **Branch pushen** (`git push origin feature/AmazingFeature`)
5. **Pull Request** erstellen

### Beitragsmöglichkeiten

- 🐛 **Bug-Reports**: Melden Sie Fehler über GitHub Issues
- 💡 **Feature-Requests**: Schlagen Sie neue Funktionen vor
- 📝 **Dokumentation**: Verbessern Sie die Dokumentation
- 🌐 **Übersetzungen**: Helfen Sie bei der Lokalisierung
- 🧪 **Testing**: Testen Sie neue Features und geben Feedback

### Code-Standards

- **ES6+**: Verwenden Sie moderne JavaScript-Syntax
- **Semantic HTML**: Schreiben Sie zugängliches HTML
- **BEM-Methodologie**: Für CSS-Klassennamen
- **JSDoc**: Dokumentieren Sie JavaScript-Funktionen
- **Responsive Design**: Mobile-First Entwicklung

### Issue-Guidelines

Beim Erstellen von Issues bitte:
- **Klare Beschreibung** des Problems oder Features
- **Schritte zur Reproduktion** bei Bugs
- **Screenshots** wenn relevant
- **Browser/OS-Informationen** bei Kompatibilitätsproblemen

## 🗺️ Roadmap

### Version 1.1 (Q4 2025)
- [ ] Erweiterte KI-Funktionen
- [ ] Social Media Integration
- [ ] Erweiterte Rezeptdatenbank
- [ ] Barcode-Scanner für Produkte

### Version 1.2 (Q1 2026)
- [ ] Mobile App (React Native)
- [ ] Wearable Integration
- [ ] API für Drittanbieter
- [ ] Cloud-Synchronisation

### Version 2.0 (Q2 2026)
- [ ] Machine Learning Optimierungen
- [ ] Ernährungsberater-Chat
- [ ] Community Features
- [ ] Premium-Funktionen

## 📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz - siehe die [LICENSE](LICENSE) Datei für Details.

```
MIT License

Copyright (c) 2025 LSCDP

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 📞 Kontakt

**Projektmaintainer**: LSCDP

- 📧 **E-Mail**: [Kontakt über GitHub](https://github.com/LSCDP)
- 🐙 **GitHub**: [@LSCDP](https://github.com/LSCDP)
- 🌐 **Projekt-Link**: [https://github.com/LSCDP/fitpause-app-](https://github.com/LSCDP/fitpause-app-)
- 💬 **Diskussionen**: [GitHub Discussions](https://github.com/LSCDP/fitpause-app-/discussions)
- 🐛 **Bug-Reports**: [GitHub Issues](https://github.com/LSCDP/fitpause-app-/issues)

---

<div align="center">
  
**Gemacht mit ❤️ für eine gesündere Zukunft**

[⬆ Nach oben](#fitpause---ki-gestützte-ernährungs--und-meal-planning-plattform)

</div>
