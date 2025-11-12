export type SupportedLocale = 'en' | 'fr' | 'it' | 'ar';

export interface ServiceSection {
  title: string;
  description?: string;
  items?: string[];
}

export interface ServiceTranslation {
  title: string;
  headline: string;
  intro: string;
  sections: ServiceSection[];
}

export interface ServiceDetail {
  slug: string;
  translations: Record<SupportedLocale, ServiceTranslation>;
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "domiciliation",
    translations: {
      en: {
        title: "Domiciliation",
        headline: "A Prestigious Address for Your Business in Morocco",
        intro:
          "Establish a credible and professional presence in Morocco without the overhead of a physical office. Our domiciliation service provides you with a legal registered address, a crucial requirement for any company formation in the country. This service is ideal for startups, international branches, and entrepreneurs seeking flexibility and a distinguished image.",
        sections: [
          {
            title: "Our Domiciliation Package Offers",
            items: [
              "Registered Legal Address: Secure a prestigious address in a prime business location, fulfilling all legal requirements for the Commercial Registry.",
              "Mail Handling: We receive, manage, and forward your official correspondence securely and efficiently.",
              "Enhanced Corporate Image: A professional address in a recognized business hub enhances your company's credibility with clients, partners, and financial institutions.",
              "Flexibility and Cost-Effectiveness: Avoid the expense and long-term commitment of a commercial lease while maintaining a fully compliant legal presence."
            ]
          }
        ]
      },
      fr: {
        title: "Domiciliation",
        headline: "Une adresse prestigieuse pour votre entreprise au Maroc",
        intro:
          "Établissez une présence crédible et professionnelle au Maroc sans supporter les coûts d’un bureau physique. Notre service de domiciliation vous fournit une adresse légale, exigence incontournable pour toute création d’entreprise. Idéal pour les start-up, les filiales internationales et les entrepreneurs qui recherchent flexibilité et image valorisante.",
        sections: [
          {
            title: "Notre offre de domiciliation comprend",
            items: [
              "Adresse légale enregistrée : Bénéficiez d’une adresse prestigieuse dans un quartier d’affaires, conforme à toutes les obligations du Registre du commerce.",
              "Gestion du courrier : Nous recevons, traitons et réexpédions votre correspondance officielle en toute sécurité et efficacité.",
              "Image de marque renforcée : Une adresse professionnelle dans un pôle reconnu renforce la crédibilité de votre entreprise auprès des clients, partenaires et institutions financières.",
              "Flexibilité et maîtrise des coûts : Évitez les frais et engagements d’un bail commercial tout en conservant une présence légale parfaitement conforme."
            ]
          }
        ]
      },
      it: {
        title: "Domiciliazione",
        headline: "Un indirizzo prestigioso per la tua azienda in Marocco",
        intro:
          "Costruisci una presenza credibile e professionale in Marocco senza i costi di un ufficio fisico. Il nostro servizio di domiciliazione ti fornisce un indirizzo legale registrato, requisito essenziale per costituire una società. È la soluzione ideale per startup, filiali internazionali e imprenditori che desiderano flessibilità e un’immagine distinta.",
        sections: [
          {
            title: "Il nostro pacchetto di domiciliazione include",
            items: [
              "Indirizzo legale registrato: Ottieni un indirizzo prestigioso in una zona business di primo livello, conforme a tutte le richieste del Registro delle imprese.",
              "Gestione della corrispondenza: Riceviamo, gestiamo e inoltriamo la tua posta ufficiale in modo sicuro ed efficiente.",
              "Immagine aziendale valorizzata: Un indirizzo professionale in un hub riconosciuto rafforza la credibilità della tua azienda presso clienti, partner e istituti finanziari.",
              "Flessibilità e convenienza: Evita i costi e gli impegni di un contratto di locazione commerciale mantenendo una presenza legale pienamente conforme."
            ]
          }
        ]
      },
      ar: {
        title: "التوطين",
        headline: "عنوان مرموق لعملك في المغرب",
        intro:
          "أسس حضوراً مهنياً موثوقاً في المغرب من دون أعباء المكتب الفعلي. يوفّر لك حلّ التوطين لدينا عنواناً قانونياً مسجلاً، وهو شرط أساسي لتأسيس أي شركة في البلاد. يعد الخيار المثالي للشركات الناشئة والفروع الدولية ورواد الأعمال الباحثين عن المرونة وصورة راقية.",
        sections: [
          {
            title: "يشمل عرض التوطين لدينا",
            items: [
              "عنوان قانوني مسجل: احصل على عنوان مرموق في منطقة أعمال رئيسية يستوفي جميع متطلبات السجل التجاري.",
              "إدارة المراسلات: نتولى استقبال بريدك الرسمي وإدارته وإعادة توجيهه بأمان وكفاءة.",
              "تعزيز الصورة المؤسسية: يمنحك العنوان المهني في مركز أعمال معروف مصداقية أكبر لدى العملاء والشركاء والمؤسسات المالية.",
              "المرونة وترشيد التكاليف: تجنب تكاليف والتزامات عقود الإيجار التجاري مع الحفاظ على حضور قانوني متوافق بالكامل."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "company-creation",
    translations: {
      en: {
        title: "Company Creation",
        headline: "Launch Your Moroccan Venture with Confidence",
        intro:
          "Embarking on your entrepreneurial journey in Morocco is an exciting prospect, and establishing the right legal foundation is the first critical step to success. We specialize in navigating the intricacies of Moroccan corporate law to make your company creation process seamless and efficient. From selecting the optimal legal structure to finalizing your registration, our experts are here to guide you.",
        sections: [
          {
            title: "Our Process Includes",
            items: [
              "Legal Structure Advisory: We help you choose the most suitable company form for your business goals, whether it's a Limited Liability Company (SARL), a Public Limited Company (SA), or a Simplified Joint Stock Company (SAS). The SARL is the most common structure in Morocco, ideal for small and medium-sized enterprises due to its flexibility and limited liability for partners.",
              "Name Reservation: We secure your unique company name by obtaining the “Certificat Négatif” from the Moroccan Office of Industrial and Commercial Property (OMPIC).",
              "Documentation & Registration: Our team will draft your articles of association, manage the deposit of share capital, and file all necessary documents with the Commercial Registry (Registre du Commerce).",
              "Final Formalities: We ensure you are correctly registered for tax identification (IF), professional tax (TP), and social security (CNSS), and handle the final publication of your company's establishment."
            ],
            description: "With our expert handling of every detail, you can focus on what you do best: building your business."
          }
        ]
      },
      fr: {
        title: "Création d’entreprise",
        headline: "Lancez votre projet marocain en toute confiance",
        intro:
          "Se lancer dans l’entrepreneuriat au Maroc est une aventure enthousiasmante. Poser le bon socle juridique est la première étape décisive vers la réussite. Nous maîtrisons les spécificités du droit des sociétés marocain pour rendre votre création d’entreprise fluide et sécurisée, du choix de la structure à l’immatriculation finale.",
        sections: [
          {
            title: "Notre accompagnement comprend",
            items: [
              "Conseil sur la forme juridique : Nous vous aidons à choisir la structure la plus adaptée à vos objectifs (SARL, SA, SAS). La SARL est la forme la plus répandue au Maroc grâce à sa flexibilité et à la responsabilité limitée des associés.",
              "Réservation du nom : Nous obtenons votre « Certificat négatif » auprès de l’OMPIC pour garantir l’exclusivité de votre dénomination sociale.",
              "Dossiers & immatriculation : Rédaction des statuts, dépôt du capital social, constitution du dossier et immatriculation au Registre du commerce.",
              "Formalités finales : Inscription à l’identifiant fiscal (IF), à la taxe professionnelle (TP) et à la CNSS, puis publication légale de la création."
            ],
            description: "En nous confiant chaque étape, vous pouvez vous concentrer pleinement sur le développement de votre activité."
          }
        ]
      },
      it: {
        title: "Creazione d’impresa",
        headline: "Avvia la tua attività in Marocco con tranquillità",
        intro:
          "Iniziare un nuovo progetto imprenditoriale in Marocco è un’opportunità entusiasmante e porre basi legali solide è il primo passo fondamentale. Siamo specializzati nelle normative societarie marocchine per rendere semplice ed efficiente l’intero processo, dalla scelta della struttura alla registrazione definitiva.",
        sections: [
          {
            title: "Il nostro processo comprende",
            items: [
              "Consulenza sulla forma giuridica: Ti aiutiamo a scegliere la struttura societaria più adatta (SARL, SA, SAS). La SARL è la forma più diffusa in Marocco perché combina flessibilità e responsabilità limitata per i soci.",
              "Prenotazione del nome: Otteniamo per te il “Certificat Négatif” presso l’OMPIC per tutelare l’unicità della tua denominazione.",
              "Documentazione e registrazione: Redigiamo lo statuto, gestiamo il deposito del capitale sociale e presentiamo tutte le pratiche al Registro delle imprese.",
              "Adempimenti finali: Curamo l’iscrizione all’identificativo fiscale (IF), alla tassa professionale (TP) e alla CNSS, oltre alla pubblicazione legale della costituzione."
            ],
            description: "Gestiamo ogni dettaglio con precisione, così puoi dedicarti a far crescere il tuo business."
          }
        ]
      },
      ar: {
        title: "إنشاء الشركات",
        headline: "أطلق مشروعك في المغرب بكل ثقة",
        intro:
          "يمثل إطلاق مشروع جديد في المغرب فرصة حماسية، ويُعد تأسيس البنية القانونية السليمة الخطوة الأولى نحو النجاح. نحن متخصصون في تعقيدات القانون التجاري المغربي لضمان سير عملية التأسيس بسلاسة وكفاءة، من اختيار الشكل القانوني الأنسب إلى استكمال إجراءات التسجيل النهائية.",
        sections: [
          {
            title: "تشمل خدماتنا",
            items: [
              "الاستشارة في الشكل القانوني: نساعدك على اختيار الصيغة الأنسب لأهدافك (ش.م.م، ش.م، ش.س.ب). تُعد الشركة ذات المسؤولية المحدودة الأكثر انتشاراً في المغرب بفضل مرونتها ومسؤولية الشركاء المحدودة.",
              "حجز الاسم التجاري: نحصل لك على الشهادة السلبية من المكتب المغربي للملكية الصناعية والتجارية لضمان تميز اسم شركتك.",
              "إعداد الوثائق والتسجيل: نتولى صياغة النظام الأساسي، وإيداع رأس المال، وتكوين الملف وإيداعه في السجل التجاري.",
              "الإجراءات النهائية: نسجل شركتك للحصول على المعرف الضريبي، والضريبة المهنية، والضمان الاجتماعي (CNSS)، ونتكفل بالإشهار القانوني للتأسيس."
            ],
            description: "مع إدارتنا الدقيقة لكل التفاصيل، يمكنك التركيز على ما تتقن فعله: بناء عملك."
          }
        ]
      }
    }
  },
  {
    slug: "accounting-tax",
    translations: {
      en: {
        title: "Accounting & Tax",
        headline: "Expert Moroccan Accounting and Tax Compliance",
        intro:
          "Navigating the Moroccan financial landscape requires precision, diligence, and deep local expertise. Our dedicated accounting and tax services ensure your business remains fully compliant with Moroccan regulations, allowing you to operate with financial clarity and peace of mind.",
        sections: [
          {
            title: "Our Core Services",
            items: [
              "Full-Cycle Accounting: We manage all your accounting needs in strict accordance with the Moroccan General Accounting Plan (PCG), from bookkeeping and financial statement preparation to annual filings. All companies operating in Morocco must adhere to these standards.",
              "Corporate Income Tax (CIT): We ensure your company is compliant with Morocco's corporate tax laws. The CIT rate is applied progressively based on your net taxable profit. We handle everything from calculating your liabilities to filing annual returns, ensuring you benefit from any applicable incentives.",
              "Value Added Tax (VAT / TVA): VAT is a key component of the Moroccan tax system, levied on most goods and services. The standard rate is 20%, with reduced rates for specific items. We manage your VAT declarations and ensure timely payments to avoid penalties.",
              "Tax Optimization: Our experts analyze your financial situation to identify opportunities for tax optimization, ensuring you operate in the most efficient way possible while respecting all legal frameworks."
            ],
            description: "Partner with us for meticulous financial management that supports your business growth in Morocco."
          }
        ]
      },
      fr: {
        title: "Comptabilité & Fiscalité",
        headline: "Une conformité comptable et fiscale maîtrisée au Maroc",
        intro:
          "Naviguer dans l’environnement financier marocain exige rigueur, vigilance et connaissance approfondie des règles locales. Nous veillons à ce que votre entreprise reste parfaitement conforme aux obligations comptables et fiscales, pour une gestion financière claire et sereine.",
        sections: [
          {
            title: "Nos services principaux",
            items: [
              "Comptabilité complète : Tenue comptable selon le Plan Comptable Général marocain, élaboration des états financiers et dépôt des liasses annuelles.",
              "Impôt sur les sociétés (IS) : Application des taux progressifs en fonction du bénéfice imposable, calcul des acomptes et préparation des déclarations fiscales.",
              "Taxe sur la valeur ajoutée (TVA) : Gestion des déclarations périodiques, respect des taux applicables (taux normal à 20 % et taux réduits) et sécurisation des versements.",
              "Optimisation fiscale : Analyse de votre situation pour identifier les leviers d’optimisation dans le strict respect du cadre légal marocain."
            ],
            description: "Confiez-nous la gestion détaillée de vos finances pour soutenir durablement la croissance de votre entreprise."
          }
        ]
      },
      it: {
        title: "Contabilità & Fisco",
        headline: "Competenza contabile e fiscale per operare in Marocco",
        intro:
          "Gestire la finanza aziendale in Marocco richiede precisione, costanza e una profonda conoscenza delle normative locali. Offriamo servizi contabili e fiscali completi per mantenere la tua impresa pienamente conforme, garantendo chiarezza e serenità nella gestione finanziaria.",
        sections: [
          {
            title: "I nostri servizi principali",
            items: [
              "Contabilità completa: Tenuta della contabilità secondo il Piano Contabile Generale marocchino, redazione dei bilanci e deposito delle dichiarazioni annuali.",
              "Imposta sul reddito delle società: Applichiamo i regimi di tassazione progressiva in base al reddito imponibile, calcoliamo gli acconti e predisponiamo le dichiarazioni fiscali.",
              "IVA (TVA): Gestiamo le dichiarazioni periodiche, assicurando il rispetto delle aliquote applicabili (standard al 20% e ridotte) e dei versamenti tempestivi.",
              "Ottimizzazione fiscale: Analizziamo la tua situazione per individuare opportunità di ottimizzazione nel pieno rispetto della legislazione marocchina."
            ],
            description: "Affidaci la gestione contabile per sostenere la crescita della tua azienda con una finanza solida e trasparente."
          }
        ]
      },
      ar: {
        title: "المحاسبة والضرائب",
        headline: "خبرة مغربية دقيقة في المحاسبة والامتثال الضريبي",
        intro:
          "يتطلب التعامل مع البيئة المالية في المغرب دقة ومتابعة مستمرة ومعرفة محلية متعمقة. تضمن خدماتنا المحاسبية والضريبية المتخصصة امتثال عملك الكامل للتشريعات المغربية، مما يمنحك وضوحاً مالياً وراحة بال.",
        sections: [
          {
            title: "خدماتنا الأساسية",
            items: [
              "محاسبة متكاملة: نتولى مسك الدفاتر وفق المخطط المحاسبي العام المغربي، وإعداد القوائم المالية وإيداع التصاريح السنوية.",
              "الضريبة على الشركات: نضمن تطبيق الشرائح التصاعدية تبعاً للربح الخاضع للضريبة، مع حساب الالتزامات الضريبية وإيداع التصاريح في مواعيدها.",
              "الضريبة على القيمة المضافة (TVA): ندير التصريحات الدورية، ونراعي النسب المعمول بها (النسبة العادية 20% والنسب المخفضة) مع ضمان الأداء في الآجال القانونية.",
              "تحسين الوضع الضريبي: نحلل وضعك المالي لاكتشاف فرص الترشيد في إطار احترام القوانين المغربية."
            ],
            description: "اشترك معنا لتحصل على إدارة مالية دقيقة تدعم نمو عملك في المغرب."
          }
        ]
      }
    }
  },
  {
    slug: "payroll",
    translations: {
      en: {
        title: "Payroll",
        headline: "Accurate and Compliant Payroll Management",
        intro:
          "Managing payroll is a critical function that demands accuracy, timeliness, and adherence to complex regulations. Our payroll services streamline this process, ensuring your employees are paid correctly and on time, while keeping your business fully compliant with Moroccan labor and social security laws.",
        sections: [
          {
            title: "Our Comprehensive Payroll Solutions",
            items: [
              "Salary Processing: We handle all aspects of salary calculation, including deductions, bonuses, and allowances.",
              "Social Security (CNSS) Compliance: We manage your declarations and contributions to the Caisse Nationale de Sécurité Sociale (CNSS), a mandatory requirement for all employers in Morocco.",
              "Tax Withholding: We ensure accurate calculation and remittance of income tax withholdings for your employees.",
              "Reporting: Receive clear, detailed payroll reports for your records, giving you a complete overview of your personnel expenses."
            ]
          }
        ]
      },
      fr: {
        title: "Paie",
        headline: "Une gestion de la paie fiable et conforme",
        intro:
          "La paie est une fonction stratégique qui exige précision, ponctualité et maîtrise des obligations sociales. Nous sécurisons l’ensemble du processus pour garantir un versement juste et ponctuel tout en assurant votre conformité au droit du travail et à la CNSS.",
        sections: [
          {
            title: "Nos solutions de paie couvrent",
            items: [
              "Traitement des salaires : Calcul des rémunérations, retenues, primes et avantages en nature.",
              "Conformité CNSS : Gestion des déclarations et versements auprès de la Caisse Nationale de Sécurité Sociale.",
              "Retenues fiscales : Calcul et reversement des retenues à la source sur les salaires.",
              "Reporting : Remise de rapports détaillés pour suivre vos charges de personnel et faciliter vos prises de décision."
            ]
          }
        ]
      },
      it: {
        title: "Payroll",
        headline: "Gestione paghe precisa e conforme",
        intro:
          "La gestione delle paghe richiede puntualità, accuratezza e conoscenza delle normative sul lavoro. Ottimizziamo l’intero processo per garantire pagamenti corretti e tempestivi, assicurando la piena conformità alle regole marocchine e alla CNSS.",
        sections: [
          {
            title: "Le nostre soluzioni payroll includono",
            items: [
              "Elaborazione degli stipendi: Calcolo di salari, trattenute, premi e indennità.",
              "Conformità CNSS: Gestione delle dichiarazioni e dei versamenti presso la Caisse Nationale de Sécurité Sociale.",
              "Ritenute fiscali: Calcolo e versamento delle imposte sul reddito dei dipendenti.",
              "Reportistica: Report dettagliati per monitorare i costi del personale e supportare le decisioni amministrative."
            ]
          }
        ]
      },
      ar: {
        title: "إدارة الرواتب",
        headline: "إدارة رواتب دقيقة ومتوافقة مع القوانين",
        intro:
          "تعد إدارة الرواتب وظيفة حيوية تتطلب التزاماً صارماً بالدقة والمواعيد والنصوص القانونية. نقوم بتبسيط العملية كاملة لضمان دفع رواتب موظفيك بشكل صحيح وفي الوقت المحدد مع الحفاظ على الامتثال لقوانين العمل والضمان الاجتماعي في المغرب.",
        sections: [
          {
            title: "حلول الرواتب التي نقدمها",
            items: [
              "معالجة الرواتب: نتولى احتساب الأجور بجميع عناصرها من اقتطاعات ومكافآت وتعويضات.",
              "الامتثال لصندوق CNSS: ندير التصريحات والمساهمات لدى الصندوق الوطني للضمان الاجتماعي.",
              "الاقتطاعات الضريبية: نضمن حساب الضريبة على الدخل واقتطاعها وتحويلها إلى الجهات المختصة.",
              "التقارير: نوفر تقارير مفصلة تمنحك رؤية شاملة لتكاليف الموظفين وتساعدك في اتخاذ القرار."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "strategic-consulting",
    translations: {
      en: {
        title: "Strategic Consulting",
        headline: "Charting Your Path to Sustainable Growth",
        intro:
          "In a competitive market, a clear and actionable strategy is your roadmap to success. Our strategic consulting services provide you with the expert analysis and outside perspective needed to make informed, high-impact decisions. We partner with your leadership team to tackle complex challenges, identify new opportunities, and define a clear vision for the future.",
        sections: [
          {
            title: "Our Expertise Covers",
            items: [
              "Corporate & Business Strategy: We help you define long-term goals and develop a cohesive plan to achieve them across all business units.",
              "Market Entry & Growth: Leveraging in-depth analysis, we identify the most promising markets and create data-backed strategies for successful entry and expansion.",
              "Business Model Innovation: We challenge conventional thinking to help you reimagine your value proposition, optimize revenue streams, and build a more resilient business model.",
              "Operational Efficiency: Our consultants analyze your current processes to identify areas for improvement, helping you reduce costs and increase productivity."
            ]
          }
        ]
      },
      fr: {
        title: "Conseil stratégique",
        headline: "Tracer votre trajectoire de croissance durable",
        intro:
          "Dans un environnement concurrentiel, disposer d’une stratégie claire et opérationnelle est indispensable. Nos consultants apportent l’analyse, le recul et les recommandations dont vous avez besoin pour prendre des décisions à fort impact.",
        sections: [
          {
            title: "Nos domaines d’expertise",
            items: [
              "Stratégie corporate et business : Définition des objectifs à long terme et déploiement de plans d’action cohérents.",
              "Accès au marché & croissance : Identifier les marchés porteurs et construire des plans d’entrée et d’expansion basés sur les données.",
              "Innovation du business model : Repenser votre proposition de valeur, optimiser vos revenus et bâtir un modèle plus résilient.",
              "Efficience opérationnelle : Diagnostic des process, réduction des coûts et amélioration de la productivité."
            ]
          }
        ]
      },
      it: {
        title: "Consulenza strategica",
        headline: "Definire la rotta per una crescita sostenibile",
        intro:
          "In uno scenario competitivo è fondamentale disporre di una strategia chiara e realizzabile. Forniamo analisi approfondite e una visione esterna per aiutarti a prendere decisioni ad alto impatto, affiancando il tuo management nelle sfide più complesse.",
        sections: [
          {
            title: "Le nostre competenze",
            items: [
              "Strategia corporate e business: Definizione degli obiettivi di lungo periodo e pianificazione integrata delle azioni.",
              "Ingresso e crescita sui mercati: Analisi dei mercati ad alto potenziale e piani di espansione basati sui dati.",
              "Innovazione del modello di business: Ripensare la value proposition, ottimizzare i ricavi e creare un modello più resiliente.",
              "Efficienza operativa: Analisi dei processi per ridurre i costi e aumentare la produttività."
            ]
          }
        ]
      },
      ar: {
        title: "الاستشارات الاستراتيجية",
        headline: "وضع خريطة طريق للنمو المستدام",
        intro:
          "في سوق تنافسية، تشكّل الاستراتيجية الواضحة والقابلة للتنفيذ مفتاح النجاح. نوفر لك تحليلات معمقة ورؤية خارجية تساعدك على اتخاذ قرارات مؤثرة، ونعمل مع فريق القيادة لديك لمواجهة التحديات واكتشاف فرص النمو.",
        sections: [
          {
            title: "مجالات خبرتنا",
            items: [
              "الاستراتيجية المؤسسية والتجارية: نضع الأهداف بعيدة المدى ونبني خططاً متماسكة لتحقيقها على مستوى جميع الوحدات.",
              "دخول الأسواق والنمو: نعتمد على التحليلات المتعمقة لتحديد الأسواق الواعدة ووضع استراتيجيات مدعومة بالبيانات للانطلاق والتوسع.",
              "تجديد نموذج الأعمال: نعيد التفكير في عرض القيمة، ونحسن مصادر الإيرادات لبناء نموذج أكثر مرونة.",
              "الكفاءة التشغيلية: نقوم بتحليل العمليات الحالية لتحديد مجالات التحسين، وتقليل التكاليف ورفع الإنتاجية."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "branding-design",
    translations: {
      en: {
        title: "Branding & Design",
        headline: "Building Brands That Resonate and Inspire",
        intro:
          "Your brand is more than just a logo; it's the complete experience you offer to your customers. Our branding and design experts work with you to craft a powerful and consistent brand identity that captures your essence, differentiates you from the competition, and builds lasting connections with your audience.",
        sections: [
          {
            title: "Our Creative Services",
            items: [
              "Brand Strategy & Identity: We develop a comprehensive brand strategy that defines your mission, vision, and positioning, then translate it into a compelling visual identity, including logos, color palettes, and typography.",
              "Graphic Design: From marketing collateral and business cards to packaging and presentations, our design team creates stunning visuals that communicate your brand message effectively.",
              "UI/UX Design: We design intuitive and engaging user interfaces for websites and applications, ensuring a seamless and enjoyable user experience that drives conversion."
            ]
          }
        ]
      },
      fr: {
        title: "Branding & Design",
        headline: "Construire des marques qui inspirent et fidélisent",
        intro:
          "Votre marque est une expérience complète. Nous façonnons une identité visuelle cohérente qui reflète votre vision, vous distingue de la concurrence et crée un lien durable avec vos audiences.",
        sections: [
          {
            title: "Nos prestations créatives",
            items: [
              "Stratégie de marque & identité : Définition de votre mission, vision et positionnement, création du logo, de la palette de couleurs et des typographies.",
              "Design graphique : Supports marketing, cartes professionnelles, signalétique, packaging et présentations professionnelles.",
              "Design UI/UX : Interfaces intuitives et engageantes pour sites web et applications, au service de l’expérience utilisateur et de la conversion."
            ]
          }
        ]
      },
      it: {
        title: "Branding & Design",
        headline: "Creare brand che colpiscono e coinvolgono",
        intro:
          "Il tuo brand è l’esperienza complessiva che offri ai clienti. Collaboriamo con te per creare un’identità forte e coerente che esprima l’essenza della tua azienda, differenziandoti dalla concorrenza e generando relazioni durature.",
        sections: [
          {
            title: "I nostri servizi creativi",
            items: [
              "Brand strategy & identity: Definiamo mission, vision e positioning, traducendoli in un’identità visiva completa (logo, palette colori, tipografia).",
              "Graphic design: Materiale marketing, biglietti da visita, packaging, presentazioni e molto altro.",
              "UI/UX design: Progettiamo interfacce intuitive e coinvolgenti per siti e app, migliorando l’esperienza utente e le conversioni."
            ]
          }
        ]
      },
      ar: {
        title: "الهوية البصرية والتصميم",
        headline: "نبني علامات تجارية تبقى في الذاكرة وتلهم الجمهور",
        intro:
          "علامتك التجارية أكثر من مجرد شعار؛ إنها التجربة الكاملة التي تقدمها لعملائك. يعمل فريقنا معك لصياغة هوية متكاملة تعكس جوهر شركتك، وتميزك عن المنافسين، وتبني علاقة طويلة الأمد مع جمهورك.",
        sections: [
          {
            title: "خدماتنا الإبداعية",
            items: [
              "استراتيجية وهوية العلامة: نحدد رسالتك ورؤيتك وتموضعك، ونحولها إلى هوية بصرية متكاملة تشمل الشعار والألوان والخطوط.",
              "التصميم الجرافيكي: تصميم المواد التسويقية والبطاقات والعبوات والعروض التقديمية باحترافية عالية.",
              "تصميم واجهات وتجربة المستخدم: نبتكر واجهات مواقع وتطبيقات سهلة الاستخدام وجذابة تعزز تجربة المستخدم والتحويل."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "web-development",
    translations: {
      en: {
        title: "Web & App Development",
        headline: "Engineering Digital Experiences That Drive Results",
        intro:
          "In today's digital-first world, your online presence is your most powerful asset. It’s your virtual storefront, your lead-generation engine, and a primary touchpoint for your customers. Our development team builds high-performance, secure, and scalable websites and applications that are not only visually impressive but also engineered to meet your specific business objectives.",
        sections: [
          {
            title: "Our Web Development Solutions",
            items: [
              "Custom Website Development: We create bespoke websites tailored to your unique requirements, from corporate sites to complex web applications.",
              "E-Commerce Platforms: We build robust and user-friendly online stores that drive sales and provide a seamless shopping experience for your customers.",
              "Responsive Design: Every website we build is fully responsive, ensuring an optimal viewing experience across all devices, including desktops, tablets, and smartphones."
            ]
          },
          {
            title: "Mobile & Web App Development",
            description:
              "Go beyond the browser and connect with your audience through powerful, intuitive, and engaging applications. A well-designed app can increase customer loyalty, streamline operations, and open up new revenue streams.",
            items: [
              "Native & Hybrid Apps: We build high-performance native apps for iOS and Android to deliver the best user experience. We also develop hybrid apps that use a single codebase to reduce development time and cost, allowing you to reach a broader audience quickly.",
              "Progressive Web Apps (PWA): PWAs offer an app-like experience directly within a web browser, eliminating the need for users to download anything. They are fast, can work offline, and are a cost-effective way to engage users across all devices."
            ]
          }
        ]
      },
      fr: {
        title: "Développement web & applicatif",
        headline: "Concevoir des expériences digitales performantes",
        intro:
          "Votre présence en ligne est devenue l’actif le plus puissant de votre entreprise. Nous développons des sites et applications hautes performances, sécurisés et scalables, pensés pour atteindre vos objectifs business.",
        sections: [
          {
            title: "Nos solutions web",
            items: [
              "Sites sur-mesure : Conception de plateformes personnalisées, du site corporate à l’application web complexe.",
              "E-commerce : Boutiques en ligne robustes, ergonomiques et orientées conversion.",
              "Design responsive : Expérience optimale sur desktop, tablette et mobile."
            ]
          },
          {
            title: "Développement mobile et applicatif",
            description:
              "Renforcez votre relation client grâce à des applications puissantes et intuitives. Un produit bien conçu fidélise vos utilisateurs, fluidifie vos opérations et génère de nouvelles sources de revenus.",
            items: [
              "Applications natives & hybrides : Développement iOS et Android, ainsi que solutions hybrides pour réduire les délais et toucher un public plus large.",
              "Progressive Web Apps : Expérience applicative depuis le navigateur, rapide, fonctionnelle hors-ligne et économique."
            ]
          }
        ]
      },
      it: {
        title: "Sviluppo web & app",
        headline: "Esperienze digitali che generano risultati",
        intro:
          "Nel mondo digitale di oggi, la tua presenza online è un asset strategico. Realizziamo siti e applicazioni performanti, sicuri e scalabili, progettati per rispondere agli obiettivi del tuo business.",
        sections: [
          {
            title: "Le nostre soluzioni web",
            items: [
              "Siti custom: Portali aziendali e applicazioni web su misura per le tue esigenze.",
              "Piattaforme e-commerce: Store online robusti, intuitivi e orientati alla conversione.",
              "Design responsive: Esperienza ottimale su desktop, tablet e smartphone."
            ]
          },
          {
            title: "Sviluppo app mobile e web",
            description:
              "Supera i limiti del browser e costruisci relazioni durature con applicazioni potenti e facili da usare. Un’app ben progettata aumenta la fedeltà, semplifica i processi e apre nuove entrate.",
            items: [
              "App native e ibride: Applicazioni iOS e Android ad alte prestazioni e soluzioni ibride con un unico codice per ridurre tempi e costi.",
              "Progressive Web App: Esperienza simile a un’app direttamente dal browser, veloce, offline-ready e conveniente."
            ]
          }
        ]
      },
      ar: {
        title: "تطوير المواقع والتطبيقات",
        headline: "ابتكار تجارب رقمية تحقق نتائج ملموسة",
        intro:
          "أصبحت حضورك الرقمي أهم أصول شركتك. نبني مواقع وتطبيقات عالية الأداء وآمنة وقابلة للتوسع تجمع بين التصميم الجذاب وتحقيق أهدافك التجارية.",
        sections: [
          {
            title: "حلولنا في تطوير الويب",
            items: [
              "مواقع مخصصة: تصميم منصات حسب الطلب من المواقع المؤسسية إلى التطبيقات الويب المعقدة.",
              "منصات التجارة الإلكترونية: متاجر إلكترونية قوية وسهلة الاستخدام تعزز المبيعات.",
              "تصميم متجاوب: تجربة مشاهدة مثالية على الحاسوب واللوحي والهاتف الذكي."
            ]
          },
          {
            title: "تطوير التطبيقات للويب والجوال",
            description:
              "تواصل مع جمهورك من خلال تطبيقات فعّالة وبسيطة وممتعة. التطبيق المصمم جيداً يزيد ولاء العملاء، ويحسن العمليات، ويفتح مصادر دخل جديدة.",
            items: [
              "تطبيقات أصلية وهجينة: تطوير تطبيقات iOS وAndroid عالية الأداء، إلى جانب حلول هجينة لتقليل زمن التطوير والوصول إلى جمهور أوسع.",
              "تطبيقات الويب التقدمية (PWA): تجربة مشابهة للتطبيق داخل المتصفح، سريعة، تعمل دون اتصال، وتعد خياراً اقتصادياً للتفاعل مع المستخدمين على مختلف الأجهزة."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "ads-social-media",
    translations: {
      en: {
        title: "Ads & Social Media",
        headline: "Amplify Your Message and Grow Your Audience",
        intro:
          "Connect with your target audience where they are most active. Our digital advertising and social media management services are designed to build brand awareness, drive engagement, and generate qualified leads. We create data-driven campaigns that deliver measurable results and a strong return on investment.",
        sections: [
          {
            title: "Our Digital Marketing Services",
            items: [
              "Social Media Management: We develop and execute a comprehensive social media strategy, creating engaging content, managing your communities, and growing your following across platforms like LinkedIn, Instagram, and Facebook.",
              "Paid Advertising (PPC): Our experts create, manage, and optimize paid ad campaigns on Google, Meta, and other platforms to drive targeted traffic to your website and increase conversions.",
              "Content Strategy & Creation: We produce high-quality content—from blog posts to infographics—that attracts your target audience and establishes you as a thought leader in your industry."
            ]
          }
        ]
      },
      fr: {
        title: "Publicité & réseaux sociaux",
        headline: "Amplifiez votre message et engagez votre audience",
        intro:
          "Touchez vos clients là où ils sont le plus actifs. Nos campagnes digitales et social media développent votre notoriété, stimulent l’engagement et génèrent des leads qualifiés.",
        sections: [
          {
            title: "Nos prestations marketing",
            items: [
              "Gestion social media : Stratégie éditoriale, création de contenus engageants, animation de communauté sur LinkedIn, Instagram, Facebook et autres réseaux.",
              "Publicité payante (PPC) : Conception, pilotage et optimisation des campagnes sur Google Ads, Meta et les plateformes pertinentes pour maximiser vos conversions.",
              "Stratégie de contenu : Production de contenus premium (articles, vidéos, infographies) pour attirer et fidéliser votre audience tout en asseyant votre crédibilité."
            ]
          }
        ]
      },
      it: {
        title: "Advertising & Social Media",
        headline: "Amplifica il tuo messaggio e fai crescere la community",
        intro:
          "Connettiti con il tuo pubblico sui canali in cui è più presente. Le nostre strategie di advertising e social media aumentano notorietà, engagement e lead qualificati, con campagne guidate dai dati.",
        sections: [
          {
            title: "I nostri servizi di digital marketing",
            items: [
              "Social media management: Strategia editoriale, produzione di contenuti e gestione della community su LinkedIn, Instagram, Facebook e altri canali.",
              "Pubblicità a pagamento (PPC): Pianificazione, gestione e ottimizzazione di campagne su Google, Meta e piattaforme specializzate per incrementare traffico e conversioni.",
              "Content strategy & creation: Creazione di contenuti di qualità (articoli, video, infografiche) per attrarre il tuo pubblico e posizionarti come punto di riferimento."
            ]
          }
        ]
      },
      ar: {
        title: "الإعلانات ووسائل التواصل",
        headline: "عزّز رسالتك ووسع جمهورك",
        intro:
          "تواصل مع جمهورك المستهدف حيث يقضي وقته. خدماتنا في الإعلانات الرقمية وإدارة وسائل التواصل تدعم بناء الوعي بالعلامة التجارية، وتحفز التفاعل، وتولد عملاء محتملين بجودة عالية عبر حملات تعتمد على البيانات.",
        sections: [
          {
            title: "خدماتنا في التسويق الرقمي",
            items: [
              "إدارة وسائل التواصل الاجتماعي: نضع استراتيجية متكاملة، وننتج محتوى جذاباً، وندير مجتمعاتك على منصات مثل لينكدإن وإنستغرام وفيسبوك.",
              "الإعلانات المدفوعة (PPC): نصمم وندير ونحسن حملات الإعلانات على Google وMeta والمنصات الأخرى لجلب زيارات مستهدفة وزيادة التحويلات.",
              "استراتيجية المحتوى وإنتاجه: نصنع محتوى عالي الجودة من المقالات إلى الرسوم المعلوماتية لإجتذاب جمهورك وترسيخ مكانتك كقائد فكري."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "video-production",
    translations: {
      en: {
        title: "Video Production",
        headline: "Tell Your Story Through Compelling Video",
        intro:
          "Video is the most powerful medium for storytelling and engaging audiences. From corporate profiles to promotional content, our video production team handles every stage of the creative process—from concept and scriptwriting to filming and post-production—to create high-impact videos that captivate and convert.",
        sections: [
          {
            title: "Our Production Capabilities",
            items: [
              "Corporate Videos: Showcase your company culture, mission, and values with a professionally produced corporate video.",
              "Promotional & Product Videos: Create buzz and drive sales with dynamic videos that highlight your products or services.",
              "Social Media Content: We produce short-form video content optimized for social media platforms to capture attention and boost engagement."
            ]
          }
        ]
      },
      fr: {
        title: "Production vidéo",
        headline: "Racontez votre histoire en vidéo",
        intro:
          "La vidéo est le média le plus efficace pour capter l’attention et susciter l’émotion. Nous prenons en charge l’ensemble du processus créatif pour produire des contenus à fort impact.",
        sections: [
          {
            title: "Nos expertises",
            items: [
              "Vidéos corporate : Valorisez votre culture, votre mission et vos valeurs avec un film institutionnel sur-mesure.",
              "Vidéos promotionnelles & produits : Stimulez vos ventes grâce à des vidéos dynamiques qui mettent en lumière vos offres.",
              "Contenus social media : Formats courts optimisés pour les réseaux sociaux afin de générer engagement et visibilité."
            ]
          }
        ]
      },
      it: {
        title: "Produzione video",
        headline: "Racconta la tua storia attraverso il video",
        intro:
          "Il video è il mezzo più efficace per coinvolgere ed emozionare il pubblico. Gestiamo ogni fase, dall’idea al montaggio finale, per creare contenuti di forte impatto.",
        sections: [
          {
            title: "Le nostre capacità produttive",
            items: [
              "Video corporate: Racconta cultura, missione e valori con un corporate video professionale.",
              "Video promozionali e di prodotto: Genera entusiasmo e vendite con contenuti dinamici focalizzati sulle tue offerte.",
              "Contenuti per social media: Produciamo video brevi ottimizzati per le piattaforme social con l’obiettivo di aumentare l’engagement."
            ]
          }
        ]
      },
      ar: {
        title: "إنتاج الفيديو",
        headline: "احكِ قصتك عبر فيديو مؤثر",
        intro:
          "يعد الفيديو الوسيلة الأكثر قوةً في سرد القصص وجذب الجمهور. نتولى جميع مراحل الإنتاج من الفكرة وكتابة النص إلى التصوير والمونتاج لابتكار محتوى بصري يجذب ويحوّل.",
        sections: [
          {
            title: "مجالات إنتاجنا",
            items: [
              "فيديوهات مؤسسية: أبرز ثقافة شركتك ورسالتها وقيمها بفيلم احترافي مصمم خصيصاً لك.",
              "فيديوهات ترويجية ومنتجات: اخلق حماساً وادفع المبيعات من خلال فيديوهات ديناميكية تبرز عروضك.",
              "محتوى لمنصات التواصل: نصمم فيديوهات قصيرة محسّنة للشبكات الاجتماعية لتعزيز الانتباه والتفاعل."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "ai-automation",
    translations: {
      en: {
        title: "AI Automation",
        headline: "Unlocking Efficiency with Intelligent Automation",
        intro:
          "Transform your business operations by leveraging the power of Artificial Intelligence. Our AI automation solutions are designed to streamline repetitive tasks, reduce human error, and free up your team to focus on strategic, high-value work. By automating key processes, you can significantly increase efficiency and drive productivity gains.",
        sections: [
          {
            title: "How We Can Help",
            items: [
              "Process Optimization: We analyze your workflows to identify the best opportunities for automation, from data entry and document processing to customer support.",
              "Intelligent Tools: We implement AI-powered tools like chatbots for 24/7 customer service, RPA (Robotic Process Automation) for administrative tasks, and predictive analytics for smarter decision-making.",
              "Data-Driven Insights: Our AI solutions can analyze vast amounts of data in real-time, providing actionable insights to help you forecast trends, understand customer behavior, and mitigate risks."
            ]
          }
        ]
      },
      fr: {
        title: "Automatisation par l’IA",
        headline: "Gagnez en efficacité grâce à l’intelligence artificielle",
        intro:
          "L’IA est un levier puissant pour automatiser les tâches répétitives, réduire les erreurs humaines et libérer du temps pour des missions à forte valeur ajoutée. Nous concevons des solutions sur-mesure adaptées à vos enjeux.",
        sections: [
          {
            title: "Notre accompagnement",
            items: [
              "Optimisation des processus : Analyse de vos workflows pour identifier les tâches automatisables (saisie, traitement documentaire, support client).",
              "Outils intelligents : Déploiement de chatbots, RPA et outils d’analytique prédictive pour accélérer la prise de décision.",
              "Insights pilotés par la donnée : Exploitation de vos données en temps réel pour anticiper les tendances, comprendre le comportement client et limiter les risques."
            ]
          }
        ]
      },
      it: {
        title: "Automazione con IA",
        headline: "Efficienza operativa grazie all’intelligenza artificiale",
        intro:
          "Sfrutta la potenza dell’IA per automatizzare attività ripetitive, ridurre gli errori e liberare il tuo team da lavori a basso valore. Progettiamo soluzioni su misura che favoriscono produttività e crescita.",
        sections: [
          {
            title: "Cosa possiamo fare per te",
            items: [
              "Ottimizzazione dei processi: Analizziamo i flussi di lavoro per individuare le opportunità di automazione (inserimento dati, gestione documenti, customer care).",
              "Strumenti intelligenti: Implementiamo chatbot h24, RPA e analytics predittivi per decisioni più rapide e informate.",
              "Insight guidati dai dati: Elaboriamo i tuoi dati in tempo reale per prevedere trend, capire il comportamento dei clienti e mitigare i rischi."
            ]
          }
        ]
      },
      ar: {
        title: "أتمتة الذكاء الاصطناعي",
        headline: "ارفع كفاءة عملك بأدوات ذكية",
        intro:
          "حوّل عملياتك التشغيلية بالاعتماد على الذكاء الاصطناعي. تهدف حلول الأتمتة لدينا إلى تبسيط المهام المتكررة، والحد من الأخطاء البشرية، وتمكين فريقك من التركيز على الأعمال الاستراتيجية ذات القيمة العالية.",
        sections: [
          {
            title: "كيف ندعمك",
            items: [
              "تحسين العمليات: نحلل سير العمل لتحديد أفضل الفرص للأتمتة، من إدخال البيانات ومعالجة الوثائق إلى دعم العملاء.",
              "أدوات ذكية: ننفذ روبوتات الدردشة على مدار الساعة، وحلول RPA، والتحليلات التنبؤية لدعم قراراتك.",
              "تحليلات تعتمد على البيانات: نستثمر البيانات الآنية لتقديم رؤى قابلة للتنفيذ تساعدك على توقع الاتجاهات وفهم سلوك العملاء وتقليل المخاطر."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "visa-mobility-programs",
    translations: {
      en: {
        title: "Visa & Mobility Programs",
        headline: "Seamless Immigration and Mobility Solutions for Morocco",
        intro:
          "Bringing international talent to Morocco or navigating your own move requires a clear understanding of the country's immigration laws. Our mobility experts specialize in managing the entire process for foreign professionals, ensuring a smooth and compliant transition into the Moroccan workforce.",
        sections: [
          {
            title: "Our Immigration Services Include",
            items: [
              "Work Permit (Autorisation de Travail): For most foreign nationals, securing a work permit is the first essential step. As the employer, you must initiate this process through the Ministry of Labor. We manage the application, which includes justifying the need for a foreign national and providing a valid employment contract.",
              "Long-Stay Visas: Once the work permit is approved, we guide your employees through obtaining the necessary long-stay visa from the Moroccan embassy or consulate in their country of residence.",
              "Residence Permit (Carte de Séjour): Upon arrival in Morocco, foreign nationals must apply for a residence permit within a short timeframe. We ensure this critical step is completed correctly, finalizing their legal right to live and work in the country.",
              "Compliance & Advisory: We keep you informed of all legal obligations for both the employer and the employee, ensuring full compliance with Moroccan immigration regulations throughout their employment."
            ]
          }
        ]
      },
      fr: {
        title: "Programmes visas & mobilité",
        headline: "Des démarches d’immigration fluides et conformes",
        intro:
          "Accueillir des talents internationaux ou s’installer soi-même au Maroc nécessite une maîtrise fine de la réglementation. Nos spécialistes gèrent l’ensemble des formalités pour assurer une transition sereine et conforme.",
        sections: [
          {
            title: "Nos prestations incluent",
            items: [
              "Autorisation de travail : Montage du dossier patronal auprès du Ministère du Travail, justification du recrutement et homogénéisation du contrat.",
              "Visas long séjour : Accompagnement pour l’obtention du visa auprès des consulats et ambassades marocaines.",
              "Carte de séjour : Gestion des démarches obligatoires dès l’arrivée au Maroc pour régulariser la situation du collaborateur.",
              "Veille et conformité : Information continue sur les obligations légales de l’employeur et du salarié afin de sécuriser toute la période d’emploi."
            ]
          }
        ]
      },
      it: {
        title: "Visti & programmi di mobilità",
        headline: "Soluzioni di immigrazione semplici e conformi in Marocco",
        intro:
          "Portare talenti internazionali in Marocco o trasferirsi nel Paese richiede una conoscenza approfondita delle normative. I nostri specialisti gestiscono l’intero iter per garantire un’integrazione rapida e regolare.",
        sections: [
          {
            title: "I nostri servizi di immigrazione",
            items: [
              "Permesso di lavoro: Prepariamo e seguiamo la pratica presso il Ministero del Lavoro, giustificando l’assunzione e curando il contratto.",
              "Visti di lungo soggiorno: Guidiamo i dipendenti nell’ottenimento del visto presso ambasciate e consolati marocchini.",
              "Carta di soggiorno: Supporto completo per l’ottenimento del permesso di soggiorno subito dopo l’arrivo in Marocco.",
              "Compliance e consulenza: Monitoriamo gli obblighi legali del datore di lavoro e del dipendente lungo tutto il rapporto di lavoro."
            ]
          }
        ]
      },
      ar: {
        title: "برامج التأشيرات والتنقل",
        headline: "حلول متكاملة للهجرة والتنقل نحو المغرب",
        intro:
          "يتطلب استقدام الكفاءات الدولية إلى المغرب أو الانتقال الشخصي فهماً دقيقاً للتشريعات المنظمة للهجرة. يتولى خبراؤنا إدارة العملية كاملة لضمان انتقال سلس ومتوافق مع القوانين.",
        sections: [
          {
            title: "تشمل خدماتنا",
            items: [
              "تصريح العمل: إعداد الملف لدى وزارة الشغل وتبرير توظيف الأجنبي مع توفير عقد عمل قانوني.",
              "التأشيرة طويلة الأمد: مواكبة الموظفين في الحصول على التأشيرة من السفارات والقنصليات المغربية.",
              "بطاقة الإقامة: استكمال إجراءات بطاقة الإقامة فور الوصول إلى المغرب لضمان الوضع القانوني.",
              "المتابعة القانونية: تزويدكم بكافة الالتزامات القانونية لكل من المشغل والموظف طوال مدة العمل."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "global-expansion",
    translations: {
      en: {
        title: "Global Expansion",
        headline: "Taking Your Business Beyond Borders",
        intro:
          "Expanding into international markets is a major step towards growth, but it comes with significant challenges, from navigating new laws to understanding local cultures. Our global expansion services provide the strategic guidance and operational support you need to enter new territories confidently and successfully.",
        sections: [
          {
            title: "Our Global Expansion Framework",
            items: [
              "Market Research & Entry Strategy: We conduct thorough market research to identify the most viable opportunities and help you develop a tailored market entry strategy, whether through exporting, joint ventures, or foreign direct investment.",
              "Cross-Border Compliance: We help you navigate the legal, tax, and regulatory complexities of each new market to ensure full compliance.",
              "Operational Setup: Our team can assist with the practical aspects of setting up operations abroad, from establishing a legal entity to connecting with local partners.",
              "Localization: We provide guidance on adapting your products, services, and marketing to meet the cultural expectations of your new audience."
            ]
          }
        ]
      },
      fr: {
        title: "Expansion internationale",
        headline: "Développez votre entreprise au-delà des frontières",
        intro:
          "Conquérir de nouveaux marchés est une étape majeure qui nécessite une stratégie solide et une exécution millimétrée. Nous vous accompagnons pour sécuriser chaque phase de votre internationalisation.",
        sections: [
          {
            title: "Notre cadre d’intervention",
            items: [
              "Études de marché & stratégie d’entrée : Identification des opportunités, choix du mode d’implantation (export, joint-venture, filiale).",
              "Conformité cross-border : Gestion des aspects juridiques, fiscaux et réglementaires dans chaque pays cible.",
              "Mise en place opérationnelle : Création d’entité, recherche de partenaires locaux et organisation logistique.",
              "Localisation : Adaptation de l’offre, du service client et de la communication aux spécificités culturelles locales."
            ]
          }
        ]
      },
      it: {
        title: "Espansione globale",
        headline: "Porta il tuo business oltre i confini nazionali",
        intro:
          "L’ingresso in nuovi mercati richiede una pianificazione accurata e competenze multidisciplinari. Offriamo supporto strategico e operativo per accompagnarti in ogni fase dell’espansione internazionale.",
        sections: [
          {
            title: "Il nostro approccio",
            items: [
              "Analisi dei mercati & strategia d’ingresso: Studio delle opportunità e definizione del percorso migliore (export, joint venture, investimento diretto).",
              "Compliance internazionale: Gestione degli aspetti legali, fiscali e normativi di ciascun Paese.",
              "Setup operativo: Costituzione di entità locali, partnership strategiche e coordinamento logistico.",
              "Localizzazione: Adattamento di prodotti, servizi e comunicazione alle esigenze culturali e linguistiche del mercato target."
            ]
          }
        ]
      },
      ar: {
        title: "التوسع الدولي",
        headline: "خطوة واثقة نحو أسواق عالمية جديدة",
        intro:
          "يمثل دخول الأسواق العالمية فرصة نمو كبيرة لكنه يحمل تحديات قانونية وثقافية وتشغيلية. نقدم لك الإرشاد الاستراتيجي والدعم العملي لضمان توسع ناجح وواثق.",
        sections: [
          {
            title: "إطار عملنا للتوسع",
            items: [
              "دراسة الأسواق واستراتيجية الدخول: تحليل الفرص وتحديد أنسب صيغ الدخول (تصدير، شراكات، استثمار مباشر).",
              "الامتثال الدولي: مرافقتك في الجوانب القانونية والضريبية والتنظيمية لكل سوق جديد.",
              "التجهيز التشغيلي: المساعدة في إنشاء الكيان القانوني، وبناء الشراكات المحلية، وتنظيم العمليات.",
              "التوطين: تعديل المنتجات والخدمات والرسائل التسويقية بما يلائم الثقافة والتوقعات المحلية."
            ]
          }
        ]
      }
    }
  }
];

export const serviceDetailsMap = serviceDetails.reduce<Record<string, ServiceDetail>>((acc, detail) => {
  acc[detail.slug] = detail;
  return acc;
}, {});

