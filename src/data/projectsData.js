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

// 🚀 รายการโปรเจกต์จริงของคุณเฉพาะในโฟลเดอร์ "Project":
export const projectsList = [
  {
    id: "pha-thai-ai",
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
    demo: "",
  },

  {
    id: "slipscan-ai",
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
    demo: "",
  },

  {
    id: "farmjet",
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
    id: "thamsod-qa",
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
    demo: "",
  },

  {
    id: "slide-me",
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
    demo: "",
  },

  {
    id: "trash-space",
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
    demo: "",
  },

  {
    id: "ref-fashion",
    category: "fullstack",
    thumbnail: "./projects/ref-fashion.png",
    title: {
      th: "REF: แอปพลิเคชันแนะนำสไตล์การแต่งกายและจับคู่เสื้อผ้าตามสถานการณ์",
      en: "REF: Fashion Styling Recommendation & Outfit Coordination Platform",
    },
    tagline: {
      th: "แอปพลิเคชันคอมมูนิตี้แฟชั่น แนะนำการแต่งกายให้เข้ากับโอกาสและสถานที่ พร้อมระบบเชื่อมต่อร้านค้าออนไลน์",
      en: "Fashion styling and wardrobe coordination platform with situational outfit suggestions and integrated shopping links.",
    },
    problem: {
      th: "กลุ่มวัยรุ่นและคนรุ่นใหม่มักประสบปัญหาเลือกเครื่องแต่งกายไม่ถูกเมื่อต้องออกไปในที่สาธารณะ ขาดไอเดียหรือ Reference ในการแต่งตัว ชุดที่แต่งซ้ำๆ ไม่หลากหลาย และไม่ทราบแหล่งซื้อสินค้าเครื่องแต่งกายที่เข้ากับสไตล์ตนเองในงบประมาณที่จำกัด",
      en: "Young adults frequently face decision fatigue and lack styling references when dressing for different social occasions, resulting in repetitive outfits and difficulty discovering affordable apparel.",
    },
    solution: {
      th: "ออกแบบและพัฒนาต้นแบบ Web/App ด้วยหลักการ Design Thinking และ Responsive Prototype โดยมีฟีเจอร์จัดเก็บตู้เสื้อผ้าของผู้ใช้ (User's Collection), ระบบแนะนำชุดที่เข้ากับเสื้อผ้าที่มีอยู่เดิม, ฟังก์ชันแนะนำการแต่งกายตามโอกาสและสถานที่ (Every Situation), ระบบ Wishlist, และการเชื่อมต่อลิงก์ไปยังหน้าร้านค้าออนไลน์ได้ทันที",
      en: "Engineered a responsive application prototype featuring personal wardrobe collection management, situational outfit curation algorithms, mix-and-match styling suggestions, and direct retailer checkout links.",
    },
    tech: ["JavaScript", "HTML5", "CSS3", "Figma", "Design Thinking", "Responsive Web"],
    github: "",
    demo: "",
  }
];
