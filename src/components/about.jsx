import { useLanguage } from '../context/LanguageContext'
import es from '../i18n/es'
import en from '../i18n/en'
import jacksonSilhouette from '../assets/images/michael-jackson-dancing-silhouette-outline-lg.png'

function About() {
  const { lang } = useLanguage()
  const t = lang === 'es' ? es.about : en.about

  return (
    <section className="about-screen" id="about" aria-labelledby="about-title">
      <div className="about-header">
        <p className="projects-eyebrow">{t.eyebrow}</p>
        <h1 id="about-title">{t.title}</h1>
      </div>

      <div className="about-layout">
        <figure className="about-image-card">
          <img src={jacksonSilhouette} alt="Silueta de Michael Jackson bailando" />
        </figure>

        <article className="about-story">
          <p>{t.intro}</p>
        </article>
      </div>
    </section>
  )
}

export default About
