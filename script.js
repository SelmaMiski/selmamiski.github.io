// ===============================
// REVEAL ANIMATION 
// ===============================

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});

// ===============================
// HAMBURGER MENU 
// ===============================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// auto close mobile menu
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// ===============================
// NAVBAR SCROLL EFFECT 
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ===============================
// 🌍 MULTILANGUAGE SYSTEM
// ===============================

const translations = {
  en: {
    nav_summary: "Executive Summary",
    nav_swot: "SWOT",
    nav_journey: "Journey",
    nav_case: "Case Study",
    nav_remote: "Skills",
    nav_vision: "Vision",

    hero_title: "Selma Miski | Digital Marketing Strategist in Evolution",
    hero_subtitle: "Strategy, communication and performance-driven vision",
    hero_cta: "Discover the Approach",

    summary_title: "Executive Summary",
    summary_who_title: "Who She Is",
    summary_who_text: "Selma Miski is a Digital Marketing graduate with a strategic and results-oriented mindset.",
    summary_what_title: "What She Does",
    summary_what_text: "She develops structured digital strategies based on analysis, data interpretation and measurable goals.",
    summary_value_title: "The Value She Brings",
    summary_value_text: "Autonomy, strategic clarity and a business-oriented approach to every project.",
    summary_skills_title: "Core Skills",
    summary_skills_text: "Languages: Italian, English, French, Spanish, Arabic. Design tools: Adobe Creative Suite and Canva. Web skills: HTML and Java, WordPress website management. Digital Tools: Meta Business Suite, Google Ads, Google Analytics, SEO.",

    swot_title: "Personal SWOT Analysis",
    swot_s_title: "Strengths",
    swot_s_text: "Data analysis, structured thinking, strategic communication, performance focus and international languages.",
    swot_w_title: "Weaknesses",
    swot_w_text: "Continuous skill expansion in advanced tools, actively improving through ongoing learning.",
    swot_o_title: "Opportunities",
    swot_o_text: "Working remotely as a productivity accelerator through focus and goal-based organization.",
    swot_t_title: "Threats",
    swot_t_text: "Highly competitive market, addressed through constant development and adaptability.",
    
    journey_title: "From Academic Background to Business Impact",
    journey_deg_title: "Digital Marketing Degree",
    journey_deg_text: "→ Completed at the University of Modena and Reggio Emilia, developing analytical thinking and strategic vision.",
    journey_exp_title: "Professional Experience",
    journey_exp_text: "→ Over 2 years of experience in marketing at Kimera srl, Italy. Progressed from working student to a full-time role with increasing responsibilities.",
    journey_before_title: "Before Joining Kimera",
    journey_before_text: "→ Over 1 year of marketing experience at the cosmetic lab Bottega d'Argan. Freelance work in brand awareness and both online and offline communication.",
    journey_early_title: "Early Gigs",
    journey_early_text: "→ Always worked: administration, back office and customer service before fully transitioning into marketing.",
    journey_learning_title: "Continuous Learning",
    journey_learning_text: "→ Constant alignment with digital innovation and strong growth mindset.",
    
    case_title: "Case Study – Communication Optimization",
    case_step1_title: "STEP 1 | Analysis",
    case_step1_text: "Identified opportunities to improve sales of a product line.",
    case_step2_title: "STEP 2 | Strategic Idea",
    case_step2_text: "Content structuring and identification of the most effective channels for the target audience.",
    case_step3_title: "STEP 3 | Micro Proposal",
    case_step3_text: "Introduction of discount codes and a First Time Kit to encourage trial and conversion.",
    case_step4_title: "STEP 4 | KPIs",
    case_step4_text: "Projected +20% engagement and improved conversion rate.",
    case_results_title: "RESULTS",
    case_results_text: "Improved sales performance and customer engagement.",
    
    smart_title: "Skills",
    smart_1: "→Selma has developed strong mental flexibility thanks to her multilingual background and international communication skills.",
    smart_2: "→She easily adapts to different environments and collaborates effectively across cultures and teams.",
    smart_3: "→Her competencies span multiple areas including graphic design using Adobe Creative Suite, translation, multilingual communication, web technologies such as HTML, and website management through WordPress and data analysis with tools like Google Analytics and 360.",
    smart_button: "Discover My Full CV",
    
    skills_lang: "Languages: Italian, English, French, Spanish, Arabic",
    skills_design: "Design tools: Adobe Creative Suite and Canva",
    skills_web: "Web skills: HTML and Java, WordPress website management",
    skills_tools: "Digital Tools: Meta Business Suite, Google Ads, Google Analytics, SEO",
  

    portfolio_title: "Portfolio",

    portfolio_ipackima_title: "IPACK-IMA Milan – Trade Fair Design",
    portfolio_ipackima_text: "Design and visual communication created for the IPACK-IMA trade fair in Milan, supporting the launch of a new product line and strengthening brand visibility during the exhibition.",

    portfolio_easyfit_title: "EasyFit Website Design",
    portfolio_easyfit_text: "Website design and visual layout developed by me, with technical collaboration from the agency Switchup, where I completed a six-month advanced course to strengthen my digital marketing and web development skills.",

    portfolio_kimera_title: "Kimera Product Catalogue",
    portfolio_kimera_text: "Complete catalogue design and graphic layout developed by me for Kimera. Although minor updates were introduced after my departure, the overall concept, structure and visual identity were originally created by me.",
    
    footer_cta: "View Full Professional Profile"
    
    
    
  },

  it: {
  nav_summary: "Executive Summary",
  nav_swot: "SWOT",
  nav_journey: "Percorso",
  nav_case: "Caso Studio",
  nav_remote: "Skills",
  nav_vision: "Vision",

  hero_title: "Selma Miski | Digital Marketing Strategist in Evoluzione",
  hero_subtitle: "Strategia, comunicazione e visione orientata ai risultati",
  hero_cta: "Scopri l’approccio",

  summary_title: "Executive Summary",
  summary_who_title: "Chi è",
  summary_who_text: "Selma Miski è laureata in Digital Marketing con una mentalità strategica orientata ai risultati.",
  summary_what_title: "Cosa fa",
  summary_what_text: "Sviluppa strategie digitali strutturate basate su analisi, interpretazione dei dati e obiettivi misurabili.",
  summary_value_title: "Il valore che porta",
  summary_value_text: "Autonomia, chiarezza strategica e approccio orientato al business in ogni progetto.",
  summary_skills_title: "Core Skills",
  summary_skills_text: "Lingue: Italiano, Inglese, Francese, Spagnolo, Arabo. Strumenti di design: Adobe Creative Suite e Canva. Competenze web: HTML e Java, gestione di siti web tramite WordPress. Strumenti digitali: Meta Business Suite, Google Ads, Google Analytics, SEO",

  swot_title: "Analisi SWOT personale",
  swot_s_title: "Punti di forza",
  swot_s_text: "Analisi dei dati, pensiero strutturato, comunicazione strategica, focus sulle performance e lingue internazionali.",
  swot_w_title: "Aree di miglioramento",
  swot_w_text: "Espansione continua delle competenze in strumenti avanzati attraverso formazione costante.",
  swot_o_title: "Opportunità",
  swot_o_text: "Il lavoro da remoto come acceleratore di produttività grazie a focus e organizzazione per obiettivi.",
  swot_t_title: "Minacce",
  swot_t_text: "Mercato altamente competitivo, affrontato con sviluppo continuo e adattabilità.",

  journey_title: "Dal percorso accademico all’impatto sul business",
  journey_deg_title: "Laurea in Digital Marketing",
  journey_deg_text: "→ Conseguimento presso l’Università di Modena e Reggio Emilia, con sviluppo di pensiero analitico e visione strategica.",
  journey_exp_title: "Esperienza professionale",
  journey_exp_text: "→ Oltre 2 anni di esperienza nel marketing presso Kimera srl, Italia. Evoluzione da studentessa lavoratrice a ruolo full time con responsabilità crescenti.",
  journey_before_title: "Prima di Kimera",
  journey_before_text: "→ Oltre 1 anno di esperienza nel marketing presso il laboratorio cosmetico Bottega d'Argan. Attività freelance su brand awareness e comunicazione online e offline.",
  journey_early_title: "Prime esperienze",
  journey_early_text: "→ Sempre lavorato: amministrazione, back office e customer service, fino al passaggio definitivo al marketing.",
  journey_learning_title: "Formazione continua",
  journey_learning_text: "→ Allineamento costante con l’innovazione digitale e forte orientamento alla crescita.",

  case_title: "Caso studio – Ottimizzazione della comunicazione",
  case_step1_title: "STEP 1 | Analisi",
  case_step1_text: "Individuate opportunità per migliorare le vendite di una linea di prodotto.",
  case_step2_title: "STEP 2 | Idea strategica",
  case_step2_text: "Strutturazione dei contenuti e identificazione dei canali più efficaci per il target.",
  case_step3_title: "STEP 3 | Micro proposta",
  case_step3_text: "Introduzione di codici sconto e First Time Kit per incentivare prova e conversione.",
  case_step4_title: "STEP 4 | KPI",
  case_step4_text: "Proiezione di +20% engagement e miglioramento del tasso di conversione.",
  case_results_title: "RISULTATI",
  case_results_text: "Miglioramento delle performance di vendita e dell’engagement clienti.",

  smart_title: "Skills",
  smart_1: "→Selma ha sviluppato una forte flessibilità mentale grazie al suo background multilingue e alle sue competenze nella comunicazione internazionale.",
  smart_2: "→Si adatta facilmente a diversi ambienti e collabora in modo efficace tra culture e team differenti.",
  smart_3: "→Le sue competenze coprono diversi ambiti, tra cui il graphic design con Adobe Creative Suite, la traduzione, la comunicazione multilingue, le tecnologie web come HTML, la gestione di siti web tramite WordPress e l’analisi dei dati con strumenti come Google Analytics e Google Analytics 360.",
  smart_button: "Scopri il curriculum completo",

  skills_lang: "Lingue: Italiano, Inglese, Francese, Spagnolo, Arabo",
  skills_design: "Strumenti di design: Adobe Creative Suite e Canva",
  skills_web: "Competenze web: HTML e Java, gestione siti con WordPress",
  skills_tools: "Strumenti digitali: Meta Business Suite, Google Ads, Google Analytics, SEO",
    
    portfolio_title: "Portfolio",

    portfolio_ipackima_title: "Fiera IPACK-IMA Milano – Design grafico",
    portfolio_ipackima_text: "Progetto di design e comunicazione visiva realizzato per la fiera IPACK-IMA di Milano, utilizzato per presentare e introdurre una nuova linea di prodotti.",

    portfolio_easyfit_title: "Design sito EasyFit",
    portfolio_easyfit_text: "Grafica e struttura del sito web realizzate da me, con il supporto tecnico dell'agenzia Switchup, con cui ho svolto un corso di sei mesi per ampliare le mie competenze nel marketing digitale e nello sviluppo web.",

    portfolio_kimera_title: "Catalogo prodotti Kimera",
    portfolio_kimera_text: "Design completo e impaginazione grafica del catalogo sviluppati da me per Kimera. Anche se successivamente sono state apportate alcune modifiche dopo la mia uscita dall’azienda, il concept, la struttura e la grafica originale sono stati interamente realizzati da me.",

footer_cta: "Visualizza il profilo completo"
},

fr: {
  nav_summary: "Synthèse stratégique",
  nav_swot: "SWOT",
  nav_journey: "Parcours",
  nav_case: "Cas pratique",
  nav_remote: "Compétences",
  nav_vision: "Vision",

  hero_title: "Selma Miski | Digital Marketing Strategist en évolution",
  hero_subtitle: "Stratégie claire, communication efficace, résultats concrets",
  hero_cta: "Découvrir l’approche",

  summary_title: "Synthèse stratégique",
  summary_who_title: "Profil",
  summary_who_text: "Selma Miski est diplômée en Digital Marketing avec une forte orientation stratégique et résultats.",
  summary_what_title: "Expertise",
  summary_what_text: "Elle développe des stratégies digitales structurées basées sur l’analyse des données et des objectifs mesurables.",
  summary_value_title: "Valeur ajoutée",
  summary_value_text: "Autonomie, clarté stratégique et approche orientée business pour chaque projet.",
  summary_skills_title: "Compétences clés",
  summary_skills_text: "Langues : Italien, Anglais, Français, Espagnol, Arabe. Outils de design : Adobe Creative Suite et Canva. Compétences web : HTML et Java, gestion de sites web avec WordPress. Outils numériques : Meta Business Suite, Google Ads, Google Analytics, SEO",

  swot_title: "Analyse SWOT personnelle",
  swot_s_title: "Forces",
  swot_s_text: "Analyse de données, pensée structurée, communication stratégique et focus performance.",
  swot_w_title: "Axes d’amélioration",
  swot_w_text: "Développement continu des compétences sur des outils avancés via formation permanente.",
  swot_o_title: "Opportunités",
  swot_o_text: "Le travail à distance comme accélérateur de productivité grâce au focus et à l’organisation par objectifs.",
  swot_t_title: "Menaces",
  swot_t_text: "Marché hautement compétitif, géré par une adaptation et une montée en compétences continues.",

  journey_title: "Du parcours académique à l’impact business",
  journey_deg_title: "Diplôme en Digital Marketing",
  journey_deg_text: "→ Obtenu à l’Université de Modena et Reggio Emilia avec développement de la pensée analytique et de la vision stratégique.",
  journey_exp_title: "Expérience professionnelle",
  journey_exp_text: "→ Plus de 2 ans d’expérience en marketing chez Kimera srl, Italie. Évolution d’étudiante salariée à un poste full time avec responsabilités croissantes.",
  journey_before_title: "Avant Kimera",
  journey_before_text: "→ Plus d’1 an d’expérience marketing dans le laboratoire cosmétique Bottega d'Argan. Activités freelance en brand awareness et communication online/offline.",
  journey_early_title: "Premières expériences",
  journey_early_text: "→ Toujours active professionnellement : administration, back office et customer service avant la transition vers le marketing.",
  journey_learning_title: "Formation continue",
  journey_learning_text: "→ Alignement constant avec l’innovation digitale et forte volonté de progression.",

  case_title: "Cas pratique – Optimisation de la communication",
  case_step1_title: "STEP 1 | Analyse",
  case_step1_text: "Identification d’opportunités pour améliorer les ventes d’une ligne de produits.",
  case_step2_title: "STEP 2 | Idée stratégique",
  case_step2_text: "Structuration des contenus et sélection des canaux les plus performants pour la cible.",
  case_step3_title: "STEP 3 | Micro proposition",
  case_step3_text: "Introduction de codes promotionnels et d’un First Time Kit pour stimuler l’essai et la conversion.",
  case_step4_title: "STEP 4 | KPI",
  case_step4_text: "Projection de +20 % d’engagement et amélioration du taux de conversion.",
  case_results_title: "RÉSULTATS",
  case_results_text: "Amélioration des performances commerciales et de l’engagement client.",

  smart_title: "Compétences clés",
  smart_1: "→Selma a développé une forte flexibilité mentale grâce à son parcours multilingue et à ses compétences en communication internationale.",
  smart_2: "→Elle s’adapte facilement à différents environnements et collabore efficacement entre différentes cultures et équipes.",
  smart_3: "→Ses compétences couvrent plusieurs domaines, notamment le graphisme avec Adobe Creative Suite, la traduction, la communication multilingue, les technologies web comme HTML, la gestion de sites web via WordPress et l’analyse de données avec des outils tels que Google Analytics et Google Analytics 360.",
  smart_button: "Voir le CV complet",

  skills_lang: "Langues : Italien, Anglais, Français, Espagnol, Arabe",
  skills_design: "Outils de design : Adobe Creative Suite et Canva",
  skills_web: "Compétences web : HTML et Java, gestion de sites WordPress",
  skills_tools: "Outils numériques : Meta Business Suite, Google Ads, Google Analytics, SEO",
  

    portfolio_title: "Portfolio",

    portfolio_ipackima_title: "Salon IPACK-IMA Milan – Design graphique",
    portfolio_ipackima_text: "Projet de design et communication visuelle réalisé pour le salon IPACK-IMA à Milan afin de présenter et lancer une nouvelle ligne de produits.",

    portfolio_easyfit_title: "Design du site EasyFit",
    portfolio_easyfit_text: "Design graphique et structure du site web réalisés par moi avec la collaboration technique de l'agence Switchup, où j’ai suivi une formation de six mois pour renforcer mes compétences en marketing digital.",

    portfolio_kimera_title: "Catalogue produits Kimera",
    portfolio_kimera_text: "Design complet et mise en page graphique du catalogue réalisés par moi pour Kimera. Bien que certaines modifications aient été apportées après mon départ, le concept, la structure et l'identité visuelle initiale ont été entièrement créés par moi.",

  footer_cta: "Voir le profil professionnel complet"
  }
};

// ===============================
// LANGUAGE SWITCH FUNCTION
// ===============================
function setLanguage(lang) {
  document.querySelectorAll("[data-lang-key]").forEach(el => {
    const key = el.getAttribute("data-lang-key");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  setLanguage("en");
}
