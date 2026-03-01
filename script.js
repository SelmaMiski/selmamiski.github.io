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
    nav_remote: "Remote Working",
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
    summary_why_title: "Why Invest in Her",
    summary_why_text: "She treats every task as an entrepreneurial responsibility with measurable outcomes."
      
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
    
    smart_title: "Working as a Performance Lever",
    smart_1: "Higher concentration levels",
    smart_2: "Time optimization",
    smart_3: "Reduced stress = increased productivity",
    smart_4: "Objective-based organization (OKRs)",
    smart_proposal: "Proposal: 2-month trial period with measurable KPIs.",
    
    ai_title: "AI & Data-Driven Approach",
    ai_text: "Selma integrates artificial intelligence awareness and data analysis into her marketing approach, with a strong focus on measurable performance.",
    
    vision_title: "Long-Term Vision",
    vision_text_1: "Grow as a Marketing Strategist, manage projects and coordinate teams.",
    vision_text_2: "Strong alignment with company values and a clear focus on mutual growth.",
    
    footer_cta: "View Full Professional Profile"
  },

  it: {
  nav_summary: "Executive Summary",
  nav_swot: "SWOT",
  nav_journey: "Percorso",
  nav_case: "Caso Studio",
  nav_remote: "Lavoro da Remoto",
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
  summary_why_title: "Perché investire su di lei",
  summary_why_text: "Affronta ogni attività con mentalità imprenditoriale e forte focus sulle performance.",

  swot_title: "Analisi SWOT personale",
  swot_s_title: "Punti di forza",
  swot_s_text: "Analisi dei dati, pensiero strutturato, comunicazione strategica e focus sulle performance.",
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

  smart_title: "Il lavoro come leva di performance",
  smart_1: "Maggiore concentrazione",
  smart_2: "Ottimizzazione del tempo",
  smart_3: "Riduzione dello stress = aumento produttività",
  smart_4: "Organizzazione per obiettivi (OKR)",
  smart_proposal: "Proposta: periodo di prova di 2 mesi con KPI misurabili.",

  ai_title: "Approccio AI e Data-Driven",
  ai_text: "Selma integra consapevolezza sull’intelligenza artificiale e analisi dei dati nel proprio approccio marketing, con forte focus sulle performance misurabili.",

  vision_title: "Visione di lungo periodo",
  vision_text_1: "Crescere come Marketing Strategist, gestire progetti e coordinare team.",
  vision_text_2: "Forte allineamento con i valori aziendali e visione di crescita reciproca.",

footer_cta: "Visualizza il profilo completo"
},

fr: {
  nav_summary: "Synthèse stratégique",
  nav_swot: "SWOT",
  nav_journey: "Parcours",
  nav_case: "Cas pratique",
  nav_remote: "Travail à distance",
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
  summary_why_title: "Pourquoi investir sur elle",
  summary_why_text: "Elle aborde chaque mission avec une mentalité entrepreneuriale et un fort focus performance.",

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

  smart_title: "Le travail comme levier de performance",
  smart_1: "Niveaux de concentration plus élevés",
  smart_2: "Optimisation du temps",
  smart_3: "Réduction du stress = augmentation de la productivité",
  smart_4: "Organisation par objectifs (OKR)",
  smart_proposal: "Proposition : période d’essai de 2 mois avec KPI mesurables.",

  ai_title: "Approche IA et Data-Driven",
  ai_text: "Selma intègre la culture de l’intelligence artificielle et l’analyse de données dans son approche marketing, avec un fort focus sur la performance mesurable.",

  vision_title: "Vision à long terme",
  vision_text_1: "Évoluer en tant que Marketing Strategist, piloter des projets et coordonner des équipes.",
  vision_text_2: "Fort alignement avec les valeurs de l’entreprise et vision de croissance mutuelle.",

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
}
