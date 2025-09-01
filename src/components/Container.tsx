"use client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn, scrollTo } from "@/lib/utils";
import React, { useState, useEffect, useRef } from "react";
import { useLang } from "@/context/LangContext";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Preloader from "@/components/Preloader";
import { translations } from "@/i18n";
import styles from "@/styles/Container.module.css";

type IconProps = {
  ["data-hide"]: boolean;
};

type ContainerProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  hideNav?: boolean;
};

type NavProps = {
  text: string;
  href: string;
  i: number;
  className?: string;
};

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.12,
    },
  }),
  hidden: { opacity: 0 },
};



function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  const href = e.currentTarget.getAttribute("href");
  if (href && href.startsWith("#")) {
    e.preventDefault();
    const section = document.querySelector(href);
    scrollTo(section);
  }
}
function NavItem(props: NavProps) {
  return (
    <motion.li
      className={props.className}
      variants={variants}
      custom={props.i}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <a
        href={props.href}
        onClick={handleClick}
        className={cn(props.i === 0 && "nav-active", "nav-link")}
      >
        {props.text}
      </a>
    </motion.li>
  );
}

export function Container({ children, className, hideNav }: ContainerProps) {
  const { lang, setLang } = useLang();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isScrollingRef = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const isManualScroll = useRef(false);
  // const router = useRouter();
  const meta = {
    title: "Klovy Chat",
    description: `Modern voice and text communication app. Talk to friends, create channels, send messages and use secure voice chat - all in one place!`,
    image: "/assets/logo.webp",
    type: "website",
  };
  const tNav = translations[lang].nav;
  const navLinks = [
    { text: tNav.home, href: "#home" },
    { text: tNav.about, href: "#about" },
    { text: tNav.features, href: "#features" },
    { text: tNav.download, href: "/download" },
    { text: tNav.whyus, href: "#whyus" },
    { text: tNav.contact, href: "#contact" },
    { text: tNav.support, href: "/donate" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = "home";
      navLinks.forEach(link => {
        const id = link.href.replace('#', '');
        const section = document.getElementById(id);
        if (section) {
          const { top } = section.getBoundingClientRect();
          const offsetTop = window.scrollY + top;
          if (scrollPosition >= offsetTop) {
            currentSection = id;
          }
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    isManualScroll.current = true;
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isManualScroll.current = false;
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = "home";
      navLinks.forEach(link => {
        const id = link.href.replace('#', '');
        const section = document.getElementById(id);
        if (section) {
          const { top } = section.getBoundingClientRect();
          const offsetTop = window.scrollY + top;
          if (scrollPosition >= offsetTop) {
            currentSection = id;
          }
        }
      });
      setActiveSection(currentSection);
    }, 700);
  };

  return (
    <>
        <Head>
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          <meta name="theme-color" content="#7B82FE" />
          <meta content={meta.description} name="description" />
      <meta
        property="og:url"
        content={`https://klovy.org${pathname}`}
      />
      <link
        rel="canonical"
        href={`https://klovy.org${pathname}`}
      />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content="Klovy Chat" />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="Klovy Chat" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon-192x192.png" />
        </Head>
        {/* Renderuj nawigację tylko jeśli hideNav NIE jest ustawione */}
        {!hideNav && (
            <nav
                className={cn(
                    styles.nav,
                    isScrolled
                        ? "bg-gradient-to-br from-background to-transparent shadow-md backdrop-blur transition"
                        : "bg-transparent",
                    "py-4 px-2 sm:py-8 sm:px-[1rem] 2xl:px-[17rem]"
                )}
                style={{
                  minHeight: "56px",
                }}
            >
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        styles.burger,
                        "inline-flex transform items-center justify-center rounded-md p-2 transition-all duration-300 focus:outline-none",
                    )}
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon data-hide={isOpen} />
                  <CrossIcon data-hide={!isOpen} />
                </button>
              </div>

              <Link href="/" className="inline-flex items-center">
        <img
          src="/assets/logo/klovychat.png"
          alt="Logo"
          width={32}
          height={32}
          className="sm:w-10 sm:h-10 w-8 h-8" // mniejsze logo na mobile
          onContextMenu={e => e.preventDefault()}
          draggable={false}
        />
              </Link>

              {/* Desktop menu */}
              <ul className={styles["desktop-nav"]}>
                {navLinks.map((link, i) => (
                    <NavItem
                        key={link.href}
                        href={link.href}
                        text={link.text}
                        i={i}
                        className="text-base text-muted-foreground" // usuń klasy związane z podświetlaniem
                    />
                ))}
                {/* Przełącznik języka */}
                <li>
                  <div className="flex items-center space-x-1 border border-white/10 rounded-lg px-2 py-1 bg-background/60 ml-4">
                    <button
                        className={`text-sm px-2 py-0.5 rounded ${lang === "pl" ? "bg-primary text-white" : "text-foreground"}`}
                        onClick={() => setLang("pl")}
                    >
                      PL
                    </button>
                    <span className="mx-1 text-muted-foreground">|</span>
                    <button
                        className={`text-sm px-2 py-0.5 rounded ${lang === "en" ? "bg-primary text-white" : "text-foreground"}`}
                        onClick={() => setLang("en")}
                    >
                      EN
                    </button>
                  </div>
                </li>
              </ul>

              {/* Mobile menu */}
              <AnimatePresence key="menu">
                {isOpen && (
                    <motion.div
                        className="fixed right-0 top-0 z-40 flex h-screen w-full flex-col justify-start overflow-y-hidden bg-background"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 1, type: "spring", bounce: 0.25 }}
                    >
                      {/* Expandable menu */}
                      <div className="flex h-16 max-h-16 min-h-[56px] w-full items-center justify-between border-b pl-4 pr-1">
                        <span className="text-base font-medium lowercase">Menu</span>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={styles.burger}
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                          <span className="sr-only">Open main menu</span>
                          <CrossIcon data-hide={!isOpen} />
                        </button>
                      </div>
                      <div className="flex h-full flex-col items-start justify-between overflow-y-auto">
                        {/* Links */}
                        <ul className="flex min-h-fit w-full flex-col items-start space-y-6 px-4 py-10">
                          {navLinks.map((link, i) => (
                              <button key={link.href} onClick={() => setIsOpen(false)}>
                                <NavItem
                                    href={link.href}
                                    text={link.text}
                                    i={i}
                                    className="text-xl"
                                />
                              </button>
                          ))}
                        </ul>
                        {/* Language switcher for mobile */}
                        <div className="flex items-center space-x-1 border border-white/10 rounded-lg px-2 py-1 bg-background/60 mx-4 mb-6">
                          <button
                              className={`text-sm px-2 py-0.5 rounded ${lang === "pl" ? "bg-primary text-white" : "text-foreground"}`}
                              onClick={() => { setLang("pl"); setIsOpen(false); }}
                          >
                            PL
                          </button>
                          <span className="mx-1 text-muted-foreground">|</span>
                          <button
                              className={`text-sm px-2 py-0.5 rounded ${lang === "en" ? "bg-primary text-white" : "text-foreground"}`}
                              onClick={() => { setLang("en"); setIsOpen(false); }}
                          >
                            EN
                          </button>
                        </div>
                        {/* Footer */}
                        <div className="flex min-h-fit w-full flex-col space-y-8 px-4 py-8">
                          <span className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Klovy Chat. All rights reserved.
                          </span>
                        </div>
                      </div>
                    </motion.div>
                )}
              </AnimatePresence>
              <style jsx global>{`
                html,
                body {
                  overflow-y: ${isOpen ? "hidden" : "initial"};
                  scrollbar-width: ${isOpen ? "none" : "unset"};
                  -ms-overflow-style: ${isOpen ? "none" : "unset"};
                  touch-action: ${isOpen ? "none" : "unset"};
                  -ms-touch-action: ${isOpen ? "none" : "unset"};
                }
              `}</style>
            </nav>
        )}

        {/* Preloader tylko na stronie głównej, po zamontowaniu (klient) */}
        <AnimatePresence mode="wait">
          {mounted &&
            (pathname === "/" || pathname === "/pl" || pathname === "/en") &&
            isLoading && <Preloader />}
        </AnimatePresence>

        {/* Main content */}
        <main
          className={cn(
            "container",
            className
          )}
        >
          {children}
        </main>
  <Footer lang={lang} />
      </>
  );
}

function MenuIcon(props: IconProps) {
  return (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute h-5 w-5 text-neutral-100"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          {...props}
      >
        <path
            d="M2.5 2.5H17.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M2.5 7.5H17.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M2.5 12.5H17.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
      </svg>
  );
}

function CrossIcon(props: IconProps) {
  return (
      <svg
          className="absolute h-5 w-5 text-neutral-100"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          shapeRendering="geometricPrecision"
          {...props}
      >
        <path d="M18 6L6 18" />
        <path d="M6 6l12 12" />
      </svg>
  );
}

export default Container;