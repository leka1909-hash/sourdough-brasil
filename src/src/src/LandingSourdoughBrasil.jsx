import React from "react";
import {
  Wheat, Coffee, BookOpen, Download, CircleCheck, MessageSquare,
  FlaskConical, Timer, Thermometer, Droplets, Globe2, Link as LinkIcon, Mail
} from "lucide-react";

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
          <a href="https://wa.me/55991706613" target="_blank" className="inline-flex items-center gap-2 rounded-2xl bg-amber-700 px-4 py-2 text-amber-50 shadow hover:bg-amber-800 transition">
            <MessageSquare className="h-4 w-4" /> Fale no WhatsApp
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
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
              <span className="inline-flex items-center gap-2"><CircleCheck className="h-4 w-4 text-green-600"/>Conteúdo testado</span>
              <span className="inline-flex items-center gap-2"><CircleCheck className="h-4 w-4 text-green-600"/>Sem complicação</span>
              <span className="inline-flex items-center gap-2"><CircleCheck className="h-4 w-4 text-green-600"/>Estética aconchegante</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-[radial-gradient(ellipse_at_top,rgba(245,245,244,1),rgba(231,229,228,1))] border border-stone-200 shadow-xl p-6 flex flex-col justify-end">
              <div className="grid grid-cols-3 gap-2 text-stone-700 text-sm">
                <div className="rounded-xl bg-white/70 backdrop-blur p-3 border border-stone-200">
                  <p className="font-semibold">Hidratação</p><p>70–75%</p>
                </div>
                <div className="rounded-xl bg-white/70 backdrop-blur p-3 border border-stone-200">
                  <p className="font-semibold">Forno</p><p>230ºC → 200ºC</p>
                </div>
                <div className="rounded-xl bg-white/70 backdrop-blur p-3 border border-stone-200">
                  <p className="font-semibold">Fermentação</p><p>Fria 10–12h</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 text-stone-600">
                <span className="inline-flex items-center gap-1"><Thermometer className="h-4 w-4"/> calor estável</span>
                <span className="inline-flex items-center gap-1"><Droplets className="h-4 w-4"/> vapor controlado</span>
                <span className="inline-flex items-center gap-1"><Timer className="h-4 w-4"/> tempo certo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUIA */}
      <section id="guia" className="py-10">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-950 flex items-center gap-3">
              <Download className="h-6 w-6"/> Baixe o Guia Rápido – Pães & Cafés
            </h2>
            <p className="mt-2 text-amber-900/90">
              Tabela de hidratação (65–80%) + proporções ideais por método (V60, Prensa, Moka, Espresso). Perfeito para imprimir e colar na cozinha.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {/* TROQUE O HREF PELO LINK REAL DO PDF (Drive/Dropbox) */}
              <a href="#" target="_blank" className="inline-flex items-center gap-2 rounded-xl bg-amber-700 px-4 py-2 text-amber-50 shadow hover:bg-amber-800 transition">
                Baixar PDF
              </a>
              <a href="https://wa.me/55991706613" target="_blank" className="inline-flex items-center gap-2 rounded-xl border border-amber-700 px-4 py-2 text-amber-900 hover:bg-amber-100 transition">
                <MessageSquare className="h-4 w-4"/>Falar comigo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PASSO A PASSO LEVAIN */}
      <section id="levain" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Levain em 7 dias — passo a passo</h2>
            <p className="mt-2 text-stone-700">Crie seu fermento do zero com farinha + água. Ambiente limpo, frasco de vidro, balança e paciência. Temperatura ideal: 24–26ºC.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {[
                {dia:"Dia 1", texto:"Misture 50 g farinha de trigo (ou metade trigo + metade centeio) + 50 g de água. Consistência pastosa. Cubra com pano/filme furado."},
                {dia:"Dia 2", texto:"Descanso. Pode haver poucas bolhas. Se estiver muito líquido, temperatura está alta; se muito firme, ajuste água."},
                {dia:"Dia 3", texto:"Descarte metade. Alimente com 50 g farinha + 50 g água. Misture, cubra e marque o nível."},
                {dia:"Dia 4", texto:"Repita a alimentação. Já deve dobrar de volume em 6–8h. Aroma: láctico levemente frutado."},
              ].map((s,i)=> (
                <div key={i} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm flex items-start gap-3">
                  <Timer className="h-5 w-5 text-amber-700 mt-0.5"/>
                  <div><p className="font-semibold">{s.dia}</p><p className="text-stone-700">{s.texto}</p></div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {[
                {dia:"Dia 5", texto:"Alimente 1:1:1 (parte de levain : farinha : água). Deve triplicar em 4–6h. Faça o teste de flutuação."},
                {dia:"Dia 6", texto:"Ajuste para sua rotina: mais firme = láctico suave; mais líquido = acético pontudo. Guarde na geladeira quando não for usar."},
                {dia:"Dia 7", texto:"Pronto para panificar. Use 20–25% de levain sobre o total de farinha da receita base."},
                {dia:"Dica", texto:"Se o levain colapsar rápido, está passando do pico — use antes, ou alimente e aguarde novo pico."},
              ].map((s,i)=> (
                <div key={i} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm flex items-start gap-3">
                  <Timer className="h-5 w-5 text-amber-700 mt-0.5"/>
                  <div><p className="font-semibold">{s.dia}</p><p className="text-stone-700">{s.texto}</p></div>
                </div>
              ))}
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              {titulo:"Cheiro muito ácido", texto:"Reduza tempo fora da geladeira e alimente com proporção maior de farinha (1:2:2)."},
              {titulo:"Poucas bolhas", texto:"Aqueça o ambiente (24–26ºC) e use parte de centeio nas próximas alimentações."},
              {titulo:"Forma líquido marrom (hooch)", texto:"Sinal de fome. Misture e alimente; aumente a frequência."},
            ].map((c,i)=> (
              <div key={i} className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <
