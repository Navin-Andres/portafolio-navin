import { useLanguage } from '../context/LanguageContext'
import es from '../i18n/es'
import en from '../i18n/en'

function Footer({ onContactsClick, onAboutClick }) {
	const { lang } = useLanguage()
	const t = lang === 'es' ? es.footer : en.footer

	return (
		<footer className="site-footer">
			<div className="site-footer-inner">
				<div className="footer-brand-block">
					<p className="footer-eyebrow">{t.eyebrow}</p>
					<h2>Navin Balmaceda</h2>
					<p>{t.tagline}</p>
				</div>

				<div className="footer-links-block" aria-label="Enlaces del pie de pagina">
					<a href="https://github.com/Navin-Andres" target="_blank" rel="noreferrer">
						GitHub
					</a>
					<button type="button" onClick={onContactsClick}>{t.contact}</button>
					<button type="button" onClick={onAboutClick}>{t.about}</button>
				</div>
			</div>

			<div className="site-footer-bottom">
				<span>{t.credit}</span>
				<span>{t.available}</span>
			</div>
		</footer>
	)
}

export default Footer

