import { useLanguage } from '../context/LanguageContext'
import es from '../i18n/es'
import en from '../i18n/en'

function Certifications() {
	const { lang } = useLanguage()
	const t = lang === 'es' ? es.certifications : en.certifications

	const certifications = [
		{
			title: lang === 'es' ? 'Visualización de Datos con Power BI' : 'Data Visualization with Power BI',
			issuer: 'SENA',
			year: '2025',
			hours: `48 ${t.hours}`,
		},
		{
			title: lang === 'es' ? 'Manejo Básico de Excel' : 'Basic Excel Skills',
			issuer: 'SENA',
			year: '2024',
			hours: `40 ${t.hours}`,
		},
		{
			title: lang === 'es' ? 'Introducción a la Ciberseguridad' : 'Introduction to Cybersecurity',
			issuer: 'Cisco Networking Academy',
			year: '2025',
			hours: `48 ${t.hours}`,
		},
		{
			title: lang === 'es' ? 'Domina la IA con Gemini' : 'Master AI with Gemini',
			issuer: 'Santander Open Academy',
			year: '2026',
			hours: null,
		},
	]

	return (
		<section className="certifications-screen" id="certificaciones" aria-labelledby="certifications-title">
			<div className="certifications-header">
				<p className="projects-eyebrow">{t.eyebrow}</p>
				<h2 id="certifications-title">{t.title}</h2>
				<p>{t.subtitle}</p>
			</div>

			<div className="certifications-grid">
				{certifications.map((certification) => (
					<article className="certification-card" key={`${certification.title}-${certification.year}`}>
						<p className="experience-period">{certification.year}</p>
						<h3>{certification.title}</h3>
						<p className="education-company">{certification.issuer}</p>
						{certification.hours ? (
							<p className="experience-summary">{certification.hours}</p>
						) : null}
					</article>
				))}
			</div>
		</section>
	)
}

export default Certifications
