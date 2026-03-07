"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

// Language names in their own language (for the popup).
const LANG_NAMES: Record<string, string> = {
  en: "English",
  es: "Espanol",
  zh: "中文",
  ar: "العربية",
  hi: "हिन्दी",
  fr: "Francais",
  ht: "Kreyol Ayisyen",
  pt: "Portugues",
  ko: "한국어",
  vi: "Tieng Viet",
  tl: "Tagalog",
};

// "Would you like to switch to [language]?" in each language
const SWITCH_PROMPTS: Record<string, string> = {
  en: "Would you like to switch to English?",
  es: "Desea cambiar a Espanol?",
  zh: "您想切换到中文吗？",
  ar: "هل تريد التبديل إلى العربية؟",
  hi: "क्या आप हिन्दी में बदलना चाहेंगे?",
  fr: "Souhaitez-vous passer au Francais?",
  ht: "Eske ou vle chanje an Kreyol?",
  pt: "Deseja mudar para Portugues?",
  ko: "한국어로 변경하시겠습니까?",
  vi: "Ban co muon chuyen sang Tieng Viet khong?",
  tl: "Gusto mo bang lumipat sa Tagalog?",
};

const SWITCH_YES: Record<string, string> = {
  en: "Yes", es: "Si", zh: "是", ar: "نعم", hi: "हां", fr: "Oui",
  ht: "Wi", pt: "Sim", ko: "예", vi: "Co", tl: "Oo",
};

const SWITCH_NO: Record<string, string> = {
  en: "No", es: "No", zh: "否", ar: "لا", hi: "नहीं", fr: "Non",
  ht: "Non", pt: "Nao", ko: "아니오", vi: "Khong", tl: "Hindi",
};

const translations: Record<string, Record<string, string>> = {
  en: {
    newChat: "New Chat",
    chats: "Chats",
    uploadFile: "Upload a File",
    files: "Files",
    wallet: "Wallet",
    logIn: "Log in",
    signUp: "Sign up",
    logOut: "Log out",
    expand: "Expand",
    describeYourSituation: "Describe your situation...",
    listening: "Listening...",
    speak: "Speak",
    stop: "Stop",
    analyzingCases: "Analyzing cases...",
    searchPlaceholder: "Describe your immigration situation to find relevant cases",
    allFiles: "All Files",
    filesStored: "files stored on IPFS",
    searchByName: "Search by name, type, or location...",
    viewCase: "View Case",
    noFilesMatch: "No files match",
    clearSearch: "Clear search",
    noFiles: "No files in the database yet.",
    uploadFirstCase: "Upload the First Case",
    disclaimer: "Project utilizes real case data, not legal advice. Always verify with a qualified immigration attorney.",
    upload: "Upload",
    findCasesLike: "Find Cases Like",
    yours: "Yours.",
    ownTheKnowledge: "Own the Knowledge.",
    heroDescription: "Real case outcomes from real immigrants stored on tamper-proof blockchain infrastructure. Cite any case by its IPFS CID. Nobody can alter or delete it.",
  },
  es: {
    newChat: "Nuevo Chat",
    chats: "Chats",
    uploadFile: "Subir Archivo",
    files: "Archivos",
    wallet: "Billetera",
    logIn: "Iniciar sesion",
    signUp: "Registrarse",
    logOut: "Cerrar sesion",
    expand: "Expandir",
    describeYourSituation: "Describa su situacion...",
    listening: "Escuchando...",
    speak: "Hablar",
    stop: "Parar",
    analyzingCases: "Analizando casos...",
    searchPlaceholder: "Describa su situacion migratoria para encontrar casos relevantes",
    allFiles: "Todos los Archivos",
    filesStored: "archivos almacenados en IPFS",
    searchByName: "Buscar por nombre, tipo o ubicacion...",
    viewCase: "Ver Caso",
    noFilesMatch: "No hay archivos que coincidan",
    clearSearch: "Limpiar busqueda",
    noFiles: "No hay archivos en la base de datos.",
    uploadFirstCase: "Subir el Primer Caso",
    disclaimer: "Este proyecto utiliza datos reales, no es consejo legal. Siempre verifique con un abogado de inmigracion calificado.",
    upload: "Subir",
    findCasesLike: "Encuentra Casos Como",
    yours: "El Tuyo.",
    ownTheKnowledge: "Apropiese del Conocimiento.",
    heroDescription: "Resultados reales de casos de inmigrantes reales almacenados en infraestructura blockchain a prueba de manipulaciones.",
  },
  zh: {
    newChat: "新对话",
    chats: "对话",
    uploadFile: "上传文件",
    files: "文件",
    wallet: "钱包",
    logIn: "登录",
    signUp: "注册",
    logOut: "退出",
    expand: "展开",
    describeYourSituation: "描述您的情况...",
    listening: "正在听...",
    speak: "说话",
    stop: "停止",
    analyzingCases: "分析案例中...",
    searchPlaceholder: "描述您的移民情况以查找相关案例",
    allFiles: "所有文件",
    filesStored: "个文件存储在IPFS上",
    searchByName: "按名称、类型或地点搜索...",
    viewCase: "查看案例",
    noFilesMatch: "没有匹配的文件",
    clearSearch: "清除搜索",
    noFiles: "数据库中还没有文件。",
    uploadFirstCase: "上传第一个案例",
    disclaimer: "本项目使用真实案例数据，不构成法律建议。请务必咨询合格的移民律师。",
    upload: "上传",
    findCasesLike: "找到类似",
    yours: "你的案例。",
    ownTheKnowledge: "掌握知识。",
    heroDescription: "来自真实移民的真实案例结果，存储在防篡改的区块链基础设施上。",
  },
  ar: {
    newChat: "محادثة جديدة",
    chats: "المحادثات",
    uploadFile: "رفع ملف",
    files: "الملفات",
    wallet: "المحفظة",
    logIn: "تسجيل الدخول",
    signUp: "إنشاء حساب",
    logOut: "تسجيل الخروج",
    expand: "توسيع",
    describeYourSituation: "...صف وضعك",
    listening: "...جارٍ الاستماع",
    speak: "تحدث",
    stop: "توقف",
    analyzingCases: "...جارٍ تحليل القضايا",
    searchPlaceholder: "صف وضعك في الهجرة للعثور على قضايا ذات صلة",
    allFiles: "جميع الملفات",
    filesStored: "ملفات مخزنة على IPFS",
    searchByName: "...البحث بالاسم أو النوع أو الموقع",
    viewCase: "عرض القضية",
    noFilesMatch: "لا توجد ملفات مطابقة",
    clearSearch: "مسح البحث",
    noFiles: "لا توجد ملفات في قاعدة البيانات بعد.",
    uploadFirstCase: "رفع أول قضية",
    disclaimer: "يستخدم هذا المشروع بيانات حقيقية وليس نصيحة قانونية. تحقق دائمًا مع محامي هجرة مؤهل.",
    upload: "رفع",
    findCasesLike: "ابحث عن قضايا مثل",
    yours: "قضيتك.",
    ownTheKnowledge: "امتلك المعرفة.",
    heroDescription: "نتائج قضايا حقيقية من مهاجرين حقيقيين مخزنة على بنية بلوكتشين مقاومة للتلاعب.",
  },
  hi: {
    newChat: "नई चैट",
    chats: "चैट्स",
    uploadFile: "फ़ाइल अपलोड करें",
    files: "फ़ाइलें",
    wallet: "वॉलेट",
    logIn: "लॉग इन",
    signUp: "साइन अप",
    logOut: "लॉग आउट",
    expand: "विस्तार",
    describeYourSituation: "अपनी स्थिति का वर्णन करें...",
    listening: "सुन रहे हैं...",
    speak: "बोलें",
    stop: "रुकें",
    analyzingCases: "मामलों का विश्लेषण हो रहा है...",
    searchPlaceholder: "प्रासंगिक मामले खोजने के लिए अपनी आव्रजन स्थिति का वर्णन करें",
    allFiles: "सभी फ़ाइलें",
    filesStored: "फ़ाइलें IPFS पर संग्रहीत",
    searchByName: "नाम, प्रकार या स्थान से खोजें...",
    viewCase: "मामला देखें",
    noFilesMatch: "कोई मिलान नहीं",
    clearSearch: "खोज साफ़ करें",
    noFiles: "डेटाबेस में अभी कोई फ़ाइल नहीं है।",
    uploadFirstCase: "पहला मामला अपलोड करें",
    disclaimer: "यह परियोजना वास्तविक डेटा का उपयोग करती है, कानूनी सलाह नहीं। हमेशा योग्य आव्रजन वकील से सत्यापित करें।",
    upload: "अपलोड",
    findCasesLike: "ऐसे मामले खोजें",
    yours: "आपके जैसे।",
    ownTheKnowledge: "ज्ञान अपनाएं।",
    heroDescription: "वास्तविक आप्रवासियों के वास्तविक मामले के परिणाम छेड़छाड़-रोधी ब्लॉकचेन अवसंरचना पर संग्रहीत।",
  },
  fr: {
    newChat: "Nouveau Chat",
    chats: "Discussions",
    uploadFile: "Importer un fichier",
    files: "Fichiers",
    wallet: "Portefeuille",
    logIn: "Se connecter",
    signUp: "S'inscrire",
    logOut: "Se deconnecter",
    expand: "Developper",
    describeYourSituation: "Decrivez votre situation...",
    listening: "Ecoute en cours...",
    speak: "Parler",
    stop: "Arreter",
    analyzingCases: "Analyse des cas...",
    searchPlaceholder: "Decrivez votre situation d'immigration pour trouver des cas pertinents",
    allFiles: "Tous les Fichiers",
    filesStored: "fichiers stockes sur IPFS",
    searchByName: "Rechercher par nom, type ou lieu...",
    viewCase: "Voir le Cas",
    noFilesMatch: "Aucun fichier correspondant",
    clearSearch: "Effacer la recherche",
    noFiles: "Aucun fichier dans la base de donnees.",
    uploadFirstCase: "Importer le Premier Cas",
    disclaimer: "Ce projet utilise des donnees reelles, pas des conseils juridiques. Verifiez toujours aupres d'un avocat en immigration qualifie.",
    upload: "Importer",
    findCasesLike: "Trouvez des Cas Comme",
    yours: "Le Votre.",
    ownTheKnowledge: "Appropriez-vous le Savoir.",
    heroDescription: "Des resultats reels de cas d'immigrants reels stockes sur une infrastructure blockchain inviolable.",
  },
  ht: {
    newChat: "Nouvo Chat",
    chats: "Diskisyon",
    uploadFile: "Telechaje Fichye",
    files: "Fichye",
    wallet: "Bous",
    logIn: "Konekte",
    signUp: "Enskri",
    logOut: "Dekonekte",
    expand: "Elaji",
    describeYourSituation: "Dekri sitiyasyon ou...",
    listening: "Ap tande...",
    speak: "Pale",
    stop: "Kanpe",
    analyzingCases: "Ap analize ka yo...",
    searchPlaceholder: "Dekri sitiyasyon imigrasyon ou pou jwenn ka ki enpotan",
    allFiles: "Tout Fichye",
    filesStored: "fichye estoke sou IPFS",
    searchByName: "Cheche pa non, tip, oswa kote...",
    viewCase: "We Ka",
    noFilesMatch: "Pa gen fichye ki matche",
    clearSearch: "Efase rechech",
    noFiles: "Pa gen fichye nan baz done a anko.",
    uploadFirstCase: "Telechaje Premye Ka a",
    disclaimer: "Pwoje sa a itilize done reyel, se pa konsey legal. Toujou verifye ak yon avoka imigrasyon kalifye.",
    upload: "Telechaje",
    findCasesLike: "Jwenn Ka Tankou",
    yours: "Pa Ou.",
    ownTheKnowledge: "Posede Konesans lan.",
    heroDescription: "Rezilta reyel ka imigran reyel estoke sou enfrastrikti blockchain ki pa ka chanje.",
  },
  pt: {
    newChat: "Novo Chat",
    chats: "Conversas",
    uploadFile: "Enviar Arquivo",
    files: "Arquivos",
    wallet: "Carteira",
    logIn: "Entrar",
    signUp: "Cadastrar",
    logOut: "Sair",
    expand: "Expandir",
    describeYourSituation: "Descreva sua situacao...",
    listening: "Ouvindo...",
    speak: "Falar",
    stop: "Parar",
    analyzingCases: "Analisando casos...",
    searchPlaceholder: "Descreva sua situacao migratoria para encontrar casos relevantes",
    allFiles: "Todos os Arquivos",
    filesStored: "arquivos armazenados no IPFS",
    searchByName: "Pesquisar por nome, tipo ou local...",
    viewCase: "Ver Caso",
    noFilesMatch: "Nenhum arquivo corresponde",
    clearSearch: "Limpar pesquisa",
    noFiles: "Nenhum arquivo no banco de dados ainda.",
    uploadFirstCase: "Enviar o Primeiro Caso",
    disclaimer: "Este projeto utiliza dados reais, nao e aconselhamento juridico. Sempre verifique com um advogado de imigracao qualificado.",
    upload: "Enviar",
    findCasesLike: "Encontre Casos Como",
    yours: "O Seu.",
    ownTheKnowledge: "Domine o Conhecimento.",
    heroDescription: "Resultados reais de casos de imigrantes reais armazenados em infraestrutura blockchain a prova de adulteracao.",
  },
  ko: {
    newChat: "새 채팅",
    chats: "채팅",
    uploadFile: "파일 업로드",
    files: "파일",
    wallet: "지갑",
    logIn: "로그인",
    signUp: "회원가입",
    logOut: "로그아웃",
    expand: "펼치기",
    describeYourSituation: "상황을 설명하세요...",
    listening: "듣는 중...",
    speak: "말하기",
    stop: "중지",
    analyzingCases: "사례 분석 중...",
    searchPlaceholder: "관련 사례를 찾기 위해 이민 상황을 설명하세요",
    allFiles: "모든 파일",
    filesStored: "개 파일이 IPFS에 저장됨",
    searchByName: "이름, 유형 또는 위치로 검색...",
    viewCase: "사례 보기",
    noFilesMatch: "일치하는 파일 없음",
    clearSearch: "검색 지우기",
    noFiles: "데이터베이스에 파일이 없습니다.",
    uploadFirstCase: "첫 번째 사례 업로드",
    disclaimer: "이 프로젝트는 실제 데이터를 사용하며 법적 조언이 아닙니다. 항상 자격을 갖춘 이민 변호사와 확인하세요.",
    upload: "업로드",
    findCasesLike: "비슷한 사례",
    yours: "찾기.",
    ownTheKnowledge: "지식을 소유하세요.",
    heroDescription: "실제 이민자의 실제 사례 결과가 변조 방지 블록체인 인프라에 저장됩니다.",
  },
  vi: {
    newChat: "Cuoc tro chuyen moi",
    chats: "Tro chuyen",
    uploadFile: "Tai len tep",
    files: "Tep",
    wallet: "Vi",
    logIn: "Dang nhap",
    signUp: "Dang ky",
    logOut: "Dang xuat",
    expand: "Mo rong",
    describeYourSituation: "Mo ta tinh huong cua ban...",
    listening: "Dang nghe...",
    speak: "Noi",
    stop: "Dung",
    analyzingCases: "Dang phan tich...",
    searchPlaceholder: "Mo ta tinh trang nhap cu cua ban de tim cac vu an lien quan",
    allFiles: "Tat ca Tep",
    filesStored: "tep duoc luu tru tren IPFS",
    searchByName: "Tim theo ten, loai hoac dia diem...",
    viewCase: "Xem Vu an",
    noFilesMatch: "Khong co tep nao phu hop",
    clearSearch: "Xoa tim kiem",
    noFiles: "Chua co tep nao trong co so du lieu.",
    uploadFirstCase: "Tai len Vu an Dau tien",
    disclaimer: "Du an nay su dung du lieu thuc, khong phai tu van phap ly. Luon xac minh voi luat su di tru co trinh do.",
    upload: "Tai len",
    findCasesLike: "Tim Vu an Nhu",
    yours: "Cua Ban.",
    ownTheKnowledge: "Lam Chu Kien Thuc.",
    heroDescription: "Ket qua vu an thuc tu nhung nguoi nhap cu thuc duoc luu tru tren ha tang blockchain chong gia mao.",
  },
  tl: {
    newChat: "Bagong Chat",
    chats: "Mga Chat",
    uploadFile: "Mag-upload ng File",
    files: "Mga File",
    wallet: "Pitaka",
    logIn: "Mag-log in",
    signUp: "Mag-sign up",
    logOut: "Mag-log out",
    expand: "Palawakin",
    describeYourSituation: "Ilarawan ang iyong sitwasyon...",
    listening: "Nakikinig...",
    speak: "Magsalita",
    stop: "Itigil",
    analyzingCases: "Sinusuri ang mga kaso...",
    searchPlaceholder: "Ilarawan ang iyong sitwasyon sa imigrasyon upang makahanap ng mga kaugnay na kaso",
    allFiles: "Lahat ng File",
    filesStored: "mga file na nakaimbak sa IPFS",
    searchByName: "Maghanap sa pangalan, uri, o lokasyon...",
    viewCase: "Tingnan ang Kaso",
    noFilesMatch: "Walang tumutugmang file",
    clearSearch: "I-clear ang paghahanap",
    noFiles: "Wala pang mga file sa database.",
    uploadFirstCase: "I-upload ang Unang Kaso",
    disclaimer: "Gumagamit ang proyektong ito ng totoong data, hindi legal na payo. Palaging kumonsulta sa isang kwalipikadong abogado sa imigrasyon.",
    upload: "I-upload",
    findCasesLike: "Maghanap ng mga Kaso Tulad ng",
    yours: "Sa Iyo.",
    ownTheKnowledge: "Pag-ariin ang Kaalaman.",
    heroDescription: "Mga totoong resulta ng kaso mula sa totoong imigrante na nakaimbak sa blockchain na hindi mababago.",
  },
};

// Placeholder cycling texts.
export const CYCLING_PLACEHOLDERS = [
  { lang: "en", text: "Describe your immigration situation to find relevant cases" },
  { lang: "es", text: "Describa su situacion migratoria para encontrar casos relevantes" },
  { lang: "zh", text: "描述您的移民情况以查找相关案例" },
  { lang: "ar", text: "صف وضعك في الهجرة للعثور على قضايا ذات صلة" },
  { lang: "hi", text: "प्रासंगिक मामले खोजने के लिए अपनी आव्रजन स्थिति का वर्णन करें" },
  { lang: "fr", text: "Decrivez votre situation d'immigration pour trouver des cas pertinents" },
  { lang: "ht", text: "Dekri sitiyasyon imigrasyon ou pou jwenn ka ki enpotan" },
  { lang: "pt", text: "Descreva sua situacao migratoria para encontrar casos relevantes" },
  { lang: "ko", text: "관련 사례를 찾기 위해 이민 상황을 설명하세요" },
  { lang: "vi", text: "Mo ta tinh trang nhap cu cua ban de tim cac vu an lien quan" },
  { lang: "tl", text: "Ilarawan ang iyong sitwasyon sa imigrasyon upang makahanap ng mga kaugnay na kaso" },
];

type PendingSwitch = { lang: string } | null;

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  promptLanguageSwitch: (lang: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  promptLanguageSwitch: () => {},
  t: (key) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLang] = useState("en");
  const [pendingSwitch, setPendingSwitch] = useState<PendingSwitch>(null);

  useEffect(() => {
    const saved = localStorage.getItem("immivault-lang");
    if (saved && translations[saved]) {
      setLang(saved);
    }
  }, []);

  const setLanguage = useCallback((lang: string) => {
    const code = lang.toLowerCase().slice(0, 2);
    if (translations[code]) {
      setLang(code);
      localStorage.setItem("immivault-lang", code);
    }
  }, []);

  const promptLanguageSwitch = useCallback((lang: string) => {
    const code = lang.toLowerCase().slice(0, 2);
    if (code === language || !translations[code]) return;
    setPendingSwitch({ lang: code });
  }, [language]);

  const handleAccept = useCallback(() => {
    if (pendingSwitch) {
      setLang(pendingSwitch.lang);
      localStorage.setItem("immivault-lang", pendingSwitch.lang);
      setPendingSwitch(null);
    }
  }, [pendingSwitch]);

  const handleDismiss = useCallback(() => {
    setPendingSwitch(null);
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[language]?.[key] ?? translations.en?.[key] ?? key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, promptLanguageSwitch, t }}>
      {children}
      {pendingSwitch && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 animate-fade-in">
          <div className="bg-[#1C2030] border border-[#363C4A] rounded-[14px] p-6 max-w-sm mx-4 shadow-floating animate-fade-in-up text-center">
            <p className="text-[#e8e8f0] text-base mb-1">
              {SWITCH_PROMPTS[pendingSwitch.lang] ?? `Switch to ${LANG_NAMES[pendingSwitch.lang]}?`}
            </p>
            <p className="text-[#6B7280] text-xs mb-5">
              {LANG_NAMES[pendingSwitch.lang]}
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={handleDismiss}
                className="px-5 py-2 rounded-lg border border-[#363C4A] text-[#9CA3AF] hover:text-[#e8e8f0] hover:border-[#6B7280] transition text-sm"
              >
                {SWITCH_NO[pendingSwitch.lang] ?? "No"}
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2 rounded-lg bg-[#D4AD5A] hover:bg-[#E0BD6A] text-[#121620] font-semibold transition text-sm"
              >
                {SWITCH_YES[pendingSwitch.lang] ?? "Yes"}
              </button>
            </div>
          </div>
        </div>
      )}
    </LanguageContext.Provider>
  );
};
