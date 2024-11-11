// src/i18n/config.ts
export const languages = {
en: 'English',
es: 'Español'
};

export const defaultLang = 'en';

export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.crafted': 'Crafted with Love',
        'nav.contact': 'Contact'
    },
    es: {
        'nav.home': 'Inicio',
        'nav.about': 'Acerca',
        'nav.services': 'Servicios', 
        'nav.crafted': 'Hecho con Amor',
        'nav.contact': 'Contacto'
    }
} as const;