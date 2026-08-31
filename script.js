(function () {
  "use strict";

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const isFine = window.matchMedia("(pointer: fine)").matches;

  const SKILLS = [
    { name: "HTML", desc: "The structure of every interface.", descAr: "بنية كل واجهة." },
    { name: "CSS", desc: "The craft of layout, type and motion.", descAr: "إتقان التخطيط والطباعة والحركة." },
    { name: "JavaScript", desc: "The language of interactivity.", nameAr: "جافاسكريبت", descAr: "لغة التفاعل." },
    { name: "TypeScript", desc: "JavaScript, made predictable.", nameAr: "تايبسكريبت", descAr: "جافاسكريبت بقواعد واضحة." },
    { name: "React", desc: "Component architecture for modern UI.", descAr: "هندسة المكوّنات لواجهات عصرية." },
    { name: "Next.js", desc: "Framework-grade React for the web.", descAr: "React بمستوى إطار عمل للويب." },
    { name: "Tailwind", desc: "Rapid, consistent styling at scale.", descAr: "تنسيق سريع ومتسق على نطاق واسع." },
    { name: "Git", desc: "Version control and clean workflows.", descAr: "إدارة الإصدارات وسير عمل نظيف." },
    { name: "APIs", desc: "Connecting interfaces to real data.", descAr: "ربط الواجهات ببيانات حقيقية." },
    { name: "Performance", desc: "Speed as a feature, not an afterthought.", nameAr: "الأداء", descAr: "السرعة ميزة لا فكرة لاحقة." },
    { name: "Responsive", desc: "One interface, every screen.", nameAr: "التجاوب", descAr: "واجهة واحدة لكل الشاشات." },
    { name: "UX", desc: "Interfaces people understand.", nameAr: "تجربة المستخدم", descAr: "واجهات يفهمها الناس." }
  ];

  const GH = "https://github.com/ehabmahmoudramadan-crypto";

  const PROJECTS = [
    {
      num: "01",
      title: "B2B Platform",
      type: "Enterprise B2B / Full Stack",
      source: GH + "/B2B-Platform",
      live: "https://ehabmahmoudramadan-crypto.github.io/B2B-Platform/",
      tagline:
        "An enterprise-grade B2B procurement platform — ordering, e-wallet payments, e-invoicing and multi-role dashboards built to scale.",
      problem:
        "Business buyers needed a complete procurement product — not just a storefront. Orders, quotes, wallets, invoicing and delivery all had to work as one system.",
      approach:
        "A modular monorepo with clear domain boundaries: orders, wallet, invoicing, delivery, notifications and reporting as separate, testable modules.",
      challenge:
        "Coordinating a full backend (NestJS, PostgreSQL, Redis, RabbitMQ), a web frontend and a Flutter mobile app without losing consistency.",
      solution:
        "REST APIs with audit logging, an e-wallet engine, ZATCA-compliant e-invoicing, and push/SMS/email notifications wired across every role.",
      result:
        "A complete multi-role B2B platform from API to mobile — a strong proof of full-stack ownership end to end.",
      role: "Full-stack architecture, backend services, e-wallet & invoicing, integration.",
      tech: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "RabbitMQ", "Flutter", "Docker"]
    },
    {
      num: "02",
      title: "Busly",
      type: "Transport Platform / Full Stack",
      source: GH + "/busly",
      tagline:
        "A smart transport booking platform for university students — ticket booking, live bus tracking and role-based dashboards.",
      problem:
        "University transport was fragmented and slow to manage. Students, owners and admins each needed a clear, role-specific workflow.",
      approach:
        "A full-stack product with an Express API and three tailored dashboards — student, owner and admin — on one shared data model.",
      challenge:
        "Live bus-station tracking with frequent data refresh, plus subscriptions, JWT auth and a full REST API held together cleanly.",
      solution:
        "JWT httpOnly auth, a ticket-booking engine, monthly subscriptions and 10-second live tracking auto-refresh across all dashboards.",
      result:
        "A working bilingual transport platform — backend, auth, database and interface shipped as one product.",
      role: "Full-stack development, REST API, auth, dashboards and data model.",
      tech: ["Node.js", "Express", "SQLite", "JWT", "JavaScript", "HTML/CSS"]
    },
    {
      num: "03",
      title: "n8n B2B Platform",
      type: "Multi-vendor B2B / Automation",
      source: GH + "/n8n-b2b-platform",
      live: "https://ehabmahmoudramadan-crypto.github.io/n8n-b2b-platform/",
      tagline:
        "A multi-vendor B2B platform with n8n workflow automation — vendor onboarding, tiered pricing and auto-invoicing.",
      problem:
        "Managing vendors, tiered product pricing and invoicing by hand is slow and error-prone — automation had to do the heavy lifting.",
      approach:
        "A TypeScript backend on PostgreSQL/Prisma with tenant isolation, plus n8n automations driving onboarding, orders and low-stock alerts.",
      challenge:
        "Splitting logic between a robust API and an automation engine while keeping a single source of truth.",
      solution:
        "Role-based access (superadmin/vendor/staff), quantity-tiered pricing, auto-invoicing and reusable n8n workflow JSONs with a Docker setup.",
      result:
        "A complete multi-tenant vendor platform with real automation workflows — backend, frontend and data model in one repo.",
      role: "Full-stack development, automation workflows, tenants & role-based access.",
      tech: ["Node.js", "Express", "TypeScript", "Prisma", "PostgreSQL", "Redis", "n8n", "Docker"]
    },
    {
      num: "04",
      title: "WareSys",
      type: "Inventory System / React",
      source: GH + "/waresys",
      live: "https://ehabmahmoudramadan-crypto.github.io/waresys/",
      tagline:
        "A warehouse and inventory management system — dashboards, stock alerts, invoices and profit reports in React.",
      problem:
        "Warehouses juggle products, suppliers, customers and invoices. Without a clear dashboard, stock and profit get lost in spreadsheets.",
      approach:
        "A client-side ERP built with React and Vite — dashboards, CRUD, invoicing and reporting as modular, reusable components.",
      challenge:
        "Rendering live sales/purchase charts and building interactive invoices with instant auto-calculation.",
      solution:
        "Recharts dashboards, low-stock alerts, capacity tracking, invoice builders with auto-calculations and full supplier/customer management.",
      result:
        "A polished React SPA that turns inventory chaos into an organized, measurable system.",
      role: "Frontend architecture, dashboards, data visualization and invoice logic.",
      tech: ["React", "Vite", "React Router", "Recharts", "Context API", "JavaScript"]
    },
    {
      num: "05",
      title: "LearnHub",
      type: "Learning Platform / Web App",
      source: GH + "/LearnHub",
      live: "https://ehabmahmoudramadan-crypto.github.io/LearnHub/",
      tagline:
        "A complete Arabic learning platform — course catalog, lesson viewer, student & instructor dashboards and a forum.",
      problem:
        "Online courses need more than a landing page — they need enrollment, lessons, dashboards and a community, all coherent.",
      approach:
        "A multi-page app with separate flows for students and instructors, backed by a structured course-data layer.",
      challenge:
        "Connecting courses, lessons, checkout, two dashboards and a forum into one clear experience.",
      solution:
        "Course detail pages, a guided checkout, a lesson viewer, instructor dashboard and login/register — all RTL Arabic.",
      result:
        "A full learning product — from browsing courses to teaching them — delivered as a cohesive web app.",
      role: "Frontend development, page architecture and course-data integration.",
      tech: ["HTML", "CSS", "JavaScript", "Data layer"]
    },
    {
      num: "06",
      title: "AegisOps Sentinel",
      type: "Security Dashboard / SIEM",
      source: GH + "/AegisOps-Sentinel",
      live: "https://ehabmahmoudramadan-crypto.github.io/AegisOps-Sentinel/",
      tagline:
        "An interactive SIEM/SOC dashboard visualizing network baselines, live threat logs and attack maps.",
      problem:
        "Security telemetry is dense and hard to read. Analysts needed signals turned into something visual, live and explorable.",
      approach:
        "A Canvas-driven visualization layer simulating Wireshark PCAPs and Scapy telemetry — no server required.",
      challenge:
        "Rendering real-time-ish threat data and an interactive terminal with protocol LOCKDOWN mode smoothly in the browser.",
      solution:
        "Network-traffic baselines, live threat logs, a cyber attack map, an interactive terminal and protocol lockdown toggles.",
      result:
        "A recognizable SIEM/SOC console that makes cybersecurity monitoring tangible and interactive.",
      role: "Frontend development, data visualization and interactive terminal UI.",
      tech: ["HTML", "CSS", "JavaScript", "Canvas"]
    },
    {
      num: "07",
      title: "E-Commerce Store",
      type: "E-commerce / Storefront",
      source: GH + "/Professional-E-Commerce-Web-Application",
      live: "https://ehabmahmoudramadan-crypto.github.io/Professional-E-Commerce-Web-Application/",
      tagline:
        "A modern Arabic e-commerce storefront engineered for speed, clean code and a smooth shopping experience.",
      problem:
        "Storefronts get slow and messy as they grow. This one had to be fast-loading and clean from the ground up.",
      approach:
        "Vanilla-first build with clean, error-free code prioritizing load speed and a fluid browsing flow.",
      challenge:
        "Delivering a rich storefront — products, browsing and layout — with zero bloat so it loads instantly.",
      solution:
        "A streamlined, well-structured storefront where fast rendering and clean markup are first-class citizens.",
      result:
        "A quick, tidy shopping experience that stays snappy across devices.",
      role: "Frontend development, layout and performance.",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      num: "08",
      title: "Mehrab",
      type: "Muslim Dashboard / Web App",
      source: GH + "/mehrab",
      live: "https://ehabmahmoudramadan-crypto.github.io/mehrab/",
      tagline:
        "A smart Muslim dashboard — prayer times, a digital tasbih, verse of the day and an interactive Quran.",
      problem:
        "Daily spiritual tools were scattered across apps. One calm, focused interface could bring prayer times, dhikr and Quran together.",
      approach:
        "A single-page app with location-based prayer times, a goal-aware tasbih counter and an interactive Quran browser.",
      challenge:
        "Blending live time-based data with an offline-friendly, fully RTL Arabic interface.",
      solution:
        "Prayer-time countdowns, a custom-goal digital tasbih, daily verse with tafsir and a bookmarkable Quran — responsive and RTL.",
      result:
        "A serene, practical dashboard that consolidates day-to-day faith tools into one place.",
      role: "Frontend development, UI and interactive features.",
      tech: ["HTML", "CSS", "Tailwind", "JavaScript"]
    },
    {
      num: "09",
      title: "Coffee House",
      type: "Brand Website / UI",
      source: GH + "/coffee-house-website",
      live: "https://ehabmahmoudramadan-crypto.github.io/coffee-house-website/",
      tagline:
        "A responsive coffee-brand website — product collections, specialty stories and business services, all in clean CSS.",
      problem:
        "A coffee brand needed an identity online — not just products, but its story and business offerings presented with personality.",
      approach:
        "A pure HTML/CSS build with no heavy framework — fast, graceful and brand-led.",
      challenge:
        "Conveying warmth and craftsmanship while staying structured and responsive.",
      solution:
        "Product collections, specialty-coffee stories and services like office subscriptions, catering and wholesale in one cohesive site.",
      result:
        "A polished brand site that sells both the product and the experience.",
      role: "Frontend development and responsive design.",
      tech: ["HTML", "CSS"]
    },
    {
      num: "10",
      title: "Lamsat Aya",
      type: "Brand Website / UI",
      source: GH + "/lamsat-aya",
      tagline:
        "The official website for Lamsat Aya — a brand landing page with a custom SVG logo and photo gallery.",
      problem:
        "A new brand needed an online home that felt official, polished and representative.",
      approach:
        "A clean single-page site with a custom SVG logo and a focused visual gallery.",
      challenge:
        "Establishing brand presence with minimal content but maximum polish.",
      solution:
        "A refined landing page, company info and imagery — lightweight and easy to maintain.",
      result:
        "A credible official web presence that represents the brand well.",
      role: "Frontend development, branding and layout.",
      tech: ["HTML", "CSS", "JavaScript", "SVG"]
    },
    {
      num: "11",
      title: "Chirpy",
      type: "Social UI / Bootstrap",
      source: GH + "/chirpy-twitter-app",
      live: "https://ehabmahmoudramadan-crypto.github.io/chirpy-twitter-app/",
      tagline:
        "A Twitter-style social app UI — feed, trends, profile, messages and auth screens built with Bootstrap.",
      problem:
        "Building social UI means many screens sharing one visual language and feel.",
      approach:
        "A component-consistent set of pages — feed, explore, profile, messages, login and register — on Bootstrap.",
      challenge:
        "Keeping every screen coherent and responsive as a single cohesive product.",
      solution:
        "A full set of social screens with consistent styling, iconography and dummy-data flows.",
      result:
        "A believable social-app interface covering the whole user journey.",
      role: "Frontend development and UI screens.",
      tech: ["HTML", "CSS", "Bootstrap", "Bootstrap Icons"]
    },
    {
      num: "12",
      title: "AutoPlan",
      type: "Calculator UI / Bootstrap",
      source: GH + "/autoplan-car-calculator",
      live: "https://ehabmahmoudramadan-crypto.github.io/autoplan-car-calculator/",
      tagline:
        "A car-installments calculator — vehicle inputs turned into an instant monthly-payment breakdown.",
      problem:
        "Car buyers need to see what a purchase actually costs per month before committing.",
      approach:
        "A focused calculator UI where car type, price, down payment and term shape the result at once.",
      challenge:
        "Making the numbers legible and the flow obvious in a compact interface.",
      solution:
        "An instant monthly-installment and interest view driven by the user's inputs, styled with Bootstrap.",
      result:
        "A simple, clear tool that translates pricing into an immediate monthly figure.",
      role: "Frontend development and UI logic.",
      tech: ["HTML", "CSS", "Bootstrap", "Bootstrap Icons"]
    },
    {
      num: "13",
      title: "TaskFlow",
      type: "Productivity UI / Bootstrap",
      source: GH + "/taskflow-todo-app",
      live: "https://ehabmahmoudramadan-crypto.github.io/taskflow-todo-app/",
      tagline:
        "A to-do list web app — dashboards, today and overdue views, and a searchable task list with stats.",
      problem:
        "Task apps fail when they can't show you what matters — today, overdue and overall progress.",
      approach:
        "A dashboard-first to-do UI with stats and chart views plus a filterable full task list.",
      challenge:
        "Balancing overview dashboards with a practical, scannable task list.",
      solution:
        "Dashboard stats/charts, today and overdue views, and a sortable, filterable task list on Bootstrap.",
      result:
        "A clean productivity interface that surfaces priorities at a glance.",
      role: "Frontend development and UI screens.",
      tech: ["HTML", "CSS", "Bootstrap", "Bootstrap Icons"]
    }
  ];

  const html = document.documentElement;

  const PROJECTS_AR = [
    {
      title: "منصة B2B",
      type: "تعاملات تجارية / تطوير متكامل",
      source: GH + "/B2B-Platform",
      tagline:
        "منصة تعاملات تجارية من فئة المؤسسات — طلبات ومدفوعات محفظة إلكترونية وفواتير إلكترونية ولوحات تحكم متعددة الأدوار مبنية للتوسّع.",
      problem:
        "المشترون التجاريون احتاجوا منتج شراء متكامل — لا مجرد متجر. الطلبات وعروض الأسعار والمحافظ والفواتير والتوصيل كلها يجب أن تعمل كنظام واحد.",
      approach:
        "بنية وحدات بواجهات نطاقات واضحة: الطلبات والمحفظة والفواتير والتوصيل والإشعارات والتقارير كوحدات منفصلة وقابلة للاختبار.",
      challenge:
        "تنسيق خلفية كاملة (NestJS وPostgreSQL وRedis وRabbitMQ) مع واجهة ويب وتطبيق فلاتر للهاتف دون فقدان الاتساق.",
      solution:
        "واجهات REST مع تدقيق، ومحرك محفظة إلكترونية، وفواتير متوافقة مع ZATCA، وإشعارات push وSMS وبريد لكل الأدوار.",
      result:
        "منصة B2B متكاملة متعددة الأدوار من API إلى الهاتف — إثبات قوي لتملك التطوير المتكامل من النهاية إلى النهاية.",
      role: "هندسة متكاملة، خدمات خلفية، محفظة إلكترونية وفواتير، دمج.",
      tech: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "RabbitMQ", "Flutter", "Docker"]
    },
    {
      title: "بسلي",
      type: "منصة نقل / تطوير متكامل",
      source: GH + "/busly",
      tagline:
        "منصة حجز نقل ذكية لطلاب الجامعات — حجز تذاكر وتتبع حي للمحطات ولوحات تحكم متعددة الأدوار.",
      problem:
        "النقل الجامعي كان مجزأً وبطيئًا في الإدارة. الطلاب والمالكون والمشرفون كلٌّ يحتاج سير عمل واضحًا خاصًا بدوره.",
      approach:
        "منتج متكامل بواجهة Express API وثلاث لوحات تحكم مخصصة — طالب ومالك ومشرف — على نموذج بيانات واحد مشترك.",
      challenge:
        "تتبع حي للمحطات مع تحديث متكرر، إضافة للاشتراكات ومصادقة JWT وواجهة REST كاملة تُحفظ بشكل نظيف.",
      solution:
        "مصادقة JWT باستخدام httpOnly، ومحرك حجز تذاكر، واشتراكات شهرية، وتحديث تلقائي للتتبع الحي كل 10 ثوانٍ عبر كل اللوحات.",
      result:
        "منصة نقل متكاملة ثنائية اللغة — الخلفية والمصادقة وقاعدة البيانات والواجهة تُطلق كمنتج واحد.",
      role: "تطوير متكامل، REST API، مصادقة، لوحات تحكم ونموذج بيانات.",
      tech: ["Node.js", "Express", "SQLite", "JWT", "JavaScript", "HTML/CSS"]
    },
    {
      title: "منصة n8n B2B",
      type: "تعاملات متعددة البائعين / أتمتة",
      source: GH + "/n8n-b2b-platform",
      tagline:
        "منصة B2B متعددة البائعين مع أتمتة سير عمل عبر n8n — تأهيل البائعين وتسعير متدرج وفوترة تلقائية.",
      problem:
        "إدارة البائعين والتسعير المتدرج والفواتير يدويًا بطيئة وعرضة للخطأ — كان على الأتمتة أن تحمل العبء الأكبر.",
      approach:
        "خلفية TypeScript على PostgreSQL/Prisma مع عزل مستأجرين، إضافة لأتمتات n8n تقود التأهيل والطلبات وتنبيهات انخفاض المخزون.",
      challenge:
        "تقسيم المنطق بين API قوي ومحرك أتمتة مع الحفاظ على مصدر حقيقة واحد.",
      solution:
        "وصول قائم على الأدوار (مشرف/بائع/موظف)، وتسعير متدرج حسب الكمية، وفوترة تلقائية، وسير عمل n8n قابلة للاستيراد مع إعداد Docker.",
      result:
        "منصة بائعين متعددة المستأجرين كاملة مع سير عمل أتمتة حقيقي — خلفية وواجهة ونموذج بيانات في مستودع واحد.",
      role: "تطوير متكامل، سير عمل الأتمتة، المستأجرون والوصول القائم على الأدوار.",
      tech: ["Node.js", "Express", "TypeScript", "Prisma", "PostgreSQL", "Redis", "n8n", "Docker"]
    },
    {
      title: "ويرسي",
      type: "نظام مخزون / React",
      source: GH + "/waresys",
      tagline:
        "نظام لإدارة المخازن والمخزون — لوحات تحكم وتنبيهات مخزون وفواتير وتقارير أرباح في React.",
      problem:
        "المخازن تتولى المنتجات والموردين والعملاء والفواتير. دون لوحة تحكم واضحة، يضيع المخزون والأرباح في الجداول.",
      approach:
        "نظام ERP من جهة العميل بُني بـ React وVite — لوحات وإضافة/تعديل/حذف وفوترة وتقارير كمكوّنات وحدات قابلة لإعادة الاستخدام.",
      challenge:
        "عرض رسوم بيانية حية للبيع/الشراء وبناء فواتير تفاعلية مع حساب تلقائي فوري.",
      solution:
        "لوحات Recharts، وتنبيهات انخفاض المخزون، وتتبع السعة، وبناة فواتير بحساب تلقائي وإدارة كاملة للموردين والعملاء.",
      result:
        "تطبيق React SPA أنيق يحوّل فوضى المخزون إلى نظام منظم وقابل للقياس.",
      role: "هندسة الواجهة الأمامية، لوحات التحكم، تصوير البيانات ومنطق الفواتير.",
      tech: ["React", "Vite", "React Router", "Recharts", "Context API", "JavaScript"]
    },
    {
      title: "ليرن هب",
      type: "منصة تعليمية / تطبيق ويب",
      source: GH + "/LearnHub",
      tagline:
        "منصة تعليمية عربية متكاملة — كتالوج دورات وعارض دروس ولوحات تحكم للطالب والمدرّس ومنتدى.",
      problem:
        "الدورات عبر الإنترنت تحتاج أكثر من صفحة هبوط — تحتاج تسجيلًا ودروسًا ولوحات تحكم ومجتمعًا كلها متناسقة.",
      approach:
        "تطبيق متعدد الصفحات بتدفقات منفصلة للطلاب والمدرّسين، مدعوم بطبقة بيانات دورات منظمة.",
      challenge:
        "ربط الدورات والدروس والدفع ولوحتي تحكم ومنتدى في تجربة واحدة واضحة.",
      solution:
        "صفحات تفاصيل الدورات، ودفع موجّه، وعارض دروس، ولوحة تحكم مدرّس وتسجيل — كلها بواجهة عربية RTL.",
      result:
        "منتج تعليمي كامل — من تصفح الدورات إلى تدريسها — يُقدَّم كتطبيق ويب مترابط.",
      role: "تطوير الواجهة الأمامية، هندسة الصفحات ودمج بيانات الدورات.",
      tech: ["HTML", "CSS", "JavaScript", "طبقة بيانات"]
    },
    {
      title: "إيجيس سنتينل",
      type: "لوحة أمان / SIEM",
      source: GH + "/AegisOps-Sentinel",
      tagline:
        "لوحة SIEM/SOC تفاعلية تصور خطوط الأساس للشبكة وسجلات التهديدات الحية وخرائط الهجمات.",
      problem:
        "بيانات الأمان كثيفة وصعبة القراءة. المحللون احتاجوا إشارات تُحوَّل إلى شيء بصري حي وقابل للاستكشاف.",
      approach:
        "طبقة تصور مبنية بـ Canvas تحاكي حزم Wireshark وبيانات Scapy — دون الحاجة لخادم.",
      challenge:
        "عرض بيانات تهديدات شبه حية وطرفية تفاعلية مع وضع قفل بروتوكول LOCKDOWN بسلاسة في المتصفح.",
      solution:
        "خطوط أساس لحركة الشبكة، وسجلات تهديدات حية، وخريطة هجمات سيبرانية، وطرفية تفاعلية ومفاتيح قفل البروتوكولات.",
      result:
        "كونسول SIEM/SOC معروف يجعل مراقبة الأمن السيبراني واقعية وتفاعلية.",
      role: "تطوير الواجهة الأمامية، تصوير البيانات وواجهة طرفية تفاعلية.",
      tech: ["HTML", "CSS", "JavaScript", "Canvas"]
    },
    {
      title: "متجر إلكتروني",
      type: "تجارة إلكترونية / واجهة متجر",
      source: GH + "/Professional-E-Commerce-Web-Application",
      tagline:
        "متجر إلكتروني عربي عصري مهندَس للسرعة وكود نظيف وتجربة تسوق سلسة.",
      problem:
        "المتاجر تصبح بطيئة وفوضوية مع نموّها. هذا المتجر كان عليه أن يكون سريع التحميل ونظيفًا من الأساس.",
      approach:
        "بناء يعتمد الجافاسكريبت الأصلي بكود نظيف خالٍ من الأخطاء يعطي أولوية لسرعة التحميل وتدفق تصفح انسيابي.",
      challenge:
        "تقديم متجر غني — منتجات وتصفح وتخطيط — دون أي تضخم ليكون التحميل فوريًا.",
      solution:
        "متجر مبسّط ومنظم جيدًا ترتفع فيه سرعة العرض والكود النظيف إلى مرتبة الخيار الأول.",
      result:
        "تجربة تسوق سريعة ومرتبة تبقى مرنة عبر الأجهزة.",
      role: "تطوير الواجهة الأمامية، التخطيط والأداء.",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "محراب",
      type: "لوحة مسلم / تطبيق ويب",
      source: GH + "/mehrab",
      tagline:
        "لوحة المسلم الذكية — أوقات الصلاة ومسبحة رقمية وآية اليوم ومصحف تفاعلي.",
      problem:
        "أدوات العبادة اليومية كانت موزعة عبر تطبيقات متعددة. واجهة واحدة هادئة ومركّزة يمكن أن تجمع أوقات الصلاة والذكر والقرآن معًا.",
      approach:
        "تطبيق صفحة واحدة بأوقات صلاة مبنية على الموقع، ومسبحة مدركة للأهداف، ومتصفح قرآن تفاعلي.",
      challenge:
        "مزج بيانات حية معتمدة على الوقت مع واجهة عربية RTL كاملة تعمل دون اتصال.",
      solution:
        "عدّادات تنازلية لأوقات الصلاة، ومسبحة رقمية بهدف مخصص، وآية يوم مع تفسير وترجمة، ومتصفح قرآن قابل للحفظ — متجاوب وRTL.",
      result:
        "لوحة هادئة وعملية تجمع أدوات الإيمان اليومية في مكان واحد.",
      role: "تطوير الواجهة الأمامية، الواجهة والميزات التفاعلية.",
      tech: ["HTML", "CSS", "Tailwind", "JavaScript"]
    },
    {
      title: "كوفر هاوس",
      type: "موقع علامة تجارية / واجهة",
      source: GH + "/coffee-house-website",
      tagline:
        "موقع قهوة متجاوب — مجموعات منتجات وقصص متخصصة وخدمات أعمال بصيغة CSS نظيفة.",
      problem:
        "علامة قهوة تحتاج هوية عبر الإنترنت — لا مجرد منتجات، بل قصتها وعروض أعمالها مقدّمة بشخصية.",
      approach:
        "بناء HTML/CSS خالص دون إطار ثقيل — سريع وأنيق وموجّه بالعلامة.",
      challenge:
        "إيصال الدفء والحرفية مع البقاء منظمًا ومتجاوبًا.",
      solution:
        "مجموعات منتجات، وقصص قهوة متخصصة، وخدمات مثل اشتراكات المكاتب والتجهيزات والبيع بالجملة في موقع واحد مترابط.",
      result:
        "موقع علامة أنيق يبيع المنتج والتجربة معًا.",
      role: "تطوير الواجهة الأمامية والتجاوب.",
      tech: ["HTML", "CSS"]
    },
    {
      title: "لمسة آية",
      type: "موقع علامة تجارية / واجهة",
      source: GH + "/lamsat-aya",
      tagline:
        "الموقع الرسمي لماركة لمسة آية — صفحة هبوط بشعار SVG مخصص ومعرض صور.",
      problem:
        "ماركة جديدة احتاجت موطنًا إلكترونيًا يبدو رسميًا ومصقولًا وموثوقًا.",
      approach:
        "موقع صفحة واحدة نظيف بشعار SVG مخصص ومعرض بصري مركّز.",
      challenge:
        "تأسيس حضور للماركة بمحتوى بسيط لكن بأقصى إتقان.",
      solution:
        "صفحة هبوط راقية ومعلومات عن الماركة وصور — خفيفة وسهلة الصيانة.",
      result:
        "حضور ويب رسمي موثوق يمثّل الماركة جيدًا.",
      role: "تطوير الواجهة الأمامية، العلامة والتخطيط.",
      tech: ["HTML", "CSS", "JavaScript", "SVG"]
    },
    {
      title: "تشيربي",
      type: "واجهة اجتماعية / Bootstrap",
      source: GH + "/chirpy-twitter-app",
      tagline:
        "واجهة تطبيق اجتماعي بأسلوب تويتر — موجز واتجاهات وملف ورسائل وشاشات تسجيل مبنية بـ Bootstrap.",
      problem:
        "بناء واجهة اجتماعية يعني شاشات كثيرة تتشارك لغة بصرية وإحساسًا واحدًا.",
      approach:
        "مجموعة صفحات متسقة المكوّنات — موجز واستكشاف وملف ورسائل وتسجيل — على Bootstrap.",
      challenge:
        "إبقاء كل شاشة متماسكة ومتجاوبة كمنتج واحد مترابط.",
      solution:
        "مجموعة كاملة من شاشات التواصل مع تنسيق وأيقونات وتدفقات بيانات تجريبية متسقة.",
      result:
        "واجهة اجتماعية قابلة للتصديق تغطي رحلة المستخدم كلها.",
      role: "تطوير الواجهة الأمامية وشاشات الواجهة.",
      tech: ["HTML", "CSS", "Bootstrap", "Bootstrap Icons"]
    },
    {
      title: "أوتو بلان",
      type: "واجهة حاسبة / Bootstrap",
      source: GH + "/autoplan-car-calculator",
      tagline:
        "حاسبة أقساط السيارات — مدخلات المركبة تتحول إلى تفصيل فوري للأقساط الشهرية.",
      problem:
        "مشترو السيارات يحتاجون رؤية تكلفة الشراء الفعلية شهريًا قبل الالتزام.",
      approach:
        "واجهة حاسبة مركّزة حيث يحدد نوع السيارة والسعر والدفعة المقدمة والمدة النتيجة مباشرة.",
      challenge:
        "جعل الأرقام مقروءة والتدفق واضحًا في واجهة مدمجة.",
      solution:
        "عرض فوري للقسط الشهري والفائدة مدفوع بمدخلات المستخدم، منسق بـ Bootstrap.",
      result:
        "أداة بسيطة وواضحة تترجم التسعير إلى رقم شهري مباشر.",
      role: "تطوير الواجهة الأمامية ومنطق الواجهة.",
      tech: ["HTML", "CSS", "Bootstrap", "Bootstrap Icons"]
    },
    {
      title: "تاسك فلو",
      type: "واجهة إنتاجية / Bootstrap",
      source: GH + "/taskflow-todo-app",
      tagline:
        "تطبيق مهام على الويب — لوحات تحكم وعرض اليوم والمتأخر وقائمة مهام قابلة للبحث مع إحصائيات.",
      problem:
        "تطبيقات المهام تفشل عندما لا تعرض ما يهم — اليوم والمتأخر والتقدم الكلي.",
      approach:
        "واجهة مهام تعطي الأولوية للوحة التحكم مع إحصائيات ورسوم إضافة لقائمة مهام كاملة قابلة للتصفية.",
      challenge:
        "الموازنة بين لوحات النظرة العامة وقائمة مهام عملية قابلة للمسح السريع.",
      solution:
        "إحصائيات ورسوم لوحة التحكم، وعرض اليوم والمتأخر، وقائمة مهام قابلة للفرز والتصفية على Bootstrap.",
      result:
        "واجهة إنتاجية نظيفة تُبرز الأولويات بنظرة واحدة.",
      role: "تطوير الواجهة الأمامية وشاشات الواجهة.",
      tech: ["HTML", "CSS", "Bootstrap", "Bootstrap Icons"]
    }
  ];

  const T = {
    en: {
      skip: "Skip to content",
      "nav-home": "Home",
      "nav-about": "About",
      "nav-projects": "Projects",
      "nav-skills": "Skills",
      "nav-journey": "Journey",
      "nav-contact": "Contact",
      "nav-talk": "Let's talk ↗",
      "lang-title": "AR — Switch to Arabic",
      "lang-aria": "Switch to Arabic",
      "hero-eyebrow": "Frontend developer",
      "hero-desc":
        "I build modern, fast and interactive web experiences that turn ideas into useful digital products.",
      "hero-cta-work": "View my work ↗",
      "hero-talk": "Let's talk ↗",
      "hero-meta-focus": "FOCUS / FRONTEND ENGINEERING",
      "hero-meta-ui": "UI · INTERACTION · PERFORMANCE",
      avail: "AVAILABLE FOR OPPORTUNITIES",
      "scroll-up": "SCROLL",
      "scroll-down": "DOWN",
      "tk-frontend": "Frontend developer",
      "tk-ui": "UI engineering",
      "tk-interaction": "Interaction design",
      "tk-perf": "Performance",
      "tk-clean": "Clean code",
      "sec-about": "01 / ABOUT",
      "about-note": "CAIRO, EGYPT",
      "about-l1": "Frontend is",
      "about-l2": "my <em class=\"accent-ink\">main</em> language.",
      "about-p1":
        "I focus on frontend engineering and interactive web experiences — interfaces that are fast, responsive and built to be understood. My day-to-day lives in <strong>HTML, CSS, JavaScript, TypeScript, React, Next.js and Tailwind CSS</strong>.",
      "about-p2":
        "But I don't work in isolation. I collaborate with a technical team that covers <strong>backend development, databases and data analysis</strong> — so the work doesn't stop at the interface. Together we build complete products.",
      "about-link": "See what that produces →",
      "about-col-work": "I WORK WITH",
      "about-col-team": "THE TEAM EXTENDS",
      "chip-backend": "Backend",
      "chip-db": "Databases",
      "chip-data": "Data analysis",
      "about-quote":
        "I engineer the interface. The team engineers the system. Together we ship the product.",
      "sec-system": "02 / THE SYSTEM",
      "eco-note": "ONE SPECIALTY · ONE TEAM",
      "eco-title": "The work doesn't stop at the interface.",
      "eco-sub": "Frontend is my specialty. The team expands the product's capability.",
      "eco-core-tag": "SPECIALTY",
      "eco-core-role": "FRONTEND",
      "eco-n1-name": "BACKEND",
      "eco-n1-sub": "APIs · services · logic",
      "eco-n2-name": "DATABASE",
      "eco-n2-sub": "Storage · modeling · integrity",
      "eco-n3-name": "DATA ANALYSIS",
      "eco-n3-sub": "Turning data into decisions",
      "sec-skills": "03 / SKILLS",
      "skills-note": "TOOLS OF THE CRAFT",
      "skills-word": "FRONTEND",
      "skill-js": "JavaScript",
      "skill-ts": "TypeScript",
      "skill-perf": "Performance",
      "skill-resp": "Responsive",
      "skill-ux": "UX",
      "sec-projects": "04 / PROJECTS",
      "proj-note": "SELECTED WORK · OPEN A CASE STUDY",
      "proj-hint": "Click a project to read the full case study",
      "ptype-1": "ENTERPRISE B2B / FULL STACK",
      "ptype-2": "TRANSPORT PLATFORM / FULL STACK",
      "ptype-3": "MULTI-VENDOR B2B / AUTOMATION",
      "ptype-4": "INVENTORY SYSTEM / REACT",
      "ptype-5": "LEARNING PLATFORM / WEB APP",
      "ptype-6": "SECURITY DASHBOARD / SIEM",
      "ptype-7": "E-COMMERCE / STOREFRONT",
      "ptype-8": "MUSLIM DASHBOARD / WEB APP",
      "ptype-9": "BRAND WEBSITE / UI",
      "ptype-10": "BRAND WEBSITE / UI",
      "ptype-11": "SOCIAL UI / BOOTSTRAP",
      "ptype-12": "CALCULATOR UI / BOOTSTRAP",
      "ptype-13": "PRODUCTIVITY UI / BOOTSTRAP",
      "p-open": "OPEN ↗",
      "sec-journey": "05 / JOURNEY",
      "journey-note": "A CONTINUOUS BUILD",
      "mile-h1": "START",
      "mile-p1": "The decision to build for the web. Curious, self-driven, committed.",
      "mile-h2": "LEARNING",
      "mile-p2": "HTML, CSS and JavaScript taken seriously — the fundamentals before the frameworks.",
      "mile-h3": "PROJECTS",
      "mile-p3": "First real builds and first real constraints — interfaces that had to work for people.",
      "mile-h4": "TEAM",
      "mile-p4": "Working inside a full technical team — backend, databases, data — and owning the frontend.",
      "mile-h5": "FRONTEND",
      "mile-p5": "Where the craft sharpens: React, TypeScript, Next.js, performance and interaction.",
      "mile-h6": "BUILDING",
      "mile-p6": "Shipping products, not just pages — from first idea to working system.",
      "sec-pipeline": "06 / THE PIPELINE",
      "pipe-note": "IDEA TO PRODUCT",
      "pipe-title-1": "A product is a",
      "pipe-title-2": "chain of <em class=\"accent-ink\">craft.</em>",
      "stage-h1": "IDEA",
      "stage-p1": "Where every product begins — a problem worth solving.",
      "stage-h2": "INTERFACE",
      "stage-p2": "The frontend — designed and engineered.",
      "stage-focus": "EHAB'S FOCUS",
      "stage-h3": "LOGIC",
      "stage-p3": "Backend rules that make the product behave correctly.",
      "stage-h4": "DATA",
      "stage-p4": "Databases that store and shape what the product knows.",
      "stage-h5": "PRODUCT",
      "stage-p5": "A complete, working system — shipped as one.",
      "sec-contact": "07 / CONTACT",
      "contact-note": "THE NEXT STEP",
      "contact-kicker": "HAVE AN IDEA?",
      "contact-title-1": "Let's build",
      "contact-title-2": "it.",
      "contact-sub":
        "Tell me what you're making. If it lives on the web, I can build the part people see — and bring a team that builds the rest.",
      "contact-cta-project": "Start a project ↗",
      "contact-cta-linkedin": "Connect on LinkedIn ↗",
      "contact-status-1": "AVAILABLE FOR OPPORTUNITIES",
      "contact-status-2": "RESPONSE — USUALLY WITHIN A DAY",
      "foot-role": "Frontend Developer",
      "foot-made": "Designed &amp; engineered with intention.",
      "foot-city": "CAIRO · EGYPT",
      "case-close-aria": "Close case study",
      csKicker: "CASE STUDY / ",
      csProblem: "THE PROBLEM",
      csApproach: "THE APPROACH",
      csChallenge: "TECHNICAL CHALLENGE",
      csSolution: "THE SOLUTION",
      csResult: "THE RESULT",
      csRole: "MY ROLE",
      csCategory: "CATEGORY",
      csStatus: "STATUS",
      csInProgress: "IN PROGRESS",
      csShipped: "SHIPPED / CASE",
      csTech: "TECH STACK",
      csLive: "Live preview",
      csSource: "Source code",
      csSoon: "Live preview not published for this project yet — you can view the source code above."
    },
    ar: {
      skip: "تخطَّ إلى المحتوى",
      "nav-home": "الرئيسية",
      "nav-about": "نبذة",
      "nav-projects": "المشاريع",
      "nav-skills": "المهارات",
      "nav-journey": "الرحلة",
      "nav-contact": "تواصل",
      "nav-talk": "لنتحدث ↗",
      "lang-title": "EN — التبديل إلى الإنجليزية",
      "lang-aria": "التبديل إلى الإنجليزية",
      "hero-eyebrow": "مطوّر واجهات أمامية",
      "hero-desc":
        "أبني تجارب ويب حديثة وسريعة وتفاعلية تحوّل الأفكار إلى منتجات رقمية مفيدة.",
      "hero-cta-work": "شاهد أعمالي ↗",
      "hero-talk": "لنتحدث ↗",
      "hero-meta-focus": "التركيز / هندسة الواجهات الأمامية",
      "hero-meta-ui": "واجهات · تفاعل · أداء",
      avail: "متاح لفرص العمل",
      "scroll-up": "مرّر",
      "scroll-down": "لأسفل",
      "tk-frontend": "مطوّر واجهات أمامية",
      "tk-ui": "هندسة واجهات",
      "tk-interaction": "تصميم تفاعل",
      "tk-perf": "الأداء",
      "tk-clean": "كود نظيف",
      "sec-about": "01 / نبذة",
      "about-note": "القاهرة، مصر",
      "about-l1": "الواجهة الأمامية",
      "about-l2": "هي لغتي <em class=\"accent-ink\">الرئيسية</em>.",
      "about-p1":
        "أركّز على هندسة الواجهات الأمامية وتجارب الويب التفاعلية — واجهات سريعة ومتجاوبة ومصممة لتُفهم بسهولة. يوميًا أعمل مع <strong>HTML وCSS وJavaScript وTypeScript وReact وNext.js وTailwind CSS</strong>.",
      "about-p2":
        "لكني لا أعمل بمعزل عن الفريق. أتعاون مع فريق تقني يغطي <strong>تطوير الواجهات الخلفية وقواعد البيانات وتحليل البيانات</strong> — فلا يتوقف العمل عند الواجهة. معًا نبني منتجات متكاملة.",
      "about-link": "شاهد ما ينتج عن ذلك ←",
      "about-col-work": "أعمل مع",
      "about-col-team": "الفريق يغطي أيضًا",
      "chip-backend": "الواجهة الخلفية",
      "chip-db": "قواعد البيانات",
      "chip-data": "تحليل البيانات",
      "about-quote":
        "أنا أهندس الواجهة. الفريق يهندس النظام. ومعًا نطلق المنتج.",
      "sec-system": "02 / المنظومة",
      "eco-note": "تخصص واحد · فريق واحد",
      "eco-title": "العمل لا يتوقف عند الواجهة.",
      "eco-sub": "الواجهة الأمامية هي تخصصي. والفريق يوسّع قدرات المنتج.",
      "eco-core-tag": "التخصص",
      "eco-core-role": "واجهات أمامية",
      "eco-n1-name": "الواجهة الخلفية",
      "eco-n1-sub": "واجهات API · خدمات · منطق",
      "eco-n2-name": "قاعدة البيانات",
      "eco-n2-sub": "تخزين · نمذجة · سلامة البيانات",
      "eco-n3-name": "تحليل البيانات",
      "eco-n3-sub": "تحويل البيانات إلى قرارات",
      "sec-skills": "03 / المهارات",
      "skills-note": "أدوات الحرفة",
      "skills-word": "واجهات أمامية",
      "skill-js": "جافاسكريبت",
      "skill-ts": "تايبسكريبت",
      "skill-perf": "الأداء",
      "skill-resp": "التجاوب",
      "skill-ux": "تجربة المستخدم",
      "sec-projects": "04 / المشاريع",
      "proj-note": "أعمال مختارة · افتح دراسة حالة",
      "proj-hint": "اضغط على مشروع لقراءة دراسة الحالة كاملة",
      "ptype-1": "تعاملات مؤسسية / تطوير متكامل",
      "ptype-2": "منصة نقل / تطوير متكامل",
      "ptype-3": "متعدد البائعين / أتمتة",
      "ptype-4": "نظام مخزون / React",
      "ptype-5": "منصة تعليمية / تطبيق ويب",
      "ptype-6": "لوحة أمان / SIEM",
      "ptype-7": "تجارة إلكترونية / واجهة",
      "ptype-8": "لوحة مسلم / تطبيق ويب",
      "ptype-9": "موقع علامة / واجهة",
      "ptype-10": "موقع علامة / واجهة",
      "ptype-11": "واجهة اجتماعية / Bootstrap",
      "ptype-12": "واجهة حاسبة / Bootstrap",
      "ptype-13": "واجهة إنتاجية / Bootstrap",
      "p-open": "افتح ↗",
      "sec-journey": "05 / الرحلة",
      "journey-note": "بناء متواصل",
      "mile-h1": "البداية",
      "mile-p1": "قرار بناء الويب. فضول وانضباط ذاتي والتزام.",
      "mile-h2": "التعلّم",
      "mile-p2": "HTML وCSS وJavaScript بجدية — الأساسات قبل الأطر.",
      "mile-h3": "المشاريع",
      "mile-p3": "أول بناءات حقيقية وأول قيود حقيقية — واجهات كان يجب أن تعمل للناس.",
      "mile-h4": "الفريق",
      "mile-p4": "العمل داخل فريق تقني متكامل — خلفي وقواعد بيانات وبيانات — مع تملك الواجهة.",
      "mile-h5": "الواجهة الأمامية",
      "mile-p5": "حيث تتقن الحرفة: React وTypeScript وNext.js والأداء والتفاعل.",
      "mile-h6": "البناء",
      "mile-p6": "إطلاق منتجات لا صفحات فقط — من الفكرة الأولى إلى نظام يعمل.",
      "sec-pipeline": "06 / خط الإنتاج",
      "pipe-note": "من الفكرة إلى المنتج",
      "pipe-title-1": "المنتج هو",
      "pipe-title-2": "سلسلة من <em class=\"accent-ink\">الإتقان.</em>",
      "stage-h1": "الفكرة",
      "stage-p1": "حيث يبدأ كل منتج — مشكلة تستحق الحل.",
      "stage-h2": "الواجهة",
      "stage-p2": "الواجهة الأمامية — مصمّمة ومهندَسة.",
      "stage-focus": "تركيز إيهاب",
      "stage-h3": "المنطق",
      "stage-p3": "قواعد الواجهة الخلفية التي تجعل المنتج يتصرف بشكل صحيح.",
      "stage-h4": "البيانات",
      "stage-p4": "قواعد البيانات التي تخزّن وتشكّل ما يعرفه المنتج.",
      "stage-h5": "المنتج",
      "stage-p5": "نظام متكامل يعمل — يُطلق كوحدة واحدة.",
      "sec-contact": "07 / تواصل",
      "contact-note": "الخطوة التالية",
      "contact-kicker": "لديك فكرة؟",
      "contact-title-1": "هيا نبني",
      "contact-title-2": "ها.",
      "contact-sub":
        "أخبرني بما تصنع. إن كان يعيش على الويب، أستطيع بناء الجزء الذي يراه الناس — وإحضار فريق يبني الباقي.",
      "contact-cta-project": "ابدأ مشروعك ↗",
      "contact-cta-linkedin": "تواصل عبر لينكدإن ↗",
      "contact-status-1": "متاح لفرص العمل",
      "contact-status-2": "الرد — عادةً خلال يوم",
      "foot-role": "مطوّر واجهات أمامية",
      "foot-made": "صُمم وبُني بعناية.",
      "foot-city": "القاهرة · مصر",
      "case-close-aria": "إغلاق دراسة الحالة",
      csKicker: "دراسة حالة / ",
      csProblem: "المشكلة",
      csApproach: "النهج",
      csChallenge: "التحدي التقني",
      csSolution: "الحل",
      csResult: "النتيجة",
      csRole: "دوري",
      csCategory: "الفئة",
      csStatus: "الحالة",
      csInProgress: "قيد التنفيذ",
      csShipped: "نُشرت / دراسة",
      csTech: "التقنيات",
      csLive: "معاينة حيّة",
      csSource: "الكود المصدري",
      csSoon: "لم يُنشر عرض حي لهذا المشروع بعد — يمكنك الاطلاع على الكود المصدري أعلاه."
    }
  };

  const LANG_KEY = "ehab-lang";
  let lang =
    localStorage.getItem(LANG_KEY) ||
    (navigator.language && navigator.language.toLowerCase().indexOf("ar") === 0
      ? "ar"
      : "en");
  let activeSkill = 0;

  function applyLang() {
    const dict = T[lang] || T.en;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";

    $$("[data-i18n]").forEach((el) => {
      const v = dict[el.dataset.i18n];
      if (v) el.innerHTML = v;
    });
    $$("[data-i18n-text]").forEach((el) => {
      const v = dict[el.dataset.i18nText];
      if (!v) return;
      const tn = Array.from(el.childNodes).find((n) => n.nodeType === 3);
      if (tn) tn.textContent = v;
    });
    $$("[data-i18n-title]").forEach((el) => {
      const v = dict[el.dataset.i18nTitle];
      if (v) el.title = v;
    });
    $$("[data-i18n-aria]").forEach((el) => {
      const v = dict[el.dataset.i18nAria];
      if (v) el.setAttribute("aria-label", v);
    });
    $$("[data-wa-en]").forEach((el) => {
      const txt = lang === "ar" ? el.dataset.waAr : el.dataset.waEn;
      el.href = "https://wa.me/20112845404?text=" + encodeURIComponent(txt);
    });

    const btn = $(".lang");
    if (btn) {
      const target = lang === "ar" ? "en" : "ar";
      $(".lang-current", btn).textContent = target.toUpperCase();
      btn.title = dict["lang-title"];
      btn.setAttribute("aria-label", dict["lang-aria"]);
    }

    const slotName = $("#slotName");
    const slotDesc = $("#slotDesc");
    const idx = $("#skillsIndex");
    if (slotName && slotDesc && SKILLS[activeSkill]) {
      const s = SKILLS[activeSkill];
      slotName.textContent = lang === "ar" && s.nameAr ? s.nameAr : s.name;
      slotDesc.textContent = lang === "ar" && s.descAr ? s.descAr : s.desc;
      idx.textContent =
        String(activeSkill + 1).padStart(2, "0") +
        " / " +
        SKILLS.length;
    }
  }

  function language() {
    const btn = $(".lang");
    applyLang();
    if (!btn) return;
    btn.addEventListener("click", () => {
      lang = lang === "ar" ? "en" : "ar";
      localStorage.setItem(LANG_KEY, lang);
      applyLang();
    });
  }

  function theme() {
    const toggle = $("#themeToggle");
    if (!toggle) return;
    const saved = localStorage.getItem("ehab-theme");
    if (saved) html.dataset.theme = saved;
    const meta = $('meta[name="theme-color"]');
    const apply = () => {
      const isLight = html.dataset.theme === "light";
      if (meta) meta.setAttribute("content", isLight ? "#f1efe9" : "#080808");
    };
    apply();
    toggle.addEventListener("click", () => {
      html.dataset.theme = html.dataset.theme === "light" ? "dark" : "light";
      localStorage.setItem("ehab-theme", html.dataset.theme);
      apply();
      uiSound("theme");
    });
  }

  function cursor() {
    if (prefersReduced.matches || !isFine) return;
    html.classList.add("has-cursor");
    const cur = $(".cursor");
    const dot = $(".cursor-dot");
    const ring = $(".cursor-ring");
    const label = $(".cursor-label");
    const LABELS = { view: "VIEW ↗", open: "OPEN ↗" };

    let tx = -100, ty = -100, rx = -100, ry = -100, raf;
    let visible = false;

    window.addEventListener("pointermove", (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!visible) {
        visible = true;
        rx = tx;
        ry = ty;
        cur.style.opacity = "1";
      }
      dot.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;

      const hit = e.target.closest("a, button, .proj-row, [role='button'], [data-magnetic]");
      cur.classList.toggle("is-link", !!hit);

      const tagged = e.target.closest("[data-cursor]");
      const isImg = !!e.target.closest("img");
      if (tagged) {
        cur.classList.add("has-label");
        label.textContent = LABELS[tagged.dataset.cursor] || "VIEW ↗";
      } else if (isImg) {
        cur.classList.add("has-label");
        label.textContent = "OPEN ↗";
      } else {
        cur.classList.remove("has-label");
      }
    });

    window.addEventListener("mouseout", () => {
      cur.style.opacity = "0";
      visible = false;
    });

    function loop() {
      rx += (tx - rx) * 0.16;
      ry += (ty - ry) * 0.16;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(loop);
    }
    loop();
  }

  let audioCtx = null;
  let soundOn = localStorage.getItem("ehab-sound") === "on";

  function ensureAudio() {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) audioCtx = new AC();
    }
    if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
  }

  function blip(freq, dur, gainVal, type) {
    if (!soundOn || !audioCtx) return;
    const t = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type || "sine";
    osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(gainVal || 0.012, t + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + (dur || 0.09));
    osc.connect(gain).connect(audioCtx.destination);
    osc.start(t);
    osc.stop(t + (dur || 0.09) + 0.02);
  }

  function uiSound(kind) {
    if (!soundOn) return;
    ensureAudio();
    if (kind === "hover") blip(680, 0.07, 0.008);
    else if (kind === "click") {
      blip(340, 0.07, 0.01, "triangle");
      setTimeout(() => blip(520, 0.06, 0.008, "triangle"), 50);
    } else if (kind === "theme") {
      blip(420, 0.09, 0.01, "sine");
    }
  }

  function sound() {
    const btn = $("#soundToggle");
    if (!btn) return;
    const glyph = btn.querySelector(".sound-glyph");
    const paint = () => {
      btn.setAttribute("aria-pressed", String(soundOn));
      if (glyph) glyph.textContent = soundOn ? "◉" : "◌";
    };
    paint();
    btn.addEventListener("click", () => {
      soundOn = !soundOn;
      localStorage.setItem("ehab-sound", soundOn ? "on" : "off");
      if (soundOn) ensureAudio();
      paint();
      uiSound("click");
    });
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest("a, button, .proj-row, .skill-row")) uiSound("hover");
    });
    document.addEventListener("click", (e) => {
      if (e.target.closest("a, button, .proj-row, .skill-row")) uiSound("click");
    });
  }

  function nav() {
    const navEl = $("#nav");
    if (!navEl) return;
    const onScroll = () => navEl.classList.toggle("scrolled", window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function activeLink() {
    const links = $$(".nav-links a");
    const ids = links.map((l) => l.getAttribute("href").slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const id = en.target.id;
            links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === "#" + id));
          }
        });
      },
      { rootMargin: "-42% 0px -52% 0px" }
    );
    ids.forEach((id) => {
      const s = document.getElementById(id);
      if (s) io.observe(s);
    });
  }

  function reveals() {
    if (prefersReduced.matches) return;
    const targets = $$("[data-reveal], .proj-row, .mile, .stage");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    targets.forEach((t) => io.observe(t));
  }

  function skills() {
    const list = $("#skillList");
    const rows = $$(".skill-row", list);
    const slotName = $("#slotName");
    const slotDesc = $("#slotDesc");
    const index = $("#skillsIndex");
    const slot = $(".skills-slot");
    if (!list || !rows.length) return;

    let timer = 0;
    const setActive = (i) => {
      activeSkill = i;
      rows.forEach((r, j) => {
        r.classList.toggle("is-active", j === i);
        r.setAttribute("aria-pressed", String(j === i));
      });
      slot.classList.add("swap");
      clearTimeout(timer);
      timer = setTimeout(() => {
        const s = SKILLS[i];
        slotName.textContent = lang === "ar" && s.nameAr ? s.nameAr : s.name;
        slotDesc.textContent = lang === "ar" && s.descAr ? s.descAr : s.desc;
        index.textContent = String(i + 1).padStart(2, "0") + " / " + SKILLS.length;
        slot.classList.remove("swap");
      }, 140);
    };

    list.addEventListener("mouseover", (e) => {
      const row = e.target.closest(".skill-row");
      if (row) setActive(Number(row.dataset.skill));
    });
    list.addEventListener("click", (e) => {
      const row = e.target.closest(".skill-row");
      if (row) setActive(Number(row.dataset.skill));
    });
    list.addEventListener("keydown", (e) => {
      const row = e.target.closest(".skill-row");
      if (row && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        setActive(Number(row.dataset.skill));
      }
    });
  }

  const caseEl = $("#caseStudy");
  const caseBody = $("#caseBody");
  let lastFocused = null;

  function blockScroll(on) {
    document.body.style.overflow = on ? "hidden" : "";
  }

  function csBlock(label, text) {
    return (
      '<div class="cs-block"><span class="cs-label">' +
      label +
      "</span><p class='cs-text'>" +
      text +
      "</p></div>"
    );
  }

  function openCase(i) {
    if (!caseEl) return;
    const p = PROJECTS[i];
    const d = lang === "ar" && PROJECTS_AR[i] ? PROJECTS_AR[i] : p;
    const dict = T[lang] || T.en;
    lastFocused = document.activeElement;
    caseBody.innerHTML =
      '<span class="cs-kicker">' +
      dict.csKicker +
      p.num +
      "</span>" +
      '<h2 class="cs-title" id="caseTitle">' +
      d.title +
      "</h2><span class='cs-type'>" +
      d.type +
      "</span><p class='cs-tagline'>" +
      d.tagline +
      "</p>" +
      '<div class="cs-grid">' +
      csBlock(dict.csProblem, d.problem) +
      csBlock(dict.csApproach, d.approach) +
      csBlock(dict.csChallenge, d.challenge) +
      csBlock(dict.csSolution, d.solution) +
      csBlock(dict.csResult, d.result) +
      csBlock(dict.csRole, d.role) +
      "</div>" +
      '<div class="cs-meta-row"><div><span>' +
      dict.csCategory +
      "</span><strong>" +
      d.type +
      "</strong></div><div><span>" +
      dict.csStatus +
      "</span><strong>" +
      (p.num === "05" ? dict.csInProgress : dict.csShipped) +
      "</strong></div></div>" +
      '<div class="cs-tech"><span class="cs-label">' +
      dict.csTech +
      '</span><ul class="chips">' +
      d.tech.map((t) => "<li>" + t + "</li>").join("") +
      "</ul></div>" +
      '<div class="cs-links">' +
      (p.live
        ? '<a class="cs-link" href="' + p.live + '" target="_blank" rel="noopener"><span aria-hidden="true">↗</span> ' +
          dict.csLive +
          "</a>"
        : '<button class="cs-link soon" type="button"><span aria-hidden="true">↗</span> ' +
          dict.csLive +
          "</button>") +
      (p.source
        ? '<a class="cs-link" href="' + p.source + '" target="_blank" rel="noopener"><span aria-hidden="true">↗</span> ' +
          dict.csSource +
          "</a>"
        : '<button class="cs-link soon" type="button"><span aria-hidden="true">↗</span> ' +
          dict.csSource +
          "</button>") +
      "</div>" +
      (!p.live
        ? '<span class="cs-soon">' + dict.csSoon + "</span>"
        : "");

    $("#caseMeta").textContent = dict.csKicker + p.num;
    caseEl.classList.add("is-open");
    caseEl.setAttribute("aria-hidden", "false");
    blockScroll(true);
    const closeBtn = $(".case-close");
    if (closeBtn) closeBtn.focus();

    $$(".cs-link.soon", caseEl).forEach((b) => {
      b.addEventListener("click", () => {
        const note = $(".cs-soon", caseEl);
        if (note) note.classList.add("show");
      });
    });
  }

  function closeCase() {
    if (!caseEl) return;
    caseEl.classList.remove("is-open");
    caseEl.setAttribute("aria-hidden", "true");
    blockScroll(false);
    if (lastFocused) lastFocused.focus();
  }

  function projects() {
    const rows = $$(".proj-row");
    if (!caseEl || !rows.length) return;
    rows.forEach((row, i) => {
      row.addEventListener("click", () => openCase(i));
      row.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openCase(i);
        }
      });
    });
    $$("[data-close]", caseEl).forEach((el) => el.addEventListener("click", closeCase));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && caseEl.classList.contains("is-open")) closeCase();
    });
  }

  function journey() {
    const wrap = $("#journeyWrap");
    const pathEl = $(".journey-path", wrap);
    const fillEl = $(".journey-fill", wrap);
    if (!wrap || !pathEl || !fillEl) return;
    const dots = $$(".mile-dot", wrap);
    if (!dots.length) return;

    let pathLen = 1;
    let ticking = false;

    const build = () => {
      const wrapH = wrap.getBoundingClientRect().height;
      const pts = dots.map((d) => {
        let el = d;
        let x = 0;
        let y = 0;
        while (el && el !== wrap) {
          x += el.offsetLeft;
          y += el.offsetTop;
          el = el.offsetParent;
        }
        return [x + d.offsetWidth / 2, y + d.offsetHeight / 2];
      });
      const first = pts[0];
      const last = pts[pts.length - 1];
      let d = "M " + first[0] + " 0";
      pts.forEach((p) => {
        d += " L " + p[0] + " " + p[1];
      });
      d += " L " + last[0] + " " + wrapH;
      pathEl.setAttribute("d", d);
      fillEl.setAttribute("d", d);
      pathLen = fillEl.getTotalLength() || 1;
      fillEl.style.strokeDasharray = String(pathLen);
    };

    const update = () => {
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (vh * 0.72 - rect.top) / rect.height;
      const clamped = Math.max(0, Math.min(1, progress));
      fillEl.style.strokeDashoffset = String(pathLen * (1 - clamped));
      ticking = false;
    };

    window.addEventListener("scroll", () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    });
    window.addEventListener("resize", build);
    build();
    update();
  }

  function magnetic() {
    if (prefersReduced.matches || !isFine) return;
    const els = $$("[data-magnetic]");
    els.forEach((el) => {
      let raf = 0;
      el.addEventListener("pointermove", (e) => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          const r = el.getBoundingClientRect();
          const x = e.clientX - (r.left + r.width / 2);
          const y = e.clientY - (r.top + r.height / 2);
          el.style.transform =
            "translate(" + x * 0.22 + "px, " + y * 0.28 + "px)";
          raf = 0;
        });
      });
      el.addEventListener("pointerleave", () => {
        el.style.transform = "";
      });
    });
  }

  function menu() {
    const burger = $("#burger");
    const menu = $("#mobileMenu");
    if (!burger || !menu) return;
    const open = (state) => {
      document.body.classList.toggle("menu-open", state);
      burger.setAttribute("aria-expanded", String(state));
      menu.setAttribute("aria-hidden", String(!state));
      menu.inert = !state;
      blockScroll(state);
      if (state) {
        const first = $("nav a", menu);
        if (first) first.focus();
      }
    };
    burger.addEventListener("click", () => {
      open(!document.body.classList.contains("menu-open"));
    });
    $$("a", menu).forEach((a) => a.addEventListener("click", () => open(false)));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && document.body.classList.contains("menu-open")) open(false);
    });
  }

  function pauseSmil() {
    if (!prefersReduced.matches) return;
    $$("svg").forEach((s) => {
      if (s.pauseAnimations) s.pauseAnimations();
    });
  }

  function portraitFallback() {
    const img = $(".portrait-img");
    const frame = $(".portrait-frame");
    if (!img || !frame) return;
    const show = () => {
      if (img.classList.contains("missing")) {
        const fb = $(".portrait-fallback", frame);
        if (fb) fb.style.display = "flex";
      }
    };
    if (img.classList.contains("missing")) show();
    else img.addEventListener("error", show);
  }

  document.addEventListener("DOMContentLoaded", () => {
    language();
    theme();
    cursor();
    sound();
    nav();
    activeLink();
    reveals();
    skills();
    projects();
    journey();
    magnetic();
    menu();
    pauseSmil();
    portraitFallback();
  });
})();
