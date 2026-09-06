import './style.css'
import TranslatorLogo from './assets/logo.png'

// Types & Clés de stockage
type Theme = 'light' | 'dark'
const THEME_STORAGE_KEY = 'theme'

/**
 * Applique le thème au document HTML et coche la checkbox si nécessaire
 */
const applyTheme = (theme: Theme, toggleInput?: HTMLInputElement | null): void => {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem(THEME_STORAGE_KEY, theme)

  if (toggleInput) {
    toggleInput.checked = theme === 'dark'
  }
}

/**
 * Récupère le thème sauvegardé ou la préférence système (dark mode OS)
 */
const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  // Détection automatique de la préférence système
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

document.addEventListener('DOMContentLoaded', () => {
  // Injecter dynamiquement l'image de logo si un élément possède l'id ou la classe correspondante
  const logoImg = document.querySelector<HTMLImageElement>('header img')
  if (logoImg) {
    logoImg.src = TranslatorLogo
  }

  const themeToggle = document.querySelector<HTMLInputElement>('.theme-controller')

  // Initialisation du thème au chargement
  const initialTheme = getInitialTheme()
  applyTheme(initialTheme, themeToggle)

  // Écoute des changements sur le toggle
  if (themeToggle) {
    themeToggle.addEventListener('change', (event: Event) => {
      const isChecked = (event.target as HTMLInputElement).checked
      const newTheme: Theme = isChecked ? 'dark' : 'light'
      applyTheme(newTheme)
    })
  }
})