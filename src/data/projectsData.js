/**
 * ==============================================================================
 * 📦 PROJECTS DATA (ไฟล์จัดการข้อมูลโปรเจกต์ของคุณ Woradech)
 * ==============================================================================
 * 💡 คำแนะนำในการกรอกข้อมูล:
 * 1. 【แนบรูปภาพ Thumbnail】: 
 *    - นำรูปภาพของคุณไปวางไว้ที่โฟลเดอร์: public/projects/ (เช่น public/projects/demo1.png)
 *    - แล้วใส่ในฟิลด์ thumbnail เป็น: "./projects/demo1.png"
 *    - หรือถ้าใช้รูปจาก URL ออนไลน์ สามารถใส่ URL ได้เลย เช่น "https://..."
 *    - ถ้าไม่มีรูป ให้เว้นว่างเป็น "" ระบบจะแสดงการ์ดสไตล์ Tech Gradient สวยงามให้อัตโนมัติ!
 * 
 * 2. 【ความฉลาดของระบบภาษา】:
 *    - ในช่อง title, tagline, problem, solution คุณจะใส่แบบแยก 2 ภาษา { th: "...", en: "..." }
 *    - หรือจะพิมพ์ข้อความเดียวเลยก็ได้ เช่น title: "ระบบจัดการสต็อกสินค้า" ระบบจะจัดการแสดงผลให้อัตโนมัติ
 * 
 * 3. 【ปุ่มลิงก์ GitHub & Demo】:
 *    - หากโปรเจกต์ไหน "ไม่มีลิงก์ GitHub" หรือ "ไม่มี Demo" ให้เว้นเป็น "" (สตริงว่าง)
 *    - ปุ่มจะซ่อนตัวเองอัตโนมัติ ไม่ต้องกังวลเรื่องลิงก์เสียหรือลิงก์มั่ว!
 * 
 * 4. 【การเพิ่มโปรเจกต์ใหม่】:
 *    - สามารถคัดลอกบล็อก PROJECT_TEMPLATE ด้านล่าง แล้วนำไปต่อท้ายใน projectsList ได้เลย
 * ==============================================================================
 */

// 📋 TEMPLATE เปล่าสำหรับ Copy ไปสร้างโปรเจกต์ใหม่ได้ง่ายๆ:
export const PROJECT_TEMPLATE = {
  id: "my-new-project-1",
  category: "fullstack", // เลือกหมวดหมู่: "fullstack" | "automation" | "ai" | "other"
  thumbnail: "./projects/sample.png", // ใส่รูป หรือเว้นว่าง "" ได้
  title: {
    th: "ชื่อโปรเจกต์ (ภาษาไทย)",
    en: "Project Title (English)",
  },
  tagline: {
    th: "คำอธิบายสั้นๆ เกี่ยวกับโปรเจกต์ 1 บรรทัด",
    en: "Short 1-line project summary",
  },
  problem: {
    th: "โจทย์ปัญหาที่เกิดขึ้น หรือเหตุผลที่ต้องพัฒนาโปรเจกต์นี้",
    en: "Describe the core challenge or problem you wanted to solve",
  },
  solution: {
    th: "วิธีการและเทคโนโลยีที่คุณสร้างขึ้นมาเพื่อแก้ปัญหานั้น",
    en: "The architecture and features you built to solve the problem",
  },
  tech: ["React", "Node.js", "MySQL", "Tailwind CSS"], // รายการเครื่องมือ/ภาษาที่ใช้
  github: "", // ลิงก์ GitHub หรือเว้นว่าง "" ได้
  demo: "", // ลิงก์ Live Demo หรือเว้นว่าง "" ได้
};

// 🚀 รายการโปรเจกต์จริงของคุณ (อัปเดตข้อมูล Evidence, Role, Outcome และ Demo จริง):
export const projectsList = [
  {
    id: "slipscan-ai",
    isFeatured: true,
    category: "automation",
    thumbnail: "./projects/slipscan-ai.png",
    title: {
      th: "SlipScan AI: ระบบบันทึกและจัดการรายจ่ายอัจฉริยะจากสลิปโอนเงินผ่าน LINE",
      en: "SlipScan AI: Frictionless LINE Slip Scanner & Smart Expense Tracker",
    },
    tagline: {
      th: "ระบบบัญชีอัจฉริยะแบบ Serverless Orchestration เปลี่ยนภาพสลิปโอนเงินเป็นข้อมูลรายจ่ายผ่าน LINE Chatbot ในเสี้ยววินาที",
      en: "Serverless n8n workflow pipeline converting transaction receipt images into structured financial accounting via LINE Official Account and Gemini AI.",
    },
    role: {
      th: "วาง Flow การทำงานและออกแบบสถาปัตยกรรมระบบทั้งหมด (System Architect), จัดการฐานข้อมูล, พัฒนาระบบเชื่อมต่อ LINE Bot Webhook และสร้าง Website Display สำหรับแสดงผลข้อมูล",
      en: "Designed end-to-end workflow architecture & orchestrations, managed data persistence, integrated LINE Bot Webhook pipelines, and developed frontend analytics displays.",
    },
    outcome: {
      th: "เรียนรู้การทำ Serverless Orchestration ด้วย n8n เชื่อมโยงหลาย Services (LINE Messaging API, OCR, Gemini AI) สำเร็จเป็นระบบบัญชีอัตโนมัติที่ Deploy ใช้งานได้จริงบน LINE และช่วยประหยัดเวลาการบันทึกรายจ่าย",
      en: "Mastered multi-service serverless orchestration with n8n, OCR, and Generative AI, successfully deploying a frictionless production LINE Bot used by actual users.",
    },
    problem: {
      th: "การจดบันทึกรายรับ-รายจ่ายประจำวันเป็นเรื่องยุ่งยาก ผู้ใช้มักลืมจดหรือขี้เกียจพิมพ์รายละเอียดลงแอปบัญชีแบบเดิมๆ ทำให้การจัดการการเงินส่วนบุคคลขาดความต่อเนื่อง ขาดการสรุปข้อมูลเชิงสถิติ และข้อมูลตกหล่นได้ง่าย",
      en: "Manual expense logging is tedious and error-prone, resulting in low adherence and disorganized personal financial tracking.",
    },
    solution: {
      th: "พัฒนาระบบอัตโนมัติแบบ Serverless/Low-Code ด้วย n8n เชื่อมต่อ LINE OA Webhook โดยใช้ OCR.space สกัดข้อความดิบ และส่งต่อให้ Google Gemini AI (Prompt Engineering) วิเคราะห์จำแนกยอดเงิน หมวดหมู่ และคู่ค้าเป็น JSON บันทึกลง Google Sheets และสำรองรูปสลิปขึ้น Google Drive พร้อมตอบกลับด้วย Dynamic Flex Message และมีเว็บแอปพลิเคชัน LINE LIFF สำหรับแก้ไขข้อมูล (CRUD)",
      en: "Architected an automated multi-stage pipeline using n8n, OCR.space, and Google Gemini AI via LINE Webhooks to autonomously extract, classify, and persist banking transactions to Google Sheets with interactive Flex Messages and LIFF CRUD management.",
    },
    tech: ["n8n", "Google Gemini AI", "LINE Messaging API", "LINE LIFF", "OCR.space", "Google Sheets API", "JavaScript"],
    github: "",
    demo: "https://lin.ee/5YQCjLH",
    demoLabel: {
      th: "เพิ่มเพื่อน LINE Bot (ทดลองใช้จริง)",
      en: "Try Live LINE Bot",
    },
    pdfLink: "./documents/slipscan-presentation.pdf",
    pdfLabel: {
      th: "ดูสไลด์นำเสนอ (PDF 13 หน้า)",
      en: "View Slide Presentation (PDF 13 Pages)",
    },
  },

  {
    id: "pha-thai-ai",
    isFeatured: false,
    category: "ai",
    thumbnail: "./projects/pha-thai-ai.png",
    title: {
      th: "PHA-THAI AI: แพลตฟอร์มอนุรักษ์ภูมิปัญญาผ้าไทยด้วยสถาปัตยกรรม RAG",
      en: "PHA-THAI AI: Thai Fabric Cultural Wisdom Preservation via RAG",
    },
    tagline: {
      th: "ระบบ AI Companion และ Web Application ที่ใช้ RAG ในการสืบค้นและถ่ายทอดภูมิปัญญาผ้าไทย 76 จังหวัด ป้องกันข้อมูลคลาดเคลื่อน",
      en: "RAG-driven AI Companion and Web Platform preserving Thai regional fabric wisdom across 76 provinces with zero hallucination.",
    },
    role: {
      th: "ร่วมทำ Data Preparation & Data Analysis ร่วมกับทีม 2 คน และรับผิดชอบหลักในการพัฒนา Modeling AI RAG, Data Science Pipeline และ Backend API",
      en: "Collaborated on data prep & analysis; solely engineered AI RAG modeling, domain-specific NLP retrieval pipelines, and backend APIs.",
    },
    outcome: {
      th: "โปรเจกต์ปี 3 ได้เรียนรู้เชิงลึกด้านการจัดการข้อมูลวัฒนธรรม, สถาปัตยกรรม RAG, และการกำหนด Refusal Policy เพื่อป้องกัน Hallucination ของโมเดลภาษา",
      en: "3rd-year project: Mastered domain-specific RAG engineering, cultural knowledge vectorization, and refusal policies to eliminate AI hallucination.",
    },
    problem: {
      th: "ภูมิปัญญาผ้าไทยและลวดลายวัฒนธรรมส่วนใหญ่ถ่ายทอดแบบมุขปาฐะ (ปากต่อปาก) และกระจายตัวอยู่ในชุมชนท้องถิ่น ข้อมูลบนอินเทอร์เน็ตกระจัดกระจายและขาดความถูกต้อง ทำให้โมเดล AI ทั่วไปเกิดปัญหา Hallucination ให้ข้อมูลลวดลายและกรรมวิธีผิดพลาด ส่งผลให้มรดกทางวัฒนธรรมเสี่ยงสูญหายและคนรุ่นใหม่เข้าถึงได้ยาก",
      en: "Traditional Thai textile heritage is largely localized and fragmented online, causing generic AI models to hallucinate cultural nuances, weaving techniques, and regional authenticity.",
    },
    solution: {
      th: "พัฒนา Web Application และสถาปัตยกรรม RAG (Retrieval-Augmented Generation) รวบรวมฐานข้อมูลภูมิปัญญาผ้าไทยและมาตรฐานหม่อนไหมแบบ Open Government Data ผ่านกระบวนการ Data Pipeline & NLP (PyThaiNLP, Tokenization, Embedding) เพื่อตอบคำถามเฉพาะเจาะจงเกี่ยวกับประวัติ ลวดลาย เทคนิคการทอ และแหล่งผลิต OTOP ได้อย่างแม่นยำตามเป้าหมาย SDG 8 และ 11 พร้อมกำหนด Refusal Policy ป้องกันการตอบนอกขอบเขตข้อมูล",
      en: "Engineered a domain-specific RAG pipeline and web application integrating open cultural datasets, PyThaiNLP preprocessing, and strict retrieval refusal policies to deliver verifiable insights on textile patterns, crafting methods, and regional sources aligned with SDGs 8 & 11.",
    },
    tech: ["Python", "RAG", "FastAPI", "React", "PyThaiNLP", "Vector Database", "Tailwind CSS"],
    github: "",
    demo: "https://phathai.pages.dev/",
    demoLabel: {
      th: "Web Demo (Cloudflare Pages)",
      en: "Web Demo (Cloudflare Pages)",
    },
    slideLink: "https://canva.link/gayzmz6xupe283r",
    slideLabel: {
      th: "สไลด์นำเสนอ (Canva)",
      en: "Slide Presentation (Canva)",
    },
  },

  {
    id: "thamsod-qa",
    isFeatured: false,
    category: "fullstack",
    thumbnail: "./projects/thamsod-qa.png",
    title: {
      th: "Thamsod (ถามสด): แพลตฟอร์มระบบถาม-ตอบสำหรับงานสัมมนาแบบเรียลไทม์",
      en: "Thamsod: Real-time Interactive Q&A Platform for Seminars",
    },
    tagline: {
      th: "เว็บแอปพลิเคชัน Interactive Q&A แบบเรียลไทม์ผ่าน WebSocket รองรับการถามคำถามแบบไม่ระบุตัวตนและระบบคัดกรองคำถามสำหรับผู้จัดงาน",
      en: "Interactive real-time Q&A seminar platform featuring anonymous questions, community upvoting, and live moderator curation via WebSockets.",
    },
    role: {
      th: "พัฒนาโครงสร้างเว็บและสถาปัตยกรรมโปรเจกต์ทั้งหมด และเน้นรับผิดชอบหลักในบทบาท 'Host' สำหรับสร้างห้องและควบคุมเซสชัน (ทั้ง Frontend และ Backend)",
      en: "Architected overall web application and spearheaded the 'Host' role systems for session creation, room control, and moderator controls across frontend and backend.",
    },
    outcome: {
      th: "โปรเจกต์วิชา CSI400 ได้เรียนรู้และลงมือพัฒนา Full-Stack Application และระบบสื่อสารสองทาง Real-time ด้วย WebSockets เป็นครั้งแรก โดยผลงานมีความพร้อมใช้งานจริงจนได้รับความไว้วางใจให้บริษัท ANONA House ซื้อลิขสิทธิ์ระบบไปต่อยอดใช้งานจริงในชื่อ 'AskEvent'",
      en: "CSI400 course project: First-hand experience implementing full-stack reactive architecture and bidirectional WebSocket communication, achieving commercial success with ANONA House acquiring the system as their official 'AskEvent' solution.",
    },
    problem: {
      th: "ในการสัมมนาหรือการบรรยายแบบเดิม ผู้เข้าร่วมมักไม่กล้าแสดงความคิดเห็นหรือยกมือถามต่อหน้าสาธารณะ (Public Speaking Anxiety) อีกทั้งผู้จัดงานไม่สามารถคัดกรองและจัดลำดับความสำคัญของคำถามที่ผู้ฟังส่วนใหญ่สนใจได้อย่างมีประสิทธิภาพในเวลาที่จำกัด",
      en: "Audience participation in large seminars suffers from public speaking anxiety and inefficient question moderation, leaving key audience inquiries unanswered.",
    },
    solution: {
      th: "พัฒนา Single-Page Application (SPA) ด้วย React (Vite) + Tailwind CSS และ Node.js (Express) ร่วมกับ MongoDB และ Socket.io สำหรับการสื่อสารสองทางแบบเรียลไทม์ แบ่งระบบออกเป็น 3 มุมมอง: Host (อนุมัติ/ปฏิเสธ/ไฮไลต์คำถาม), Guest (สแกน QR Code เข้าร่วมเซสชัน ส่งคำถามแบบ Anonymous และกดโหวต Upvote), และ Presentation Viewer (แสดงคำถามบนจอโปรเจกเตอร์แบบเรียลไทม์)",
      en: "Engineered a reactive single-page application using React, Vite, Node.js, Express, MongoDB, and Socket.io enabling anonymous inquiry submissions, instant upvoting, and moderator workflows with live presentation displays.",
    },
    tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "Tailwind CSS", "JWT", "Vite"],
    github: "",
    demo: "https://thamsod.pages.dev/",
    demoLabel: {
      th: "ทดลองใช้งาน (Live Demo)",
      en: "Launch Live Demo",
    },
    slideLink: "https://canva.link/t752z7d3mtqvueo",
    slideLabel: {
      th: "สไลด์นำเสนอ (Canva)",
      en: "Slide Presentation (Canva)",
    },
  },

  {
    id: "farmjet",
    isFeatured: false,
    category: "fullstack",
    thumbnail: "./projects/farmjet.png",
    title: {
      th: "FarmJet: แพลตฟอร์มตลาดกลางสำหรับ E-Commerce สินค้าและผลผลิตจากฟาร์ม",
      en: "FarmJet: Farm-to-Consumer E-Commerce Marketplace",
    },
    tagline: {
      th: "เว็บแอปพลิเคชันตลาดกลางผลผลิตเกษตรสดใหม่ ส่งตรงจากเกษตรกรถึงผู้บริโภค พร้อมคำนวณค่าส่งตามระยะทางจริง",
      en: "A direct farm-to-table marketplace platform featuring real-time geolocation distance-based shipping and automated promotions.",
    },
    role: {
      th: "พัฒนาคนเดียวทั้งหมด (Solo Full-Stack Developer) ตั้งแต่ออกแบบฐานข้อมูล, ระบบเบื้องหลัง ไปจนถึงหน้าบ้าน Responsive UI",
      en: "Solo Full-Stack Developer: Designed relational database schemas, server-side business logic, and responsive frontend UI independently.",
    },
    outcome: {
      th: "โปรเจกต์วิชา CSI402 ได้เรียนรู้การใช้ภาษา C# (ASP.NET Core MVC) เป็นครั้งแรกในการเชื่อมต่อ Frontend, Backend และฐานข้อมูล MySQL ร่วมกับระบบคิดค่าส่งตามพิกัด GPS",
      en: "CSI402 course project: First time mastering C# ASP.NET Core MVC with MySQL, integrating distance-based GPS delivery pricing.",
    },
    problem: {
      th: "สินค้าเกษตรและผลผลิตสดมักผ่านพ่อค้าคนกลางหลายทอด ทำให้ผู้บริโภคต้องซื้อสินค้าในราคาสูงขณะที่เกษตรกรได้รับผลตอบแทนต่ำ อีกทั้งขาดระบบตลาดกลางที่เชื่อมโยงฟาร์มท้องถิ่นโดยตรง และไม่มีการคิดค่าจัดส่งตามระยะทางพิกัดจริงอย่างเป็นธรรม",
      en: "Agricultural supply chains suffer from excessive middlemen markups, depriving farmers of fair margins and burdening consumers with inflated prices and lack of direct farm origin transparency.",
    },
    solution: {
      th: "ออกแบบและพัฒนา Full-Stack Web Application ด้วยสถาปัตยกรรม ASP.NET Core MVC ร่วมกับฐานข้อมูล MySQL/SQL Server มีระบบ 3 บทบาท (Customer, Farm Owner, Admin) รองรับการปักหมุดพิกัด GPS (Latitude/Longitude) เพื่อคำนวณค่าจัดส่งตามระยะทางจริง ระบบตะกร้าสินค้าแบบเชื่อมฐานข้อมูล ระบบสั่งซื้อและติดตามสถานะแบบเรียลไทม์ พร้อมระบบ Flash Sale และโปรโมชันคำนวณส่วนลดอัตโนมัติ",
      en: "Developed an ASP.NET Core MVC application with MySQL/SQL Server, implementing multi-role access control, GPS geolocation distance-based delivery calculations, real-time order lifecycle tracking, and dynamic promotion engines.",
    },
    tech: ["C#", "ASP.NET Core MVC", "MySQL", "SQL Server", "JavaScript", "Bootstrap", "AJAX"],
    github: "",
    demo: "",
  },

  {
    id: "slide-me",
    isFeatured: false,
    category: "fullstack",
    thumbnail: "./projects/slide-me.png",
    title: {
      th: "Slide Me: แอปพลิเคชันบริการเรียกรถสไลด์และช่วยเหลือฉุกเฉินบนท้องถนน",
      en: "Slide Me: On-Demand Roadside Assistance & Slide Car Towing Platform",
    },
    tagline: {
      th: "แพลตฟอร์มจับคู่ผู้ใช้รถที่ประสบเหตุฉุกเฉินกับผู้ให้บริการรถสไลด์ในพื้นที่ใกล้เคียง พร้อมประเมินราคาล่วงหน้าตามระยะทาง GPS",
      en: "On-demand roadside assistance and flatbed towing application connecting stranded drivers with nearest tow operators via GPS routing.",
    },
    role: {
      th: "พัฒนาในส่วน Backend Logic, การคำนวณราคาตามระยะทางพิกัด GPS และระบบ RESTful API ทั้งหมด",
      en: "Engineered entire backend business logic, GPS distance routing fare estimations, and RESTful API endpoints.",
    },
    outcome: {
      th: "โปรเจกต์ชั้นปีที่ 2 ได้ฝึกฝนการออกแบบ API สำหรับเชื่อมโยง 2 แอปพลิเคชัน (ฝั่งลูกค้า และ ฝั่งคนขับรถสไลด์)",
      en: "2nd-year project: Gained practical expertise in designing dual-role REST APIs coordinating customer and service driver workflows.",
    },
    problem: {
      th: "เมื่อเกิดอุบัติเหตุหรือรถเสียฉุกเฉิน การค้นหาเบอร์ติดต่อรถสไลด์ที่น่าเชื่อถือเป็นเรื่องยาก ราคาค่าบริการมักไม่โปร่งใส ไม่สามารถประเมินค่าใช้จ่ายล่วงหน้าได้ และไม่สามารถตรวจสอบสถานะหรือพิกัดตำแหน่งของรถยกได้แบบเรียลไทม์",
      en: "Stranded motorists often face predatory pricing, lack of transparent rates, and uncoordinated dispatch times when seeking emergency towing and slide car services.",
    },
    solution: {
      th: "ออกแบบระบบและพัฒนาต้นแบบแอปพลิเคชันแยกสองฝั่ง (Customer App และ Driver App) เชื่อมต่อด้วย Node.js/Express Backend มีระบบค้นหาและเรียกใช้บริการผ่านพิกัด GPS, การคำนวณราคาตามระยะทางจริงก่อนยืนยัน, การติดตามตำแหน่งรถแบบเรียลไทม์, และระบบให้คะแนนรีวิวผู้ให้บริการ",
      en: "Constructed dual customer and driver application workflows backed by Node.js and REST APIs, incorporating GPS-based dispatching, upfront transparent fare calculation, real-time status telemetry, and driver review systems.",
    },
    tech: ["React", "Node.js", "Express", "REST API", "Figma", "GPS Geolocation", "JavaScript"],
    github: "",
    demo: "https://woradech-dev.github.io/_SlideMe/",
    demoLabel: {
      th: "Demo ฝั่งลูกค้า (Customer App)",
      en: "Customer App Demo",
    },
    extraLink: "https://woradech-dev.github.io/_SlideMeDriver/",
    extraLinkLabel: {
      th: "Demo ฝั่งคนขับ (Driver App)",
      en: "Driver App Demo",
    },
    slideLink: "https://canva.link/y7bmot03qfmy89b",
    slideLabel: {
      th: "สไลด์นำเสนอ (Canva)",
      en: "Slide Presentation (Canva)",
    },
  },

  {
    id: "trash-space",
    isFeatured: false,
    category: "other",
    thumbnail: "./projects/trash-space.png",
    title: {
      th: "Trash Space: เกมคณิตศาสตร์ 24 ธีมอวกาศด้วยโครงสร้างข้อมูลขั้นสูง",
      en: "Trash Space: Space-Themed 24 Puzzle Game with Data Structures",
    },
    tagline: {
      th: "เกมปริศนาคณิตศาสตร์เกม 24 ธีมอวกาศ นำแนวคิด Data Structures (Queue, Recursion, Array) มาประยุกต์ใช้ในการควบคุมเกม",
      en: "A dynamic 24 mathematical game leveraging advanced Data Structures like Queue pipelines and Recursive meteor mechanics.",
    },
    role: {
      th: "พัฒนา Game Logic และระบบเบื้องหลังของเกม โดยเน้นการนำ Data Structures มาควบคุมกลไกเกม",
      en: "Developed core game logic and algorithmic mechanics leveraging fundamental Data Structures.",
    },
    outcome: {
      th: "โปรเจกต์ชั้นปีที่ 1 เทอม 2 นำแนวคิด Data Structures ขั้นสูง (Queue สำหรับคลังตัวเลข FIFO และ Recursion สำหรับวิถีอุกกาบาต) มาประยุกต์ใช้ในเกมจริงได้อย่างมีประสิทธิภาพ",
      en: "1st-year project (Term 2): Successfully applied advanced data structures (FIFO Queue pipelines & Recursion) into an interactive HTML5 game engine.",
    },
    problem: {
      th: "เกมปริศนาคณิตศาสตร์ 24 แบบดั้งเดิมมักขาดความน่าสนใจและการโต้ตอบที่สนุกสนานสำหรับผู้เล่นรุ่นใหม่",
      en: "Traditional 24 puzzle games lack engaging interactive mechanics, making algorithmic and mental math practice monotonous.",
    },
    solution: {
      th: "พัฒนาเกม 24 ในรูปแบบเกมอวกาศ โดยประยุกต์ใช้แนวคิดโครงสร้างข้อมูล (Data Structures): Queue (FIFO) สำหรับระบบคลังตัวเลข, Recursion สำหรับคำนวณการเคลื่อนที่ของอุกกาบาต, และ Array พร้อมระบบนับเวลาถอยหลังและคิดคะแนนตามความแม่นยำ",
      en: "Implemented an arcade-style space puzzle game utilizing core computer science data structures including Queues for number buffering, Recursion for projectile trajectories, and dynamic scoring timers.",
    },
    tech: ["JavaScript", "HTML5 Canvas", "Data Structures", "CSS3"],
    github: "",
    demo: "https://woradech-dev.github.io/SpaceGameProject/home",
    demoLabel: {
      th: "ทดลองเล่นเกม (Live Game Demo)",
      en: "Play Live Game Demo",
    },
    slideLink: "https://canva.link/kvgam2zsdww8sp3",
    slideLabel: {
      th: "สไลด์นำเสนอ (Canva)",
      en: "Slide Presentation (Canva)",
    },
  },
];
