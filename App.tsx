/**
 * Literature Exam Practice App: Spanish <-> Armenian
 * EXAMEN DE PRÁCTICA DE LITERATURA — 7.º CURSO
 * ԳՐԱԿԱՆՈՒԹՅԱՆ ՓՈՐՁՆԱԿԱՆ ՔՆՆՈՒԹՅՈՒՆ — 7-ՐԴ ԴԱՍԱՐԱՆ
 */

import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  GraduationCap,
  Layers,
  Sparkles,
  Search,
  Volume2,
  Eye,
  EyeOff,
  RotateCcw,
  Languages,
  ChevronDown,
  ChevronUp,
  Award,
  Check,
  FileText,
  Lightbulb,
  HelpCircle,
  Type
} from 'lucide-react';
import {
  EXAM_SECTIONS,
  FLASHCARDS,
  QUIZ_ITEMS,
  type TranslationPair
} from './examData.ts';

// Text-to-speech helper for Spanish
function speakSpanish(text: string) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const cleanText = text.replace(/«|»|—|\n/g, ' ').trim();
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'es-ES';
  utterance.rate = 0.92;
  window.speechSynthesis.speak(utterance);
}

export type FontSizeLevel = 'normal' | 'large' | 'xlarge';

// Interactive clickable translation item
interface ClickableTranslationProps {
  pair: TranslationPair;
  label?: string;
  forceOpen?: boolean;
  highlight?: boolean;
  audioEnabled?: boolean;
  className?: string;
  badge?: string;
  fontSize?: FontSizeLevel;
}

function ClickableTranslation({
  pair,
  label,
  forceOpen = false,
  highlight = false,
  audioEnabled = true,
  className = '',
  badge,
  fontSize = 'large'
}: ClickableTranslationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const showArmenian = forceOpen || isOpen;

  // Font size classes based on level
  const esTextClass =
    fontSize === 'xlarge'
      ? 'text-xl md:text-2xl leading-relaxed'
      : fontSize === 'large'
      ? 'text-lg md:text-xl leading-relaxed'
      : 'text-base md:text-lg leading-relaxed';

  const hyTextClass =
    fontSize === 'xlarge'
      ? 'text-lg md:text-xl leading-relaxed'
      : fontSize === 'large'
      ? 'text-base md:text-lg leading-relaxed'
      : 'text-sm md:text-base leading-relaxed';

  const metaTextClass =
    fontSize === 'xlarge' ? 'text-xs md:text-sm' : 'text-xs md:text-xs';

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`group relative rounded-2xl border transition-all duration-200 cursor-pointer select-text ${
        showArmenian
          ? 'bg-amber-50/80 border-amber-300 shadow-xs ring-1 ring-amber-200/60'
          : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-indigo-400 hover:shadow-xs'
      } ${highlight ? 'ring-2 ring-indigo-400/80' : ''} ${className}`}
      title="Սեղմիր՝ հայերեն թարգմանությունը տեսնելու համար / Haz clic para ver la traducción en armenio"
    >
      {/* Header bar / affordance */}
      <div className={`flex items-center justify-between px-4 py-2 border-b border-slate-100 bg-slate-50/70 rounded-t-2xl text-slate-500 ${metaTextClass}`}>
        <div className="flex items-center gap-2">
          <span className="font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200 text-xs">
            ES 🇪🇸
          </span>
          {label && <span className="font-semibold text-slate-700">{label}</span>}
          {badge && (
            <span className="px-2 py-0.5 bg-slate-200 text-slate-800 font-medium rounded-full text-xs">
              {badge}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2.5">
          {audioEnabled && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                speakSpanish(pair.es);
              }}
              className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              title="Լսել իսպաներեն արտասանությունը (Audio ES)"
            >
              <Volume2 className="w-4 h-4 text-indigo-600" />
            </button>
          )}
          <span className="inline-flex items-center gap-1.5 text-slate-500 group-hover:text-amber-800 font-semibold text-xs">
            {showArmenian ? (
              <>
                <EyeOff className="w-4 h-4 text-amber-700" />
                <span className="text-amber-800">Թաքցնել հայերենը</span>
              </>
            ) : (
              <>
                <Eye className="w-4 h-4 text-indigo-500 group-hover:text-amber-700" />
                <span>🇦🇲 Սեղմիր՝ թարգմանելու համար</span>
              </>
            )}
          </span>
        </div>
      </div>

      {/* Spanish text */}
      <div className={`p-4 md:p-5 text-slate-900 font-normal whitespace-pre-line ${esTextClass}`}>
        {pair.es}
      </div>

      {/* Armenian translation drawer */}
      {showArmenian && (
        <div className="px-4 pb-4 pt-3 border-t border-amber-200/90 bg-amber-50/95 rounded-b-2xl text-amber-950">
          <div className="flex items-center gap-2 font-bold text-amber-900 text-xs md:text-sm mb-1.5 tracking-wide">
            <span>🇦🇲 ՀԱՅԵՐԵՆ ԹԱՐԳՄԱՆՈՒԹՅՈՒՆ</span>
          </div>
          <p className={`whitespace-pre-line text-slate-800 font-normal ${hyTextClass}`}>
            {pair.hy}
          </p>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'study' | 'exam' | 'flashcards' | 'quiz'>('study');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBlockId, setSelectedBlockId] = useState<string>('all');
  const [globalRevealTranslations, setGlobalRevealTranslations] = useState<boolean>(false);
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  const [masteredItems, setMasteredItems] = useState<Record<string, boolean>>({});
  // Font size controller state - default to 'large'
  const [fontSize, setFontSize] = useState<FontSizeLevel>('large');

  // Flashcards state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [cardFilter, setCardFilter] = useState<string>('all');

  // Quiz state
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState<Record<string, string>>({});
  const [submittedQuiz, setSubmittedQuiz] = useState(false);

  // Filter sections by search & block
  const filteredSections = useMemo(() => {
    return EXAM_SECTIONS.map((section) => {
      if (selectedBlockId !== 'all' && section.id !== selectedBlockId) {
        return null;
      }
      if (!searchQuery.trim()) {
        return section;
      }
      const qLower = searchQuery.toLowerCase();
      const matchSection =
        section.title.es.toLowerCase().includes(qLower) ||
        section.title.hy.toLowerCase().includes(qLower) ||
        (section.intro && (section.intro.es.toLowerCase().includes(qLower) || section.intro.hy.toLowerCase().includes(qLower)));

      const matchedQuestions = section.questions.filter((q) => {
        return (
          q.prompt.es.toLowerCase().includes(qLower) ||
          q.prompt.hy.toLowerCase().includes(qLower) ||
          q.answer.es.toLowerCase().includes(qLower) ||
          q.answer.hy.toLowerCase().includes(qLower) ||
          (q.contextText && (q.contextText.es.toLowerCase().includes(qLower) || q.contextText.hy.toLowerCase().includes(qLower))) ||
          q.tags?.some((t) => t.toLowerCase().includes(qLower)) ||
          q.options?.some((o) => o.es.toLowerCase().includes(qLower) || o.hy.toLowerCase().includes(qLower))
        );
      });

      if (matchSection || matchedQuestions.length > 0) {
        return {
          ...section,
          questions: matchedQuestions.length > 0 ? matchedQuestions : section.questions
        };
      }
      return null;
    }).filter(Boolean) as typeof EXAM_SECTIONS;
  }, [searchQuery, selectedBlockId]);

  // Flashcards filtered
  const filteredFlashcards = useMemo(() => {
    if (cardFilter === 'all') return FLASHCARDS;
    return FLASHCARDS.filter((c) => c.category === cardFilter);
  }, [cardFilter]);

  const toggleAnswer = (id: string) => {
    setRevealedAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleMastered = (id: string) => {
    setMasteredItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Total questions count for progress
  const totalQuestions = useMemo(() => {
    return EXAM_SECTIONS.reduce((acc, s) => acc + s.questions.length, 0);
  }, []);
  const masteredCount = useMemo(() => {
    return Object.values(masteredItems).filter(Boolean).length;
  }, [masteredItems]);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans flex flex-col selection:bg-amber-200">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-700 via-indigo-600 to-amber-500 flex items-center justify-center text-white shadow-sm shadow-indigo-200 shrink-0">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-wider uppercase bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full border border-amber-200">
                  7.º CURSO / 7-ՐԴ ԴԱՍԱՐԱՆ
                </span>
                <span className="text-xs text-slate-500 font-semibold">ES 🇪🇸 ⇄ HY 🇦🇲</span>
              </div>
              <h1 className="text-lg md:text-xl font-extrabold text-slate-900 leading-tight">
                Examen de Literatura — Գրականության Քննություն
              </h1>
            </div>
          </div>

          {/* Quick Stats, Font Size Scaler & Global Controls */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Font size switcher buttons */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
              <span className="text-xs font-bold text-slate-500 px-2 flex items-center gap-1">
                <Type className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Տառաչափ՝</span>
              </span>
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                  fontSize === 'normal'
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Սովորական տառաչափ (Normal)"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2.5 py-1 text-sm font-extrabold rounded-lg transition-all ${
                  fontSize === 'large'
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Մեծ տառաչափ (Grande - Նախընտրելի)"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-2.5 py-1 text-base font-black rounded-lg transition-all ${
                  fontSize === 'xlarge'
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Առավելագույն խոշոր տառաչափ (Muy grande)"
              >
                A++
              </button>
            </div>

            {/* Global reveal translations button */}
            <button
              onClick={() => setGlobalRevealTranslations(!globalRevealTranslations)}
              className={`inline-flex items-center gap-1.5 text-xs md:text-sm font-bold px-3 py-1.5 rounded-xl border transition-all ${
                globalRevealTranslations
                  ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                  : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-50'
              }`}
              title="Միացնել կամ անջատել բոլոր հայերեն թարգմանությունները միանգամից"
            >
              <Languages className="w-4 h-4" />
              <span>
                {globalRevealTranslations ? 'Հայերենը բաց է' : '👆 Բացել բոլոր թարգմանությունները'}
              </span>
            </button>

            {/* Progress pill */}
            <div className="flex items-center gap-1.5 text-xs md:text-sm bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl text-slate-700">
              <Award className="w-4 h-4 text-amber-500" />
              <span className="font-bold text-slate-900">
                {masteredCount} / {totalQuestions}
              </span>
              <span className="text-slate-500">յուրացված</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="max-w-6xl mx-auto px-4 flex gap-1 border-t border-slate-100 overflow-x-auto py-1.5 scrollbar-none">
          <button
            onClick={() => setActiveTab('study')}
            className={`flex items-center gap-2 px-4 py-2 text-sm md:text-base font-bold rounded-xl transition-colors whitespace-nowrap ${
              activeTab === 'study'
                ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>1. Ուսումնական Նյութեր (Bloques 1-7 & Parte 2)</span>
          </button>

          <button
            onClick={() => setActiveTab('exam')}
            className={`flex items-center gap-2 px-4 py-2 text-sm md:text-base font-bold rounded-xl transition-colors whitespace-nowrap ${
              activeTab === 'exam'
                ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>2. Փորձնական Քննություն (Simulador)</span>
          </button>

          <button
            onClick={() => setActiveTab('flashcards')}
            className={`flex items-center gap-2 px-4 py-2 text-sm md:text-base font-bold rounded-xl transition-colors whitespace-nowrap ${
              activeTab === 'flashcards'
                ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>3. Տերմինների Քարտեր (Flashcards)</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 px-4 py-2 text-sm md:text-base font-bold rounded-xl transition-colors whitespace-nowrap ${
              activeTab === 'quiz'
                ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>4. Ինքնաստուգում (Test Rápido)</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 py-6 flex-1 w-full">
        {/* Banner with Hint */}
        <div className="mb-6 p-5 rounded-2xl bg-gradient-to-r from-indigo-950 via-indigo-900 to-indigo-950 text-white shadow-md relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-amber-500/10 -skew-x-12 transform pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-amber-300 mb-1.5">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>Ինտերակտիվ ուսուցում 7-րդ դասարանի համար • Խոշոր տառատեսակ</span>
              </div>
              <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">
                Սեղմիր ցանկացած իսպաներեն տեքստի վրա՝ հայերեն թարգմանությունը բացելու համար
              </h2>
              <p className="text-sm md:text-base text-indigo-200 mt-1.5 max-w-2xl leading-relaxed">
                Haz clic sobre cualquier frase o explicación en español para revelar al instante su traducción al armenio. Puedes escuchar la pronunciación con el altavoz 🔊 y comprobar las respuestas del examen.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-sm font-semibold bg-white/15 border border-white/20 px-3.5 py-2 rounded-xl text-indigo-100">
                Մեթոդ՝ ES ➔ HY
              </span>
            </div>
          </div>
        </div>

        {/* TAB 1: STUDY MODE */}
        {activeTab === 'study' && (
          <div className="space-y-6">
            {/* Filter & Search Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex flex-col md:flex-row gap-3 items-center justify-between">
              {/* Search input */}
              <div className="relative w-full md:w-96">
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Փնտրել (օր․՝ metáfora, romance, սինալեֆա, հանգ)..."
                  className="w-full pl-10 pr-3 py-2.5 text-sm md:text-base rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-slate-50 focus:bg-white transition-all font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
                  >
                    Մաքրել
                  </button>
                )}
              </div>

              {/* Block selector */}
              <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
                <span className="text-sm text-slate-600 font-bold whitespace-nowrap">Բաժին՝</span>
                <select
                  value={selectedBlockId}
                  onChange={(e) => setSelectedBlockId(e.target.value)}
                  className="text-sm md:text-base py-2.5 px-3.5 rounded-xl border border-slate-200 bg-white font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">Բոլոր բաժինները (Todos los bloques)</option>
                  <option value="bloque-1">Bloque 1: Lenguaje literario</option>
                  <option value="bloque-2">Bloque 2: Géneros literarios</option>
                  <option value="bloque-3">Bloque 3: Literatura popular y culta</option>
                  <option value="bloque-4">Bloque 4: Romance, leyenda, mito y cuento</option>
                  <option value="bloque-5">Bloque 5: Las figuras literarias</option>
                  <option value="bloque-6">Bloque 6: Análisis completo de un texto</option>
                  <option value="bloque-7">Bloque 7: Crea y explica</option>
                  <option value="parte-2-ex">Parte 2: Examen de práctica (14 ejercicios)</option>
                </select>
              </div>
            </div>

            {/* Quick block chips for fast jumping */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedBlockId('all')}
                className={`text-xs md:text-sm px-3.5 py-1.5 rounded-xl font-bold transition-all ${
                  selectedBlockId === 'all'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                Բոլորը
              </button>
              {EXAM_SECTIONS.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => setSelectedBlockId(sec.id)}
                  className={`text-xs md:text-sm px-3 py-1.5 rounded-xl font-bold transition-all ${
                    selectedBlockId === sec.id
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {sec.number}
                </button>
              ))}
            </div>

            {/* Section list */}
            {filteredSections.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
                <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-2" />
                <p className="text-slate-600 font-semibold text-lg">Որևէ արդյունք չգտնվեց «{searchQuery}» հարցմամբ</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedBlockId('all');
                  }}
                  className="mt-3 text-sm font-bold text-indigo-600 hover:underline"
                >
                  Վերականգնել ֆիլտրերը
                </button>
              </div>
            ) : (
              filteredSections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden"
                >
                  {/* Section Title Header */}
                  <div className="p-5 md:p-6 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-indigo-50/40">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-extrabold text-indigo-800 uppercase tracking-wider bg-indigo-100 px-2.5 py-0.5 rounded-md border border-indigo-200">
                        {section.number}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">
                      {section.title.es}
                    </h3>
                    <p className="text-base md:text-lg font-bold text-amber-900 mt-1">
                      {section.title.hy}
                    </p>

                    {/* Section Intro with click-to-translate */}
                    {section.intro && (
                      <div className="mt-4">
                        <ClickableTranslation
                          pair={section.intro}
                          label="Ներածական տեսություն / Introducción teórica"
                          forceOpen={globalRevealTranslations}
                          fontSize={fontSize}
                          highlight
                        />
                      </div>
                    )}
                  </div>

                  {/* Questions in this section */}
                  <div className="p-5 md:p-6 divide-y divide-slate-100 space-y-8">
                    {section.questions.map((q, idx) => {
                      const isAnswerRevealed = revealedAnswers[q.id] || globalRevealTranslations;
                      const isMastered = masteredItems[q.id];

                      return (
                        <div
                          key={q.id}
                          className={`pt-6 first:pt-0 ${
                            isMastered ? 'bg-emerald-50/40 -mx-5 px-5 py-5 rounded-2xl' : ''
                          }`}
                        >
                          {/* Question header */}
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <div className="flex items-center gap-2.5 flex-wrap">
                              <span className="w-8 h-8 rounded-full bg-slate-900 text-white text-sm font-extrabold flex items-center justify-center shrink-0">
                                {q.number || idx + 1}
                              </span>
                              {q.title && (
                                <span className="font-extrabold text-base md:text-lg text-slate-800">
                                  {q.title.es} — {q.title.hy}
                                </span>
                              )}
                              {q.tags && (
                                <div className="hidden sm:flex items-center gap-1.5">
                                  {q.tags.slice(0, 3).map((tag) => (
                                    <span
                                      key={tag}
                                      className="text-xs bg-slate-100 text-slate-600 font-semibold px-2.5 py-0.5 rounded-md border border-slate-200"
                                    >
                                      #{tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>

                            {/* Mark as mastered button */}
                            <button
                              onClick={() => toggleMastered(q.id)}
                              className={`flex items-center gap-1.5 text-xs md:text-sm px-3 py-1.5 rounded-xl font-bold transition-colors ${
                                isMastered
                                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                              }`}
                              title="Նշել որպես յուրացված"
                            >
                              <Check className={`w-4 h-4 ${isMastered ? 'text-emerald-700' : ''}`} />
                              <span>{isMastered ? 'Յուրացված է' : 'Նշել որպես յուրացված'}</span>
                            </button>
                          </div>

                          {/* Question Prompt (Clickable) */}
                          <div className="mb-4">
                            <ClickableTranslation
                              pair={q.prompt}
                              label="Հարց / Pregunta"
                              forceOpen={globalRevealTranslations}
                              fontSize={fontSize}
                            />
                          </div>

                          {/* Context Text if present (e.g. poem excerpt, dialogue) */}
                          {q.contextText && (
                            <div className="mb-4 pl-3.5 border-l-4 border-indigo-600">
                              <ClickableTranslation
                                pair={q.contextText}
                                label="Վերլուծության տեքստ / Texto de análisis"
                                forceOpen={globalRevealTranslations}
                                fontSize={fontSize}
                                className="bg-slate-50 font-serif"
                              />
                            </div>
                          )}

                          {/* Options if present (e.g., Frase A, Frase B) */}
                          {q.options && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                              {q.options.map((opt) => (
                                <ClickableTranslation
                                  key={opt.key}
                                  pair={{ es: opt.es, hy: opt.hy }}
                                  badge={`Տարբերակ ${opt.key}`}
                                  forceOpen={globalRevealTranslations}
                                  fontSize={fontSize}
                                />
                              ))}
                            </div>
                          )}

                          {/* Subquestions if present */}
                          {q.subQuestions && (
                            <div className="space-y-3.5 mb-4 pl-2 sm:pl-4 border-l-2 border-slate-200">
                              {q.subQuestions.map((sub) => (
                                <div key={sub.id} className="space-y-2">
                                  <ClickableTranslation
                                    pair={sub.prompt}
                                    badge={sub.key}
                                    forceOpen={globalRevealTranslations}
                                    fontSize={fontSize}
                                  />
                                  {isAnswerRevealed && (
                                    <div className="pl-4">
                                      <ClickableTranslation
                                        pair={sub.answer}
                                        label={`Պատասխան ${sub.key || ''}`}
                                        forceOpen={globalRevealTranslations}
                                        fontSize={fontSize}
                                        className="bg-emerald-50/60 border-emerald-200"
                                      />
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Reveal Answer Section */}
                          <div className="mt-4">
                            <div className="flex items-center justify-between">
                              <button
                                onClick={() => toggleAnswer(q.id)}
                                className={`inline-flex items-center gap-2 text-xs md:text-sm font-bold px-4 py-2 rounded-xl transition-all ${
                                  isAnswerRevealed
                                    ? 'bg-emerald-700 text-white shadow-xs'
                                    : 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100 border border-emerald-300'
                                }`}
                              >
                                {isAnswerRevealed ? (
                                  <>
                                    <ChevronUp className="w-4 h-4" />
                                    <span>Թաքցնել պատասխանը (Ocultar respuesta)</span>
                                  </>
                                ) : (
                                  <>
                                    <ChevronDown className="w-4 h-4" />
                                    <span>Բացել պատասխանը (Ver respuesta explicada)</span>
                                  </>
                                )}
                              </button>
                            </div>

                            {/* Answer Box */}
                            {isAnswerRevealed && (
                              <div className="mt-3 space-y-3">
                                <ClickableTranslation
                                  pair={q.answer}
                                  label="Քննական պատասխան / Respuesta razonada"
                                  forceOpen={globalRevealTranslations}
                                  fontSize={fontSize}
                                  className="bg-emerald-50/70 border-emerald-300 ring-1 ring-emerald-200"
                                />

                                {/* Notes / Extra Explanations */}
                                {q.notes &&
                                  q.notes.map((note, nIdx) => (
                                    <ClickableTranslation
                                      key={nIdx}
                                      pair={note}
                                      label="Կարևոր նշում / Nota explicativa"
                                      forceOpen={globalRevealTranslations}
                                      fontSize={fontSize}
                                      className="bg-amber-50/60 border-amber-300"
                                    />
                                  ))}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* TAB 2: EXAM SIMULATOR */}
        {activeTab === 'exam' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    ✍️ Քննության Մոդելավորիչ — Ստուգիր քո պատրաստվածությունը
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 mt-1">
                    Կարդա՛ հարցը իսպաներենով, մտածիր պատասխանը (կամ սեղմիր հայերեն թարգմանությունը տեսնելու համար), ապա բացիր քննական պատասխանը և համեմատիր։
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setRevealedAnswers({});
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-center gap-1.5 text-xs md:text-sm font-bold px-3.5 py-2 rounded-xl border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Փակել բոլոր պատասխանները</span>
                  </button>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden mb-6">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-emerald-500 h-full transition-all duration-300"
                  style={{ width: `${(masteredCount / totalQuestions) * 100}%` }}
                />
              </div>

              {/* Exam Question Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {EXAM_SECTIONS.flatMap((sec) => sec.questions).map((q, idx) => {
                  const isRevealed = revealedAnswers[q.id];
                  const isMastered = masteredItems[q.id];

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        isMastered
                          ? 'border-emerald-300 bg-emerald-50/40 shadow-xs'
                          : 'border-slate-200 bg-white hover:border-indigo-300 shadow-xs'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-sm font-extrabold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200">
                          № {q.number || idx + 1}
                        </span>
                        <button
                          onClick={() => toggleMastered(q.id)}
                          className={`flex items-center gap-1 text-xs md:text-sm px-3 py-1 rounded-lg font-bold transition-colors ${
                            isMastered
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>{isMastered ? 'Յուրացված' : 'Նշել որպես յուրացված'}</span>
                        </button>
                      </div>

                      {/* Question prompt */}
                      <ClickableTranslation
                        pair={q.prompt}
                        badge="Հարց (սեղմիր թարգմանելու համար)"
                        forceOpen={globalRevealTranslations}
                        fontSize={fontSize}
                        className="mb-3"
                      />

                      {q.contextText && (
                        <div className="mb-3 font-serif">
                          <ClickableTranslation
                            pair={q.contextText}
                            badge="Տեքստ"
                            forceOpen={globalRevealTranslations}
                            fontSize={fontSize}
                          />
                        </div>
                      )}

                      {/* Reveal Answer */}
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        {isRevealed ? (
                          <div className="space-y-3">
                            <ClickableTranslation
                              pair={q.answer}
                              label="Քննական պատասխան"
                              forceOpen={true}
                              fontSize={fontSize}
                              className="bg-emerald-50 border-emerald-300"
                            />
                            <button
                              onClick={() => toggleAnswer(q.id)}
                              className="text-xs md:text-sm font-bold text-slate-500 hover:text-slate-800"
                            >
                              Փակել պատասխանը
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => toggleAnswer(q.id)}
                            className="w-full py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-sm rounded-xl transition-colors border border-indigo-200 flex items-center justify-center gap-2"
                          >
                            <Lightbulb className="w-4 h-4" />
                            <span>Բացել պատասխանը (Ver respuesta)</span>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: FLASHCARDS */}
        {activeTab === 'flashcards' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg md:text-xl">
                  📇 Տերմինների Ինտերակտիվ Քարտեր (Figuras & Conceptos)
                </h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  Սեղմիր քարտի վրա՝ շրջելու և հայերեն բացատրությունն ու օրինակը տեսնելու համար
                </p>
              </div>

              {/* Category selector */}
              <div className="flex items-center gap-2 flex-wrap">
                {['all', 'fónico', 'morfosintáctico', 'semántico', 'métrica', 'teatro'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setCardFilter(cat);
                      setCurrentCardIndex(0);
                      setIsCardFlipped(false);
                    }}
                    className={`text-xs md:text-sm px-3 py-1.5 rounded-xl font-bold capitalize transition-all ${
                      cardFilter === cat
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat === 'all' ? 'Բոլորը' : cat}
                  </button>
                ))}
              </div>
            </div>

            {filteredFlashcards.length > 0 && (
              <div className="space-y-4">
                {/* 3D-styled Flip Card */}
                {(() => {
                  const card = filteredFlashcards[currentCardIndex];
                  return (
                    <div
                      onClick={() => setIsCardFlipped(!isCardFlipped)}
                      className={`min-h-[360px] p-8 rounded-3xl border-2 transition-all duration-300 cursor-pointer shadow-md flex flex-col justify-between ${
                        isCardFlipped
                          ? 'bg-gradient-to-br from-amber-50 to-orange-50/60 border-amber-300'
                          : 'bg-gradient-to-br from-white to-indigo-50/50 border-indigo-200 hover:border-indigo-400'
                      }`}
                    >
                      {/* Top badge */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold uppercase tracking-wider bg-slate-900 text-white px-3 py-1 rounded-full">
                          {card.category}
                        </span>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              speakSpanish(card.term.es + '. ' + card.example.es);
                            }}
                            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-indigo-600 shadow-2xs"
                            title="Լսել իսպաներեն"
                          >
                            <Volume2 className="w-5 h-5 text-indigo-600" />
                          </button>
                          <span className="text-sm text-slate-500 font-bold">
                            Քարտ {currentCardIndex + 1} / {filteredFlashcards.length}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="my-6 text-center">
                        {!isCardFlipped ? (
                          <div className="space-y-4">
                            <span className="text-sm text-indigo-600 font-bold uppercase tracking-wider">
                              Իսպաներեն Տերմին (Término)
                            </span>
                            <h4 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                              {card.term.es}
                            </h4>
                            <p className="text-lg md:text-xl text-slate-700 font-medium max-w-lg mx-auto leading-relaxed">
                              {card.definition.es}
                            </p>
                            <div className="mt-4 inline-block bg-white border border-slate-200 px-5 py-3 rounded-2xl text-slate-900 font-serif italic text-base md:text-lg shadow-2xs">
                              {card.example.es}
                            </div>
                            <div className="text-sm text-amber-800 font-bold pt-2">
                              👆 Սեղմիր՝ հայերեն թարգմանությունն ու մեկնաբանությունը տեսնելու համար
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-4 text-left">
                            <span className="text-sm text-amber-900 font-extrabold uppercase tracking-wider block text-center">
                              🇦🇲 ՀԱՅԵՐԵՆ ԹԱՐԳՄԱՆՈՒԹՅՈՒՆ ԵՎ ՎԵՐԼՈՒԾՈՒԹՅՈՒՆ
                            </span>
                            <h4 className="text-2xl md:text-3xl font-extrabold text-amber-950 text-center">
                              {card.term.hy}
                            </h4>
                            <div className="bg-white/90 p-5 rounded-2xl border border-amber-200 space-y-3 shadow-2xs">
                              <p className="text-base md:text-lg text-slate-900 leading-relaxed">
                                <strong className="text-slate-950 font-bold">Սահմանում․</strong> {card.definition.hy}
                              </p>
                              <p className="text-base md:text-lg text-slate-900 leading-relaxed font-serif italic">
                                <strong className="text-slate-950 font-sans not-italic font-bold">Օրինակ․</strong> {card.example.hy}
                              </p>
                              <p className="text-sm md:text-base text-amber-950 bg-amber-100/70 p-3 rounded-xl leading-relaxed">
                                <strong>Բացատրություն․</strong> {card.explanation.hy}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Bottom action hint */}
                      <div className="text-center text-sm font-medium text-slate-400">
                        {isCardFlipped ? 'Սեղմիր՝ հետ շրջելու համար' : 'Սեղմիր քարտի վրա՝ շրջելու համար'}
                      </div>
                    </div>
                  );
                })()}

                {/* Navigation controls */}
                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      setIsCardFlipped(false);
                      setCurrentCardIndex((prev) =>
                        prev === 0 ? filteredFlashcards.length - 1 : prev - 1
                      );
                    }}
                    className="px-5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 text-sm md:text-base font-bold rounded-xl transition-all shadow-2xs"
                  >
                    ← Նախորդը
                  </button>

                  <button
                    onClick={() => setIsCardFlipped(!isCardFlipped)}
                    className="px-5 py-2.5 bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 text-indigo-700 text-sm md:text-base font-bold rounded-xl transition-all"
                  >
                    Շրջել (Girar)
                  </button>

                  <button
                    onClick={() => {
                      setIsCardFlipped(false);
                      setCurrentCardIndex((prev) =>
                        prev === filteredFlashcards.length - 1 ? 0 : prev + 1
                      );
                    }}
                    className="px-5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 text-sm md:text-base font-bold rounded-xl transition-all shadow-2xs"
                  >
                    Հաջորդը →
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: QUIZ RAPIDO */}
        {activeTab === 'quiz' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                <h3 className="text-xl font-extrabold text-slate-900">
                  🎯 Արագ Ստուգարք — Թեստային Առաջադրանքներ
                </h3>
                {submittedQuiz && (
                  <span className="text-sm font-extrabold px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                    Արդյունք՝{' '}
                    {
                      QUIZ_ITEMS.filter(
                        (q) =>
                          selectedQuizAnswers[q.id] &&
                          q.options.find((o) => o.id === selectedQuizAnswers[q.id])?.isCorrect
                      ).length
                    }{' '}
                    / {QUIZ_ITEMS.length}
                  </span>
                )}
              </div>
              <p className="text-sm md:text-base text-slate-600 mb-6">
                Ընտրիր ճիշտ տարբերակը։ Կտտացրու հարցի վրա՝ հայերեն թարգմանությունը տեսնելու համար։
              </p>

              <div className="space-y-6">
                {QUIZ_ITEMS.map((item, idx) => {
                  const userAnswer = selectedQuizAnswers[item.id];
                  const isCorrect =
                    submittedQuiz &&
                    item.options.find((o) => o.id === userAnswer)?.isCorrect;

                  return (
                    <div
                      key={item.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        submittedQuiz
                          ? isCorrect
                            ? 'bg-emerald-50/50 border-emerald-300'
                            : 'bg-rose-50/50 border-rose-300'
                          : 'bg-white border-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-extrabold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className="text-xs md:text-sm text-slate-500 font-bold">
                          Հարց {idx + 1}
                        </span>
                      </div>

                      {/* Question with translation */}
                      <ClickableTranslation
                        pair={item.question}
                        badge="Հարց"
                        forceOpen={globalRevealTranslations}
                        fontSize={fontSize}
                        className="mb-4"
                      />

                      {/* Options */}
                      <div className="space-y-2.5 mb-4">
                        {item.options.map((opt) => {
                          const isSelected = userAnswer === opt.id;
                          return (
                            <div
                              key={opt.id}
                              onClick={() => {
                                if (!submittedQuiz) {
                                  setSelectedQuizAnswers((prev) => ({
                                    ...prev,
                                    [item.id]: opt.id
                                  }));
                                }
                              }}
                              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-400'
                                  : 'bg-white hover:bg-slate-50 border-slate-200'
                              } ${
                                submittedQuiz && opt.isCorrect
                                  ? 'bg-emerald-100 border-emerald-500 text-emerald-950 font-semibold'
                                  : ''
                              } ${
                                submittedQuiz && isSelected && !opt.isCorrect
                                  ? 'bg-rose-100 border-rose-400 text-rose-950'
                                  : ''
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <div
                                  className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center shrink-0 ${
                                    isSelected
                                      ? 'border-indigo-600 bg-indigo-600 text-white'
                                      : 'border-slate-300'
                                  }`}
                                >
                                  {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                                </div>
                                <div className="flex-1 leading-relaxed">
                                  <div className="font-bold text-slate-900 text-base md:text-lg">{opt.text.es}</div>
                                  <div className="text-slate-600 text-sm md:text-base mt-1">{opt.text.hy}</div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Feedback when submitted */}
                      {submittedQuiz && (
                        <div className="pt-3 border-t border-slate-200/60">
                          <ClickableTranslation
                            pair={item.explanation}
                            label="Բացատրություն / Explicación razonada"
                            forceOpen={true}
                            fontSize={fontSize}
                            className="bg-white"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Submit & Reset Buttons */}
              <div className="mt-8 flex items-center justify-between gap-3 pt-5 border-t border-slate-200">
                <button
                  onClick={() => {
                    setSelectedQuizAnswers({});
                    setSubmittedQuiz(false);
                  }}
                  className="px-5 py-2.5 border border-slate-300 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50"
                >
                  Սկսել նորից
                </button>

                <button
                  onClick={() => setSubmittedQuiz(true)}
                  disabled={Object.keys(selectedQuizAnswers).length === 0}
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl text-sm md:text-base font-extrabold shadow-md shadow-indigo-200 transition-all"
                >
                  {submittedQuiz ? 'Վերահաշվարկել' : 'Ստուգել պատասխանները'}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs md:text-sm text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-semibold">
            EXAMEN DE PRÁCTICA DE LITERATURA — 7.º CURSO / ԳՐԱԿԱՆՈՒԹՅԱՆ ՓՈՐՁՆԱԿԱՆ ՔՆՆՈՒԹՅՈՒՆ — 7-ՐԴ ԴԱՍԱՐԱՆ
          </p>
          <p className="text-slate-400">
            Անմիջական թարգմանություն իսպաներենից հայերեն և ձայնային արտասանություն
          </p>
        </div>
      </footer>
    </div>
  );
}
