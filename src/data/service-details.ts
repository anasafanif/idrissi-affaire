export interface ServiceDetail {
  slug: string;
  title: string;
  headline: string;
  intro: string;
  sections: Array<{
    title: string;
    description?: string;
    items?: string[];
  }>;
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "domiciliation",
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
  {
    slug: "company-creation",
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
  {
    slug: "accounting-tax",
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
  {
    slug: "payroll",
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
  {
    slug: "strategic-consulting",
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
  {
    slug: "branding-design",
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
  {
    slug: "web-development",
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
  {
    slug: "ads-social-media",
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
  {
    slug: "video-production",
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
  {
    slug: "ai-automation",
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
  {
    slug: "visa-mobility-programs",
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
  {
    slug: "global-expansion",
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
  }
];

export const serviceDetailsMap = serviceDetails.reduce<Record<string, ServiceDetail>>((acc, detail) => {
  acc[detail.slug] = detail;
  return acc;
}, {});

