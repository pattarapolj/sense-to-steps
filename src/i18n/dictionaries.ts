export type Locale = "th" | "en";

export const dictionaries = {
  th: {
    nav: {
      letter: "ถึงคุณพ่อคุณแม่",
      reviews: "รีวิวผู้ใช้งาน",
      process: "ขั้นตอนการให้บริการ",
      team: "ทีมงาน",
      contact: "Contact",
      talkWithUs: "มาคุยกับเรา",
    },
    hero: {
      headline: "เล่าเรื่องราว",
      tagline: "ทุกรอยยิ้มคือความสุขของเรา",
      ctaLabel: "มาคุยกันนะ",
      ctaTitle: "มีอะไรในใจ เล่าให้เราฟังได้",
      ctaBody:
        "สแกน QR หรือทัก Line มาได้ทุกเมื่อ — เราพร้อมรับฟัง โดยไม่ต้องรีบตัดสินใจอะไร",
      ctaButton: "ดู QR Code",
      ctaHint: "สแกนแล้วคุยกับเราได้ทันที",
    },
    letter: {
      eyebrow: "ถึงคุณพ่อคุณแม่",
      title: "จดหมายจากใจ",
      greeting: "เรียน คุณพ่อคุณแม่,",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
      ],
      closing: "ด้วยความอบอุ่น,",
    },
    moments: {
      eyebrow: "ช่วงเวลาเล็ก ๆ",
      title: "ทุกก้าวของการเรียนรู้ผ่านการเล่น",
      playCaption: "สำรวจผ่านการเล่น",
      musicCaption: "รับรู้ผ่านเสียงและจังหวะ",
    },
    reviews: {
      eyebrow: "รีวิวจากใจ",
      title: "เสียงจากผู้ใช้บริการ",
      subtitle:
        "ตัวอย่างรีวิว — เปลี่ยนเป็นข้อความจริงจากครอบครัวของคุณได้ภายหลัง",
      items: [
        {
          quote:
            "คุยง่าย ชัดเจน และช่วยจัดลำดับความคิดให้เป็นขั้นตอนที่ทำตามได้จริง",
          name: "คุณเอ",
          role: "คุณพ่อคุณแม่",
        },
        {
          quote:
            "ทัก Line แล้วรู้สึกอบอุ่นมาก ได้คำตอบเร็ว และรู้สึกมั่นใจตลอดทาง",
          name: "คุณบี",
          role: "คุณพ่อคุณแม่",
        },
        {
          quote:
            "ทีมงานเป็นกันเอง รายละเอียดครบ และทำให้เรารู้สึกไม่ได้อยู่คนเดียว",
          name: "คุณซี",
          role: "คุณพ่อคุณแม่",
        },
        {
          quote:
            "รู้สึกปลอดภัยตั้งแต่คุยครั้งแรก และค่อย ๆ เห็นทางเดินที่ชัดขึ้นทีละก้าว",
          name: "คุณดี",
          role: "คุณพ่อคุณแม่",
        },
      ],
    },
    process: {
      eyebrow: "How we serve",
      title: "ขั้นตอนการให้บริการ",
      subtitle:
        "จากทัก Line จนถึงเดินไปด้วยกัน — อบอุ่น เป็นขั้นตอน และคุยกันได้ตลอดทาง",
      steps: [
        {
          step: "01",
          title: "ทักมาคุยผ่าน Line",
          detail: "เล่าสิ่งที่อยู่ในใจ ความกังวล หรือสิ่งที่อยากให้ช่วยได้เลย",
        },
        {
          step: "02",
          title: "รับฟังและเข้าใจกัน",
          detail: "เราจะคุยด้วยกันอย่างเป็นกันเอง เพื่อให้เห็นภาพที่ชัดขึ้น",
        },
        {
          step: "03",
          title: "เดินไปด้วยกันทีละก้าว",
          detail: "ค่อย ๆ วางแนวทางที่เหมาะกับคุณและครอบครัว",
        },
        {
          step: "04",
          title: "อยู่ข้าง ๆ ตลอดทาง",
          detail: "มีอะไรอยากเล่าเพิ่ม ทักมาได้เสมอ เราพร้อมรับฟัง",
        },
      ],
    },
    team: {
      eyebrow: "Our team",
      title: "ทีมงานของเรา",
      subtitle:
        "คนที่อยู่เคียงข้างคุณพ่อคุณแม่ในทุกก้าว — ใส่ชื่อ รูป และบทบาทจริงได้ภายหลัง",
      members: [
        {
          name: "Khun A",
          role: "ผู้ก่อตั้ง / ผู้เชี่ยวชาญหลัก",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
          initials: "A",
        },
        {
          name: "Khun B",
          role: "นักบำบัด",
          bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
          initials: "B",
        },
        {
          name: "Khun C",
          role: "นักบำบัด",
          bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
          initials: "C",
        },
        {
          name: "Khun D",
          role: "ผู้ประสานงาน",
          bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
          initials: "D",
        },
      ],
    },
    contact: {
      eyebrow: "มาคุยกับเรา",
      titleLine1: "เราอยู่ตรงนี้",
      titleLine2: "เมื่อคุณพร้อมจะเล่า",
      body: "สแกน QR เพื่อเข้ามาทักใน Line ได้เลย ไม่ต้องรีบ ไม่ต้องเตรียมอะไรให้พร้อม — แค่มาคุยด้วยกันก็พอ",
      link: "หรือแตะที่นี่เพื่อเปิดแชท Line",
      qrAlt: "QR Code สำหรับเพิ่มเพื่อน LineOA",
      qrFallback: "ใส่ไฟล์ QR ที่ public/line-qr.png",
      openLine: "เปิด Line Official Account",
    },
    footer: {
      talk: "มาคุยกับเราบน Line",
      rights: "สงวนลิขสิทธิ์",
    },
  },
  en: {
    nav: {
      letter: "For Parents",
      reviews: "Reviews",
      process: "How We Serve",
      team: "Our Team",
      contact: "Contact",
      talkWithUs: "Talk with us",
    },
    hero: {
      headline: "Tell your story",
      tagline: "Every smile is our happiness",
      ctaLabel: "Let's talk",
      ctaTitle: "Whatever's on your mind, you can share it with us",
      ctaBody:
        "Scan the QR or message us on Line anytime — we're here to listen, with no pressure to decide.",
      ctaButton: "See QR Code",
      ctaHint: "Scan to chat with us right away",
    },
    letter: {
      eyebrow: "For parents",
      title: "A letter from the heart",
      greeting: "Dear Parents,",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
      ],
      closing: "With warmth,",
    },
    moments: {
      eyebrow: "Little moments",
      title: "Every step of learning through play",
      playCaption: "Explore through play",
      musicCaption: "Sense through sound and rhythm",
    },
    reviews: {
      eyebrow: "From the heart",
      title: "Voices from families",
      subtitle:
        "Sample reviews — replace these with real messages from your families later.",
      items: [
        {
          quote:
            "Easy to talk to, clear, and helped us turn our thoughts into steps we could actually follow.",
          name: "Khun A",
          role: "Parent",
        },
        {
          quote:
            "Messaging on Line felt warm and reassuring. Replies came quickly, and we felt supported the whole way.",
          name: "Khun B",
          role: "Parent",
        },
        {
          quote:
            "The team is friendly and thorough — we never felt like we were going through it alone.",
          name: "Khun C",
          role: "Parent",
        },
        {
          quote:
            "We felt safe from the first conversation, and the path ahead became clearer step by step.",
          name: "Khun D",
          role: "Parent",
        },
      ],
    },
    process: {
      eyebrow: "How we serve",
      title: "Our simple path together",
      subtitle:
        "From a Line hello to walking side by side — warm, clear, and always open to talk.",
      steps: [
        {
          step: "01",
          title: "Say hello on Line",
          detail:
            "Share what's on your mind, your worries, or how you'd like us to help.",
        },
        {
          step: "02",
          title: "Listen and understand",
          detail:
            "We'll talk warmly together so the picture becomes clearer for everyone.",
        },
        {
          step: "03",
          title: "Take it step by step",
          detail:
            "We'll gently shape a path that fits you and your family.",
        },
        {
          step: "04",
          title: "Stay beside you",
          detail:
            "Whenever you want to share more, just message us — we're here to listen.",
        },
      ],
    },
    team: {
      eyebrow: "Our team",
      title: "People beside you",
      subtitle:
        "The people walking with parents every step — add real names, photos, and roles later.",
      members: [
        {
          name: "Khun A",
          role: "Founder / Lead Specialist",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
          initials: "A",
        },
        {
          name: "Khun B",
          role: "Therapist",
          bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
          initials: "B",
        },
        {
          name: "Khun C",
          role: "Therapist",
          bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
          initials: "C",
        },
        {
          name: "Khun D",
          role: "Coordinator",
          bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
          initials: "D",
        },
      ],
    },
    contact: {
      eyebrow: "Talk with us",
      titleLine1: "We're right here",
      titleLine2: "when you're ready to share",
      body: "Scan the QR to say hello on Line. No rush, nothing to prepare — just come talk with us.",
      link: "Or tap here to open Line chat",
      qrAlt: "QR code to add our Line Official Account",
      qrFallback: "Add your QR file at public/line-qr.png",
      openLine: "Open Line Official Account",
    },
    footer: {
      talk: "Talk with us on Line",
      rights: "All rights reserved",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)["th"];
