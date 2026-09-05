/**
 * ==============================================================================
 * 📦 PROJECTS DATA (ไฟล์จัดการข้อมูลโปรเจกต์ของคุณ Woradech)
 * ==============================================================================
 * 💡 คำแนะนำในการกรอกข้อมูล:
 * 1. 【แนบรูปภาพ Thumbnail】: 
 *    - นำรูปภาพของคุณไปวางไว้ที่โฟลเดอร์: public/projects/ (เช่น public/projects/demo1.png)
 *    - แล้วใส่ในฟิลด์ thumbnail เป็น: "./projects/demo1.png"
 *    - หรือถ้าใช้รูปจาก URL ออนไลน์ สามารถใส่ URL ได้เลย เช่น "https://..."
 *    - ถ้าไม่มีรูป ให้เว้นว่างเป็น "" ระบบจะแสดงการ์ดสไตล์ Tech Gr adient สวยงามให้อัตโนมัติ!
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
  github: "https://github.com/woradech-dev/your-repo", // ลิงก์ GitHub หรือเว้นว่าง "" ได้
  demo: "", // ลิงก์ Live Demo หรือเว้นว่าง "" ได้
};

// 🚀 รายการโปรเจกต์จริงของคุณ (แก้ไข / เพิ่ม / ลบ ได้ตามต้องการ):
export const projectsList = [
  {
    id: "project-1",
    category: "fullstack",
    thumbnail: "", // แนะนำ: นำรูปมาวางใน public/projects/ แล้วใส่ path เช่น "./projects/pos.png"
    title: {
      th: "ระบบบริหารจัดการและแอปพลิเคชัน (Full-Stack Web)",
      en: "Full-Stack Management Web Application",
    },
    tagline: {
      th: "เว็บแอปพลิเคชันพร้อมระบบหลังบ้านและการจัดการฐานข้อมูล",
      en: "Complete web application with backend API and database integration",
    },
    problem: {
      th: "การทำงานและการเก็บข้อมูลแบบเดิมมีความซ้ำซ้อน ตรวจสอบย้อนหลังยาก และขาดระบบแจ้งเตือนแบบเรียลไทม์",
      en: "Manual data management was prone to errors, slow to query, and lacked real-time status updates.",
    },
    solution: {
      th: "ออกแบบและพัฒนา Web Application ด้วย React และ Node.js พร้อมระบบยืนยันตัวตนด้วย JWT เชื่อมต่อฐานข้อมูล MySQL และออกแบบให้ Responsive",
      en: "Engineered a responsive web application utilizing React, Node.js, and MySQL with secure JWT authentication and optimized schemas.",
    },
    tech: ["React", "Node.js", "MySQL", "JWT", "Tailwind CSS", "REST API"],
    github: "https://github.com/woradech-dev", // ลิงก์ไปยัง GitHub Repo จริงของคุณ (ถ้าไม่มีให้ใส่ "")
    demo: "", // ลิงก์ Demo (ถ้ามีให้ใส่ เช่น "https://my-demo.vercel.app" ถ้าไม่มีใส่ "")
  },

  {
    id: "project-2",
    category: "automation",
    thumbnail: "",
    title: {
      th: "ระบบ Automation Pipeline & Discord Bot",
      en: "Automated Data Pipeline & Discord Bot",
    },
    tagline: {
      th: "สคริปต์ดึงข้อมูลอัตโนมัติ (Web Scraper) พร้อมส่งการแจ้งเตือนแบบเรียลไทม์",
      en: "Autonomous web scraping engine with real-time community notifications",
    },
    problem: {
      th: "การติดตามอัปเดตข้อมูลจากแหล่งภายนอกต้องอาศัยการกดรีเฟรชและตรวจสอบด้วยมือตลอดเวลา",
      en: "Tracking external updates manually was repetitive, inefficient, and prone to delays.",
    },
    solution: {
      th: "พัฒนาสคริปต์อัตโนมัติด้วย Python ดึงข้อมูลจากเว็บไซต์เป้าหมาย และส่งแจ้งเตือนเข้า Discord Channel ทันทีเมื่อมีการเปลี่ยนแปลง",
      en: "Constructed automated Python scripts to scrape target feeds and dispatch rich embedded notifications directly into Discord.",
    },
    tech: ["Python", "Discord Bot", "Web Scraping", "N8N Automation", "AsyncIO"],
    github: "https://github.com/woradech-dev",
    demo: "",
  }
];
