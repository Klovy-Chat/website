

import React, { useEffect } from "react";
import Container from "@/components/Container";
import { useLang } from "@/context/LangContext";

import { initAOS } from "@/lib/aos-init";

const privacySections = [
    {
        key: "introduction",
        title: {
            en: "Introduction",
            pl: "Wprowadzenie",
        },
        content: {
            en: (
                <>
                    <p>The data controller for your personal data is Jakub Maksymowicz, based in Wolsztyn, Poland, in the Greater Poland region.</p>
                    <p>We understand that legal documents can be boring, so we have designed this policy to be accessible and easy to understand. Nevertheless, it contains important information about your privacy &mdash; by using Klovy Chat, you accept the terms outlined here. Please read them carefully.</p>
                </>
            ),
            pl: (
                <>
                    <p>Administratorem Twoich danych osobowych jest Jakub Maksymowicz z siedzibą w Wolsztynie, Polska, woj. wielkopolskie.</p>
                    <p>Wiemy, że dokumenty prawne bywają nudne, dlatego przygotowaliśmy tę politykę w przystępnej formie. Zawiera ona jednak ważne informacje o Twojej prywatności — korzystając z Klovy Chat, akceptujesz opisane tu zasady. Prosimy o uważne zapoznanie się z nimi.</p>
                </>
            ),
        },
    },
    {
        key: "user-privacy",
        title: {
            en: "User Privacy",
            pl: "Prywatność użytkownika",
        },
        content: {
            en: (
                <ul className="list-disc ml-6">
                    <li><b>Account data:</b> email address, hashed password, username.</li>
                    <li><b>Chat and group data:</b> names of groups and chats you create or join.</li>
                    <li><b>Content:</b> text messages, images, files, reactions, and other content you transmit.</li>
                    <li><b>Age information:</b> to ensure compliance with regulations protecting minors, including the GDPR and <a href="https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa" className="underline text-white">COPPA</a>.</li>
                    <li><b>IP address and device information:</b> for security and abuse prevention during login and usage.</li>
                    <li><b>Usage data:</b> interactions with the platform, such as login times, feature usage, and preferences, to improve user experience.</li>
                    <li><b>Payment and subscription data:</b> billing information, payment method, and subscription status for paid services.</li>
                    <li><b>Support data:</b> communications with support, including chat transcripts and emails, to assist in resolving issues.</li>
                    <li><b>Third-party integrations:</b> data from services you connect, such as social media accounts or cloud storage, if applicable.</li>
                    <li><b>Third-party instances:</b> we do not collect data from independent deployments of the platform run by third parties.</li>
                    <li><b>Cookies and tracking technologies:</b> for analytics, personalization, and security purposes, as described.</li>
                </ul>
            ),
            pl: (
                <ul className="list-disc ml-6">
                    <li><b>Dane konta:</b> adres e-mail, hasło (zahashowane), nazwa użytkownika.</li>
                    <li><b>Dane czatów i grup:</b> nazwy grup i czatów, które tworzysz lub do których dołączasz.</li>
                    <li><b>Treści:</b> wiadomości tekstowe, obrazy, pliki, reakcje i inne przesyłane treści.</li>
                    <li><b>Informacje o wieku:</b> w celu zapewnienia zgodności z przepisami chroniącymi nieletnich, w tym RODO i <a href="https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa" className="underline text-white">COPPA</a>.</li>
                    <li><b>Adres IP i dane urządzenia:</b> dla bezpieczeństwa i zapobiegania nadużyciom podczas logowania i korzystania z platformy.</li>
                    <li><b>Dane o użytkowaniu:</b> interakcje z platformą, takie jak czasy logowania, korzystanie z funkcji i preferencje, w celu ulepszania doświadczenia użytkownika.</li>
                    <li><b>Dane płatności i subskrypcji:</b> informacje rozliczeniowe, metoda płatności, status subskrypcji dla usług płatnych.</li>
                    <li><b>Dane wsparcia:</b> komunikacja z pomocą techniczną, w tym transkrypcje czatów i e-maile, w celu rozwiązywania problemów.</li>
                    <li><b>Integracje z usługami zewnętrznymi:</b> dane z usług, które podłączasz, np. konta społecznościowe lub chmura, jeśli dotyczy.</li>
                    <li><b>Instancje zewnętrzne:</b> nie zbieramy danych z niezależnych wdrożeń platformy prowadzonych przez osoby trzecie.</li>
                    <li><b>Pliki cookie i technologie śledzące:</b> do analityki, personalizacji i celów bezpieczeństwa.</li>
                </ul>
            ),
        },
    },
    {
        key: "data-retention",
        title: {
            en: "Data Retention",
            pl: "Przechowywanie danych",
        },
        content: {
            en: <p>We retain your data only as long as necessary for the purposes described above, or as required by law.</p>,
            pl: <p>Przechowujemy Twoje dane tylko tak długo, jak jest to konieczne do realizacji powyższych celów lub wymagane przez prawo.</p>,
        },
    },
    {
        key: "data-sharing",
        title: {
            en: "Data Sharing",
            pl: "Udostępnianie danych",
        },
        content: {
            en: (
                <>
                    <p>We do not sell your data. We only cooperate with trusted service providers:</p>
                    <ul className="list-disc ml-6">
                        <li><b>Datalix</b> &mdash; server infrastructure.</li>
                        <li><b>Cloudflare</b> &mdash; DDoS protection, performance optimization, and CAPTCHA (Turnstile).</li>
                    </ul>
                    <p>Your data may be shared with legal authorities only when required by law or in case of a serious security threat.</p>
                </>
            ),
            pl: (
                <>
                    <p>Nie sprzedajemy Twoich danych. Współpracujemy wyłącznie ze sprawdzonymi dostawcami usług:</p>
                    <ul className="list-disc ml-6">
                        <li><b>Datalix</b> &mdash; infrastruktura serwerowa.</li>
                        <li><b>Cloudflare</b> &mdash; ochrona przed DDoS, optymalizacja wydajności, CAPTCHA (Turnstile).</li>
                    </ul>
                    <p>Twoje dane mogą być udostępnione organom ścigania wyłącznie, gdy wymaga tego prawo lub w przypadku poważnego zagrożenia bezpieczeństwa.</p>
                </>
            ),
        },
    },
    {
        key: "data-storage",
        title: {
            en: "Data Storage",
            pl: "Przechowywanie danych",
        },
        content: {
            en: (
                <>
                    <p>Data is stored on servers located in:</p>
                    <ul className="list-disc ml-6">
                        <li>Germany</li>
                    </ul>
                    <p>Backups and technical data may also be stored in other locations compliant with relevant privacy laws.</p>
                </>
            ),
            pl: (
                <>
                    <p>Dane są przechowywane na serwerach zlokalizowanych w:</p>
                    <ul className="list-disc ml-6">
                        <li>Niemczech</li>
                    </ul>
                    <p>Kopie zapasowe i dane techniczne mogą być również przechowywane w innych lokalizacjach zgodnych z odpowiednimi przepisami o ochronie prywatności.</p>
                </>
            ),
        },
    },
    {
        key: "off-platform-behavior",
        title: {
            en: "Off-Platform Behavior",
            pl: "Zachowanie poza platformą",
        },
        content: {
            en: <p>In exceptional cases, we may respond to serious policy violations that occur outside of Klovy Chat if they impact community safety or violate applicable laws. This includes threats, violence, or severe harmful behavior.</p>,
            pl: <p>W wyjątkowych przypadkach możemy reagować na poważne naruszenia zasad, które mają miejsce poza Klovy Chat, jeśli wpływają na bezpieczeństwo społeczności lub naruszają obowiązujące prawo. Dotyczy to m.in. gróźb, przemocy lub poważnie szkodliwych zachowań.</p>,
        },
    },
    {
        key: "jurisdiction",
        title: {
            en: "Jurisdiction",
            pl: "Jurysdykcja",
        },
        content: {
            en: (
                <table className="mb-4 border-collapse w-full">
                    <thead>
                        <tr>
                            <th className="pr-4 text-left border-b">Jurisdiction</th>
                            <th className="text-left border-b">Reason</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="pr-4 border-b">Poland</td>
                            <td className="border-b">Location of the data controller</td>
                        </tr>
                        <tr>
                            <td className="pr-4 border-b">Germany</td>
                            <td className="border-b">Server locations</td>
                        </tr>
                        <tr>
                            <td className="pr-4 border-b">Global</td>
                            <td className="border-b">Worldwide reach of the platform</td>
                        </tr>
                    </tbody>
                </table>
            ),
            pl: (
                <table className="mb-4 border-collapse w-full">
                    <thead>
                        <tr>
                            <th className="pr-4 text-left border-b">Jurysdykcja</th>
                            <th className="text-left border-b">Powód</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="pr-4 border-b">Polska</td>
                            <td className="border-b">Siedziba administratora danych</td>
                        </tr>
                        <tr>
                            <td className="pr-4 border-b">Niemcy</td>
                            <td className="border-b">Lokalizacje serwerów</td>
                        </tr>
                        <tr>
                            <td className="pr-4 border-b">Globalnie</td>
                            <td className="border-b">Globalny zasięg platformy</td>
                        </tr>
                    </tbody>
                </table>
            ),
        },
    },
    {
        key: "children-privacy",
        title: {
            en: "Children's Privacy",
            pl: "Prywatność dzieci",
        },
        content: {
            en: (
                <>
                    <p>We comply with the requirements of the <a href="https://gdpr-info.eu/art-8-gdpr/" className="underline text-white">GDPR</a>, <a href="https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa" className="underline text-white">COPPA</a>, and other local regulations concerning the privacy of minors.</p>
                    <p>We do not knowingly collect data from individuals under the legal minimum age defined in their country.</p>
                    <p>If such a case is identified, the account will be deleted immediately and all personal data will be removed from our systems.</p>
                </>
            ),
            pl: (
                <>
                    <p>Przestrzegamy wymogów <a href="https://gdpr-info.eu/art-8-gdpr/" className="underline text-white">RODO</a>, <a href="https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa" className="underline text-white">COPPA</a> i innych lokalnych przepisów dotyczących prywatności nieletnich.</p>
                    <p>Nie zbieramy świadomie danych osób poniżej minimalnego wieku określonego w danym kraju.</p>
                    <p>W przypadku wykrycia takiego przypadku konto zostanie natychmiast usunięte, a dane osobowe skasowane.</p>
                </>
            ),
        },
    },
    {
        key: "minimum-age",
        title: {
            en: "Minimum Age by Region and Country",
            pl: "Minimalny wiek według regionu i kraju",
        },
        content: {
            en: (
                <p>The minimum age depends on local data protection laws. This is usually the age at which the user can independently provide consent to data processing. In the event of changes in the law, this policy will be updated.</p>
            ),
            pl: (
                <p>Minimalny wiek zależy od lokalnych przepisów o ochronie danych. Zwykle jest to wiek, w którym użytkownik może samodzielnie wyrazić zgodę na przetwarzanie danych. W razie zmian prawnych zasady te zostaną zaktualizowane.</p>
            ),
        },
    },
    {
        key: "coppa-compliance",
        title: {
            en: "Compliance with COPPA",
            pl: "Zgodność z COPPA",
        },
        content: {
            en: (
                <p>Klovy Chat complies with the U.S. Children&apos;s Online Privacy Protection Act (COPPA), which regulates the collection of personal information from children under the age of 13. Our platform is not intended for users under this age in the United States. Any identified accounts belonging to minors will be immediately removed. We also cooperate with parents or legal guardians as necessary to ensure compliance.</p>
            ),
            pl: (
                <p>Klovy Chat spełnia wymogi amerykańskiej ustawy COPPA dotyczącej ochrony prywatności dzieci poniżej 13 roku życia. Platforma nie jest przeznaczona dla takich użytkowników w USA. Wszelkie wykryte konta nieletnich są natychmiast usuwane. Współpracujemy także z rodzicami lub opiekunami prawnymi w celu zapewnienia zgodności.</p>
            ),
        },
    },
    {
        key: "gdpr-compliance",
        title: {
            en: "Compliance with GDPR",
            pl: "Zgodność z RODO",
        },
        content: {
            en: (
                <>
                    <p>For users located in the European Economic Area (EEA) and the United Kingdom, we comply with the General Data Protection Regulation (GDPR). Your data is processed based on principles of lawfulness, transparency, data minimization, and purpose limitation. You have the right to access, correct, delete, or transfer your data. You may also withdraw your consent at any time without affecting the lawfulness of prior processing.</p>
                    <p>GDPR compliance applies regardless of the country in which the data is processed — it covers all individuals in the EEA, regardless of citizenship. We also strive to protect the privacy of users from other countries based on the highest standards.</p>
                    <p>If you would like to request the deletion of any information stored on our servers, including any requests under the GDPR or DMCA, please use the in-app deletion/reporting option if available, or otherwise contact us at <a href="mailto:urgent@klovy.org" className="underline text-white">urgent@klovy.org</a></p>
                </>
            ),
            pl: (
                <>
                    <p>Dla użytkowników z EOG i Wielkiej Brytanii stosujemy zasady RODO: legalność, przejrzystość, minimalizacja i ograniczenie celu przetwarzania danych. Masz prawo do dostępu, poprawiania, usunięcia lub przeniesienia swoich danych, a także do cofnięcia zgody w dowolnym momencie bez wpływu na wcześniejsze przetwarzanie.</p>
                    <p>Zasady RODO obowiązują niezależnie od kraju przetwarzania — obejmują wszystkich użytkowników z EOG, niezależnie od obywatelstwa. Staramy się także chronić prywatność użytkowników z innych krajów według najwyższych standardów.</p>
                    <p>Jeśli chcesz poprosić o usunięcie jakichkolwiek informacji przechowywanych na naszych serwerach, w tym o wszelkie żądania złożone na podstawie RODO lub DMCA, skorzystaj z opcji usuwania/zgłaszania w aplikacji, jeśli jest dostępna, lub skontaktuj się z nami pod adresem <a href="mailto:urgent@klovy.org" className="underline text-white">urgent@klovy.org</a></p>
                </>
            ),
        },
    },
    {
        key: "gdpr-legal-basis",
        title: {
            en: "GDPR – Legal Basis (Article 6(1)(f))",
            pl: "RODO – Podstawa prawna (art. 6 ust. 1 lit. f)",
        },
        content: {
            en: (
                <>
                    <p>Under the General Data Protection Regulation (GDPR), Klovy Chat processes certain personal data based on the legal basis of <b>legitimate interest</b> as defined in Article 6(1)(f).</p>
                    <ul className="list-disc ml-6">
                        <li>protecting against automated abuse such as spam, scraping, or denial-of-service attacks,</li>
                        <li>detecting and preventing fraudulent activity,</li>
                        <li>ensuring the technical functionality and performance of the service.</li>
                    </ul>
                </>
            ),
            pl: (
                <>
                    <p>Na podstawie RODO Klovy Chat przetwarza niektóre dane osobowe na podstawie <b>uzasadnionego interesu</b> zgodnie z art. 6 ust. 1 lit. f.</p>
                    <ul className="list-disc ml-6">
                        <li>ochrona przed automatycznym nadużyciem, takim jak spam, scraping czy ataki DDoS,</li>
                        <li>wykrywanie i zapobieganie oszustwom,</li>
                        <li>zapewnienie technicznej funkcjonalności i wydajności usługi.</li>
                    </ul>
                </>
            ),
        },
    },
    {
        key: "germany-law",
        title: {
            en: "Applicable Law for Data Stored in Germany",
            pl: "Prawo właściwe dla danych przechowywanych w Niemczech",
        },
        content: {
            en: (
                <>
                    <p>Because our servers are located in Germany, all personal data stored there is subject to the provisions of the <b>General Data Protection Regulation (GDPR / DSGVO)</b> as well as the <b>German Federal Data Protection Act (Bundesdatenschutzgesetz, BDSG)</b>.</p>
                    <p>The GDPR sets the core rules for data protection across the European Union, while the BDSG provides additional national requirements applicable in Germany, such as specific rules for employee data processing and certain conditions for data transfers.</p>
                    <p>By using Klovy Chat, you acknowledge that your data may be processed in Germany under these legal frameworks.</p>
                </>
            ),
            pl: (
                <>
                    <p>Ponieważ nasze serwery znajdują się w Niemczech, wszystkie dane osobowe tam przechowywane podlegają przepisom <b>RODO (DSGVO)</b> oraz <b>niemieckiej federalnej ustawy o ochronie danych osobowych (Bundesdatenschutzgesetz, BDSG)</b>.</p>
                    <p>RODO określa podstawowe zasady ochrony danych w całej Unii Europejskiej, natomiast BDSG wprowadza dodatkowe wymagania krajowe obowiązujące w Niemczech, takie jak szczególne zasady przetwarzania danych pracowników czy warunki transferu danych.</p>
                    <p>Korzystając z Klovy Chat, akceptujesz, że Twoje dane mogą być przetwarzane w Niemczech zgodnie z tymi przepisami.</p>
                </>
            ),
        },
    },
    {
        key: "poland-law",
        title: {
            en: "Applicable Law for Data Stored in Poland",
            pl: "Prawo właściwe dla danych przechowywanych w Polsce",
        },
        content: {
            en: (
                <>
                    <p>Because the data controller is located in Poland, any personal data processed or stored in Poland is subject to the provisions of the <b>General Data Protection Regulation (GDPR / RODO)</b> as well as the <b>Polish Act on the Protection of Personal Data (Ustawa o ochronie danych osobowych)</b>.</p>
                    <p>The GDPR provides the main framework for data protection across the European Union, while the Polish Act implements and supplements GDPR rules at the national level, including provisions regarding the powers of the President of the Personal Data Protection Office (<b>Prezes Urzędu Ochrony Danych Osobowych, UODO</b>) and procedures for handling complaints.</p>
                    <p>By using Klovy Chat, you acknowledge that your data processed in Poland is protected under these legal frameworks.</p>
                </>
            ),
            pl: (
                <>
                    <p>Ponieważ administratorem danych jest Jakub Maksymowicz z siedzibą w Polsce, wszelkie dane osobowe przetwarzane lub przechowywane w Polsce podlegają przepisom <b>RODO</b> oraz <b>ustawy o ochronie danych osobowych</b>.</p>
                    <p>RODO stanowi główną podstawę ochrony danych w całej Unii Europejskiej, natomiast polska ustawa wdraża i uzupełnia przepisy RODO na poziomie krajowym, w tym dotyczące uprawnień Prezesa Urzędu Ochrony Danych Osobowych (UODO) i procedur rozpatrywania skarg.</p>
                    <p>Korzystając z Klovy Chat, akceptujesz, że Twoje dane przetwarzane w Polsce są chronione zgodnie z tymi przepisami.</p>
                </>
            ),
        },
    },
    {
        key: "your-rights",
        title: {
            en: "Your Rights",
            pl: "Twoje prawa",
        },
        content: {
            en: (
                <>
                    <ul className="list-disc ml-6">
                        <li>access your data,</li>
                        <li>correct or delete your data,</li>
                        <li>restrict data processing,</li>
                        <li>data portability,</li>
                        <li>withdraw your consent at any time,</li>
                        <li>file a complaint with a supervisory authority.</li>
                    </ul>
                    <p>For data-related inquiries, please contact us at: <a href="mailto:dpo@klovy.org" className="underline text-white">dpo@klovy.org</a></p>
                </>
            ),
            pl: (
                <>
                    <ul className="list-disc ml-6">
                        <li>dostęp do danych,</li>
                        <li>poprawianie lub usunięcie danych,</li>
                        <li>ograniczenie przetwarzania,</li>
                        <li>przenoszenie danych,</li>
                        <li>cofnięcie zgody w dowolnym momencie,</li>
                        <li>złożenie skargi do organu nadzorczego.</li>
                    </ul>
                    <p>W sprawach dotyczących danych osobowych prosimy o kontakt: <a href="mailto:dpo@klovy.org" className="underline text-white">dpo@klovy.org</a></p>
                </>
            ),
        },
    },
    {
        key: "changes-policy",
        title: {
            en: "Changes to the Privacy Policy",
            pl: "Zmiany polityki prywatności",
        },
        content: {
            en: <p>We reserve the right to update this policy in case of legal changes, feature updates, or technological adjustments. Any significant changes will be communicated in the app or on our website.</p>,
            pl: <p>Zastrzegamy sobie prawo do aktualizacji tej polityki w przypadku zmian prawnych, funkcjonalnych lub technologicznych. O istotnych zmianach poinformujemy w aplikacji lub na stronie internetowej.</p>,
        },
    },
];


const PrivacyPage = () => {
    const { lang } = useLang();
    useEffect(() => {
        initAOS();
    }, []);
    return (
        <Container>
            <div className="mx-auto px-4 py-8 max-w-3xl mt-32">
                <h1 className="text-4xl font-bold mb-2">{lang === 'pl' ? 'Polityka Prywatności Klovy Chat' : 'Klovy Chat Privacy Policy'}</h1>
                <div className="text-white font-normal mb-1">{lang === 'pl' ? 'Ostatnia aktualizacja: 15 sierpnia 2025' : 'Last Updated: August 15, 2025'}</div>
                <div className="text-white font-normal mb-10">{lang === 'pl' ? 'Data wejścia w życie: 20 sierpnia 2025' : 'Effective Date: August 20, 2025'}</div>
                {privacySections.map((section) => (
                    <section key={section.key} className="mb-8" data-aos="fade-up">
                        <h2 className="text-2xl font-semibold mb-2 mt-6">{section.title[lang]}</h2>
                        <div className="space-y-2 text-base leading-relaxed">{typeof section.content[lang] === 'string' ? String(section.content[lang]).replace(/'/g, "&apos;").replace(/\"/g, "&quot;") : section.content[lang]}</div>
                    </section>
                ))}
            </div>
        </Container>
    );
};

export default PrivacyPage;