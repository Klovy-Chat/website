import Container from "@/components/Container";
import { useLang } from "@/context/LangContext";
import { translations } from "@/i18n";
import Link from "next/link";



export default function DonatePage() {
	const { lang } = useLang();
	const t = translations[lang].donate;

	return (
		<Container>
			<section
				className="max-w-xl mx-auto min-h-[80vh] flex flex-col justify-center py-16 px-4 mt-24 text-center"
				data-aos="fade-up"
			>
				<h1 className="text-3xl font-bold mb-8 text-center" data-aos="fade-down">
					{t.title}
				</h1>
				<h2 className="text-xl font-semibold mb-4">{t.descriptionTitle}</h2>
				<p className="mb-8">{t.descriptionText}</p>
				<div className="flex flex-wrap gap-4 justify-center">
					{t.donateOptions.map((opt) => (
						<Link
							key={opt.label}
							href={opt.url}
							target="_blank"
							rel="noopener noreferrer"
							className={`inline-flex items-center gap-2 ${opt.color} text-white font-semibold py-3 px-8 rounded-full shadow-lg transition text-lg`}
						>
							<span>{opt.icon}</span>
							{opt.label}
						</Link>
					))}
				</div>
			</section>
		</Container>
	);
}
