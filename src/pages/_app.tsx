import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";

import "@/styles/globals.css";
import "@/styles/locomotive-scroll.css";
import "aos/dist/aos.css";

import { DM_Sans } from "next/font/google";
import { LangProvider } from "@/context/LangContext";

const dmSans = DM_Sans({
    display: "swap",
    subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
    useEffect(() => {
        // Inicjalizacja AOS
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-in-out",
        });

        // Blokowanie skrótów klawiszowych
        const blockKeys = (event: KeyboardEvent) => {
            const keyCombo =
                event.key === "F12" ||
                (event.ctrlKey && event.shiftKey && ["I", "J", "C"].includes(event.key)) ||
                (event.ctrlKey && ["U", "S", "P"].includes(event.key));

            if (keyCombo) {
                event.preventDefault();
                event.stopPropagation();
                return false;
            }
        };

        // Blokowanie prawego kliknięcia
        const blockContextMenu = (event: MouseEvent) => {
            event.preventDefault();
        };

        // Blokowanie przeciągania elementów
        const blockDrag = (event: DragEvent) => {
            event.preventDefault();
        };

        // Wykrywanie otwartych DevTools
        const detectDevTools = setInterval(() => {
            const start = new Date().getTime();
            debugger;
            const end = new Date().getTime();
            if (end - start > 100) {
                // Możesz tu np. przekierować albo schować zawartość
                // window.location.href = "/";
            }
        }, 1000);

        document.addEventListener("keydown", blockKeys, true);
        document.addEventListener("contextmenu", blockContextMenu, true);
        document.addEventListener("dragstart", blockDrag, true);

        return () => {
            document.removeEventListener("keydown", blockKeys, true);
            document.removeEventListener("contextmenu", blockContextMenu, true);
            document.removeEventListener("dragstart", blockDrag, true);
            clearInterval(detectDevTools);
        };
    }, []);

    return (
        <>
            <Head>
                <title>Klovy Chat</title>
                <meta name="description" content="Nowoczesny komunikator głosowy i tekstowy. Dołącz do społeczności Klovy Chat!" />
                <meta property="og:title" content="Klovy Chat" />
                <meta property="og:description" content="Nowoczesny komunikator głosowy i tekstowy. Dołącz do społeczności Klovy Chat!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://klovy.org" />
                <meta property="og:image" content="/klovy-chat-pc.png" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div lang="en" className={dmSans.className}>
                <LangProvider>
                    <Component {...pageProps} />
                </LangProvider>
            </div>
        </>
    );
};

export default MyApp;
