import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-slate-900/60 backdrop-blur-md border-t border-slate-800 py-6 mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-slate-400 text-sm font-light">
        {/* ✨ Text */}
        <p className="text-center md:text-left">
          Made with ❤️ by{" "}
          <span className="text-indigo-400 hover:text-indigo-300 transition-all">
            Kshitij, Krishna, Vihan, Nikhil
          </span>
        </p>

        {/* 🌐 Social Links */}
        <div className="flex items-center gap-5 mt-2 md:mt-0">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:ind.kshitijsingh@gmail.com"
            className="hover:text-indigo-400 transition-all"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
