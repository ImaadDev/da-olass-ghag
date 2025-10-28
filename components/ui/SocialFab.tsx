"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTwitter, FaLinkedin, FaFacebook, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { Plus } from "lucide-react";

export default function SocialFab() {
  const [open, setOpen] = useState(false);

  const socials = [
    { href: "https://x.com/da_olass_ghag?s=11", icon: <FaTwitter size={18} />, color: "bg-sky-500 hover:bg-sky-600" },
    { href: "https://www.tiktok.com/@daolassghag?_t=ZS-90v4qUMJe5t&_r=1", icon: <FaTiktok size={18} />, color: "bg-neutral-800 hover:bg-neutral-700" },
    { href: "https://www.linkedin.com/in/da-olass-ghag-23749827b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", icon: <FaLinkedin size={18} />, color: "bg-blue-700 hover:bg-blue-800" },
    { href: "https://www.facebook.com/mudam675", icon: <FaFacebook size={18} />, color: "bg-blue-700 hover:bg-blue-800" },
    { href: "https://www.youtube.com/@DaOlassGhag", icon: <FaYoutube size={18} />, color: "bg-red-700 hover:bg-red-800" },
    { href: "https://www.instagram.com/da_olass_ghag?igsh=MXAwa2R1a3V3cnUxMw%3D%3D&utm_source=qr", icon: <FaInstagram size={18} />, color: "bg-pink-700 hover:bg-pink-800" },

  ];

  return (
    <div className="fixed bottom-6 right-14 md:right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center space-y-3 mb-3"
          >
            {socials.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`${item.color} text-white p-3 rounded-full shadow-lg transition-all duration-200`}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: open ? 45 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-gradient-to-tr from-red-600 to-red-700 text-white p-4 rounded-t-full rounded-bl-full shadow-xl backdrop-blur-md hover:shadow-2xl transition-all duration-300"
      >
        <Plus size={22} />
      </motion.button>
    </div>
  );
}
