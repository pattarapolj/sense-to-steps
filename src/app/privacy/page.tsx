import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy notice | ${site.name}`,
  description: `How ${site.name} handles information from this website.`,
};

export default function PrivacyPage() {
  return (
    <main className="section-cream min-h-screen px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <article className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-soft-md sm:p-10">
        <Link href="/" className="text-sm font-medium text-c-accent underline-offset-4 hover:underline">
          ← กลับหน้าแรก / Back to home
        </Link>
        <h1 className="mt-6 font-display text-3xl text-ink sm:text-4xl">
          นโยบายความเป็นส่วนตัว / Privacy notice
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Last updated: August 20, 2026
        </p>

        <div className="mt-8 space-y-7 text-sm leading-relaxed text-ink/85 sm:text-base">
          <section>
            <h2 className="font-display text-xl text-ink">ข้อมูลที่เว็บไซต์นี้ใช้</h2>
            <p className="mt-2">
              เว็บไซต์นี้ไม่มีแบบฟอร์มเก็บข้อมูล และไม่มีคุกกี้สำหรับโฆษณาหรือวิเคราะห์พฤติกรรมผู้ใช้ ปัจจุบันเว็บไซต์จะบันทึกเฉพาะภาษาที่คุณเลือกไว้ในเบราว์เซอร์ของคุณ เพื่อให้แสดงผลครั้งถัดไปได้สะดวกขึ้น
            </p>
            <p className="mt-2">
              This website has no data-collection form and does not use advertising or analytics cookies. It only stores your language preference in your browser for future visits.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-ink">เมื่อคุณติดต่อผ่าน LINE</h2>
            <p className="mt-2">
              เมื่อคุณเลือกเปิด LINE การสนทนาจะเกิดขึ้นบนแพลตฟอร์มของ LINE และอยู่ภายใต้นโยบายของ LINE กรุณาส่งเฉพาะข้อมูลที่จำเป็นต่อการเริ่มต้นพูดคุย และอย่าส่งข้อมูลเร่งด่วนหรือข้อมูลสุขภาพละเอียดอ่อนผ่านช่องทางนี้
            </p>
            <p className="mt-2">
              When you open LINE, the conversation takes place on LINE&apos;s platform and is subject to LINE&apos;s policies. Share only what is needed to begin a conversation; do not send urgent matters or detailed sensitive health information through this channel.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-ink">การติดต่อและการเปลี่ยนแปลง</h2>
            <p className="mt-2">
              หากมีคำถามเกี่ยวกับข้อมูลส่วนบุคคล โปรดติดต่อเราได้ทาง LINE Official Account เว็บไซต์นี้จะปรับปรุงนโยบายฉบับนี้เมื่อมีการเพิ่มแบบฟอร์ม การวิเคราะห์ผู้ใช้ หรือช่องทางติดต่ออื่น
            </p>
            <p className="mt-2">
              For privacy questions, contact us through our LINE Official Account. We will update this notice if we add forms, analytics, or other contact channels.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
