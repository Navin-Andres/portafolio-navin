import { useLanguage } from '../context/LanguageContext'
import es from '../i18n/es'
import en from '../i18n/en'

function Experience() {
	const { lang } = useLanguage()
	const t = lang === 'es' ? es.experience : en.experience

	return (
		<section className="experience-screen" id="experiencia" aria-labelledby="experience-title">
			<div className="experience-header">
				<p className="projects-eyebrow">{t.eyebrow}</p>
				<h2 id="experience-title">{t.title}</h2>
				<p>{t.subtitle}</p>
			</div>

			<div className="experience-grid">
				{t.items.map((item) => (
					<article className="experience-card" key={`${item.role}-${item.company}`}>
						<p className="experience-period">{item.period}</p>
						<h3>{item.role}</h3>
						<p className="experience-company">{item.company}</p>
						<p className="experience-summary">{item.summary}</p>
					</article>
				))}
			</div>
		</section>
	)
}

export default Experience
