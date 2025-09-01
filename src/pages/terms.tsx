
import React, { useEffect } from "react";
import Container from "@/components/Container";
import { useLang } from "@/context/LangContext";

import { initAOS } from "@/lib/aos-init";

const termsSections = [
    {
        key: "introduction",
        title: {
            en: "Introduction",
            pl: "Wprowadzenie",
        },
        content: {
            en: (
                <p>
                    Welcome to Klovy Chat! These Terms of Service (hereinafter referred to as the &quot;Terms&quot;) govern your access to and use of the Klovy Chat platform (hereinafter referred to as the &quot;Service&quot;). By accessing or using the Service, you agree to be legally bound by these Terms. If you do not agree with any provision herein, please do not use the Service. The Service is operated by the Klovy Chat community. It is not a registered legal entity or company and is provided on a voluntary, community-driven basis.
                </p>
            ),
            pl: (
                <p>
                    Witamy w Klovy Chat! Niniejsze Warunki (dalej: &bdquo;Warunki&rdquo;) określa zasady korzystania z platformy Klovy Chat (dalej: &bdquo;Serwis&rdquo;). Uzyskując dostęp do Serwisu lub z niego korzystając, akceptujesz postanowienia Warunków. Jeśli nie zgadzasz się z którymkolwiek z zapisów, nie korzystaj z Serwisu. Serwis jest prowadzony przez społeczność Klovy Chat, nie stanowi zarejestrowanej firmy i działa na zasadzie dobrowolności.
                </p>
            ),
        },
    },
    {
        key: "definitions",
        title: {
            en: "Definitions",
            pl: "Definicje",
        },
        content: {
            en: (
                <div>
                    <p>For the purposes of these Terms:</p>
                    <ul className="list-disc ml-6">
                        <li><b>&quot;Service&quot;</b> &mdash; refers to the online communication platform &quot;Klovy Chat,&quot; enabling users to engage in text, voice, and video conversations, and share information, files, and other content.</li>
                        <li><b>&quot;User&quot;</b> &mdash; means any individual, legal entity, or other organization that accesses, browses, or uses the Service.</li>
                        <li><b>&quot;Content&quot;</b> &mdash; includes all text, images, audio, video, messages, files, or other materials shared or posted by Users within the Service.</li>
                        <li><b>&quot;Account&quot;</b> &mdash; refers to a personal, registered user profile enabling access to the Service and its functionalities.</li>
                    </ul>
                </div>
            ),
            pl: (
                <div>
                    <p>Na potrzeby niniejszych Warunków:</p>
                    <ul className="list-disc ml-6">
                        <li><b>&bdquo;Serwis&rdquo;</b> &mdash; internetowa platforma komunikacyjna &bdquo;Klovy Chat&rdquo; umożliwiająca prowadzenie rozmów tekstowych, głosowych i wideo oraz udostępnianie informacji, plików i innych treści.</li>
                        <li><b>&bdquo;Użytkownik&rdquo;</b> &mdash; każda osoba fizyczna, prawna lub inny podmiot korzystający z Serwisu, przeglądający go lub z niego korzystający.</li>
                        <li><b>&bdquo;Treści&rdquo;</b> &mdash; wszelkie teksty, obrazy, nagrania audio, wideo, wiadomości, pliki lub inne materiały udostępniane lub publikowane przez Użytkowników w Serwisie.</li>
                        <li><b>&bdquo;Konto&rdquo;</b> &mdash; indywidualny, zarejestrowany profil użytkownika umożliwiający dostęp do Serwisu i jego funkcji.</li>
                    </ul>
                </div>
            ),
        },
    },
    {
        key: "access",
        title: {
            en: "Access to the Service",
            pl: "Dostęp do Serwisu",
        },
        content: {
            en: (
                <div>
                    <li>Any attempts to violate the &quot;Terms of Service&quot;, please send an email to <a className="text-white" href="mailto:abuse@klovy.org"><b>abuse@klovy.org</b></a></li>
                    <ul className="list-disc ml-6">
                        <li>You must create an Account by providing accurate, complete, and up-to-date information.</li>
                        <li>You agree to maintain the confidentiality of your login credentials and are solely responsible for any activities conducted through your Account.</li>
                        <li>You may not transfer or assign your Account to another person without prior written consent from Klovy Chat administrators.</li>
                        <li>Klovy Chat reserves the right to suspend or terminate access if any information provided is found to be false, misleading, or incomplete.</li>
                    </ul>
                </div>
            ),
            pl: (
                <div>
                    <p>Aby korzystać z Serwisu:</p>
                    <ul className="list-disc ml-6">
                        <li>Musisz założyć Konto, podając prawdziwe, kompletne i aktualne dane.</li>
                        <li>Zobowiązujesz się do zachowania poufności swoich danych logowania i ponosisz wyłączną odpowiedzialność za wszelkie działania podejmowane za pośrednictwem Konta.</li>
                        <li>Nie możesz przekazywać ani udostępniać swojego Konta innej osobie bez uprzedniej pisemnej zgody administratorów Klovy Chat.</li>
                        <li>Klovy Chat zastrzega sobie prawo do zawieszenia lub zakończenia dostępu, jeśli podane informacje okażą się fałszywe, wprowadzające w błąd lub niekompletne.</li>
                    </ul>
                </div>
            ),
        },
    },
    {
        key: "age",
        title: {
            en: "Age of Users",
            pl: "Wiek użytkowników",
        },
        content: {
            en: (
                <ul className="list-disc ml-6">
                    <li>The Service is intended for individuals aged <b>13 years or older</b>, in accordance with the U.S. Children&apos;s Online Privacy Protection Act (COPPA).</li>
                    <li>Users under the age of <b>13</b> are strictly prohibited from using the Service. We do not knowingly collect personal data from individuals under 13. If we become aware that such data has been collected, we will promptly delete it.</li>
                    <li>Users between the ages of <b>13 and 18</b> may only use the Service with the consent and supervision of a parent or legal guardian, and must ensure that such consent complies with applicable laws in their jurisdiction.</li>
                    <li>By using the Service, you confirm that you meet the minimum age requirement and, if under 18, have obtained verifiable parental or guardian consent as required.</li>
                    <li>Klovy Chat reserves the right to verify the age of Users at any time and may request appropriate documentation to confirm eligibility. Accounts in violation of age requirements may be suspended or terminated without notice.</li>
                </ul>
            ),
            pl: (
                <ul className="list-disc ml-6">
                    <li>Serwis jest przeznaczony dla osób, które ukończyły <b>13 lat</b>, zgodnie z amerykańską ustawą o ochronie prywatności dzieci w internecie (COPPA).</li>
                    <li>Osoby poniżej <b>13 roku życia</b> nie mogą korzystać z Serwisu. Nie zbieramy świadomie danych osobowych osób poniżej 13 lat. W przypadku wykrycia takich danych zostaną one niezwłocznie usunięte.</li>
                    <li>Osoby w wieku <b>od 13 do 18 lat</b> mogą korzystać z Serwisu wyłącznie za zgodą i pod nadzorem rodzica lub opiekuna prawnego oraz muszą zapewnić, że taka zgoda jest zgodna z obowiązującym prawem w ich jurysdykcji.</li>
                    <li>Korzystając z Serwisu, potwierdzasz, że spełniasz minimalny wymóg wiekowy, a jeśli masz mniej niż 18 lat, uzyskałeś/aś wymaganą zgodę rodzica lub opiekuna prawnego.</li>
                    <li>Klovy Chat zastrzega sobie prawo do weryfikacji wieku Użytkowników w dowolnym momencie i może zażądać odpowiednich dokumentów potwierdzających uprawnienia. Konta naruszające wymogi wiekowe mogą zostać zawieszone lub usunięte bez powiadomienia.</li>
                </ul>
            ),
        },
    },
    {
        key: "conduct",
        title: {
            en: "Additional Rules of Conduct",
            pl: "Dodatkowe zasady zachowania",
        },
        content: {
            en: (
                <div>
                    <p>In addition to the general Rules of Use of the Service, the following provisions apply to ensure a safe, respectful, and lawful environment:</p>
                    <ul className="list-disc ml-6">
                        <li><b>No promotion of extremist ideologies.</b> Any attempt to endorse, glorify, or encourage extremist or violent movements is strictly prohibited.</li>
                        <li><b>Prohibition on spreading harmful falsehoods.</b> Users may not share, amplify, or intentionally circulate false or misleading claims, including conspiracy narratives, particularly where they could cause harm.</li>
                        <li><b>Ban on hate speech.</b> Content that targets individuals or groups with hostility, slurs, or derogatory language based on legally protected attributes (such as gender, ethnicity, religion, disability, or sexual orientation) is forbidden.</li>
                        <li><b>Prohibition of self-harm promotion.</b> Posts or messages that encourage self-harm, suicide, or disordered eating are not allowed. Users should instead guide those in distress toward relevant helplines or support services.</li>
                        <li><b>Compliance with all laws.</b> All activities must adhere to applicable laws at the local, national, and international levels.</li>
                        <li><b>Prohibited external promotion.</b> External content that breaches these rules or undermines the integrity of the Service may not be promoted.</li>
                        <li><b>Restrictions on violent and graphic content.</b> Depictions of real-world violence, gore, or cruelty toward animals are not permitted unless clearly presented for educational, journalistic, or artistic purposes.</li>
                        <li><b>No malicious software or harmful code.</b> The distribution of viruses, malware, or any other code designed to disrupt systems or compromise user security is banned.</li>
                        <li><b>Impersonation is forbidden.</b> Falsely representing oneself as another individual, group, or organization in a deceptive or harmful manner is not permitted.</li>
                        <li><b>Protection of minors.</b> Any sexualised content involving minors is strictly prohibited and will be reported to the relevant authorities. Sexual or explicit materials may only appear in age-restricted spaces where legally allowed.</li>
                    </ul>
                    <p className="mt-4">Klovy Chat reserves the right to monitor, review, and, where necessary, remove any content or suspend accounts that breach these Terms or legal provisions.</p>
                </div>
            ),
            pl: (
                <div>
                    <p>Oprócz ogólnych Zasad Korzystania z Serwisu, następujące postanowienia mają na celu zapewnienie bezpiecznego, szanującego i zgodnego z prawem środowiska:</p>
                    <ul className="list-disc ml-6">
                        <li><b>Zakaz promowania ideologii ekstremistycznych.</b> Wszelkie próby popierania, gloryfikowania lub zachęcania do ruchów ekstremistycznych lub przemocy są surowo zabronione.</li>
                        <li><b>Zakaz rozpowszechniania szkodliwych nieprawd.</b> Użytkownicy nie mogą udostępniać, wzmacniać ani celowo rozpowszechniać fałszywych lub wprowadzających w błąd informacji, w tym teorii spiskowych, zwłaszcza jeśli mogą one wyrządzić szkodę.</li>
                        <li><b>Zakaz mowy nienawiści.</b> Treści atakujące osoby lub grupy wrogością, obelgami lub obraźliwym językiem ze względu na prawnie chronione cechy (takie jak płeć, pochodzenie etniczne, religia, niepełnosprawność czy orientacja seksualna) są zabronione.</li>
                        <li><b>Zakaz promowania samookaleczeń.</b> Posty lub wiadomości zachęcające do samookaleczeń, samobójstw lub zaburzeń odżywiania są niedozwolone. Użytkownicy powinni kierować osoby w kryzysie do odpowiednich infolinii lub służb wsparcia.</li>
                        <li><b>Przestrzeganie prawa.</b> Wszystkie działania muszą być zgodne z obowiązującym prawem lokalnym, krajowym i międzynarodowym.</li>
                        <li><b>Zakaz promowania treści zewnętrznych naruszających zasady.</b> Nie wolno promować treści zewnętrznych, które naruszają te zasady lub podważają integralność Serwisu.</li>
                        <li><b>Ograniczenia dotyczące treści drastycznych i przemocy.</b> Przedstawianie rzeczywistej przemocy, drastycznych scen lub okrucieństwa wobec zwierząt jest niedozwolone, chyba że ma to wyraźnie charakter edukacyjny, dziennikarski lub artystyczny.</li>
                        <li><b>Zakaz złośliwego oprogramowania.</b> Rozpowszechnianie wirusów, złośliwego oprogramowania lub innego kodu mającego na celu zakłócenie działania systemów lub naruszenie bezpieczeństwa użytkowników jest zabronione.</li>
                        <li><b>Zakaz podszywania się.</b> Nie wolno podszywać się pod inne osoby, grupy lub organizacje w sposób wprowadzający w błąd lub szkodliwy.</li>
                        <li><b>Ochrona nieletnich.</b> Wszelkie treści seksualizujące nieletnich są surowo zabronione i będą zgłaszane odpowiednim organom. Materiały seksualne lub drastyczne mogą pojawiać się wyłącznie w przestrzeniach z ograniczeniem wiekowym, gdzie jest to prawnie dozwolone.</li>
                    </ul>
                    <p className="mt-4">Klovy Chat zastrzega sobie prawo do monitorowania, przeglądania i w razie potrzeby usuwania treści lub zawieszania kont naruszających Warunki lub przepisy prawa.</p>
                </div>
            ),
        },
    },
    {
        key: "suspension",
        title: {
            en: "Account Suspension and Termination",
            pl: "Zawieszenie i usunięcie konta",
        },
        content: {
            en: (
                <div>
                    <p>Klovy Chat may suspend, restrict, or permanently terminate any account under the following circumstances:</p>
                    <ul className="list-disc ml-6">
                        <li>Violation of these Terms of Service or applicable laws.</li>
                        <li>Engagement in conduct harmful to other users or to the integrity of the service.</li>
                        <li>Distribution of unauthorized or illegal content.</li>
                        <li>Security breaches or attempts to exploit the service&apos;s technical infrastructure.</li>
                    </ul>
                    <p className="mt-4">Upon termination, the User&apos;s access to the Service and associated data may be permanently deleted. Klovy Chat is under no obligation to store or retrieve terminated User data.</p>
                </div>
            ),
            pl: (
                <div>
                    <p>Klovy Chat może zawiesić, ograniczyć lub trwale usunąć konto w następujących okolicznościach:</p>
                    <ul className="list-disc ml-6">
                        <li>Naruszenie niniejszych Warunków lub obowiązującego prawa.</li>
                        <li>Działania szkodliwe dla innych użytkowników lub integralności serwisu.</li>
                        <li>Rozpowszechnianie nieautoryzowanych lub nielegalnych treści.</li>
                        <li>Naruszenia bezpieczeństwa lub próby wykorzystania infrastruktury technicznej serwisu.</li>
                    </ul>
                    <p className="mt-4">Po usunięciu konta dostęp Użytkownika do Serwisu i powiązane dane mogą zostać trwale usunięte. Klovy Chat nie ma obowiązku przechowywania lub odzyskiwania danych usuniętego Użytkownika.</p>
                </div>
            ),
        },
    },
    {
        key: "intellectual_property",
        title: {
            en: "Intellectual Property Rights",
            pl: "Prawa własności intelektualnej",
        },
        content: {
            en: (
                <ul className="list-disc ml-6">
                    <li>The Service, including its software, interface, design, trademarks, and proprietary content, is protected by intellectual property rights and remains the property of its respective owners.</li>
                    <li>Users retain rights to the content they submit but grant Klovy Chat a non-exclusive, worldwide, royalty-free license to host, display, and distribute such content within the Service as necessary for its operation.</li>
                    <li>Copying, reproducing, modifying, or distributing any part of the Service without prior written consent is strictly prohibited.</li>
                </ul>
            ),
            pl: (
                <ul className="list-disc ml-6">
                    <li>Serwis, w tym jego oprogramowanie, interfejs, projekt, znaki towarowe i zastrzeżone treści, jest chroniony prawami własności intelektualnej i pozostaje własnością odpowiednich właścicieli.</li>
                    <li>Użytkownicy zachowują prawa do przesyłanych przez siebie treści, ale udzielają Klovy Chat niewyłącznej, światowej, bezpłatnej licencji na hosting, wyświetlanie i dystrybucję takich treści w ramach Serwisu w zakresie niezbędnym do jego działania.</li>
                    <li>Kopiowanie, reprodukowanie, modyfikowanie lub dystrybucja jakiejkolwiek części Serwisu bez uprzedniej pisemnej zgody jest surowo zabronione.</li>
                </ul>
            ),
        },
    },
    {
        key: "privacy",
        title: {
            en: "Privacy and Personal Data Protection",
            pl: "Prywatność i ochrona danych osobowych",
        },
        content: {
            en: (
                <ul className="list-disc ml-6">
                    <li>Klovy Chat respects the privacy of its Users and processes personal data in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR).</li>
                    <li>Full details regarding data processing, storage, and Users&apos; rights are outlined in the Klovy Chat Privacy Policy, available at klovy.org. This policy forms an integral part of these Terms.</li>
                    <li>By using the Service, Users consent to the collection and use of personal data as described in the Privacy Policy.</li>
                </ul>
            ),
            pl: (
                <ul className="list-disc ml-6">
                    <li>Klovy Chat szanuje prywatność swoich Użytkowników i przetwarza dane osobowe zgodnie z obowiązującymi przepisami o ochronie danych, w tym Rozporządzeniem Ogólnym o Ochronie Danych (RODO).</li>
                    <li>Pełne szczegóły dotyczące przetwarzania, przechowywania danych i praw Użytkowników znajdują się w Polityce Prywatności Klovy Chat, dostępnej pod adresem klovy.org. Polityka ta stanowi integralną część niniejszych Warunków.</li>
                    <li>Korzystając z Serwisu, Użytkownicy wyrażają zgodę na zbieranie i wykorzystywanie danych osobowych zgodnie z opisem w Polityce Prywatności.</li>
                </ul>
            ),
        },
    },
    {
        key: "payments",
        title: {
            en: "Payment Information and Donations",
            pl: "Informacje o płatnościach i darowizny",
        },
        content: {
            en: (
                <div>
                    <p>Klovy Chat offers optional paid features or donations to support the platform. All payments are entirely voluntary and are not required for the basic use of the Service.</p>
                    <p className="mt-4">We use trusted third-party payment providers to process transactions securely. These include, but are not limited to:</p>
                    <ul className="list-disc ml-6 mt-2">
                        <li><b>Ko-fi</b> — for voluntary donations and support,</li>
                        <li><b>Liberapay</b> — for recurring or one-time donations,</li>
                        <li><b>Suppi.pl</b> — for payments within supported regions.</li>
                    </ul>
                    <p className="mt-4">By using these payment services, you consent to the processing of your payment data by the respective provider according to their privacy policies. Klovy Chat does not store full payment card information on its servers. Only the minimum necessary data, such as transaction confirmation, donation amount, and payer identification required for accounting purposes, may be retained.</p>
                    <p className="mt-4">All transactions are final unless otherwise specified by the payment provider. Refunds, cancellations, or disputes are subject to the terms and policies of the respective payment service. Klovy Chat reserves the right to suspend or terminate access to paid features in cases of suspected fraud, abuse, or non-compliance with applicable laws.</p>
                    <p className="mt-4">Please note that donations may be subject to local tax regulations. Users are responsible for understanding any applicable obligations in their jurisdiction.</p>
                </div>
            ),
            pl: (
                <div>
                    <p>Klovy Chat oferuje opcjonalne płatne funkcje lub darowizny na wsparcie platformy. Wszystkie płatności są całkowicie dobrowolne i nie są wymagane do podstawowego korzystania z Serwisu.</p>
                    <p className="mt-4">Używamy zaufanych zewnętrznych dostawców płatności do bezpiecznego przetwarzania transakcji. Należą do nich między innymi:</p>
                    <ul className="list-disc ml-6 mt-2">
                        <li><b>Ko-fi</b> — dla dobrowolnych darowizn i wsparcia,</li>
                        <li><b>Liberapay</b> — dla darowizn cyklicznych lub jednorazowych,</li>
                        <li><b>Suppi.pl</b> — dla płatności w obsługiwanych regionach.</li>
                    </ul>
                    <p className="mt-4">Korzystając z tych usług płatniczych, wyrażasz zgodę na przetwarzanie danych płatniczych przez odpowiedniego dostawcę zgodnie z jego polityką prywatności. Klovy Chat nie przechowuje pełnych informacji o kartach płatniczych na swoich serwerach. Mogą być zachowywane jedynie niezbędne minimum danych, takie jak potwierdzenie transakcji, kwota darowizny i identyfikacja płatnika wymagana do celów księgowych.</p>
                    <p className="mt-4">Wszystkie transakcje są ostateczne, chyba że dostawca płatności stanowi inaczej. Zwroty, anulowania lub spory podlegają warunkom i zasadom odpowiedniej usługi płatniczej. Klovy Chat zastrzega sobie prawo do zawieszenia lub zakończenia dostępu do płatnych funkcji w przypadkach podejrzenia oszustwa, nadużycia lub niezgodności z obowiązującym prawem.</p>
                    <p className="mt-4">Należy pamiętać, że darowizny mogą podlegać lokalnym przepisom podatkowym. Użytkownicy są odpowiedzialni za zrozumienie wszelkich obowiązujących obowiązków w swojej jurysdykcji.</p>
                </div>
            ),
        },
    },
    {
        key: "liability",
        title: {
            en: "Limitation of Liability",
            pl: "Ograniczenie odpowiedzialności",
        },
        content: {
            en: (
                <ul className="list-disc ml-6">
                        <li>The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, whether express or implied.</li>
                        <li>Klovy Chat shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with the use of the Service, including but not limited to system errors, data loss, security breaches, or service interruptions.</li>
                        <li>Users acknowledge that they use the Service at their own risk and are solely responsible for any outcomes resulting from its use.</li>
                </ul>
            ),
            pl: (
                <ul className="list-disc ml-6">
                    <li>Serwis jest świadczony na zasadzie &quot;jak jest&quot; i &quot;jak jest dostępny&quot; bez gwarancji jakiegokolwiek rodzaju, czy to wyrażonych, czy dorozumianych.</li>
                    <li>Klovy Chat nie ponosi odpowiedzialności za jakiekolwiek bezpośrednie, pośrednie, przypadkowe, następcze lub karne szkody wynikające z korzystania z Serwisu lub z nim związane, w tym między innymi błędy systemowe, utratę danych, naruszenia bezpieczeństwa lub przerwy w świadczeniu usług.</li>
                    <li>Użytkownicy przyznają, że korzystają z Serwisu na własne ryzyko i ponoszą wyłączną odpowiedzialność za wszelkie skutki wynikające z jego użytkowania.</li>
                </ul>
            ),
        },
    },
    {
        key: "amendments",
        title: {
            en: "Amendments to the Terms",
            pl: "Zmiany w Warunkach",
        },
        content: {
            en: (
                <ul className="list-disc ml-6">
                    <li>Klovy Chat reserves the right to modify, update, or replace these Terms at any time. Any changes will be communicated by publishing the updated Terms on the Service website.</li>
                    <li>Continued use of the Service after such changes constitutes acceptance of the new Terms.</li>
                    <li>If a User does not agree to the modified Terms, they must immediately cease using the Service.</li>
                </ul>
            ),
            pl: (
                <ul className="list-disc ml-6">
                    <li>Klovy Chat zastrzega sobie prawo do modyfikowania, aktualizowania lub zastępowania niniejszych Warunków w dowolnym czasie. Wszelkie zmiany będą komunikowane poprzez opublikowanie zaktualizowanych Warunków na stronie internetowej Serwisu.</li>
                    <li>Dalsze korzystanie z Serwisu po takich zmianach stanowi akceptację nowych Warunków.</li>
                    <li>Jeśli Użytkownik nie zgadza się na zmodyfikowane Warunki, musi natychmiast zaprzestać korzystania z Serwisu.</li>
                </ul>
            ),
        },
    },
    {
        key: "final",
        title: {
            en: "Final Provisions",
            pl: "Postanowienia końcowe",
        },
        content: {
            en: (
                <ul className="list-disc ml-6">
                    <li>These Terms represent the entire agreement between the User and Klovy Chat regarding the use of the Service and supersede all prior agreements, written or oral.</li>
                    <li>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</li>
                    <li>Any disputes arising out of the use of the Service shall be resolved amicably, and if not possible, by a court of competent jurisdiction as determined by the seat of Klovy Chat&apos;s administrative operations.</li>
                </ul>
            ),
            pl: (
                <ul className="list-disc ml-6">
                    <li>Niniejsze Warunki stanowią całość umowy między Użytkownikiem a Klovy Chat dotyczącą korzystania z Serwisu i zastępują wszystkie wcześniejsze umowy, pisemne lub ustne.</li>
                    <li>Jeśli jakiekolwiek postanowienie niniejszych Warunków zostanie uznane za nieważne lub niewykonalne, pozostałe postanowienia pozostają w pełnej mocy.</li>
                    <li>Wszelkie spory wynikające z korzystania z Serwisu powinny być rozwiązywane polubownie, a jeśli nie jest to możliwe, przez właściwy sąd określony przez siedzibę operacji administracyjnych Klovy Chat.</li>
                </ul>
            ),
        },
    },
    {
        key: "contact",
        title: {
            en: "Contact",
            pl: "Kontakt",
        },
        content: {
            en: (
                <ul className="list-disc ml-6">
                    <li>Any attempts to violate the &quot;Terms of Service&quot;, please send an email to <a href="mailto:abuse@klovy.org" className="underline text-white">abuse@klovy.org</a></li>
                    <li>To receive permission to test the security of the &quot;Klovy Chat&quot; infrastructure, including the willingness to express cooperation on cybersecurity to help the platform counteract attacks, please send an email to <a href="mailto:security@klovy.org" className="underline text-white">security@klovy.org</a></li>
                    <li>For general questions, our address is <a href="mailto:contact@klovy.org" className="underline text-white">contact@klovy.org</a></li>
                </ul>
            ),
            pl: (
                <ul className="list-disc ml-6">
                    <li>Wszelkie próby naruszenia &quot;Warunków&quot; prosimy zgłaszać na adres e-mail <a href="mailto:abuse@klovy.org" className="underline text-white">abuse@klovy.org</a></li>
                    <li>Aby uzyskać pozwolenie na testowanie bezpieczeństwa infrastruktury &quot;Klovy Chat&quot;, w tym chęć wyrażenia współpracy w zakresie cyberbezpieczeństwa w celu pomocy platformie w przeciwdziałaniu atakom, prosimy wysłać e-mail na <a href="mailto:security@klovy.org" className="underline text-white">security@klovy.org</a></li>
                    <li>W przypadku pytań ogólnych prosimy o kontakt pod adresem <a href="mailto:contact@klovy.org" className="underline text-white">contact@klovy.org</a></li>
                </ul>
            ),
        },
    },
];



const TermsOfService = () => {
    const { lang } = useLang();
    useEffect(() => {
        initAOS();
    }, []);
    return (
        <Container>
            <div className="mx-auto px-4 py-8 max-w-3xl mt-32">
                <h1 className="text-4xl font-bold mb-2">{lang === 'pl' ? 'Warunki korzystania z Klovy Chat' : 'Klovy Chat Terms of Service'}</h1>
                <div className="text-white font-normal mb-1">{lang === 'pl' ? 'Ostatnia aktualizacja: 15 sierpnia 2025' : 'Last Updated: August 15, 2025'}</div>
                <div className="text-white font-normal mb-10">{lang === 'pl' ? 'Data wejścia w życie: 20 sierpnia 2025' : 'Effective Date: August 20, 2025'}</div>
                {termsSections.map((section) => (
                    <section key={section.key} className="mb-8" data-aos="fade-up">
                        <h2 className="text-2xl font-semibold mb-2 mt-6">{section.title[lang]}</h2>
                        <div className="space-y-2 text-base leading-relaxed">{typeof section.content[lang] === 'string' ? String(section.content[lang]).replace(/'/g, "&apos;").replace(/\"/g, "&quot;") : section.content[lang]}</div>
                    </section>
                ))}
            </div>
        </Container>
    );
};

export default TermsOfService;