// components/common/WhatsAppButton.tsx
"use client";

import { motion } from "framer-motion";

const phoneNumber = "917018424491"; // +91 70184 24491, no spaces or symbols
const message = "Hi Mentorex! I'd like to know more about your tutoring sessions.";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/20"
    >
      <svg viewBox="0 0 24 24" fill="white" className="h-7 w-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.9.531 3.68 1.451 5.195L2 22l4.943-1.417A9.947 9.947 0 0 0 12.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.213a8.176 8.176 0 0 1-4.166-1.14l-.299-.177-3.106.891.906-3.03-.194-.31A8.185 8.185 0 0 1 3.83 12c0-4.508 3.667-8.174 8.171-8.174 4.505 0 8.171 3.666 8.171 8.174 0 4.508-3.666 8.213-8.171 8.213z" />
      </svg>
    </motion.a>
  );
}