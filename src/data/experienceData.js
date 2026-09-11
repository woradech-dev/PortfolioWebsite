/**
 * ==============================================================================
 * 💼 EXPERIENCE DATA (ประวัติการทำงานจริงและประสบการณ์ Freelance)
 * ==============================================================================
 * สอดคล้องกับเสาหลัก 05 EXPERIENCE (Education • Internship • Activity • Real-World Client)
 */

export const experienceData = {
  th: {
    tag: "ประสบการณ์การทำงานจริง",
    title: "ประสบการณ์และผลงาน Production (Real-World Experience)",
    subtitle: "ประวัติการพัฒนาเว็บแอปพลิเคชัน วางสถาปัตยกรรมระบบดิจิทัล และระบบอีเวนต์ระดับ Production ให้กับองค์กรระดับชาติและบริษัทชั้นนำ",
    viewSite: "เยี่ยมชมเว็บไซต์จริง",
    roleLabel: "บทบาทหน้าที่:",
    aboutEventLabel: "เกี่ยวกับงานและองค์กร:",
    challengeLabel: "โจทย์และความท้าทาย:",
    deliverablesLabel: "ระบบและโซลูชันทางเทคนิคที่พัฒนา:",
    badgeProduction: "Production Client",
    badgePlatform: "Platform & Infrastructure",
    items: [
      {
        id: "tobacco-forum-24",
        period: "สิงหาคม 2026",
        role: "Lead Full-Stack Web Developer & System Architect",
        client: "Anona-event & ศจย. (สสส. / รามาธิบดี)",
        eventName: "การประชุมวิชาการสุขภาพ ครั้งที่ 24 (CDoH หวาน เค็ม เมา ควัน)",
        aboutEvent: "งานประชุมวิชาการระดับชาติ จัดโดย ศูนย์วิจัยและจัดการความรู้เพื่อการควบคุมยาสูบ (ศจย.) คณะแพทยศาสตร์โรงพยาบาลรามาธิบดี มหาวิทยาลัยมหิดล ร่วมกับ สสส. และกระทรวงสาธารณสุข ในประเด็น CDoH (Commercial Determinants of Health) การจัดการปัจจัยกำหนดสุขภาพทางพาณิชย์ โดยมีผู้เข้าร่วมประชุมทั้งแพทย์ นักวิชาการ และประชาชนจากทั่วประเทศ",
        challenge: "ต้องการระบบแพลตฟอร์มดิจิทัลที่ไม่ใช่แค่เว็บประชาสัมพันธ์ทั่วไป แต่ต้องเป็น Hybrid Community Platform ขนาดใหญ่ที่รองรับผู้เข้าร่วมงานทั้ง On-site และ Online พร้อมกัน โดยต้องมีระบบสตรีมมิ่งที่ผู้ชมมีส่วนร่วมโหวตได้สดๆ และระบบค้นหารูปถ่ายในงานที่รวดเร็ว",
        description: "ศูนย์วิจัยและจัดการความรู้เพื่อการควบคุมยาสูบ (ศจย.) จ้างพัฒนาแพลตฟอร์ม Website Community ขนาดใหญ่ที่แบ่ง Phase การทำงานตามช่วงเวลาของงานประชุม",
        highlights: [
          "ระบบ Live Stream Interactive พร้อมระบบโหวตคะแนนความคิดเห็นแบบ Real-time บนหน้าสตรีม",
          "ระบบ Gallery ค้นหารูปภาพผู้เข้าร่วมงานด้วย AI สแกนใบหน้า (Face Scan AI) อัปรูปเซลฟี่เพื่อค้นหารูปในงานได้ทันที",
          "ระบบลงทะเบียนและออกตั๋ว E-Ticket (QR Code) สำหรับสแกนเข้างานที่จุด Check-in",
          "ระบบขอหนังสือเชิญประชุมอัตโนมัติ (Automated Dynamic Invitation Letters)",
          "ระบบ Forum กระทู้เสวนาออนไลน์, เกมตอบคำถามความรู้ และ Flipbook เอกสารวิชาการแบบเปิดอ่านออนไลน์",
          "ระบบหลังบ้าน Admin Dashboard นับยอดและสถิติผู้เข้าร่วมงานแบบเรียลไทม์"
        ],
        link: "https://www.forumxtra.com/TobaccoForum24th/",
        tags: ["PHP", "MySQL", "Community Platform", "Live Stream Real-time Voting", "AI Face Scan", "E-Ticket", "Full-Stack"]
      },
      {
        id: "forumxtra-manager",
        period: "เมษายน 2026 – ปัจจุบัน",
        role: "Website Manager & Technical Maintainer",
        client: "Anona-event",
        eventName: "ForumXtra Platform & ANONA Corporate Websites",
        aboutEvent: "ดูแลและบริหารจัดการแพลตฟอร์มสัมมนา ForumXtra และเว็บไซต์หลัก anona-event.com ซึ่งเป็นแพลตฟอร์ม All-in-One และศูนย์รวมบริการด้านการจัดงานประชุมวิชาการ งานสัมมนา และอีเวนต์แบบครบวงจรของบริษัท ANONA House พัฒนาด้วย PHP & MySQL",
        challenge: "ต้องดูแลระบบให้มีความพร้อมใช้งานตลอด 24 ชั่วโมง รองรับผู้ใช้งานจำนวนมากพร้อมกัน (High Concurrency) ในช่วงเวลาจัดงานสำคัญ และต้องมีความยืดหยุ่นในการปรับแต่งฟีเจอร์ตามธีมและโจทย์ของแต่ละงานสัมมนา",
        description: "ได้รับความไว้วางใจให้ดูแลและบริหารจัดการระบบแพลตฟอร์ม ForumXtra และเว็บไซต์ anona-event.com ที่พัฒนาด้วย PHP & MySQL เพื่อรองรับการจัดงานประชุมวิชาการและสัมมนาออนไลน์โดยเฉพาะ",
        highlights: [
          "ดูแลความเสถียรของเซิร์ฟเวอร์ ความปลอดภัยของฐานข้อมูล MySQL และการเข้าถึงระบบของผู้ใช้งานจำนวนมากพร้อมกัน",
          "ปรับแต่งและ Deploy ระบบเฉพาะกิจ (Tailored Event Modules) ด้วย PHP ตามความต้องการของแต่ละงานสัมมนา",
          "จัดการโครงสร้างโดเมน DNS, ระบบความปลอดภัย SSL และการเชื่อมต่อระบบสตรีมมิ่ง"
        ],
        link: "https://www.forumxtra.com/",
        tags: ["PHP", "MySQL", "Platform Management", "Server Deployment", "System Monitoring", "High Concurrency"]
      },
      {
        id: "egat-digiwar-7",
        period: "พฤศจิกายน 2025",
        role: "Full-Stack Developer & Automation Engineer",
        client: "Anona-event & การไฟฟ้าฝ่ายผลิตแห่งประเทศไทย (กฟผ.)",
        eventName: "โครงการ “EGAT DIGIWAR Season 7” (กฟผ. 2568)",
        aboutEvent: "โครงการประกวดผลิตคลิปและสื่อสร้างสรรค์ระดับประเทศ จัดโดย การไฟฟ้าฝ่ายผลิตแห่งประเทศไทย (กฟผ.) ร่วมกับ สถาบันเทคโนโลยีนิวเคลียร์แห่งชาติ (สทน.) ภายใต้หัวข้อ 'สื่อสาร SMR อย่างไร ให้เป๊ะปัง' (โรงไฟฟ้านิวเคลียร์ขนาดเล็กเพื่อพลังงานสะอาด) สำหรับนิสิตและนักศึกษาจากสถาบันอุดมศึกษาทั่วประเทศ",
        challenge: "มีทีมเข้าแข่งขันส่งผลงานคลิปวิดีโอและแผนประชาสัมพันธ์จำนวนมาก และในรอบตัดสิน กรรมการผู้ทรงคุณวุฒิ 4 ท่านต้องให้คะแนนผลงานสดบนเวที โดยต้องรวมคะแนนและประกาศผลแบบ Real-time ทันทีโดยไม่มีความผิดพลาด",
        description: "ออกแบบและพัฒนาระบบดิจิทัลครบวงจรสำหรับการแข่งขันประกวดคลิปและสื่อสร้างสรรค์ของ กฟผ. เพื่อรองรับผู้สมัครจากทั่วประเทศ",
        highlights: [
          "ระบบให้คะแนนผลงานดิจิทัลสำหรับคณะกรรมการ 4 ท่าน พร้อมระบบรวบรวมและแสดงผลคะแนนสดแบบ Real-time Live Tally",
          "เว็บไซต์ลงทะเบียนและระบบส่งผลงานเข้าประกวด (Submission System) รองรับการอัปโหลดไฟล์ขนาดใหญ่",
          "ระบบ Automation ซิงค์ข้อมูลผู้สมัครและลิงก์ผลงานเข้า Google Sheets API อัตโนมัติ",
          "ระบบ LINE Official Account สำหรับกระจายข่าวสารและแจ้งเตือนสถานะแก่ผู้เข้าแข่งขันทั่วประเทศ"
        ],
        link: "",
        tags: ["Real-time Judge Scoring", "Google Sheets API", "LINE OA Broadcast", "Submission Pipeline"]
      },
      {
        id: "tobacco-health-23",
        period: "สิงหาคม 2025",
        role: "Web & LINE Automation Developer",
        client: "Anona-event & สสส. / ศจย.",
        eventName: "การประชุมวิชาการ “บุหรี่กับสุขภาพแห่งชาติ” ครั้งที่ 23",
        aboutEvent: "งานประชุมวิชาการระดับชาติ ณ โรงแรมแกรนด์ ริชมอนด์ จัดโดย ศูนย์วิจัยและจัดการความรู้เพื่อการควบคุมยาสูบ (ศจย.) คณะแพทยศาสตร์ รพ.รามาธิบดี ร่วมกับ สสส. ในวาระครบรอบ 20 ปี ศจย. ภายใต้หัวข้อ 'รวมพลังกระชากหน้ากากธุรกิจบุหรี่ไฟฟ้า : คนรุ่นใหม่รู้เท่าทันกลยุทธ์' (UNMASKING THE APPEAL) มีแพทย์ นักวิชาการ และผู้ทรงคุณวุฒิเข้าร่วมจำนวนหลายร้อยคน",
        challenge: "การลงทะเบียนหน้างานและกระบวนการออกใบรับรองแบบเดิมทำให้เกิดการรอคิวสะสมเป็นเวลานาน ผู้จัดงานต้องการระบบดิจิทัลที่อำนวยความสะดวกตั้งแต่เช็กอินหน้าประตูจนถึงการรับใบประกาศนียบัตร",
        description: "พัฒนาระบบดิจิทัลอำนวยความสะดวกสำหรับผู้เข้าร่วมงานประชุมวิชาการระดับชาติกว่าหลายร้อยคน",
        highlights: [
          "ระบบ E-Ticket สำหรับตรวจสอบการเข้างานผ่านการสแกน QR Code หน้าทางเข้าอย่างสะดวกรวดเร็ว",
          "ระบบสร้างและจัดส่งหนังสือเชิญประชุมอย่างเป็นทางการแบบ Dynamic PDF ระบุชื่อหน่วยงานอัตโนมัติ",
          "ระบบส่งใบประกาศนียบัตร (E-Certificate) อัตโนมัติเข้าสู่อีเมล/LINE ทันทีเมื่อผู้ร่วมงานตอบแบบประเมินผลสำเร็จ",
          "LINE Official Account และเว็บไซต์ Landing Page สำหรับประชาสัมพันธ์และลงทะเบียนล่วงหน้า"
        ],
        link: "",
        tags: ["E-Ticket QR Code", "Automated E-Certificate", "LINE OA", "Dynamic PDF Generation"]
      },
      {
        id: "anona-corporate-web",
        period: "มิถุนายน 2025 – ปัจจุบัน",
        role: "Web Developer & Long-term Maintainer",
        client: "Anona-event",
        eventName: "Anona-event Corporate Website (ANONA House)",
        aboutEvent: "บริษัท อโนนา เฮ้าส์ (ANONA House) เป็นทีมงานมืออาชีพผู้ให้บริการจัดงานอีเวนต์และการประชุมสัมมนาครบวงจร ทั้งงานเปิดตัวสินค้า (Grand Opening), การประชุมสัมมนาทางการ, กิจกรรม CSR, การถ่ายทอดสด Live Streaming และระบบลงทะเบียน Smart Check-in",
        challenge: "สร้างภาพลักษณ์องค์กรที่ทันสมัย น่าเชื่อถือ สะท้อนความเป็นมืออาชีพด้านงานอีเวนต์และเทคโนโลยี พร้อมฟังก์ชันนำเสนอผลงานและระบบถาม-ตอบ AskEvent (ซึ่งคือระบบ 'Thamsod' ที่พัฒนาขึ้นแล้วทาง ANONA ได้ขอซื้อลิขสิทธิ์ระบบนำไปต่อยอดใช้งานจริง)",
        description: "ออกแบบและพัฒนาเว็บไซต์อย่างเป็นทางการของบริษัท อโนนา อีเวนต์ พร้อมดูแลรักษาและอัปเดตระบบต่อเนื่องในระยะยาว",
        highlights: [
          "ออกแบบโครงสร้าง Responsive UI/UX โหลดเร็ว รองรับ SEO และการแสดงผลบนทุกอุปกรณ์",
          "นำเสนอพอร์ตผลงาน บริการจัดงานอีเวนต์ และโซลูชันระบบ All-in-One เชื่อมต่อระบบสัมมนา ForumXtra",
          "รับผิดชอบการดูแลระบบ Hosting, ระบบความปลอดภัย SSL, โดเมน DNS และอัปเดตเนื้อหาต่อเนื่องในระยะยาว"
        ],
        link: "https://anona-event.com/",
        tags: ["Corporate Website", "Responsive UI", "SEO & Performance", "Ongoing Maintenance"]
      }
    ]
  },

  en: {
    tag: "Real-World Experience",
    title: "Production & Client Experience",
    subtitle: "Demonstrated track record delivering mission-critical web platforms, real-time event systems, and automated pipelines for national organizations and enterprise clients.",
    viewSite: "Visit Live Platform",
    roleLabel: "Role & Responsibility:",
    aboutEventLabel: "About Event & Client:",
    challengeLabel: "Challenge & Scope:",
    deliverablesLabel: "Key Features & Deliverables:",
    badgeProduction: "Production Client",
    badgePlatform: "Platform & Infrastructure",
    items: [
      {
        id: "tobacco-forum-24",
        period: "Aug 2026",
        role: "Lead Full-Stack Web Developer & System Architect",
        client: "Anona-event & TRC (ThaiHealth / Ramathibodi)",
        eventName: "24th National Health Conference (CDoH Sweet, Salty, Alcohol, Smoke)",
        aboutEvent: "A flagship national medical conference organized by the Tobacco Control Research and Knowledge Management Center (TRC), Faculty of Medicine Ramathibodi Hospital, Mahidol University, and ThaiHealth. Focused on Commercial Determinants of Health (CDoH) bringing together medical professionals and researchers nationwide.",
        challenge: "Needed a comprehensive hybrid community platform capable of engaging both on-site attendees and remote online participants, featuring real-time stream voting and instant photo searching.",
        description: "Engineered a multi-phase digital community platform for the Tobacco Control Research and Knowledge Management Center (TRC).",
        highlights: [
          "Interactive live streaming with low-latency real-time audience voting directly on screen",
          "Face Scan AI Gallery enabling attendees to find event photos instantly by uploading a selfie",
          "User registration and automated E-Ticket issuance system with QR check-in",
          "Dynamic PDF official invitation letter generation customized by organization",
          "Community discussion forum, interactive quiz games, and digital Flipbook reader",
          "Administrative live dashboard for attendee telemetry and attendance counts"
        ],
        link: "https://www.forumxtra.com/TobaccoForum24th/",
        tags: ["Community Platform", "Live Stream Real-time Voting", "AI Face Scan", "E-Ticket", "Full-Stack"]
      },
      {
        id: "forumxtra-manager",
        period: "Apr 2026 – Present",
        role: "Website Manager & Technical Maintainer",
        client: "Anona-event",
        eventName: "ForumXtra Platform",
        aboutEvent: "ForumXtra is an end-to-end event tech ecosystem developed by ANONA House designed to streamline hybrid conferences—spanning registration landing pages, QR smart check-in, AskEvent live Q&A, and cloud video streaming.",
        challenge: "Ensuring 24/7 high-availability infrastructure, handling concurrent traffic bursts during national events, and rapid delivery of bespoke modules for diverse conference themes.",
        description: "Entrusted with overall platform management and technical operations for ForumXtra, specialized in hybrid medical and scientific conferences.",
        highlights: [
          "Ensuring server uptime, high-concurrency stream stability, and database backups",
          "Rapid turnaround of tailored event features based on organizer specifications",
          "Managing custom DNS, domain provisioning, SSL certification, and live access security"
        ],
        link: "https://www.forumxtra.com/",
        tags: ["Platform Management", "Server Deployment", "System Monitoring", "High Concurrency"]
      },
      {
        id: "egat-digiwar-7",
        period: "Nov 2025",
        role: "Full-Stack Developer & Automation Engineer",
        client: "Anona-event & Electricity Generating Authority of Thailand (EGAT)",
        eventName: "EGAT DIGIWAR Season 7 Competition (2025)",
        aboutEvent: "National youth creative media competition organized by the Electricity Generating Authority of Thailand (EGAT) and TINT, challenging university students across Thailand to communicate Small Modular Reactor (SMR) clean energy concepts.",
        challenge: "Handling large media file submissions from hundreds of university teams, and building a zero-latency digital judging system for 4 panelists to score live onstage without delays or recalculation errors.",
        description: "Built end-to-end competition infrastructure for EGAT's flagship youth multimedia contest across Thailand.",
        highlights: [
          "Live digital judging portal for 4 panelists with instantaneous real-time score tallying",
          "Custom submission portal and secure video/artwork asset upload handling",
          "Google Sheets API automated two-way synchronization pipeline",
          "Automated LINE Official Account for broadcast announcements and alerts"
        ],
        link: "",
        tags: ["Real-time Judge Scoring", "Google Sheets API", "LINE OA Broadcast", "Submission Pipeline"]
      },
      {
        id: "tobacco-health-23",
        period: "Aug 2025",
        role: "Web & LINE Automation Developer",
        client: "Anona-event & ThaiHealth / TRC",
        eventName: "23rd National Conference on Tobacco and Health",
        aboutEvent: "National conference held at Grand Richmond Hotel celebrating TRC's 20th anniversary under the theme 'UNMASKING THE APPEAL', gathering hundreds of medical experts, policymakers, and academics.",
        challenge: "Manual check-in and certificate distribution previously caused massive queues; required seamless end-to-end automation from door entry to certificate delivery.",
        description: "Delivered digital event operations for hundreds of medical and academic participants.",
        highlights: [
          "QR Code powered E-Ticket check-in verification reducing lobby wait times",
          "Dynamic invitation letter generator producing custom certified PDFs",
          "Automated E-Certificate generation and delivery triggered upon post-event survey submission",
          "LINE Official Account and landing page for seamless registration"
        ],
        link: "",
        tags: ["E-Ticket QR Code", "Automated E-Certificate", "LINE OA", "Dynamic PDF Generation"]
      },
      {
        id: "anona-corporate-web",
        period: "Jun 2025 – Present",
        role: "Web Developer & Long-term Maintainer",
        client: "Anona-event",
        eventName: "Anona-event Corporate Website (ANONA House)",
        aboutEvent: "ANONA House is a premier full-service event agency and organizer providing turnkey product launch events, formal seminars, CSR programs, live broadcasting, and smart check-in systems.",
        challenge: "Establishing a sleek, credible corporate web presence highlighting turnkey services and the proprietary AskEvent real-time Q&A system (commercial acquisition of 'Thamsod' platform acquired by ANONA for live event deployments).",
        description: "Designed and implemented the primary corporate online presence for Anona-event with long-term SLA maintenance.",
        highlights: [
          "Fully responsive UI/UX architecture optimized for SEO and fast loading across all viewports",
          "Interactive showcases of past event portfolios and all-in-one conference solutions",
          "Continuous hosting infrastructure, DNS routing, SSL management, and security maintenance"
        ],
        link: "https://anona-event.com/",
        tags: ["Corporate Website", "Responsive UI", "SEO & Performance", "Ongoing Maintenance"]
      }
    ]
  }
};
