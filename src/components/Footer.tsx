import Link from "next/link";
import { useState, useEffect } from "react";


import { translations } from "@/i18n";

export default function Footer({ lang = "pl" }: { lang?: "pl" | "en" }) {
    const t = translations[lang].footer;
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            date.setHours(date.getHours());
            setTime(
                date.toLocaleTimeString("en-US", {
                    hour12: true,
                    hour: "numeric",
                    minute: "numeric",
                })
            );
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
            {/* Górna część z czasem */}

            {/* Pasek gradientowy */}
            <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50" />

            {/* Główna siatka stopki */}
            <div className="py-12 px-6 text-muted-foreground text-sm">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">
                    {/* Branding i prawa autorskie */}
                    <div className="md:col-span-3 flex flex-col gap-2">
                        <h2 className="text-2xl font-bold text-white">Klovy Chat</h2>
                        <p>{t.rights}</p>
                    </div>

                    {/* Informacje prawne */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-white">{t.legal}</h3>
                        <Link href="/privacy" className="hover:underline">
                            {t.privacy}
                        </Link>
                        <Link href="/terms" className="hover:underline">
                            {t.terms}
                        </Link>
                    </div>

                    {/* Deweloperzy */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-white">{t.developers}</h3>
                        <a href="#" className="hover:underline">
                            {t.documentation}
                        </a>
                        <a href="#" className="hover:underline">
                            {t.helpTranslate}
                        </a>
                    </div>

                    {/* Zespół */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-white">{t.team}</h3>
                        <Link href="/team" className="hover:underline">
                            {t.team2}
                        </Link>
                        <a href="#" className="hover:underline">
                            {t.blog}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
