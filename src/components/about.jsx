import { useLanguage } from '../context/LanguageContext'
import es from '../i18n/es'
import en from '../i18n/en'

function About() {
  const { lang } = useLanguage()
  const t = lang === 'es' ? es.about : en.about

  return (
    <section className="about-screen" id="about" aria-labelledby="about-title">
      <div className="about-header">
        <p className="projects-eyebrow">{t.eyebrow}</p>
        <h1 id="about-title">{t.title}</h1>
        <p>{t.intro}</p>
      </div>

      <div className="about-grid">
        <article className="about-card about-card-featured">
          <h2>{t.approachTitle}</h2>
          <p>{t.approachText}</p>
        </article>

        <article className="about-card">
          <h2>{t.whatIDoTitle}</h2>
          <ul>
            {t.whatIDo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="about-card">
          <h2>{t.howIWorkTitle}</h2>
          <ul>
            {t.howIWork.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default About
