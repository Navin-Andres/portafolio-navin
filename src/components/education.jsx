import { useLanguage } from '../context/LanguageContext'
import es from '../i18n/es'
import en from '../i18n/en'

function Education() {
	const { lang } = useLanguage()
	const t = lang === 'es' ? es.education : en.education

	return (
		<section className="education-screen" id="educacion" aria-labelledby="education-title">
			<div className="education-header">
				<p className="projects-eyebrow">{t.eyebrow}</p>
				<h2 id="education-title">{t.title}</h2>
				<p>{t.subtitle}</p>
			</div>

			<div className="education-grid">
				{t.items.map((item) => (
					<article className="education-card" key={item.degree}>
						<p className="education-period">{item.period}</p>
						<h3>{item.degree}</h3>
						<p className="education-company">{item.institution}</p>
						<p className="education-summary">{item.note}</p>
					</article>
				))}
			</div>
		</section>
	)
}

export default Education
