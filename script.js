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

  const PROJECTS = [
    {
      num: "01",
      title: "Raqam",
      type: "Marketplace / Web Platform",
      tagline:
        "A digital marketplace where buying and selling feels fast, clear and trustworthy — not cluttered.",
      problem:
        "Marketplaces collapse under clutter. The interface had to stay calm and legible while carrying a large catalogue of products, filters and actions.",
      approach:
        "A component-first architecture with a strict design system and performance budgets set from the first milestone.",
      challenge:
        "Keeping the interface fast while rendering large product listings and frequent data updates across many screens.",
      solution:
        "Code-splitting, virtualized lists, memoized components and carefully measured data fetching — so the UI stays responsive as the catalogue grows.",
      result:
        "In production. Final performance figures will be published with the public case study.",
      role: "Frontend development, UI engineering, design-system implementation.",
      tech: ["React", "TypeScript", "Tailwind CSS", "API Integration"]
    },
    {
      num: "02",
      title: "BeepMe",
      type: "Flutter / MVP",
      tagline:
        "A communication MVP with an interface engineered to feel native, fast and friendly from the first launch.",
      problem:
        "Shipping an MVP that still feels like a polished product, not a prototype.",
      approach:
        "A small surface area and a high level of polish — one strong core flow, executed well.",
      challenge:
        "Keeping the UI consistent and responsive across many device sizes with a limited team.",
      solution:
        "A compact design system in Flutter, reusable widgets, and performance-first rendering.",
      result: "MVP shipped. Detailed case-study metrics coming soon.",
      role: "UI / frontend development within a Flutter product.",
      tech: ["Flutter", "Dart", "UI Systems"]
    },
    {
      num: "03",
      title: "Student Affairs",
      type: "Simulation / Web Interface",
      tagline:
        "An interactive simulation of student-affairs workflows, built to make complex processes understandable.",
      problem:
        "Explaining multi-step administrative processes is slow, dry and hard to follow.",
      approach:
        "Turn procedures into an interactive flow people can step through at their own pace.",
      challenge:
        "Complex, branching logic presented through a clear, calm interface.",
      solution:
        "A state-driven UI with guided steps, honest validation and readable data tables.",
      result:
        "Used as an internal training tool. A public write-up is in progress.",
      role: "Frontend development and interface design.",
      tech: ["JavaScript", "React", "CSS"]
    },
    {
      num: "04",
      title: "Laravel Platforms",
      type: "Web Development / Performance",
      tagline:
        "Server-driven platforms with interfaces optimized for speed, clarity and maintainability.",
      problem:
        "Existing platforms felt heavy — slow loads, tangled UI, hard to extend.",
      approach:
        "Treat the interface as a product, not a theme on top of a framework.",
      challenge:
        "Improving perceived performance and maintainability without rewriting the backend.",
      solution:
        "Frontend performance work, cleaner component boundaries and hardened API integration.",
      result: "Performance improvements shipped. Detailed numbers coming soon.",
      role: "Frontend development and performance work.",
      tech: ["Laravel / Blade", "JavaScript", "CSS", "MySQL"]
    },
    {
      num: "05",
      title: "More to come",
      type: "Future Projects",
      tagline:
        "The next set of products is in progress — and this portfolio is built to grow with them.",
      problem:
        "Every product is a new set of constraints and decisions.",
      approach:
        "The same discipline — design, engineering, performance — applied to the next idea.",
      challenge:
        "Waiting is the hard part. The build itself is the enjoyable part.",
      solution:
        "New projects slot into this same architecture and will appear here as they ship.",
      result: "Shipping soon.",
      role: "Frontend development.",
      tech: ["TBD"]
    }
  ];

  const html = document.documentElement;

  const PROJECTS_AR = [
    {
      title: "رقم",
      type: "سوق إلكتروني / منصة ويب",
      tagline:
        "سوق رقمي حيث يصبح البيع والشراء سريعًا وواضحًا وجديرًا بالثقة — لا فوضى.",
      problem:
        "الأسواق تنهار تحت الفوضى. كان على الواجهة أن تبقى هادئة وواضحة وهي تحمل كتالوجًا كبيرًا من المنتجات والفلاتر والإجراءات.",
      approach:
        "بنية قائمة على المكوّنات مع نظام تصميم صارم وميزانيات أداء محددة من أول أسبوع عمل.",
      challenge:
        "إبقاء الواجهة سريعة أثناء عرض قوائم منتجات كبيرة وتحديثات بيانات متكررة عبر شاشات عديدة.",
      solution:
        "تقسيم الكود، وقوائم افتراضية، ومكوّنات محفوظة الذاكرة، وجلب بيانات محسوب بعناية — لتبقى الواجهة سريعة كلما كبر الكتالوج.",
      result:
        "قيد التشغيل. ستُنشر أرقام الأداء النهائية مع دراسة الحالة العامة.",
      role: "تطوير الواجهة الأمامية، هندسة الواجهة، تنفيذ نظام التصميم.",
      tech: ["React", "TypeScript", "Tailwind CSS", "API Integration"]
    },
    {
      title: "بيب مي",
      type: "فلاتر / منتج أولي (MVP)",
      tagline:
        "منتج تواصل أولي بواجهة مهندَسة لتبدو أصلية وسريعة وودودة منذ أول إطلاق.",
      problem:
        "إطلاق منتج أولي ما زال يبدو منتجًا مصقولًا لا نموذجًا تجريبيًا.",
      approach:
        "مساحة سطح صغيرة ومستوى عالٍ من الإتقان — تدفق أساسي قوي واحد، منفّذ بإتقان.",
      challenge:
        "إبقاء الواجهة متناسقة وسريعة عبر أحجام شاشات كثيرة بفريق محدود.",
      solution:
        "نظام تصميم مدمج في فلاتر، ومكوّنات قابلة لإعادة الاستخدام، وعرض يراعي الأداء أولًا.",
      result: "أُطلق المنتج الأولي. مقاييس دراسة الحالة التفصيلية قريبًا.",
      role: "تطوير واجهة المستخدم / الواجهة الأمامية داخل منتج فلاتر.",
      tech: ["Flutter", "Dart", "UI Systems"]
    },
    {
      title: "شؤون الطلاب",
      type: "محاكاة / واجهة ويب",
      tagline:
        "محاكاة تفاعلية لسير عمل شؤون الطلاب، صُممت لتجعل العمليات المعقدة مفهومة.",
      problem:
        "شرح العمليات الإدارية متعددة الخطوات بطيء وجاف ويصعب متابعته.",
      approach:
        "تحويل الإجراءات إلى تدفق تفاعلي يمكن للناس تجربته خطوة بخطوة وبوتيرتهم الخاصة.",
      challenge:
        "منطق متشعب ومعقد يُقدَّم عبر واجهة واضحة وهادئة.",
      solution:
        "واجهة مدفوعة بالحالة مع خطوات موجّهة، وتحقق صادق، وجداول بيانات مقروءة.",
      result: "تُستخدم كأداة تدريب داخلية. كتابة توثيق عام قيد الإعداد.",
      role: "تطوير الواجهة الأمامية وتصميم الواجهة.",
      tech: ["JavaScript", "React", "CSS"]
    },
    {
      title: "منصات لارافل",
      type: "تطوير ويب / أداء",
      tagline:
        "منصات مدفوعة بالخادم بواجهات محسّنة للسرعة والوضوح وقابلية الصيانة.",
      problem:
        "المنصات الحالية بدت ثقيلة — تحميل بطيء، وواجهة متشابكة، وصعوبة في التوسيع.",
      approach:
        "التعامل مع الواجهة كمنتج، لا كقالب فوق إطار عمل.",
      challenge:
        "تحسين الأداء المُدرك وقابلية الصيانة دون إعادة كتابة الواجهة الخلفية.",
      solution:
        "تحسين أداء الواجهة الأمامية، وحدود مكوّنات أنظف، وتكامل API محكم.",
      result: "تحسينات الأداء أُطلقت. الأرقام التفصيلية قريبًا.",
      role: "تطوير الواجهة الأمامية وأعمال الأداء.",
      tech: ["Laravel / Blade", "JavaScript", "CSS", "MySQL"]
    },
    {
      title: "المزيد قادم",
      type: "مشاريع قادمة",
      tagline:
        "المجموعة التالية من المنتجات قيد العمل — وهذه المحفظة بُنيت لتنمو معها.",
      problem: "كل منتج هو مجموعة جديدة من القيود والقرارات.",
      approach: "الانضباط نفسه — التصميم والهندسة والأداء — مطبَّق على الفكرة التالية.",
      challenge: "الانتظار هو الجزء الصعب. أما البناء فهو الجزء الممتع.",
      solution: "المشاريع الجديدة تتسق مع هذه البنية نفسها وستظهر هنا عند إطلاقها.",
      result: "سيُطلق قريبًا.",
      role: "تطوير الواجهة الأمامية.",
      tech: ["قريبًا"]
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
      "ptype-1": "MARKETPLACE / WEB PLATFORM",
      "ptype-2": "FLUTTER / MVP",
      "ptype-3": "SIMULATION / WEB INTERFACE",
      "ptype-4": "WEB DEVELOPMENT / PERFORMANCE",
      "ptype-5": "FUTURE PROJECTS",
      "ptitle-3": "Student Affairs",
      "pghost-3": "SIMULATION",
      "ptitle-5": "More to come",
      "pghost-5": "NEXT",
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
      csSoon: "Live link coming soon — this project is a placeholder entry."
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
      "ptype-1": "سوق إلكتروني / منصة ويب",
      "ptype-2": "فلاتر / منتج أولي",
      "ptype-3": "محاكاة / واجهة ويب",
      "ptype-4": "تطوير ويب / أداء",
      "ptype-5": "مشاريع قادمة",
      "ptitle-3": "شؤون الطلاب",
      "pghost-3": "محاكاة",
      "ptitle-5": "المزيد قادم",
      "pghost-5": "التالي",
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
      csSoon: "الرابط المباشر قادم — هذا المشروع إدخال مؤقت."
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
      '<button class="cs-link soon" type="button"><span aria-hidden="true">↗</span> ' +
      dict.csLive +
      "</button>" +
      '<button class="cs-link soon" type="button"><span aria-hidden="true">↗</span> ' +
      dict.csSource +
      "</button>" +
      "</div>" +
      '<span class="cs-soon">' +
      dict.csSoon +
      "</span>";

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
