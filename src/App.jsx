import { useEffect, useState } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import Navar from './components/navar'
import Hero from './components/hero'
import About from './components/about'
import Projects from './components/projects'
import Skills from './components/skills'
import Experience from './components/experience'
import Contacts from './components/contacts'
import Footer from './components/footer'
import './App.css'

function App() {
  const [screen, setScreen] = useState('home')
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const sectionPages = [
      ['inicio', 'home'],
      ['about', 'about'],
      ['proyectos', 'projects'],
      ['skills', 'skills'],
      ['experiencia', 'profile'],
      ['contactos', 'contacts'],
    ]

    const sections = sectionPages
      .map(([id, page]) => ({ element: document.getElementById(id), page }))
      .filter(({ element }) => element)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

        if (visibleSection) {
          const section = sections.find(({ element }) => element === visibleSection.target)
          if (section) setScreen(section.page)
        }
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.25, 0.5] },
    )

    sections.forEach(({ element }) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const navigateTo = (nextScreen) => {
    setScreen(nextScreen)

    const sectionIds = {
      home: 'inicio',
      about: 'about',
      projects: 'proyectos',
      skills: 'skills',
      profile: 'experiencia',
      contacts: 'contactos',
    }

    const section = document.getElementById(sectionIds[nextScreen])
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <LanguageProvider>
      <main>
        <Navar
          activePage={screen}
          theme={theme}
          onThemeToggle={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
          onHomeClick={() => navigateTo('home')}
          onAboutClick={() => navigateTo('about')}
          onProjectsClick={() => navigateTo('projects')}
          onSkillsClick={() => navigateTo('skills')}
          onProfileClick={() => navigateTo('profile')}
          onContactsClick={() => navigateTo('contacts')}
        />

        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contacts />

        <Footer
          onContactsClick={() => navigateTo('contacts')}
          onAboutClick={() => navigateTo('about')}
        />
      </main>
    </LanguageProvider>
  )
}

export default App
