import React from 'react';
import '../index.css';

import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="p-8 bg-gray-100 rounded-2xl shadow-lg max-w-2xl mx-auto my-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <ul className="space-y-4 text-lg">
        <li className="flex items-center gap-3">
          <Mail className="text-blue-600" />
          <a href="mailto:nikitaoldham4@gmail.com" className="hover:underline">
            nikitaoldham4@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-3">
          <Linkedin className="text-blue-700" />
          <a
            href="https://linkedin.com/in/nikita-oldham-27991a340"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/nikita-oldham-27991a340
          </a>
        </li>
        <li className="flex items-center gap-3">
          <Github className="text-gray-800" />
          <a
            href="https://github.com/Nikita-oldham"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/Nikita-oldham
          </a>
        </li>
      </ul>
    </section>
  );
}

