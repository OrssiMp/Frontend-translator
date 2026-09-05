// style
import './style.css'

// logo de l'application
import TranslatorLogo from './assets/logo.png'

// src/main.ts

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.querySelector<HTMLInputElement>('.theme-controller');

  if (themeToggle) {
    themeToggle.addEventListener('change', (e) => {
      const isChecked = (e.target as HTMLInputElement).checked;
      const html = document.documentElement;

      if (isChecked) {
        html.setAttribute('data-theme', 'dark');
      } else {
        html.setAttribute('data-theme', 'light');
      }
    });
  }
});