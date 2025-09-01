// src/i18n.ts

import { FaWindows, FaLinux, FaApple } from "react-icons/fa";
import { ReactNode } from "react";

export type Lang = 'pl' | 'en';

export const translations = {
  pl: {
    // donate.tsx
    donate: {
      title: "Wesprzyj Klovy Chat",
      descriptionTitle: "Dlaczego warto nas wesprzeć?",
      descriptionText: "Klovy Chat to projekt tworzony z pasji, bez reklam i śledzenia użytkowników. Każda złotówka pomaga nam rozwijać platformę, utrzymywać serwery i wprowadzać nowe funkcje. Dziękujemy za Twoje wsparcie!",
      donateOptions: [
        {
          label: "Ko-fi",
          url: "https://ko-fi.com/klovychat",
          color: "bg-[#29abe0] hover:bg-[#41c6f6]",
          icon: "☕",
        },
        {
          label: "Liberapay",
          url: "https://liberapay.com/Jakub-Maksymowicz/",
          color: "bg-[#f6c915] hover:bg-[#ffe066] text-black",
          icon: "🦙",
        },
        {
          label: "Suppi.pl",
          url: "https://suppi.pl/klovychat",
          color: "bg-[#ff5e5b] hover:bg-[#ff7e7b]",
          icon: "🎁",
        },
      ],
    },
    // team.tsx
    team: {
      appName: "Zespół - Klovy Chat",
      teamTitle: "Nasz zespół",
      prev: "Poprzedni",
      next: "Następny",
      missionTitle: "Nasza misja",
      missionText: "Naszą misją jest przede wszystkim bezpieczna komunikacja z ludźmi na wysokim poziomie. Nasza platforma jest stworzona dla ludzi, którzy chcą czuć się bezpieczni, zdala od przemocy, nienawiści itp. Niewłaściwe zachowania użytkowników będą surowo karane przez odpowiednie organy do tego powołane.",
      thanksTitle: "Specjalne podziękowania dla:",
      thanksFlynn: "Stworzenie dźwięków dla komunikatora Klovy Chat.",
      thanksOgzeyh: "Przygotowanie grafik pod projekt.",
      slideAriaLabel: (idx: number) => `Pokaż slajd ${idx + 1}`,
    },
    // index.tsx
    title: "Klovy Chat – nowoczesna komunikacja",
    intro: {
      welcome: "Witaj w",
      app: "Klovy Chat",
      to: "",
      desc: "Nowoczesna aplikacja do komunikacji głosowej i tekstowej. Rozmawiaj ze znajomymi, twórz kanały, wysyłaj wiadomości i korzystaj z bezpiecznego voice chatu – wszystko w jednym miejscu!",
      communicator: "Czatuj na Klovy Chat",
      more: "Dowiedz się więcej",
      scroll: "Przewiń, aby odkryć",
    },
    features: {
      section: "Funkcje Klovy Chat",
      heading: "Wszystko, czego potrzebujesz do komunikacji.",
      desc: "Klovy Chat oferuje szeroki wachlarz funkcji, które ułatwiają rozmowy i współpracę online.",
      voice: "Możliwość wybrania dowolnej emotikonki",
      text: "System zaproszenia do grup",
      channels: "Wyszukiwarka aktywnych czatów prywatnych i kanałów",
      count: "funkcji",
    },
    about: {
      heading: "Klovy Chat to innowacyjna platforma, która umożliwia prowadzenie rozmów głosowych i tekstowych w czasie rzeczywistym. Twórz własne kanały, zapraszaj znajomych i korzystaj z bezpiecznej komunikacji – zarówno na komputerze, jak i urządzeniach mobilnych.",
      uptime: "Uptime serwera",
      users: "Aktywnych użytkowników",
      support: "Dostępność wsparcia",
    },
    why: {
      heading: "Dlaczego warto wybrać",
      highlight: "Klovy Chat?",
      desc: "Nasza aplikacja zapewnia stabilność, prywatność i intuicyjny interfejs. Dołącz do społeczności Klovy Chat już dziś!",
      e2e: "Szyfrowanie end-to-end",
      e2eDesc: "Twoje rozmowy są zawsze bezpieczne i prywatne.",
      devices: "Dostępność na każdym urządzeniu",
      devicesDesc: "Korzystaj z Klovy Chat na komputerze, tablecie i smartfonie.",
      ui: "Intuicyjny interfejs",
      uiDesc: "Prosta obsługa nawet dla początkujących użytkowników.",
      notification: "Powiadomienia",
      notificationDesc: "Bądź na bieżąco — natychmiast otrzymuj informacje o nowych wiadomościach i aktywności znajomych.",
      search: "Wyszukiwanie w rozmowach",
      searchDesc: "Znajdź dowolną wiadomość, wpisując słowo kluczowe.",
      status: "Statusy online i ostatnia aktywność",
      statusDesc: "Sprawdzaj, kto jest dostępny i kiedy ostatnio był aktywny.",
    },
    contact: {
      heading: "Dołącz do Klovy Chat",
      sub: "już dziś!",
      desc: "Zarejestruj się i rozpocznij rozmowy z przyjaciółmi lub zespołem. Masz pytania? Skontaktuj się z nami!",
      write: "Napisz do nas",
    },
    // download.tsx
    download: {
      title: "Pobierz Klovy Chat",
      heading: "Pobierz aplikację",
      desc: "Pobierz najnowszą wersję Klovy Chat na swoje urządzenie. Wybierz system operacyjny i pobierz instalator.",
      langSwitch: "EN",
      subtitle: "Dostępne wersje:",
      downloads: [
        {
          os: "Windows",
          description: "Dla Windows 10/11 (64-bit)",
          icon: FaWindows,
          button: "Pobierz",
          url: "https://github.com/Klovy-Chat/klovy-chat-download",
        },
        {
          os: "Linux",
          description: "Dla Linux (AppImage, 64-bit)",
          icon: FaLinux,
          button: "Pobierz",
          url: "https://github.com/Klovy-Chat/klovy-chat-download",
        },
      ],
  info: 'Aplikacja Klovy Chat jest w fazie rozwoju. Wersje do pobrania pojawią się wkrótce. Dołącz do <a href="https://discord.com/invite/KMwWSP3ZCN" target="_blank" rel="noopener noreferrer" style="text-decoration:none;color:#5865F2;font-weight:bold">Discorda</a> lub sprawdź aktualizacje na stronie!',
    },
    // privacy.tsx
    privacy: {
      title: "Polityka Prywatności Klovy Chat",
      langSwitch: "EN",
      // content: JSX.Element – pozostawiamy do ręcznego podpięcia, bo to duży fragment JSX
    },
    // Container.tsx
    nav: {
      home: "Strona główna",
      about: "O nas",
      features: "Funkcje",
      download: "Pobierz",
      whyus: "Dlaczego my?",
      contact: "Kontakt",
      support: "Wsparcie",
    },
    // Footer.tsx
    footer: {
      privacy: "Polityka prywatności",
      terms: "Warunki korzystania z usługi",
      legal: "Informacje prawne",
      developers: "Deweloperzy",
      documentation: "Dokumentacja",
      helpTranslate: "Pomóż tłumaczyć",
      team: "Zespół",
      team2: "O naszym zespole",
      blog: "Blog",
      rights: "Wszelkie prawa zastrzeżone © 2025",
      createdBy: "Tworzone z pasją przez społeczność.",
    },
  },
  en: {
    // donate.tsx
    donate: {
      title: "Support Klovy Chat",
      descriptionTitle: "Why support us?",
      descriptionText: "Klovy Chat is a passion project, free from ads and user tracking. Every donation helps us grow, maintain servers, and add new features. Thank you for your support!",
      donateOptions: [
        {
          label: "Ko-fi",
          url: "https://ko-fi.com/klovychat",
          color: "bg-[#29abe0] hover:bg-[#41c6f6]",
          icon: "☕",
        },
        {
          label: "Liberapay",
          url: "https://liberapay.com/klovychat/donate",
          color: "bg-[#f6c915] hover:bg-[#ffe066] text-black",
          icon: "🦙",
        },
        {
          label: "Suppi.pl",
          url: "https://suppi.pl/klovychat",
          color: "bg-[#ff5e5b] hover:bg-[#ff7e7b]",
          icon: "🎁",
        },
      ],
    },
    // team.tsx
    team: {
      appName: "Klovy Chat",
      teamTitle: "Our Team",
      prev: "Previous",
      next: "Next",
      missionTitle: "Our Mission",
      missionText: "Our mission is to provide secure, high-quality communication for people who want to feel safe, away from violence, hate, and similar behaviors. Any improper user behavior will be strictly punished by the appropriate appointed authorities.",
      thanksTitle: "Special thanks to:",
      thanksFlynn: "Creating sounds for Klovy Chat messenger.",
      thanksOgzeyh: "Providing graphics for the project.",
      slideAriaLabel: (idx: number) => `Show slide ${idx + 1}`,
    },
    // index.tsx
    title: "Klovy Chat – modern communication",
    intro: {
      welcome: "Welcome to",
      app: "Klovy Chat",
      to: "",
      desc: "A modern app for voice and text communication. Talk with friends, create channels, send messages and enjoy secure voice chat – all in one place!",
      communicator: "Chat on Klovy Chat",
      more: "Learn more",
      scroll: "Scroll to discover",
    },
    features: {
      section: "Klovy Chat Features",
      heading: "Everything you need for communication.",
      desc: "Klovy Chat offers a wide range of features to make conversations and online collaboration easier.",
      voice: "Possibility to choose any emoticon",
      text: "Group invitation system",
      channels: "Search engine for active private chats and channels",
      count: "features",
    },
    about: {
      heading: "Klovy Chat is an innovative platform for real-time voice and text conversations. Create your own channels, invite friends, and enjoy secure communication – on both desktop and mobile devices.",
      uptime: "Server uptime",
      users: "Active users",
      support: "Support availability",
    },
    why: {
      heading: "Why choose",
      highlight: "Klovy Chat?",
      desc: "Our app ensures stability, privacy and an intuitive interface. Join the Klovy Chat community today!",
      e2e: "End-to-end encryption",
      e2eDesc: "Your conversations are always safe and private.",
      devices: "Available on every device",
      devicesDesc: "Use Klovy Chat on your computer, tablet and smartphone.",
      ui: "Intuitive interface",
      uiDesc: "Easy to use even for beginners.",
      notification: "Notifications",
      notificationDesc: "Stay up to date – get instant updates on new messages and your friends' activities.",
      search: "Search conversations",
      searchDesc: "Find any message by entering a keyword.",
      status: "Online statuses and recent activity",
      statusDesc: "Check who's online and when they were last active.",
    },
    contact: {
      heading: "Join Klovy Chat",
      sub: "today!",
      desc: "Sign up and start chatting with friends or your team. Have questions? Contact us!",
      write: "Write to us",
    },
    // download.tsx
    download: {
      title: "Download Klovy Chat",
      heading: "Download the app",
      desc: "Get the latest version of Klovy Chat for your device. Choose your operating system and download the installer.",
      langSwitch: "PL",
      subtitle: "Available versions:",
      downloads: [
        {
          os: "Windows",
          description: "For Windows 10/11 (64-bit)",
          icon: FaWindows,
          button: "Download",
          url: "https://github.com/Klovy-Chat/klovy-chat-download",
        },
        {
          os: "Linux",
          description: "For Linux (AppImage, 64-bit)",
          icon: FaLinux,
          button: "Download",
          url: "https://github.com/Klovy-Chat/klovy-chat-download",
        },
      ],
  info: 'Klovy Chat is under development. Download links will be available soon. Join our <a href="https://discord.com/invite/KMwWSP3ZCN" target="_blank" rel="noopener noreferrer" style="text-decoration:none;color:#5865F2;font-weight:bold">Discord</a> or check for updates on the website!',
    },
    // privacy.tsx
    privacy: {
      title: "Klovy Chat Privacy Policy",
      langSwitch: "PL",
      // content: JSX.Element – pozostawiamy do ręcznego podpięcia, bo to duży fragment JSX
    },
    // Container.tsx
    nav: {
      home: "Home",
      about: "About",
      features: "Features",
      download: "Download",
      whyus: "Why us?",
      contact: "Contact",
      support: "Support",
    },
    // Footer.tsx
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      legal: "Legal",
      developers: "Developers",
      documentation: "Documentation",
      helpTranslate: "Help Translate",
      team: "Team",
      team2: "About our team",
      blog: "Blog",
      rights: "All rights reserved © 2025",
      createdBy: "Crafted with passion by the community.",
    },
  }
};