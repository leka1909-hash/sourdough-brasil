import React from "react";
import { Wheat, Coffee, BookOpen, Download, CircleCheck, MessageSquare, FlaskConical, Timer, Thermometer, Droplets, Globe2, Link as LinkIcon, Mail } from "lucide-react";

export default function LandingSourdoughBrasil() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-stone-100 to-stone-50 text-stone-900">
      {/* NAV */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-stone-200">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-amber-700/90 grid place-items-center shadow-sm">
              <Wheat className="h-5 w-5 text-amber-50" />
            </div>
            <div className="leading-tight">
              <p className="font-extrabold tracking-tight text-stone-900">Sourdough Brasil</p>
              <p className="text-xs text-stone-600">Terras & Torras • pão & café</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-stone-700">
            <a href="#levain" className="hover:text-amber-800 transition">Passo a passo</a>
            <a href="#ciencia" className="hover:text-amber-800 transition">Ciência</a>
            <a href="#receita" className="hover:text-amber-800 transition">Receita base</a>
            <a href="#faq" className="hover:text-amber-800 transition">FAQ</a>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://wa.me/55991706613" target="_blank" className="inline-flex items-center gap-2 rounded-2xl bg-amber-700 px-4 py-2 text-amber-50 shadow hover:bg-amber-800 transition">
              <MessageSquare className="h-4 w-4" /> Fale no WhatsApp
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900">
              Aprenda o <span className="text-amber-800">segredo do levain</span> — do primeiro dia ao pão com crosta que canta.
            </h1>
            <p className="mt-4 text-stone-700 text-lg">
              Guia prático, fundamentado em ciência e tradição. Crie seu fermento natural em 7 dias, domine dobras, vapor e corte, e harmonize com cafés especiais.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#levain" className="inline-flex items-center gap-2 rounded-2xl bg-stone-900 px-5 py-2.5 text-stone-50 shadow hover:bg-stone-800 transition">
                <BookOpen className="h-4 w-4" /> Começar agora
              </a>
              <a href="#guia" className="inline-flex items-center gap-2 rounded-2xl bg-amber-100 px-5 py-2.5 text-amber-900 hover:bg-amber-200 transition">
                <Download className="h-4 w-4" /> Baixar Guia Rápido (PDF)
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-stone-600">
              <div className="flex items-center gap-2"><CircleCheck className="h-4 w-4 text-green-600"/>Conteúdo testado</div>
              <div className="flex items-center gap-2"><CircleCheck className="h-4 w-4 text-green-600"/>Sem compli
