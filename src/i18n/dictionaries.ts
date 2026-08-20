export type Locale = "th" | "en";

export const dictionaries = {
    th: {
        nav: {
            letter: "ถึงคุณพ่อคุณแม่",
            process: "ขั้นตอนการให้บริการ",
            team: "ทีมงาน",
            contact: "Contact",
            talkWithUs: "มาคุยกับเรา",
        },
        hero: {
            headline: "ทุกรอยยิ้มคือความสุขของเรา",
            tagline: "ทุกการรับรู้คือจุดเริ่มต้นของทุกก้าวแห่งการเติบโต",
            ctaLabel: "Let's talk",
            ctaTitle: "ไม่แน่ใจว่าต้องเริ่มต้นอย่างไร?",
            ctaBody:
                "สแกน QR Code และทัก Line เพื่อรับคำปรึกษาเบื้องต้นได้ทุกเมื่อโดยไม่มีค่าใช้จ่าย",
            ctaButton: "ดู QR Code",
            ctaHint: "สแกนแล้วคุยกับเราได้ทันที",
        },
        letter: {
            eyebrow: "ถึงคุณพ่อคุณแม่",
            title: "จดหมายจากใจ",
            greeting: "เรียน คุณพ่อคุณแม่และผู้ปกครองทุกท่าน",
            paragraphs: [
                "ในฐานะนักกิจกรรมบำบัดและตัวแทนของทีมสหวิชาชีพ Sense to Steps ขอต้อนรับทุกท่านเข้าสู่ครอบครัวของเราด้วยความอบอุ่นหัวใจ",
                "หากเราลองสังเกตการเติบโตของเด็กๆ เราจะพบว่าภาพของการก้าวเดินของแต่ละคนนั้นงดงามและมีเอกลักษณ์เสมอ บางคนอาจจะก้าวอย่างรวดเร็วด้วยความพร้อม บางคนอาจก้าวขาสั้นๆ อย่างระมัดระวัง ในขณะที่บางคนอาจหยุดแวะเรียนรู้สิ่งรอบตัวก่อนจะค่อยๆ ออกก้าวถัดไป",
                'เด็กทุกคนมีความเร็วในการก้าวเดินที่ไม่เท่ากัน เช่นเดียวกับความถนัด ความสนใจ และศักยภาพเฉพาะตัวที่แตกต่างกันอย่างสิ้นเชิง ไม่มีก้าวไหนที่เร็วหรือช้าเกินไป มีเพียง "จังหวะที่พอดี" สำหรับเด็กแต่ละคน',
                "การเติบโตไม่ใช่สนามแข่งขัน และคุณค่าในตัวเด็กไม่ได้วัดจากการเปรียบเทียบกับใคร สิ่งสำคัญที่สุดจึงไม่ใช่การเร่งรัดให้เขาก้าวไปให้ทันก้าวของคนอื่น แต่คือการที่เราเข้าใจในตัวตนที่แท้จริงของเขา โอบรับความแตกต่างด้วยความรัก และเคียงข้างดูแลอย่างอบอุ่น เพื่อให้เขาได้เติบโตในแบบของตัวเองด้วยความเร็วของเขาเองอย่างมีความสุข",
                "ทีมสหวิชาชีพ Sense to Steps ของเรา มุ่งมั่นที่จะเดินเคียงข้างทุกครอบครัวด้วยความเข้าใจ ขอขอบพระคุณคุณพ่อคุณแม่และผู้ปกครองทุกท่านเป็นอย่างยิ่งที่ให้ความไว้วางใจ ให้ทีมงานของเราได้มีส่วนร่วมในการดูแลและสนับสนุนพัฒนาการของบุตรหลานอันเป็นที่รักของท่านครับ",
            ],
            closing: "ด้วยความรักและความปรารถนาดี",
            signature: "ครูบุช",
            signatureRole: "นักกิจกรรมบำบัด และทีมสหวิชาชีพ Sense to Steps",
        },
        moments: {
            eyebrow: "ช่วงเวลาเล็ก ๆ",
            title: "ทุกก้าวของการเรียนรู้ผ่านการเล่น",
            writingCaption: "การเล่นที่สนุก นำไปสู่การเขียนที่ดี",
            worldCaption: "เตรียมความพร้อมสู่โลกกว้าง",
            sensoryCaption: "เรียนรู้ผ่านการเล่นแบบ Sensory-Based",
        },
        process: {
            eyebrow: "การให้บริการของเรา",
            title: "ขั้นตอนการให้บริการ",
            subtitle:
                "จากการทักทายจนถึงการวางแผนก้าวถัดไปเราจะเดินไปด้วยกันอย่างอบอุ่น",
            steps: [
                {
                    step: "01",
                    title: "ทักทายทำความรู้จัก",
                    detail: "ยินดีต้อนรับสู่ครอบครัว Sense to Steps ทักทายพูดคุยกันได้เลยผ่าน LINE",
                },
                {
                    step: "02",
                    title: "รับฟังและแบ่งปัน",
                    detail: "ให้เราได้ช่วยรับฟัง แลกเปลี่ยนเรื่องราว และมอบคำแนะนำเบื้องต้น",
                },
                {
                    step: "03",
                    title: "ออกแบบการดูแลร่วมกัน",
                    detail: "เลือกแผนการดูแลที่ตอบโจทย์ พร้อมนัดหมายวันเวลาเพื่อพบกัน",
                },
                {
                    step: "04",
                    title: "เติบโตไปด้วยกันอย่างแข็งแรง",
                    detail: "ทบทวนความก้าวหน้า และวางแผนเพื่อก้าวต่อไปที่มั่นคง",
                },
            ],
        },
        team: {
            eyebrow: "ทีมของเรา",
            title: "ทีมงานของเรา",
            subtitle: "คนที่อยู่เคียงข้างคุณพ่อคุณแม่ในทุกก้าว",
            previous: "ดูสมาชิกทีมคนก่อนหน้า",
            next: "ดูสมาชิกทีมคนถัดไป",
            goToMember: "ดูสมาชิกทีมคนที่ {number}",
        },
        contact: {
            eyebrow: "มาคุยกับเรา",
            titleLine1: "เราอยู่ตรงนี้",
            titleLine2: "เมื่อคุณพร้อมจะเล่า",
            body: "สแกน QR Code เพื่อรับคำปรึกษาเบื้องต้นผ่าน LINE",
            link: "หรือแตะที่นี่เพื่อเปิดแชท Line",
            qrAlt: "QR Code สำหรับเพิ่มเพื่อน LineOA",
            openLine: "เปิด Line Official Account",
        },
        footer: {
            talk: "มาคุยกับเราบน Line",
            privacy: "นโยบายความเป็นส่วนตัว",
            imageryDisclosure:
                "ภาพและวิดีโอสต็อกใช้เพื่อประกอบการสื่อสาร ไม่ใช่ภาพของผู้รับบริการ",
            rights: "สงวนลิขสิทธิ์",
        },
    },
    en: {
        nav: {
            letter: "For Parents",
            process: "How We Serve",
            team: "Our Team",
            contact: "Contact",
            talkWithUs: "Talk with us",
        },
        hero: {
            headline: "Every little smile warms our heart",
            tagline: "Every sense is the beginning of every step of growth",
            ctaLabel: "Let's talk",
            ctaTitle: "Don't know how to start?",
            ctaBody:
                "Scan the QR code and message us on LINE anytime for an initial consultation at no cost.",
            ctaButton: "See QR Code",
            ctaHint: "Scan to chat with us right away",
        },
        letter: {
            eyebrow: "For parents",
            title: "A letter from our heart",
            greeting: "Dear Parents and Guardians,",
            paragraphs: [
                "As an occupational therapist and on behalf of the multidisciplinary team at Sense to Steps, I want to warmly welcome you to our family.",
                "When we watch children grow, we see that the way each child takes their steps is always beautiful and unique. Some may step forward quickly and confidently. Others might take careful, little steps. And some might pause to explore the world around them before gently taking their next step.",
                'Every child has their own pace, just as they have their own wonderful mix of talents, interests, and unique potential. There is no such thing as too fast or too slow, there is only the "right pace" for each individual child.',
                "Growing up is not a race, and a child's true value can never be measured by comparing them to anyone else. The most important thing is not to rush them to catch up with someone else's steps. Instead, it is about understanding who they truly are, embracing their uniqueness with love, and being there to support them warmly. This allows them to grow happily in their own beautiful way, at their very own speed.",
                "Our team at Sense to Steps is deeply committed to walking alongside every family with true understanding. Thank you from the bottom of our hearts for your trust, and for allowing us to be a part of caring for and supporting the development of your precious children.",
            ],
            closing: "With love and warmest wishes,",
            signature: "Bush",
            signatureRole:
                "Occupational Therapist & the Sense to Steps Multidisciplinary Team",
        },
        moments: {
            eyebrow: "Little moments",
            title: "Every step of learning through play",
            writingCaption: "Fun play leads to confident writing",
            worldCaption: "Preparing for a wider world",
            sensoryCaption: "Learning through sensory-based play",
        },
        process: {
            eyebrow: "How we serve",
            title: "Our service process",
            subtitle:
                "From a warm hello to planning the next step, we'll walk alongside you.",
            steps: [
                {
                    step: "01",
                    title: "Say hello and get acquainted",
                    detail: "Welcome to the Sense to Steps family. Say hello and chat with us on LINE.",
                },
                {
                    step: "02",
                    title: "Listen and share",
                    detail: "We'll listen, exchange stories, and offer initial guidance.",
                },
                {
                    step: "03",
                    title: "Design care together",
                    detail: "Choose a care plan that fits, then schedule a day and time to meet.",
                },
                {
                    step: "04",
                    title: "Grow stronger together",
                    detail: "Review progress and plan a steady next step together.",
                },
            ],
        },
        team: {
            eyebrow: "Our team",
            title: "Our team",
            subtitle: "The team walking alongside parents every step.",
            previous: "Show previous team member",
            next: "Show next team member",
            goToMember: "Show team member {number}",
        },
        contact: {
            eyebrow: "Let's talk",
            titleLine1: "We're here",
            titleLine2: "when you're ready to share",
            body: "Scan the QR Code for an initial consultation via LINE.",
            link: "Or tap here to open LINE chat",
            qrAlt: "QR code to add our Line Official Account",
            openLine: "Open Line Official Account",
        },
        footer: {
            talk: "Talk with us on LINE",
            privacy: "Privacy notice",
            imageryDisclosure:
                "Stock images and video are illustrative and do not depict our clients.",
            rights: "All rights reserved",
        },
    },
} as const;

export type Dictionary = (typeof dictionaries)["th"];
