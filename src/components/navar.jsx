import { useState } from 'react'
import profilePhoto from '../assets/images/foto_perfil_github_navin.jpg'
import { useLanguage } from '../context/LanguageContext'
import es from '../i18n/es'
import en from '../i18n/en'

function Navar({
  activePage,
  theme,
  onThemeToggle,
  onHomeClick,
  onAboutClick,
  onProjectsClick,
  onSkillsClick,
  onProfileClick,
  onContactsClick,
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang } = useLanguage()
  const t = lang === 'es' ? es.nav : en.nav

  const navLinks = [
    { label: t.home, action: 'home' },
    { label: t.about, action: 'about' },
    { label: t.projects, action: 'projects' },
    { label: t.skills, action: 'skills' },
    { label: t.profile, action: 'profile' },
    { label: t.contacts, action: 'contacts' },
  ]

  const handleNavigate = (action) => {
    if (action === 'home' && onHomeClick) onHomeClick()
    if (action === 'about' && onAboutClick) onAboutClick()
    if (action === 'projects' && onProjectsClick) onProjectsClick()
    if (action === 'skills' && onSkillsClick) onSkillsClick()
    if (action === 'profile' && onProfileClick) onProfileClick()
    if (action === 'contacts' && onContactsClick) onContactsClick()

    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <button className="brand" type="button" onClick={() => handleNavigate('home')} aria-label="Ir al inicio">
        <img className="nav-avatar" src={profilePhoto} alt="Navin Balmaceda" />
        <span>Navin Balmaceda</span>
      </button>

      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? t.closeMenu : t.openMenu}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Navegacion principal">
        {navLinks.map((link) => (
          <button
            key={link.action}
            type="button"
            className={`nav-link-button ${activePage === link.action ? 'is-active' : ''}`}
            aria-current={activePage === link.action ? 'page' : undefined}
            onClick={() => handleNavigate(link.action)}
          >
            {link.label}
          </button>
        ))}
      </nav>

      <div className="navbar-controls">
        <select
          className="lang-select"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          aria-label={lang === 'es' ? 'Cambiar idioma' : 'Change language'}
        >
          <option value="es">🌐 ES</option>
          <option value="en">🌐 EN</option>
        </select>

        <button
          className="theme-toggle"
          type="button"
          onClick={onThemeToggle}
          aria-label={theme === 'dark' ? t.lightMode : t.darkMode}
          title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
        >
          <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
        </button>
      </div>
    </header>
  )
}

export default Navar
