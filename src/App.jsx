import React, { useState, useEffect, useRef, useCallback } from "react";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
import {
  LayoutDashboard, FileText, Timer, Mail, Calculator, Star, Target,
  Settings, UserPlus, Image as ImageIcon, PenLine, AlignLeft, Clock,
  DollarSign, CalendarDays, TrendingUp, CheckCircle, List, Zap, Trophy,
  Users, Trash2, Square, Keyboard, Plus, BatteryLow, Flame, Coffee, Layers,
  Receipt, Trash, PlusCircle, ScrollText, Download, Upload, AlertCircle,
  Phone, Globe, AtSign, CheckSquare, History, Bell, BellRing, CalendarClock, ChevronDown,
  Moon, Sun, Languages, X as XIcon,
} from "lucide-react";

/* ════════════════════════════════════════════
   BENCH — Freelance OS
   ════════════════════════════════════════════ */

// ─── TRANSLATIONS ────────────────────────────
const STRINGS = {
  en: {
    appName: "Bench", appSub: "Freelance OS",
    dashboard: "Dashboard", modules: "Workspace", clients: "Clients", settings: "Settings",
    newClient: "New Client", deleteClient: "Delete",
    proposals: "Proposals", timer: "Focus Timer", invoicing: "Invoicing",
    contracts: "Contracts", comms: "Client Comms", rate: "Rate Calc",
    testimonials: "Testimonials", prioritizer: "Tasks",
    generate: "Generate", generateProposal: "Generate Proposal →",
    generateContract: "Generate Contract →", copy: "Copy", exportPdf: "Export PDF",
    refine: "Refine →", start: "▶ Start", pause: "⏸ Pause", reset: "↻ Reset",
    stopLog: "Stop & Log", save: "Save", saveChanges: "Save Changes", cancel: "Cancel",
    delete: "Delete", rename: "❖ Rename", contact: "Contact", remind: "Remind",
    setReminder: "Set Reminder", signIn: "Sign In", signOut: "Sign Out",
    createAccount: "Create Account", markPaid: "Mark Paid",
    downloadInvoice: "Download Invoice PDF", addItem: "Add item",
    exportBackup: "Export Backup", importBackup: "Import Backup",
    uploadLogo: "Upload Logo", changeLogo: "Change Logo", remove: "Remove",
    addFirstClient: "Add your first client →",
    prospect: "Prospect", proposal: "Proposal", active: "Active",
    onHold: "On Hold", completed: "Completed",
    pomodoro: "Pomodoro", billable: "Billable", fixed: "Fixed Price", hourly: "Hourly",
    proposalsDesc: "Winning proposals for", timerDesc: "Deep work for",
    invoicingDesc: "Generate invoices for", contractsDesc: "Service agreements for",
    commsDesc: "Draft emails for", rateDesc: "Calculate your rates",
    testimonialsDesc: "Collect testimonials from", prioritizerDesc: "Prioritize your day for",
    yourName: "Your Name", companyName: "Company Name", email: "Email",
    phone: "Phone", website: "Website", notes: "Notes",
    projectName: "Project Name", scopeOfWork: "Scope of Work",
    deliverables: "Key Deliverables", paymentTerms: "Payment Terms",
    startDate: "Start Date", dueDate: "Due Date", invoiceDate: "Invoice Date",
    invoiceNumber: "Invoice #", taxRate: "Tax Rate (%)", clientEmail: "Client Email",
    yourEmail: "Your Email", hourlyRate: "Hourly Rate ($)",
    dateRange: "Date Range", billingType: "Billing Type",
    lineItems: "Line Items", invoiceDetails: "Invoice Details",
    fixedAmount: "Fixed Project Amount", targetDuration: "Target Duration",
    taskNote: "Task / Project note", projectBrief: "Project Brief",
    rateBudget: "Rate / Budget", energyLevel: "Energy Level", tasks: "Tasks",
    pipeline: "Pipeline", insights: "Insights", notifications: "Notifications",
    allCaughtUp: "All caught up — nothing to action.",
    invoiceHistory: "Invoice History", sessions: "Sessions",
    generatedProposal: "Generated Proposal", generatedContract: "Generated Contract",
    contactInfo: "Contact Info", profileLabel: "Your profile & branding", data: "Data",
    welcomeBack: "Welcome back", createYourAccount: "Create your account",
    username: "Username", password: "Password", confirmPassword: "Confirm Password",
    onboardingHeadline: "Welcome. Let’s get started.",
    onboardingDesc: "Add your first client to open their workspace — proposals, timer, invoicing, contracts, and more, all in one place.",
    invoiceDownloaded: "Invoice downloaded", pdfFailed: "PDF generation failed",
    clientCreated: "New client created", clientDeleted: "Client deleted",
    sessionLogged: "Session logged", backupExported: "Backup exported",
    backupImported: "Backup imported", importFailed: "Import failed",
    thisMonth: "This Month", lastMonth: "Last Month", last30: "Last 30 Days", allTime: "All Time",
    net30: "Net 30", subtotal: "Subtotal", tax: "Tax", totalDue: "Total Due",
    streaming: "streaming", ready: "ready", aiPowered: "AI Powered", pdfReady: "PDF Ready",
    tomorrow: "Tomorrow", threedays: "3 days", oneWeek: "1 week", twoWeeks: "2 weeks",
    generated: "Generated", wordCount: "Word Count", readTime: "Read Time",
    clientTotal: "Client Total", mode: "Mode", target: "Target", fixedFee: "Fixed Fee",
    hourlyRateLabel: "Hourly Rate", dayRate: "Day Rate", monthlyTarget: "Monthly Target",
    total: "Total", polished: "Polished", rating: "Rating", focus: "Focus",
    energy: "Energy", sent: "sent", paid: "paid", draft: "draft",
    reminders: "Reminders", done: "Done", view: "View",
    whatToFollowUp: "What to follow up on", remindMeIn: "Remind me in",
    jump: "Jump", noSessionsFound: "No hourly sessions found for this period.",
    billingTypeLabel: "Billing Type", moreClients: "more",
    draftEmail: "Draft Email →", yourNumbers: "Your Numbers",
    calculate: "Calculate →", aiPricingAdvice: "AI Pricing Advice",
    polishTestimonial: "Polish Testimonial →", polishedTestimonial: "Polished Testimonial",
    savedCards: "Saved Cards", brainDump: "Brain dump your tasks",
    pickTop3: "Pick My Top 3 →", yourTop3: "Your Top 3",
    revenueProjection: "Revenue Projection", revenueDesc: "Based on logged sessions × each client's hourly rate.",
    hoursByClient: "Hours by Client", billableTime: "Billable time across your practice",
    recentActivity: "Recent Activity", clientNameLabel: "Client name",
    createClient: "Create Client", sessionLog: "Session Log",
    noSessionsYet: "No sessions yet.", situation: "Situation",
    additionalContext: "Additional context", rawFeedback: "Raw Feedback",
    skillNiche: "Your Skill / Niche", monthlyExpenses: "Monthly Expenses ($)",
    desiredProfit: "Desired Profit ($)", workingDays: "Working Days / Month",
    billableHoursDay: "Billable Hours / Day", commandPlaceholder: "Jump to client, module, or action…",
    noResults: "No results for", keyboardShortcuts: "Keyboard Shortcuts",
    clientWorkspace: "Client workspace", closingTip: "Close tabs anytime — clients stay here until you delete them.",
    noActivity: "No activity yet.", noClients: "No clients yet.",
    startTimer: "Start a focus timer on any client to see time accumulate here.",
    customDuration: "Custom",
  },
  ar: {
    appName: "بنش", appSub: "منصة العمل الحر",
    dashboard: "الرئيسية", modules: "الوحدات", clients: "العملاء", settings: "الإعدادات",
    newClient: "عميل جديد", deleteClient: "حذف",
    proposals: "العروض", timer: "مؤقت التركيز", invoicing: "الفواتير",
    contracts: "العقود", comms: "التواصل مع العملاء", rate: "حساب الأجر",
    testimonials: "التوصيات", prioritizer: "ترتيب الأولويات",
    generate: "توليد", generateProposal: "توليد العرض ←",
    generateContract: "توليد العقد ←", copy: "نسخ", exportPdf: "تصدير PDF",
    refine: "تحسين ←", start: "▶ ابدأ", pause: "⏸ إيقاف", reset: "↻ إعادة",
    stopLog: "توقف وسجّل", save: "حفظ", saveChanges: "حفظ التغييرات", cancel: "إلغاء",
    delete: "حذف", rename: "❖ إعادة التسمية", contact: "تواصل", remind: "تذكير",
    setReminder: "تعيين تذكير", signIn: "تسجيل الدخول", signOut: "تسجيل الخروج",
    createAccount: "إنشاء حساب", markPaid: "تحديد كمدفوع",
    downloadInvoice: "تحميل الفاتورة PDF", addItem: "إضافة بند",
    exportBackup: "تصدير نسخة احتياطية", importBackup: "استيراد نسخة احتياطية",
    uploadLogo: "رفع الشعار", changeLogo: "تغيير الشعار", remove: "إزالة",
    addFirstClient: "أضف أول عميل لك ←",
    prospect: "محتمل", proposal: "عرض مقدم", active: "نشط",
    onHold: "معلّق", completed: "مكتمل",
    pomodoro: "بومودورو", billable: "قابل للفوترة", fixed: "سعر ثابت", hourly: "بالساعة",
    proposalsDesc: "عروض مقنعة لـ", timerDesc: "التركيز العميق لـ",
    invoicingDesc: "توليد الفواتير لـ", contractsDesc: "عقود الخدمة لـ",
    commsDesc: "صياغة رسائل لـ", rateDesc: "احسب أجرك",
    testimonialsDesc: "جمع التوصيات من", prioritizerDesc: "رتّب يومك لـ",
    yourName: "اسمك", companyName: "اسم الشركة", email: "البريد الإلكتروني",
    phone: "رقم الهاتف", website: "الموقع الإلكتروني", notes: "ملاحظات",
    projectName: "اسم المشروع", scopeOfWork: "نطاق العمل",
    deliverables: "المخرجات الرئيسية", paymentTerms: "شروط الدفع",
    startDate: "تاريخ البداية", dueDate: "تاريخ الاستحقاق", invoiceDate: "تاريخ الفاتورة",
    invoiceNumber: "رقم الفاتورة", taxRate: "نسبة الضريبة (%)", clientEmail: "بريد العميل",
    yourEmail: "بريدك الإلكتروني", hourlyRate: "الأجر بالساعة ($)",
    dateRange: "النطاق الزمني", billingType: "نوع الفوترة",
    lineItems: "بنود الفاتورة", invoiceDetails: "تفاصيل الفاتورة",
    fixedAmount: "مبلغ المشروع الثابت", targetDuration: "المدة المستهدفة",
    taskNote: "المهمة / الملاحظة", projectBrief: "وصف المشروع",
    rateBudget: "الأجر / الميزانية", energyLevel: "مستوى الطاقة", tasks: "المهام",
    pipeline: "مراحل العمل", insights: "رؤى", notifications: "الإشعارات",
    allCaughtUp: "لا توجد إشعارات جديدة.",
    invoiceHistory: "سجل الفواتير", sessions: "الجلسات",
    generatedProposal: "العرض المُولَّد", generatedContract: "العقد المُولَّد",
    contactInfo: "معلومات التواصل", profileLabel: "ملفك الشخصي والعلامة التجارية", data: "البيانات",
    welcomeBack: "مرحباً بعودتك", createYourAccount: "إنشاء حسابك",
    username: "اسم المستخدم", password: "كلمة المرور", confirmPassword: "تأكيد كلمة المرور",
    onboardingHeadline: "مرحباً. لنبدأ معاً.",
    onboardingDesc: "أضف أول عميل لك لفتح مساحة عمله — عروض، مؤقت، فواتير، عقود والمزيد في مكان واحد.",
    invoiceDownloaded: "تم تحميل الفاتورة", pdfFailed: "فشل توليد PDF",
    clientCreated: "تم إنشاء عميل جديد", clientDeleted: "تم حذف العميل",
    sessionLogged: "تم تسجيل الجلسة", backupExported: "تم تصدير النسخة الاحتياطية",
    backupImported: "تم استيراد النسخة الاحتياطية", importFailed: "فشل الاستيراد",
    thisMonth: "هذا الشهر", lastMonth: "الشهر الماضي", last30: "آخر 30 يوم", allTime: "كل الوقت",
    net30: "30 يوم صافي", subtotal: "المجموع الفرعي", tax: "الضريبة", totalDue: "الإجمالي المستحق",
    streaming: "جارٍ التوليد", ready: "جاهز", aiPowered: "مدعوم بالذكاء الاصطناعي", pdfReady: "PDF جاهز",
    tomorrow: "غداً", threedays: "3 أيام", oneWeek: "أسبوع", twoWeeks: "أسبوعان",
    generated: "المُولَّد", wordCount: "عدد الكلمات", readTime: "وقت القراءة",
    clientTotal: "إجمالي العميل", mode: "الوضع", target: "الهدف", fixedFee: "الأجر الثابت",
    hourlyRateLabel: "الأجر بالساعة", dayRate: "الأجر اليومي", monthlyTarget: "الهدف الشهري",
    total: "الإجمالي", polished: "مُصقَّل", rating: "التقييم", focus: "تركيز",
    energy: "الطاقة", sent: "مُرسَل", paid: "مدفوع", draft: "مسودة",
    reminders: "التذكيرات", done: "تم", view: "عرض",
    whatToFollowUp: "ماذا تريد متابعته", remindMeIn: "ذكّرني بعد",
    jump: "انتقل", noSessionsFound: "لا توجد جلسات بالساعة في هذه الفترة.",
    billingTypeLabel: "نوع الفوترة", moreClients: "مزيد",
    draftEmail: "صياغة البريد →", yourNumbers: "أرقامك",
    calculate: "احسب →", aiPricingAdvice: "نصيحة التسعير بالذكاء الاصطناعي",
    polishTestimonial: "صقل التوصية →", polishedTestimonial: "التوصية المصقولة",
    savedCards: "البطاقات المحفوظة", brainDump: "أفرغ مهامك هنا",
    pickTop3: "اختر أفضل 3 →", yourTop3: "أفضل 3 مهام",
    revenueProjection: "توقعات الإيراد", revenueDesc: "بناءً على الجلسات المسجلة × الأجر الساعي لكل عميل.",
    hoursByClient: "الساعات حسب العميل", billableTime: "الوقت القابل للفوترة في مشاريعك",
    recentActivity: "النشاط الأخير", clientNameLabel: "اسم العميل",
    createClient: "إنشاء عميل", sessionLog: "سجل الجلسات",
    noSessionsYet: "لا توجد جلسات بعد.", situation: "الوضع",
    additionalContext: "سياق إضافي", rawFeedback: "الملاحظات الخام",
    skillNiche: "مجالك / تخصصك", monthlyExpenses: "المصاريف الشهرية ($)",
    desiredProfit: "الربح المطلوب ($)", workingDays: "أيام العمل / الشهر",
    billableHoursDay: "الساعات القابلة للفوترة / يوم", commandPlaceholder: "انتقل إلى عميل أو وحدة أو إجراء...",
    noResults: "لا نتائج لـ", keyboardShortcuts: "اختصارات لوحة المفاتيح",
    clientWorkspace: "مساحة العمل", closingTip: "أغلق التبويبات في أي وقت — العملاء يبقون هنا حتى تحذفهم.",
    noActivity: "لا يوجد نشاط بعد.", noClients: "لا يوجد عملاء بعد.",
    startTimer: "ابدأ مؤقت التركيز لأي عميل لرؤية الوقت هنا.",
    customDuration: "مخصص",
  },
};
function t(key) {
  const lang = localStorage.getItem("stratloom_dir") === "rtl" ? STRINGS.ar : STRINGS.en;
  return lang[key] ?? STRINGS.en[key] ?? key;
}

// ─── DESIGN TOKENS ──────────────────────────────
const T = {
  bg: "var(--t-bg)", bgSoft: "var(--t-bg-soft)", bgDeeper: "var(--t-bg-deeper)",
  surface: "var(--t-surface)", sidebar: "var(--t-sidebar)",
  border: "var(--t-border)", borderStrong: "var(--t-border-strong)",
  text: "var(--t-text)", subtext: "var(--t-subtext)", muted: "var(--t-muted)",
  bgInverse: "var(--t-bg-inverse)",
  lilac: "var(--t-lilac)", peach: "var(--t-peach)", sky: "var(--t-sky)",
  mint: "var(--t-mint)", butter: "var(--t-butter)",
  pillLilacBg: "var(--t-pill-lilac-bg)", pillLilacFg: "var(--t-pill-lilac-fg)",
  pillPeachBg: "var(--t-pill-peach-bg)", pillPeachFg: "var(--t-pill-peach-fg)",
  pillAmberBg: "var(--t-pill-amber-bg)", pillAmberFg: "var(--t-pill-amber-fg)",
  pillBlueBg:  "var(--t-pill-blue-bg)",  pillBlueFg:  "var(--t-pill-blue-fg)",
  pillMintBg:  "var(--t-pill-mint-bg)",  pillMintFg:  "var(--t-pill-mint-fg)",
  pillRoseBg:  "var(--t-pill-rose-bg)",  pillRoseFg:  "var(--t-pill-rose-fg)",
  green: "var(--t-green)", red: "var(--t-red)", amber: "var(--t-amber)",
  dark: "var(--t-dark)", darkSurface: "var(--t-dark-surface)",
  btnText: "var(--t-btn-text)",
  shadow: "var(--t-shadow)", shadowCard: "var(--t-shadow-card)", shadowLg: "var(--t-shadow-lg)",
  radius: 14, radiusLg: 20, radiusXl: 24,
  sans: "'Plus Jakarta Sans', -apple-system, system-ui, sans-serif",
  serif: "'Instrument Serif', Georgia, serif",
  mono: "'JetBrains Mono', ui-monospace, monospace",
};

const CLIENT_STATUSES = [
  { key: "prospect",  get label() { return t("prospect"); },  bg: T.pillLilacBg, fg: T.pillLilacFg  },
  { key: "proposal",  get label() { return t("proposal"); },  bg: T.pillAmberBg, fg: T.pillAmberFg  },
  { key: "active",    get label() { return t("active"); },    bg: T.pillMintBg,  fg: T.pillMintFg   },
  { key: "on-hold",   get label() { return t("onHold"); },    bg: T.pillRoseBg,  fg: T.pillRoseFg   },
  { key: "completed", get label() { return t("completed"); }, bg: T.pillBlueBg,  fg: T.pillBlueFg   },
];
function getStatus(client) {
  return CLIENT_STATUSES.find(s => s.key === client.status) || CLIENT_STATUSES[0];
}

const CLIENT_HUES = [
  { bg: T.pillLilacBg, fg: T.pillLilacFg, name: "lilac" },
  { bg: T.pillPeachBg, fg: T.pillPeachFg, name: "peach" },
  { bg: T.pillBlueBg,  fg: T.pillBlueFg,  name: "blue"  },
  { bg: T.pillMintBg,  fg: T.pillMintFg,  name: "mint"  },
  { bg: T.pillAmberBg, fg: T.pillAmberFg, name: "amber" },
  { bg: T.pillRoseBg,  fg: T.pillRoseFg,  name: "rose"  },
];

// ─── Auth helpers (Supabase) ─────────────────────
// We use username@bench.internal as the email so users only type a username
function usernameToEmail(username) { return username.toLowerCase().trim(); }
async function hashPassword(password) {
  const data = new TextEncoder().encode(password);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
function getStoredAuth() {
  try { return JSON.parse(localStorage.getItem("stratloom_auth") || "null"); } catch { return null; }
}
function isSessionActive() { return sessionStorage.getItem("stratloom_session") === "1"; }
function startSession() { sessionStorage.setItem("stratloom_session", "1"); }
function endSession() { sessionStorage.removeItem("stratloom_session"); }

function getImageDimensions(dataUrl) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
    img.onerror = () => resolve({ w: 1, h: 1 });
    img.src = dataUrl;
  });
}

// ─── jsPDF lazy loader ──────────────────────────
let jsPDFLoadPromise = null;
function loadJsPDF() {
  if (window.jspdf?.jsPDF) return Promise.resolve(window.jspdf.jsPDF);
  if (jsPDFLoadPromise) return jsPDFLoadPromise;
  jsPDFLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
    script.async = true;
    script.onload = () => { if (window.jspdf?.jsPDF) resolve(window.jspdf.jsPDF); else reject(new Error("jsPDF failed")); };
    script.onerror = () => reject(new Error("Failed to load jsPDF"));
    document.head.appendChild(script);
  });
  return jsPDFLoadPromise;
}

// ─── Invoice helpers ────────────────────────────
function getRangeBounds(rangeKey) {
  const now = new Date();
  if (rangeKey === "this-month") {
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    return { start, end, label: now.toLocaleDateString([], { month: "long", year: "numeric" }) };
  }
  if (rangeKey === "last-month") {
    const start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const end = new Date(now.getFullYear(), now.getMonth(), 1);
    return { start, end, label: start.toLocaleDateString([], { month: "long", year: "numeric" }) };
  }
  if (rangeKey === "last-7") {
    const start = new Date(now); start.setDate(start.getDate() - 7);
    const end = new Date(now); end.setDate(end.getDate() + 1);
    return { start, end, label: "Last 7 days" };
  }
  if (rangeKey === "last-30") {
    const start = new Date(now); start.setDate(start.getDate() - 30);
    const end = new Date(now); end.setDate(end.getDate() + 1);
    return { start, end, label: "Last 30 days" };
  }
  return { start: new Date(0), end: new Date(now.getFullYear() + 10, 0, 1), label: "All time" };
}
function filterSessionsInRange(sessions, rangeKey) {
  const { start, end } = getRangeBounds(rangeKey);
  return sessions.filter((s) => {
    if (!s.dateISO) return rangeKey === "all-time";
    const d = new Date(s.dateISO);
    return d >= start && d < end;
  });
}
function getLocale() { return localStorage.getItem("stratloom_dir") === "rtl" ? "ar-SA" : undefined; }
function getNextInvoiceNumber(clients) {
  let max = 0;
  clients.forEach(c => { (c.modules.invoicing?.invoiceHistory || []).forEach(h => { const n = parseInt(h.number, 10); if (!isNaN(n) && n > max) max = n; }); });
  return String(max + 1).padStart(3, "0");
}
function formatDateShort(iso) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString(getLocale(), { month: "short", day: "numeric" });
}
function formatDateLong(d) {
  return (d instanceof Date ? d : new Date(d)).toLocaleDateString(getLocale(), { year: "numeric", month: "long", day: "numeric" });
}
function fmtDate(d) { return (d instanceof Date ? d : new Date(d)).toLocaleDateString(getLocale(), { month: "short", year: "numeric" }); }
function fmtMoney(n) {
  return `$${Number(n || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// ─── Global Styles ───────────────────────────────
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@500;600&family=Tajawal:wght@400;500;700;800&display=swap');

    :root {
      --t-bg:#F3ECDC; --t-bg-soft:#EEE5D0; --t-bg-deeper:#E8DFC7;
      --t-surface:#FFFAF0; --t-sidebar:#FFFCF5;
      --t-border:#EADFC7; --t-border-strong:#D9CBAE;
      --t-text:#1F1B16; --t-subtext:#6B6456; --t-muted:#9A927F;
      --t-bg-inverse:#F3ECDC;
      --t-lilac:#DDD0F5; --t-peach:#F4B997; --t-sky:#A9C5F5; --t-mint:#BFE3C6; --t-butter:#F7E28A;
      --t-pill-lilac-bg:#E8DCFA; --t-pill-lilac-fg:#5B3FAE;
      --t-pill-peach-bg:#FBD6BE; --t-pill-peach-fg:#A24A1F;
      --t-pill-amber-bg:#FBE5A6; --t-pill-amber-fg:#8A5B0B;
      --t-pill-blue-bg:#D4E2FB;  --t-pill-blue-fg:#2B4A94;
      --t-pill-mint-bg:#D4EBD8;  --t-pill-mint-fg:#2C6B38;
      --t-pill-rose-bg:#FBD4DA;  --t-pill-rose-fg:#9C2B47;
      --t-pill-rose-bg-alpha:rgba(251,212,218,0.27);
      --t-green:#3E8E4C; --t-red:#B9462C; --t-amber:#B4791A;
      --t-dark:#1F1B16; --t-dark-surface:#2A241C;
      --t-btn-text:#F3ECDC;
      --t-shadow:0 1px 2px rgba(60,44,18,0.06);
      --t-shadow-card:0 2px 8px rgba(60,44,18,0.06);
      --t-shadow-lg:0 8px 24px rgba(60,44,18,0.08);
    }
    html[data-theme="dark"] {
      --t-bg:#1A1A1A; --t-bg-soft:#222222; --t-bg-deeper:#2A2A2A;
      --t-surface:#252525; --t-sidebar:#1E1E1E;
      --t-border:#333333; --t-border-strong:#444444;
      --t-text:#F5F5F5; --t-subtext:#9B9B9B; --t-muted:#666666;
      --t-bg-inverse:#F5F5F5;
      --t-lilac:#2A2040; --t-peach:#3A2020; --t-sky:#1A2A40; --t-mint:#1A2E22; --t-butter:#332810;
      --t-pill-lilac-bg:#2A2040; --t-pill-lilac-fg:#C4A8FF;
      --t-pill-peach-bg:#3A2020; --t-pill-peach-fg:#FF8060;
      --t-pill-amber-bg:#332810; --t-pill-amber-fg:#FFB840;
      --t-pill-blue-bg:#1A2A40;  --t-pill-blue-fg:#60A8FF;
      --t-pill-mint-bg:#1A2E22;  --t-pill-mint-fg:#50D080;
      --t-pill-rose-bg:#351520;  --t-pill-rose-fg:#FF6680;
      --t-pill-rose-bg-alpha:rgba(53,21,32,0.4);
      --t-green:#34C759; --t-red:#E84040; --t-amber:#F0A030;
      --t-dark:#3A3A3A; --t-dark-surface:#444444;
      --t-btn-text:#1A1A1A;
      --t-shadow:0 1px 2px rgba(0,0,0,0.5);
      --t-shadow-card:0 2px 8px rgba(0,0,0,0.5);
      --t-shadow-lg:0 8px 32px rgba(0,0,0,0.7);
    }
    html[data-theme="grey"] {
      --t-bg:#F4F4F5; --t-bg-soft:#ECECEE; --t-bg-deeper:#CCCCCE;
      --t-surface:#FFFFFF; --t-sidebar:#FAFAFA;
      --t-border:#E4E4E7; --t-border-strong:#D4D4D8;
      --t-text:#0A0A0B; --t-subtext:#3F3F46; --t-muted:#71717A;
      --t-bg-inverse:#18181B;
      --t-lilac:#EDE9FE; --t-peach:#FEF3C7; --t-sky:#DBEAFE; --t-mint:#DCFCE7; --t-butter:#FEF9C3;
      --t-pill-lilac-bg:#EDE9FE; --t-pill-lilac-fg:#6D28D9;
      --t-pill-peach-bg:#FFEDD5; --t-pill-peach-fg:#C2410C;
      --t-pill-amber-bg:#FEF3C7; --t-pill-amber-fg:#92400E;
      --t-pill-blue-bg:#DBEAFE;  --t-pill-blue-fg:#1D4ED8;
      --t-pill-mint-bg:#DCFCE7;  --t-pill-mint-fg:#166534;
      --t-pill-rose-bg:#FFE4E6;  --t-pill-rose-fg:#BE123C;
      --t-pill-rose-bg-alpha:rgba(255,228,230,0.4);
      --t-green:#16A34A; --t-red:#DC2626; --t-amber:#D97706;
      --t-dark:#18181B; --t-dark-surface:#27272A;
      --t-btn-text:#FFFFFF;
      --t-shadow:0 1px 2px rgba(0,0,0,0.04);
      --t-shadow-card:0 2px 8px rgba(0,0,0,0.07);
      --t-shadow-lg:0 8px 24px rgba(0,0,0,0.10);
    }
    * { box-sizing:border-box; margin:0; padding:0; }
    html,body,#root { height:100%; overflow:hidden; }
    body { font-family:${T.sans}; background:var(--t-bg-deeper); color:var(--t-text); -webkit-font-smoothing:antialiased; font-feature-settings:"ss01"; }

    /* ── App frame: contained scroll ── */
    .app-frame { position:relative !important; overflow:hidden !important; }
    .app-frame .sidebar-fixed { position:absolute !important; }
    .app-frame .bell-fixed { position:absolute !important; }
    .app-frame .help-fixed { position:absolute !important; }
    .app-frame .toast-stack { position:absolute !important; }
    .app-frame .main-offset { height:100%; overflow-y:auto; }
    html[dir="rtl"] .app-frame .sidebar-fixed { left:auto !important; right:0 !important; }
    html[dir="rtl"] .app-frame .main-offset { margin-left:0 !important; margin-right:244px; }
    button { font-family:inherit; cursor:pointer; border:none; background:none; color:inherit; }
    input,textarea { font-family:inherit; color:inherit; }
    input:focus,textarea:focus { outline:none; }
    textarea { resize:vertical; }
    ::selection { background:var(--t-text); color:var(--t-bg); }

    @keyframes fadeUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
    @keyframes fadeIn { from{opacity:0} to{opacity:1} }
    @keyframes blink { 0%,50%{opacity:1} 51%,100%{opacity:0} }
    @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
    @keyframes spin { to{transform:rotate(360deg)} }
    @keyframes tabSlideIn { from{opacity:0;transform:translateX(-4px)} to{opacity:1;transform:translateX(0)} }
    @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
    @keyframes tabCollapse { from{max-width:200px;opacity:1;padding-left:12px;padding-right:12px} to{max-width:0;opacity:0;padding-left:0;padding-right:0;border-color:transparent !important} }
    @keyframes toastSlide { from{opacity:0;transform:translateY(14px) scale(0.96)} to{opacity:1;transform:translateY(0) scale(1)} }
    @keyframes toastOut { to{opacity:0;transform:translateY(8px) scale(0.96)} }
    @keyframes numberPop { 0%{transform:translateY(0)} 30%{transform:translateY(-4px)} 100%{transform:translateY(0)} }
    @keyframes paletteIn { from{opacity:0;transform:translateY(-12px) scale(0.98)} to{opacity:1;transform:translateY(0) scale(1)} }
    @keyframes notifyPulse { 0%,100%{box-shadow:0 0 0 0 rgba(62,142,76,0)} 50%{box-shadow:0 0 0 4px rgba(62,142,76,0.25)} }
    @keyframes confettiFall { 0%{transform:translateY(-20px) rotate(0deg);opacity:1} 100%{transform:translateY(110vh) rotate(720deg);opacity:0} }
    @keyframes confettiSway { 0%,100%{margin-left:0} 50%{margin-left:30px} }

    .fade-up{animation:fadeUp 0.42s cubic-bezier(0.16,1,0.3,1) both}
    .fade-in{animation:fadeIn 0.3s ease both}
    .tab-slide{animation:tabSlideIn 0.25s ease both}
    .pulse{animation:pulse 1.8s ease-in-out infinite}
    .tab-closing{animation:tabCollapse 0.22s cubic-bezier(0.7,0,0.84,0) forwards;overflow:hidden;pointer-events:none}
    .toast-in{animation:toastSlide 0.28s cubic-bezier(0.16,1,0.3,1) both}
    .toast-out{animation:toastOut 0.22s ease forwards}
    .number-pop{animation:numberPop 0.4s cubic-bezier(0.16,1,0.3,1)}
    .palette-in{animation:paletteIn 0.22s cubic-bezier(0.16,1,0.3,1) both}
    .notify-pulse{animation:notifyPulse 1.4s ease-in-out 2}

    .scroll-area::-webkit-scrollbar{width:4px;height:4px}
    .scroll-area::-webkit-scrollbar-track{background:transparent}
    .scroll-area::-webkit-scrollbar-thumb{background:var(--t-border);border-radius:999px;opacity:0.5}
    .scroll-area::-webkit-scrollbar-thumb:hover{background:var(--t-muted)}
    .app-frame .main-offset::-webkit-scrollbar{width:4px}
    .app-frame .main-offset::-webkit-scrollbar-track{background:transparent}
    .app-frame .main-offset::-webkit-scrollbar-thumb{background:var(--t-border);border-radius:999px}
    .app-frame .main-offset::-webkit-scrollbar-thumb:hover{background:var(--t-muted)}

    .cursor-blink::after{content:'▍';display:inline-block;margin-left:2px;color:var(--t-text);animation:blink 1s infinite;font-weight:400}
    .shimmer-bg{background:linear-gradient(90deg,var(--t-surface) 0%,var(--t-bg) 50%,var(--t-surface) 100%);background-size:200% 100%;animation:shimmer 1.6s ease-in-out infinite}

    .nav-item:hover:not(.active){background:var(--t-bg-soft)}
    .input-focus:focus-within{border-color:var(--t-text) !important;box-shadow:0 0 0 3px var(--t-border-strong)}
    .btn-primary:hover:not(:disabled){background:var(--t-dark-surface);transform:translateY(-1px);box-shadow:var(--t-shadow-lg)}
    .btn-primary{transition:all .18s ease}
    .btn-primary:disabled{opacity:0.5;cursor:not-allowed}
    .btn-ghost:hover:not(:disabled){background:var(--t-bg-soft);border-color:var(--t-border-strong)}
    .btn-ghost:disabled{opacity:0.5;cursor:not-allowed}
    .card-hover{transition:transform .2s ease,box-shadow .2s ease}
    .card-hover:hover{transform:translateY(-2px);box-shadow:var(--t-shadow-lg)}

    .tab{transition:background .15s ease,border-color .15s ease,transform .15s ease}
    .tab:hover:not(.active):not(.dragging){background:var(--t-bg-soft)}
    .tab .close-btn{opacity:0;transition:opacity .15s ease,background .15s ease}
    .tab:hover .close-btn,.tab.active .close-btn{opacity:1}
    .tab .close-btn:hover{background:var(--t-bg-deeper)}
    .tab.dragging{opacity:0.35}
    .tab.drag-over-left{box-shadow:-2px 0 0 var(--t-text)}
    .tab.drag-over-right{box-shadow:2px 0 0 var(--t-text)}
    .sidebar-delete-btn{opacity:0}
    .sidebar-client-row:hover .sidebar-delete-btn{opacity:1}
    .sidebar-delete-btn:hover{background:var(--t-pill-rose-bg);color:var(--t-pill-rose-fg)}

    .new-client-overlay{position:fixed;inset:0;background:rgba(31,27,22,0.32);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);z-index:100;display:flex;align-items:center;justify-content:center;animation:fadeIn .2s ease}
    .palette-overlay{position:fixed;inset:0;background:rgba(31,27,22,0.28);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);z-index:110;display:flex;align-items:flex-start;justify-content:center;padding-top:80px;animation:fadeIn .15s ease}

    .toast-stack{position:fixed;bottom:24px;right:24px;z-index:120;display:flex;flex-direction:column;gap:8px;max-width:360px;pointer-events:none}
    .toast-stack>*{pointer-events:auto}
    .kbd{display:inline-flex;align-items:center;justify-content:center;padding:2px 6px;background:var(--t-bg-deeper);border:1px solid var(--t-border-strong);border-radius:5px;font-size:11px;font-weight:600;color:var(--t-subtext);font-family:${T.mono}}

    /* ── Mobile / Responsive ── */
    @media (max-width:768px) {
      .sidebar-fixed{transform:translateX(-100%);transition:transform .28s cubic-bezier(0.16,1,0.3,1);box-shadow:none}
      .sidebar-fixed.drawer-open{transform:translateX(0) !important;box-shadow:4px 0 24px rgba(0,0,0,0.18)}
      html[dir="rtl"] .sidebar-fixed{transform:translateX(100%)}
      html[dir="rtl"] .sidebar-fixed.drawer-open{transform:translateX(0) !important}
      .main-offset{margin-left:0 !important;margin-right:0 !important;padding-top:56px !important}
      .tabbar-hide{display:none !important}
      .mobile-header{display:flex !important}
      .bell-fixed{top:14px !important;right:12px !important}
      html[dir="rtl"] .bell-fixed{left:12px !important;right:auto !important}
      .help-fixed{display:none !important}
      .toast-stack{bottom:16px;right:12px;left:12px;max-width:100%}
      .module-main{padding:20px 16px 100px !important}
      .dashboard-main{padding:16px 16px 80px !important}
      .client-header-strip{padding:14px 16px 12px !important;flex-wrap:wrap;gap:10px !important}
      .client-header-actions{flex-wrap:wrap;gap:6px !important}
      .g4{grid-template-columns:repeat(2,1fr) !important}
      .g3{grid-template-columns:repeat(2,1fr) !important}
      .g2{grid-template-columns:1fr !important}
      .timer-grid{grid-template-columns:1fr !important}
      .dashboard-grid{grid-template-columns:1fr !important}
    }
    @media (max-width:480px) {
      .g3{grid-template-columns:1fr !important}
      .g4{grid-template-columns:1fr 1fr !important}
    }
    .mobile-header{display:none;position:fixed;top:0;left:0;right:0;z-index:20;height:56px;padding:0 16px;padding-top:env(safe-area-inset-top);background:var(--t-sidebar);border-bottom:1px solid var(--t-border);align-items:center;justify-content:space-between}
    .drawer-backdrop{display:none;position:fixed;inset:0;z-index:9;background:rgba(0,0,0,0.4);backdrop-filter:blur(2px)}
    @media (max-width:768px) { .drawer-backdrop.open{display:block} body{padding-bottom:env(safe-area-inset-bottom)} }

    /* ── RTL overrides ── */
    html[dir="rtl"] body{font-family:'Tajawal','Plus Jakarta Sans',-apple-system,system-ui,sans-serif}
    html[dir="rtl"] .sidebar-fixed{left:auto !important;right:0 !important;border-right:none !important;border-left:1px solid var(--t-border) !important}
    html[dir="rtl"] .main-offset{margin-left:0 !important;margin-right:244px}
    html[dir="rtl"] .bell-fixed{right:auto !important;left:20px !important}
    html[dir="rtl"] .help-fixed{left:auto !important;right:260px !important}
    html[dir="rtl"] .toast-stack{right:auto;left:24px}
    html[dir="rtl"] .new-client-overlay{direction:rtl}
    html[dir="rtl"] .palette-overlay{direction:rtl}
    html[dir="rtl"] .scroll-area{direction:rtl}
    html[dir="rtl"] .tab{direction:ltr}
    html[dir="rtl"] .nav-item{text-align:right !important}
    html[dir="rtl"] .letter-avatar{direction:ltr !important;unicode-bidi:isolate;display:flex !important;align-items:center !important;justify-content:center !important}
    @media (max-width:768px) { html[dir="rtl"] .main-offset{margin-right:0 !important} }
  `}</style>
);

// ─── Error Boundary ──────────────────────────────
class ModuleErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(e) { return { error: e }; }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 40, color: "var(--t-pill-rose-fg)", fontFamily: "monospace", fontSize: 13, background: "var(--t-pill-rose-bg)", borderRadius: 14, margin: 24 }}>
          <strong>Module error:</strong> {this.state.error.message}
          <br /><small style={{ opacity: 0.7 }}>{this.state.error.stack?.split("\n")[1]}</small>
        </div>
      );
    }
    return this.props.children;
  }
}

// ─── Primitive UI Components ─────────────────────
const Label = ({ children }) => (
  <div style={{ fontSize: 11.5, fontWeight: 700, color: T.subtext, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 6 }}>{children}</div>
);
const Field = ({ label, hint, children, style }) => (
  <div style={{ marginBottom: 4, ...style }}>
    {label && <div style={{ fontSize: 11.5, fontWeight: 700, color: T.subtext, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 6, display: "flex", gap: 6, alignItems: "center" }}>
      {label}{hint && <span style={{ fontWeight: 400, textTransform: "none", fontSize: 11, color: T.muted }}>({hint})</span>}
    </div>}
    {children}
  </div>
);
const TextInput = React.forwardRef(({ style, ...props }, ref) => (
  <input ref={ref} {...props} style={{ width: "100%", padding: "11px 14px", fontSize: 14, color: T.text, background: T.surface, border: `1.5px solid ${T.border}`, borderRadius: T.radius, fontFamily: T.sans, ...style }} className="input-focus" />
));
const TextArea = ({ style, ...props }) => (
  <textarea {...props} style={{ width: "100%", padding: "11px 14px", fontSize: 14, color: T.text, background: T.surface, border: `1.5px solid ${T.border}`, borderRadius: T.radius, fontFamily: T.sans, lineHeight: 1.5, ...style }} className="input-focus" />
);
const PrimaryBtn = ({ onClick, children, loading, disabled, style }) => (
  <button onClick={onClick} disabled={disabled || loading} className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 20px", borderRadius: 999, background: T.text, color: T.btnText, fontSize: 13.5, fontWeight: 700, letterSpacing: "-0.005em", ...style }}>
    {loading ? <span style={{ width: 14, height: 14, border: `2px solid ${T.bgInverse}`, borderTopColor: "transparent", borderRadius: "50%", animation: "spin .7s linear infinite", display: "inline-block" }} /> : children}
  </button>
);
const GhostBtn = ({ onClick, children, disabled, style, title }) => (
  <button onClick={onClick} disabled={disabled} title={title} className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", borderRadius: 999, background: T.surface, border: `1.5px solid ${T.border}`, fontSize: 13, fontWeight: 600, color: T.subtext, letterSpacing: "-0.005em", ...style }}>{children}</button>
);
const Card = ({ children, style, padding }) => (
  <div style={{ background: T.surface, borderRadius: T.radiusLg, padding: padding ?? 22, border: `1px solid ${T.border}`, boxShadow: T.shadow, marginBottom: 16, ...style }}>{children}</div>
);
const Pill = ({ children, tone = "lilac" }) => {
  const tones = {
    lilac: { bg: T.pillLilacBg, fg: T.pillLilacFg },
    peach: { bg: T.pillPeachBg, fg: T.pillPeachFg },
    amber: { bg: T.pillAmberBg, fg: T.pillAmberFg },
    blue:  { bg: T.pillBlueBg,  fg: T.pillBlueFg  },
    mint:  { bg: T.pillMintBg,  fg: T.pillMintFg  },
    rose:  { bg: T.pillRoseBg,  fg: T.pillRoseFg  },
  };
  const c = tones[tone] || tones.lilac;
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 10px", borderRadius: 999, background: c.bg, color: c.fg, fontSize: 11.5, fontWeight: 700, letterSpacing: "0.02em" }}>{children}</span>;
};
const IconBadge = ({ children, size = 40, dark = true }) => (
  <div style={{ width: size, height: size, borderRadius: "50%", background: dark ? T.darkSurface : T.surface, color: dark ? T.bgInverse : T.text, display: "flex", alignItems: "center", justifyContent: "center", fontSize: size * 0.44, flexShrink: 0 }}>{children}</div>
);
const StatCard = ({ bg, icon, label, value, delta }) => {
  const prevValue = useRef(value);
  const [popKey, setPopKey] = useState(0);
  useEffect(() => { if (prevValue.current !== value) { setPopKey(k => k + 1); prevValue.current = value; } }, [value]);
  return (
    <div style={{ background: bg, borderRadius: T.radiusLg, padding: "20px 22px", minHeight: 130, display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: T.shadow }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <IconBadge size={36}>{icon}</IconBadge>
        <span style={{ fontSize: 15, fontWeight: 600, color: T.text, letterSpacing: "-0.01em" }}>{label}</span>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 16 }}>
        <span key={popKey} className={popKey > 0 ? "number-pop" : ""} style={{ fontSize: 34, fontWeight: 700, letterSpacing: "-0.03em", color: T.text, display: "inline-block" }}>{value}</span>
        <span style={{ fontSize: 12, color: T.text, opacity: 0.65, fontWeight: 500 }}>{delta}</span>
      </div>
    </div>
  );
};
const ModuleHeader = ({ icon, title, description, badge }) => (
  <div style={{ marginBottom: 24 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
      <IconBadge size={44}>{icon}</IconBadge>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <h1 style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.025em", color: T.text }}>{title}</h1>
          {badge && <Pill tone={badge.tone}>{badge.label}</Pill>}
        </div>
        <p style={{ fontSize: 14, color: T.subtext, marginTop: 2, letterSpacing: "-0.005em" }}>{description}</p>
      </div>
    </div>
  </div>
);
const AIBox = ({ text, streaming, emptyLabel = "Output will stream here" }) => {
  if (!text && !streaming) return <div style={{ background: T.surface, border: `1.5px dashed ${T.border}`, borderRadius: T.radiusLg, padding: 22, minHeight: 140, display: "flex", alignItems: "center", justifyContent: "center", color: T.muted, fontSize: 13.5, letterSpacing: "-0.005em" }}>{emptyLabel}</div>;
  if (streaming && !text) return <div style={{ borderRadius: T.radiusLg, border: `1.5px solid ${T.border}`, overflow: "hidden" }}><div className="shimmer-bg" style={{ padding: 22, minHeight: 140, display: "flex", flexDirection: "column", gap: 10 }}><div style={{ height: 10, borderRadius: 5, background: T.bgSoft, width: "80%" }} /><div style={{ height: 10, borderRadius: 5, background: T.bgSoft, width: "65%" }} /><div style={{ height: 10, borderRadius: 5, background: T.bgSoft, width: "72%" }} /></div></div>;
  return <div className={streaming ? "cursor-blink fade-in" : "fade-in"} style={{ background: T.surface, border: `1.5px solid ${T.border}`, borderRadius: T.radiusLg, padding: 22, fontSize: 14.5, lineHeight: 1.65, color: T.text, whiteSpace: "pre-wrap", letterSpacing: "-0.003em", boxShadow: T.shadow }}>{text}</div>;
};
const ErrorBanner = ({ message, onDismiss }) =>
  message ? <div className="fade-in" style={{ marginTop: 14, padding: "11px 15px", background: T.pillRoseBg, border: `1px solid ${T.pillRoseFg}33`, borderRadius: T.radius, color: T.pillRoseFg, fontSize: 12.5, display: "flex", justifyContent: "space-between", alignItems: "center" }}><span>⚠ {message}</span><button onClick={onDismiss} style={{ color: T.pillRoseFg, fontSize: 16, padding: "0 4px" }}>×</button></div> : null;

// ─── Streaming ───────────────────────────────────
async function streamClaude({ system, user, onChunk, onDone, onError }) {
  try {
    const apiUrl = import.meta.env.PROD ? '/api/anthropic' : '/anthropic/v1/messages';
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 1000, stream: true, system, messages: [{ role: "user", content: user }] }),
    });
    if (!res.ok || !res.body) throw new Error(`API error: ${res.status}`);
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buf = "";
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buf += decoder.decode(value, { stream: true });
      const lines = buf.split("\n");
      buf = lines.pop() || "";
      for (const raw of lines) {
        const line = raw.trim();
        if (!line.startsWith("data:")) continue;
        const payload = line.slice(5).trim();
        if (!payload || payload === "[DONE]") continue;
        try {
          const evt = JSON.parse(payload);
          if (evt.type === "content_block_delta" && evt.delta?.type === "text_delta" && evt.delta.text) onChunk(evt.delta.text);
          if (evt.type === "message_stop") onDone();
        } catch {}
      }
    }
  } catch (err) { onError(err); }
}

// ─── State factory ───────────────────────────────
const emptyModuleState = () => ({
  proposals: { name: "", rate: "", brief: "", output: "", streaming: false, error: "", count: 0, history: [] },
  timer: {
    billingMode: "pomodoro", mode: "focus", seconds: 25 * 60, running: false,
    targetSeconds: 60 * 60, elapsedSeconds: 0, fixedAmount: "", currentProject: "", sessions: [],
    runStartSeconds: 25 * 60,
  },
  comms: { situation: "Scope creep — added work without extra pay", tone: "mild", context: "", output: "", streaming: false, error: "" },
  rate: { exp: "", profit: "", days: "", hours: "", skill: "", rates: null, advice: "", streaming: false, error: "", invoiceRange: "this-month", invoiceMeta: null },
  testimonials: { name: "", project: "", raw: "", polished: "", streaming: false, error: "", cards: [] },
  prioritizer: { energy: "med", tasks: "", output: "", streaming: false, error: "" },
  contracts: { projectName: "", scope: "", payment: "", startDate: "", deliverables: "", output: "", streaming: false, error: "" },
  invoicing: {
    billingType: "hourly", invoiceRange: "this-month", hourlyRate: "",
    lineItems: [{ id: "li_1", description: "", amount: "" }],
    meta: { number: "001", date: new Date().toISOString().split("T")[0], dueDate: "", taxRate: "", notes: "", paymentTerms: "Net 30", freelancerName: "", freelancerEmail: "", clientEmail: "" },
    pdfLoading: false, invoiceHistory: [], expenses: [],
  },
});

const newClient = (name, hueIdx) => ({
  id: `c_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
  name: name || "New Client",
  hue: CLIENT_HUES[hueIdx % CLIENT_HUES.length],
  createdAt: Date.now(),
  status: "prospect",
  reminders: [],
  contact: { email: "", phone: "", website: "", notes: "" },
  modules: emptyModuleState(),
});

// ═══════ MODULE 1: PROPOSALS ═══════
const ProposalHistoryItem = ({ h, versionNum, onRestore }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: T.radiusLg, overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 18px", cursor: "pointer" }} onClick={() => setExpanded(e => !e)}>
        <div style={{ width: 28, height: 28, borderRadius: "50%", background: T.pillLilacBg, color: T.pillLilacFg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>v{versionNum}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13.5, fontWeight: 600, color: T.text }}>Version {versionNum}</div>
          <div style={{ fontSize: 11.5, color: T.muted, marginTop: 1 }}>
            {formatDateLong(new Date(h.savedAt))} · {h.wordCount} words
            {h.brief ? ` · "${h.brief.slice(0, 40)}${h.brief.length > 40 ? "…" : ""}"` : ""}
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <GhostBtn onClick={e => { e.stopPropagation(); onRestore(); }} style={{ padding: "6px 12px", fontSize: 12 }}>Restore</GhostBtn>
          <GhostBtn onClick={e => { e.stopPropagation(); navigator.clipboard.writeText(h.output); }} style={{ padding: "6px 12px", fontSize: 12 }}>{t("copy")}</GhostBtn>
        </div>
        <span style={{ color: T.muted, fontSize: 13, transition: "transform .2s", transform: expanded ? "rotate(180deg)" : "rotate(0deg)", display: "inline-block" }}>▾</span>
      </div>
      {expanded && (
        <div style={{ padding: "14px 18px 18px", borderTop: `1px solid ${T.border}` }}>
          <div style={{ fontSize: 13.5, lineHeight: 1.7, color: T.text, whiteSpace: "pre-wrap" }}>{h.output}</div>
        </div>
      )}
    </div>
  );
};

const ProposalsModule = ({ client, patch, profile }) => {
  const s = client.modules.proposals;
  const [refineText, setRefineText] = useState("");
  const wordCount = s.output ? s.output.trim().split(/\s+/).filter(Boolean).length : 0;
  const readSec = Math.ceil(wordCount / 200);
  const readLabel = wordCount === 0 ? "—" : readSec < 1 ? "<1 min" : `${readSec} min`;

  const go = () => {
    if (!s.name.trim() || !s.brief.trim()) { patch({ proposals: { ...s, error: "Please enter your name and a project brief." } }); return; }
    // Auto-save current proposal to history before replacing
    const prevHistory = s.history || [];
    const newHistory = s.output
      ? [{ id: `ph_${Date.now()}`, output: s.output, brief: s.brief, name: s.name, rate: s.rate, savedAt: Date.now(), wordCount: s.output.trim().split(/\s+/).filter(Boolean).length }, ...prevHistory]
      : prevHistory;
    patch({ proposals: { ...s, error: "", output: "", streaming: true, history: newHistory } });
    let buffer = "";
    streamClaude({
      system: "You are an expert freelance proposal writer. Write confident, warm, client-winning proposals. Structure: Project Understanding → Your Approach → Deliverables → Timeline → Investment. Keep under 280 words. Professional yet human. Do not use markdown — no ##, no **, no bullet dashes. Use plain paragraphs with section names followed by a colon on their own line.",
      user: `Freelancer name: ${s.name}\nClient: ${client.name}\nRate/Budget: ${s.rate || "TBD"}\n\nProject brief:\n${s.brief}`,
      onChunk: (txt) => { buffer += txt; patch({ proposals: { ...s, error: "", streaming: true, output: buffer, history: newHistory } }); },
      onDone: () => patch({ proposals: { ...s, error: "", output: buffer, streaming: false, count: s.count + 1, history: newHistory } }),
      onError: (err) => patch({ proposals: { ...s, streaming: false, error: err.message || "Something went wrong.", history: newHistory } }),
    });
  };

  const refine = () => {
    const req = refineText.trim();
    if (!req || !s.output || s.streaming) return;
    setRefineText("");
    patch({ proposals: { ...s, error: "", streaming: true } });
    let buffer = "";
    streamClaude({
      system: "You are a proposal editor. Your only job is to edit and refine the freelance proposal provided by the user based on their specific request. Output only the revised proposal text — no commentary, no explanations, no preamble. Do not use markdown. If the user asks anything unrelated to editing this proposal, respond only with: 'I can only help refine this proposal.'",
      user: `Current proposal:\n${s.output}\n\nRequested change: ${req}`,
      onChunk: (txt) => { buffer += txt; patch({ proposals: { ...s, error: "", streaming: true, output: buffer } }); },
      onDone: () => patch({ proposals: { ...s, error: "", output: buffer, streaming: false } }),
      onError: (err) => patch({ proposals: { ...s, streaming: false, error: err.message || "Something went wrong." } }),
    });
  };

  return (
    <div className="fade-up">
      <ModuleHeader icon={<FileText size={22} />} title={t("proposals")} description={`${t("proposalsDesc")} ${client.name}.`} badge={{ label: t("aiPowered"), tone: "lilac" }} />
      <div className="g3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 28 }}>
        <StatCard bg={T.lilac} icon={<PenLine size={18} />} label={t("generated")} value={s.count} delta="this client" />
        <StatCard bg={T.peach} icon={<AlignLeft size={18} />} label={t("wordCount")} value={wordCount || "—"} delta={wordCount ? (wordCount < 150 ? "consider expanding" : wordCount > 350 ? "consider trimming" : "good length") : "no proposal yet"} />
        <StatCard bg={T.sky} icon={<Clock size={18} />} label={t("readTime")} value={readLabel} delta={wordCount ? "client reading time" : "no proposal yet"} />
      </div>
      <Card>
        <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <Field label={t("yourName")}><TextInput value={s.name} onChange={e => patch({ proposals: { ...s, name: e.target.value } })} placeholder="Alex Rivera" /></Field>
          <Field label={t("rateBudget")} hint="optional"><TextInput value={s.rate} onChange={e => patch({ proposals: { ...s, rate: e.target.value } })} placeholder="$5,000 flat" /></Field>
        </div>
        <Field label={t("projectBrief")} hint="Be specific for best results">
          <TextArea rows={5} value={s.brief} onChange={e => patch({ proposals: { ...s, brief: e.target.value } })} placeholder={`What does ${client.name} need?`} />
        </Field>
        <div style={{ display: "flex", justifyContent: "flex-end" }}><PrimaryBtn onClick={go} loading={s.streaming}>{t("generateProposal")}</PrimaryBtn></div>
        <ErrorBanner message={s.error} onDismiss={() => patch({ proposals: { ...s, error: "" } })} />
      </Card>
      <div style={{ marginTop: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: T.text, letterSpacing: "-0.01em" }}>{t("generatedProposal")}</div>
          {s.streaming && <Pill tone="blue">{t("streaming")}</Pill>}
          {!s.streaming && s.output && <Pill tone="mint">{t("ready")}</Pill>}
          {!s.streaming && s.output && (
            <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
              <GhostBtn onClick={() => navigator.clipboard.writeText(s.output)}>{t("copy")}</GhostBtn>
              <GhostBtn onClick={async () => {
                const JsPDF = await loadJsPDF();
                const doc = new JsPDF({ unit: "pt", format: "a4" });
                const W = doc.internal.pageSize.getWidth(); const margin = 48; let y = margin;
                if (profile?.logo) { try { const dims = await getImageDimensions(profile.logo); const lh = 44; const lw = lh*(dims.w/dims.h); doc.addImage(profile.logo, W-margin-lw, y-10, lw, lh, "", "FAST"); } catch {} }
                if (profile?.company || profile?.name) { doc.setFont("helvetica","bold"); doc.setFontSize(11); doc.setTextColor(31,27,22); doc.text(profile.company||profile.name, margin, y+10); if (profile.email) { doc.setFont("helvetica","normal"); doc.setFontSize(9); doc.setTextColor(107,100,86); doc.text(profile.email, margin, y+24); } y+=42; }
                doc.setFontSize(9); doc.setTextColor(154,146,127); doc.text(`Proposal for ${client.name}`, margin, y+4); y+=20;
                doc.setDrawColor(234,223,199); doc.line(margin,y,W-margin,y); y+=22;
                const maxW=W-margin*2; const lineH=17; const paraGap=10; const pageH=doc.internal.pageSize.getHeight();
                for (const para of s.output.split("\n")) { const trimmed=para.trim(); if (!trimmed) { y+=paraGap; continue; } const isH=trimmed.endsWith(":"); doc.setFont("helvetica",isH?"bold":"normal"); doc.setFontSize(isH?11.5:11); doc.setTextColor(31,27,22); for (const wl of doc.splitTextToSize(trimmed,maxW)) { if (y>pageH-margin) { doc.addPage(); y=margin; } doc.text(wl,margin,y); y+=lineH; } if (isH) y+=2; }
                doc.save(`proposal-${client.name.replace(/\s+/g,"-").toLowerCase()}.pdf`);
              }}>{t("exportPdf")}</GhostBtn>
            </div>
          )}
        </div>
        <AIBox text={s.output} streaming={s.streaming} emptyLabel="Your AI proposal will stream here." />
        {s.output && !s.streaming && (
          <div style={{ marginTop: 12, display: "flex", gap: 8, alignItems: "center", background: T.surface, border: `1.5px solid ${T.border}`, borderRadius: 999, padding: "6px 8px 6px 16px", boxShadow: T.shadow }}>
            <input value={refineText} onChange={e => setRefineText(e.target.value)} onKeyDown={e => e.key === "Enter" && refine()} placeholder="Ask for changes — e.g. make it shorter, adjust the tone…" style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 13.5, color: T.text, fontFamily: T.sans }} />
            <button onClick={refine} disabled={!refineText.trim()} style={{ background: refineText.trim() ? T.text : T.bgDeeper, color: refineText.trim() ? T.bg : T.muted, border: "none", borderRadius: 999, padding: "7px 16px", fontSize: 12.5, fontWeight: 600, flexShrink: 0 }}>{t("refine")}</button>
          </div>
        )}

        {/* Proposal history */}
        {(s.history || []).length > 0 && (
          <div style={{ marginTop: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: T.text, letterSpacing: "-0.01em" }}>Previous Versions</div>
              <Pill tone="lilac">{s.history.length}</Pill>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {(s.history || []).map((h, i) => (
                <ProposalHistoryItem key={h.id} h={h} versionNum={(s.history.length) - i} onRestore={() => patch({ proposals: { ...s, output: h.output, streaming: false, error: "" } })} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ═══════ MODULE 4: CONTRACTS ═══════
const ContractsModule = ({ client, patch, profile }) => {
  const s = client.modules.contracts || emptyModuleState().contracts;
  const [refineText, setRefineText] = useState("");
  const wordCount = s.output ? s.output.trim().split(/\s+/).filter(Boolean).length : 0;
  const readSec = Math.ceil(wordCount / 200);
  const readLabel = wordCount === 0 ? "—" : readSec < 1 ? "<1 min" : `${readSec} min`;

  const go = () => {
    if (!s.projectName.trim()) { patch({ contracts: { ...s, error: "Please enter a project name." } }); return; }
    patch({ contracts: { ...s, error: "", output: "", streaming: true } });
    let buffer = "";
    streamClaude({
      system: "You are a freelance contract writer. Write professional, legally-grounded freelance service agreements. Use plain text only — no markdown, no asterisks, no bullet dashes. Use clear section headers followed by a colon on their own line. Be thorough but readable. Include: Parties, Scope of Work, Deliverables, Timeline, Payment Terms, Revisions Policy, Intellectual Property, Confidentiality, Termination, and Governing Law.",
      user: `Client: ${client.name}\nProject: ${s.projectName}\nScope: ${s.scope}\nPayment: ${s.payment}\nStart Date: ${s.startDate}\nDeliverables: ${s.deliverables}`,
      onChunk: (txt) => { buffer += txt; patch({ contracts: { ...s, error: "", streaming: true, output: buffer } }); },
      onDone: () => patch({ contracts: { ...s, error: "", output: buffer, streaming: false } }),
      onError: (err) => patch({ contracts: { ...s, streaming: false, error: err.message || "Something went wrong." } }),
    });
  };

  const refine = () => {
    const req = refineText.trim();
    if (!req || !s.output || s.streaming) return;
    setRefineText("");
    patch({ contracts: { ...s, error: "", streaming: true } });
    let buffer = "";
    streamClaude({
      system: "You are a contract editor. Your only job is to edit the freelance contract based on the user's request. Output only the revised contract — no commentary, no preamble. Do not use markdown. If unrelated to this contract, respond: 'I can only help refine this contract.'",
      user: `Current contract:\n${s.output}\n\nRequested change: ${req}`,
      onChunk: (txt) => { buffer += txt; patch({ contracts: { ...s, error: "", streaming: true, output: buffer } }); },
      onDone: () => patch({ contracts: { ...s, error: "", output: buffer, streaming: false } }),
      onError: (err) => patch({ contracts: { ...s, streaming: false, error: err.message || "Something went wrong." } }),
    });
  };

  return (
    <div className="fade-up">
      <ModuleHeader icon={<ScrollText size={22} />} title={t("contracts")} description={`${t("contractsDesc")} ${client.name}.`} badge={{ label: t("aiPowered"), tone: "peach" }} />
      <div className="g3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 28 }}>
        <StatCard bg={T.lilac} icon={<PenLine size={18} />} label={t("generated")} value={s.output ? 1 : 0} delta="this project" />
        <StatCard bg={T.peach} icon={<AlignLeft size={18} />} label={t("wordCount")} value={wordCount || "—"} delta={wordCount < 300 && wordCount > 0 ? "consider expanding" : wordCount > 0 ? "good length" : "no contract yet"} />
        <StatCard bg={T.sky} icon={<Clock size={18} />} label={t("readTime")} value={readLabel} delta={wordCount ? "client reading time" : "no contract yet"} />
      </div>
      <Card>
        <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <Field label={t("projectName")}><TextInput value={s.projectName} onChange={e => patch({ contracts: { ...s, projectName: e.target.value } })} placeholder="Brand Identity Redesign" /></Field>
          <Field label={t("startDate")}><TextInput type="date" value={s.startDate} onChange={e => patch({ contracts: { ...s, startDate: e.target.value } })} /></Field>
        </div>
        <Field label={t("scopeOfWork")}><TextArea rows={3} value={s.scope} onChange={e => patch({ contracts: { ...s, scope: e.target.value } })} placeholder="Describe what you will and won't do..." /></Field>
        <Field label={t("deliverables")}><TextArea rows={3} value={s.deliverables} onChange={e => patch({ contracts: { ...s, deliverables: e.target.value } })} placeholder="Logo files, brand guidelines PDF, 3 concepts..." /></Field>
        <Field label={t("paymentTerms")}><TextInput value={s.payment} onChange={e => patch({ contracts: { ...s, payment: e.target.value } })} placeholder="$2,000 total — 50% upfront, 50% on delivery" /></Field>
        <div style={{ display: "flex", justifyContent: "flex-end" }}><PrimaryBtn onClick={go} loading={s.streaming}>{t("generateContract")}</PrimaryBtn></div>
        <ErrorBanner message={s.error} onDismiss={() => patch({ contracts: { ...s, error: "" } })} />
      </Card>
      <div style={{ marginTop: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: T.text, letterSpacing: "-0.01em" }}>{t("generatedContract")}</div>
          {s.streaming && <Pill tone="blue">{t("streaming")}</Pill>}
          {!s.streaming && s.output && <Pill tone="mint">{t("ready")}</Pill>}
          {!s.streaming && s.output && (
            <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
              <GhostBtn onClick={() => navigator.clipboard.writeText(s.output)}>{t("copy")}</GhostBtn>
              <GhostBtn onClick={async () => {
                const JsPDF = await loadJsPDF();
                const doc = new JsPDF({ unit: "pt", format: "a4" });
                const W = doc.internal.pageSize.getWidth(); const margin = 48; let y = margin;
                if (profile?.logo) { try { const dims = await getImageDimensions(profile.logo); const lh = 44; const lw = lh*(dims.w/dims.h); doc.addImage(profile.logo, W-margin-lw, y-10, lw, lh, "", "FAST"); } catch {} }
                if (profile?.company||profile?.name) { doc.setFont("helvetica","bold"); doc.setFontSize(11); doc.setTextColor(31,27,22); doc.text(profile.company||profile.name, margin, y+10); if (profile.email) { doc.setFont("helvetica","normal"); doc.setFontSize(9); doc.setTextColor(107,100,86); doc.text(profile.email, margin, y+24); } y+=42; }
                doc.setFontSize(9); doc.setTextColor(154,146,127); doc.text(`Service Agreement — ${client.name}`, margin, y+4); y+=20;
                doc.setDrawColor(234,223,199); doc.line(margin,y,W-margin,y); y+=22;
                const maxW=W-margin*2; const lineH=17; const paraGap=10; const pageH=doc.internal.pageSize.getHeight();
                for (const para of s.output.split("\n")) { const trimmed=para.trim(); if (!trimmed) { y+=paraGap; continue; } const isH=trimmed.endsWith(":"); doc.setFont("helvetica",isH?"bold":"normal"); doc.setFontSize(isH?11.5:11); doc.setTextColor(31,27,22); for (const wl of doc.splitTextToSize(trimmed,maxW)) { if (y>pageH-margin) { doc.addPage(); y=margin; } doc.text(wl,margin,y); y+=lineH; } if (isH) y+=2; }
                doc.save(`contract-${client.name.replace(/\s+/g,"-").toLowerCase()}.pdf`);
              }}>{t("exportPdf")}</GhostBtn>
            </div>
          )}
        </div>
        <AIBox text={s.output} streaming={s.streaming} emptyLabel="Your AI contract will stream here." />
        {s.output && !s.streaming && (
          <div style={{ marginTop: 12, display: "flex", gap: 8, alignItems: "center", background: T.surface, border: `1.5px solid ${T.border}`, borderRadius: 999, padding: "6px 8px 6px 16px", boxShadow: T.shadow }}>
            <input value={refineText} onChange={e => setRefineText(e.target.value)} onKeyDown={e => e.key === "Enter" && refine()} placeholder="Ask for changes — e.g. add a late payment clause…" style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 13.5, color: T.text, fontFamily: T.sans }} />
            <button onClick={refine} disabled={!refineText.trim()} style={{ background: refineText.trim() ? T.text : T.bgDeeper, color: refineText.trim() ? T.bg : T.muted, border: "none", borderRadius: 999, padding: "7px 16px", fontSize: 12.5, fontWeight: 600, flexShrink: 0 }}>{t("refine")}</button>
          </div>
        )}
      </div>
    </div>
  );
};

// ═══════ MODULE 5: COMMS ═══════
const SITUATIONS = [
  { label: "Scope creep",     desc: "Added work without extra pay",   value: "Scope creep — added work without extra pay",      bg: T.pillAmberBg, fg: T.pillAmberFg },
  { label: "Invoice overdue", desc: "Client hasn't paid",             value: "Invoice overdue — client hasn't paid",            bg: T.pillRoseBg,  fg: T.pillRoseFg  },
  { label: "Project delay",   desc: "Timeline needs to shift",        value: "Project delay — timeline needs to shift",         bg: T.pillBlueBg,  fg: T.pillBlueFg  },
  { label: "Rate increase",   desc: "Raising my prices",              value: "Rate increase — raising my prices",               bg: T.pillMintBg,  fg: T.pillMintFg  },
  { label: "Kick-off",        desc: "Starting a new engagement",      value: "Project kick-off — starting a new engagement",    bg: T.pillLilacBg, fg: T.pillLilacFg },
  { label: "Follow-up",       desc: "Checking in after no response",  value: "Follow-up — checking in after no response",       bg: T.pillPeachBg, fg: T.pillPeachFg },
];

const TONES = [
  { key: "easy",  label: "Easy on",     desc: "Gentle & empathetic",  bg: T.pillMintBg,  fg: T.pillMintFg  },
  { key: "mild",  label: "Mild",         desc: "Professional & balanced", bg: T.pillBlueBg,  fg: T.pillBlueFg  },
  { key: "harsh", label: "Being Harsh",  desc: "Direct & firm",        bg: T.pillRoseBg,  fg: T.pillRoseFg  },
];
const TONE_PROMPTS = {
  easy:  "Write in a gentle, understanding, and empathetic tone. Be soft, considerate, and prioritise the relationship above all.",
  mild:  "Write in a professional, confident, and balanced tone. Be friendly but assertive.",
  harsh: "Write in a direct, firm, and no-nonsense tone. Be assertive and clear about expectations without being rude.",
};

const CommsModule = ({ client, patch }) => {
  const s = client.modules.comms;
  const [refineText, setRefineText] = useState("");
  const currentTone = s.tone || "mild";

  const go = () => {
    patch({ comms: { ...s, error: "", output: "", streaming: true } });
    let buffer = "";
    streamClaude({
      system: `You are an expert freelance communication coach. Write professional emails for freelancers. Keep emails concise and action-oriented. No markdown. Plain paragraphs only. ${TONE_PROMPTS[currentTone]}`,
      user: `Freelancer is writing to client: ${client.name}\nSituation: ${s.situation}\nContext: ${s.context || "No additional context provided."}`,
      onChunk: (txt) => { buffer += txt; patch({ comms: { ...s, error: "", streaming: true, output: buffer } }); },
      onDone: () => patch({ comms: { ...s, error: "", output: buffer, streaming: false } }),
      onError: (err) => patch({ comms: { ...s, streaming: false, error: err.message || "Something went wrong." } }),
    });
  };

  const refine = () => {
    const req = refineText.trim();
    if (!req || !s.output || s.streaming) return;
    setRefineText("");
    patch({ comms: { ...s, error: "", streaming: true } });
    let buffer = "";
    streamClaude({
      system: `You are an email editor. Your only job is to edit the email based on the user's request. Output only the revised email — no commentary, no preamble. No markdown. ${TONE_PROMPTS[currentTone]} If the request is unrelated to this email, respond: 'I can only help refine this email.'`,
      user: `Current email:\n${s.output}\n\nRequested change: ${req}`,
      onChunk: (txt) => { buffer += txt; patch({ comms: { ...s, error: "", streaming: true, output: buffer } }); },
      onDone: () => patch({ comms: { ...s, error: "", output: buffer, streaming: false } }),
      onError: (err) => patch({ comms: { ...s, streaming: false, error: err.message || "Something went wrong." } }),
    });
  };
  return (
    <div className="fade-up">
      <ModuleHeader icon={<Mail size={22} />} title={t("comms")} description={`${t("commsDesc")} ${client.name}.`} badge={{ label: t("aiPowered"), tone: "blue" }} />
      <Card>
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 11.5, fontWeight: 700, color: T.subtext, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 10 }}>{t("situation")}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {SITUATIONS.map(sit => {
              const active = s.situation === sit.value;
              return (
                <div key={sit.value} style={{ position: "relative" }}
                  onMouseEnter={e => { const tip = e.currentTarget.querySelector(".sit-tip"); if (tip) tip.style.opacity = "1"; }}
                  onMouseLeave={e => { const tip = e.currentTarget.querySelector(".sit-tip"); if (tip) tip.style.opacity = "0"; }}>
                  <button
                    onClick={() => patch({ comms: { ...s, situation: sit.value } })}
                    style={{
                      padding: "8px 16px", fontSize: 13, fontWeight: 700, borderRadius: 999,
                      background: active ? sit.fg : sit.bg,
                      color: active ? "white" : sit.fg,
                      border: `1.5px solid ${active ? sit.fg : "transparent"}`,
                      transition: "all .18s ease", cursor: "pointer",
                      boxShadow: active ? `0 2px 8px ${sit.fg}44` : "none",
                    }} className="nav-item">
                    {sit.label}
                  </button>
                  <div className="sit-tip" style={{
                    position: "absolute", bottom: "calc(100% + 8px)", left: "50%",
                    transform: "translateX(-50%)",
                    background: T.darkSurface, color: T.bgInverse,
                    fontSize: 11.5, fontWeight: 500, whiteSpace: "nowrap",
                    padding: "6px 12px", borderRadius: 8,
                    pointerEvents: "none", opacity: 0,
                    transition: "opacity .15s ease",
                    zIndex: 50, boxShadow: T.shadowLg,
                  }}>
                    {sit.desc}
                    <div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: `5px solid ${T.darkSurface}` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Tone selector */}
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 11.5, fontWeight: 700, color: T.subtext, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 10 }}>Tone</div>
          <div style={{ display: "flex", gap: 8 }}>
            {TONES.map(tone => {
              const active = currentTone === tone.key;
              return (
                <div key={tone.key} style={{ position: "relative", flex: 1 }}
                  onMouseEnter={e => { const tip = e.currentTarget.querySelector(".sit-tip"); if (tip) tip.style.opacity = "1"; }}
                  onMouseLeave={e => { const tip = e.currentTarget.querySelector(".sit-tip"); if (tip) tip.style.opacity = "0"; }}>
                  <button
                    onClick={() => patch({ comms: { ...s, tone: tone.key } })}
                    style={{
                      width: "100%", padding: "9px 14px", fontSize: 13, fontWeight: 700, borderRadius: 10,
                      background: active ? tone.fg : tone.bg,
                      color: active ? "white" : tone.fg,
                      border: `1.5px solid ${active ? tone.fg : "transparent"}`,
                      transition: "all .18s ease", cursor: "pointer",
                      boxShadow: active ? `0 3px 10px ${tone.fg}44` : "none",
                      textAlign: "center",
                    }} className="nav-item">
                    {tone.label}
                  </button>
                  <div className="sit-tip" style={{ position: "absolute", bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)", background: T.darkSurface, color: T.bgInverse, fontSize: 11.5, fontWeight: 500, whiteSpace: "nowrap", padding: "6px 12px", borderRadius: 8, pointerEvents: "none", opacity: 0, transition: "opacity .15s ease", zIndex: 50, boxShadow: T.shadowLg }}>
                    {tone.desc}
                    <div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: `5px solid ${T.darkSurface}` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Field label={t("additionalContext")} hint="optional">
          <TextArea rows={3} value={s.context} onChange={e => patch({ comms: { ...s, context: e.target.value } })} placeholder="Any specific details, amounts, dates..." />
        </Field>
        <div style={{ display: "flex", justifyContent: "flex-end" }}><PrimaryBtn onClick={go} loading={s.streaming}>{t("draftEmail")}</PrimaryBtn></div>
        <ErrorBanner message={s.error} onDismiss={() => patch({ comms: { ...s, error: "" } })} />
      </Card>
      <div style={{ marginTop: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: T.text }}>Email Draft</div>
          {s.streaming && <Pill tone="blue">{t("streaming")}</Pill>}
          {!s.streaming && s.output && <Pill tone="mint">{t("ready")}</Pill>}
          {!s.streaming && s.output && <GhostBtn style={{ marginLeft: "auto" }} onClick={() => navigator.clipboard.writeText(s.output)}>{t("copy")}</GhostBtn>}
        </div>
        <AIBox text={s.output} streaming={s.streaming} emptyLabel="Your email draft will stream here." />
        {s.output && !s.streaming && (
          <div style={{ marginTop: 12, display: "flex", gap: 8, alignItems: "center", background: T.surface, border: `1.5px solid ${T.border}`, borderRadius: 999, padding: "6px 8px 6px 16px", boxShadow: T.shadow }}>
            <input value={refineText} onChange={e => setRefineText(e.target.value)} onKeyDown={e => e.key === "Enter" && refine()} placeholder="Ask for changes — e.g. make it shorter, more formal…" style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 13.5, color: T.text, fontFamily: T.sans }} />
            <button onClick={refine} disabled={!refineText.trim()} style={{ background: refineText.trim() ? T.text : T.bgDeeper, color: refineText.trim() ? T.bgInverse : T.muted, border: "none", borderRadius: 999, padding: "7px 16px", fontSize: 12.5, fontWeight: 600, flexShrink: 0, transition: "background .15s, color .15s" }}>{t("refine")}</button>
          </div>
        )}
      </div>
    </div>
  );
};

// ═══════ MODULE 6: RATE CALC ═══════
const RateModule = ({ client, patch, onOpenInvoice }) => {
  const s = client.modules.rate;
  const go = () => {
    const e = parseFloat(s.exp) || 0; const p = parseFloat(s.profit) || 0;
    const d = parseFloat(s.days) || 0; const h = parseFloat(s.hours) || 0;
    if (e <= 0 || d <= 0 || h <= 0 || !s.skill.trim()) { patch({ rate: { ...s, error: "Fill in expenses, days, hours, and your skill." } }); return; }
    if (p < 0) { patch({ rate: { ...s, error: "Desired profit can't be negative." } }); return; }
    const hourly = Math.ceil((e + p) / (d * h));
    const dayRate = hourly * h; const monthly = dayRate * d;
    const rates = { hourly, dayRate, monthly, hours: h };
    let buffer = "";
    patch({ rate: { ...s, error: "", rates, advice: "", streaming: true } });
    streamClaude({
      system: "You are a freelance pricing strategist. Give direct, actionable pricing advice. Keep it under 120 words. No markdown, no bullet points.",
      user: `Freelancer skill: ${s.skill}\nMonthly expenses: $${e}\nDesired profit: $${p}\nWorking days: ${d}\nBillable hours/day: ${h}\nCalculated hourly rate: $${hourly}`,
      onChunk: (txt) => { buffer += txt; patch({ rate: { ...s, rates, streaming: true, advice: buffer } }); },
      onDone: () => patch({ rate: { ...s, rates, advice: buffer, streaming: false } }),
      onError: () => patch({ rate: { ...s, rates, streaming: false } }),
    });
  };
  return (
    <div className="fade-up">
      <ModuleHeader icon={<Calculator size={22} />} title="Rate Calculator" description={t("rateDesc")} badge={{ label: t("aiPowered"), tone: "mint" }} />
      <Card>
        <div style={{ fontSize: 12, fontWeight: 700, color: T.subtext, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 12 }}>Your Numbers</div>
        <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
          <Field label={t("monthlyExpenses")}><TextInput value={s.exp} onChange={e => patch({ rate: { ...s, exp: e.target.value } })} type="number" placeholder="4500" /></Field>
          <Field label={t("desiredProfit")}><TextInput value={s.profit} onChange={e => patch({ rate: { ...s, profit: e.target.value } })} type="number" placeholder="3000" /></Field>
          <Field label={t("workingDays")}><TextInput value={s.days} onChange={e => patch({ rate: { ...s, days: e.target.value } })} type="number" placeholder="20" /></Field>
          <Field label={t("billableHoursDay")}><TextInput value={s.hours} onChange={e => patch({ rate: { ...s, hours: e.target.value } })} type="number" placeholder="6" /></Field>
        </div>
        <Field label={t("skillNiche")}><TextInput value={s.skill} onChange={e => patch({ rate: { ...s, skill: e.target.value } })} placeholder="Brand identity designer, React developer..." /></Field>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 4 }}><PrimaryBtn onClick={go} loading={s.streaming}>{t("calculate")}</PrimaryBtn></div>
        <ErrorBanner message={s.error} onDismiss={() => patch({ rate: { ...s, error: "" } })} />
      </Card>
      {s.rates && (
        <>
          <div className="g3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 18 }}>
            <StatCard bg={T.lilac} icon={<DollarSign size={18} />} label={t("hourlyRateLabel")} value={`$${s.rates.hourly}`} delta="per billable hour" />
            <StatCard bg={T.peach} icon={<CalendarDays size={18} />} label={t("dayRate")} value={`$${s.rates.dayRate}`} delta={`${s.rates.hours}hr equiv`} />
            <StatCard bg={T.sky} icon={<TrendingUp size={18} />} label={t("monthlyTarget")} value={`$${s.rates.monthly.toLocaleString()}`} delta="baseline income" />
          </div>
          {(s.streaming || s.advice) && (
            <Card>
              <div style={{ fontSize: 13, fontWeight: 700, color: T.text, marginBottom: 8 }}>AI Pricing Advice</div>
              <AIBox text={s.advice} streaming={s.streaming} emptyLabel="Pricing advice loading..." />
            </Card>
          )}
        </>
      )}
    </div>
  );
};

// ═══════ MODULE 7: TESTIMONIALS ═══════
const TestimonialsModule = ({ client, patch }) => {
  const s = client.modules.testimonials;
  const go = () => {
    if (!s.raw.trim()) { patch({ testimonials: { ...s, error: "Please paste the raw feedback first." } }); return; }
    patch({ testimonials: { ...s, error: "", polished: "", streaming: true } });
    let buffer = "";
    streamClaude({
      system: "You are a testimonial editor. Transform raw client feedback into polished, professional testimonials. Keep the client's voice but improve clarity. 2-3 sentences max. No quotes, no attribution — just the testimonial text.",
      user: `Client: ${client.name}\nProject: ${s.project || "General work"}\nRaw feedback: ${s.raw}`,
      onChunk: (txt) => { buffer += txt; patch({ testimonials: { ...s, error: "", streaming: true, polished: buffer } }); },
      onDone: () => { patch({ testimonials: { ...s, error: "", polished: buffer, streaming: false } }); },
      onError: (err) => patch({ testimonials: { ...s, streaming: false, error: err.message || "Something went wrong." } }),
    });
  };
  const saveCard = () => {
    if (!s.polished.trim()) return;
    const card = { id: Date.now(), name: s.name || client.name, project: s.project, quote: s.polished, tone: "positive", createdAt: Date.now() };
    patch({ testimonials: { ...s, cards: [card, ...s.cards], polished: "", raw: "" } });
  };
  return (
    <div className="fade-up">
      <ModuleHeader icon={<Star size={22} />} title={t("testimonials")} description={`${t("testimonialsDesc")} ${client.name}.`} badge={{ label: t("aiPowered"), tone: "amber" }} />
      <div className="g3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 28 }}>
        <StatCard bg={T.lilac} icon={<Star size={18} />} label={t("total")} value={s.cards.length} delta="from this client" />
        <StatCard bg={T.peach} icon={<PenLine size={18} />} label={t("polished")} value={s.streaming || s.polished ? "1" : "0"} delta="in progress" />
        <StatCard bg={T.sky} icon={<CheckCircle size={18} />} label={t("rating")} value="5.0" delta="avg score" />
      </div>
      <Card>
        <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <Field label="Client Name" hint="optional"><TextInput value={s.name} onChange={e => patch({ testimonials: { ...s, name: e.target.value } })} placeholder={client.name} /></Field>
          <Field label="Project / Context" hint="optional"><TextInput value={s.project} onChange={e => patch({ testimonials: { ...s, project: e.target.value } })} placeholder="Website redesign" /></Field>
        </div>
        <Field label={t("rawFeedback")}>
          <TextArea rows={5} value={s.raw} onChange={e => patch({ testimonials: { ...s, raw: e.target.value } })} placeholder="Paste their email, message, or notes here..." />
        </Field>
        <div style={{ display: "flex", justifyContent: "flex-end" }}><PrimaryBtn onClick={go} loading={s.streaming}>{t("polishTestimonial")}</PrimaryBtn></div>
        <ErrorBanner message={s.error} onDismiss={() => patch({ testimonials: { ...s, error: "" } })} />
      </Card>
      {(s.polished || s.streaming) && (
        <div style={{ marginTop: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: T.text }}>Polished Testimonial</div>
            {s.streaming && <Pill tone="blue">{t("streaming")}</Pill>}
            {!s.streaming && s.polished && <Pill tone="mint">{t("ready")}</Pill>}
            {!s.streaming && s.polished && (
              <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
                <GhostBtn onClick={() => navigator.clipboard.writeText(s.polished)}>{t("copy")}</GhostBtn>
                <PrimaryBtn onClick={saveCard}>Save as Card</PrimaryBtn>
              </div>
            )}
          </div>
          <AIBox text={s.polished} streaming={s.streaming} emptyLabel="Polished testimonial will appear here." />
        </div>
      )}
      {s.cards.length > 0 && (
        <div style={{ marginTop: 24 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: T.text, marginBottom: 12 }}>Saved Cards</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {s.cards.map(card => (
              <Card key={card.id}>
                <div style={{ fontSize: 15, lineHeight: 1.6, color: T.text, fontFamily: T.serif, fontStyle: "italic", marginBottom: 12 }}>"{card.quote}"</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div><div style={{ fontSize: 13, fontWeight: 700, color: T.text }}>{card.name}</div>{card.project && <div style={{ fontSize: 12, color: T.muted, marginTop: 2 }}>{card.project}</div>}</div>
                  <button onClick={() => patch({ testimonials: { ...s, cards: s.cards.filter(c => c.id !== card.id) } })} style={{ color: T.muted, padding: 6 }} className="nav-item"><Trash size={14} /></button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ═══════ MODULE 8: PRIORITIZER ═══════
const ENERGY = [
  { key: "low",  get label() { return "Low"; },    bg: T.pillRoseBg,  fg: T.pillRoseFg,  icon: <BatteryLow size={14} /> },
  { key: "med",  get label() { return "Medium"; }, bg: T.pillAmberBg, fg: T.pillAmberFg, icon: <Zap size={14} /> },
  { key: "high", get label() { return "High"; },   bg: T.pillMintBg,  fg: T.pillMintFg,  icon: <Flame size={14} /> },
];

const PrioritizerModule = ({ client, patch }) => {
  const s = client.modules.prioritizer;
  const taskCount = s.tasks ? s.tasks.split("\n").filter(l => l.trim()).length : 0;
  const go = () => {
    if (!s.tasks.trim()) { patch({ prioritizer: { ...s, error: "Please enter your tasks first." } }); return; }
    patch({ prioritizer: { ...s, error: "", output: "", streaming: true } });
    let buffer = "";
    streamClaude({
      system: "You are a productivity coach for freelancers. Given a list of tasks and energy level, pick the top 3 most important tasks to focus on today. Be direct and brief. No markdown. Format: '1. Task name — one line reason. 2. ...' etc.",
      user: `Energy level: ${s.energy}\n\nTask list:\n${s.tasks}`,
      onChunk: (txt) => { buffer += txt; patch({ prioritizer: { ...s, error: "", streaming: true, output: buffer } }); },
      onDone: () => patch({ prioritizer: { ...s, error: "", output: buffer, streaming: false } }),
      onError: (err) => patch({ prioritizer: { ...s, streaming: false, error: err.message || "Something went wrong." } }),
    });
  };
  return (
    <div className="fade-up">
      <ModuleHeader icon={<Target size={22} />} title="Daily Prioritizer" description={`${t("prioritizerDesc")} ${client.name}.`} badge={{ label: t("aiPowered"), tone: "rose" }} />
      <div className="g3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 28 }}>
        <StatCard bg={T.lilac} icon={<List size={18} />} label={t("tasks")} value={taskCount} delta="in queue" />
        <StatCard bg={T.peach} icon={<Zap size={18} />} label={t("energy")} value={ENERGY.find(e => e.key === s.energy)?.label} delta="today" />
        <StatCard bg={T.sky} icon={<Trophy size={18} />} label={t("focus")} value={s.output ? "3" : "—"} delta="priorities picked" />
      </div>
      <Card>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 11.5, fontWeight: 700, color: T.subtext, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 10 }}>{t("energyLevel")}</div>
          <div style={{ display: "flex", gap: 8 }}>
            {ENERGY.map(e => { const active = s.energy === e.key; return <button key={e.key} onClick={() => patch({ prioritizer: { ...s, energy: e.key } })} style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 999, background: active ? e.bg : T.surface, border: `1.5px solid ${active ? e.fg + "44" : T.border}`, color: active ? e.fg : T.subtext, fontSize: 13, fontWeight: 600, transition: "all .15s ease" }}>{e.icon}{e.label}</button>; })}
          </div>
        </div>
        <Field label={t("brainDump")}>
          <TextArea rows={6} value={s.tasks} onChange={e => patch({ prioritizer: { ...s, tasks: e.target.value } })} placeholder={"Reply to client email\nFinish homepage design\nSend invoice to Acme\nUpdate portfolio..."} />
        </Field>
        <div style={{ display: "flex", justifyContent: "flex-end" }}><PrimaryBtn onClick={go} loading={s.streaming}>{t("pickTop3")}</PrimaryBtn></div>
        <ErrorBanner message={s.error} onDismiss={() => patch({ prioritizer: { ...s, error: "" } })} />
      </Card>
      <div style={{ marginTop: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: T.text }}>Your Top 3</div>
          {s.streaming && <Pill tone="blue">{t("streaming")}</Pill>}
          {!s.streaming && s.output && <Pill tone="mint">{t("ready")}</Pill>}
        </div>
        <AIBox text={s.output} streaming={s.streaming} emptyLabel="Your top 3 will stream here." />
      </div>
    </div>
  );
};

// ═══════ DASHBOARD ═══════
const buildActivity = (clients) => {
  const events = [];
  clients.forEach(c => {
    const m = c.modules;
    if (m.proposals.output && !m.proposals.streaming) events.push({ id:`${c.id}-prop`, client:c, kind:"proposal", icon:<FileText size={16}/>, tone:"lilac", title:"Proposal generated", preview:m.proposals.output.slice(0,90).replace(/\s+/g," "), when:c.createdAt });
    if (m.comms.output) events.push({ id:`${c.id}-comms`, client:c, kind:"email", icon:<Mail size={16}/>, tone:"blue", title:"Email drafted", preview:m.comms.output.slice(0,90).replace(/\s+/g," "), when:c.createdAt+1 });
    if (m.rate.rates) events.push({ id:`${c.id}-rate`, client:c, kind:"rate", icon:<Calculator size={16}/>, tone:"mint", title:`Rate set at $${m.rate.rates.hourly}/hr`, preview:`Day rate $${m.rate.rates.dayRate} · Monthly $${m.rate.rates.monthly.toLocaleString()}`, when:c.createdAt+2 });
    m.timer.sessions.forEach(s => events.push({ id:`${c.id}-sess-${s.id}`, client:c, kind:"session", icon:<Timer size={16}/>, tone:"peach", title:"Focus session logged", preview:`${s.project} · ${s.minutes}m at ${s.time}`, when:s.id }));
    m.testimonials.cards.forEach(t => events.push({ id:`${c.id}-test-${t.id}`, client:c, kind:"testimonial", icon:<Star size={16}/>, tone:"amber", title:"Testimonial added", preview:`"${t.quote.slice(0,80)}${t.quote.length>80?"…":""}"`, when:t.id }));
    if (m.prioritizer.output) events.push({ id:`${c.id}-prio`, client:c, kind:"playbook", icon:<Target size={16}/>, tone:"rose", title:"Playbook generated", preview:m.prioritizer.output.split("\n").find(l=>l.trim())?.slice(0,90)||"Top 3 picked", when:c.createdAt+3 });
  });
  return events.sort((a,b)=>b.when-a.when);
};

const Dashboard = ({ clients, onOpenClient, onNewClient, onOpenModule }) => {
  const totalClients = clients.length;
  const totalProposals = clients.reduce((a,c)=>a+c.modules.proposals.count,0);
  const totalMinutes = clients.reduce((a,c)=>a+c.modules.timer.sessions.reduce((b,s)=>b+s.minutes,0),0);
  const totalHours = (totalMinutes/60).toFixed(1);
  const totalTestimonials = clients.reduce((a,c)=>a+c.modules.testimonials.cards.length,0);
  const runningTimers = clients.filter(c=>c.modules.timer.running);
  const revenueProjected = clients.reduce((a,c)=>{ const mins=c.modules.timer.sessions.reduce((b,s)=>b+s.minutes,0); const hourly=c.modules.rate.rates?.hourly||0; return a+(mins/60)*hourly; },0);
  const activity = buildActivity(clients).slice(0,12);
  const now = Date.now(); const sevenDaysAgo = now - 7*24*60*60*1000;
  const insights = [];
  clients.forEach(c => {
    const sessions = c.modules.timer.sessions;
    if (sessions.length>0) { const lastTs=sessions.reduce((latest,s)=>{ const ts=s.dateISO?new Date(s.dateISO).getTime():0; return ts>latest?ts:latest; },0); if (lastTs>0&&lastTs<sevenDaysAgo) insights.push({ tone:"amber", icon:<Clock size={14}/>, text:`No session for ${c.name} in 7+ days`, clientId:c.id }); }
    if (c.modules.proposals.count===0) insights.push({ tone:"rose", icon:<FileText size={14}/>, text:`No proposal for ${c.name} yet`, clientId:c.id });
    const unpaid=(c.modules.invoicing?.invoiceHistory||[]).filter(h=>h.status!=="paid");
    if (unpaid.length>0) insights.push({ tone:"rose", icon:<Receipt size={14}/>, text:`${unpaid.length} unpaid invoice${unpaid.length>1?"s":""} — ${c.name}`, clientId:c.id });
  });
  const pipeline = CLIENT_STATUSES.map(s=>({ ...s, clients:clients.filter(c=>(c.status||"prospect")===s.key) })).filter(s=>s.clients.length>0);

  const toneColors = { lilac:{bg:T.pillLilacBg,fg:T.pillLilacFg}, peach:{bg:T.pillPeachBg,fg:T.pillPeachFg}, blue:{bg:T.pillBlueBg,fg:T.pillBlueFg}, mint:{bg:T.pillMintBg,fg:T.pillMintFg}, amber:{bg:T.pillAmberBg,fg:T.pillAmberFg}, rose:{bg:T.pillRoseBg,fg:T.pillRoseFg} };

  return (
    <div className="fade-up dashboard-main" style={{ padding:"22px 48px 80px", maxWidth:1440, margin:"0 auto" }}>
      <div style={{ marginBottom:28 }}>
        <div style={{ fontSize:13, color:T.subtext, fontWeight:500, letterSpacing:"-0.005em", marginBottom:4 }}>
          {new Date().toLocaleDateString([], { weekday:"long", month:"long", day:"numeric" })}
        </div>
        <h1 style={{ fontSize:32, fontWeight:800, letterSpacing:"-0.035em", color:T.text }}>
          {t("dashboard")}
        </h1>
      </div>
      <div className="g4" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14, marginBottom:14 }}>
        <StatCard bg={T.lilac} icon={<Users size={18}/>} label={t("clients")} value={totalClients} delta={`${runningTimers.length} active now`} />
        <StatCard bg={T.peach} icon={<FileText size={18}/>} label={t("proposals")} value={totalProposals} delta="generated" />
        <StatCard bg={T.sky} icon={<Clock size={18}/>} label="Total Hours" value={totalHours} delta={`${totalMinutes} billable mins`} />
        <StatCard bg={T.mint} icon={<Star size={18}/>} label={t("testimonials")} value={totalTestimonials} delta="collected" />
      </div>
      {revenueProjected>0&&<Card style={{ marginBottom:18 }}><div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}><div><div style={{ fontSize:12, fontWeight:700, color:T.subtext, letterSpacing:"0.06em", textTransform:"uppercase" }}>Revenue Projection</div><div style={{ fontSize:28, fontWeight:800, letterSpacing:"-0.03em", color:T.text, fontFamily:T.mono, marginTop:4 }}>{fmtMoney(revenueProjected)}</div></div><div style={{ fontSize:12.5, color:T.muted }}>Based on logged sessions × each client's hourly rate.</div></div></Card>}
      <div className="dashboard-grid" style={{ display:"grid", gridTemplateColumns:"1.4fr 1fr", gap:18, marginBottom:18 }}>
        <Card>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:18 }}>
            <div><div style={{ fontSize:15, fontWeight:700, color:T.text }}>Hours by Client</div><div style={{ fontSize:12.5, color:T.subtext, marginTop:2 }}>Billable time across your practice</div></div>
            <Pill tone="mint">{totalMinutes}m total</Pill>
          </div>
          {clients.length===0?<div style={{ padding:"30px 0", textAlign:"center", color:T.muted, fontSize:13 }}>No clients yet.</div>:totalMinutes===0?<div style={{ padding:"30px 20px", textAlign:"center", color:T.muted, fontSize:13.5, border:`1.5px dashed ${T.border}`, borderRadius:T.radius, background:T.bgSoft }}>Start a focus timer on any client to see time accumulate here.</div>:(
            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {clients.map(c=>{ const mins=c.modules.timer.sessions.reduce((a,s)=>a+s.minutes,0); if(!mins) return null; const pct=Math.round((mins/totalMinutes)*100); return <div key={c.id}><div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}><span style={{ fontSize:13, fontWeight:500, color:T.text }}>{c.name}</span><span style={{ fontSize:12, color:T.muted }}>{(mins/60).toFixed(1)}h</span></div><div style={{ height:6, background:T.bgSoft, borderRadius:999 }}><div style={{ height:"100%", width:`${pct}%`, background:c.hue.fg, borderRadius:999, transition:"width .4s ease" }}/></div></div>; })}
            </div>
          )}
        </Card>
        <Card>
          <div style={{ fontSize:15, fontWeight:700, color:T.text, marginBottom:16 }}>Recent Activity</div>
          {activity.length===0?<div style={{ padding:"20px 0", textAlign:"center", color:T.muted, fontSize:13 }}>No activity yet.</div>:(
            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {activity.map(e=>{ const tc=toneColors[e.tone]||toneColors.lilac; return <button key={e.id} onClick={()=>onOpenClient(e.client.id)} className="nav-item card-hover" style={{ display:"flex", alignItems:"flex-start", gap:10, padding:"10px 12px", borderRadius:T.radius, textAlign:"left", background:T.bgSoft }}><div className="letter-avatar" style={{ width:28, height:28, borderRadius:"50%", background:tc.bg, color:tc.fg, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{e.icon}</div><div style={{ minWidth:0, flex:1 }}><div style={{ fontSize:12.5, fontWeight:600, color:T.text }}>{e.title} · <span style={{ color:T.muted, fontWeight:500 }}>{e.client.name}</span></div><div style={{ fontSize:11.5, color:T.muted, marginTop:2, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{e.preview}</div></div></button>; })}
            </div>
          )}
        </Card>
      </div>
      {/* ── Time Report ── */}
      {totalMinutes > 0 && (() => {
        const now = new Date();
        const months = Array.from({ length: 6 }, (_, i) => {
          const d = new Date(now.getFullYear(), now.getMonth() - (5 - i), 1);
          return { year: d.getFullYear(), month: d.getMonth(), label: d.toLocaleDateString(getLocale(), { month: "short" }) };
        });
        const minsPerMonth = months.map(m => {
          let total = 0;
          clients.forEach(c => c.modules.timer.sessions.forEach(s => {
            if (!s.dateISO) return;
            const d = new Date(s.dateISO);
            if (d.getFullYear() === m.year && d.getMonth() === m.month) total += s.minutes;
          }));
          return { ...m, mins: total, hrs: +(total / 60).toFixed(1) };
        });
        const maxHrs = Math.max(...minsPerMonth.map(m => m.hrs), 1);
        const thisMonth = minsPerMonth[5];
        const lastMonth = minsPerMonth[4];
        const diff = thisMonth.hrs - lastMonth.hrs;
        const thisMonthClients = clients.map(c => ({
          name: c.name, hue: c.hue,
          hrs: +(c.modules.timer.sessions.filter(s => { if (!s.dateISO) return false; const d = new Date(s.dateISO); return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth(); }).reduce((a, s) => a + s.minutes, 0) / 60).toFixed(1),
        })).filter(c => c.hrs > 0).sort((a, b) => b.hrs - a.hrs);

        return (
          <div style={{ marginTop: 28 }}>
            <Card>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: T.text, letterSpacing: "-0.01em" }}>Time Report</div>
                  <div style={{ fontSize: 12.5, color: T.subtext, marginTop: 2 }}>Billed hours over the last 6 months</div>
                </div>
                <div style={{ display: "flex", gap: 16 }}>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 11, color: T.muted, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>This month</div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: T.text, fontFamily: T.mono, letterSpacing: "-0.02em" }}>{thisMonth.hrs}h</div>
                  </div>
                  {lastMonth.hrs > 0 && (
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 11, color: T.muted, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>vs last month</div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: diff >= 0 ? T.green : T.red, fontFamily: T.mono }}>{diff >= 0 ? "+" : ""}{diff.toFixed(1)}h</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Bar chart */}
              <div style={{ display: "flex", gap: 8, alignItems: "flex-end", height: 80, marginBottom: 8 }}>
                {minsPerMonth.map((m, i) => (
                  <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <div style={{ fontSize: 10, color: T.muted, fontWeight: 600 }}>{m.hrs > 0 ? `${m.hrs}h` : ""}</div>
                    <div style={{ width: "100%", background: T.bgSoft, borderRadius: 6, overflow: "hidden", height: 52 }}>
                      <div style={{ width: "100%", height: `${Math.max(4, (m.hrs / maxHrs) * 100)}%`, background: i === 5 ? T.text : T.border, borderRadius: 6, transition: "height .4s ease", marginTop: "auto", position: "relative", top: `${100 - Math.max(4, (m.hrs / maxHrs) * 100)}%` }} />
                    </div>
                    <div style={{ fontSize: 10.5, color: i === 5 ? T.text : T.muted, fontWeight: i === 5 ? 700 : 500 }}>{m.label}</div>
                  </div>
                ))}
              </div>

              {/* This month by client */}
              {thisMonthClients.length > 0 && (
                <div style={{ marginTop: 18, paddingTop: 16, borderTop: `1px solid ${T.border}` }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: T.subtext, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 10 }}>
                    {now.toLocaleDateString(getLocale(), { month: "long" })} by client
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {thisMonthClients.map(c => (
                      <div key={c.name} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 20, height: 20, borderRadius: "50%", background: c.hue.bg, color: c.hue.fg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, fontWeight: 700, flexShrink: 0 }}>{c.name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase()}</div>
                        <div style={{ flex: 1, fontSize: 13, color: T.text, fontWeight: 500 }}>{c.name}</div>
                        <div style={{ height: 6, width: 100, background: T.bgSoft, borderRadius: 999, overflow: "hidden" }}>
                          <div style={{ height: "100%", width: `${(c.hrs / thisMonthClients[0].hrs) * 100}%`, background: c.hue.fg, borderRadius: 999 }} />
                        </div>
                        <div style={{ fontSize: 12.5, fontWeight: 700, color: T.text, fontFamily: T.mono, width: 36, textAlign: "right" }}>{c.hrs}h</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          </div>
        );
      })()}

      {clients.length>0&&(
        <div style={{ marginTop:28 }}>
          <Card>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:18 }}>
              <div><div style={{ fontSize:15, fontWeight:700, color:T.text }}>{t("pipeline")}</div><div style={{ fontSize:12.5, color:T.subtext, marginTop:2 }}>{clients.length} client{clients.length!==1?"s":""} across {CLIENT_STATUSES.filter(s=>clients.some(c=>(c.status||"prospect")===s.key)).length} stages</div></div>
              <div style={{ display:"flex", gap:10, alignItems:"center", flexWrap:"wrap" }}>
                {CLIENT_STATUSES.map(st=>{ const count=clients.filter(c=>(c.status||"prospect")===st.key).length; if(!count) return null; return <div key={st.key} style={{ display:"flex", alignItems:"center", gap:5 }}><span style={{ width:8, height:8, borderRadius:"50%", background:st.fg, display:"inline-block" }}/><span style={{ fontSize:12, fontWeight:600, color:T.subtext }}>{st.label}</span><span style={{ fontSize:12, fontWeight:700, color:st.fg, background:st.bg, borderRadius:999, padding:"1px 7px" }}>{count}</span></div>; })}
              </div>
            </div>
            <div style={{ display:"flex", borderRadius:999, overflow:"hidden", height:5, marginBottom:20, gap:2 }}>
              {CLIENT_STATUSES.map(st=>{ const count=clients.filter(c=>(c.status||"prospect")===st.key).length; if(!count) return null; return <div key={st.key} style={{ flex:count, background:st.fg, opacity:0.7 }}/>; })}
            </div>
            <div style={{ display:"flex", flexDirection:"column" }}>
              {CLIENT_STATUSES.map((st,si)=>{ const group=clients.filter(c=>(c.status||"prospect")===st.key); if(!group.length) return null; return <div key={st.key}><div style={{ display:"flex", alignItems:"center", gap:8, padding:"10px 0 6px", borderTop:si>0?`1px solid ${T.border}`:"none" }}><span style={{ width:8, height:8, borderRadius:"50%", background:st.fg, display:"inline-block" }}/><span style={{ fontSize:11, fontWeight:700, color:st.fg, letterSpacing:"0.06em", textTransform:"uppercase" }}>{st.label}</span><span style={{ fontSize:11, color:T.muted }}>{group.length}</span></div>{group.map(c=>{ const hours=(c.modules.timer.sessions.reduce((a,s)=>a+s.minutes,0)/60).toFixed(1); const proposals=c.modules.proposals.count; return <button key={c.id} onClick={()=>onOpenClient(c.id)} className="nav-item" style={{ display:"flex", alignItems:"center", gap:12, width:"100%", padding:"9px 10px 9px 18px", borderRadius:10, textAlign:"left", borderLeft:`3px solid ${st.fg}22`, marginBottom:2 }}><div className="letter-avatar" style={{ width:28, height:28, borderRadius:"50%", background:c.hue.bg, color:c.hue.fg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:10, fontWeight:700, flexShrink:0 }}>{c.name.split(" ").map(n=>n[0]).join("").slice(0,2).toUpperCase()}</div><span style={{ fontSize:13.5, fontWeight:500, color:T.text, flex:1, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{c.name}</span><span style={{ fontSize:11.5, color:T.muted, display:"flex", alignItems:"center", gap:4 }}><FileText size={11}/> {proposals}</span><span style={{ fontSize:11.5, color:T.muted, display:"flex", alignItems:"center", gap:4 }}><Clock size={11}/> {hours}h</span>{c.modules.timer.running&&<span className="pulse" style={{ width:6, height:6, borderRadius:"50%", background:T.green, flexShrink:0 }}/>}<span style={{ color:T.muted, fontSize:12 }}>→</span></button>; })}</div>; })}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

// ═══════ ONBOARDING ═══════
const OnboardingScreen = ({ onNewClient }) => (
  <div style={{ minHeight:"100vh", background:T.bg, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:T.sans }}>
    <div className="fade-up" style={{ textAlign:"center", maxWidth:480, padding:"0 24px" }}>
      <div style={{ display:"flex", justifyContent:"center", gap:10, marginBottom:32 }}>
        {[T.pillLilacBg,T.pillPeachBg,T.pillBlueBg,T.pillMintBg].map((bg,i)=>(
          <div key={i} style={{ width:44, height:44, borderRadius:"50%", background:bg, display:"flex", alignItems:"center", justifyContent:"center" }}><Users size={18} color={T.subtext}/></div>
        ))}
      </div>
      <div style={{ fontSize:28, fontWeight:800, letterSpacing:"-0.04em", color:T.text, marginBottom:6 }}>{t("appName")}</div>
      <div style={{ fontSize:22, fontWeight:700, letterSpacing:"-0.025em", color:T.text, marginBottom:12 }}>{t("onboardingHeadline")}</div>
      <div style={{ fontSize:15, color:T.subtext, lineHeight:1.6, marginBottom:32 }}>{t("onboardingDesc")}</div>
      <PrimaryBtn onClick={onNewClient} style={{ fontSize:15, padding:"14px 32px" }}>{t("addFirstClient")}</PrimaryBtn>
    </div>
  </div>
);

// ═══════ CLIENT CONTACT MODAL ═══════
const ClientContactModal = ({ client, onSave, onClose }) => {
  const [form, setForm] = useState({ email:"", phone:"", website:"", notes:"", ...client?.contact });
  useEffect(() => { const h=e=>{ if(e.key==="Escape") onClose(); }; window.addEventListener("keydown",h); return ()=>window.removeEventListener("keydown",h); }, [onClose]);
  return (
    <div className="new-client-overlay" onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} className="fade-up" style={{ background:T.surface, borderRadius:T.radiusLg, padding:28, width:440, maxWidth:"90vw", border:`1px solid ${T.border}`, boxShadow:T.shadowLg }}>
        <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
          <IconBadge size={40}><UserPlus size={18}/></IconBadge>
          <div><h2 style={{ fontSize:18, fontWeight:700, letterSpacing:"-0.02em", color:T.text }}>{t("contactInfo")}</h2><p style={{ fontSize:12.5, color:T.subtext, marginTop:2 }}>{client?.name}</p></div>
        </div>
        <div className="g2" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:14 }}>
          <Field label={t("email")}><TextInput value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} placeholder="client@company.com" /></Field>
          <Field label={t("phone")}><TextInput value={form.phone} onChange={e=>setForm(f=>({...f,phone:e.target.value}))} placeholder="+1 555 000 0000" /></Field>
        </div>
        <Field label={t("website")} style={{ marginBottom:14 }}><TextInput value={form.website} onChange={e=>setForm(f=>({...f,website:e.target.value}))} placeholder="https://company.com" /></Field>
        <Field label={t("notes")}><TextArea rows={3} value={form.notes} onChange={e=>setForm(f=>({...f,notes:e.target.value}))} placeholder="Timezone, preferences, context..." /></Field>
        <div style={{ display:"flex", gap:8, justifyContent:"flex-end", marginTop:20 }}>
          <GhostBtn onClick={onClose}>{t("cancel")}</GhostBtn>
          <PrimaryBtn onClick={()=>{ onSave(form); onClose(); }}>{t("save")}</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

// ═══════ REMINDER MODAL ═══════
const REMINDER_CHIPS = [
  { get label() { return t("tomorrow"); }, days:1 },
  { get label() { return t("threedays"); }, days:3 },
  { get label() { return t("oneWeek"); }, days:7 },
  { get label() { return t("twoWeeks"); }, days:14 },
];

const ReminderModal = ({ client, onSave, onClose }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState(() => { const d=new Date(); d.setDate(d.getDate()+7); return d.toISOString().split("T")[0]; });
  const inputRef = useRef(null);
  useEffect(() => { inputRef.current?.focus(); }, []);
  useEffect(() => { const h=e=>{ if(e.key==="Escape") onClose(); }; window.addEventListener("keydown",h); return ()=>window.removeEventListener("keydown",h); }, [onClose]);
  const setChip = (days) => { const d=new Date(); d.setDate(d.getDate()+days); setDate(d.toISOString().split("T")[0]); };
  const submit = () => { if(!text.trim()) return; onSave({ id:`r_${Date.now()}`, text:text.trim(), dueDate:date, done:false, createdAt:Date.now() }); onClose(); };
  return (
    <div className="new-client-overlay" onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} className="fade-up" style={{ background:T.surface, borderRadius:T.radiusLg, padding:28, width:420, maxWidth:"90vw", border:`1px solid ${T.border}`, boxShadow:T.shadowLg }}>
        <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
          <IconBadge size={40}><CalendarClock size={18}/></IconBadge>
          <div><h2 style={{ fontSize:18, fontWeight:700, letterSpacing:"-0.02em", color:T.text }}>{t("setReminder")}</h2><p style={{ fontSize:12.5, color:T.subtext, marginTop:2 }}>{client?.name}</p></div>
        </div>
        <Field label={t("whatToFollowUp")}><TextInput ref={inputRef} value={text} onChange={e=>setText(e.target.value)} onKeyDown={e=>e.key==="Enter"&&submit()} placeholder="Follow up on proposal, check invoice status…" /></Field>
        <div style={{ marginTop:14, marginBottom:6, fontSize:11.5, fontWeight:700, color:T.subtext, letterSpacing:"0.04em", textTransform:"uppercase" }}>{t("remindMeIn")}</div>
        <div style={{ display:"flex", gap:6, marginBottom:14 }}>
          {REMINDER_CHIPS.map(c=><button key={c.days} onClick={()=>setChip(c.days)} style={{ padding:"6px 12px", fontSize:12.5, fontWeight:600, borderRadius:999, border:`1.5px solid ${T.border}`, background:T.surface, color:T.subtext, cursor:"pointer" }} className="nav-item">{c.label}</button>)}
        </div>
        <Field label={t("dueDate")}><TextInput type="date" value={date} onChange={e=>setDate(e.target.value)} /></Field>
        <div style={{ display:"flex", gap:8, justifyContent:"flex-end", marginTop:20 }}>
          <GhostBtn onClick={onClose}>{t("cancel")}</GhostBtn>
          <PrimaryBtn onClick={submit}>{t("setReminder")}</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

// ═══════ NOTIFICATION BELL ═══════
const NotificationBell = ({ clients, onOpenClient, onDismissReminder }) => {
  const [open, setOpen] = useState(false);
  const todayStr = new Date().toISOString().split("T")[0];
  const now = Date.now(); const sevenDaysAgo = now - 7*24*60*60*1000;
  const reminders = [];
  clients.forEach(c => { (c.reminders||[]).filter(r=>!r.done&&r.dueDate<=todayStr).forEach(r=>{ reminders.push({...r,clientId:c.id,clientName:c.name}); }); });
  const insights = [];
  clients.forEach(c => {
    const sessions=c.modules.timer.sessions;
    if (sessions.length>0) { const lastTs=sessions.reduce((latest,s)=>{ const ts=s.dateISO?new Date(s.dateISO).getTime():0; return ts>latest?ts:latest; },0); if(lastTs>0&&lastTs<sevenDaysAgo) insights.push({ tone:"amber", icon:<Clock size={13}/>, text:`No session for ${c.name} in 7+ days`, clientId:c.id }); }
    if (c.modules.proposals.count===0) insights.push({ tone:"amber", icon:<FileText size={13}/>, text:`No proposal for ${c.name} yet`, clientId:c.id });
    const unpaid=(c.modules.invoicing?.invoiceHistory||[]).filter(h=>h.status!=="paid");
    if (unpaid.length>0) insights.push({ tone:"rose", icon:<Receipt size={13}/>, text:`${unpaid.length} unpaid invoice${unpaid.length>1?"s":""} — ${c.name}`, clientId:c.id });
  });
  const totalCount = reminders.length + insights.length;
  return (
    <div style={{ position:"relative" }}>
      <button onClick={()=>setOpen(o=>!o)} style={{ position:"relative", width:36, height:36, borderRadius:"50%", background:T.surface, border:`1px solid ${T.border}`, display:"flex", alignItems:"center", justifyContent:"center", color:reminders.length>0?T.pillRoseFg:T.subtext, cursor:"pointer", boxShadow:T.shadow }} className="nav-item">
        {reminders.length>0?<BellRing size={15}/>:<Bell size={15}/>}
        {totalCount>0&&<span style={{ position:"absolute", top:-3, right:-3, width:16, height:16, borderRadius:"50%", background:T.pillRoseFg, color:"white", fontSize:9, fontWeight:700, display:"flex", alignItems:"center", justifyContent:"center", border:`2px solid ${T.bg}` }}>{totalCount}</span>}
      </button>
      {open&&(
        <>
          <div style={{ position:"fixed", inset:0, zIndex:299 }} onClick={()=>setOpen(false)}/>
          <div className="fade-up" style={{ position:"absolute", top:"calc(100% + 10px)", right:0, width:320, background:T.surface, border:`1px solid ${T.border}`, borderRadius:T.radiusLg, boxShadow:T.shadowLg, zIndex:300, overflow:"hidden" }}>
            <div style={{ padding:"14px 16px 10px", borderBottom:`1px solid ${T.border}`, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
              <div style={{ fontSize:13.5, fontWeight:700, color:T.text }}>{t("notifications")}</div>
              {totalCount>0&&<Pill tone="rose">{totalCount} new</Pill>}
            </div>
            {totalCount===0?<div style={{ padding:"28px 16px", textAlign:"center", color:T.muted, fontSize:13 }}>{t("allCaughtUp")}</div>:(
              <div style={{ maxHeight:400, overflowY:"auto" }}>
                {reminders.length>0&&(<>
                  <div style={{ padding:"8px 16px 4px", fontSize:10.5, fontWeight:700, color:T.subtext, letterSpacing:"0.06em", textTransform:"uppercase" }}>{t("reminders")}</div>
                  {reminders.map((r,i)=>(
                    <div key={r.id} style={{ display:"flex", alignItems:"flex-start", gap:10, padding:"11px 16px", borderBottom:`1px solid ${T.border}`, background:"var(--t-pill-rose-bg-alpha)" }}>
                      <CalendarClock size={13} color={T.pillRoseFg} style={{ marginTop:2, flexShrink:0 }}/>
                      <div style={{ flex:1, minWidth:0 }}><div style={{ fontSize:13, fontWeight:600, color:T.text, lineHeight:1.3 }}>{r.text}</div><div style={{ fontSize:11, color:T.muted, marginTop:2 }}>{r.clientName} · Due {r.dueDate}</div></div>
                      <div style={{ display:"flex", gap:4, flexShrink:0 }}>
                        <button onClick={()=>{ onOpenClient(r.clientId); setOpen(false); }} style={{ fontSize:11, color:T.subtext, padding:"3px 7px", borderRadius:6, border:`1px solid ${T.border}`, background:T.surface, cursor:"pointer" }} className="nav-item">{t("view")}</button>
                        <button onClick={()=>onDismissReminder(r.clientId,r.id)} style={{ fontSize:11, color:T.pillMintFg, padding:"3px 7px", borderRadius:6, border:`1px solid ${T.pillMintFg}44`, background:T.pillMintBg, cursor:"pointer" }} className="nav-item">{t("done")}</button>
                      </div>
                    </div>
                  ))}
                </>)}
                {insights.length>0&&(<>
                  <div style={{ padding:"8px 16px 4px", fontSize:10.5, fontWeight:700, color:T.subtext, letterSpacing:"0.06em", textTransform:"uppercase" }}>{t("insights")}</div>
                  {insights.map((ins,i)=>(
                    <button key={i} onClick={()=>{ onOpenClient(ins.clientId); setOpen(false); }} className="nav-item" style={{ display:"flex", alignItems:"flex-start", gap:10, width:"100%", padding:"11px 16px", textAlign:"left", borderBottom:i<insights.length-1?`1px solid ${T.border}`:"none" }}>
                      <span style={{ marginTop:1, color:ins.tone==="rose"?T.pillRoseFg:T.pillAmberFg, display:"flex", flexShrink:0 }}>{ins.icon}</span>
                      <span style={{ fontSize:13, color:T.text, flex:1, lineHeight:1.4 }}>{ins.text}</span>
                      <span style={{ color:T.muted, fontSize:11, flexShrink:0 }}>→</span>
                    </button>
                  ))}
                </>)}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

// ═══════ STATUS SELECTOR ═══════
const StatusSelector = ({ client, onSetStatus }) => {
  const [open, setOpen] = useState(false);
  const st = getStatus(client);
  return (
    <div style={{ position:"relative" }}>
      <button onClick={()=>setOpen(o=>!o)} style={{ display:"flex", alignItems:"center", gap:6, padding:"6px 12px", borderRadius:999, background:st.bg, border:"none", cursor:"pointer", fontSize:12, fontWeight:700, color:st.fg, letterSpacing:"0.01em" }}>
        {st.label} <span style={{ fontSize:9, opacity:0.7 }}>▼</span>
      </button>
      {open&&(
        <>
          <div style={{ position:"fixed", inset:0, zIndex:199 }} onClick={()=>setOpen(false)}/>
          <div style={{ position:"absolute", top:"calc(100% + 6px)", right:0, background:T.surface, border:`1px solid ${T.border}`, borderRadius:T.radius, boxShadow:T.shadowLg, zIndex:200, minWidth:148, overflow:"hidden" }}>
            {CLIENT_STATUSES.map(s=>(
              <button key={s.key} onClick={()=>{ onSetStatus(s.key); setOpen(false); }} style={{ display:"flex", alignItems:"center", gap:8, width:"100%", padding:"10px 14px", background:client.status===s.key?T.bgSoft:"transparent", border:"none", cursor:"pointer", fontSize:13, fontWeight:client.status===s.key?700:500, color:T.text, textAlign:"left" }} className="nav-item">
                <span style={{ width:8, height:8, borderRadius:"50%", background:s.fg, flexShrink:0 }}/>{s.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// ═══════ MOBILE HEADER ═══════
const MobileHeader = ({ onOpenMenu, clients, onOpenClient, onDismissReminder }) => (
  <header className="mobile-header">
    <button onClick={onOpenMenu} style={{ width:40, height:40, display:"flex", alignItems:"center", justifyContent:"center", borderRadius:10, color:"var(--t-text)", flexShrink:0 }} className="nav-item">
      <svg width="18" height="14" viewBox="0 0 18 14" fill="none"><rect width="18" height="2" rx="1" fill="currentColor"/><rect y="6" width="12" height="2" rx="1" fill="currentColor"/><rect y="12" width="18" height="2" rx="1" fill="currentColor"/></svg>
    </button>
    <div style={{ fontSize:18, fontWeight:800, letterSpacing:"-0.04em", color:"var(--t-text)" }}>{t("appName")}</div>
    <NotificationBell clients={clients} onOpenClient={onOpenClient} onDismissReminder={onDismissReminder}/>
  </header>
);

// ═══════ LOGIN SCREEN ═══════
function getPasswordStrength(pw) {
  if (!pw) return { score:0, label:"", color:"var(--t-border)" };
  let s=0;
  if (pw.length>=6) s++; if (pw.length>=10) s++;
  if (/[A-Z]/.test(pw)&&/[a-z]/.test(pw)) s++;
  if (/[0-9]/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  s=Math.min(4,s);
  return { score:s, label:["","Weak","Fair","Good","Strong"][s], color:["var(--t-border)","var(--t-pill-rose-fg)","var(--t-amber)","var(--t-pill-blue-fg)","var(--t-pill-mint-fg)"][s] };
}

const LoginScreen = ({ onAuthenticated }) => {
  const [mode, setMode] = useState("signin");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const inputRef = useRef(null);
  const isSignup = mode === "signup";
  const strength = getPasswordStrength(password);

  useEffect(() => { inputRef.current?.focus(); }, [mode]);
  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(null), 3000); };

  const submit = async (e) => {
    e?.preventDefault?.();
    setError("");
    if (!username.trim()) { setError("Please enter your email."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)) { setError("Please enter a valid email address."); return; }
    if (!password) { setError("Please enter a password."); return; }
    if (isSignup && password.length < 4) { setError("Password must be at least 4 characters."); return; }
    setLoading(true);
    const email = usernameToEmail(username);
    if (isSignup) {
      const { error: signUpError } = await supabase.auth.signUp({ email, password, options: { data: { username: username.trim(), display_name: name.trim() || username.trim() } } });
      if (signUpError) { setError(signUpError.message === "User already registered" ? "Username already taken." : signUpError.message); setLoading(false); return; }
      showToast(`Welcome${name ? `, ${name.split(" ")[0]}` : ""} — Bench is ready`);
      setTimeout(() => { startSession(); onAuthenticated(username.trim()); }, 1200);
    } else {
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
      if (signInError) { setError("Incorrect username or password."); setLoading(false); return; }
      showToast("Welcome back — opening your Bench");
      setTimeout(() => { startSession(); onAuthenticated(username.trim()); }, 900);
    }
    setLoading(false);
  };

  return (
    <>
      <style>{`
        @keyframes float-blob { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-6%,4%) scale(1.04)} 66%{transform:translate(5%,-3%) scale(0.98)} }
        .login-page { min-height:100vh; background:var(--t-bg-deeper); display:flex; align-items:center; justify-content:center; padding:24px; font-family:${T.sans}; }
        .login-card { width:100%; max-width:1000px; background:var(--t-surface); border:1px solid var(--t-border); border-radius:28px; box-shadow:0 24px 80px rgba(31,27,22,.14); overflow:hidden; display:grid; grid-template-columns:1fr 1fr; min-height:680px; }
        .login-hero { position:relative; padding:28px; overflow:hidden; display:flex; flex-direction:column; }
        .login-hero-inner { background:var(--t-surface); border-radius:20px; border:1px solid var(--t-border); flex:1; position:relative; overflow:hidden; display:flex; flex-direction:column; justify-content:space-between; padding:26px 28px 30px; }
        .login-blob { position:absolute; inset:-20% -10% -20% 10%; background:radial-gradient(60% 50% at 70% 55%,#F4B997 0%,transparent 65%),radial-gradient(45% 40% at 40% 70%,#f7c9a8 0%,transparent 70%),radial-gradient(70% 60% at 80% 30%,#fad4b8 0%,transparent 70%); filter:blur(22px) saturate(1.05); animation:float-blob 18s ease-in-out infinite; pointer-events:none; }
        .login-grain { position:absolute; inset:0; background-image:radial-gradient(rgba(31,27,22,.06) 1px,transparent 1px); background-size:3px 3px; mix-blend-mode:multiply; opacity:.5; pointer-events:none; }
        .login-brand { display:inline-flex; align-items:center; gap:9px; position:relative; z-index:2; }
        .login-brand-mark { width:30px; height:30px; border-radius:9px; background:var(--t-text); color:var(--t-bg); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:15px; letter-spacing:-0.04em; font-family:${T.mono}; }
        .login-brand-name { font-size:17px; font-weight:800; letter-spacing:-0.04em; color:var(--t-text); }
        .login-brand-sub { font-size:11px; font-weight:500; color:var(--t-subtext); letter-spacing:.02em; }
        .login-foot { position:relative; z-index:2; }
        .login-eyebrow { display:inline-flex; align-items:center; gap:6px; font-size:11px; font-weight:600; color:var(--t-subtext); letter-spacing:.08em; text-transform:uppercase; margin-bottom:12px; }
        .login-eyebrow::before { content:""; width:6px; height:6px; border-radius:50%; background:var(--t-pill-peach-fg); }
        .login-headline { font-size:38px; line-height:1.06; font-weight:700; letter-spacing:-0.035em; color:var(--t-text); margin-bottom:18px; }
        .login-headline em { font-family:'Instrument Serif',Georgia,serif; font-style:italic; font-weight:400; }
        .login-pills { display:flex; flex-wrap:wrap; gap:6px; }
        .login-pill { display:inline-flex; align-items:center; gap:5px; padding:4px 10px 4px 8px; font-size:11px; font-weight:600; border-radius:999px; background:var(--t-surface); border:1px solid var(--t-border); color:var(--t-subtext); backdrop-filter:blur(6px); }
        .login-pill::before { content:""; width:5px; height:5px; border-radius:50%; background:currentColor; opacity:.6; }
        .login-pill.lilac { background:var(--t-pill-lilac-bg); color:var(--t-pill-lilac-fg); border-color:transparent; }
        .login-pill.peach { background:var(--t-pill-peach-bg); color:var(--t-pill-peach-fg); border-color:transparent; }
        .login-pill.mint  { background:var(--t-pill-mint-bg);  color:var(--t-pill-mint-fg);  border-color:transparent; }
        .login-pill.blue  { background:var(--t-pill-blue-bg);  color:var(--t-pill-blue-fg);  border-color:transparent; }
        .login-form-side { padding:48px 56px; display:flex; flex-direction:column; justify-content:center; background:var(--t-surface); min-height:680px; }
        .login-form-inner { width:100%; max-width:340px; margin:0 auto; }
        .login-form-body { min-height:520px; display:flex; flex-direction:column; }
        .login-tabs { align-self:flex-end; display:inline-flex; background:var(--t-bg); border:1px solid var(--t-border); border-radius:999px; padding:3px; margin-bottom:22px; font-size:12px; font-weight:600; }
        .login-tab { padding:6px 14px; border-radius:999px; color:var(--t-subtext); transition:all .18s ease; letter-spacing:-0.005em; background:none; border:none; cursor:pointer; font-family:${T.sans}; font-size:12px; font-weight:600; }
        .login-tab.active { background:var(--t-text); color:var(--t-surface); box-shadow:0 1px 4px rgba(31,27,22,.18); }
        .login-asterisk { display:inline-block; color:var(--t-pill-peach-fg); font-family:'Instrument Serif',Georgia,serif; font-size:26px; line-height:1; margin-bottom:8px; }
        .login-title { font-size:26px; font-weight:700; letter-spacing:-0.03em; color:var(--t-text); margin-bottom:5px; line-height:1.15; }
        .login-sub { font-size:12.5px; color:var(--t-subtext); line-height:1.5; margin-bottom:22px; }
        .lf { margin-bottom:12px; }
        .lf-label { display:block; font-size:11px; font-weight:700; color:var(--t-subtext); letter-spacing:.04em; text-transform:uppercase; margin-bottom:5px; }
        .lf-wrap { position:relative; display:flex; align-items:center; background:var(--t-surface); border:1.5px solid var(--t-border); border-radius:10px; transition:border-color .15s,box-shadow .15s; }
        .lf-wrap:focus-within { border-color:var(--t-text); box-shadow:0 0 0 3px var(--t-border-strong); }
        .lf-wrap.err { border-color:var(--t-pill-rose-fg); box-shadow:0 0 0 3px var(--t-pill-rose-bg); }
        .lf-wrap input { flex:1; padding:11px 13px; font-size:13.5px; background:transparent; border:none; color:var(--t-text); letter-spacing:-0.005em; font-family:${T.sans}; outline:none; }
        .lf-wrap input::placeholder { color:var(--t-muted); }
        .lf-affix { padding:0 10px; color:var(--t-muted); display:flex; align-items:center; }
        .lf-eye { width:28px; height:28px; display:flex; align-items:center; justify-content:center; color:var(--t-muted); border-radius:6px; transition:background .15s,color .15s; margin-right:4px; background:none; border:none; cursor:pointer; }
        .lf-eye:hover { background:var(--t-bg-soft); color:var(--t-text); }
        .lf-err { margin-top:8px; padding:8px 12px; background:var(--t-pill-rose-bg); color:var(--t-pill-rose-fg); border-radius:8px; font-size:12px; font-weight:500; display:flex; align-items:center; gap:7px; }
        .lf-strength { display:flex; gap:4px; margin-top:7px; }
        .lf-strength-seg { flex:1; height:3px; border-radius:2px; transition:background .25s; }
        .lf-strength-lbl { font-size:10.5px; font-weight:600; letter-spacing:.03em; margin-top:5px; text-transform:uppercase; font-family:${T.mono}; }
        .lf-remember { display:flex; justify-content:space-between; align-items:center; margin:12px 0 16px; }
        .lf-check { display:inline-flex; align-items:center; gap:7px; font-size:12px; color:var(--t-subtext); font-weight:500; cursor:pointer; }
        .lf-check input { display:none; }
        .lf-check-box { width:15px; height:15px; border:1.5px solid var(--t-border-strong); border-radius:4px; background:var(--t-surface); display:flex; align-items:center; justify-content:center; transition:all .15s; flex-shrink:0; }
        .lf-check input:checked + .lf-check-box { background:var(--t-text); border-color:var(--t-text); }
        .lf-check input:checked + .lf-check-box::after { content:""; width:7px; height:3.5px; border-left:1.5px solid var(--t-surface); border-bottom:1.5px solid var(--t-surface); transform:rotate(-45deg) translateY(-1px); }
        .lf-forgot { font-size:12px; color:var(--t-text); font-weight:600; text-decoration:none; background:none; border:none; cursor:pointer; font-family:${T.sans}; }
        .lf-forgot:hover { color:var(--t-pill-peach-fg); }
        .lf-submit { width:100%; padding:12px 18px; background:var(--t-text); color:var(--t-surface); border-radius:10px; font-size:13.5px; font-weight:600; letter-spacing:-0.005em; display:flex; align-items:center; justify-content:center; gap:7px; transition:transform .15s,box-shadow .15s; box-shadow:0 6px 18px rgba(31,27,22,.18); border:none; cursor:pointer; font-family:${T.sans}; }
        .lf-submit:hover:not(:disabled) { transform:translateY(-1px); box-shadow:0 10px 24px rgba(31,27,22,.24); }
        .lf-submit:disabled { opacity:.55; cursor:not-allowed; }
        .lf-divider { display:flex; align-items:center; gap:10px; margin:18px 0 12px; font-size:11px; color:var(--t-muted); font-weight:500; letter-spacing:.03em; }
        .lf-divider::before,.lf-divider::after { content:""; flex:1; height:1px; background:var(--t-border); }
        .lf-oauth { display:grid; grid-template-columns:1fr 1fr 1fr; gap:7px; }
        .lf-oauth-btn { padding:10px; background:var(--t-surface); border:1.5px solid var(--t-border); border-radius:10px; display:flex; align-items:center; justify-content:center; transition:all .15s; cursor:pointer; }
        .lf-oauth-btn:hover { border-color:var(--t-border-strong); background:var(--t-bg-soft); transform:translateY(-1px); }
        .lf-foot { text-align:center; margin-top:18px; font-size:12px; color:var(--t-subtext); }
        .lf-foot button { color:var(--t-pill-peach-fg); font-weight:700; background:none; border:none; cursor:pointer; font-family:${T.sans}; font-size:12px; }
        .lf-foot button:hover { text-decoration:underline; }
        .lf-toast { position:fixed; bottom:24px; right:24px; background:var(--t-text); color:var(--t-surface); padding:11px 16px; border-radius:10px; font-size:13px; font-weight:600; box-shadow:0 12px 40px rgba(31,27,22,.22); display:flex; align-items:center; gap:9px; animation:fadeUp .25s cubic-bezier(.16,1,.3,1) both; z-index:999; font-family:${T.sans}; }
        .lf-toast-dot { width:7px; height:7px; border-radius:50%; background:var(--t-mint); }
        .lf-spinner { width:13px; height:13px; border:2px solid rgba(255,255,255,.3); border-top-color:#fff; border-radius:50%; animation:spin .7s linear infinite; }
        @media(max-width:820px){ .login-card{grid-template-columns:1fr; min-height:0;} .login-hero{padding:18px;} .login-hero-inner{min-height:220px;} .login-headline{font-size:28px;} .login-form-side{padding:32px 24px; min-height:0;} }
        @media(max-width:520px){ .login-form-side{padding:24px 18px;} .login-headline{font-size:24px;} }
      `}</style>

      <div className="login-page">
        <div className="login-card fade-up">

          {/* Hero */}
          <div className="login-hero">
            <div className="login-hero-inner">
              <div className="login-blob"/>
              <div className="login-grain"/>
              <div className="login-brand">
                <div className="login-brand-mark">B</div>
                <div>
                  <div className="login-brand-name">Bench</div>
                  <div className="login-brand-sub">Freelance OS</div>
                </div>
              </div>
              <div className="login-foot">
                <div className="login-eyebrow">Your workspace, finally</div>
                <h1 className="login-headline">Proposals, time, invoices —<br/><em>in one quiet place.</em></h1>
                <div className="login-pills">
                  <span className="login-pill lilac">Proposals</span>
                  <span className="login-pill peach">Focus Timer</span>
                  <span className="login-pill mint">Invoicing</span>
                  <span className="login-pill blue">Contracts</span>
                  <span className="login-pill">+ 4 more</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="login-form-side">
            <div className="login-form-inner">
              <div className="login-tabs">
                <button className={`login-tab${!isSignup?" active":""}`} onClick={()=>{ setMode("signin"); setError(""); }}>Sign in</button>
                <button className={`login-tab${isSignup?" active":""}`} onClick={()=>{ setMode("signup"); setError(""); }}>Create account</button>
              </div>

              <div className="login-form-body">
                <div>
                  <div className="login-asterisk">✻</div>
                  <h2 className="login-title">{isSignup ? "Create your Bench." : "Welcome back."}</h2>
                  <p className="login-sub">{isSignup ? "One Bench for proposals, time, invoices, and more." : "Sign in to pick up where you left off."}</p>
                </div>

                <form onSubmit={submit} noValidate>
                  {isSignup && (
                    <div className="lf">
                      <label className="lf-label">Your name</label>
                      <div className="lf-wrap">
                        <input type="text" placeholder="Alex Rivera" value={name} onChange={e=>setName(e.target.value)} autoComplete="name"/>
                      </div>
                    </div>
                  )}
                  <div className="lf">
                    <label className="lf-label">Email</label>
                    <div className={`lf-wrap${error.toLowerCase().includes("email")?" err":""}`}>
                      <input ref={inputRef} type="email" placeholder="you@studio.co" value={username} onChange={e=>{ setUsername(e.target.value); setError(""); }} autoComplete="email"/>
                    </div>
                  </div>
                  <div className="lf">
                    <label className="lf-label">{isSignup ? "Create password" : "Password"}</label>
                    <div className={`lf-wrap${error.toLowerCase().includes("password")?" err":""}`}>
                      <input type={showPw?"text":"password"} placeholder={isSignup?"8+ characters":"Your password"} value={password} onChange={e=>{ setPassword(e.target.value); setError(""); }} autoComplete={isSignup?"new-password":"current-password"}/>
                      <button type="button" className="lf-eye" onClick={()=>setShowPw(s=>!s)}>
                        {showPw
                          ? <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 0 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" y1="2" x2="22" y2="22"/></svg>
                          : <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                        }
                      </button>
                    </div>
                    {isSignup && password && (
                      <>
                        <div className="lf-strength">
                          {[1,2,3,4].map(i=><div key={i} className="lf-strength-seg" style={{ background: i<=strength.score ? strength.color : "var(--t-border)" }}/>)}
                        </div>
                        <div className="lf-strength-lbl" style={{ color: strength.color }}>{strength.label || "—"}</div>
                      </>
                    )}
                  </div>

                  {!isSignup && (
                    <div className="lf-remember">
                      <label className="lf-check">
                        <input type="checkbox" checked={remember} onChange={e=>setRemember(e.target.checked)}/>
                        <span className="lf-check-box"/>
                        Stay signed in
                      </label>
                      <button type="button" className="lf-forgot">Forgot password?</button>
                    </div>
                  )}

                  {error && (
                    <div className="lf-err">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      {error}
                    </div>
                  )}

                  <button type="submit" className="lf-submit" disabled={loading} style={{ marginTop: isSignup ? 16 : 0 }}>
                    {loading
                      ? <><span className="lf-spinner"/> {isSignup ? "Creating Bench…" : "Signing in…"}</>
                      : <>{isSignup ? "Create Bench" : "Sign in"} <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></>
                    }
                  </button>
                </form>

                <div className="lf-divider">or continue with</div>
                <div className="lf-oauth">
                  <button className="lf-oauth-btn" onClick={()=>showToast("OAuth coming soon")}>
                    <svg width="15" height="15" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"/><path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.83Z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.07l3.66 2.83C6.71 7.31 9.14 5.38 12 5.38Z"/></svg>
                  </button>
                  <button className="lf-oauth-btn" onClick={()=>showToast("OAuth coming soon")}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.6-4.04-1.6-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.13-.31-.54-1.54.12-3.21 0 0 1.01-.32 3.31 1.23a11.5 11.5 0 0 1 6.02 0c2.3-1.55 3.31-1.23 3.31-1.23.66 1.67.25 2.9.12 3.21.77.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"/></svg>
                  </button>
                  <button className="lf-oauth-btn" onClick={()=>showToast("OAuth coming soon")}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16.37 12.49c0-2.5 2.05-3.7 2.14-3.76-1.17-1.71-2.99-1.94-3.63-1.97-1.55-.16-3.02.91-3.81.91-.79 0-1.99-.89-3.27-.86-1.69.02-3.24.98-4.11 2.49-1.75 3.04-.45 7.54 1.26 10.01.84 1.21 1.84 2.57 3.15 2.52 1.27-.05 1.75-.82 3.28-.82 1.53 0 1.96.82 3.3.79 1.36-.02 2.22-1.23 3.06-2.45.96-1.41 1.36-2.78 1.38-2.85-.03-.01-2.65-1.02-2.68-4.01ZM13.94 4.74c.7-.85 1.17-2.04 1.04-3.22-1.01.04-2.23.67-2.95 1.52-.65.75-1.22 1.96-1.07 3.12 1.13.09 2.28-.57 2.98-1.42Z"/></svg>
                  </button>
                </div>

                <div className="lf-foot">
                  {isSignup
                    ? <>Already have a Bench? <button onClick={()=>{ setMode("signin"); setError(""); }}>Sign in</button></>
                    : <>New to Bench? <button onClick={()=>{ setMode("signup"); setError(""); }}>Create a Bench</button></>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {toast && (
        <div className="lf-toast">
          <span className="lf-toast-dot"/> {toast}
        </div>
      )}
    </>
  );
};

// ═══════ SETTINGS MODAL ═══════
// ═══════ PRODUCT TOUR ═══════
const TOUR_STEPS = [
  { title: "Welcome to Bench 👋", desc: "Your complete freelance OS — proposals, invoicing, contracts, time tracking, and more. Let's take a 60-second tour.", target: null, pos: "center", emoji: "🚀" },
  { title: "Sidebar Navigation", desc: "Navigate between all 8 modules and your client list from here. Everything is one click away.", target: ".sidebar-fixed", pos: "right", emoji: "🗂" },
  { title: "8 Powerful Modules", desc: "Proposals · Focus Timer · Invoicing · Contracts · Client Comms · Rate Calc · Testimonials · Prioritizer — each built around real freelance workflows.", target: ".sidebar-fixed nav", pos: "right", emoji: "⚡" },
  { title: "Dark Mode & Arabic", desc: "Switch to dark mode for late-night sessions, or toggle to full Arabic RTL support — both buttons sit at the bottom of the sidebar.", target: ".sidebar-controls", pos: "right", emoji: "🌙" },
  { title: "Notification Bell", desc: "Get reminded about unpaid invoices, inactive clients, and follow-up reminders — all surfaced here automatically.", target: ".bell-fixed", pos: "left-bottom", emoji: "🔔" },
  { title: "Client Tabs", desc: "Each client opens in their own tab — close without losing data, reopen from the sidebar. Just like a browser.", target: ".tabbar-container", pos: "bottom", emoji: "📂" },
  { title: "You're all set! 🎉", desc: "Add your first client and start working. Everything auto-saves. Click the ? button in Settings anytime to replay this tour.", target: null, pos: "center", emoji: "✅" },
];

const ConfettiPiece = ({ color, left, delay, duration, size, isCircle }) => (
  <div style={{
    position: "absolute", top: -20, left: `${left}%`,
    width: size, height: size,
    background: color, borderRadius: isCircle ? "50%" : 3,
    animation: `confettiFall ${duration}s ${delay}s ease-in forwards, confettiSway ${duration * 0.6}s ${delay}s ease-in-out infinite`,
    opacity: 0,
  }} />
);

const CONFETTI_COLORS = ["#E8DCFA","#FBD6BE","#FBE5A6","#D4E2FB","#D4EBD8","#FBD4DA","#C4A8FF","#FF8060","#FFB840","#60A8FF","#50D080","#FF6680"];

const Confetti = ({ onDone }) => {
  const [fading, setFading] = useState(false);
  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 3000);
    const doneTimer = setTimeout(onDone, 4200);
    return () => { clearTimeout(fadeTimer); clearTimeout(doneTimer); };
  }, [onDone]);
  const pieces = Array.from({ length: 100 }, (_, i) => ({
    id: i, color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    left: Math.random() * 100, delay: Math.random() * 2,
    duration: 2.5 + Math.random() * 1.5, size: 7 + Math.random() * 8,
    isCircle: Math.random() > 0.5,
  }));
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, pointerEvents: "none", overflow: "hidden", opacity: fading ? 0 : 1, transition: "opacity 1.2s ease" }}>
      {pieces.map(p => <ConfettiPiece key={p.id} {...p} />)}
    </div>
  );
};

const TourOverlay = ({ step, onNext, onPrev, onClose }) => {
  const [rect, setRect] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [finishing, setFinishing] = useState(false);
  const [cardPos, setCardPos] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);
  const s = TOUR_STEPS[step];
  const isLast = step === TOUR_STEPS.length - 1;
  const isFirst = step === 0;

  const PAD = 12;
  const TW = 320; const TH = 280;

  const calcPos = (r) => {
    const W = window.innerWidth; const H = window.innerHeight;
    const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
    if (!r) return { top: (H - TH) / 2, left: (W - TW) / 2 }; // centered
    const { top, left, width, height } = r;
    if (s.pos === "right" || s.pos === "right-bottom") {
      const t = clamp(s.pos === "right-bottom" ? H - TH - 40 : top + height / 2 - TH / 2, 20, H - TH - 20);
      return { top: t, left: clamp(left + width + PAD + 14, 20, W - TW - 20) };
    }
    if (s.pos === "left-bottom") {
      return { top: clamp(top + height + 10, 20, H - TH - 20), left: clamp(left - TW - 14, 20, W - TW - 20) };
    }
    if (s.pos === "bottom") {
      return { top: clamp(top + height + PAD + 14, 20, H - TH - 20), left: clamp(left + width / 2 - TW / 2, 20, W - TW - 20) };
    }
    return { top: (H - TH) / 2, left: (W - TW) / 2 };
  };

  useEffect(() => {
    if (!s?.target) { setRect(null); const p = calcPos(null); setCardPos(p); return; }
    const measure = () => {
      const el = document.querySelector(s.target);
      if (el) {
        const r = el.getBoundingClientRect();
        const rObj = { top: r.top, left: r.left, width: r.width, height: r.height };
        setRect(rObj);
        setCardPos(calcPos(rObj));
      } else { setRect(null); setCardPos(calcPos(null)); }
    };
    measure();
    const t = setTimeout(measure, 80);
    return () => clearTimeout(t);
  }, [step, s?.target]);

  useEffect(() => { setTimeout(() => setMounted(true), 50); }, []);

  if (!s) return null;

  const handleFinish = () => { setFinishing(true); setTimeout(() => setShowConfetti(true), 400); };

  const cardStyle = {
    position: "fixed",
    top: cardPos.top,
    left: cardPos.left,
    zIndex: 9001,
    width: TW,
    maxWidth: "calc(100vw - 32px)",
    background: "var(--t-surface)",
    borderRadius: 18,
    border: "1px solid var(--t-border)",
    boxShadow: "0 24px 64px rgba(0,0,0,0.45)",
    padding: 26,
    fontFamily: "var(--t-sans)",
    opacity: finishing ? 0 : 1,
    // Smooth animation between positions
    transition: mounted
      ? "top 0.45s cubic-bezier(0.16,1,0.3,1), left 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease"
      : "none",
  };

  return (
    <>
      {!showConfetti && (
        <>
          {/* Overlay — no blur so spotlight content stays sharp */}
          <div style={{ position:"fixed", inset:0, zIndex:8999, background:"rgba(0,0,0,0.7)", opacity:finishing?0:1, transition:"opacity 0.35s ease" }} onClick={finishing?undefined:onClose} />

          {/* Spotlight — creates the visible cutout, NO blur */}
          {rect && (
            <div style={{ position:"fixed", zIndex:9000, pointerEvents:"none", top:rect.top-PAD, left:rect.left-PAD, width:rect.width+PAD*2, height:rect.height+PAD*2, borderRadius:16, boxShadow:"0 0 0 9999px rgba(0,0,0,0.7)", border:"2px solid rgba(255,255,255,0.35)", opacity:finishing?0:1, transition:"opacity 0.35s ease, top 0.45s cubic-bezier(0.16,1,0.3,1), left 0.45s cubic-bezier(0.16,1,0.3,1), width 0.45s cubic-bezier(0.16,1,0.3,1), height 0.45s cubic-bezier(0.16,1,0.3,1)" }} />
          )}

          {/* Card — always fixed positioned, smoothly moves between steps */}
          <div onClick={e=>e.stopPropagation()} style={cardStyle}>
            <div style={{ display:"flex", gap:5, marginBottom:18 }}>
              {TOUR_STEPS.map((_,i)=>(
                <div key={i} style={{ height:4, flex:1, borderRadius:999, background:i<=step?"var(--t-text)":"var(--t-border)", transition:"background .3s ease" }} />
              ))}
            </div>
            <div style={{ fontSize:24, marginBottom:10 }}>{s.emoji}</div>
            <div style={{ fontSize:17, fontWeight:700, color:"var(--t-text)", letterSpacing:"-0.02em", marginBottom:8 }}>{s.title}</div>
            <div style={{ fontSize:13.5, color:"var(--t-subtext)", lineHeight:1.65, marginBottom:22 }}>{s.desc}</div>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <button onClick={onClose} style={{ fontSize:12.5, color:"var(--t-muted)", padding:"6px 0", background:"none", border:"none", cursor:"pointer" }}>{isLast?"":"Skip tour"}</button>
              <div style={{ display:"flex", gap:8 }}>
                {!isFirst&&<button onClick={onPrev} style={{ padding:"8px 16px", borderRadius:999, background:"var(--t-bg-soft)", border:"1px solid var(--t-border)", fontSize:13, fontWeight:600, color:"var(--t-subtext)", cursor:"pointer" }}>← Back</button>}
                <button onClick={isLast?handleFinish:onNext} style={{ padding:"8px 22px", borderRadius:999, background:"var(--t-text)", color:"var(--t-btn-text)", fontSize:13, fontWeight:700, border:"none", cursor:"pointer" }}>
                  {isLast?"🎉 Get started":"Next →"}
                </button>
              </div>
            </div>
            <div style={{ fontSize:11, color:"var(--t-muted)", textAlign:"center", marginTop:14 }}>{step+1} / {TOUR_STEPS.length}</div>
          </div>
        </>
      )}
      {showConfetti && <Confetti onDone={onClose} />}
    </>
  );
};

const SettingsModal = ({ profile, onSave, onClose, onExport, onImport, onStartTour, currentTheme, onSetTheme }) => {
  const [form, setForm] = useState({ ...profile });
  const logoInputRef = useRef(null);
  useEffect(()=>{ const h=e=>{ if(e.key==="Escape") onClose(); }; window.addEventListener("keydown",h); return ()=>window.removeEventListener("keydown",h); },[onClose]);
  const handleLogoUpload = e=>{ const file=e.target.files?.[0]; if(!file) return; const reader=new FileReader(); reader.onload=ev=>setForm(f=>({...f,logo:ev.target.result})); reader.readAsDataURL(file); };
  const handleSignOut = async ()=>{ await supabase.auth.signOut(); endSession(); window.location.reload(); };
  return (
    <div className="new-client-overlay" onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} className="fade-up" style={{ background:T.surface, borderRadius:T.radiusXl, width:520, maxWidth:"92vw", border:`1px solid ${T.border}`, boxShadow:T.shadowLg, overflow:"hidden" }}>

        {/* Header */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"22px 24px 18px", borderBottom:`1px solid ${T.border}` }}>
          <div style={{ fontSize:17, fontWeight:700, letterSpacing:"-0.02em", color:T.text }}>Settings</div>
          <button onClick={onClose} style={{ width:28, height:28, borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", color:T.muted, background:T.bgSoft }} className="nav-item">×</button>
        </div>

        <div style={{ padding:"20px 24px", display:"flex", flexDirection:"column", gap:20 }}>

          {/* Profile */}
          <div>
            <div style={{ fontSize:11, fontWeight:700, color:T.muted, letterSpacing:"0.07em", textTransform:"uppercase", marginBottom:12 }}>Profile</div>
            <div style={{ display:"flex", gap:14, alignItems:"flex-start" }}>
              {/* Logo upload */}
              <button onClick={()=>logoInputRef.current?.click()} style={{ width:56, height:56, borderRadius:12, border:`1.5px dashed ${T.borderStrong}`, background:T.bgSoft, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, overflow:"hidden", cursor:"pointer", transition:"border-color .15s" }} className="nav-item">
                {form.logo?<img src={form.logo} alt="logo" style={{ width:"100%", height:"100%", objectFit:"contain" }}/>:<ImageIcon size={20} color={T.muted}/>}
              </button>
              <input ref={logoInputRef} type="file" accept="image/*" style={{ display:"none" }} onChange={handleLogoUpload}/>
              <div style={{ flex:1, display:"flex", flexDirection:"column", gap:8 }}>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
                  <TextInput value={form.name||""} onChange={e=>setForm(f=>({...f,name:e.target.value}))} placeholder="Your name" />
                  <TextInput value={form.company||""} onChange={e=>setForm(f=>({...f,company:e.target.value}))} placeholder="Company" />
                </div>
                <TextInput value={form.email||""} onChange={e=>setForm(f=>({...f,email:e.target.value}))} placeholder="Email address" />
              </div>
            </div>
          </div>

          {/* Theme */}
          <div>
            <div style={{ fontSize:11, fontWeight:700, color:T.muted, letterSpacing:"0.07em", textTransform:"uppercase", marginBottom:12 }}>Theme</div>
            <div style={{ display:"flex", gap:8 }}>
              {[
                { key:"light", label:"Warm",  sub:"Cream & pastel",  preview:["#F3ECDC","#FFFAF0","#1F1B16"] },
                { key:"grey",  label:"Clean", sub:"White & grey",    preview:["#F4F4F5","#FFFFFF","#0A0A0B"] },
              ].map(t2=>{
                const active = currentTheme===t2.key;
                return (
                  <button key={t2.key} onClick={()=>onSetTheme(t2.key)} style={{ flex:1, padding:"12px", borderRadius:T.radius, border:`1.5px solid ${active?T.text:T.border}`, background:active?T.bgSoft:T.surface, cursor:"pointer", textAlign:"left", transition:"all .15s" }} className="nav-item">
                    <div style={{ display:"flex", gap:4, marginBottom:8 }}>
                      {t2.preview.map((c,i)=><div key={i} style={{ width:16, height:16, borderRadius:4, background:c, border:`1px solid ${T.border}` }}/>)}
                    </div>
                    <div style={{ fontSize:13, fontWeight:700, color:T.text }}>{t2.label}</div>
                    <div style={{ fontSize:11, color:T.muted, marginTop:2 }}>{t2.sub}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Data */}
          <div>
            <div style={{ fontSize:11, fontWeight:700, color:T.muted, letterSpacing:"0.07em", textTransform:"uppercase", marginBottom:10 }}>Data</div>
            <div style={{ display:"flex", gap:8 }}>
              <button onClick={onExport} style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", gap:6, padding:"9px", borderRadius:T.radius, border:`1px solid ${T.border}`, background:T.surface, fontSize:13, fontWeight:600, color:T.subtext, cursor:"pointer" }} className="nav-item"><Download size={13}/> Export</button>
              <label style={{ flex:1 }}>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:6, padding:"9px", borderRadius:T.radius, border:`1px solid ${T.border}`, background:T.surface, fontSize:13, fontWeight:600, color:T.subtext, cursor:"pointer" }}><Upload size={13}/> Import</div>
                <input type="file" accept=".json" style={{ display:"none" }} onChange={onImport}/>
              </label>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 24px", borderTop:`1px solid ${T.border}`, background:T.bgSoft }}>
          <div style={{ display:"flex", gap:6 }}>
            <button onClick={handleSignOut} style={{ fontSize:12.5, color:T.pillRoseFg, fontWeight:600, padding:"7px 14px", borderRadius:999, background:T.pillRoseBg, border:"none", cursor:"pointer" }} className="nav-item">Sign out</button>
            <button onClick={()=>{ onClose(); onStartTour?.(); }} style={{ fontSize:12.5, color:T.subtext, fontWeight:600, padding:"7px 12px", borderRadius:999, background:"transparent", border:`1px solid ${T.border}`, cursor:"pointer", display:"flex", alignItems:"center", gap:5 }} className="nav-item">? Tour</button>
          </div>
          <div style={{ display:"flex", gap:8 }}>
            <GhostBtn onClick={onClose}>{t("cancel")}</GhostBtn>
            <PrimaryBtn onClick={()=>{ onSave(form); onClose(); }}>Save</PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

// ═══════ SIDEBAR ═══════
const NAV = [
  { key:"proposals",    icon:<FileText size={16}/>,   get label(){ return t("proposals"); } },
  { key:"timer",        icon:<Timer size={16}/>,      get label(){ return t("timer"); } },
  { key:"invoicing",    icon:<Receipt size={16}/>,    get label(){ return t("invoicing"); } },
  { key:"contracts",    icon:<ScrollText size={16}/>, get label(){ return t("contracts"); } },
  { key:"comms",        icon:<Mail size={16}/>,       get label(){ return t("comms"); } },
  { key:"rate",         icon:<Calculator size={16}/>, get label(){ return t("rate"); } },
  { key:"testimonials", icon:<Star size={16}/>,       get label(){ return t("testimonials"); } },
  { key:"prioritizer",  icon:<Target size={16}/>,     get label(){ return t("prioritizer"); } },
];

const Sidebar = ({ view, activeModule, onGoDashboard, onSelectModule, clients, openClientIds, activeClientId, onSelectClient, onDeleteClient, onNewClient, onOpenSettings, profile, isDark, onToggleDark, isRTL, onToggleRTL, mobileMenuOpen, onCloseMobile }) => {
  const openSet = new Set(openClientIds||[]);
  const avatarInitials = profile?.name ? profile.name.split(" ").map(n=>n[0]).join("").slice(0,2).toUpperCase() : "ME";

  return (
    <aside style={{ width:244, background:T.sidebar, borderRight:`1px solid ${T.border}`, position:"fixed", top:0, left:0, bottom:0, display:"flex", flexDirection:"column", padding:"0", zIndex:10, overflowY:"auto" }} className={`scroll-area sidebar-fixed${mobileMenuOpen?" drawer-open":""}`}>

      {/* ── Logo ── */}
      <div style={{ padding:"20px 20px 0" }}>
        <div style={{ fontSize:18, fontWeight:800, letterSpacing:"-0.04em", color:T.text }}>{t("appName")}</div>
        <div style={{ fontSize:9.5, color:T.muted, letterSpacing:"0.1em", textTransform:"uppercase", fontWeight:700, marginTop:1 }}>{t("appSub")}</div>
      </div>

      {/* ── Divider ── */}
      <div style={{ borderTop:`1px solid ${T.border}`, margin:"14px 16px 10px" }}/>

      {/* ── Dashboard ── */}
      <div style={{ padding:"0 8px" }}>
        <button className={`nav-item ${view==="dashboard"?"active":""}`} onClick={()=>{ onGoDashboard(); onCloseMobile?.(); }} style={{ display:"flex", alignItems:"center", gap:10, padding:"9px 12px", borderRadius:10, width:"100%", fontSize:13, fontWeight:view==="dashboard"?600:500, color:view==="dashboard"?T.text:T.subtext, background:view==="dashboard"?T.bgSoft:"transparent", textAlign:"left", transition:"background .15s, color .15s", letterSpacing:"-0.005em", marginBottom:2 }}>
          <span style={{ width:18, display:"flex", alignItems:"center", justifyContent:"center", opacity:view==="dashboard"?1:0.7 }}><LayoutDashboard size={15}/></span>
          <span style={{ flex:1 }}>{t("dashboard")}</span>
        </button>
      </div>

      {/* ── Workspace ── */}
      <div style={{ padding:"10px 18px 6px" }}>
        <div style={{ fontSize:10.5, fontWeight:700, color:T.muted, letterSpacing:"0.07em", textTransform:"uppercase" }}>{t("modules")}</div>
      </div>
      <nav style={{ display:"flex", flexDirection:"column", gap:1, padding:"0 8px" }}>
        {NAV.map(item=>{ const active=view==="client"&&activeModule===item.key; return (
          <button key={item.key} className={`nav-item ${active?"active":""}`} onClick={()=>{ onSelectModule(item.key); onCloseMobile?.(); }} style={{ display:"flex", alignItems:"center", gap:10, padding:"9px 12px", borderRadius:10, fontSize:13, fontWeight:active?600:500, color:active?T.text:T.subtext, background:active?T.bgSoft:"transparent", textAlign:"left", transition:"background .15s, color .15s", letterSpacing:"-0.005em" }}>
            <span style={{ width:18, display:"flex", alignItems:"center", justifyContent:"center", opacity:active?1:0.65 }}>{item.icon}</span>
            <span style={{ flex:1 }}>{item.label}</span>
            {active && <span style={{ width:5, height:5, borderRadius:"50%", background:T.text, flexShrink:0 }}/>}
          </button>
        ); })}
      </nav>

      {/* ── Clients ── */}
      <div style={{ borderTop:`1px solid ${T.border}`, margin:"12px 16px 10px" }}/>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 18px 8px" }}>
        <div style={{ fontSize:10.5, fontWeight:700, color:T.muted, letterSpacing:"0.07em", textTransform:"uppercase" }}>{t("clients")}</div>
        <button onClick={onNewClient} style={{ width:20, height:20, borderRadius:6, display:"flex", alignItems:"center", justifyContent:"center", color:T.subtext, background:T.bgSoft, border:`1px solid ${T.border}` }} className="nav-item"><Plus size={11}/></button>
      </div>
      {clients.length===0 ? (
        <div style={{ padding:"14px", margin:"0 8px", textAlign:"center", color:T.muted, fontSize:12, border:`1.5px dashed ${T.border}`, borderRadius:T.radius, background:T.bgSoft, lineHeight:1.5 }}>No clients yet.<br/>Click + to add one.</div>
      ) : (
        <div style={{ display:"flex", flexDirection:"column", gap:1, padding:"0 8px" }}>
          {clients.map(c=>{ const active=view==="client"&&activeClientId===c.id; const isOpen=openSet.has(c.id); const timerRunning=c.modules.timer.running; const st=getStatus(c); return (
            <div key={c.id} className={`nav-item sidebar-client-row ${active?"active":""}`} style={{ display:"flex", alignItems:"center", gap:8, padding:"7px 8px 7px 10px", borderRadius:10, background:active?T.bgSoft:"transparent", transition:"background .15s", position:"relative" }}>
              <button onClick={()=>{ onSelectClient(c.id); onCloseMobile?.(); }} style={{ display:"flex", alignItems:"center", gap:8, flex:1, minWidth:0, textAlign:"left", background:"transparent", padding:0 }}>
                <div className="letter-avatar" style={{ width:24, height:24, borderRadius:"50%", background:c.hue.bg, color:c.hue.fg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:10, fontWeight:700, flexShrink:0 }}>{c.name.split(" ").map(n=>n[0]).join("").slice(0,2).toUpperCase()}</div>
                <div style={{ minWidth:0, flex:1 }}>
                  <div style={{ fontSize:12.5, fontWeight:active?600:500, color:isOpen?T.text:T.subtext, letterSpacing:"-0.005em", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{c.name}</div>
                  <div style={{ fontSize:9.5, color:st.fg, fontWeight:600, marginTop:1 }}>{st.label}</div>
                </div>
              </button>
              {timerRunning&&<span className="pulse" style={{ width:5, height:5, borderRadius:"50%", background:T.green, flexShrink:0 }}/>}
              <button className="sidebar-delete-btn" onClick={e=>{ e.stopPropagation(); onDeleteClient(c); }} style={{ width:18, height:18, borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center", color:T.muted, flexShrink:0 }}><XIcon size={10}/></button>
            </div>
          ); })}
        </div>
      )}

      {/* ── Bottom controls ── */}
      <div style={{ flex:1 }}/>

      {/* ── Profile ── */}
      <div style={{ margin:"0 10px 8px", padding:"12px" }}>
        <div style={{ minWidth:0 }}>
          <div style={{ fontSize:13, fontWeight:700, color:T.text, letterSpacing:"-0.01em", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{profile?.name || "Your Name"}</div>
          {profile?.company && <div style={{ fontSize:11, color:T.subtext, marginTop:1, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", fontWeight:500 }}>{profile.company}</div>}
          <div style={{ fontSize:11, color:T.muted, marginTop:1, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{profile?.email || "Set up profile →"}</div>
        </div>
      </div>

      <div style={{ borderTop:`1px solid ${T.border}`, margin:"0 16px 0" }}/>
      <div className="sidebar-controls" style={{ padding:"10px 10px 16px", display:"flex", alignItems:"center", gap:4 }}>
        <button onClick={onOpenSettings} className="nav-item" style={{ display:"flex", alignItems:"center", gap:8, padding:"8px 10px", borderRadius:10, flex:1, fontSize:12.5, fontWeight:500, color:T.subtext, textAlign:"left" }}>
          <Settings size={14} style={{ flexShrink:0 }}/>
          <span style={{ flex:1 }}>{t("settings")}</span>
        </button>
        <button onClick={onToggleDark} title={isDark?"Light mode":"Dark mode"} className="nav-item" style={{ width:32, height:32, borderRadius:9, display:"flex", alignItems:"center", justifyContent:"center", color:T.subtext, flexShrink:0 }}>{isDark?<Sun size={14}/>:<Moon size={14}/>}</button>
        <button onClick={onToggleRTL} title={isRTL?"Switch to LTR":"Switch to Arabic"} className="nav-item" style={{ width:32, height:32, borderRadius:9, display:"flex", alignItems:"center", justifyContent:"center", color:isRTL?T.text:T.subtext, flexShrink:0, fontWeight:isRTL?700:500, fontSize:11 }}>{isRTL?"EN":"ع"}</button>
      </div>
    </aside>
  );
};

// ═══════ TAB BAR ═══════
const TabBar = ({ view, clients, activeClientId, onSelectClient, onCloseClient, onNewClient, onRenameClient, onGoDashboard, onReorder, closingIds, notifyIds }) => {
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState("");
  const [dragId, setDragId] = useState(null);
  const [dragOver, setDragOver] = useState(null);
  const [overflowOpen, setOverflowOpen] = useState(false);
  const [overflowPos, setOverflowPos] = useState({ top:0, left:0 });
  const [maxVisible, setMaxVisible] = useState(8);
  const containerRef = useRef(null);
  const overflowBtnRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(()=>{
    if(!containerRef.current) return;
    const TAB_W=148; const FIXED=200;
    const measure=()=>{ const w=containerRef.current?.offsetWidth||800; setMaxVisible(Math.max(1,Math.floor((w-FIXED)/TAB_W))); };
    measure();
    const ro=new ResizeObserver(measure);
    ro.observe(containerRef.current);
    return ()=>ro.disconnect();
  },[]);

  useEffect(()=>{ if(editingId&&inputRef.current){ inputRef.current.focus(); inputRef.current.select(); } },[editingId]);

  const startRename = c=>{ setEditingId(c.id); setDraft(c.name); };
  const commitRename = ()=>{ if(editingId){ const nm=draft.trim()||"Untitled Client"; onRenameClient(editingId,nm); } setEditingId(null); };
  const onDragStart=(e,c)=>{ setDragId(c.id); e.dataTransfer.effectAllowed="move"; try{ e.dataTransfer.setData("text/plain",c.id); }catch{} };
  const onDragOver=(e,c)=>{ if(!dragId||dragId===c.id) return; e.preventDefault(); const rect=e.currentTarget.getBoundingClientRect(); const mid=rect.left+rect.width/2; setDragOver({ id:c.id, side:e.clientX<mid?"left":"right" }); };
  const onDragLeave=(e,c)=>{ if(dragOver?.id===c.id) setDragOver(null); };
  const onDrop=(e,c)=>{ e.preventDefault(); if(!dragId||dragId===c.id){ setDragId(null); setDragOver(null); return; } const side=dragOver?.side==="right"?"right":"left"; onReorder(dragId,c.id,side); setDragId(null); setDragOver(null); };
  const onDragEnd=()=>{ setDragId(null); setDragOver(null); };

  const activeInOverflow = clients.slice(maxVisible).some(c=>c.id===activeClientId);
  const visibleClients = clients.slice(0,maxVisible);
  const overflowClients = clients.slice(maxVisible);

  return (
    <div ref={containerRef} className="tabbar-container" style={{ display:"flex", alignItems:"flex-end", gap:2, padding:"14px 20px 0", background:T.bg, borderBottom:`1px solid ${T.border}`, minHeight:52, overflow:"hidden", position:"relative" }}>
      <button onClick={onGoDashboard} title="Dashboard (⌘D)" style={{ display:"flex", alignItems:"center", gap:6, padding:"10px 12px 11px", background:view==="dashboard"?T.surface:"transparent", borderTop:`1px solid ${view==="dashboard"?T.border:"transparent"}`, borderLeft:`1px solid ${view==="dashboard"?T.border:"transparent"}`, borderRight:`1px solid ${view==="dashboard"?T.border:"transparent"}`, borderBottom:view==="dashboard"?`1px solid ${T.surface}`:"1px solid transparent", marginBottom:-1, borderTopLeftRadius:10, borderTopRightRadius:10, cursor:"pointer", fontSize:13, fontWeight:view==="dashboard"?600:500, color:view==="dashboard"?T.text:T.subtext, flexShrink:0, letterSpacing:"-0.005em", transition:"background .15s ease" }} className="tab">
        <LayoutDashboard size={14}/><span>{t("dashboard")}</span>
      </button>
      <div style={{ width:8 }}/>
      {visibleClients.map(c=>{
        const active=view==="client"&&activeClientId===c.id;
        const isEditing=editingId===c.id;
        const isDragging=dragId===c.id;
        const isClosing=closingIds.has(c.id);
        const isNotifying=notifyIds.has(c.id);
        const dragClass=dragOver?.id===c.id?(dragOver.side==="left"?"drag-over-left":"drag-over-right"):"";
        return (
          <div key={c.id} className={`tab tab-slide ${active?"active":""} ${isDragging?"dragging":""} ${isClosing?"tab-closing":""} ${isNotifying?"notify-pulse":""} ${dragClass}`} draggable={!isEditing&&!isClosing} onDragStart={e=>onDragStart(e,c)} onDragOver={e=>onDragOver(e,c)} onDragLeave={e=>onDragLeave(e,c)} onDrop={e=>onDrop(e,c)} onDragEnd={onDragEnd} onClick={()=>!isEditing&&!isClosing&&onSelectClient(c.id)} onDoubleClick={()=>startRename(c)} style={{ display:"flex", alignItems:"center", gap:8, padding:"10px 12px 11px", background:active?T.surface:"transparent", borderTop:`1px solid ${active?T.border:"transparent"}`, borderLeft:`1px solid ${active?T.border:"transparent"}`, borderRight:`1px solid ${active?T.border:"transparent"}`, borderBottom:active?`1px solid ${T.surface}`:"1px solid transparent", marginBottom:-1, borderTopLeftRadius:10, borderTopRightRadius:10, cursor:isEditing?"text":(isDragging?"grabbing":"pointer"), fontSize:13, fontWeight:active?600:500, color:active?T.text:T.subtext, maxWidth:200, minWidth:100, position:"relative", letterSpacing:"-0.005em" }}>
            <div className="letter-avatar" style={{ width:18, height:18, borderRadius:"50%", background:c.hue.bg, color:c.hue.fg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:9, fontWeight:700, flexShrink:0 }}>{c.name.split(" ").map(n=>n[0]).join("").slice(0,2).toUpperCase()}</div>
            {isEditing?<input ref={inputRef} value={draft} onChange={e=>setDraft(e.target.value)} onBlur={commitRename} onKeyDown={e=>{ if(e.key==="Enter") commitRename(); else if(e.key==="Escape") setEditingId(null); e.stopPropagation(); }} onClick={e=>e.stopPropagation()} style={{ border:"none", background:"transparent", outline:"none", fontFamily:T.sans, fontSize:13, fontWeight:600, color:T.text, padding:0, flex:1, minWidth:0, width:120 }}/>:<span style={{ whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", flex:1, minWidth:0 }}>{c.name}</span>}
            {c.modules.timer.running&&<span className="pulse" style={{ width:6, height:6, borderRadius:"50%", background:T.green, flexShrink:0 }}/>}
            <button className="close-btn" onClick={e=>{ e.stopPropagation(); onCloseClient(c.id); }} style={{ width:18, height:18, borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, color:T.subtext, flexShrink:0 }} title="Close tab (⌘W) — client stays in sidebar">×</button>
          </div>
        );
      })}
      {overflowClients.length>0&&(
        <div style={{ position:"relative", flexShrink:0, alignSelf:"center", marginBottom:2 }}>
          <button ref={overflowBtnRef} onClick={()=>{ const rect=overflowBtnRef.current?.getBoundingClientRect(); if(rect) setOverflowPos({ top:rect.bottom+6, left:rect.left }); setOverflowOpen(o=>!o); }} style={{ display:"flex", alignItems:"center", gap:5, padding:"7px 11px", borderRadius:8, background:activeInOverflow?T.surface:T.bgSoft, border:`1px solid ${activeInOverflow?T.border:"transparent"}`, fontSize:12.5, fontWeight:600, color:activeInOverflow?T.text:T.subtext, cursor:"pointer" }} className="nav-item">
            {overflowClients.length} {t("moreClients")} <ChevronDown size={12}/>
          </button>
          {overflowOpen&&(
            <>
              <div style={{ position:"fixed", inset:0, zIndex:199 }} onClick={()=>setOverflowOpen(false)}/>
              <div style={{ position:"fixed", top:overflowPos.top, left:overflowPos.left, background:T.surface, border:`1px solid ${T.border}`, borderRadius:T.radius, boxShadow:T.shadowLg, zIndex:200, minWidth:220, maxHeight:360, overflowY:"auto" }}>
                {overflowClients.map(c=>{ const active=view==="client"&&activeClientId===c.id; return <button key={c.id} onClick={()=>{ onSelectClient(c.id); setOverflowOpen(false); }} style={{ display:"flex", alignItems:"center", gap:10, width:"100%", padding:"10px 14px", background:active?T.bgSoft:"transparent", border:"none", cursor:"pointer", textAlign:"left", fontSize:13, fontWeight:active?600:500, color:T.text }} className="nav-item"><div className="letter-avatar" style={{ width:20, height:20, borderRadius:"50%", background:c.hue.bg, color:c.hue.fg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:8, fontWeight:700, flexShrink:0 }}>{c.name.split(" ").map(n=>n[0]).join("").slice(0,2).toUpperCase()}</div><span style={{ flex:1, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{c.name}</span>{c.modules.timer.running&&<span className="pulse" style={{ width:6, height:6, borderRadius:"50%", background:T.green }}/>}<button onClick={e=>{ e.stopPropagation(); onCloseClient(c.id); setOverflowOpen(false); }} style={{ color:T.muted, fontSize:14, padding:"0 2px", flexShrink:0 }} className="nav-item">×</button></button>; })}
              </div>
            </>
          )}
        </div>
      )}
      <button onClick={onNewClient} title="New client tab (⌘T)" style={{ padding:"8px 12px", marginLeft:4, marginBottom:2, borderRadius:8, fontSize:16, color:T.subtext }} className="nav-item">+</button>
    </div>
  );
};

// ═══════ MODALS ═══════
const NewClientModal = ({ onCreate, onCancel }) => {
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  useEffect(()=>{ inputRef.current?.focus(); },[]);
  useEffect(()=>{ const h=e=>{ if(e.key==="Escape") onCancel(); if(e.key==="Enter") { const nm=name.trim(); if(nm) onCreate(nm); } }; window.addEventListener("keydown",h); return ()=>window.removeEventListener("keydown",h); },[name,onCancel,onCreate]);
  return (
    <div className="new-client-overlay" onClick={onCancel}>
      <div onClick={e=>e.stopPropagation()} className="fade-up" style={{ background:T.surface, borderRadius:T.radiusLg, padding:28, width:420, maxWidth:"90vw", border:`1px solid ${T.border}`, boxShadow:T.shadowLg }}>
        <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:18 }}>
          <IconBadge size={40}><UserPlus size={18}/></IconBadge>
          <div><h2 style={{ fontSize:20, fontWeight:700, letterSpacing:"-0.02em", color:T.text }}>{t("newClient")}</h2><p style={{ fontSize:12.5, color:T.subtext, marginTop:2 }}>Opens in a new tab with its own workspace.</p></div>
        </div>
        <Field label={t("clientNameLabel")}><TextInput ref={inputRef} value={name} onChange={e=>setName(e.target.value)} placeholder="Acme Corp, Sarah Johnson..." /></Field>
        <div style={{ display:"flex", gap:10, justifyContent:"flex-end", marginTop:20 }}>
          <GhostBtn onClick={onCancel}>{t("cancel")}</GhostBtn>
          <PrimaryBtn onClick={()=>{ const nm=name.trim(); if(nm) onCreate(nm); }}>{t("createClient")}</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

const ConfirmDeleteModal = ({ client, onConfirm, onCancel }) => {
  useEffect(()=>{ const h=e=>{ if(e.key==="Escape") onCancel(); }; window.addEventListener("keydown",h); return ()=>window.removeEventListener("keydown",h); },[onCancel]);
  if (!client) return null;
  return (
    <div className="new-client-overlay" onClick={onCancel}>
      <div onClick={e=>e.stopPropagation()} className="fade-up" style={{ background:T.surface, borderRadius:T.radiusLg, padding:28, width:400, maxWidth:"92vw", border:`1px solid ${T.border}`, boxShadow:T.shadowLg }}>
        <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:18 }}>
          <div className="letter-avatar" style={{ width:44, height:44, borderRadius:"50%", background:T.pillRoseBg, color:T.pillRoseFg, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}><Trash2 size={18}/></div>
          <div style={{ flex:1 }}><h2 style={{ fontSize:20, fontWeight:700, letterSpacing:"-0.02em", color:T.text }}>Delete {client.name}?</h2><p style={{ fontSize:12.5, color:T.subtext, marginTop:3 }}>This permanently removes the client and all their data.</p></div>
        </div>
        <div style={{ display:"flex", gap:10, justifyContent:"flex-end" }}>
          <GhostBtn onClick={onCancel}>{t("cancel")}</GhostBtn>
          <button onClick={()=>onConfirm(client.id)} className="btn-primary" style={{ background:T.pillRoseFg, color:"white", padding:"12px 20px", fontSize:13.5, fontWeight:600, borderRadius:999 }}>{t("delete")}</button>
        </div>
      </div>
    </div>
  );
};

const InvoiceModal = ({ open, onClose, client, sessions, hourlyRate, rangeLabel, initialMeta, onSaveMeta, pushToast, profile }) => {
  if (!open) return null;
  return null; // Legacy modal — invoicing now handled in InvoicingModule
};

const CommandPalette = ({ open, onClose, clients, activeClientId, onOpenClient, onOpenModule, onNewClient, onGoDashboard, onShowShortcuts }) => {
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef(null);
  useEffect(()=>{ if(open){ setQuery(""); setCursor(0); setTimeout(()=>inputRef.current?.focus(),10); } },[open]);
  useEffect(()=>{ const h=e=>{ if(e.key==="Escape") onClose(); }; window.addEventListener("keydown",h); return ()=>window.removeEventListener("keydown",h); },[onClose,open]);
  if (!open) return null;

  const moduleItems = NAV.map(n=>({ id:`mod-${n.key}`, icon:n.icon, label:n.label, sub:"Module", action:()=>{ onOpenModule(n.key); onClose(); } }));
  const clientItems = clients.map((c,i)=>({ id:`client-${c.id}`, icon:<span style={{ fontSize:11, fontWeight:700 }}>{c.name.split(" ").map(n=>n[0]).join("").slice(0,2).toUpperCase()}</span>, label:c.name, sub:`Client · ⌘${i+1}`, action:()=>{ onOpenClient(c.id); onClose(); } }));
  const systemItems = [
    { id:"dashboard", icon:<LayoutDashboard size={15}/>, label:"Go to Dashboard", sub:"Navigation", action:()=>{ onGoDashboard(); onClose(); } },
    { id:"new-client", icon:<Plus size={15}/>, label:t("newClient"), sub:"Action", action:()=>{ onNewClient(); onClose(); } },
    { id:"shortcuts", icon:<Keyboard size={15}/>, label:t("keyboardShortcuts"), sub:"Help", action:()=>{ onShowShortcuts(); onClose(); } },
  ];
  const all = [...systemItems,...moduleItems,...clientItems];
  const filtered = query ? all.filter(i=>i.label.toLowerCase().includes(query.toLowerCase())) : all;

  return (
    <div className="palette-overlay" onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} className="palette-in" style={{ background:T.surface, borderRadius:T.radiusXl, width:540, maxWidth:"92vw", border:`1px solid ${T.border}`, boxShadow:T.shadowLg, overflow:"hidden" }}>
        <div style={{ display:"flex", alignItems:"center", gap:12, padding:"14px 18px", borderBottom:`1px solid ${T.border}` }}>
          <input ref={inputRef} value={query} onChange={e=>{ setQuery(e.target.value); setCursor(0); }} onKeyDown={e=>{ if(e.key==="ArrowDown") setCursor(c=>Math.min(c+1,filtered.length-1)); if(e.key==="ArrowUp") setCursor(c=>Math.max(c-1,0)); if(e.key==="Enter"&&filtered[cursor]) filtered[cursor].action(); }} placeholder={`${t("jump")} to client, module, or action…`} style={{ flex:1, fontSize:15, color:T.text, background:"transparent", border:"none", outline:"none", fontFamily:T.sans }} />
          <span className="kbd">ESC</span>
        </div>
        <div style={{ maxHeight:380, overflowY:"auto" }} className="scroll-area">
          {filtered.map((item,i)=>(
            <button key={item.id} onClick={item.action} style={{ display:"flex", alignItems:"center", gap:12, width:"100%", padding:"11px 18px", textAlign:"left", background:i===cursor?T.bgSoft:"transparent", border:"none", cursor:"pointer", transition:"background .1s ease" }} className="nav-item" onMouseEnter={()=>setCursor(i)}>
              <div style={{ width:28, height:28, borderRadius:8, background:T.bgSoft, display:"flex", alignItems:"center", justifyContent:"center", color:T.subtext, flexShrink:0 }}>{item.icon}</div>
              <div style={{ flex:1 }}><div style={{ fontSize:13.5, fontWeight:500, color:T.text }}>{item.label}</div><div style={{ fontSize:11.5, color:T.muted, marginTop:1 }}>{item.sub}</div></div>
            </button>
          ))}
          {filtered.length===0&&<div style={{ padding:"32px 18px", textAlign:"center", color:T.muted, fontSize:13.5 }}>{t("noResults")} "{query}"</div>}
        </div>
      </div>
    </div>
  );
};

const ShortcutsHelp = ({ open, onClose }) => {
  useEffect(()=>{ const h=e=>{ if(e.key==="Escape") onClose(); }; window.addEventListener("keydown",h); return ()=>window.removeEventListener("keydown",h); },[onClose]);
  if (!open) return null;
  const shortcuts = [["⌘K","Command palette"],["⌘T","New client tab"],["⌘W","Close active tab"],["⌘D","Dashboard"],["⌘1-9","Jump to tab"],["Ctrl+Tab","Next tab"],["?","This help"]];
  return (
    <div className="new-client-overlay" onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} className="fade-up" style={{ background:T.surface, borderRadius:T.radiusLg, padding:28, width:400, maxWidth:"90vw", border:`1px solid ${T.border}`, boxShadow:T.shadowLg }}>
        <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
          <IconBadge size={40}><Keyboard size={18}/></IconBadge>
          <div><h2 style={{ fontSize:20, fontWeight:700, color:T.text }}>Keyboard Shortcuts</h2></div>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
          {shortcuts.map(([key,desc])=><div key={key} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"8px 0", borderBottom:`1px solid ${T.border}` }}><span style={{ fontSize:13, color:T.subtext }}>{desc}</span><span className="kbd">{key}</span></div>)}
        </div>
        <div style={{ display:"flex", justifyContent:"flex-end", marginTop:20 }}><GhostBtn onClick={onClose}>{t("cancel")}</GhostBtn></div>
      </div>
    </div>
  );
};

const ToastStack = ({ toasts, onDismiss }) => (
  <div className="toast-stack">
    {toasts.map(toast=>(
      <div key={toast.id} className={toast.leaving?"toast-out":"toast-in"} style={{ background:T.surface, border:`1px solid ${T.border}`, borderRadius:T.radius, padding:"12px 14px", boxShadow:"0 10px 30px rgba(31,27,22,0.14)", display:"flex", alignItems:"center", gap:12, minWidth:260 }}>
        <span style={{ display:"flex", alignItems:"center", justifyContent:"center", width:20, color:T.subtext }}>{toast.icon||<CheckCircle size={14}/>}</span>
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{ fontSize:13, fontWeight:600, color:T.text, letterSpacing:"-0.005em" }}>{toast.title}</div>
          {toast.subtitle&&<div style={{ fontSize:11.5, color:T.muted, marginTop:1 }}>{toast.subtitle}</div>}
        </div>
        {toast.hint&&<span className="kbd">{toast.hint}</span>}
        <button onClick={()=>onDismiss(toast.id)} style={{ fontSize:14, color:T.muted, width:20, height:20, borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center" }} className="nav-item">×</button>
      </div>
    ))}
  </div>
);

const DURATION_CHIPS = [
  { label: "30m", sec: 30*60 }, { label: "1h", sec: 60*60 },
  { label: "2h", sec: 2*60*60 }, { label: "3h", sec: 3*60*60 },
];
const ENERGY_LEVELS = [
  { key: "low", label: "Low", bg: T.pillRoseBg, fg: T.pillRoseFg, icon: <BatteryLow size={14} /> },
  { key: "med", label: "Medium", bg: T.pillAmberBg, fg: T.pillAmberFg, icon: <Zap size={14} /> },
  { key: "high", label: "High", bg: T.pillMintBg, fg: T.pillMintFg, icon: <Flame size={14} /> },
];

const CustomDurationModal = ({ currentMinutes, onSet, onClose }) => {
  const [value, setValue] = useState(String(currentMinutes));
  const inputRef = useRef(null);
  useEffect(() => { inputRef.current?.focus(); inputRef.current?.select(); }, []);
  useEffect(() => { const h = e => { if (e.key === "Escape") onClose(); if (e.key === "Enter") submit(); }; window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h); }, [value]);
  const submit = () => { const n = parseInt(value, 10); if (!isNaN(n) && n > 0) { onSet(n * 60); onClose(); } };
  return (
    <div className="new-client-overlay" onClick={onClose}>
      <div onClick={e => e.stopPropagation()} className="fade-up" style={{ background: T.surface, borderRadius: T.radiusLg, padding: 28, width: 360, maxWidth: "90vw", border: `1px solid ${T.border}`, boxShadow: T.shadowLg }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <IconBadge size={40}><Clock size={18} /></IconBadge>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em", color: T.text }}>Custom Duration</h2>
            <p style={{ fontSize: 12.5, color: T.subtext, marginTop: 2 }}>Set target in minutes</p>
          </div>
        </div>
        <Field label="Duration (minutes)">
          <TextInput ref={inputRef} type="number" value={value} onChange={e => setValue(e.target.value)} placeholder="90" min="1" />
        </Field>
        <div style={{ display: "flex", gap: 6, marginTop: 12, marginBottom: 20, flexWrap: "wrap" }}>
          {[30, 45, 60, 90, 120].map(m => (
            <button key={m} onClick={() => setValue(String(m))} style={{ padding: "5px 12px", fontSize: 12, fontWeight: 600, borderRadius: 999, border: `1.5px solid ${value === String(m) ? T.text : T.border}`, background: value === String(m) ? T.text : T.surface, color: value === String(m) ? T.bgInverse : T.subtext, transition: "all .15s" }} className="nav-item">{m}m</button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
          <GhostBtn onClick={onClose}>{t("cancel")}</GhostBtn>
          <PrimaryBtn onClick={submit}>Set Duration</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

const TimerModule = ({ client, patch, pushToast }) => {
  const s = client.modules.timer;
  const isBillable = s.billingMode === "billable";
  const isFixed = s.billingMode === "fixed";
  const [showCustomDuration, setShowCustomDuration] = useState(false);

  let total, progress, mm, ss, ringColor, ringOver, modeLabel, modeTone;
  if (isBillable || isFixed) {
    total = s.targetSeconds;
    progress = Math.min(1, s.elapsedSeconds / Math.max(1, total));
    const overBy = Math.max(0, s.elapsedSeconds - total);
    ringOver = overBy > 0 && isBillable;
    const displaySec = s.elapsedSeconds;
    mm = String(Math.floor(displaySec / 60)).padStart(2, "0");
    ss = String(displaySec % 60).padStart(2, "0");
    if (isFixed) { modeLabel = s.running ? "TRACKING" : "FIXED PRICE"; modeTone = "mint"; ringColor = T.text; ringOver = false; }
    else { ringColor = ringOver ? T.amber : T.text; modeLabel = ringOver ? "⚠ OVER TARGET" : (s.running ? "⏱ BILLING" : "⏱ BILLABLE"); modeTone = ringOver ? "amber" : "lilac"; }
  } else {
    total = s.mode === "focus" ? 25 * 60 : 5 * 60;
    progress = 1 - s.seconds / total;
    mm = String(Math.floor(s.seconds / 60)).padStart(2, "0");
    ss = String(s.seconds % 60).padStart(2, "0");
    ringColor = s.mode === "focus" ? T.text : T.green;
    modeLabel = s.mode === "focus" ? "🎯 FOCUS" : "☕ BREAK";
    modeTone = s.mode === "focus" ? "lilac" : "mint";
    ringOver = false;
  }
  const R = 96, C = 2 * Math.PI * R;
  const offset = C * (1 - progress);
  const totalMin = s.sessions.reduce((a, x) => a + x.minutes, 0);
  const overSec = Math.max(0, s.elapsedSeconds - s.targetSeconds);
  const overMM = String(Math.floor(overSec / 60)).padStart(2, "0");
  const overSS = String(overSec % 60).padStart(2, "0");
  const targetDisplay = (() => { const m = Math.round(s.targetSeconds / 60); if (m < 60) return `${m}m`; const h = Math.floor(m/60); const rem = m%60; return rem ? `${h}h ${rem}m` : `${h}h`; })();

  const setMode = (newMode) => {
    if (newMode === "billable") patch({ timer: { ...s, billingMode: "billable", running: false, elapsedSeconds: 0, mode: "focus", seconds: 25*60 } });
    else if (newMode === "fixed") patch({ timer: { ...s, billingMode: "fixed", running: false, elapsedSeconds: 0, mode: "focus", seconds: 25*60 } });
    else patch({ timer: { ...s, billingMode: "pomodoro", running: false, elapsedSeconds: 0, seconds: 25*60, mode: "focus" } });
  };
  const toggleRun = () => {
    if (s.running && !isBillable && !isFixed) {
      // Pausing Pomodoro — log time spent in this run
      const startSec = s.runStartSeconds ?? (s.mode === "focus" ? 25 * 60 : 5 * 60);
      const elapsedSec = startSec - s.seconds;
      if (elapsedSec >= 10) {
        const loggedMinutes = Math.max(1, Math.round(elapsedSec / 60));
        const sess = {
          id: Date.now() + Math.random(),
          project: s.currentProject.trim() || "Focus Session",
          minutes: loggedMinutes,
          seconds: elapsedSec,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          dateISO: new Date().toISOString(),
          billable: true,
        };
        patch({ timer: { ...s, running: false, sessions: [sess, ...s.sessions] } });
        return;
      }
      patch({ timer: { ...s, running: false } });
    } else if (!s.running && !isBillable && !isFixed) {
      // Starting Pomodoro — record seconds at start of this run
      patch({ timer: { ...s, running: true, runStartSeconds: s.seconds } });
    } else {
      patch({ timer: { ...s, running: !s.running } });
    }
  };
  const reset = () => {
    if (isBillable || isFixed) patch({ timer: { ...s, running: false, elapsedSeconds: 0 } });
    else patch({ timer: { ...s, running: false, seconds: s.mode === "focus" ? 25*60 : 5*60 } });
  };
  const stopEarly = () => {
    if (s.elapsedSeconds < 1) { patch({ timer: { ...s, running: false, elapsedSeconds: 0 } }); return; }
    const loggedMinutes = Math.max(1, Math.round(s.elapsedSeconds / 60));
    const sess = { id: Date.now() + Math.random(), project: s.currentProject.trim() || "Untitled", minutes: loggedMinutes, seconds: s.elapsedSeconds, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), dateISO: new Date().toISOString(), billable: !isFixed, fixed: isFixed, fixedAmount: isFixed ? (parseFloat(s.fixedAmount) || 0) : null, targetMinutes: Math.round(s.targetSeconds / 60) };
    const timerUpdate = { timer: { ...s, running: false, elapsedSeconds: 0, sessions: [sess, ...s.sessions] } };

    // If fixed price — also push as a line item into Invoicing
    if (isFixed && sess.fixedAmount) {
      const inv = client.modules.invoicing || emptyModuleState().invoicing;
      const newItem = { id: `li_${Date.now()}`, description: sess.project || "Fixed Price Project", amount: String(sess.fixedAmount) };
      const existingItems = (inv.lineItems || []).filter(li => li.description || li.amount);
      patch({ ...timerUpdate, invoicing: { ...inv, billingType: "fixed", lineItems: [...existingItems, newItem] } });
    } else {
      patch(timerUpdate);
    }

    const dispMm = Math.floor(s.elapsedSeconds / 60); const dispSs = s.elapsedSeconds % 60;
    const display = dispMm > 0 ? `${dispMm}m ${dispSs}s` : `${dispSs}s`;
    pushToast?.({ icon: <Square size={14} />, title: t("sessionLogged"), subtitle: isFixed ? `${sess.project} · ${display}${sess.fixedAmount ? ` · $${sess.fixedAmount} fixed` : ""}` : `${sess.project} · ${display} (${loggedMinutes}m billable)` });
  };
  const setTarget = (sec) => { if (s.running) return; patch({ timer: { ...s, targetSeconds: sec, elapsedSeconds: 0 } }); };
  const onCustomTarget = () => { if (!s.running) setShowCustomDuration(true); };

  return (
  <>
    <div className="fade-up">
      <ModuleHeader icon={<Timer size={22} />} title={t("timer")} description={isBillable ? `Billable time tracking for ${client.name}.` : `${t("timerDesc")} ${client.name}.`} />
      <div style={{ display: "inline-flex", gap: 0, marginBottom: 20, padding: 4, background: T.bgSoft, borderRadius: 999, border: `1px solid ${T.border}` }}>
        {[{ key: "pomodoro", label: t("pomodoro"), sub: "25/5" }, { key: "billable", label: t("billable"), sub: "hourly" }, { key: "fixed", label: t("fixed"), sub: "flat fee" }].map(opt => {
          const active = s.billingMode === opt.key;
          return <button key={opt.key} onClick={() => setMode(opt.key)} style={{ padding: "8px 16px", fontSize: 13, fontWeight: 600, borderRadius: 999, background: active ? T.surface : "transparent", color: active ? T.text : T.subtext, boxShadow: active ? T.shadow : "none", transition: "all .15s ease", display: "inline-flex", alignItems: "center", gap: 6 }}><span>{opt.label}</span><span style={{ fontSize: 10, color: T.muted }}>{opt.sub}</span></button>;
        })}
      </div>
      <div className="g3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 28 }}>
        <StatCard bg={T.lilac} icon={<Clock size={18} />} label={t("clientTotal")} value={`${totalMin}m`} delta="billable" />
        <StatCard bg={T.peach} icon={<Layers size={18} />} label="Sessions" value={isFixed ? s.sessions.filter(x=>x.fixed).length : isBillable ? s.sessions.filter(x=>!x.fixed).length : s.sessions.filter(x=>!x.fixed).length} delta="completed" />
        {(() => {
          const totalFixed = s.sessions.filter(x => x.fixed).reduce((a, x) => a + (x.fixedAmount || 0), 0);
          return <StatCard bg={T.sky} icon={isFixed ? <DollarSign size={18} /> : isBillable ? <DollarSign size={18} /> : (s.mode === "focus" ? <Target size={18} /> : <Coffee size={18} />)} label={isFixed ? t("fixedFee") : isBillable ? t("target") : t("mode")} value={isFixed ? (totalFixed ? `$${totalFixed.toLocaleString()}` : "—") : isBillable ? targetDisplay : (s.mode === "focus" ? "Focus" : "Break")} delta={isFixed ? `${s.sessions.filter(x=>x.fixed).length} session${s.sessions.filter(x=>x.fixed).length!==1?"s":""}` : `${mm}:${ss} ${s.running ? "running" : "paused"}`} />;
        })()}
      </div>
      <div className="timer-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <Card padding={28}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
            <Pill tone={modeTone}>{modeLabel}{s.running && <span className="pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor", marginLeft: 2 }} />}</Pill>
          </div>
          <div style={{ display: "flex", justifyContent: "center", margin: "6px 0 18px" }}>
            <svg width={230} height={230}>
              <circle cx={115} cy={115} r={R} fill="none" stroke={T.border} strokeWidth={10} />
              <circle cx={115} cy={115} r={R} fill="none" stroke={ringColor} strokeWidth={10} strokeLinecap="round" strokeDasharray={C} strokeDashoffset={offset} transform="rotate(-90 115 115)" style={{ transition: "stroke-dashoffset 0.4s ease, stroke 0.3s ease" }} />
              <text x={115} y={isBillable || isFixed ? 110 : 115} textAnchor="middle" dominantBaseline="middle" fill={T.text} fontFamily={T.mono} fontSize={42} fontWeight={600} letterSpacing="-0.02em">{mm}:{ss}</text>
              {isFixed ? (<><text x={115} y={140} textAnchor="middle" fill={T.muted} fontFamily={T.sans} fontSize={10.5} fontWeight={600} letterSpacing="0.12em">{s.fixedAmount ? `$${s.fixedAmount} FIXED` : "SET AMOUNT"}</text><text x={115} y={158} textAnchor="middle" fill={T.muted} fontFamily={T.sans} fontSize={9.5} fontWeight={600} letterSpacing="0.15em">TIME TRACKED</text></>) : isBillable ? (<><text x={115} y={140} textAnchor="middle" fill={ringOver ? T.amber : T.muted} fontFamily={T.sans} fontSize={10.5} fontWeight={600} letterSpacing="0.12em">{ringOver ? `+${overMM}:${overSS} OVER` : `OF ${targetDisplay}`}</text><text x={115} y={158} textAnchor="middle" fill={T.muted} fontFamily={T.sans} fontSize={9.5} fontWeight={600} letterSpacing="0.15em">BILLABLE</text></>) : (<text x={115} y={148} textAnchor="middle" fill={T.muted} fontFamily={T.sans} fontSize={10.5} fontWeight={600} letterSpacing="0.15em">{s.mode === "focus" ? "DEEP WORK" : "RECHARGE"}</text>)}
            </svg>
          </div>
          {isFixed && (
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: T.muted, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>{t("fixedAmount")}</div>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: T.subtext, fontSize: 14, fontWeight: 600 }}>$</span>
                <input type="number" min="0" value={s.fixedAmount} onChange={e => patch({ timer: { ...s, fixedAmount: e.target.value } })} placeholder="2000" style={{ width: "100%", padding: "11px 14px 11px 28px", fontSize: 14, color: T.text, background: T.surface, fontFamily: T.sans, border: `1.5px solid ${T.border}`, borderRadius: T.radius, boxSizing: "border-box" }} />
              </div>
            </div>
          )}
          {isBillable && (
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: T.muted, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>{t("targetDuration")}</div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {DURATION_CHIPS.map(d => { const active = s.targetSeconds === d.sec; return <button key={d.label} onClick={() => setTarget(d.sec)} disabled={s.running} style={{ padding: "7px 13px", fontSize: 12.5, fontWeight: 600, border: `1.5px solid ${active ? T.text : T.border}`, background: active ? T.text : T.surface, color: active ? T.bg : T.subtext, borderRadius: 999, cursor: s.running ? "not-allowed" : "pointer", opacity: s.running && !active ? 0.5 : 1, transition: "all .15s ease" }}>{d.label}</button>; })}
                <button onClick={onCustomTarget} disabled={s.running} style={{ padding: "7px 13px", fontSize: 12.5, fontWeight: 600, border: `1.5px dashed ${T.border}`, background: "transparent", color: T.subtext, borderRadius: 999, cursor: s.running ? "not-allowed" : "pointer", opacity: s.running ? 0.5 : 1 }}>Custom</button>
              </div>
            </div>
          )}
          <Field label={t("taskNote")}><TextInput value={s.currentProject} onChange={e => patch({ timer: { ...s, currentProject: e.target.value } })} placeholder="What are you working on?" /></Field>
          <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
            <PrimaryBtn onClick={toggleRun} style={{ flex: 1, justifyContent: "center" }}>{s.running ? t("pause") : t("start")}</PrimaryBtn>
            {(isBillable || isFixed) ? (<><GhostBtn onClick={stopEarly} disabled={s.elapsedSeconds < 1} style={{ flex: 1, justifyContent: "center" }}>{t("stopLog")}</GhostBtn><GhostBtn onClick={reset} style={{ padding: "10px 14px" }} title="Reset">↻</GhostBtn></>) : (<GhostBtn onClick={reset} style={{ flex: 1, justifyContent: "center" }}>↻ {t("reset")}</GhostBtn>)}
          </div>
        </Card>
        <Card>
          <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 12 }}>{t("sessionLog")}</div>
          {/* Live in-progress entry */}
          {s.running && (
            <div className="fade-in" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: T.pillMintBg, border: `1px solid ${T.pillMintFg}33`, borderRadius: T.radius, marginBottom: 8 }}>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: T.text }}>{s.currentProject || "In progress…"}</div>
                <div style={{ fontSize: 11, color: T.pillMintFg, marginTop: 2, display: "flex", alignItems: "center", gap: 4 }}>
                  <span className="pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: T.pillMintFg, display: "inline-block" }}/>
                  {isBillable || isFixed ? `${mm}:${ss} elapsed` : `${mm}:${ss} remaining`}
                </div>
              </div>
              <Pill tone="mint">live</Pill>
            </div>
          )}
          {s.sessions.length === 0 && !s.running ? <div style={{ padding: "20px 0", textAlign: "center", color: T.muted, fontSize: 13 }}>{t("noSessionsYet")}</div> : (
            <div style={{ display: "flex", flexDirection: "column", gap: 8, maxHeight: 300, overflowY: "auto" }}>
              {s.sessions.filter(sess => isFixed ? sess.fixed : isBillable ? !sess.fixed : !sess.fixed).map(sess => {
                const secs = sess.seconds || sess.minutes * 60;
                const hrs = Math.floor(secs / 3600); const mins = Math.floor((secs % 3600) / 60); const sc = secs % 60;
                const precise = hrs > 0 ? `${hrs}h ${mins}m ${sc}s` : mins > 0 ? `${mins}m ${sc}s` : `${sc}s`;
                const pillLabel = hrs > 0 ? `${hrs}h ${mins}m` : mins > 0 ? `${mins}m` : `${sc}s`;
                return (
                  <div key={sess.id} className="fade-in" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: T.bgSoft, border: `1px solid ${T.border}`, borderRadius: T.radius }}>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ fontSize: 13.5, fontWeight: 600, color: T.text, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 180 }}>{sess.project || "Untitled"}</div>
                      <div style={{ fontSize: 11, color: T.muted, marginTop: 2, display: "flex", gap: 8 }}>
                        <span>{sess.time}</span>
                        <span>·</span>
                        {sess.fixed ? <span title={precise}>fixed · {precise}{sess.fixedAmount ? ` · $${sess.fixedAmount}` : ""}</span> : <span title={precise}>billable · {precise}</span>}
                      </div>
                    </div>
                    <Pill tone={sess.fixed ? "amber" : "mint"}>{sess.fixed && sess.fixedAmount ? `$${sess.fixedAmount}` : pillLabel}</Pill>
                  </div>
                );
              })}
            </div>
          )}
        </Card>
      </div>
    </div>
    {showCustomDuration && (
      <CustomDurationModal
        currentMinutes={Math.round(s.targetSeconds / 60)}
        onSet={sec => setTarget(sec)}
        onClose={() => setShowCustomDuration(false)}
      />
    )}
  </>
  );
};

// ═══════ MODULE 3: INVOICING ═══════

const INVOICE_RANGES = [
  { key: "this-month", get label() { return t("thisMonth"); } },
  { key: "last-month", get label() { return t("lastMonth"); } },
  { key: "last-30",    get label() { return t("last30"); } },
  { key: "all-time",   get label() { return t("allTime"); } },
];

const InvoicingModule = ({ client, patch, profile, pushToast, allClients }) => {
  const s = client.modules.invoicing || emptyModuleState().invoicing;
  const patchS = (partial) => patch({ invoicing: { ...s, ...partial } });
  const patchMeta = (partial) => patchS({ meta: { ...s.meta, ...partial } });

  // Auto-set invoice number on first open if still default
  useEffect(() => {
    if (s.meta.number === "001" && allClients?.length) {
      const next = getNextInvoiceNumber(allClients);
      if (next !== "001") patchMeta({ number: next });
    }
  }, []);
  const isFixed = s.billingType === "fixed";
  const timerSessions = client.modules.timer.sessions;
  const filteredSessions = isFixed ? [] : filterSessionsInRange(timerSessions, s.invoiceRange).filter(sess => !sess.fixed);
  const hourlyRate = parseFloat(s.hourlyRate) || 0;
  const sessionSubtotal = filteredSessions.reduce((sum, sess) => sum + (sess.minutes / 60) * hourlyRate, 0);
  const fixedSubtotal = s.lineItems.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
  const serviceSubtotal = isFixed ? fixedSubtotal : sessionSubtotal;
  const expenses = s.expenses || [];
  const expenseTotal = expenses.reduce((sum, e) => sum + (parseFloat(e.amount) || 0), 0);
  const subtotal = serviceSubtotal + expenseTotal;
  const taxRate = parseFloat(s.meta.taxRate) || 0;
  const taxAmount = subtotal * (taxRate / 100);
  const total = subtotal + taxAmount;

  const addLineItem = () => patchS({ lineItems: [...s.lineItems, { id: `li_${Date.now()}`, description: "", amount: "" }] });
  const removeLineItem = (id) => patchS({ lineItems: s.lineItems.filter(li => li.id !== id) });
  const updateLineItem = (id, field, value) => patchS({ lineItems: s.lineItems.map(li => li.id === id ? { ...li, [field]: value } : li) });
  const addExpense = () => patchS({ expenses: [...expenses, { id: `exp_${Date.now()}`, description: "", amount: "" }] });
  const removeExpense = (id) => patchS({ expenses: expenses.filter(e => e.id !== id) });
  const updateExpense = (id, field, value) => patchS({ expenses: expenses.map(e => e.id === id ? { ...e, [field]: value } : e) });

  const downloadPDF = async () => {
    // Block duplicate invoice numbers
    const existingNumbers = (s.invoiceHistory || []).map(h => h.number);
    if (s.meta.number && existingNumbers.includes(s.meta.number)) {
      pushToast?.({ title: "Duplicate invoice number", subtitle: `Invoice #${s.meta.number} already exists. Please use a different number.` });
      return;
    }
    patchS({ pdfLoading: true });
    try {
      const JsPDF = await loadJsPDF();
      const doc = new JsPDF({ unit: "pt", format: "a4" });
      const W = doc.internal.pageSize.getWidth(); const pageH = doc.internal.pageSize.getHeight(); const margin = 50; let y = margin;
      if (profile?.logo) { try { const dims = await getImageDimensions(profile.logo); const lh = 44; const lw = lh*(dims.w/dims.h); doc.addImage(profile.logo, margin, y, lw, lh, "", "FAST"); y+=54; } catch {} }
      doc.setFont("helvetica","bold"); doc.setFontSize(28); doc.setTextColor(31,27,22); doc.text("INVOICE", margin, y+24);
      doc.setFontSize(10); doc.setFont("helvetica","normal"); doc.setTextColor(107,100,86); doc.text(`Invoice #${s.meta.number||"—"}`, W-margin, y+4, { align:"right" });
      doc.setFont("helvetica","bold"); doc.setTextColor(31,27,22); doc.text(`Date: ${formatDateLong(s.meta.date||new Date())}`, W-margin, y+20, { align:"right" });
      if (s.meta.dueDate) doc.text(`Due: ${formatDateLong(s.meta.dueDate)}`, W-margin, y+36, { align:"right" });
      y+=60; doc.setDrawColor(234,223,199); doc.line(margin,y,W-margin,y); y+=20;
      doc.setFont("helvetica","bold"); doc.setFontSize(8.5); doc.setTextColor(154,146,127); doc.setCharSpace(1.5);
      doc.text("FROM", margin, y); doc.text("BILL TO", W/2, y); doc.setCharSpace(0); y+=14;
      doc.setFont("helvetica","bold"); doc.setFontSize(11); doc.setTextColor(31,27,22);
      doc.text(s.meta.freelancerName||profile?.name||"Your Name", margin, y); doc.text(client.name, W/2, y); y+=16;
      doc.setFont("helvetica","normal"); doc.setFontSize(10); doc.setTextColor(107,100,86);
      if (s.meta.freelancerEmail||profile?.email) doc.text(s.meta.freelancerEmail||profile?.email||"", margin, y);
      if (s.meta.clientEmail) doc.text(s.meta.clientEmail, W/2, y); y+=30;
      doc.setDrawColor(234,223,199); doc.line(margin,y,W-margin,y); y+=16;
      const colDesc=margin+10; const colHours=W-margin-170; const colRate=W-margin-90; const colAmt=W-margin-10;
      doc.setFillColor(243,236,220); doc.roundedRect(margin,y,W-margin*2,28,4,4,"F");
      doc.setFont("helvetica","bold"); doc.setFontSize(9); doc.setTextColor(107,100,86);
      if (isFixed) { doc.text("DESCRIPTION",colDesc,y+17); doc.text("AMOUNT",colAmt,y+17,{align:"right"}); }
      else { doc.text("DATE",colDesc,y+17); doc.text("DESCRIPTION",colDesc+60,y+17); doc.text("HOURS",colHours,y+17,{align:"right"}); doc.text("RATE",colRate,y+17,{align:"right"}); doc.text("AMOUNT",colAmt,y+17,{align:"right"}); }
      y+=38;
      doc.setFont("helvetica","normal"); doc.setFontSize(10); doc.setTextColor(31,27,22);
      const items = isFixed ? s.lineItems : filteredSessions;
      items.forEach((item,i) => {
        if (y>pageH-120) { doc.addPage(); y=margin; }
        if (i%2===0) { doc.setFillColor(255,250,240); doc.rect(margin,y-4,W-margin*2,22,"F"); }
        if (isFixed) { doc.text(item.description||"—",colDesc,y+10); doc.text(fmtMoney(parseFloat(item.amount)||0),colAmt,y+10,{align:"right"}); }
        else { const hrs=item.minutes/60; const amt=hrs*hourlyRate; doc.setTextColor(107,100,86); doc.setFontSize(9); doc.text(formatDateShort(item.dateISO),colDesc,y+10); doc.setTextColor(31,27,22); doc.setFontSize(10); doc.text(item.project||"Untitled",colDesc+60,y+10); doc.text(`${hrs.toFixed(2)}h`,colHours,y+10,{align:"right"}); doc.text(fmtMoney(hourlyRate),colRate,y+10,{align:"right"}); doc.text(fmtMoney(amt),colAmt,y+10,{align:"right"}); }
        y+=22;
      });
      // Expenses section in PDF
      if (expenses.length > 0) {
        y+=16;
        doc.setFillColor(248,244,236); doc.roundedRect(margin,y,W-margin*2,22,4,4,"F");
        doc.setFont("helvetica","bold"); doc.setFontSize(9); doc.setTextColor(107,100,86);
        doc.text("EXPENSES",colDesc,y+15); doc.text("AMOUNT",colAmt,y+15,{align:"right"});
        y+=32;
        doc.setFont("helvetica","normal"); doc.setFontSize(10); doc.setTextColor(31,27,22);
        expenses.forEach((exp,i) => {
          if (y>pageH-120) { doc.addPage(); y=margin; }
          if (i%2===0) { doc.setFillColor(255,250,240); doc.rect(margin,y-4,W-margin*2,22,"F"); }
          doc.text(exp.description||"Expense",colDesc,y+10);
          doc.text(fmtMoney(parseFloat(exp.amount)||0),colAmt,y+10,{align:"right"});
          y+=22;
        });
      }
      y+=12; doc.setDrawColor(234,223,199); doc.line(W/2,y,W-margin,y); y+=16;
      const totalsLeft=W/2+10;
      doc.setFont("helvetica","normal"); doc.setFontSize(10); doc.setTextColor(107,100,86);
      doc.text("Service fee",totalsLeft,y); doc.text(fmtMoney(serviceSubtotal),colAmt,y,{align:"right"}); y+=18;
      if (expenseTotal>0) { doc.text("Expenses",totalsLeft,y); doc.text(fmtMoney(expenseTotal),colAmt,y,{align:"right"}); y+=18; }
      if (taxRate>0) { doc.text(`Tax (${taxRate}%)`,totalsLeft,y); doc.text(fmtMoney(taxAmount),colAmt,y,{align:"right"}); y+=18; doc.setDrawColor(234,223,199); doc.line(totalsLeft,y,W-margin,y); y+=14; }
      doc.setFont("helvetica","bold"); doc.setFontSize(13); doc.setTextColor(31,27,22);
      doc.text("Total",totalsLeft,y); doc.text(fmtMoney(total),colAmt,y,{align:"right"}); y+=30;
      if (s.meta.notes||s.meta.paymentTerms) {
        doc.setDrawColor(234,223,199); doc.line(margin,y,W-margin,y); y+=14;
        if (s.meta.paymentTerms) { doc.setFont("helvetica","bold"); doc.setFontSize(9); doc.setTextColor(107,100,86); doc.text("PAYMENT TERMS",margin,y); y+=13; doc.setFont("helvetica","normal"); doc.setFontSize(10); doc.setTextColor(31,27,22); doc.text(s.meta.paymentTerms,margin,y); y+=20; }
        if (s.meta.notes) { doc.setFont("helvetica","bold"); doc.setFontSize(9); doc.setTextColor(107,100,86); doc.text("NOTES",margin,y); y+=13; doc.setFont("helvetica","normal"); doc.setFontSize(10); doc.setTextColor(31,27,22); doc.text(doc.splitTextToSize(s.meta.notes,W-margin*2),margin,y); }
      }
      const filename = `invoice-${client.name.replace(/\s+/g,"-").toLowerCase()}-${s.meta.number||"draft"}.pdf`;
      doc.save(filename);
      const historyEntry = { id:`ih_${Date.now()}`, number:s.meta.number, date:s.meta.date, amount:total, billingType:s.billingType, status:"sent", pdfName:filename };
      patchS({ invoiceHistory:[historyEntry,...(s.invoiceHistory||[])], pdfLoading:false });
      pushToast?.({ icon:<Receipt size={14}/>, title:t("invoiceDownloaded"), subtitle:filename });
    } catch(err) { pushToast?.({ icon:<Receipt size={14}/>, title:t("pdfFailed"), subtitle:err.message }); patchS({ pdfLoading:false }); }
  };

  return (
    <div className="fade-up">
      <ModuleHeader icon={<Receipt size={22} />} title={t("invoicing")} description={`${t("invoicingDesc")} ${client.name}.`} badge={{ label: t("pdfReady"), tone: "mint" }} />
      <div className="g3" style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:14, marginBottom:28 }}>
        <StatCard bg={T.lilac} icon={<DollarSign size={18}/>} label={t("subtotal")} value={subtotal?fmtMoney(subtotal):"—"} delta="before tax" />
        <StatCard bg={T.peach} icon={<Receipt size={18}/>} label={t("tax")} value={taxRate?`${taxRate}%`:"—"} delta={taxRate?fmtMoney(taxAmount):"not set"} />
        <StatCard bg={T.mint} icon={<TrendingUp size={18}/>} label={t("totalDue")} value={total?fmtMoney(total):"—"} delta="inc. tax" />
      </div>
      <Card style={{ marginBottom:18 }}>
        <div style={{ fontSize:12, fontWeight:700, color:T.subtext, letterSpacing:"0.05em", textTransform:"uppercase", marginBottom:12 }}>{t("billingTypeLabel")}</div>
        <div style={{ display:"inline-flex", gap:0, padding:4, background:T.bgSoft, borderRadius:999, border:`1px solid ${T.border}` }}>
          {[{key:"hourly",label:t("hourly")},{key:"fixed",label:t("fixed")}].map(opt => { const active=s.billingType===opt.key; return <button key={opt.key} onClick={()=>patchS({billingType:opt.key})} style={{ padding:"8px 20px", fontSize:13, fontWeight:600, borderRadius:999, background:active?T.surface:"transparent", color:active?T.text:T.subtext, boxShadow:active?T.shadow:"none", transition:"all .15s ease" }}>{opt.label}</button>; })}
        </div>
        {!isFixed && (
          <div className="g2" style={{ marginTop:18, display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
            <Field label={t("dateRange")}>
              <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                {INVOICE_RANGES.map(r => { const active=s.invoiceRange===r.key; return <button key={r.key} onClick={()=>patchS({invoiceRange:r.key})} style={{ padding:"7px 14px", fontSize:12.5, fontWeight:600, borderRadius:999, border:`1.5px solid ${active?T.text:T.border}`, background:active?T.text:T.surface, color:active?T.bg:T.subtext, transition:"all .15s ease" }}>{r.label}</button>; })}
              </div>
            </Field>
            <Field label={t("hourlyRate")}><TextInput type="number" value={s.hourlyRate} onChange={e=>patchS({hourlyRate:e.target.value})} placeholder="150" /></Field>
          </div>
        )}
        {isFixed && (
          <div style={{ marginTop:18 }}>
            <div style={{ fontSize:12, fontWeight:700, color:T.subtext, letterSpacing:"0.05em", textTransform:"uppercase", marginBottom:10 }}>{t("lineItems")}</div>
            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {s.lineItems.map((item,i) => (
                <div key={item.id} style={{ display:"flex", gap:8, alignItems:"center" }}>
                  <div style={{ flex:1 }}><TextInput value={item.description} onChange={e=>updateLineItem(item.id,"description",e.target.value)} placeholder={`Item ${i+1} description`} /></div>
                  <div style={{ width:130 }}><TextInput type="number" min="0" value={item.amount} onChange={e=>updateLineItem(item.id,"amount",e.target.value)} placeholder="0.00" /></div>
                  {s.lineItems.length>1&&<button onClick={()=>removeLineItem(item.id)} style={{ color:T.muted, padding:6 }} className="nav-item"><Trash size={14}/></button>}
                </div>
              ))}
            </div>
            <button onClick={addLineItem} style={{ marginTop:10, display:"flex", alignItems:"center", gap:6, fontSize:12.5, fontWeight:600, color:T.subtext, padding:"6px 0" }} className="nav-item"><PlusCircle size={14}/> {t("addItem")}</button>
          </div>
        )}
      </Card>
      {!isFixed && (
        <Card style={{ marginBottom:18 }}>
          <div style={{ fontSize:12, fontWeight:700, color:T.subtext, letterSpacing:"0.05em", textTransform:"uppercase", marginBottom:12 }}>{t("sessions")} · {INVOICE_RANGES.find(r=>r.key===s.invoiceRange)?.label}</div>
          {filteredSessions.length===0 ? <div style={{ padding:"20px 0", textAlign:"center", color:T.muted, fontSize:13 }}>{t("noSessionsFound")}</div> : (
            <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
              {filteredSessions.map(sess => { const hrs=(sess.minutes/60).toFixed(2); const amt=(sess.minutes/60)*hourlyRate; return <div key={sess.id} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"10px 14px", background:T.bgSoft, border:`1px solid ${T.border}`, borderRadius:T.radius }}><div style={{ minWidth:0, flex:1 }}><div style={{ fontSize:13, fontWeight:600, color:T.text }}>{sess.project||"Untitled"}</div><div style={{ fontSize:11, color:T.muted, marginTop:2 }}>{formatDateShort(sess.dateISO)} · {hrs}h</div></div><div style={{ fontSize:13, fontWeight:700, color:T.text, fontFamily:T.mono }}>{hourlyRate?fmtMoney(amt):`${hrs}h`}</div></div>; })}
            </div>
          )}
        </Card>
      )}
      {/* Expenses */}
      <Card style={{ marginBottom:18 }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:12 }}>
          <div>
            <div style={{ fontSize:12, fontWeight:700, color:T.subtext, letterSpacing:"0.05em", textTransform:"uppercase" }}>Expenses</div>
            <div style={{ fontSize:11.5, color:T.muted, marginTop:2 }}>Reimbursable costs to pass on to the client</div>
          </div>
          {expenseTotal > 0 && <div style={{ fontSize:13.5, fontWeight:700, color:T.text, fontFamily:T.mono }}>{fmtMoney(expenseTotal)}</div>}
        </div>
        {expenses.length === 0 ? (
          <div style={{ padding:"16px 0", textAlign:"center", color:T.muted, fontSize:13, border:`1.5px dashed ${T.border}`, borderRadius:T.radius, background:T.bgSoft }}>
            No expenses yet — stock photos, contractors, travel, etc.
          </div>
        ) : (
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:8 }}>
            {expenses.map((exp, i) => (
              <div key={exp.id} style={{ display:"flex", gap:8, alignItems:"center" }}>
                <div style={{ flex:1 }}><TextInput value={exp.description} onChange={e=>updateExpense(exp.id,"description",e.target.value)} placeholder={`Expense ${i+1} — e.g. Stock photos`} /></div>
                <div style={{ width:130 }}>
                  <div style={{ position:"relative" }}>
                    <span style={{ position:"absolute", left:13, top:"50%", transform:"translateY(-50%)", color:T.subtext, fontSize:13, fontWeight:600 }}>$</span>
                    <TextInput type="number" value={exp.amount} onChange={e=>updateExpense(exp.id,"amount",e.target.value)} placeholder="0.00" style={{ paddingLeft:26 }} />
                  </div>
                </div>
                <button onClick={()=>removeExpense(exp.id)} style={{ color:T.muted, padding:6, flexShrink:0 }} className="nav-item"><Trash size={14}/></button>
              </div>
            ))}
          </div>
        )}
        <button onClick={addExpense} style={{ display:"flex", alignItems:"center", gap:6, fontSize:12.5, fontWeight:600, color:T.subtext, padding:"6px 0", marginTop:8 }} className="nav-item">
          <PlusCircle size={14}/> Add expense
        </button>
      </Card>

      <Card style={{ marginBottom:18 }}>
        <div style={{ fontSize:12, fontWeight:700, color:T.subtext, letterSpacing:"0.05em", textTransform:"uppercase", marginBottom:14 }}>{t("invoiceDetails")}</div>
        <div className="g3" style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:14, marginBottom:14 }}>
          <Field label={t("invoiceNumber")}><TextInput value={s.meta.number} onChange={e=>patchMeta({number:e.target.value})} placeholder="001" /></Field>
          <Field label={t("invoiceDate")}><TextInput type="date" value={s.meta.date} onChange={e=>patchMeta({date:e.target.value})} /></Field>
          <Field label={t("dueDate")} hint="optional"><TextInput type="date" value={s.meta.dueDate} onChange={e=>patchMeta({dueDate:e.target.value})} /></Field>
        </div>
        <div className="g2" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:14 }}>
          <Field label={t("yourName")}><TextInput value={s.meta.freelancerName||profile?.name||""} onChange={e=>patchMeta({freelancerName:e.target.value})} placeholder={profile?.name||"Alex Rivera"} /></Field>
          <Field label={t("yourEmail")}><TextInput value={s.meta.freelancerEmail||profile?.email||""} onChange={e=>patchMeta({freelancerEmail:e.target.value})} placeholder={profile?.email||"alex@studio.co"} /></Field>
        </div>
        <div className="g3" style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:14, marginBottom:14 }}>
          <Field label={t("clientEmail")} hint="optional"><TextInput value={s.meta.clientEmail} onChange={e=>patchMeta({clientEmail:e.target.value})} placeholder="client@co.com" /></Field>
          <Field label={t("taxRate")} hint="optional"><TextInput type="number" value={s.meta.taxRate} onChange={e=>patchMeta({taxRate:e.target.value})} placeholder="0" /></Field>
          <Field label={t("paymentTerms")}><TextInput value={s.meta.paymentTerms} onChange={e=>patchMeta({paymentTerms:e.target.value})} placeholder="Net 30" /></Field>
        </div>
        <Field label="Notes" hint="optional"><TextArea rows={2} value={s.meta.notes} onChange={e=>patchMeta({notes:e.target.value})} placeholder="Bank details, thank you note..." /></Field>
      </Card>
      <Card>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div style={{ display:"flex", gap:28, flexWrap:"wrap" }}>
            <div><div style={{ fontSize:11, color:T.muted, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.05em" }}>Service fee</div><div style={{ fontSize:18, fontWeight:700, color:T.text, fontFamily:T.mono, marginTop:2 }}>{fmtMoney(serviceSubtotal)}</div></div>
            {expenseTotal > 0 && <div><div style={{ fontSize:11, color:T.muted, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.05em" }}>Expenses</div><div style={{ fontSize:18, fontWeight:700, color:T.amber, fontFamily:T.mono, marginTop:2 }}>+{fmtMoney(expenseTotal)}</div></div>}
            {taxRate>0&&<div><div style={{ fontSize:11, color:T.muted, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.05em" }}>{t("tax")} ({taxRate}%)</div><div style={{ fontSize:18, fontWeight:700, color:T.text, fontFamily:T.mono, marginTop:2 }}>{fmtMoney(taxAmount)}</div></div>}
            <div style={{ borderLeft:`1px solid ${T.border}`, paddingLeft:28 }}><div style={{ fontSize:11, color:T.muted, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.05em" }}>{t("totalDue")}</div><div style={{ fontSize:24, fontWeight:800, color:T.text, fontFamily:T.mono, letterSpacing:"-0.02em", marginTop:2 }}>{fmtMoney(total)}</div></div>
          </div>
          <PrimaryBtn onClick={downloadPDF} loading={s.pdfLoading}>{t("downloadInvoice")}</PrimaryBtn>
        </div>
      </Card>
      {s.invoiceHistory?.length>0&&(
        <div style={{ marginTop:18 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12 }}>
            <div style={{ fontSize:15, fontWeight:700, color:T.text, letterSpacing:"-0.01em" }}>{t("invoiceHistory")}</div>
            <Pill tone="lilac">{s.invoiceHistory.length}</Pill>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
            {s.invoiceHistory.map(h=>(
              <div key={h.id} style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 16px", background:T.surface, border:`1px solid ${T.border}`, borderRadius:T.radius }}>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontSize:13.5, fontWeight:600, color:T.text }}>Invoice #{h.number||"—"}</div>
                  <div style={{ fontSize:11, color:T.muted, marginTop:2 }}>{h.date?formatDateLong(h.date):"—"} · {fmtMoney(h.amount)}</div>
                </div>
                <Pill tone={h.status==="paid"?"mint":h.status==="sent"?"blue":"lilac"}>{h.status}</Pill>
                {h.status!=="paid"&&<GhostBtn onClick={()=>patchS({invoiceHistory:s.invoiceHistory.map(inv=>inv.id===h.id?{...inv,status:"paid"}:inv)})} style={{ padding:"6px 12px", fontSize:12 }}>{t("markPaid")}</GhostBtn>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MODULE_COMPONENTS = {
  proposals:    ProposalsModule,
  timer:        TimerModule,
  invoicing:    InvoicingModule,
  contracts:    ContractsModule,
  comms:        CommsModule,
  rate:         RateModule,
  testimonials: TestimonialsModule,
  prioritizer:  PrioritizerModule,
};

// ═══════ APP ═══════
export default function App() {
  const [clients, setClients] = useState(()=>{ try { const saved=localStorage.getItem("stratloom_clients"); if(saved){ const empty=emptyModuleState(); return JSON.parse(saved).map(c=>{ const merged={...empty,...c.modules}; merged.invoicing={...empty.invoicing,...c.modules.invoicing}; merged.contracts={...empty.contracts,...(c.modules.contracts||{})}; return { status:"prospect", reminders:[], contact:{ email:"", phone:"", website:"", notes:"" }, ...c, modules:merged }; }); } } catch {} return []; });
  const [openClientIds, setOpenClientIds] = useState(()=>{ try { const s=localStorage.getItem("stratloom_openClientIds"); if(s) return JSON.parse(s); } catch {} return []; });
  const [activeClientId, setActiveClientId] = useState(()=>{ try { return localStorage.getItem("stratloom_activeClientId")||null; } catch {} return null; });
  const [activeModule, setActiveModule] = useState(()=>{ try { return localStorage.getItem("stratloom_activeModule")||"proposals"; } catch {} return "proposals"; });
  const [view, setView] = useState(()=>{ try { return localStorage.getItem("stratloom_view")||"dashboard"; } catch {} return "dashboard"; });
  const [profile, setProfile] = useState(()=>{ try { const s=localStorage.getItem("stratloom_profile"); if(s) return JSON.parse(s); } catch {} return { name:"", company:"", email:"", logo:null }; });
  const [isDark, setIsDark] = useState(()=>localStorage.getItem("stratloom_theme")==="dark");
  const [theme, setTheme] = useState(()=>localStorage.getItem("stratloom_theme")||"light");
  const [isRTL, setIsRTL] = useState(()=>localStorage.getItem("stratloom_dir")==="rtl");
  const [isAuthenticated, setIsAuthenticated] = useState(()=>isSessionActive());
  const [dataLoading, setDataLoading] = useState(true);
  const [showNewClient, setShowNewClient] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showReminderModal, setShowReminderModal] = useState(false);
  const [showScratchpad, setShowScratchpad] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tourStep, setTourStep] = useState(() => localStorage.getItem("bench_tour_done") ? null : 0);
  const [showPalette, setShowPalette] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [closingIds, setClosingIds] = useState(()=>new Set());
  const [notifyIds, setNotifyIds] = useState(()=>new Set());
  const [toasts, setToasts] = useState([]);
  const [invoicePayload, setInvoicePayload] = useState(null);

  // Persistence
  useEffect(()=>{ try { localStorage.setItem("stratloom_clients",JSON.stringify(clients)); } catch {} },[clients]);

  // Supabase cloud sync — save on clients change (debounced)
  useEffect(() => {
    const timer = setTimeout(async () => {
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (!user) return;
      await supabase.from('user_data').upsert({ id: user.id, data: { clients, openClientIds, activeClientId, activeModule, view, profile }, updated_at: new Date().toISOString() });
    }, 1500);
    return () => clearTimeout(timer);
  }, [clients, profile]);

  // Load from Supabase when user authenticates
  useEffect(() => {
    if (!isAuthenticated) { setDataLoading(false); return; }
    (async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) { setDataLoading(false); return; }
        const { data, error } = await supabase.from('user_data').select('data').eq('id', user.id).single();
        if (!error && data?.data?.clients?.length) {
          const empty = emptyModuleState();
          const migrated = data.data.clients.map(c => {
            const merged = { ...empty, ...c.modules };
            merged.invoicing = { ...empty.invoicing, ...c.modules.invoicing };
            merged.contracts = { ...empty.contracts, ...(c.modules.contracts || {}) };
            return { status: 'prospect', reminders: [], contact: { email: '', phone: '', website: '', notes: '' }, ...c, modules: merged };
          });
          setClients(migrated);
          if (data.data.profile) setProfile(data.data.profile);
        }
      } finally {
        setDataLoading(false);
      }
    })();
  }, [isAuthenticated]);
  useEffect(()=>{ try { localStorage.setItem("stratloom_openClientIds",JSON.stringify(openClientIds)); } catch {} },[openClientIds]);
  useEffect(()=>{ try { if(activeClientId) localStorage.setItem("stratloom_activeClientId",activeClientId); } catch {} },[activeClientId]);
  useEffect(()=>{ try { localStorage.setItem("stratloom_activeModule",activeModule); } catch {} },[activeModule]);
  useEffect(()=>{ try { localStorage.setItem("stratloom_view",view); } catch {} },[view]);
  useEffect(()=>{ try { localStorage.setItem("stratloom_profile",JSON.stringify(profile)); } catch {} },[profile]);
  // Single source of truth for theme — `theme` state drives everything
  useEffect(()=>{ document.documentElement.setAttribute("data-theme",theme); localStorage.setItem("stratloom_theme",theme); },[theme]);
  useEffect(()=>{ document.documentElement.setAttribute("dir",isRTL?"rtl":"ltr"); localStorage.setItem("stratloom_dir",isRTL?"rtl":"ltr"); },[isRTL]);

  // Initialize active client
  useEffect(()=>{ if(!activeClientId&&clients.length) setActiveClientId(clients[0].id); },[clients,activeClientId]);

  const activeClient = clients.find(c=>c.id===activeClientId)||clients[0];
  const openClients = openClientIds.map(id=>clients.find(c=>c.id===id)).filter(Boolean);

  // Toast helpers
  const pushToast = useCallback(toast=>{ const id=`t_${Date.now()}_${Math.random().toString(36).slice(2,5)}`; setToasts(prev=>[...prev,{id,...toast}]); setTimeout(()=>{ setToasts(prev=>prev.map(x=>x.id===id?{...x,leaving:true}:x)); setTimeout(()=>setToasts(prev=>prev.filter(x=>x.id!==id)),220); },toast.duration||2600); },[]);
  const dismissToast = useCallback(id=>{ setToasts(prev=>prev.map(x=>x.id===id?{...x,leaving:true}:x)); setTimeout(()=>setToasts(prev=>prev.filter(x=>x.id!==id)),220); },[]);

  // Global timer heartbeat
  const clientsRef = useRef(clients); clientsRef.current = clients;
  const activeClientIdRef = useRef(activeClientId); activeClientIdRef.current = activeClientId;
  const openClientIdsRef = useRef(openClientIds); openClientIdsRef.current = openClientIds;
  const viewRef = useRef(view); viewRef.current = view;

  useEffect(()=>{
    const id = setInterval(()=>{
      setClients(prev=>{ let touched=false; let completedClientId=null;
        const next=prev.map(c=>{
          const t=c.modules.timer; if(!t.running) return c; touched=true;
          if(t.billingMode==="billable"||t.billingMode==="fixed") return { ...c, modules:{ ...c.modules, timer:{ ...t, elapsedSeconds:t.elapsedSeconds+1 } } };
          if(t.seconds<=1){ if(t.mode==="focus"){ const sess={ id:Date.now()+Math.random(), project:t.currentProject.trim()||"Focus Session", minutes:25, seconds:25*60, time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}), dateISO:new Date().toISOString(), billable:true }; completedClientId=c.id; return { ...c, modules:{ ...c.modules, timer:{ ...t, running:false, mode:"break", seconds:5*60, runStartSeconds:5*60, sessions:[sess,...t.sessions] } } }; } else return { ...c, modules:{ ...c.modules, timer:{ ...t, running:false, mode:"focus", seconds:25*60, runStartSeconds:25*60 } } }; }
          return { ...c, modules:{ ...c.modules, timer:{ ...t, seconds:t.seconds-1 } } };
        });
        if(completedClientId&&(completedClientId!==activeClientIdRef.current||viewRef.current!=="client")){ setNotifyIds(s=>new Set(s).add(completedClientId)); setTimeout(()=>setNotifyIds(s=>{ const n=new Set(s); n.delete(completedClientId); return n; }),2800); }
        if(touched) return next; return prev;
      });
    },1000);
    return ()=>clearInterval(id);
  },[]);

  // Keyboard shortcuts
  useEffect(()=>{
    const isTyping=el=>{ if(!el) return false; const tag=el.tagName; return tag==="INPUT"||tag==="TEXTAREA"||tag==="SELECT"||el.isContentEditable; };
    const onKey=e=>{ const cmd=e.metaKey||e.ctrlKey; const typing=isTyping(e.target);
      if(cmd&&e.key==="k"&&!typing){ e.preventDefault(); setShowPalette(p=>!p); return; }
      if(e.key==="?"&&!typing){ setShowShortcuts(true); return; }
      if(cmd&&e.key==="t"&&!typing){ e.preventDefault(); setShowNewClient(true); return; }
      if(cmd&&e.key==="d"&&!typing){ e.preventDefault(); setView("dashboard"); return; }
      if(cmd&&e.key==="w"&&!typing&&view==="client"&&activeClient){ e.preventDefault(); handleCloseClient(activeClient.id); return; }
      if(cmd&&!typing&&!isNaN(parseInt(e.key))){ const idx=parseInt(e.key)-1; if(idx>=0&&idx<openClients.length){ e.preventDefault(); openClient(openClients[idx].id); } return; }
    };
    window.addEventListener("keydown",onKey);
    return ()=>window.removeEventListener("keydown",onKey);
  },[view,activeClient,openClients]); // handleCloseClient & openClient are stable useCallback refs, defined after this effect

  // First-run toast
  useEffect(()=>{ const firstRun=!localStorage.getItem("stratloom_firstrun"); if(firstRun&&clients.length>0){ localStorage.setItem("stratloom_firstrun","1"); setTimeout(()=>pushToast({ icon:<Keyboard size={14}/>, title:"Tip: ⌘K opens the command palette", duration:4000 }),1500); } },[]);

  // Routing helpers
  const goDashboard = useCallback(()=>setView("dashboard"),[]);
  const openClient = useCallback(id=>{ setOpenClientIds(prev=>prev.includes(id)?prev:[...prev,id]); setActiveClientId(id); setView("client"); },[]);
  const openModule = useCallback(moduleKey=>{ setActiveModule(moduleKey); setView("client"); },[]);

  // Client handlers
  const handleNewClient = useCallback(name=>{ const idx=clients.length%CLIENT_HUES.length; const c=newClient(name,idx); setClients(prev=>[...prev,c]); openClient(c.id); setShowNewClient(false); pushToast({ icon:<UserPlus size={14}/>, title:t("clientCreated"), subtitle:name, hint:"⌘W" }); },[clients.length,openClient,pushToast]);
  const handleCloseClient = useCallback(id=>{ setOpenClientIds(prev=>{ const next=prev.filter(x=>x!==id); return next; }); setClosingIds(s=>new Set(s).add(id)); setTimeout(()=>{ setClosingIds(s=>{ const n=new Set(s); n.delete(id); return n; }); },250); if(activeClientId===id){ const remaining=openClientIds.filter(x=>x!==id); if(remaining.length){ setActiveClientId(remaining[remaining.length-1]); } else { setView("dashboard"); setActiveClientId(null); } } },[activeClientId,openClientIds]);
  const handleDeleteClient = useCallback(clientId=>{ const client=clients.find(c=>c.id===clientId); setClients(prev=>prev.filter(c=>c.id!==clientId)); setOpenClientIds(prev=>prev.filter(x=>x!==clientId)); if(activeClientId===clientId){ const remainingOpen=openClientIds.filter(x=>x!==clientId); if(remainingOpen.length) setActiveClientId(remainingOpen[0]); else { setView("dashboard"); setActiveClientId(null); } } setDeleteTarget(null); if(client) pushToast({ icon:<Trash2 size={14}/>, title:t("clientDeleted"), subtitle:`${client.name} removed permanently.` }); },[clients,activeClientId,openClientIds,pushToast]);
  const handleRenameClient = useCallback((id,name)=>{ setClients(prev=>prev.map(c=>c.id===id?{...c,name}:c)); },[]);
  const handleReorder = useCallback((dragId,targetId,side)=>{ setOpenClientIds(prev=>{ const fromIdx=prev.findIndex(x=>x===dragId); const toIdx=prev.findIndex(x=>x===targetId); if(fromIdx===-1||toIdx===-1||fromIdx===toIdx) return prev; const next=[...prev]; const [moved]=next.splice(fromIdx,1); let insertAt=next.findIndex(x=>x===targetId); if(side==="right") insertAt+=1; next.splice(insertAt,0,moved); return next; }); },[]);

  const patchActiveClient = useCallback(partialModules=>{ setClients(prev=>prev.map(c=>c.id===activeClientId?{ ...c, modules:{ ...c.modules, ...partialModules } }:c)); },[activeClientId]);
  const saveContact = useCallback(contact=>{ setClients(prev=>prev.map(c=>c.id===activeClientId?{...c,contact}:c)); },[activeClientId]);
  const saveScratchpad = useCallback(notes=>{ setClients(prev=>prev.map(c=>c.id===activeClientId?{...c,contact:{...(c.contact||{}),notes}}:c)); },[activeClientId]);
  const addReminder = useCallback(reminder=>{ setClients(prev=>prev.map(c=>c.id===activeClientId?{...c,reminders:[reminder,...(c.reminders||[])]}:c)); },[activeClientId]);
  const dismissReminder = useCallback((clientId,reminderId)=>{ setClients(prev=>prev.map(c=>c.id===clientId?{...c,reminders:(c.reminders||[]).map(r=>r.id===reminderId?{...r,done:true}:r)}:c)); },[]);

  const handleExport = useCallback(()=>{ const data=JSON.stringify({ clients,openClientIds,activeClientId,activeModule,view,profile },null,2); const blob=new Blob([data],{type:"application/json"}); const url=URL.createObjectURL(blob); const a=document.createElement("a"); a.href=url; a.download=`bench-backup-${new Date().toISOString().slice(0,10)}.json`; a.click(); URL.revokeObjectURL(url); pushToast({ icon:<Download size={14}/>, title:t("backupExported") }); },[clients,openClientIds,activeClientId,activeModule,view,profile,pushToast]);
  const handleImport = useCallback(e=>{ const file=e.target.files?.[0]; if(!file) return; const reader=new FileReader(); reader.onload=ev=>{ try { const data=JSON.parse(ev.target.result); if(data.clients) setClients(data.clients); if(data.openClientIds) setOpenClientIds(data.openClientIds); if(data.activeClientId) setActiveClientId(data.activeClientId); if(data.activeModule) setActiveModule(data.activeModule); if(data.view) setView(data.view); if(data.profile) setProfile(data.profile); pushToast({ icon:<Upload size={14}/>, title:t("backupImported") }); } catch { pushToast({ title:t("importFailed") }); } }; reader.readAsText(file); },[pushToast]);

  const ModuleComp = MODULE_COMPONENTS[activeModule] || MODULE_COMPONENTS["proposals"];

  // Block mobile devices
  const isMobileDevice = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
  if (isMobileDevice) {
    return (
      <>
        <GlobalStyles/>
        <div style={{ minHeight:"100vh", background:T.bg, display:"flex", alignItems:"center", justifyContent:"center", padding:32, fontFamily:T.sans, textAlign:"center" }}>
          <div className="fade-up" style={{ maxWidth:360 }}>
            <div style={{ fontSize:48, marginBottom:20 }}>🖥</div>
            <div style={{ fontSize:22, fontWeight:800, letterSpacing:"-0.03em", color:T.text, marginBottom:12 }}>Bench is built for desktop</div>
            <div style={{ fontSize:15, color:T.subtext, lineHeight:1.6, marginBottom:28 }}>Open Bench on your laptop or desktop computer for the full experience — proposals, invoicing, contracts, and more.</div>
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"10px 18px", background:T.bgSoft, borderRadius:999, border:`1px solid ${T.border}`, fontSize:13, color:T.muted, fontWeight:500 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              usebench.ai
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!isAuthenticated) { return (<><GlobalStyles/><LoginScreen onAuthenticated={()=>setIsAuthenticated(true)}/></>); }
  if (dataLoading) { return (<><GlobalStyles/><div style={{ minHeight:"100vh", background:T.bg, display:"flex", alignItems:"center", justifyContent:"center" }}><div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:16 }}><div style={{ width:36, height:36, border:`3px solid ${T.border}`, borderTopColor:T.text, borderRadius:"50%", animation:"spin .7s linear infinite" }}/><div style={{ fontSize:13, color:T.muted, fontFamily:T.sans }}>Loading your workspace…</div></div></div></>); }
  if (clients.length===0) { return (<><GlobalStyles/><OnboardingScreen onNewClient={()=>setShowNewClient(true)}/>{showNewClient&&<NewClientModal onCreate={handleNewClient} onCancel={()=>setShowNewClient(false)}/>}</>); }

  return (
    <>
      <GlobalStyles/>
      <div style={{ height:"100vh", background:theme==="dark"?"#111111":theme==="grey"?"#111111":"#C8BC9E", padding:"10px", display:"flex" }}>
        <div className="app-frame" style={{ flex:1, background:T.bg, borderRadius:20, border:`1px solid ${T.borderStrong}`, boxShadow:"0 8px 40px rgba(60,44,18,0.12)", height:"100%" }}>
        <MobileHeader onOpenMenu={()=>setMobileMenuOpen(true)} clients={clients} onOpenClient={openClient} onDismissReminder={dismissReminder}/>
        <div className={`drawer-backdrop${mobileMenuOpen?" open":""}`} onClick={()=>setMobileMenuOpen(false)}/>
        <Sidebar view={view} activeModule={activeModule} onGoDashboard={goDashboard} onSelectModule={openModule} clients={clients} openClientIds={openClientIds} activeClientId={activeClientId} onSelectClient={openClient} onDeleteClient={c=>setDeleteTarget(c)} onNewClient={()=>setShowNewClient(true)} onOpenSettings={()=>setShowSettings(true)} profile={profile} isDark={theme==="dark"} onToggleDark={()=>{ const next=theme==="dark"?"light":"dark"; setTheme(next); setIsDark(next==="dark"); }} isRTL={isRTL} onToggleRTL={()=>{ const next=!isRTL; localStorage.setItem("stratloom_dir",next?"rtl":"ltr"); document.documentElement.setAttribute("dir",next?"rtl":"ltr"); setIsRTL(next); }} mobileMenuOpen={mobileMenuOpen} onCloseMobile={()=>setMobileMenuOpen(false)}/>
        <div className="main-offset" style={{ marginLeft:244 }}>
          <div className="tabbar-hide" style={{ display:"contents" }}>
            <TabBar view={view} clients={openClients} activeClientId={activeClientId} onSelectClient={openClient} onCloseClient={handleCloseClient} onNewClient={()=>setShowNewClient(true)} onRenameClient={handleRenameClient} onGoDashboard={goDashboard} onReorder={handleReorder} closingIds={closingIds} notifyIds={notifyIds}/>
          </div>
          {view==="dashboard"?(
            <div key="dashboard"><Dashboard clients={clients} onOpenClient={openClient} onNewClient={()=>setShowNewClient(true)} onOpenModule={openModule}/></div>
          ):(
            <>
              <div className="client-header-strip" style={{ padding:"20px 40px 16px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:16, background:T.bgSoft, borderBottom:`1px solid ${T.border}` }}>
                <div style={{ display:"flex", alignItems:"center", gap:14 }}>
                  <div className="letter-avatar" style={{ width:44, height:44, borderRadius:"50%", background:activeClient.hue.bg, color:activeClient.hue.fg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, fontWeight:700, letterSpacing:"-0.01em" }}>{activeClient.name.split(" ").map(n=>n[0]).join("").slice(0,2).toUpperCase()}</div>
                  <div>
                    <h2 style={{ fontSize:24, fontWeight:700, letterSpacing:"-0.025em", color:T.text }}>{activeClient.name}</h2>
                    <div style={{ fontSize:12.5, color:T.muted, marginTop:2, display:"flex", gap:8, alignItems:"center" }}>
                      <button onClick={goDashboard} style={{ color:T.muted, fontSize:12.5, fontWeight:500 }} className="nav-item" onMouseEnter={e=>e.currentTarget.style.color=T.text} onMouseLeave={e=>e.currentTarget.style.color=T.muted}>{t("dashboard")}</button>
                      <span>/</span><span>Client workspace</span><span>·</span>
                      <span>{NAV.find(n=>n.key===activeModule)?.label}</span>
                    </div>
                  </div>
                </div>
                <div className="client-header-actions" style={{ display:"flex", gap:8, alignItems:"center" }}>
                  <StatusSelector client={activeClient} onSetStatus={key=>setClients(prev=>prev.map(c=>c.id===activeClientId?{...c,status:key}:c))}/>
                  {activeClient.modules.timer.running&&<Pill tone="mint"><span className="pulse" style={{ width:6, height:6, borderRadius:"50%", background:"currentColor" }}/>Timer running</Pill>}
                  <GhostBtn onClick={()=>setShowPalette(true)} style={{ padding:"8px 14px", fontSize:12.5 }}><span className="kbd" style={{ fontSize:10, height:16, minWidth:16 }}>⌘K</span>{t("jump")}</GhostBtn>
                  <GhostBtn style={{ padding:"8px 14px", fontSize:12.5 }} onClick={()=>{ const nm=prompt("Rename client:",activeClient.name); if(nm&&nm.trim()) handleRenameClient(activeClient.id,nm.trim()); }}>{t("rename")}</GhostBtn>
                  <GhostBtn style={{ padding:"8px 14px", fontSize:12.5, display:"flex", alignItems:"center", gap:5 }} onClick={()=>setShowContactModal(true)}><AtSign size={12}/> {t("contact")}</GhostBtn>
                  <GhostBtn style={{ padding:"8px 14px", fontSize:12.5, display:"flex", alignItems:"center", gap:5 }} onClick={()=>setShowReminderModal(true)}><BellRing size={12}/> {t("remind")}</GhostBtn>
                  <GhostBtn style={{ padding:"8px 14px", fontSize:12.5, display:"flex", alignItems:"center", gap:5, background: showScratchpad ? T.pillAmberBg : T.surface, color: showScratchpad ? T.pillAmberFg : T.subtext, borderColor: showScratchpad ? T.pillAmberFg+"44" : T.border }} onClick={()=>setShowScratchpad(p=>!p)}>
                    <PenLine size={12}/> Notes{activeClient.contact?.notes ? " •" : ""}
                  </GhostBtn>
                  {activeClient.contact?.email&&<a href={`mailto:${activeClient.contact.email}`} style={{ display:"flex", alignItems:"center", gap:4, fontSize:12, color:T.subtext, padding:"4px 8px", borderRadius:8, textDecoration:"none" }} className="nav-item"><Mail size={11}/> {activeClient.contact.email}</a>}
                  {activeClient.contact?.phone&&<span style={{ display:"flex", alignItems:"center", gap:4, fontSize:12, color:T.subtext }}><Phone size={11}/> {activeClient.contact.phone}</span>}
                </div>
              </div>
              {/* Scratchpad panel */}
              {showScratchpad && (
                <div className="fade-in" style={{ background: T.pillAmberBg, borderBottom: `1px solid ${T.pillAmberFg}33`, padding: "12px 40px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <PenLine size={13} color={T.pillAmberFg} />
                    <span style={{ fontSize: 11.5, fontWeight: 700, color: T.pillAmberFg, letterSpacing: "0.04em", textTransform: "uppercase" }}>Scratchpad</span>
                    <span style={{ fontSize: 11, color: T.pillAmberFg, opacity: 0.7, marginLeft: 4 }}>auto-saves</span>
                  </div>
                  <textarea
                    value={activeClient.contact?.notes || ""}
                    onChange={e => saveScratchpad(e.target.value)}
                    placeholder={`Jot anything about ${activeClient.name} — meeting notes, ideas, reminders, context...`}
                    style={{
                      width: "100%", minHeight: 90, maxHeight: 220,
                      background: "transparent", border: "none", outline: "none",
                      fontSize: 14, lineHeight: 1.6, color: T.text,
                      fontFamily: T.sans, resize: "vertical",
                    }}
                  />
                </div>
              )}

              <main className="module-main" style={{ maxWidth:1280, margin:"0 auto", padding:"32px 48px 80px" }}>
                <ModuleErrorBoundary key={`${activeClientId}-${activeModule}`}>
                  <ModuleComp client={activeClient} patch={patchActiveClient} onOpenInvoice={setInvoicePayload} pushToast={pushToast} profile={profile} allClients={clients}/>
                </ModuleErrorBoundary>
              </main>
            </>
          )}
        </div>

        {showNewClient&&<NewClientModal onCreate={handleNewClient} onCancel={()=>setShowNewClient(false)}/>}
        <ConfirmDeleteModal client={deleteTarget} onConfirm={handleDeleteClient} onCancel={()=>setDeleteTarget(null)}/>
        <InvoiceModal open={!!invoicePayload} onClose={()=>setInvoicePayload(null)} client={invoicePayload?.client||{name:"",modules:{}}} sessions={invoicePayload?.sessions||[]} hourlyRate={invoicePayload?.hourlyRate||0} rangeLabel={invoicePayload?.rangeLabel||""} initialMeta={invoicePayload?.client?.modules?.rate?.invoiceMeta||{}} onSaveMeta={()=>{}} pushToast={pushToast} profile={profile}/>
        {showSettings&&<SettingsModal profile={profile} onSave={p=>setProfile(p)} onClose={()=>setShowSettings(false)} onExport={handleExport} onImport={handleImport} onStartTour={()=>{ localStorage.removeItem("bench_tour_done"); setTourStep(0); }} currentTheme={theme} onSetTheme={t2=>{ setTheme(t2); setIsDark(t2==="dark"); }}/>}
        {tourStep !== null && (
          <TourOverlay
            step={tourStep}
            onNext={() => setTourStep(s => s + 1)}
            onPrev={() => setTourStep(s => Math.max(0, s - 1))}
            onClose={() => { localStorage.setItem("bench_tour_done", "1"); setTourStep(null); }}
          />
        )}
        {showContactModal&&activeClient&&<ClientContactModal client={activeClient} onSave={saveContact} onClose={()=>setShowContactModal(false)}/>}
        {showReminderModal&&activeClient&&<ReminderModal client={activeClient} onSave={addReminder} onClose={()=>setShowReminderModal(false)}/>}
        <CommandPalette open={showPalette} onClose={()=>setShowPalette(false)} clients={clients} activeClientId={activeClientId} onOpenClient={openClient} onOpenModule={openModule} onNewClient={()=>setShowNewClient(true)} onGoDashboard={goDashboard} onShowShortcuts={()=>setShowShortcuts(true)}/>
        <ShortcutsHelp open={showShortcuts} onClose={()=>setShowShortcuts(false)}/>
        <ToastStack toasts={toasts} onDismiss={dismissToast}/>

        <div className="bell-fixed" style={{ position:"fixed", top:16, right:20, zIndex:100 }}>
          <NotificationBell clients={clients} onOpenClient={openClient} onDismissReminder={dismissReminder}/>
        </div>
        <button onClick={()=>setShowShortcuts(true)} title="Keyboard shortcuts (?)" className="help-fixed nav-item" style={{ position:"fixed", bottom:20, left:260, width:36, height:36, borderRadius:"50%", background:T.surface, border:`1px solid ${T.border}`, boxShadow:T.shadowCard, color:T.subtext, display:"flex", alignItems:"center", justifyContent:"center", fontSize:15, fontWeight:700, zIndex:50, transition:"transform .15s ease, box-shadow .15s ease" }} onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow=T.shadowLg; }} onMouseLeave={e=>{ e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow=T.shadowCard; }}>?</button>
        </div>
      </div>
    </>
  );
}

// ═══════ MODULE 2: TIMER ═══════