"use client";

import Container from "@/components/Container";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLang } from "@/context/LangContext";
import { translations } from "@/i18n";

// Każdy członek ma avatarUrl z GitHuba (direct .png)
const team = [
	{ name: "Klovy", role: "Founder & CEO, (Developer Lead)", github: "Klovy-dev", avatarUrl: "https://github.com/Klovy06.png" },
	{ name: "Maksotm", role: "Project Manager", github: "maksotm", avatarUrl: "https://github.com/maksotm.png" },
	{ name: "Matisio", role: "Staff (Web Lead)", github: "matisio3", avatarUrl: "https://github.com/matisio3.png" },
	{ name: "MaksiK023", role: "Staff (Bot Discord Lead)", github: "MaksiK023", avatarUrl: "https://github.com/MaksiK023.png" },
	{ name: "MALYMATI2007", role: "Staff", github: "MALYMATI2007", avatarUrl: "https://github.com/MALYMATI2007.png" },
	{ name: "R00trix", role: "Support", github: "r00trix", avatarUrl: "https://github.com/NIEPODAL.png" },
	{ name: "Zayden", role: "Support", github: "NIEPODAL", avatarUrl: "https://github.com/Ex1stence713.png" },
	{ name: "Dj Gabryś", role: "Support", github: "DjGabrys", avatarUrl: "https://github.com/DjGabrys.png" },
];

// Komponent avatara GitHub (z direct URL)
const GithubAvatar = ({
	name,
	avatarUrl,
}: {
	name: string;
	avatarUrl: string;
}) => {
	const [error, setError] = useState(false);

	const handleImageError = () => {
		if (!error) setError(true);
	};

	return (
		<div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 rounded-full border-4 border-primary/40 shadow-lg bg-black flex items-center justify-center overflow-hidden">
			{!error ? (
				<img
					src={avatarUrl}
					alt={`${name} avatar`}
					className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
					draggable={false}
					onError={handleImageError}
				/>
			) : (
				<div className="w-full h-full flex items-center justify-center bg-gray-700 text-white font-bold rounded-full">?</div>
			)}
		</div>
	);
};

export default function TeamPage() {
	const { lang } = useLang();
	const [slide, setSlide] = useState(0);
	const [slideSize, setSlideSize] = useState(3);

	useEffect(() => {
		AOS.init({ once: true });
	}, []);

	useEffect(() => {
		function handleResize() {
			if (window.innerWidth < 640) {
				setSlideSize(1);
			} else if (window.innerWidth < 1024) {
				setSlideSize(2);
			} else {
				setSlideSize(3);
			}
		}
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const maxSlide = Math.max(0, Math.ceil(team.length / slideSize) - 1);
	const handlePrev = () => setSlide((s) => (s > 0 ? s - 1 : maxSlide));
	const handleNext = () => setSlide((s) => (s < maxSlide ? s + 1 : 0));
	const visibleTeam = team.slice(slide * slideSize, slide * slideSize + slideSize);

	return (
		<Container>
			{/* Sekcja zespołu */}
			<section className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto py-20 mt-24">
				<h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white" data-aos="fade-up">
					{translations[lang].team.teamTitle}
				</h1>

				{/* Slider */}
				<div className="w-full flex flex-col items-center justify-center">
					<div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full mb-8" data-aos="zoom-in">
						<button
							aria-label={translations[lang].team.prev}
							className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-secondary transition"
							onClick={handlePrev}
						>
							<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M15 19l-7-7 7-7" />
							</svg>
						</button>

						<div className="flex gap-4 sm:gap-6 lg:gap-8 flex-wrap justify-center max-w-full">
							{visibleTeam.map((member, index) => (
								<div
									key={member.name}
									className="flex flex-col items-center w-[180px] sm:w-[200px] md:w-[220px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl shadow-2xl p-5 sm:p-6 border border-primary/30 transition-transform duration-300 group"
									data-aos="fade-up"
									data-aos-delay={index * 100}
								>
									<GithubAvatar name={member.name} avatarUrl={member.avatarUrl} />
									<h2 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-1">{member.name}</h2>
									<p className="text-secondary-foreground text-xs sm:text-sm text-center">{member.role}</p>
								</div>
							))}
						</div>

						<button
							aria-label={translations[lang].team.next}
							className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-secondary transition"
							onClick={handleNext}
						>
							<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M9 5l7 7-7 7" />
							</svg>
						</button>
					</div>

					{/* Nawigacja slidera (kropki) */}
					<div className="flex gap-2 mt-2">
						{Array.from({ length: maxSlide + 1 }).map((_, idx) => (
							<button
								key={idx}
								className={`w-3 h-3 rounded-full ${
									slide === idx ? "bg-primary" : "bg-secondary"
								} transition`}
								onClick={() => setSlide(idx)}
								aria-label={translations[lang].team.slideAriaLabel(idx)}
							/>
						))}
					</div>
				</div>

				{/* Misja */}
				<div className="mt-24 text-center max-w-3xl px-4" data-aos="fade-up">
					<h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{translations[lang].team.missionTitle}</h2>
					<p className="text-secondary-foreground text-base sm:text-lg">{translations[lang].team.missionText}</p>
				</div>

				{/* Podziękowania */}
				<div className="mt-24 max-w-3xl px-4 text-center" data-aos="fade-up">
					<h2 className="text-xl sm:text-2xl font-bold text-white mb-4">{translations[lang].team.thanksTitle}</h2>
					<ul className="text-secondary-foreground text-base sm:text-lg list-disc list-inside space-y-2">
						<li><span className="font-semibold">FFlynn</span> — {translations[lang].team.thanksFlynn}</li>
						<li><span className="font-semibold">ogzeyh</span> — {translations[lang].team.thanksOgzeyh}</li>
					</ul>
				</div>
			</section>
		</Container>
	);
}