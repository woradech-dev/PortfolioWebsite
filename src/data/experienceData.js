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
    subtitle: "ประวัติการพัฒนาเว็บแอปพลิเคชันและวางระบบดิจิทัลระดับ Production ให้กับองค์กรและงานสัมมนาระดับชาติ",
    viewSite: "เยี่ยมชมเว็บไซต์จริง",
    roleLabel: "บทบาทหน้าที่:",
    deliverablesLabel: "ฟีเจอร์และระบบที่พัฒนา:",
    badgeProduction: "Production Client",
    badgePlatform: "Platform & Community",
    items: [
      {
        id: "tobacco-forum-24",
        period: "สิงหาคม 2026",
        role: "Lead Full-Stack Web Developer & System Architect",
        client: "Anona-event & ศจย.",
        eventName: "การประชุมวิชาการสุขภาพ ครั้งที่ 24 (CDoH หวาน เค็ม เมา ควัน)",
        description: "ศูนย์วิจัยและจัดการความรู้เพื่อการควบคุมยาสูบ (ศจย.) จ้างพัฒนาแพลตฟอร์ม Website Community ขนาดใหญ่ที่แบ่ง Phase การทำงานตามช่วงเวลาของงานประชุม",
        highlights: [
          "ระบบลงทะเบียนและออก E-Ticket สำหรับผู้เข้าร่วมประชุม",
          "ระบบขอหนังสือเชิญประชุมอัตโนมัติ (Automated Invitation Letters)",
          "ระบบ Live Stream Interactive พร้อมระบบโหวตคะแนนแบบ Real-time",
          "ระบบ Gallery ค้นหารูปภาพผู้เข้าร่วมงานด้วย AI สแกนใบหน้า (Face Scan AI)",
          "ระบบ Forum กระทู้คอมมูนิตี้, เกมตอบคำถาม และ Flipbook เอกสารวิชาการ",
          "ระบบหลังบ้าน Admin Dashboard นับยอดและรายชื่อผู้เข้าร่วมแบบเรียลไทม์"
        ],
        link: "https://www.forumxtra.com/TobaccoForum24th/",
        tags: ["Community Platform", "Live Stream Voting", "AI Face Scan", "E-Ticket", "Full-Stack"]
      },
      {
        id: "forumxtra-manager",
        period: "เมษายน 2026 – ปัจจุบัน",
        role: "Website Manager & Technical Maintainer",
        client: "Anona-event",
        eventName: "ForumXtra Platform",
        description: "ได้รับความไว้วางใจให้ดูแลและบริหารจัดการระบบแพลตฟอร์ม ForumXtra ซึ่งพัฒนาขึ้นเพื่อรองรับการจัดงานประชุมวิชาการและสัมมนาออนไลน์โดยเฉพาะ",
        highlights: [
          "ดูแลความเสถียรของเซิร์ฟเวอร์และความปลอดภัยของฐานข้อมูลในแต่ละงาน",
          "ปรับแต่งและ Deploy ระบบเฉพาะกิจ (Customized Features) ตามโจทย์ของแต่ละอีเวนต์",
          "จัดการโดเมน ระบบสตรีมมิ่ง และการเข้าถึงระบบของผู้ใช้งานจำนวนมากพร้อมกัน"
        ],
        link: "https://www.forumxtra.com/",
        tags: ["Platform Management", "Server Deployment", "System Monitoring"]
      },
      {
        id: "egat-digiwar-7",
        period: "พฤศจิกายน 2025",
        role: "Full-Stack Developer & Automation Engineer",
        client: "Anona-event & การไฟฟ้าฝ่ายผลิตแห่งประเทศไทย (กฟผ.)",
        eventName: "โครงการ “EGAT DIGIWAR Season 7” (2568)",
        description: "ออกแบบและพัฒนาระบบดิจิทัลครบวงจรสำหรับการแข่งขันประกวดคลิปและสื่อสร้างสรรค์ของ กฟผ. เพื่อรองรับผู้สมัครจากทั่วประเทศ",
        highlights: [
          "ระบบ LINE Official Account สำหรับกระจายข่าวสารและแจ้งเตือนผู้เข้าแข่งขัน",
          "เว็บไซต์ลงทะเบียนและระบบส่งผลงานเข้าประกวด (Submission System)",
          "ระบบ Automation ซิงค์ข้อมูลผู้สมัครและไฟล์เข้า Google Sheets อัตโนมัติ",
          "ระบบให้คะแนนผลงานสำหรับคณะกรรมการ 4 ท่าน พร้อมระบบรวบรวมและแสดงคะแนนแบบ Real-time Live Tally"
        ],
        link: "",
        tags: ["Real-time Judge Scoring", "LINE OA", "Submission Pipeline", "Google Sheets API"]
      },
      {
        id: "tobacco-health-23",
        period: "สิงหาคม 2025",
        role: "Web & LINE Automation Developer",
        client: "Anona-event & สสส. / ศจย.",
        eventName: "การประชุมวิชาการ “บุหรี่กับสุขภาพแห่งชาติ” ครั้งที่ 23",
        description: "พัฒนาระบบดิจิทัลอำนวยความสะดวกสำหรับผู้เข้าร่วมงานประชุมวิชาการระดับชาติกว่าหลายร้อยคน",
        highlights: [
          "ระบบ E-Ticket สำหรับตรวจสอบการเข้างานผ่าน QR Code",
          "LINE Official Account และเว็บไซต์สำหรับประชาสัมพันธ์และลงทะเบียนล่วงหน้า",
          "ระบบสร้างและส่งจดหมายเชิญเข้าร่วมประชุมอย่างเป็นทางการแบบ Dynamic PDF",
          "ระบบส่งใบประกาศนียบัตร (E-Certificate) อัตโนมัติเมื่อผู้ร่วมงานทำแบบประเมินเสร็จสิ้น"
        ],
        link: "",
        tags: ["E-Ticket", "LINE OA", "Automated E-Certificate", "Dynamic Letter Generation"]
      },
      {
        id: "anona-corporate-web",
        period: "มิถุนายน 2025 – ปัจจุบัน",
        role: "Web Developer & Long-term Maintainer",
        client: "Anona-event",
        eventName: "Anona-event Corporate Website",
        description: "ออกแบบและพัฒนาเว็บไซต์อย่างเป็นทางการของบริษัท อโนนา อีเวนต์ พร้อมดูแลรักษาและอัปเดตระบบต่อเนื่องในระยะยาว",
        highlights: [
          "สร้างเว็บไซต์แนะนำบริษัท ผลงาน และบริการจัดงานประชุมระดับมืออาชีพ",
          "โครงสร้าง Responsive UI/UX โหลดเร็ว รองรับ SEO และทุกอุปกรณ์",
          "รับผิดชอบการดูแลระบบ Hosting, ความปลอดภัย และอัปเดตเนื้อหาต่อเนื่อง"
        ],
        link: "https://anona-event.com/",
        tags: ["Corporate Website", "Responsive UI", "SEO & Performance", "Ongoing Maintenance"]
      }
    ]
  },

  en: {
    tag: "Real-World Experience",
    title: "Production & Client Experience",
    subtitle: "Demonstrated track record delivering mission-critical web platforms, real-time event systems, and automated pipelines for national organizations.",
    viewSite: "Visit Live Platform",
    roleLabel: "Role & Responsibility:",
    deliverablesLabel: "Key Features & Deliverables:",
    badgeProduction: "Production Client",
    badgePlatform: "Platform & Community",
    items: [
      {
        id: "tobacco-forum-24",
        period: "Aug 2026",
        role: "Lead Full-Stack Web Developer & System Architect",
        client: "Anona-event & TRC (ศจย.)",
        eventName: "24th National Health Conference (CDoH Sweet, Salty, Alcohol, Smoke)",
        description: "Engineered a multi-phase digital community platform for the Tobacco Control Research and Knowledge Management Center (TRC).",
        highlights: [
          "User registration and automated E-Ticket issuance system",
          "Dynamic PDF official invitation letter generation",
          "Interactive live streaming with low-latency real-time audience voting",
          "Face Scan AI Gallery enabling attendees to find event photos by selfie",
          "Community discussion forum, interactive quiz games, and digital Flipbook reader",
          "Administrative live dashboard for attendee telemetry and attendance counts"
        ],
        link: "https://www.forumxtra.com/TobaccoForum24th/",
        tags: ["Community Platform", "Live Stream Voting", "AI Face Scan", "E-Ticket", "Full-Stack"]
      },
      {
        id: "forumxtra-manager",
        period: "Apr 2026 – Present",
        role: "Website Manager & Technical Maintainer",
        client: "Anona-event",
        eventName: "ForumXtra Conference Platform",
        description: "Entrusted with overall platform management and technical operations for ForumXtra, specialized in hybrid medical and scientific conferences.",
        highlights: [
          "Ensuring server uptime, high-concurrency stream stability, and database backups",
          "Rapid turnaround of tailored event features based on organizer specifications",
          "Managing custom DNS, domain provisioning, and live access security"
        ],
        link: "https://www.forumxtra.com/",
        tags: ["Platform Management", "Server Deployment", "System Monitoring"]
      },
      {
        id: "egat-digiwar-7",
        period: "Nov 2025",
        role: "Full-Stack Developer & Automation Engineer",
        client: "Anona-event & Electricity Generating Authority of Thailand (EGAT)",
        eventName: "EGAT DIGIWAR Season 7 Competition (2025)",
        description: "Built end-to-end competition infrastructure for EGAT's flagship youth multimedia contest across Thailand.",
        highlights: [
          "Automated LINE Official Account for broadcast announcements and alerts",
          "Custom submission portal and secure video/artwork asset upload handling",
          "Google Sheets API automated two-way synchronization pipeline",
          "Live judging portal for 4 panelists with instantaneous real-time score tallying"
        ],
        link: "",
        tags: ["Real-time Judge Scoring", "LINE OA", "Submission Pipeline", "Google Sheets API"]
      },
      {
        id: "tobacco-health-23",
        period: "Aug 2025",
        role: "Web & LINE Automation Developer",
        client: "Anona-event & ThaiHealth / TRC",
        eventName: "23rd National Conference on Tobacco and Health",
        description: "Delivered digital event operations for hundreds of medical and academic participants.",
        highlights: [
          "QR Code powered E-Ticket check-in verification",
          "LINE Official Account and landing page for seamless registration",
          "Dynamic invitation letter generator producing custom certified PDFs",
          "Automated E-Certificate generation and delivery triggered upon post-event survey submission"
        ],
        link: "",
        tags: ["E-Ticket", "LINE OA", "Automated E-Certificate", "Dynamic Letter Generation"]
      },
      {
        id: "anona-corporate-web",
        period: "Jun 2025 – Present",
        role: "Web Developer & Long-term Maintainer",
        client: "Anona-event",
        eventName: "Anona-event Corporate Website",
        description: "Designed and implemented the primary corporate online presence for Anona-event with long-term SLA maintenance.",
        highlights: [
          "Engineered high-performance corporate landing pages showcasing event portfolios",
          "Fully responsive UI/UX architecture optimized for SEO and fast loading",
          "Continuous hosting infrastructure, DNS routing, and security maintenance"
        ],
        link: "https://anona-event.com/",
        tags: ["Corporate Website", "Responsive UI", "SEO & Performance", "Ongoing Maintenance"]
      }
    ]
  }
};
