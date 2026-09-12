import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import es from '../i18n/es'
import en from '../i18n/en'
import areandinaLogo from '../assets/images/Areaandina.jfif'
import airServicesLogo from '../assets/images/air-services.png'
import senaLogo from '../assets/images/logosena.png'
import clinicaMedicosLogo from '../assets/images/LOGO-CLINICA-MEDICOS-VALLEDUPAR-05.png'

function Experience() {
	const [view, setView] = useState('work')
	const { lang } = useLanguage()
	const t = lang === 'es' ? es.experience : en.experience
	const education = lang === 'es' ? es.education : en.education

	return (
		<section className="experience-screen" id="experiencia" aria-labelledby="experience-title">
			<div className="experience-header">
				<p className="projects-eyebrow">{t.eyebrow}</p>
				<h2 id="experience-title">{t.title}</h2>
				<p>{t.subtitle}</p>
			</div>

			<div className="experience-filters" role="tablist" aria-label={t.filterLabel}>
				<button className={view === 'work' ? 'is-active' : ''} type="button" role="tab" aria-selected={view === 'work'} onClick={() => setView('work')}>
					{t.workFilter}
				</button>
				<button className={view === 'education' ? 'is-active' : ''} type="button" role="tab" aria-selected={view === 'education'} onClick={() => setView('education')}>
					{t.educationFilter}
				</button>
			</div>

			{view === 'work' ? (
				<div className="experience-grid">
					{t.items.map((item, index) => (
						<article className="experience-card" key={`${item.role}-${item.company}`}>
							{index === 0 ? <img className="experience-logo" src={areandinaLogo} alt="Logo de Areandina" /> : null}
							{index === 1 ? <img className="experience-logo" src={airServicesLogo} alt="Logo de Air Services" /> : null}
							{index === 2 ? <img className="experience-logo" src={clinicaMedicosLogo} alt="Logo de Clínica Médicos" /> : null}
							<p className="experience-period">{item.period}</p>
							<h3>{item.role}</h3>
							<p className="experience-company">{item.company}</p>
						</article>
					))}
				</div>
			) : (
				<div className="education-grid">
					{education.items.map((item, index) => (
						<article className="education-card" key={item.degree}>
							{index === 0 ? <img className="education-logo" src={areandinaLogo} alt="Logo de Areandina" /> : null}
							{index === 1 ? <img className="education-logo" src={senaLogo} alt="Logo del SENA" /> : null}
							<p className="education-period">{item.period}</p>
							<h3>{item.degree}</h3>
							<p className="education-company">{item.institution}</p>
							<p className="education-summary">{item.note}</p>
						</article>
					))}
				</div>
			)}
		</section>
	)
}

export default Experience
