(function(){
'use strict';
{{DATA}}
const ICON={orderflow:'box',helpdesk:'headset',pharmacy:'pill',portfolio:'globe',tsp:'graph',vocab:'book'};
const LIVE={portfolio:'https://portfoliotworekrobert.vercel.app'};
WORK.forEach(w=>{w.shots=SHOTS[w.id]||null;w.hard=HARD[w.id]||null;w.live=LIVE[w.id]||null;});
const UI={
 en:{nav_cover:'Hi!',nav_music:'Backstory',nav_exp:'Experience',nav_skills:'Skills',nav_contact:'Contact',turn:'Turn over',turnback:'Turn back',prev:'Previous card',next:'Next card',toc:'Contents',
  beat_play:'Play beat',beat_stop:'Stop',kick:'Kick',snare:'Snare',hat:'Hat',beat_p:'<span class="ph">Click or drag to add steps. Right-click or drag with the right button to erase.</span><span class="pt">Drag to add steps. Start on a filled square to erase.</span> It is a step sequencer, the same idea as in FL Studio where all of this started.',
  stamp:'Open to work',deal_hint:'Click or tap to deal',stamp_sub:'AI, automation and junior .NET roles',hi1:'Hi! :)',hi2:"I'm Robert.",intro:"I'm an AI and .NET developer from Wrocław, Poland.",say_hi:'Say hi',copied:'Email copied',sent:'Opening your mail app',no_music:'Music files not found',exp_h:'Experience and education',now_h:'Right now',cv_l:'Resume',cv_s:'PDF',
  text_view:'No nonsense switch',lang_btn:'Language switch',lights_off:'Light switch',lights_on:'Light switch',day:'Day',night:'Night',facts_back:'Back to the deck',music_play:'Play music',music_pause:'Pause music',role_k:'AI + .NET Developer',how_h:'How I work',story:'The story',stack:'Stack',hi_p:'Open to work now, full-time.',lang_to:'Switch to Polish',theme_to:'Switch day / night'},
 pl:{nav_cover:'Cześć!',nav_music:'Historia',nav_exp:'Doświadczenie',nav_skills:'Umiejętności',nav_contact:'Kontakt',turn:'Odwróć',turnback:'Odwróć z powrotem',prev:'Poprzednia karta',next:'Następna karta',toc:'Spis',
  beat_play:'Odtwórz bit',beat_stop:'Stop',kick:'Stopa',snare:'Werbel',hat:'Hi-hat',beat_p:'<span class="ph">Kliknij lub przeciągnij, aby dodać kroki. Prawy przycisk (też z przeciąganiem) usuwa.</span><span class="pt">Przeciągaj, aby dodać kroki. Zacznij od zapełnionego kwadratu, aby usuwać.</span> To sekwencer krokowy, ten sam pomysł co w FL Studio, od którego wszystko się zaczęło.',
  stamp:'Szukam pracy',deal_hint:'Kliknij, aby rozdać',stamp_sub:'AI, automatyzacja i junior .NET',hi1:'Cześć! :)',hi2:'Jestem Robert.',intro:'Jestem developerem AI i .NET z Wrocławia.',say_hi:'Napisz do mnie',copied:'Skopiowano adres',sent:'Otwieram program pocztowy',no_music:'Nie znaleziono plików z muzyką',exp_h:'Doświadczenie i edukacja',now_h:'Teraz',cv_l:'CV',cv_s:'PDF',
  text_view:'Przełącznik bez ściemy',lang_btn:'Zmiana języka',lights_off:'Włącznik światła',lights_on:'Włącznik światła',day:'Dzień',night:'Noc',facts_back:'Wróć do kart',music_play:'Włącz muzykę',music_pause:'Zatrzymaj muzykę',role_k:'AI + .NET Developer',how_h:'Jak pracuję',story:'Historia',stack:'Stack',hi_p:'Dostępny od zaraz, pełny etat.',lang_to:'Przełącz na angielski',theme_to:'Przełącz dzień / noc'}};
['en','pl'].forEach(l=>Object.assign(I18N[l],UI[l]));
const CP={
 orderflow:{
  lead:{en:"The back office of an online shop, without the shop. A customer places an order and pays, the warehouse packs and ships it, and a manager can see how it all went. Every step is checked, so an order can't skip ahead or go back.",
        pl:"Zaplecze sklepu internetowego, bez samego sklepu. Klient składa zamówienie i płaci, magazyn je pakuje i wysyła, a kierownik widzi, jak to wszystko poszło. Każdy krok jest sprawdzany, więc zamówienie nie przeskoczy etapu ani się nie cofnie."},
  does:{en:["Four roles: customer, warehouse, manager and admin, each with their own screens.","Stock is reserved inside a transaction, so the last item can't be sold twice.","45 automated tests, and the whole thing starts with one Docker command."],
        pl:["Cztery role: klient, magazynier, kierownik i administrator, każda z własnymi ekranami.","Towar rezerwuje się w transakcji, więc ostatniej sztuki nie da się sprzedać dwa razy.","45 testów automatycznych, a całość startuje jedną komendą Dockera."]},
  why:{en:"I wanted a project about rules and consistency, not just lists and forms. Orders, payments and stock all have to agree with each other, even when two people click at the same moment.",
       pl:"Chciałem projekt o regułach i spójności, a nie tylko o listach i formularzach. Zamówienia, płatności i stan magazynu muszą się ze sobą zgadzać, nawet gdy dwie osoby klikają w tej samej chwili."},
  pts:{en:["An order moves through fixed steps (draft, pending payment, paid, processing, shipped, completed) and the code refuses anything else, like shipping an unpaid order.",
           "Reserving stock is one database transaction. In a test, two orders race for the last unit: one succeeds, the other gets a conflict, and stock never goes below zero.",
           "Events like \"order created\" are saved in the same transaction and handled later by a separate worker, with retries and a dead letter after five failed attempts.",
           "45 automated tests: 21 unit tests, 13 integration tests on a real PostgreSQL in Testcontainers and 11 interface tests. Runs with Docker Compose and GitHub Actions.",
           "The demo interface looks like classic Mac OS windows you can drag around. It works in Polish and English."],
       pl:["Zamówienie przechodzi stałe etapy (szkic, oczekuje na płatność, opłacone, w realizacji, wysłane, zakończone), a kod odrzuca wszystko inne, np. wysyłkę nieopłaconego zamówienia.",
           "Rezerwacja towaru to jedna transakcja w bazie. W teście dwa zamówienia ścigają się o ostatnią sztukę: jedno się udaje, drugie dostaje konflikt, a stan nigdy nie spada poniżej zera.",
           "Zdarzenia, np. „zamówienie utworzone”, zapisują się w tej samej transakcji, a osobny worker obsługuje je później, z ponowieniami i kolejką martwych wiadomości po pięciu nieudanych próbach.",
           "45 testów automatycznych: 21 jednostkowych, 13 integracyjnych na prawdziwym PostgreSQL w Testcontainers i 11 testów interfejsu. Uruchamiane przez Docker Compose i GitHub Actions.",
           "Interfejs demo wygląda jak okna klasycznego Mac OS, które można przeciągać. Działa po polsku i angielsku."]}},
 helpdesk:{
  lead:{en:"A help desk for an IT team. An employee reports a problem, a technician picks it up and works it through to resolved, and an admin keeps an eye on everything, including company laptops and who has them.",
        pl:"Helpdesk dla zespołu IT. Pracownik zgłasza problem, technik go podejmuje i prowadzi do rozwiązania, a administrator pilnuje całości, łącznie ze sprzętem firmowym i tym, kto go ma."},
  does:{en:["Three roles, and the rules are enforced by the API, not just hidden in the interface.","Public comments for the employee, internal notes only technicians see.","Deadlines set by priority, a full history of changes, CSV and PDF reports."],
        pl:["Trzy role, a zasady wymusza API, nie tylko ukrywa interfejs.","Komentarze publiczne dla pracownika i notatki wewnętrzne widoczne tylko dla techników.","Terminy zależne od priorytetu, pełna historia zmian, raporty CSV i PDF."]},
  why:{en:"I wanted it to work the way a support team really works: who reports, who fixes, what the employee sees and what stays internal.",
       pl:"Chciałem, żeby działał tak, jak naprawdę pracuje zespół wsparcia: kto zgłasza, kto naprawia, co widzi pracownik, a co zostaje wewnątrz."},
  pts:{en:["Tickets go from new to in progress to resolved to closed. Every status change, comment and assignment is written to an audit log.",
           "Priority sets the deadline (SLA), and overdue tickets stand out in the queue and on the dashboard.",
           "Assets like laptops and monitors can be assigned to people, linked to tickets, and imported or exported as CSV.",
           "ASP.NET Core API with JWT login, EF Core and PostgreSQL, with React and TypeScript in front and a Polish and English interface.",
           "14 unit tests, 9 browser tests in Playwright, integration tests on a real PostgreSQL, Docker Compose and GitHub Actions."],
       pl:["Zgłoszenia przechodzą od nowego, przez w toku i rozwiązane, do zamkniętego. Każda zmiana statusu, komentarz i przypisanie trafiają do dziennika audytu.",
           "Priorytet ustala termin (SLA), a przeterminowane zgłoszenia wyróżniają się w kolejce i na pulpicie.",
           "Sprzęt, jak laptopy i monitory, można przypisywać osobom, łączyć ze zgłoszeniami oraz importować i eksportować jako CSV.",
           "API ASP.NET Core z logowaniem JWT, EF Core i PostgreSQL, a z przodu React z TypeScriptem i interfejs po polsku i angielsku.",
           "14 testów jednostkowych, 9 testów przeglądarkowych w Playwright, testy integracyjne na prawdziwym PostgreSQL, Docker Compose i GitHub Actions."]}},
 pharmacy:{
  lead:{en:"A desktop app for the daily work of a pharmacy: selling medicines, tracking batches and expiry dates, prescriptions, deliveries and orders from suppliers. I built it with two friends for a university database course.",
        pl:"Aplikacja desktopowa do codziennej pracy apteki: sprzedaż leków, partie i terminy ważności, recepty, dostawy i zamówienia u dostawców. Zrobiłem ją z dwójką znajomych na uczelnianym kursie baz danych."},
  does:{en:["Two roles, manager and pharmacist, in the app and in the database.","Customers' PESEL numbers are encrypted and passwords are hashed.","Runs on Windows and macOS, and a SQL test checks the database."],
        pl:["Dwie role, kierownik i farmaceuta, w aplikacji i w bazie danych.","Numery PESEL klientów są szyfrowane, a hasła haszowane.","Działa na Windows i macOS, a test SQL sprawdza bazę."]},
  why:{en:"Most of my part was the database: tables, constraints, views, roles, demo data, SQL tests and documentation. I also worked on the interface.",
       pl:"Większość mojej części to baza danych: tabele, ograniczenia, widoki, role, dane demo, testy SQL i dokumentacja. Pracowałem też przy interfejsie."},
  pts:{en:["Sales with receipts and invoices, picking the right batch and reducing stock automatically.",
           "Prescriptions, compounded medicines with recipes, deliveries, supplier orders and low-stock alerts.",
           "Reports, an audit log, CSV export, and manual backups and restores.",
           "PostgreSQL with migrations, constraints, views and triggers, reached through ODBC from a C# Avalonia app built with MVVM.",
           "A team of three: Kacper Wajda, Michal Gladkojc and me."],
       pl:["Sprzedaż z paragonami i fakturami, wybór właściwej partii i automatyczne zmniejszanie stanu.",
           "Recepty, leki recepturowe z recepturami, dostawy, zamówienia u dostawców i alerty o niskim stanie.",
           "Raporty, dziennik audytu, eksport CSV oraz ręczne kopie zapasowe i przywracanie.",
           "PostgreSQL z migracjami, ograniczeniami, widokami i wyzwalaczami, obsługiwany przez ODBC z aplikacji C# w Avalonia (MVVM).",
           "Zespół trzyosobowy: Kacper Wajda, Michal Gladkojc i ja."]}}
};
const MORE=[
 {id:'vaccination',name:{en:'Vaccination Programme Planner',pl:'Planer programu szczepień'},kind:'k_academic',stack:'C#, ASP.NET Core 10, PostgreSQL, Angular 20, HL7 FHIR, Docker',
  link:'https://github.com/tworekrobert/vaccination-programme-planner',lk:'repo',
  d:{en:"A vaccination planner for a primary care clinic: schedules, reminders, coverage reports and HL7 FHIR export. My solo semester project, 37 xUnit tests, runs with one docker compose up.",pl:"Planer szczepień dla przychodni POZ: kalendarze, przypomnienia, raporty wyszczepialności i eksport do HL7 FHIR. Mój samodzielny projekt semestralny, 37 testów xUnit, uruchamiany jednym docker compose up."}},
 {id:'portfolio',name:{en:'Bilingual Portfolio Website',pl:'Dwujęzyczna strona portfolio'},kind:'k_personal',stack:'Next.js, React, TypeScript, Tailwind CSS, Vercel',
  link:'https://portfoliotworekrobert.vercel.app',lk:'live',
  d:{en:"The site you may have seen before this one. Next.js, with Polish and English versions, a live list of my GitHub repos and downloadable CVs.",pl:"Strona, którą mogłeś widzieć przed tą. Next.js, wersje po polsku i angielsku, lista moich repozytoriów z GitHuba na żywo i CV do pobrania."}},
 {id:'tsp',name:{en:'TSP Algorithms Benchmark',pl:'Porównanie algorytmów TSP'},kind:'k_academic',stack:'C++17/20, TSPLIB, CSV, Makefile',
  link:'https://github.com/tworekrobert/tsp-algorithms-benchmark',lk:'repo',
  d:{en:"Four stages of comparing ways to solve the travelling salesman problem, from brute force to a genetic algorithm, with timings, charts and CSV results. All in C++.",pl:"Cztery etapy porównywania sposobów rozwiązania problemu komiwojażera, od przeglądu zupełnego po algorytm genetyczny, z czasami, wykresami i wynikami w CSV. Całość w C++."}},
 {id:'vocab',name:{en:'Vocabulary Learning App',pl:'Aplikacja do nauki słownictwa'},kind:'k_team',stack:'Python, Django, DRF, SQLite, JavaScript',
  link:'https://github.com/tworekrobert/vocabulary-learning-app',lk:'repo',
  d:{en:"A Django web app for learning words with flashcards, typing practice and quizzes. Five of us built it, and I did the frontend.",pl:"Aplikacja w Django do nauki słówek z fiszkami, ćwiczeniem pisania i quizami. Robiliśmy ją w piątkę, a ja zająłem się frontendem."}},
 {id:'restaurant',name:{en:'Restaurant Process Simulation',pl:'Symulacja procesów w restauracji'},kind:'k_academic',stack:'Java 17, Swing, TCP sockets, Bash',
  link:'https://github.com/tworekrobert/restaurant-process-simulation',lk:'repo',
  d:{en:"A restaurant run as separate processes talking over TCP: clients, waiters, a restocker and a live Swing window. Java, for the operating systems course.",pl:"Restauracja jako osobne procesy rozmawiające przez TCP: klienci, kelnerzy, uzupełnianie zapasów i okno Swing na żywo. Java, na kurs systemów operacyjnych."}}
];
const BK={
 cover:{en:["<b>About me.</b> I'm in my last semester of Technical Computer Science at Wrocław University of Science and Technology, finishing my engineering thesis. I graduate in February 2027. I'm looking for roles where an LLM-based system has to work inside a real product: AI implementation, prompt engineering, automation or junior .NET. Remote or Wrocław, full-time, available right away.","My AI experience comes from KODA.AI, where I spent 160 hours on a production chatbot and voicebot platform: tuning intents and knowledge-base content, testing bots against real client scenarios, comparing language models and building n8n automations.","I mostly write backends in ASP.NET Core with PostgreSQL, and desktop apps in Avalonia. I like having real tests behind my code. I speak Polish and English (B2).","Lately I'm also building a desktop app for audio signal analysis and visualization, so the music never really left."],
        pl:["<b>O mnie.</b> Jestem na ostatnim semestrze Informatyki Technicznej na Politechnice Wrocławskiej i kończę pracę inżynierską. Bronię się w lutym 2027. Szukam ról, w których system oparty na LLM musi działać w prawdziwym produkcie: wdrażanie AI, prompt engineering, automatyzacja lub junior .NET. Zdalnie lub we Wrocławiu, pełny etat, od zaraz.","Doświadczenie z AI zdobyłem w KODA.AI, gdzie przez 160 godzin pracowałem na produkcyjnej platformie chatbotów i voicebotów: dostrajałem intencje i bazy wiedzy, testowałem boty na prawdziwych scenariuszach klientów, porównywałem modele językowe i budowałem automatyzacje w n8n.","Najczęściej piszę backendy w ASP.NET Core z PostgreSQL i aplikacje desktopowe w Avalonii. Lubię mieć za kodem prawdziwe testy. Mówię po polsku i po angielsku (B2).","Ostatnio buduję też aplikację desktopową do analizy i wizualizacji sygnału audio, więc muzyka tak naprawdę nigdy nie odeszła."]},
 music:{en:["<b>For me it started with music.</b> I spent years making beats in FL Studio, and not only for myself: I sold them online, talked with artists and ran my own online store. It was real work with customers, an offer and sales.","At some point the plugins got more interesting than the beats. I wanted to know how they actually work and what's going on under the hood.","That curiosity pulled me into C# and .NET, and from there into building web and desktop apps. Right now I'm working on a desktop app for audio signal analysis and visualization."],
        pl:["<b>U mnie zaczęło się od muzyki.</b> Przez lata robiłem bity w FL Studio i nie tylko dla siebie: sprzedawałem je online, rozmawiałem z artystami i prowadziłem własny sklep internetowy. To była prawdziwa praca z klientami, ofertą i sprzedażą.","W pewnym momencie wtyczki zrobiły się ciekawsze niż same bity. Chciałem wiedzieć, jak naprawdę działają i co dzieje się pod maską.","Ta ciekawość wciągnęła mnie w C# i .NET, a potem w tworzenie aplikacji webowych i desktopowych. Dziś buduję aplikację desktopową do analizy i wizualizacji sygnału audio."]},
 exp:{en:["<b>KODA.AI, September and October 2026.</b> A 160-hour internship as a Generative Prompt Engineer intern. I worked on KODA's conversational AI platform: testing chatbots and voicebots, validating prompts and knowledge bases, and checking how conversations flow. I compared language models on response quality, consistency and fit for client use cases, and wrote up what I found as QA documentation. I also designed an R&amp;D analyzer that finds where a voicebot fails customers, so the bot can be retrained. I also built and tested n8n workflows and API integrations that automate business processes, and documented how they work and what they need to be deployed. I delivered tasks against requirements, kept track of my progress and took the team's feedback on board.","<b>St. Luke's Hospital in Bolesławiec, May 2021.</b> A 160-hour placement as an IT support intern, part of my IT technician qualification. I helped the hospital's IT team with their day-to-day technical tasks: setting up PCs and helping with hardware, peripherals and basic troubleshooting."],
       pl:["<b>KODA.AI, wrzesień i październik 2026.</b> Praktyki, 160 godzin, jako Generative Prompt Engineer. Pracowałem na platformie konwersacyjnej AI KODA: testowałem chatboty i voicebooty, sprawdzałem prompty i bazy wiedzy oraz to, jak przebiegają rozmowy. Porównywałem modele językowe pod kątem jakości i spójności odpowiedzi oraz dopasowania do zastosowań klientów, a wnioski spisywałem w dokumentacji QA. Zaprojektowałem też analizator R&amp;D, który wskazuje, w czym voicebot zawodzi klientów, żeby można było go douczyć. Tworzyłem też i testowałem przepływy n8n oraz integracje API automatyzujące procesy biznesowe, z dokumentacją ich działania i wymagań wdrożeniowych. Zadania realizowałem zgodnie z wymaganiami, dokumentowałem postępy i uwzględniałem uwagi zespołu.","<b>Szpital św. Łukasza w Bolesławcu, maj 2021.</b> Praktyki, 160 godzin, jako praktykant IT, w ramach kwalifikacji technik informatyk. Wspierałem szpitalny dział IT w codziennych zadaniach: konfigurowałem komputery i pomagałem przy sprzęcie, urządzeniach peryferyjnych i podstawowej diagnostyce."]},
 edu:{en:["<b>Wrocław University of Science and Technology, 2022 until now.</b> Technical Computer Science (B.Eng.), specialising in Information Systems in Medicine, graduating in February 2027. Programming, databases, information systems, networking, testing, and technical and project documentation.","<b>Electronic Schools Complex in Bolesławiec, 2018 to June 2022.</b> IT technician diploma, specialising in computer networks and systems administration. We covered computer systems, networking, peripheral devices, database basics and building websites, along with Microsoft 365 tools. I did a hands-on IT internship at St. Luke's Hospital, supporting on-site infrastructure and end-user systems."],
       pl:["<b>Politechnika Wrocławska, od 2022.</b> Informatyka techniczna (inż.), specjalność Systemy informatyczne w medycynie, ukończenie w lutym 2027. Programowanie, bazy danych, systemy informatyczne, sieci, testowanie oraz dokumentacja techniczna i projektowa.","<b>Electronic Schools Complex w Bolesławcu, 2018 do czerwca 2022.</b> Technik informatyk, specjalność: administrowanie sieciami i systemami komputerowymi. Uczyliśmy się systemów komputerowych, sieci, urządzeń peryferyjnych, podstaw baz danych i tworzenia stron, a także narzędzi Microsoft 365. Odbyłem praktyczny staż IT w Szpitalu św. Łukasza, wspierając lokalną infrastrukturę i systemy użytkowników."]},
 skills:{en:["<b>Right now.</b> I'm open to AI, automation and junior .NET roles, full-time and available straight away. I'm in my final semester at PWr, defending my thesis in February 2027, and building a desktop app for audio signal analysis on the side.","<b>How I work.</b> I start by understanding the process, the users and the data model. I keep the backend, database and interface separate, check the key scenarios with unit, integration or end-to-end tests, and care about clear documentation, demo data and a project that starts the same way every time."],
         pl:["<b>Teraz.</b> Szukam ról w obszarze AI, automatyzacji i junior .NET, na pełny etat, od zaraz. Jestem na ostatnim semestrze na PWr, pracę obronię w lutym 2027, a po godzinach buduję aplikację desktopową do analizy sygnału audio.","<b>Jak pracuję.</b> Zaczynam od zrozumienia procesu, użytkowników i modelu danych. Rozdzielam backend, bazę i interfejs, sprawdzam kluczowe scenariusze testami jednostkowymi, integracyjnymi lub end-to-end i dbam o czytelną dokumentację, dane demo oraz projekt, który uruchamia się za każdym razem tak samo."]}
};
const BKL={en:{why:'Why I built it.',inside:"What's inside.",hard:'The hardest part.',shots:'Screenshots'},pl:{why:'Dlaczego go zrobiłem.',inside:'Co jest w środku.',hard:'Najtrudniejsze.',shots:'Zrzuty ekranu'}};
function noteBack(id){return `<div class="bd scroll note">${BK[id][LANG].map(p=>`<p>${p}</p>`).join('')}</div>`;}
const MAIN=WORK.filter(w=>w.folder==='projects');
MAIN.forEach(w=>{const c=CP[w.id];w.lead=c.lead;w.does=c.does;w.whyT=c.why;w.pts=c.pts;});
const UI2={
 en:{nav_more:'Other projects',nav_edu:'Education',beat_clear:'Clear',g_main:'Main projects',g_me:'About me',say_hi:'Say hi!',say_sub:'Tell me what you think of the site, or about a role you have in mind.',ph_subject:'Hi Robert!',ph_message:'I just had a look at your portfolio and...',
  why_h:'Why I built it',snd_on:'Turn card sounds on',snd_off:'Turn card sounds off',no_desc:'No description yet.',gh_repo:'GitHub repository',more_intro:'Other things I have built. New repositories I publish on GitHub show up here on their own.',view_repo:'View on GitHub',view_live:'Open the live site',
  exp_intro:'Two internships so far, one at a voicebot company and one with a hospital IT team.',
  edu_intro:"I'm in my last semester of Technical Computer Science at Wrocław University of Science and Technology, writing my engineering thesis and defending it in February 2027. Before that I went to a technical school in Bolesławiec and trained as an IT technician.",
  skills_intro:"C# and .NET are what I use the most. The AI side comes from my KODA.AI internship: prompt work, language model testing and n8n automations."},
 pl:{nav_more:'Inne projekty',nav_edu:'Edukacja',beat_clear:'Wyczyść',g_main:'Główne projekty',g_me:'O mnie',say_hi:'Napisz cześć!',say_sub:'Daj znać, co myślisz o stronie, albo napisz o roli, którą masz na myśli.',ph_subject:'Cześć Robert!',ph_message:'Właśnie obejrzałem Twoje portfolio i...',
  why_h:'Dlaczego go zrobiłem',snd_on:'Włącz dźwięki kart',snd_off:'Wyłącz dźwięki kart',no_desc:'Brak opisu.',gh_repo:'Repozytorium na GitHubie',more_intro:'Inne rzeczy, które zbudowałem. Nowe repozytoria, które opublikuję na GitHubie, pojawią się tutaj same.',view_repo:'Zobacz na GitHubie',view_live:'Otwórz stronę',
  exp_intro:'Na razie dwa staże: w firmie od voicebotów i w szpitalnym zespole IT.',
  edu_intro:'Jestem na ostatnim semestrze Informatyki Technicznej na Politechnice Wrocławskiej, piszę pracę inżynierską i bronię ją w lutym 2027. Wcześniej chodziłem do technikum w Bolesławcu, gdzie uczyłem się na technika informatyka.',
  skills_intro:'C# i .NET używam najczęściej. Stronę AI zebrałem na stażu w KODA.AI: praca z promptami, testowanie modeli językowych i automatyzacje w n8n.'}};
['en','pl'].forEach(l=>Object.assign(I18N[l],UI2[l]));

const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const store={get(k){try{return localStorage.getItem(k)}catch(_){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(_){}}};
const PATHLANG=(location.pathname.match(/^\/(pl|en)(\/|$)/)||[])[1];
let LANG=PATHLANG||'en', cur=0, intro=true;
const flip=new Set();
const T=k=>(I18N[LANG][k]!=null?I18N[LANG][k]:k);
const pad=n=>String(n);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const IC=(n)=>`<i class="ic" style="--m:var(--i-${n})" aria-hidden="true"></i>`;
const NOTE=id=>NOTES.find(n=>n.id===id);
const noteHTML=id=>NOTE(id).html(I18N[LANG],LANG).replace(/<div class="nact">.*?<\/div>/s,'');
function parseNote(id,tag){const d=document.createElement('div');d.innerHTML=noteHTML(id);return d;}
function entries(id){const d=parseNote(id),out=[];let c=null;[...d.children].forEach(el=>{if(el.classList.contains('period')){c={period:el.textContent,title:'',text:''};out.push(c);}else if(el.tagName==='H4'&&c)c.title=el.textContent;else if(c&&!c.text){c.text=el.tagName==='UL'?el.querySelector('li').textContent:el.textContent;}});return out;}
function groups(id){const d=parseNote(id),out=[];let c=null;[...d.children].forEach(el=>{if(el.tagName==='H4'){c={t:el.textContent,v:''};out.push(c);}else if(c&&el.tagName==='P')c.v=el.textContent;});return out;}

/* ---------- card definitions ---------- */
function defs(){
 const L=I18N[LANG],cards=[];
 cards.push({id:'cover',icon:'logo',title:T('nav_cover'),front:coverFront,back:coverBack});
 cards.push({id:'music',icon:'speaker',title:T('nav_music'),front:musicFront,back:()=>noteBack('music')});
 cards.push({id:'exp',icon:'cv',title:T('nav_exp'),front:expFront,back:expBack});
 cards.push({id:'edu',icon:'book',title:T('nav_edu'),front:eduFront,back:eduBack});
 cards.push({id:'skills',icon:'grid',title:T('nav_skills'),front:skillsFront,back:skillsBack});
 MAIN.forEach(w=>cards.push({id:w.id,icon:ICON[w.id],title:w.name[LANG],kind:L[w.kind],front:i=>projFront(w),back:()=>projBack(w),hash:'project/'+w.id,foot:()=>w.repo?`<a class="btn" href="${w.repo}" target="_blank" rel="noopener noreferrer">${IC('github')}${T('view_repo')}</a>`:''}));
 cards.push({id:'more',icon:'grid',title:T('nav_more'),front:moreFront});
 cards.push({id:'contact',icon:'mail',title:T('nav_contact'),front:contactFront});
 return cards;
}
let CARDS=[];
function face(c,i,side,body){
 const back=side==='back';
 return `<div class="face ${side}${(c.id==='cover'||c.id==='contact'||c.hash)?' nohd':''}"><div class="hd"><span>${esc(c.title)}</span></div>${body}<div class="ft">${(c.back&&true)?`<button class="flipk" data-flip>${IC('flip')}<span>${back?T('turnback'):T('turn')}</span></button>`:'<span></span>'}${back&&c.foot?c.foot():''}</div></div>`;
}
function coverFront(){
 const L=I18N[LANG];
 const chips=[L.w_c1,L.w_c4].map(c=>`<span class="chip">${c}</span>`).join('');
 const grp={};const fp=CARDS.findIndex(c=>c.hash&&c.hash.startsWith('project/'));grp[fp]=T('g_main');grp[CARDS.findIndex(c=>c.id==='music')]=T('g_me');
 const toc=CARDS.map((c,i)=>i?(grp[i]?`<div class="grp">${grp[i]}</div>`:'')+`<button data-go="${i}"><span class="t">${esc(c.title)}</span></button>`:'').join('');
 return `<div class="bd cover"><div class="left"><div><h1 class="name"><span>${T('hi1')}</span><span>${T('hi2')}</span></h1><p class="role">${T('intro')}</p></div><div class="sticker"><span>${T('stamp')}<small>${T('stamp_sub')}</small></span></div></div><nav class="toc" aria-label="${T('toc')}">${toc}</nav></div>`;
}
function coverBack(){return noteBack('cover');}
const pat={kick:[0,3,8,10,14],snare:[4,12],hat:[0,2,4,6,8,10,12,14]};
function seqRows(){
 return ['kick','snare','hat'].map(k=>`<div class="seqrow" data-row="${k}"><span class="lab">${T(k)}</span>${Array.from({length:16},(_,s)=>`<button data-s="${s}" class="${pat[k].includes(s)?'on':''}" aria-label="${T(k)} ${s+1}" aria-pressed="${pat[k].includes(s)}"></button>`).join('')}</div>`).join('');
}
function beatLabel(){return IC(beating?'pause':'play')+`<span class="sw"><span${beating?' class="off"':''}>${T('beat_play')}</span><span${beating?'':' class="off"'}>${T('beat_stop')}</span></span>`;}
function musicFront(){
 return `<div class="bd mus"><div class="tx"><p style="font:400 clamp(19px,2.7cqw,25px)/1.28 var(--disp)">${I18N[LANG].about_p}</p></div><div class="seq"><div class="seqs">${seqRows()}</div><div class="seqbar"><button class="btn" data-beat>${beatLabel()}</button><button class="btn line" data-clear>${T('beat_clear')}</button><span class="lab">${T('beat_p')}</span></div></div></div>`;
}
function projFront(w){
 const L=I18N[LANG],sh=w.shots&&w.shots[w.id==='pharmacy'?Math.min(1,w.shots.length-1):0];
 const plate=sh?`<div class="plate"><img src="${sh.d}" alt=""></div>`:`<div class="plate art">${IC(ICON[w.id])}</div>`;
 return `<div class="bd proj">${plate}<div class="info"><span class="lab">${L[w.kind]}</span><h2 class="big">${esc(w.name[LANG])}</h2><p class="lead">${w.lead[LANG]}</p><ul class="does">${w.does[LANG].map(x=>`<li>${x}</li>`).join('')}</ul><p class="stk"><b>${T('stack')}</b>${esc(w.stack)}</p></div></div>`;
}
function projBack(w){
 const L=I18N[LANG],K=BKL[LANG];
 const gal=w.shots?`<p class="shl"><b>${K.shots}</b></p><div class="thumbs">${w.shots.map((x,n)=>`<button data-zoom="${w.id}:${n}" aria-label="Screenshot ${n+1}"><img src="${x.d}" alt=""></button>`).join('')}</div>`:'';
 return `<div class="bd pb scroll note"><div class="col"><p><b>${K.why}</b> ${w.whyT[LANG]}</p><p><b>${K.inside}</b> ${w.pts[LANG].slice(0,3).join(' ')}</p><p>${w.pts[LANG].slice(3).join(' ')}</p></div><div class="col">${w.hard?`<p><b>${K.hard}</b> ${w.hard[LANG]}</p>`:''}${gal}</div></div>`;
}
let GH=[];try{GH=JSON.parse(store.get('rt-gh')||'[]')||[];}catch(_){GH=[];}
const KNOWNRE=/order.?flow|helpdesk|pharmac|tsp|vocab|restaurant|portfolio|vaccin/i;const KNOWN=['order-flow-management-system','helpdesk-management-system','pharmacy-management-system','tsp-algorithms-benchmark','vocabulary-learning-app','restaurant-process-simulation','vaccination-programme-planner','tworekrobert'];
function ghEntries(){return GH.filter(r=>!KNOWN.includes(r.name)&&!KNOWNRE.test(r.name)).map(r=>({id:'gh-'+r.name,name:{en:r.name.replace(/[-_]+/g,' ').replace(/\b\w/g,c=>c.toUpperCase()),pl:r.name.replace(/[-_]+/g,' ').replace(/\b\w/g,c=>c.toUpperCase())},kind:'gh_repo',stack:[r.lang].concat(r.topics||[]).filter(Boolean).join(', '),link:r.url,lk:'repo',d:{en:r.desc||T('no_desc'),pl:r.desc||T('no_desc')}}));}
function moreFront(){
 const L=I18N[LANG];
 return `<div class="bd more"><p class="lead">${T('more_intro')}</p><div class="grid4">${MORE.concat(ghEntries()).map(m=>`<div class="ent"><span class="period">${L[m.kind]}</span><h4 class="mid">${esc(m.name[LANG])}</h4><p>${m.id.startsWith('gh-')?esc(m.d[LANG]):m.d[LANG]}</p>${m.stack?`<p class="stk2">${esc(m.stack)}</p>`:''}<a class="lnk" href="${m.link}" target="_blank" rel="noopener noreferrer">${IC(m.lk==='live'?'link':'github')}${T(m.lk==='live'?'view_live':'view_repo')}</a></div>`).join('')}</div></div>`;
}
function splitT(t){const i=t.indexOf(' / ');return i<0?[t,'']:[t.slice(0,i),t.slice(i+3)];}
function expItems(id){const d=parseNote(id);const e=entries(id)[0];const [co,role]=splitT(e.title);return {period:e.period,co,role,li:[...d.querySelectorAll('li')].map(x=>x.textContent)};}
function expFront(){
 const it=['koda','hospital'].map(expItems);
 return `<div class="bd xp"><p class="lead">${T('exp_intro')}</p><div class="grid4">${it.map(x=>`<div class="ent"><span class="period">${esc(x.period)}</span><h4 class="mid">${esc(x.co)}</h4><span class="role2">${esc(x.role)}</span><ul>${x.li.slice(0,3).map(l=>`<li>${esc(l)}</li>`).join('')}</ul></div>`).join('')}</div></div>`;
}
function expBack(){return noteBack('exp');}
function eduFront(){
 const L=I18N[LANG];
 const it=[[L.edu1_period,'Wrocław University of Science and Technology',L.edu1_body],[L.edu2_period,'Electronic Schools Complex, Bolesławiec',L.edu2_body]];
 return `<div class="bd xp"><p class="lead">${T('edu_intro')}</p><div class="grid4">${it.map(x=>`<div class="ent"><span class="period">${esc(x[0])}</span><h4 class="mid">${esc(x[1])}</h4><p>${esc(x[2])}</p></div>`).join('')}</div></div>`;
}
function eduBack(){return noteBack('edu');}
function skillsFront(){
 return `<div class="bd skl"><p class="lead">${T('skills_intro')}</p><div class="grid4">${groups('skills').map(g=>`<div class="sk"><span class="lab">${esc(g.t)}</span>${g.v.split(', ').map(s=>`<span class="chip">${esc(s)}</span>`).join('')}</div>`).join('')}</div></div>`;
}
function skillsBack(){return noteBack('skills');}
function contactFront(){
 const L=I18N[LANG],cv=LANG==='pl'?'Robert-Tworek-CV-PL.pdf':'Robert-Tworek-CV-EN.pdf';
 return `<div class="bd con"><div class="form"><div><h2 class="big">${T('say_hi')}</h2><p class="sub">${T('say_sub')}</p></div><div><label for="c-sub">${L.lbl_subject}</label><input id="c-sub" placeholder="${esc(L.ph_subject)}" autocomplete="off"></div><div style="flex:1;display:flex;flex-direction:column;min-height:0"><label for="c-msg">${L.lbl_message}</label><textarea id="c-msg" placeholder="${esc(L.ph_message)}"></textarea></div><div class="acts" style="margin:0"><button class="btn" id="c-send">${IC('mail')}${L.btn_send}</button><button class="btn line" id="c-copy">${L.btn_copy}</button></div></div><div class="links"><a href="mailto:rtworek24@gmail.com">${IC('mail')}rtworek24@gmail.com</a><a href="https://github.com/tworekrobert" target="_blank" rel="noopener noreferrer">${IC('github')}GitHub<small>tworekrobert</small></a><a href="https://linkedin.com/in/tworekrobert" target="_blank" rel="noopener noreferrer">${IC('linkedin')}LinkedIn<small>tworekrobert</small></a><a href="${cv}" target="_blank" rel="noopener">${IC('cv')}${T('cv_l')}<small>${T('cv_s')}</small></a></div></div>`;
}
/* ---------- render + layout ---------- */
const deckEl=$('#cards'),deck=$('#deck'),rail=$('#rail');
let els=[];
function render(){
 CARDS=defs();
 deckEl.innerHTML=CARDS.map((c,i)=>`<section class="card${PHYS&&!inked.has(c.id)?' fresh':''}" data-id="${c.id}" aria-label="${pad(i+1)} ${esc(c.title)}"><i class="shd"></i><div class="inner">${face(c,i,'front',c.front(i))}${c.back?face(c,i,'back',c.back(i)):''}</div></section>`).join('');
 els=$$('.card',deckEl);B=[];hand(deckEl);
 rail.innerHTML=CARDS.map((c,i)=>`<button class="tab" data-go="${i}" aria-label="${pad(i+1)} ${esc(c.title)}" title="${esc(c.title)}"><span>${pad(i+1)}</span><em></em></button>`).join('');
 layout();
}
function layout(){
 const w=deck.offsetWidth,narrow=innerWidth<=720,now=performance.now();
 els.forEach((el,i)=>{
  const d=i-cur,j=rest(i);let tx=0,ty=0,rot=0,sc=1,op=1,z=100;
  if(d>0){const k=Math.min(d,4);tx=k*(narrow?6:15)+j.x*2;ty=-k*(narrow?4:5);rot=k*.45+j.r*.5;sc=1-k*.01;op=d>5?0:1;z=100-d;if(intro){tx=ty=rot=0;op=0;}}
  else if(d<0){const k=Math.min(-d,4);tx=narrow?-(w*1.2+k*8):-(w*.93+k*12)+j.x*14;ty=k*7+j.y*9;rot=-5-k*1.2+j.r*2.4;sc=.9-k*.01;op=-d>5?0:1;z=50+d;}
  else if(!intro)rot=j.r*.26+landR;
  if(PHYS)aim(i,tx,ty,rot,sc,z,d,now);
  else{el.style.transform=`translate(${tx}px,${ty}px) rotate(${rot}deg) scale(${sc})`;el.style.zIndex=z;}
  el.style.opacity=op;el.style.pointerEvents=op?'':'none';
  el.classList.toggle('past',d<0);el.classList.toggle('next',d>0);
  el.classList.toggle('flipped',flip.has(CARDS[i].id));
  const inn=$('.inner',el);inn.inert=d!==0;el.setAttribute('aria-hidden',d!==0?'true':'false');
 });
 $$('.tab',rail).forEach((t,i)=>{const e=$('em',t);if(i===cur){t.setAttribute('aria-current','true');e.textContent=CARDS[i].title;}else{t.removeAttribute('aria-current');e.textContent='';}});
 const at=$('.tab[aria-current]',rail);if(at&&at.scrollIntoView)at.scrollIntoView({inline:'center',block:'nearest'});
 if(PHYS){wake();if(!intro)ink(cur);}
}
function setHash(){const c=CARDS[cur];try{history.replaceState(null,'',c.id==='cover'?location.pathname+location.search:'#'+(c.hash||'card/'+c.id));}catch(_){}}
function go(i,noHash,force){i=Math.max(0,Math.min(CARDS.length-1,i));if(i===cur)return;stopBeat();const mv=i>cur?cur:i;cur=i;landR=(Math.random()-.5)*.3;layout();if(B[mv])B[mv].land=force||1;paper('slide',force);if(!noHash)setHash();}
function toggleFlip(){const id=CARDS[cur].id;if(!CARDS[cur].back)return;stopBeat();flip.has(id)?flip.delete(id):flip.add(id);if(PHYS&&flip.has(id))write(cur);layout();if(B[cur])B[cur].turn=1;paper('flip');}
function applyHash(){
 const m=location.hash.match(/^#(project|notes|card)\/([\w-]+)/);if(!m)return false;
 let id=m[2],f=false;if(m[1]==='project'&&['portfolio','tsp','vocab','restaurant','vaccination'].includes(id))id='more';
 if(m[1]==='notes'){if(id==='edu'){f=true;}else if(['koda','hospital'].includes(id)){id='exp';f=true;}else if(id==='music')f=true;else if(id==='now'){id='skills';f=true;}}
 const i=CARDS.findIndex(c=>c.id===id);if(i<0)return false;cur=i;if(f)flip.add(id);return true;
}
/* ---------- weight ----------
   Cards are moved by springs, stepped 240 times a second whatever the display rate, so a throw keeps
   its speed and the same gesture gives the same motion on any screen. With reduced motion switched on
   none of this runs and the cards use the plain CSS transitions. */
const PHYS=!matchMedia('(prefers-reduced-motion:reduce)').matches,FINE=matchMedia('(hover:hover) and (pointer:fine)').matches;
document.body.classList.toggle('phys',PHYS);
const STEP=1/240,STIFF=210,CALM=.86;
let B=[],fan=false,landR=0,spin=0,clock=0,owed=0,grab=null,dragged=false;
/* every card has its own way of lying on the table, the same on every visit */
const RESTS=[];
function rest(i){if(!RESTS[i]){const r=rng(i*7919+31);RESTS[i]={r:r()*2-1,x:r()*2-1,y:r()*2-1};}return RESTS[i];}
function aim(i,x,y,r,s,z,d,now){
 let b=B[i];const a=flip.has(CARDS[i].id)?180:0;
 if(!b){b=B[i]={el:els[i],inn:$('.inner',els[i]),shd:$('.shd',els[i]),x,y,r,s,l:0,a,ox:0,oy:0,vx:0,vy:0,vr:0,vs:0,vl:0,va:0,vox:0,voy:0,h:{x:0,r:0,s:0,l:0,ox:0,oy:0},z:CALM,zr:CALM,at:0,held:false,still:false,zt:z,zp:false,zd:0};b.el.style.zIndex=z;}
 const far=Math.abs(b.x-x);
 b.at=b.still&&!fan?now+Math.min(150,Math.max(0,Math.abs(d)-1)*30):fan?now+i*70:0;
 /* a card on its way to the pile stays on top until it has cleared the deck */
 if(z<b.zt&&far>60){b.zp=true;b.zd=far;b.el.style.zIndex=130;}else if(!b.zp||z>=b.zt){b.zp=false;b.el.style.zIndex=z;}
 b.zt=z;b.tx=x;b.ty=y;b.tr=r;b.ts=s;b.ta=a;b.still=false;
}
function pull(b,p,v,t,k,z){const f=k*(t-b[p])-2*z*Math.sqrt(k)*b[v];b[v]+=f*STEP;b[p]+=b[v]*STEP;return Math.abs(t-b[p])>.02||Math.abs(b[v])>.6;}
function stepCard(b,now){
 if(b.still||b.at>now)return;
 const h=b.h;let m=false;
 if(!b.held){m=pull(b,'x','vx',b.tx+h.x,STIFF,b.z)|m;m=pull(b,'y','vy',b.ty,STIFF,b.z)|m;if(b.land&&Math.abs(b.tx-b.x)<8){paper('land1',b.land*Math.min(1.5,.7+Math.abs(b.vx)/1800));b.land=0;}}else m=true;
 m=pull(b,'r','vr',b.tr+h.r,STIFF,b.zr)|m;m=pull(b,'s','vs',b.ts+h.s,STIFF,CALM)|m;m=pull(b,'l','vl',h.l,260,.7)|m;
 m=pull(b,'ox','vox',h.ox,150,.8)|m;m=pull(b,'oy','voy',h.oy,150,.8)|m;m=pull(b,'a','va',b.ta,125,.74)|m;if(b.turn&&Math.abs(b.ta-b.a)<5){paper('land2');b.turn=0;}
 if(!m){b.x=b.tx+h.x;b.y=b.ty;b.r=b.tr+h.r;b.s=b.ts+h.s;b.l=h.l;b.a=b.ta;b.z=b.zr=CALM;b.still=true;b.drawn=false;}
}
function drawCard(b){
 if(b.still&&b.drawn)return;b.drawn=b.still;
 const rad=b.a*Math.PI/180,up=Math.max(0,Math.sin(rad)),L=b.l+up*16;
 b.el.style.transform=`translate(${(b.x+b.ox-b.l*.9).toFixed(2)}px,${(b.y+b.oy-b.l).toFixed(2)}px) rotate(${b.r.toFixed(3)}deg) scale(${b.s.toFixed(4)})`;
 b.shd.style.transform=`translate(${(7+L*.9-b.ox).toFixed(2)}px,${(8+L-b.oy).toFixed(2)}px) scaleX(${Math.max(.03,Math.abs(Math.cos(rad))).toFixed(3)})`;
 b.inn.style.transform=b.a<.05?'none':Math.abs(b.a-180)<.05?'rotateY(180deg)':`translateZ(${(up*90).toFixed(1)}px) rotateX(${(up*4).toFixed(2)}deg) rotateY(${b.a.toFixed(2)}deg) rotateZ(${(up*-1.6).toFixed(2)}deg)`;
 b.el.classList.toggle('bk',b.a>90);
 if(b.zp&&Math.abs(b.x-b.tx)<=60){b.zp=false;b.el.style.zIndex=b.zt;}
}
function tick(now){
 owed+=Math.min(.05,(now-clock)/1000);clock=now;
 while(owed>=STEP){owed-=STEP;for(const b of B)if(b)stepCard(b,now);}
 let live=false;for(const b of B)if(b){drawCard(b);live=live||!b.still;}
 spin=live?requestAnimationFrame(tick):0;
}
function wake(){for(const b of B)if(b)b.still=false;if(!spin){clock=performance.now();owed=0;spin=requestAnimationFrame(tick);}}
/* the card under the pointer answers it: the top card rises and leans to the pointer while its shadow stays where it was, pile and stack cards edge out */
function hover(i,e){
 B.forEach((b,n)=>{if(!b||b.held)return;const h=b.h;h.x=h.r=h.l=h.ox=h.oy=0;
  if(n!==i)return;
  if(n===cur){const q=deck.getBoundingClientRect(),px=Math.max(-1,Math.min(1,((e.clientX-q.left)/q.width-.5)*2)),py=Math.max(-1,Math.min(1,((e.clientY-q.top)/q.height-.5)*2));h.l=4;if(!e.target.closest('.seq,input,textarea')){h.ox=px*3;h.oy=py*2;h.r=px*.3;}}
  else if(n<cur){h.x=n===cur-1?22:12;h.r=n===cur-1?2.2:1;h.l=3;}
  else h.x=9;});
 wake();
}
if(PHYS&&FINE){
 deck.addEventListener('pointermove',e=>{if(intro||grab||e.pointerType!=='mouse')return;const cd=e.target.closest&&e.target.closest('.card');hover(cd?els.indexOf(cd):-1,e);});
 deck.addEventListener('pointerleave',()=>{if(!grab&&!intro)hover(-1);});
}
/* grab the top card and throw it on the pile, or pull the last one back out */
function carry(b,x,y){b.held=true;b.x=x;b.y=y;b.vx=b.vy=0;}
function held(){
 const g=grab,w=g.w,cb=B[cur],pb=B[cur-1],lean=Math.max(-7,Math.min(7,g.v*.004))*g.side;
 if(g.i===cur&&g.dx<=0){
  const end=cur===els.length-1,x=end?g.dx*.22:g.dx;
  carry(cb,cb.tx+x,cb.ty+g.dy*(end?.08:.3));cb.h.r=lean+x/w*4*g.side;cb.h.l=16;
  if(pb&&pb.held){pb.held=false;pb.h.r=pb.h.s=pb.h.l=0;pb.el.style.removeProperty('--dim');pb.zp=true;pb.zd=Math.abs(pb.x-pb.tx);}
  g.p=0;return;
 }
 if(!pb){carry(cb,cb.tx+g.dx*.22,cb.ty+g.dy*.08);cb.h.l=16;g.p=0;return;}
 const span=-pb.tx;let p=(g.i===cur?g.dx*1.5:g.dx)/span;p=p>1?1+(p-1)*.15:Math.max(-.06,p);const q=Math.max(0,Math.min(1,p));
 carry(pb,pb.tx+span*p,pb.ty*(1-q)+g.dy*.2);pb.h.r=-pb.tr*q+lean;pb.h.s=(1-pb.ts)*q;pb.h.l=16*Math.min(1,q*3);pb.el.style.zIndex=150;pb.el.style.setProperty('--dim',1-q);
 if(g.i===cur){carry(cb,cb.tx+g.dx*.06,cb.ty);cb.h.r=0;cb.h.l=0;}
 g.p=p;
}
function letGo(){
 const g=grab;if(!g)return;grab=null;document.body.classList.remove('grabbing');
 const cb=B[cur],pb=B[cur-1];
 [cb,pb].forEach(b=>{if(b){b.held=false;b.el.style.removeProperty('--dim');b.h.r=b.h.s=b.h.l=b.h.x=0;}});
 if(!g.on){wake();return;}
 dragged=true;setTimeout(()=>{dragged=false;},60);
 const v=Math.max(-4200,Math.min(4200,g.v));let to=cur,mv=null;
 if(g.i===cur&&g.dx<0){if(cur<els.length-1&&(g.dx<-g.w*.18||(v<-650&&g.dx<-24))){to=cur+1;mv=cb;}}
 else if(pb&&(g.p>.38||(v>650&&g.dx>24))){to=cur-1;mv=pb;}
 if(mv){mv.vx=v*(mv===pb&&g.i===cur?1.5:1);if(Math.abs(v)>900){mv.z=.6;mv.zr=.42;mv.vr+=v*.006*g.side;}go(to,false,Math.max(.6,Math.min(1.5,.6+Math.abs(v)/2600)));}
 else{if(pb&&pb.el.style.zIndex==='150'){pb.zp=true;pb.zd=Math.abs(pb.x-pb.tx);}paper('drop');wake();}
}
if(PHYS){
 deck.addEventListener('pointerdown',e=>{
  if(intro||grab||!e.isPrimary||(e.pointerType==='mouse'&&e.button!==0))return;
  const cd=e.target.closest&&e.target.closest('.card');if(!cd)return;const i=els.indexOf(cd);
  if(i!==cur&&i!==cur-1)return;
  if(i===cur&&e.target.closest('button,a,input,textarea,label,.seq,.seqs'))return;
  const q=cd.getBoundingClientRect();
  grab={i,id:e.pointerId,x0:e.clientX,y0:e.clientY,lx:e.clientX,lt:e.timeStamp,v:0,dx:0,dy:0,p:0,on:false,side:(e.clientY-q.top)/q.height<.5?1:-1,w:deck.offsetWidth};
  if(i===cur&&B[cur]){B[cur].h.l=9;wake();}
 });
 addEventListener('pointermove',e=>{
  const g=grab;if(!g||e.pointerId!==g.id)return;
  const dx=e.clientX-g.x0,dy=e.clientY-g.y0;
  if(!g.on){
   if(Math.abs(dy)>12&&Math.abs(dy)>Math.abs(dx)){letGo();return;}
   if(Math.abs(dx)<7||Math.abs(dx)<Math.abs(dy)*1.2)return;
   g.on=true;g.x0=e.clientX;g.y0=e.clientY;g.lx=e.clientX;g.lt=e.timeStamp;document.body.classList.add('grabbing');
   const sel=window.getSelection&&getSelection();if(sel)sel.removeAllRanges();return;
  }
  const dt=Math.max(1,e.timeStamp-g.lt);g.v+=((e.clientX-g.lx)/dt*1000-g.v)*.35;g.lx=e.clientX;g.lt=e.timeStamp;
  g.dx=dx;g.dy=dy;held();wake();
 });
 addEventListener('pointerup',e=>{if(grab&&e.pointerId===grab.id){if(grab.on&&e.timeStamp-grab.lt>90)grab.v=0;letGo();}});
 addEventListener('pointercancel',e=>{if(grab&&e.pointerId===grab.id){grab.v=0;grab.p=0;grab.dx=0;letGo();}});
 deck.addEventListener('click',e=>{if(dragged){e.stopPropagation();e.preventDefault();}},true);
 deck.addEventListener('dragstart',e=>e.preventDefault());
}
/* ---------- ink ----------
   The pen lines of a card are drawn the first time the card is on top, and the note on its back is
   written, line after line, the first time it is turned over. After that the ink is simply there. */
const inked=new Set(),written=new Set();
const PENNED='.hd .sp,.toc button,.links a,.does li,.chips .chip,.ent,.sk,.pb h5,.lnk';
function ink(i){
 const el=els[i],id=CARDS[i].id;if(!el||!el.classList.contains('fresh'))return;
 inked.add(id);$$(PENNED,el).forEach((e,n)=>e.style.setProperty('--n',Math.min(n,14)));
 el.classList.remove('fresh');el.classList.add('draw');setTimeout(()=>el.classList.remove('draw'),2600);
}
function write(i){
 const el=els[i],key=CARDS[i].id+LANG,note=el&&$('.face.back .note',el);if(!note||written.has(key))return;written.add(key);
 const tw=document.createTreeWalker(note,NodeFilter.SHOW_TEXT),texts=[];while(tw.nextNode())if(tw.currentNode.parentNode.closest('p'))texts.push(tw.currentNode);
 texts.forEach(t=>{const f=document.createDocumentFragment();t.nodeValue.split(/(\s+)/).forEach(w=>{if(!w)return;if(/^\s+$/.test(w)){f.appendChild(document.createTextNode(w));return;}const sp=document.createElement('span');sp.className='w';sp.textContent=w;f.appendChild(sp);});t.parentNode.replaceChild(f,t);});
 const ws=$$('.w',note),lines=[];let ln=null,pt=-1e9,pl=1e9;
 ws.forEach(w=>{const t=w.offsetTop,l=w.offsetLeft;if(Math.abs(t-pt)>w.offsetHeight*.5||l<pl-40){ln={x0:l,x1:l+w.offsetWidth,ws:[]};lines.push(ln);}ln.ws.push(w);ln.x1=Math.max(ln.x1,l+w.offsetWidth);pt=t;pl=l;});
 const per=Math.max(55,Math.min(130,1700/lines.length));
 lines.forEach((L,k)=>{const span=Math.max(1,L.x1-L.x0);L.ws.forEach(w=>{w.style.animationDelay=Math.round(300+k*per+(w.offsetLeft-L.x0)/span*per)+'ms';w.style.animationDuration=Math.round(Math.max(70,w.offsetWidth/span*per*1.3))+'ms';});});
 $$('b',note).forEach(b=>{const l=$$('.w',b).pop();if(l)b.style.setProperty('--hd',(parseFloat(l.style.animationDelay)+parseFloat(l.style.animationDuration)-80)+'ms');});
 note.classList.add('writing');requestAnimationFrame(()=>requestAnimationFrame(()=>note.classList.add('lit')));setTimeout(()=>{note.classList.remove('writing','lit');ws.forEach(w=>{w.style.animationDelay=w.style.animationDuration='';});},300+lines.length*per+400);
}
/* ---------- events ---------- */
deck.addEventListener('click',e=>{
 const g=e.target.closest('[data-go]');if(g){go(+g.dataset.go);return;}
 if(e.target.closest('[data-flip]')){toggleFlip();return;}
 const z=e.target.closest('[data-zoom]');if(z){const [p,n]=z.dataset.zoom.split(':');zoomOpen(p,+n);return;}
 if(e.target.closest('[data-beat]')){toggleBeat();return;}
 if(e.target.closest('[data-clear]')){Object.keys(pat).forEach(k=>pat[k].length=0);$$('.seqrow button').forEach(x=>{x.classList.remove('on');x.setAttribute('aria-pressed','false');});return;}
 const s=e.target.closest('.seqrow button');if(s){if(e.detail>0)return;const k=s.parentNode.dataset.row,n=+s.dataset.s;setStep(s,!pat[k].includes(n));return;}
 const cd=e.target.closest('.card');if(cd&&(cd.classList.contains('past')||cd.classList.contains('next'))){go(els.indexOf(cd));}
 if(e.target.id==='c-send'||e.target.closest('#c-send')){const s=$('#c-sub').value||T('ph_subject'),b=$('#c-msg').value;location.href='mailto:rtworek24@gmail.com?subject='+encodeURIComponent(s)+'&body='+encodeURIComponent(b);toast(T('sent'));}
 if(e.target.id==='c-copy'){copy();}
});
rail.addEventListener('click',e=>{const g=e.target.closest('[data-go]');if(g)go(+g.dataset.go);});
$('#prev').onclick=()=>go(cur-1);$('#next').onclick=()=>go(cur+1);
addEventListener('keydown',e=>{
 if(lb.classList.contains('show')){if(e.key==='Escape')zoomClose();else if(e.key==='ArrowRight')zoomStep(1);else if(e.key==='ArrowLeft')zoomStep(-1);return;}
 if(facts.classList.contains('show')){if(e.key==='Escape')closeFacts();return;}
 if(/^(INPUT|TEXTAREA)$/.test((e.target||{}).tagName))return;
 if(e.key==='ArrowRight')go(cur+1);else if(e.key==='ArrowLeft')go(cur-1);else if(e.key==='f'||e.key==='F'||e.key===' '&&e.target===document.body){e.preventDefault();toggleFlip();}
 else if(e.key==='Home')go(0);else if(e.key==='End')go(CARDS.length-1);
});
let tx0=null,ty0=0;
deck.addEventListener('touchstart',e=>{if(PHYS||e.target.closest&&e.target.closest('.seqs')){tx0=null;return;}tx0=e.touches[0].clientX;ty0=e.touches[0].clientY;},{passive:true});
deck.addEventListener('touchend',e=>{if(tx0==null)return;const dx=e.changedTouches[0].clientX-tx0,dy=e.changedTouches[0].clientY-ty0;tx0=null;if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.5)go(cur+(dx<0?1:-1));},{passive:true});
addEventListener('resize',layout);
addEventListener('hashchange',()=>{if(applyHash()){layout();}});
/* ---------- toast, copy ---------- */
let tt;function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('show'),2000);}
function copy(){const m='rtworek24@gmail.com';(navigator.clipboard?navigator.clipboard.writeText(m):Promise.reject()).catch(()=>{const t=document.createElement('textarea');t.value=m;document.body.appendChild(t);t.select();try{document.execCommand('copy')}catch(_){}t.remove();}).finally(()=>toast(T('copied')));}
/* ---------- lightbox ---------- */
const lb=$('#lb');let zp=null,zi=0;
function zoomShow(){const w=WORK.find(x=>x.id===zp),s=w.shots[zi];$('img',lb).src=s.d;$('img',lb).alt=s[LANG];$('.cp',lb).textContent=s[LANG]+',  '+(zi+1)+' / '+w.shots.length;}
function zoomOpen(p,i){paper('zoom');zp=p;zi=i;zoomShow();lb.classList.add('show');$('.x',lb).focus();}
function zoomClose(){paper('zoom');lb.classList.remove('show');}
function zoomStep(d){const n=WORK.find(x=>x.id===zp).shots.length;zi=(zi+d+n)%n;zoomShow();}
lb.addEventListener('click',e=>{if(e.target.closest('.x')||e.target===lb)zoomClose();else if(e.target.closest('.p'))zoomStep(-1);else if(e.target.closest('.n')||e.target.tagName==='IMG')zoomStep(1);});
/* ---------- plain text view ---------- */
const facts=$('#facts');
function strip(h){return h.replace(/<[^>]+>/g,'');}
function buildFacts(){
 const wrap=$('.wrap',facts),back=$('.back',wrap);const L=I18N[LANG],K=BKL[LANG];
 const notes=id=>BK[id][LANG].map(p=>`<p>${p}</p>`).join('');
 const proj=MAIN.map(w=>`<div class="item"><b>${esc(w.name[LANG])}</b><span class="stackline">${esc(w.stack)}</span><p>${w.lead[LANG]}</p><ul>${w.does[LANG].map(x=>`<li>${x}</li>`).join('')}</ul><p><b>${K.why}</b> ${w.whyT[LANG]}</p><p><b>${K.inside}</b> ${w.pts[LANG].join(' ')}</p>${w.hard?`<p><b>${K.hard}</b> ${w.hard[LANG]}</p>`:''}${w.repo?`<p><a href="${w.repo}" target="_blank" rel="noopener">${T('view_repo')}</a></p>`:''}</div>`).join('');
 const more=MORE.concat(ghEntries()).map(m=>`<div class="item"><b>${esc(m.name[LANG])}</b>${m.stack?`<span class="stackline">${esc(Array.isArray(m.stack)?m.stack.join(', '):m.stack)}</span>`:''}<p>${m.id.startsWith('gh-')?esc(m.d[LANG]):m.d[LANG]}</p>${m.link?`<p><a href="${m.link}" target="_blank" rel="noopener">${m.link.replace(/^https?:\/\//,'')}</a></p>`:''}</div>`).join('');
 wrap.innerHTML='';wrap.appendChild(back);
 wrap.insertAdjacentHTML('beforeend',`<h1>Robert Tworek</h1><p>${T('intro')}</p>
 <h2>${T('g_me')}</h2>${notes('cover').replace('<p><b>About me.</b> ','<p>').replace('<p><b>O mnie.</b> ','<p>')}<h3>${T('nav_music')}</h3>${notes('music')}<h3>${T('nav_exp')}</h3>${notes('exp')}<h3>${T('nav_edu')}</h3>${notes('edu')}<h3>${T('nav_skills')}</h3>${notes('skills')}
 <h2>${T('g_main')}</h2>${proj}<h2>${T('nav_more')}</h2>${more}
 <h2>${T('nav_contact')}</h2><p><a href="mailto:rtworek24@gmail.com">rtworek24@gmail.com</a> / <a href="https://github.com/tworekrobert" target="_blank" rel="noopener">github.com/tworekrobert</a> / <a href="https://linkedin.com/in/tworekrobert" target="_blank" rel="noopener">linkedin.com/in/tworekrobert</a></p>`);
}
function openFacts(){buildFacts();paper('open');facts.classList.add('show');facts.scrollTop=0;$('.back',facts).focus();}
function closeFacts(){paper('close');facts.classList.remove('show');}
$('#facts-btn').onclick=openFacts;$('#facts-close').onclick=closeFacts;$('#facts-close').onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();closeFacts();}};
$('.skip').onclick=e=>{e.preventDefault();openFacts();};
/* ---------- theme, language ---------- */
const LIGHT=['orange','rose','honey'],DARK=['night','wine','umber'],ALL=LIGHT.concat(DARK);
function applyTheme(t){if(!ALL.includes(t))t='orange';document.body.classList.remove('rose','honey','night','wine','umber');if(t!=='orange')document.body.classList.add(t);{const tb=getComputedStyle(document.body).getPropertyValue('--table').trim();if(tb){document.documentElement.style.background=tb;const m=document.querySelector('meta[name=theme-color]');if(m)m.content=tb;}}store.set('rt-theme',t);const dark=DARK.includes(t);const b=$('#theme-btn');b.innerHTML=IC(dark?'sun':'moon')+'<span class="t">'+T('lights_off')+'</span>';b.title=b.ariaLabel=T('theme_to');b.dataset.t=t;b.dataset.h='';hand(b);const m=document.querySelector('meta[name=theme-color]');if(m)m.content=getComputedStyle(document.body).getPropertyValue('--table').trim();}
function nextTheme(t){const goDark=!DARK.includes(t);const k=goDark?'rt-dc':'rt-lc';const n=+(store.get(k)||(goDark?0:1));store.set(k,String(n+1));const L=goDark?DARK:LIGHT;return L[n%L.length];}

/* handwriting: every letter gets its own small wobble, tilt and pressure */
const HSEL='.note p,.note .shl,.face.back .hd span:not(.no):not(.sp),.toc .grp,.lab,.stk b,.btn,.flipk,.key .t,.sticker small';
function rng(s){return()=>{s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
function hand(root){return;(root||document).querySelectorAll(HSEL).forEach(el=>{if(el.dataset.h)return;el.dataset.h='1';
 const txt=el.textContent;let seed=0;for(let i=0;i<Math.min(txt.length,40);i++)seed=(seed*31+txt.charCodeAt(i))|0;const r=rng(seed||7);
 el.setAttribute('aria-label',txt);
 const tw=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);const nodes=[];while(tw.nextNode())nodes.push(tw.currentNode);
 nodes.forEach(n=>{if(!n.nodeValue.trim())return;const f=document.createDocumentFragment();
  n.nodeValue.split(/(\s+)/).forEach(p=>{if(!p)return;if(/^\s+$/.test(p)){f.appendChild(document.createTextNode(p));return;}
   const w=document.createElement('span');w.className='w';w.setAttribute('aria-hidden','true');
   const wy=(r()-.5)*.05,wr=(r()-.5)*.6;
   [...p].forEach(ch=>{const c=document.createElement('span');c.className='c';c.textContent=ch;
    c.style.transform=`translateY(${((r()-.5)*.03+wy).toFixed(3)}em) rotate(${((r()-.5)*.8+wr).toFixed(2)}deg)`;
    w.appendChild(c);});
   f.appendChild(w);});
  n.parentNode.replaceChild(f,n);});});}
function applyStatic(){
 document.documentElement.lang=LANG;
 $$('[data-k]').forEach(e=>{const v=I18N[LANG][e.dataset.k];if(v!=null)e.innerHTML=v;});
 $('#lang-btn').innerHTML=IC('globe')+'<span class="t">'+T('lang_btn')+'</span>';$('#lang-btn').title=$('#lang-btn').ariaLabel=T('lang_to');
 $('#facts-btn').innerHTML=IC('doc')+'<span class="t">'+T('text_view')+'</span>';
 $('#prev').setAttribute('aria-label',T('prev'));$('#next').setAttribute('aria-label',T('next'));
 applyTheme($('#theme-btn').dataset.t||'orange');sndUI();$$('#top .key').forEach(e=>{e.dataset.h='';});hand(document.getElementById('top'));
}
$('#lang-btn').onclick=()=>{paper('lang');LANG=LANG==='pl'?'en':'pl';store.set('rt-lang',LANG);applyStatic();render();if(PHYS){const tap=k=>{B.forEach((b,i)=>{if(b){b.vy+=k*(1+Math.min(4,Math.abs(i-cur))*.12);b.vr+=(rest(i).r)*k*.02;}});wake();};tap(230);setTimeout(()=>tap(150),125);}};
$('#theme-btn').onclick=()=>{const t=$('#theme-btn').dataset.t||'orange';const nx=nextTheme(t);paper(DARK.includes(nx)?'lightoff':'lighton');applyTheme(nx);};
let ac=null,beating=false,step=0,tm=null,master=null;
function A(){if(!ac){ac=new (window.AudioContext||window.webkitAudioContext)();master=ac.createGain();master.gain.value=.55;master.connect(ac.destination);}if(ac.state==='suspended')ac.resume();return ac;}
function noise(t,dur,hp,g){const a=ac,n=Math.floor(a.sampleRate*dur),b=a.createBuffer(1,n,a.sampleRate),d=b.getChannelData(0);for(let i=0;i<n;i++)d[i]=Math.random()*2-1;const s=a.createBufferSource();s.buffer=b;const f=a.createBiquadFilter();f.type='highpass';f.frequency.value=hp;const v=a.createGain();v.gain.setValueAtTime(g,t);v.gain.exponentialRampToValueAtTime(.001,t+dur);s.connect(f);f.connect(v);v.connect(master);s.start(t);}
/* ---------- paper sounds ---------- */
let snd=store.get('rt-snd')!=='off',nbuf=null;
function sndUI(){const b=$('#snd-btn');if(!b)return;b.setAttribute('aria-pressed',snd);b.innerHTML=IC(snd?'speaker':'mute');b.title=b.ariaLabel=snd?T('snd_off'):T('snd_on');}
function wn(a){if(!nbuf){const n=a.sampleRate,bf=a.createBuffer(1,n,a.sampleRate),d=bf.getChannelData(0);for(let i=0;i<n;i++)d[i]=Math.random()*2-1;nbuf=bf;}return nbuf;}
function pchain(a){const hp=a.createBiquadFilter();hp.type='highpass';hp.frequency.value=1300+Math.random()*500;const lp=a.createBiquadFilter();lp.type='lowpass';lp.frequency.value=7500+Math.random()*2500;hp.connect(lp);lp.connect(master);return hp;}
/* paper: many tiny irregular crackles, like fibres catching, instead of a smooth whoosh */
function crackle(a,t,dur,d0,d1,gain){const out=pchain(a);let x=0;for(;;){const d=d0+(d1-d0)*(x/dur);x+=-Math.log(1-Math.random())/Math.max(d,1);if(x>=dur)break;const env=Math.pow(Math.sin(Math.PI*x/dur),.7);const amp=gain*env*(.12+Math.random()*.88)*(Math.random()<.07?2.4:1);const len=.0012+Math.random()*.0048;const s=a.createBufferSource();s.buffer=wn(a);const g=a.createGain();g.gain.setValueAtTime(amp,t+x);g.gain.exponentialRampToValueAtTime(.0001,t+x+len);s.connect(g);g.connect(out);s.start(t+x,Math.random()*.8,len+.01);}}
function thud(a,t,gain,f){const s=a.createBufferSource();s.buffer=wn(a);const fl=a.createBiquadFilter();fl.type='lowpass';fl.frequency.value=f||650;const g=a.createGain();g.gain.setValueAtTime(gain,t);g.gain.exponentialRampToValueAtTime(.0001,t+.065);s.connect(fl);fl.connect(g);g.connect(master);s.start(t,Math.random()*.8,.08);}
/* switch: a hard plastic snap, then the lower thock of the lever going over */
function snap(a,t,f,gain){const s=a.createBufferSource();s.buffer=wn(a);const b=a.createBiquadFilter();b.type='bandpass';b.frequency.value=f;b.Q.value=4;const g=a.createGain();g.gain.setValueAtTime(gain,t);g.gain.exponentialRampToValueAtTime(.0001,t+.014);s.connect(b);b.connect(g);g.connect(master);s.start(t,Math.random()*.8,.02);
 const o=a.createOscillator(),og=a.createGain();o.type='triangle';o.frequency.setValueAtTime(f*.62,t);o.frequency.exponentialRampToValueAtTime(f*.4,t+.03);og.gain.setValueAtTime(gain*.22,t);og.gain.exponentialRampToValueAtTime(.0001,t+.035);o.connect(og);og.connect(master);o.start(t);o.stop(t+.04);}
function edge(a,t,f,gain){const s=a.createBufferSource();s.buffer=wn(a);const b=a.createBiquadFilter();b.type='bandpass';b.frequency.value=f;b.Q.value=1.4;const g=a.createGain();g.gain.setValueAtTime(gain,t);g.gain.exponentialRampToValueAtTime(.0001,t+.012);s.connect(b);b.connect(g);g.connect(master);s.start(t,Math.random()*.8,.02);}
function touch(a,t,gain,f){thud(a,t,gain*2.2,f);edge(a,t,2600+Math.random()*900,gain*.55);}
/* one bead of the chain: a small bright metal tick, never quite the same pitch twice */
function bead(a,t,gain){const f=4300+Math.random()*2600;[1,1.47].forEach((m,k)=>{const o=a.createOscillator(),g=a.createGain();o.frequency.value=f*m;g.gain.setValueAtTime(gain*(k?.5:1),t);g.gain.exponentialRampToValueAtTime(.0001,t+.009+Math.random()*.006);o.connect(g);g.connect(master);o.start(t);o.stop(t+.03);});}
/* pull chain: the beads run through the collar, the switch inside goes over, the chain is let go and runs back, the last beads swing against the shade */
function chain(a,t,on){
 let x=0;for(let n=0;n<6;n++){bead(a,t+x,.07+n*.017);x+=.021-n*.002;}
 const c=t+x+.012;snap(a,c,on?2700:2150,.8);snap(a,c+.034,on?1250:980,.6);thud(a,c+.034,.3,on?420:330);
 x=.05;for(let n=0;n<5;n++){bead(a,c+x,.105-n*.017);x+=.017+n*.006;}
 [.21,.33].forEach((w,k)=>bead(a,c+w+Math.random()*.02,.04-k*.016));
}
function paper(kind,force){
 if(!snd)return;
 try{const a=A(),t=a.currentTime+.005,r=.9+Math.random()*.2;
  const f=force||1;
  if(kind==='slide'){crackle(a,t,.12*r,650,1500*f,.5*f);if(!PHYS)thud(a,t+.105*r,.38*f,700);}
  else if(kind==='land1'){thud(a,t,Math.min(.6,.38*f),700);}
  else if(kind==='land2'){thud(a,t,.6,560);}
  else if(kind==='drop'){thud(a,t+.1,.3,620);}
  else if(kind==='flip'){crackle(a,t,.2*r,220,1500,.55);if(!PHYS)thud(a,t+.19*r,.6,560);}
  else if(kind==='lang'){touch(a,t,.6,820);touch(a,t+.125*r,.42,930);}
  else if(kind==='open'){crackle(a,t,.4*r,180,900,.5);thud(a,t+.04,.25,500);}
  else if(kind==='close'){crackle(a,t,.18*r,500,1100,.45);thud(a,t+.16,.45,600);}
  else if(kind==='zoom'){thud(a,t,.4,900);crackle(a,t+.01,.06,700,900,.3);}
  else if(kind==='lightoff'){chain(a,t,false);}
  else if(kind==='lighton'){chain(a,t,true);}
  else if(kind==='on'){thud(a,t,.35,900);}
  else if(kind==='deal'){crackle(a,t,.55,160,1300,.5);}
  else if(kind==='land'){thud(a,t,.75,420);crackle(a,t,.06,800,1200,.3);thud(a,t+.07,.3,700);}
  else if(kind==='turn'){crackle(a,t,.16,300,1400,.5);thud(a,t+.15,.55,560);}
  else if(kind==='riffle'){for(let n=0;n<9;n++){crackle(a,t+n*.05,.04,900,1600,.38*(1-n*.06));}thud(a,t+.46,.3,800);}
 }catch(_){}
}
$('#snd-btn').onclick=()=>{snd=!snd;store.set('rt-snd',snd?'on':'off');sndUI();if(snd)paper('on');};
/* sequencer painting: hold the left button and drag to add steps, hold the right button and drag to erase (touch: the first square decides) */
let paint=null,lastPv=0;
function preview(k){const n=performance.now();if(n-lastPv<70)return;lastPv=n;try{hit(k);}catch(_){}}
function setStep(b,on){const k=b.parentNode.dataset.row,n=+b.dataset.s,a=pat[k],ix=a.indexOf(n);
 if(on&&ix<0)a.push(n);else if(!on&&ix>=0)a.splice(ix,1);else return false;
 b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);
 if(on&&!beating)preview(k);return true;}
function stepAt(x,y){const e=document.elementFromPoint(x,y);return e&&e.closest?e.closest('.seqrow button'):null;}
deck.addEventListener('pointerdown',e=>{const b=e.target.closest&&e.target.closest('.seqrow button');if(!b||(e.pointerType==='mouse'&&e.button!==0&&e.button!==2))return;
 e.preventDefault();const k=b.parentNode.dataset.row,n=+b.dataset.s;
 const mode=e.button===2?'del':(pat[k].includes(n)?'del':'add');
 paint={mode,id:e.pointerId,x:e.clientX,y:e.clientY};setStep(b,mode==='add');document.body.classList.add('painting');});
deck.addEventListener('contextmenu',e=>{if(e.target.closest&&e.target.closest('.seqs'))e.preventDefault();});
addEventListener('pointermove',e=>{if(!paint||e.pointerId!==paint.id)return;
 const dx=e.clientX-paint.x,dy=e.clientY-paint.y,L=Math.hypot(dx,dy),N=Math.max(1,Math.ceil(L/5));
 for(let i=1;i<=N;i++){const b=stepAt(paint.x+dx*i/N,paint.y+dy*i/N);if(b)setStep(b,paint.mode==='add');}
 paint.x=e.clientX;paint.y=e.clientY;});
const endPaint=e=>{if(paint&&(!e||e.pointerId===paint.id)){paint=null;document.body.classList.remove('painting');}};
addEventListener('pointerup',endPaint);addEventListener('pointercancel',endPaint);addEventListener('blur',()=>endPaint());
function hit(k,t0){const a=A(),t=t0||a.currentTime;if(k==='kick'){const o=a.createOscillator(),g=a.createGain();o.frequency.setValueAtTime(150,t);o.frequency.exponentialRampToValueAtTime(42,t+.14);g.gain.setValueAtTime(1,t);g.gain.exponentialRampToValueAtTime(.001,t+.32);o.connect(g);g.connect(master);o.start(t);o.stop(t+.34);}else if(k==='snare'){noise(t,.2,1400,.7);const o=a.createOscillator(),g=a.createGain();o.type='triangle';o.frequency.setValueAtTime(190,t);g.gain.setValueAtTime(.5,t);g.gain.exponentialRampToValueAtTime(.001,t+.12);o.connect(g);g.connect(master);o.start(t);o.stop(t+.14);}else noise(t,.05,7000,.35);}
function stopBeat(){if(beating)toggleBeat();}
const BPM=92,SW=.045;let q=[],raf=0,nextT=0,lastHot=-1;
function sched(){if(!beating)return;const a=A();
 while(nextT<a.currentTime+.14){
  ['kick','snare','hat'].forEach(k=>{if(pat[k].includes(step))hit(k,nextT);});
  q.push({s:step,t:nextT});
  nextT+=60/BPM/4;step=(step+1)%16;}
}
function paintHot(){if(!beating){raf=0;return;}const a=ac;let cur=null;while(q.length&&q[0].t<=a.currentTime+.01){cur=q.shift().s;}
 if(cur!==null&&cur!==lastHot){lastHot=cur;$$('.seqrow button.hot').forEach(x=>x.classList.remove('hot'));$$('.seqrow').forEach(r=>{const x=r.querySelector(`[data-s="${cur}"]`);if(x)x.classList.add('hot');});}
 raf=requestAnimationFrame(paintHot);}
function beatUI(){const bt=$('[data-beat]');if(bt)bt.innerHTML=beatLabel();}
function toggleBeat(){beating=!beating;
 if(beating){const a=A();step=0;q=[];lastHot=-1;nextT=a.currentTime+.06;sched();tm=setInterval(sched,25);raf=requestAnimationFrame(paintHot);}
 else{clearInterval(tm);cancelAnimationFrame(raf);raf=0;q=[];lastHot=-1;$$('.seqrow button.hot').forEach(x=>x.classList.remove('hot'));}
 beatUI();}
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopBeat();});
/* ---------- intro: the first card is dealt ---------- */
function deal(){
 const c=els[0],f=$('.face.front',c);
 if(matchMedia('(prefers-reduced-motion:reduce)').matches||!c.animate){intro=false;layout();return;}
 const d=document.createElement('div');d.className='deal';d.innerHTML='';c.appendChild(d);f.style.visibility='hidden';
 const P='perspective(2600px) ';
 const turn=()=>{
  paper('turn');
  const b=d.animate([{transform:P+'rotateY(0deg)'},{transform:P+'rotateY(90deg)'}],{duration:300,easing:'cubic-bezier(.5,0,.8,.6)',fill:'forwards'});
  b.onfinish=()=>{
   f.style.visibility='';
   const e=f.animate([{transform:P+'rotateY(-90deg)'},{transform:P+'rotateY(0deg)'}],{duration:420,easing:'cubic-bezier(.2,.5,.3,1)'});
   d.remove();
   e.onfinish=()=>{
    els.forEach((el,i)=>{el.style.transitionDelay=(i*70)+'ms';});
    intro=false;fan=true;layout();fan=false;paper('riffle');
    setTimeout(()=>els.forEach(el=>{el.style.transitionDelay='';}),1400);
   };
  };
 };
 const flight=()=>{
  paper('deal');
  const a=d.animate([
   {opacity:0,transform:'translateY(72vh) rotate(16deg) scale(.5)'},
   {opacity:1,offset:.2,transform:'translateY(40vh) rotate(9deg) scale(.72)'},
   {opacity:1,offset:.68,transform:'translateY(-1.8vh) rotate(-1.6deg) scale(1.015)'},
   {opacity:1,offset:.84,transform:'translateY(.6vh) rotate(.4deg) scale(.998)'},
   {opacity:1,transform:'none'}],{duration:1000,easing:'cubic-bezier(.25,.7,.3,1)',fill:'forwards'});
  setTimeout(()=>paper('land'),640);
  a.onfinish=()=>setTimeout(turn,140);
 };
 /* browsers keep sound locked until the first click, tap or key press: if it is locked, the card waits for that gesture so the deal can be heard */
 const wait=()=>{
  let started=false,tm=null;
  d.innerHTML='<span class="dh">'+T('hi1')+'</span>';d.classList.add('wait');
  const en=d.animate([{opacity:0,transform:'translateY(40px) rotate(-3deg)'},{opacity:1,transform:'rotate(-1deg)'}],{duration:520,easing:'cubic-bezier(.2,.7,.2,1)',fill:'forwards'});
  let idle=null;en.onfinish=()=>{if(!started)idle=d.animate([{transform:'rotate(-1deg) scale(1)'},{transform:'rotate(-.3deg) scale(1.006)'},{transform:'rotate(-1deg) scale(1)'}],{duration:3200,iterations:Infinity,easing:'ease-in-out'});};
  const ev=['pointerdown','keydown','touchstart'];
  const go=real=>{if(started)return;started=true;clearTimeout(tm);ev.forEach(n=>window.removeEventListener(n,onG,true));
   if(idle)idle.cancel();en.cancel();document.body.classList.remove('dealing');
   d.animate([{transform:'rotate(-1deg)'},{transform:'rotate(0deg) translateY(5px)'},{transform:'none'}],{duration:220,fill:'forwards'});
   if(real){paper('land');setTimeout(turn,200);}else setTimeout(turn,240);};
  const onG=()=>go(true);
  ev.forEach(n=>window.addEventListener(n,onG,true));
  tm=setTimeout(()=>go(false),3500);
 };
 wait();
}
/* ---------- live GitHub repos ---------- */
function syncMore(){const i=CARDS.findIndex(c=>c.id==='more');if(i<0||!els[i])return;const bd=$('.face.front .bd',els[i]);if(bd)bd.outerHTML=moreFront();}
function pullGH(){try{fetch('https://api.github.com/users/tworekrobert/repos?per_page=100&sort=pushed',{headers:{Accept:'application/vnd.github+json'}}).then(r=>r.ok?r.json():Promise.reject()).then(list=>{
 const n=list.filter(r=>!r.fork&&!r.private&&!r.archived).map(r=>({name:r.name,desc:r.description,lang:r.language,url:r.html_url,topics:r.topics||[]}));
 if(JSON.stringify(n)!==JSON.stringify(GH)){GH=n;store.set('rt-gh',JSON.stringify(n));syncMore();}
}).catch(()=>{});}catch(_){}}
pullGH();setInterval(pullGH,300000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)pullGH();});
/* ---------- start ---------- */

applyStatic();render();
if(applyHash()){intro=false;layout();}else deal();
})();
