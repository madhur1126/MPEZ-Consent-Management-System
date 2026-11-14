(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/login/Loader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobalLoader",
    ()=>GlobalLoader,
    "LoadingSpinner",
    ()=>LoadingSpinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$login$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/login/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/login/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/login/hooks.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function LoadingSpinner({ className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "aria-hidden": "true",
        className: `mpez-spinner ${className}`
    }, void 0, false, {
        fileName: "[project]/components/login/Loader.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = LoadingSpinner;
function GlobalLoader({ label, visible = true }) {
    _s();
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["messages"][lang];
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(visible);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalLoader.useEffect": ()=>{
            if (visible) {
                setMounted(true);
                return;
            }
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                setMounted(false);
                return;
            }
            const timer = window.setTimeout({
                "GlobalLoader.useEffect.timer": ()=>setMounted(false)
            }["GlobalLoader.useEffect.timer"], 220);
            return ({
                "GlobalLoader.useEffect": ()=>window.clearTimeout(timer)
            })["GlobalLoader.useEffect"];
        }
    }["GlobalLoader.useEffect"], [
        visible
    ]);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        role: "status",
        "aria-live": "polite",
        "aria-label": label ?? t.loading,
        className: `mpez-loader fixed inset-0 z-[100] grid min-h-screen place-items-center overflow-hidden px-5 text-center ${visible ? '' : 'mpez-loader-exit'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mpez-loader-content flex w-full max-w-sm flex-col items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mpez-loader-logo grid h-24 w-24 place-items-center rounded-[28px] p-3 sm:h-28 sm:w-28",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$login$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                        className: "h-full w-full object-contain"
                    }, void 0, false, {
                        fileName: "[project]/components/login/Loader.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/login/Loader.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingSpinner, {
                    className: "mt-8 h-11 w-11 border-[3px]"
                }, void 0, false, {
                    fileName: "[project]/components/login/Loader.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "mt-6 text-xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-2xl",
                    children: [
                        "MPEZ ",
                        t.system
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/login/Loader.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm font-medium leading-6 text-slate-600 dark:text-blue-100/80 sm:text-base",
                    children: t.tagline
                }, void 0, false, {
                    fileName: "[project]/components/login/Loader.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "sr-only",
                    children: label ?? t.loading
                }, void 0, false, {
                    fileName: "[project]/components/login/Loader.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/login/Loader.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/login/Loader.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(GlobalLoader, "dGxug8IN2X6t9I5xnYT4Gw8aqHQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c1 = GlobalLoader;
var _c, _c1;
__turbopack_context__.k.register(_c, "LoadingSpinner");
__turbopack_context__.k.register(_c1, "GlobalLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/login/Logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BRAND",
    ()=>BRAND,
    "Logo",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
;
;
const BRAND = {
    name: 'MP East Zone'
};
function Logo({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
        src: "/mpez-logo.png",
        alt: `${BRAND.name} logo`,
        width: 768,
        height: 768,
        className: className,
        priority: true
    }, void 0, false, {
        fileName: "[project]/components/login/Logo.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/login/hooks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLang",
    ()=>useLang,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
function read(key) {
    try {
        return localStorage.getItem(key);
    } catch  {
        return null;
    }
}
function write(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch  {
    /* storage can be blocked; the choice just won't persist */ }
}
function useTheme() {
    _s();
    const [theme, setThemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('light');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTheme.useEffect": ()=>{
            const saved = read('login-theme');
            if (saved === 'light' || saved === 'dark') {
                setThemeState(saved);
            } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setThemeState('dark');
            }
        }
    }["useTheme.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTheme.useEffect": ()=>{
            document.documentElement.classList.toggle('dark', theme === 'dark');
        }
    }["useTheme.useEffect"], [
        theme
    ]);
    const setTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTheme.useCallback[setTheme]": (next)=>{
            setThemeState(next);
            write('login-theme', next);
        }
    }["useTheme.useCallback[setTheme]"], []);
    return {
        theme,
        setTheme
    };
}
_s(useTheme, "QZNaUARg4Uoib9xQfGG5CCr0H7Y=");
function useLang() {
    _s1();
    const [lang, setLangState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLang.useEffect": ()=>{
            const saved = read('login-lang');
            if (saved === 'en' || saved === 'hi') setLangState(saved);
        }
    }["useLang.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLang.useEffect": ()=>{
            document.documentElement.lang = lang;
        }
    }["useLang.useEffect"], [
        lang
    ]);
    const setLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLang.useCallback[setLang]": (next)=>{
            setLangState(next);
            write('login-lang', next);
        }
    }["useLang.useCallback[setLang]"], []);
    return {
        lang,
        setLang
    };
}
_s1(useLang, "ewL4Wpw0sj4Xtx3xM+thNfvoYbU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/login/i18n.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "messages",
    ()=>messages
]);
const messages = {
    en: {
        system: 'Consent Management System',
        desc: 'A secure platform to manage your consent for communication, service updates and important notifications.',
        login: 'Login',
        loginSub: 'Login using your registered mobile number to proceed.',
        mobile: 'Mobile Number',
        mobilePlaceholder: 'Enter 10-digit mobile number',
        sendOtp: 'Send OTP',
        verifyTitle: 'Verify OTP',
        otpLead: (n)=>`Enter the 6-digit code sent to +91 ${n}.`,
        otpLabel: 'Enter OTP',
        changeNumber: 'Change number',
        invalidMobile: 'Enter a valid 10-digit mobile number.',
        requestFailed: 'Could not send the OTP. Please try again.',
        otpSent: 'OTP sent successfully!',
        invalidOtp: 'Invalid OTP. Please try again.',
        demoOtp: 'Demo OTP (Testing Only):',
        resendOtp: 'Resend OTP',
        resendIn: 'Resend OTP in',
        sendingOtp: 'Sending...',
        verifyingOtp: 'Verifying...',
        resendFailed: 'Could not resend the OTP. Please try again.',
        portalName: 'Consent Portal',
        tagline: 'Empowering Consumers. Ensuring Transparency.',
        officialPortal: 'Official DISCOM Consumer Portal',
        loading: 'Loading',
        language: 'Language',
        theme: 'Theme',
        light: 'Light theme',
        dark: 'Dark theme'
    },
    hi: {
        system: 'सहमति प्रबंधन प्रणाली',
        desc: 'संचार, सेवा अपडेट और महत्वपूर्ण सूचनाओं के लिए अपनी सहमति प्रबंधित करने का एक सुरक्षित मंच।',
        login: 'लॉगिन',
        loginSub: 'आगे बढ़ने के लिए अपने पंजीकृत मोबाइल नंबर से लॉगिन करें।',
        mobile: 'मोबाइल नंबर',
        mobilePlaceholder: '10 अंकों का मोबाइल नंबर दर्ज करें',
        sendOtp: 'OTP भेजें',
        verifyTitle: 'OTP सत्यापित करें',
        otpLead: (n)=>`+91 ${n} पर भेजा गया 6 अंकों का कोड दर्ज करें।`,
        otpLabel: 'OTP दर्ज करें',
        changeNumber: 'नंबर बदलें',
        invalidMobile: 'कृपया 10 अंकों का सही मोबाइल नंबर दर्ज करें।',
        requestFailed: 'OTP नहीं भेजा जा सका। कृपया फिर से प्रयास करें।',
        otpSent: 'OTP सफलतापूर्वक भेजा गया!',
        invalidOtp: 'OTP गलत है। कृपया फिर से प्रयास करें।',
        demoOtp: 'डेमो OTP (केवल परीक्षण):',
        resendOtp: 'OTP फिर से भेजें',
        resendIn: 'OTP फिर से भेजें',
        sendingOtp: 'भेजा जा रहा है...',
        verifyingOtp: 'सत्यापित किया जा रहा है...',
        resendFailed: 'OTP फिर से नहीं भेजा जा सका। कृपया फिर से प्रयास करें।',
        portalName: 'सहमति पोर्टल',
        tagline: 'उपभोक्ताओं को सशक्त बनाना। पारदर्शिता सुनिश्चित करना।',
        officialPortal: 'आधिकारिक DISCOM उपभोक्ता पोर्टल',
        loading: 'लोड हो रहा है',
        language: 'भाषा',
        theme: 'थीम',
        light: 'लाइट थीम',
        dark: 'डार्क थीम'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1q0c1h8yywscp._.js.map