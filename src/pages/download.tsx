import { useEffect } from "react";
import { useLang } from "@/context/LangContext";
import Container from "@/components/Container";
import { translations } from "@/i18n";
import Footer from "@/components/Footer";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DownloadPage() {

  const { lang, setLang } = useLang();
  // Zmień przełącznik: jeśli lang === "pl" pokaż "PL", jeśli lang === "en" pokaż "EN"
  const switchLabel = lang === "pl" ? "PL" : "EN";

  // Wymuś re-render po zmianie języka
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [lang]);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Container>
        <section className="max-w-2xl mx-auto py-16 px-4 mt-24" data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-3xl font-bold mb-4 text-center" data-aos="fade-down">
            {translations[lang].download.title}
          </h1>
          <p className="text-center mb-4 text-lg" data-aos="fade" data-aos-delay="200">
            {translations[lang].download.desc}
          </p>
          <h2 className="text-xl font-semibold mb-6 text-center">{translations[lang].download.subtitle}</h2>

          <div className="flex flex-col gap-6">
            {translations[lang].download.downloads.map((d, index) => (
              <div
                key={d.os}
                className="flex items-center gap-4 p-4 border border-white/10 rounded-lg bg-background/60"
                data-aos="zoom-in-up"
                data-aos-delay={200 + index * 100}
              >
                <div className="text-2xl">{typeof d.icon === 'function' ? <d.icon /> : d.icon}</div>
                <div className="flex-1">
                  <div className="font-semibold">{d.os}</div>
                  <div className="text-sm text-white/70">{d.description}</div>
                </div>
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded bg-gray-500 text-white font-semibold hover:opacity-80 transition"
                >
                  {/* Warunkowy tekst przycisku */}
                  {lang === "pl" ? "Wkrótce*" : "Soon*"}
                </a>
              </div>
            ))}
          </div>

          {/* Warunkowa informacja o przerwie technicznej */}
          <div className="text-center text-sm text-white/70 mt-4">
            {lang === "pl"
              ? "*chwilowo mamy długą przerwe techniczną"
              : "*we are currently on a long technical break"}
          </div>

          <div className="prose prose-invert max-w-none mt-10 text-center" data-aos="fade-up" data-aos-delay="400">
            <span dangerouslySetInnerHTML={{ __html: translations[lang].download.info }} />
          </div>
        </section>
      </Container>
    </div>
  );
}
