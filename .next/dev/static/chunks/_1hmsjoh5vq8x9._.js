(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$ConsumerDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/ConsumerDashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$demoSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/login/demoSession.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dashboard$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dashboard/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/login/hooks.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function DashboardPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [consumerMobile, setConsumerMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$demoSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readDemoSession"])();
            if (session) {
                setConsumerMobile(session.mobile);
            } else {
                router.replace('/login');
            }
        }
    }["DashboardPage.useEffect"], [
        router
    ]);
    if (!consumerMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "grid min-h-screen place-items-center bg-slate-50 px-5 text-center text-slate-700 dark:bg-slate-950 dark:text-slate-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dashboard$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"][lang].loginRequired
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$ConsumerDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsumerDashboard"], {
        consumerMobile: consumerMobile
    }, consumerMobile, false, {
        fileName: "[project]/app/dashboard/page.tsx",
        lineNumber: 32,
        columnNumber: 10
    }, this);
}
_s(DashboardPage, "l+owl1ZlrjqMVDQSpvYVHoDcJZk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = DashboardPage;
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/ConsentCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsentCard",
    ()=>ConsentCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$DashboardIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/DashboardIcon.tsx [app-client] (ecmascript)");
'use client';
;
;
function ConsentCard({ question, lang, copy, value, onChange, disabled = false }) {
    const choices = [
        {
            value: 'yes',
            label: copy.agree
        },
        {
            value: 'no',
            label: copy.decline
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 dark:border-slate-700 dark:bg-slate-900 sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "grid h-10 w-10 flex-none place-items-center rounded-xl bg-[#EAF3FF] text-[#0B3F91] dark:bg-blue-950 dark:text-blue-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$DashboardIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardIcon"], {
                            name: question.icon
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/ConsentCard.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/ConsentCard.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-blue-50 px-2 text-xs font-bold text-[#0B3F91] dark:bg-blue-950 dark:text-blue-200",
                                        children: question.id
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/ConsentCard.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-bold text-slate-900 dark:text-white",
                                        children: question.category[lang]
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/ConsentCard.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/ConsentCard.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300 sm:text-[15px]",
                                children: question.question[lang]
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/ConsentCard.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/ConsentCard.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/ConsentCard.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                disabled: disabled,
                className: "mt-5 grid gap-3 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                        className: "sr-only",
                        children: question.category[lang]
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/ConsentCard.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    choices.map((choice)=>{
                        const selected = value === choice.value;
                        const positive = choice.value === 'yes';
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: `flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border px-3 py-2.5 text-sm font-semibold transition ${selected ? positive ? 'border-blue-500 bg-blue-50 text-[#0B3F91] ring-1 ring-blue-200 dark:border-blue-400 dark:bg-blue-950/60 dark:text-blue-200' : 'border-slate-500 bg-slate-100 text-slate-800 ring-1 ring-slate-300 dark:border-slate-400 dark:bg-slate-800 dark:text-slate-100' : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'} ${disabled ? 'cursor-default' : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "radio",
                                    name: `consent-${question.id}`,
                                    value: choice.value,
                                    checked: selected,
                                    onChange: ()=>onChange?.(choice.value),
                                    className: "h-4 w-4 accent-[#0B3F91]"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/ConsentCard.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: choice.label
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/ConsentCard.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, choice.value, true, {
                            fileName: "[project]/components/dashboard/ConsentCard.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/ConsentCard.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/ConsentCard.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = ConsentCard;
var _c;
__turbopack_context__.k.register(_c, "ConsentCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/ConsentConfirmationModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsentConfirmationModal",
    ()=>ConsentConfirmationModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dashboard$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dashboard/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$ConsentCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/ConsentCard.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function ConsentConfirmationModal({ lang, copy, answers, readOnly, error, saving, onClose, onConfirm }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-end justify-center bg-slate-950/60 p-0 backdrop-blur-sm sm:items-center sm:p-5",
        onMouseDown: (event)=>{
            if (event.target === event.currentTarget && !saving) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "consent-modal-title",
            className: "max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-t-3xl bg-white shadow-2xl dark:bg-slate-900 sm:rounded-3xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "border-b border-slate-200 px-5 py-5 dark:border-slate-700 sm:px-7",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "consent-modal-title",
                            className: "text-xl font-bold text-slate-950 dark:text-white",
                            children: readOnly ? copy.viewSubmitted : copy.modalTitle
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/ConsentConfirmationModal.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-sm text-slate-600 dark:text-slate-300",
                            children: copy.modalDescription
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/ConsentConfirmationModal.tsx",
                            lineNumber: 44,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dashboard/ConsentConfirmationModal.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[calc(92vh-170px)] space-y-3 overflow-y-auto p-4 sm:p-6",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dashboard$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentQuestions"].map((question)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$ConsentCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsentCard"], {
                                question: question,
                                lang: lang,
                                copy: copy,
                                value: answers[question.id - 1] ?? null,
                                disabled: true
                            }, question.id, false, {
                                fileName: "[project]/components/dashboard/ConsentConfirmationModal.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            role: "alert",
                            className: "rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800 dark:bg-red-950 dark:text-red-200",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/ConsentConfirmationModal.tsx",
                            lineNumber: 57,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dashboard/ConsentConfirmationModal.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "flex flex-col-reverse gap-3 border-t border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950 sm:flex-row sm:justify-end sm:px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            disabled: saving,
                            className: "min-h-11 rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-60 dark:border-slate-600 dark:bg-slate-900 dark:text-white",
                            children: readOnly ? copy.close : copy.goBack
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/ConsentConfirmationModal.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onConfirm,
                            disabled: saving,
                            className: "min-h-11 rounded-xl bg-[#0B3F91] px-5 text-sm font-semibold text-white hover:bg-[#168BEE] disabled:opacity-60",
                            children: saving ? '…' : copy.confirmSubmit
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/ConsentConfirmationModal.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dashboard/ConsentConfirmationModal.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/ConsentConfirmationModal.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/dashboard/ConsentConfirmationModal.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = ConsentConfirmationModal;
var _c;
__turbopack_context__.k.register(_c, "ConsentConfirmationModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/ConsumerDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsumerDashboard",
    ()=>ConsumerDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$login$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/login/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/login/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/login/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$demoSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/login/demoSession.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dashboard$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dashboard/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$ConsentCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/ConsentCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$ConsentConfirmationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/ConsentConfirmationModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$DashboardIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/DashboardIcon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
const submissionStorageKey = (mobile)=>`mpez-demo-consent-submission_${mobile}`;
function isSubmission(value) {
    if (!value || typeof value !== 'object') return false;
    const record = value;
    return Array.isArray(record.answers) && record.answers.length === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dashboard$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentQuestions"].length && record.answers.every((answer)=>answer === 'yes' || answer === 'no') && typeof record.submittedAt === 'string' && !Number.isNaN(Date.parse(record.submittedAt));
}
function PersonalInformation({ lang, copy, details }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-labelledby": "consumer-info-title",
        className: "rounded-3xl border border-blue-100 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-end justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold uppercase tracking-wide text-[#168BEE]",
                                children: copy.personalDetails
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "consumer-info-title",
                                className: "mt-1 text-2xl font-bold text-slate-950 dark:text-white",
                                children: copy.consumerInfo
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-[#0B3F91] dark:bg-blue-950 dark:text-blue-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$DashboardIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardIcon"], {
                                name: "lock",
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            copy.secureInfo
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                className: "mt-6 grid gap-3 sm:grid-cols-2",
                children: details.map((detail)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-0 items-center gap-3 rounded-2xl border border-blue-100 bg-[#F5F9FF] p-3.5 dark:border-slate-700 dark:bg-slate-800/70",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grid h-10 w-10 flex-none place-items-center rounded-xl bg-white text-[#0B3F91] shadow-sm dark:bg-slate-900 dark:text-blue-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$DashboardIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardIcon"], {
                                    name: detail.icon
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-xs font-medium text-slate-500 dark:text-slate-400",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dashboard$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getText"])(detail.label, lang)
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "mt-0.5 break-words text-sm font-bold text-slate-900 dark:text-slate-100",
                                        children: detail.value
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            'verified' in detail && detail.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex flex-none items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$DashboardIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardIcon"], {
                                        name: "check",
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: copy.verified
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, this)
                        ]
                    }, detail.label.en, true, {
                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c = PersonalInformation;
function ConsentProgress({ answered, total, copy }) {
    const pending = total - answered;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-labelledby": "summary-title",
        className: "rounded-3xl border border-blue-100 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                id: "summary-title",
                className: "text-xl font-bold text-slate-950 dark:text-white",
                children: copy.summary
            }, void 0, false, {
                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid grid-cols-3 gap-3",
                children: [
                    {
                        label: copy.total,
                        value: total
                    },
                    {
                        label: copy.answered,
                        value: `${answered}/${total}`
                    },
                    {
                        label: copy.pending,
                        value: pending
                    }
                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl bg-[#F3F8FF] p-3 text-center dark:bg-slate-800 sm:p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl font-extrabold text-[#0B3F91] dark:text-blue-300 sm:text-2xl",
                                children: item.value
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs font-medium text-slate-600 dark:text-slate-300 sm:text-sm",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.label, true, {
                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 flex justify-between text-xs font-semibold text-slate-600 dark:text-slate-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: copy.answered
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    answered,
                                    "/",
                                    total
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                lineNumber: 111,
                                columnNumber: 39
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "progressbar",
                        "aria-label": copy.answered,
                        "aria-valuemin": 0,
                        "aria-valuemax": total,
                        "aria-valuenow": answered,
                        className: "h-2.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full rounded-full bg-gradient-to-r from-[#0B3F91] to-[#168BEE] transition-[width]",
                            style: {
                                width: `${answered / total * 100}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c1 = ConsentProgress;
function ConsumerDashboard({ consumerMobile }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { lang, setLang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const copy = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dashboard$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"][lang];
    const loginCopy = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["messages"][lang];
    const consumerDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dashboard$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConsumerDetails"])(consumerMobile);
    const consumerName = consumerDetails[0].value;
    const consumerNumber = consumerDetails[1].value;
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ConsumerDashboard.useState": ()=>Array(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dashboard$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentQuestions"].length).fill(null)
    }["ConsumerDashboard.useState"]);
    const [confirmationChecked, setConfirmationChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [submission, setSubmission] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [submissionError, setSubmissionError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const answered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ConsumerDashboard.useMemo[answered]": ()=>answers.filter({
                "ConsumerDashboard.useMemo[answered]": (answer)=>answer !== null
            }["ConsumerDashboard.useMemo[answered]"]).length
    }["ConsumerDashboard.useMemo[answered]"], [
        answers
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConsumerDashboard.useEffect": ()=>{
            try {
                const saved = window.localStorage.getItem(submissionStorageKey(consumerMobile));
                setAnswers(Array(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dashboard$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentQuestions"].length).fill(null));
                setConfirmationChecked(false);
                setSubmission(null);
                if (!saved) return;
                const parsed = JSON.parse(saved);
                if (!isSubmission(parsed)) {
                    setSubmissionError(copy.storageError);
                    return;
                }
                setSubmission(parsed);
            } catch  {
                setSubmissionError(copy.storageError);
            }
        }
    }["ConsumerDashboard.useEffect"], [
        consumerMobile,
        copy.storageError
    ]);
    function logout() {
        try {
            window.localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$demoSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEMO_AUTH_KEY"]);
        } finally{
            router.replace('/login');
        }
    }
    function updateAnswer(index, answer) {
        setAnswers((current)=>current.map((value, i)=>i === index ? answer : value));
        setSubmissionError(null);
    }
    function openConfirmation() {
        if (answered !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dashboard$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentQuestions"].length || !confirmationChecked) {
            setSubmissionError(copy.checkAll);
            return;
        }
        setSubmissionError(null);
        setModal('confirm');
    }
    function confirmSubmission() {
        const completeAnswers = answers.filter((answer)=>answer !== null);
        if (completeAnswers.length !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dashboard$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentQuestions"].length) {
            setSubmissionError(copy.checkAll);
            return;
        }
        const nextSubmission = {
            answers: completeAnswers,
            submittedAt: new Date().toISOString()
        };
        setSaving(true);
        setSubmissionError(null);
        try {
            window.localStorage.setItem(submissionStorageKey(consumerMobile), JSON.stringify(nextSubmission));
            setSubmission(nextSubmission);
            setModal(null);
        } catch  {
            setSubmissionError(copy.storageError);
        } finally{
            setSaving(false);
        }
    }
    const formattedDate = submission ? new Intl.DateTimeFormat(lang === 'hi' ? 'hi-IN' : 'en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short'
    }).format(new Date(submission.submittedAt)) : '';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "login-root login-sky min-h-screen text-slate-900 antialiased",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$login$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                t: loginCopy,
                lang: lang,
                onLangChange: setLang,
                theme: theme,
                onThemeChange: setTheme
            }, void 0, false, {
                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "mx-auto w-full max-w-[1320px] px-4 pb-14 pt-8 sm:px-6 lg:pt-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-white/90 p-4 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/90",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "grid h-11 w-11 place-items-center rounded-full bg-[#EAF3FF] text-[#0B3F91] dark:bg-blue-950 dark:text-blue-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$DashboardIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardIcon"], {
                                            name: "user",
                                            className: "h-6 w-6"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                            lineNumber: 219,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-slate-900 dark:text-white",
                                        children: copy.greeting
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: logout,
                                className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-red-950",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$DashboardIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardIcon"], {
                                        name: "logout"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, this),
                                    copy.logout
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    submission ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "aria-labelledby": "success-title",
                        className: "mx-auto max-w-3xl rounded-3xl border border-emerald-200 bg-white p-6 text-center shadow-lg dark:border-emerald-900 dark:bg-slate-900 sm:p-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$DashboardIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardIcon"], {
                                    name: "check",
                                    className: "h-9 w-9"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                lineNumber: 231,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                id: "success-title",
                                className: "mt-5 text-2xl font-extrabold text-slate-950 dark:text-white sm:text-3xl",
                                children: copy.successTitle
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto mt-2 max-w-xl text-slate-600 dark:text-slate-300",
                                children: copy.successMessage
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                lineNumber: 235,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-7 grid gap-3 text-left sm:grid-cols-2",
                                children: [
                                    [
                                        copy.consumerName,
                                        consumerName
                                    ],
                                    [
                                        copy.consumerNumber,
                                        consumerNumber
                                    ],
                                    [
                                        copy.submittedAt,
                                        formattedDate
                                    ],
                                    [
                                        copy.submissionStatus,
                                        copy.submitted
                                    ]
                                ].map(([label, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl bg-[#F3F8FF] p-4 dark:bg-slate-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-medium text-slate-500 dark:text-slate-400",
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                                lineNumber: 244,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 break-words text-sm font-bold text-slate-900 dark:text-white",
                                                children: value
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                                lineNumber: 245,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, label, true, {
                                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                        lineNumber: 243,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                lineNumber: 236,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setModal('view'),
                                className: "mt-7 min-h-12 rounded-xl bg-[#0B3F91] px-6 text-sm font-bold text-white transition hover:bg-[#168BEE]",
                                children: copy.viewSubmitted
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                lineNumber: 249,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                        lineNumber: 230,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-bold uppercase tracking-[0.16em] text-[#168BEE]",
                                        children: copy.greeting
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                        lineNumber: 256,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "mt-2 text-3xl font-extrabold tracking-tight text-[#0B3F91] dark:text-blue-200 sm:text-4xl",
                                        children: copy.welcomeTitle
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 max-w-4xl text-base leading-7 text-slate-700 dark:text-slate-300",
                                        children: copy.welcomeDescription
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                        lineNumber: 258,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                lineNumber: 255,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "note",
                                className: "mb-7 flex items-start gap-3 rounded-2xl border border-blue-200 bg-[#EAF3FF] p-4 text-sm font-medium leading-6 text-[#0B3F91] dark:border-blue-900 dark:bg-blue-950/70 dark:text-blue-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$DashboardIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardIcon"], {
                                        name: "shield",
                                        className: "mt-0.5 h-5 w-5 flex-none"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                        lineNumber: 262,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: copy.privacy
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                        lineNumber: 263,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                lineNumber: 261,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PersonalInformation, {
                                lang: lang,
                                copy: copy,
                                details: consumerDetails
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                "aria-labelledby": "consent-title",
                                className: "mt-9",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                id: "consent-title",
                                                className: "text-2xl font-extrabold text-[#0B3F91] dark:text-blue-200 sm:text-3xl",
                                                children: copy.consentTitle
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                                lineNumber: 270,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 max-w-4xl text-sm leading-6 text-slate-700 dark:text-slate-300 sm:text-base",
                                                children: copy.consentDescription
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                                lineNumber: 271,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 lg:grid-cols-2",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dashboard$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentQuestions"].map((question, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$ConsentCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsentCard"], {
                                                question: question,
                                                lang: lang,
                                                copy: copy,
                                                value: answers[index],
                                                onChange: (answer)=>updateAnswer(index, answer)
                                            }, question.id, false, {
                                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                                lineNumber: 275,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                        lineNumber: 273,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "mt-8 grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConsentProgress, {
                                        answered: answered,
                                        total: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dashboard$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentQuestions"].length,
                                        copy: copy
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-3xl border border-blue-100 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-7",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: confirmationChecked,
                                                        onChange: (event)=>{
                                                            setConfirmationChecked(event.target.checked);
                                                            setSubmissionError(null);
                                                        },
                                                        className: "mt-1 h-5 w-5 flex-none accent-[#0B3F91]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: copy.confirmation
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                                lineNumber: 290,
                                                columnNumber: 17
                                            }, this),
                                            submissionError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                role: "alert",
                                                className: "mt-3 text-sm font-medium text-red-700 dark:text-red-300",
                                                children: submissionError
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                                lineNumber: 302,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: answered !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dashboard$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentQuestions"].length || !confirmationChecked,
                                                onClick: openConfirmation,
                                                className: "mt-5 min-h-12 w-full rounded-xl bg-[#0B3F91] px-5 text-sm font-bold text-white transition hover:bg-[#168BEE] disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 dark:disabled:bg-slate-700 dark:disabled:text-slate-400",
                                                children: copy.submit
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                                lineNumber: 303,
                                                columnNumber: 17
                                            }, this),
                                            submissionError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "sr-only",
                                                children: copy.checkAll
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                                lineNumber: 311,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                        lineNumber: 289,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                                lineNumber: 287,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                        lineNumber: 254,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            modal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$ConsentConfirmationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsentConfirmationModal"], {
                lang: lang,
                copy: copy,
                answers: modal === 'view' && submission ? submission.answers : answers,
                readOnly: modal === 'view',
                error: modal === 'confirm' ? submissionError : null,
                saving: saving,
                onClose: ()=>{
                    setModal(null);
                    setSubmissionError(null);
                },
                onConfirm: confirmSubmission
            }, void 0, false, {
                fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
                lineNumber: 319,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/ConsumerDashboard.tsx",
        lineNumber: 213,
        columnNumber: 5
    }, this);
}
_s(ConsumerDashboard, "sXJYwENtPcPg+p4pgw9dALKpUpo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c2 = ConsumerDashboard;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "PersonalInformation");
__turbopack_context__.k.register(_c1, "ConsentProgress");
__turbopack_context__.k.register(_c2, "ConsumerDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/DashboardIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardIcon",
    ()=>DashboardIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const icons = {
    user: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "8",
                r: "3.5"
            }, void 0, false, {
                fileName: "[project]/components/dashboard/DashboardIcon.tsx",
                lineNumber: 5,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 20c.5-3.2 3.2-5 7-5s6.5 1.8 7 5"
            }, void 0, false, {
                fileName: "[project]/components/dashboard/DashboardIcon.tsx",
                lineNumber: 5,
                columnNumber: 44
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/DashboardIcon.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    hash: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 9h14M4 15h14M10 3 8 21M16 3l-2 18"
        }, void 0, false, {
            fileName: "[project]/components/dashboard/DashboardIcon.tsx",
            lineNumber: 6,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/dashboard/DashboardIcon.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    phone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm3 14h4"
    }, void 0, false, {
        fileName: "[project]/components/dashboard/DashboardIcon.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    shield: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"
            }, void 0, false, {
                fileName: "[project]/components/dashboard/DashboardIcon.tsx",
                lineNumber: 8,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m9 12 2 2 4-4"
            }, void 0, false, {
                fileName: "[project]/components/dashboard/DashboardIcon.tsx",
                lineNumber: 8,
                columnNumber: 69
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/DashboardIcon.tsx",
        lineNumber: 8,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    file: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"
            }, void 0, false, {
                fileName: "[project]/components/dashboard/DashboardIcon.tsx",
                lineNumber: 9,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 2v6h6M8 13h8M8 17h8"
            }, void 0, false, {
                fileName: "[project]/components/dashboard/DashboardIcon.tsx",
                lineNumber: 9,
                columnNumber: 82
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/DashboardIcon.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    mail: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "5",
                width: "18",
                height: "14",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/components/dashboard/DashboardIcon.tsx",
                lineNumber: 10,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m3 7 9 6 9-6"
            }, void 0, false, {
                fileName: "[project]/components/dashboard/DashboardIcon.tsx",
                lineNumber: 10,
                columnNumber: 61
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/DashboardIcon.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    location: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
            }, void 0, false, {
                fileName: "[project]/components/dashboard/DashboardIcon.tsx",
                lineNumber: 11,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "10",
                r: "2.5"
            }, void 0, false, {
                fileName: "[project]/components/dashboard/DashboardIcon.tsx",
                lineNumber: 11,
                columnNumber: 74
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/DashboardIcon.tsx",
        lineNumber: 11,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    message: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8Z"
        }, void 0, false, {
            fileName: "[project]/components/dashboard/DashboardIcon.tsx",
            lineNumber: 12,
            columnNumber: 14
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/dashboard/DashboardIcon.tsx",
        lineNumber: 12,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    card: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "5",
                width: "20",
                height: "14",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/components/dashboard/DashboardIcon.tsx",
                lineNumber: 13,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 10h20M6 15h4"
            }, void 0, false, {
                fileName: "[project]/components/dashboard/DashboardIcon.tsx",
                lineNumber: 13,
                columnNumber: 61
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/DashboardIcon.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    landmark: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m3 9 9-6 9 6M4 10h16M5 20h14M7 10v8M12 10v8M17 10v8M3 21h18"
        }, void 0, false, {
            fileName: "[project]/components/dashboard/DashboardIcon.tsx",
            lineNumber: 14,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/dashboard/DashboardIcon.tsx",
        lineNumber: 14,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    wrench: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 0 6.4-6.4L14 12l-2-2Z"
        }, void 0, false, {
            fileName: "[project]/components/dashboard/DashboardIcon.tsx",
            lineNumber: 15,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/dashboard/DashboardIcon.tsx",
        lineNumber: 15,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    zap: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "m13 2-3 8H5l6 12 3-8h5L13 2Z"
    }, void 0, false, {
        fileName: "[project]/components/dashboard/DashboardIcon.tsx",
        lineNumber: 16,
        columnNumber: 8
    }, ("TURBOPACK compile-time value", void 0)),
    headset: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 14v-3a9 9 0 0 1 18 0v3"
            }, void 0, false, {
                fileName: "[project]/components/dashboard/DashboardIcon.tsx",
                lineNumber: 17,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 14h2v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Zm14 0h-2v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z"
            }, void 0, false, {
                fileName: "[project]/components/dashboard/DashboardIcon.tsx",
                lineNumber: 17,
                columnNumber: 52
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/DashboardIcon.tsx",
        lineNumber: 17,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    bell: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"
        }, void 0, false, {
            fileName: "[project]/components/dashboard/DashboardIcon.tsx",
            lineNumber: 18,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/dashboard/DashboardIcon.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    check: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "m5 12 4 4L19 6"
    }, void 0, false, {
        fileName: "[project]/components/dashboard/DashboardIcon.tsx",
        lineNumber: 19,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    lock: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4",
                y: "10",
                width: "16",
                height: "11",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/components/dashboard/DashboardIcon.tsx",
                lineNumber: 20,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 10V7a4 4 0 1 1 8 0v3"
            }, void 0, false, {
                fileName: "[project]/components/dashboard/DashboardIcon.tsx",
                lineNumber: 20,
                columnNumber: 62
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/DashboardIcon.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    logout: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 17l5-5-5-5M15 12H3"
            }, void 0, false, {
                fileName: "[project]/components/dashboard/DashboardIcon.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6"
            }, void 0, false, {
                fileName: "[project]/components/dashboard/DashboardIcon.tsx",
                lineNumber: 21,
                columnNumber: 48
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/DashboardIcon.tsx",
        lineNumber: 21,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0))
};
function DashboardIcon({ name, className = 'h-5 w-5' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        className: className,
        children: icons[name]
    }, void 0, false, {
        fileName: "[project]/components/dashboard/DashboardIcon.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = DashboardIcon;
var _c;
__turbopack_context__.k.register(_c, "DashboardIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/login/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$login$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/login/Logo.tsx [app-client] (ecmascript)");
'use client';
;
;
const LANGS = [
    {
        value: 'en',
        label: 'English'
    },
    {
        value: 'hi',
        label: 'हिन्दी'
    }
];
function Header({ t, lang, onLangChange, theme, onThemeChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "relative z-30 bg-login-header",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex w-full max-w-[1320px] flex-wrap items-center justify-between gap-x-6 gap-y-4 px-4 py-3.5 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-0 items-center gap-3 sm:gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$login$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                                className: "h-[46px] w-[46px] flex-none sm:h-[58px] sm:w-[58px]"
                            }, void 0, false, {
                                fileName: "[project]/components/login/Header.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-x-2 gap-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl font-extrabold leading-none tracking-tight text-login-ink sm:text-[27px]",
                                                children: "MPEZ"
                                            }, void 0, false, {
                                                fileName: "[project]/components/login/Header.tsx",
                                                lineNumber: 44,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-md bg-blue-100 px-2 py-1 text-[10px] font-bold leading-none text-blue-800 sm:text-xs",
                                                children: "CMS"
                                            }, void 0, false, {
                                                fileName: "[project]/components/login/Header.tsx",
                                                lineNumber: 49,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl font-bold leading-none tracking-tight text-login-ink sm:text-[27px]",
                                                children: "Consent Portal"
                                            }, void 0, false, {
                                                fileName: "[project]/components/login/Header.tsx",
                                                lineNumber: 53,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/login/Header.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1.5 text-[11px] font-medium leading-tight text-login-ink/70 sm:text-[14px]",
                                        children: "Empowering Consumers. Ensuring Transparency."
                                    }, void 0, false, {
                                        fileName: "[project]/components/login/Header.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/login/Header.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/login/Header.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full items-center justify-between gap-3 sm:w-auto sm:gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "group",
                                "aria-label": t.language,
                                className: "inline-flex rounded-full bg-login-seg p-[5px] shadow-[0_6px_18px_-8px_rgba(8,48,120,0.45)]",
                                children: LANGS.map(({ value, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        lang: value,
                                        "aria-pressed": lang === value,
                                        onClick: ()=>onLangChange(value),
                                        className: `min-h-10 rounded-full px-3.5 py-2 text-[15px] font-semibold leading-snug transition-colors sm:px-[18px] sm:text-[17px] ${lang === value ? 'bg-login-seg-active text-login-seg-active-ink' : 'text-login-seg-ink'}`,
                                        children: label
                                    }, value, false, {
                                        fileName: "[project]/components/login/Header.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/login/Header.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "group",
                                "aria-label": t.theme,
                                className: "inline-flex rounded-full bg-[linear-gradient(135deg,var(--track-a),var(--track-b))] p-[5px] shadow-[0_6px_18px_-8px_rgba(8,48,120,0.55)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-label": t.light,
                                        "aria-pressed": theme === 'light',
                                        onClick: ()=>onThemeChange('light'),
                                        className: `grid h-10 w-[46px] place-items-center rounded-full sm:w-[54px] ${theme === 'light' ? 'bg-login-thumb text-login-sun' : 'text-login-moon'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            className: "h-[22px] w-[22px]",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            "aria-hidden": "true",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "4.2",
                                                    fill: "currentColor"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/login/Header.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5.3 5.3l1.7 1.7M17 17l1.7 1.7M18.7 5.3 17 7M7 17l-1.7 1.7"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/login/Header.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/login/Header.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/login/Header.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-label": t.dark,
                                        "aria-pressed": theme === 'dark',
                                        onClick: ()=>onThemeChange('dark'),
                                        className: `grid h-10 w-[46px] place-items-center rounded-full text-login-moon sm:w-[54px] ${theme === 'dark' ? 'bg-login-thumb' : ''}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            className: "h-[22px] w-[22px]",
                                            fill: "currentColor",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a.6.6 0 0 0-.8-.7A9.6 9.6 0 1 0 21.2 15.4a.6.6 0 0 0-.7-.8Z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/login/Header.tsx",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/login/Header.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/login/Header.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/login/Header.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/login/Header.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/login/Header.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                "aria-hidden": "true",
                viewBox: "0 0 1600 34",
                preserveAspectRatio: "none",
                className: "pointer-events-none absolute -bottom-6 left-0 block h-6 w-full lg:-bottom-[33px] lg:h-[34px]",
                style: {
                    fill: 'var(--header-bg)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M0 0H1600V10C1320 -2 940 36 560 22 300 12 120 30 0 34Z"
                }, void 0, false, {
                    fileName: "[project]/components/login/Header.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/login/Header.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/login/Header.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
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
    name: 'MPEZ'
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
"[project]/lib/dashboard/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "consentQuestions",
    ()=>consentQuestions,
    "dashboardCopy",
    ()=>dashboardCopy,
    "getConsumerDetails",
    ()=>getConsumerDetails,
    "getText",
    ()=>getText
]);
const consumerProfiles = {
    '9876543210': {
        name: 'Rahul Sharma',
        number: '1234567890',
        ivrs: '9876500001',
        aadhaarSuffix: '1234',
        panPrefix: 'ABCDE',
        email: 'rahul****@gmail.com',
        address: 'Jabalpur, Madhya Pradesh'
    },
    '9123456780': {
        name: 'Ananya Verma',
        number: '1234567891',
        ivrs: '9123400001',
        aadhaarSuffix: '5678',
        panPrefix: 'FGHIJ',
        email: 'ananya****@gmail.com',
        address: 'Indore, Madhya Pradesh'
    }
};
function getConsumerDetails(mobile) {
    const profile = consumerProfiles[mobile] ?? {
        name: 'Consumer',
        number: `MPEZ${mobile.slice(-6)}`,
        ivrs: `IVRS${mobile.slice(-6)}`,
        aadhaarSuffix: '0000',
        panPrefix: 'XXXXX',
        email: 'consumer****@example.com',
        address: 'Madhya Pradesh'
    };
    const maskedMobile = `${mobile.slice(0, 5)}XXXXX`;
    return [
        {
            label: {
                en: 'Consumer Name',
                hi: 'उपभोक्ता का नाम'
            },
            value: profile.name,
            icon: 'user'
        },
        {
            label: {
                en: 'Consumer Number',
                hi: 'उपभोक्ता संख्या'
            },
            value: profile.number,
            icon: 'hash'
        },
        {
            label: {
                en: 'IVRS Number',
                hi: 'IVRS नंबर'
            },
            value: profile.ivrs,
            icon: 'phone',
            verified: true
        },
        {
            label: {
                en: 'Mobile Number',
                hi: 'मोबाइल नंबर'
            },
            value: maskedMobile,
            icon: 'phone',
            verified: true
        },
        {
            label: {
                en: 'Aadhaar Number',
                hi: 'आधार नंबर'
            },
            value: `XXXX-XXXX-${profile.aadhaarSuffix}`,
            icon: 'shield'
        },
        {
            label: {
                en: 'PAN Number',
                hi: 'पैन नंबर'
            },
            value: `${profile.panPrefix}XXXXF`,
            icon: 'file'
        },
        {
            label: {
                en: 'Email Address',
                hi: 'ईमेल पता'
            },
            value: profile.email,
            icon: 'mail',
            verified: true
        },
        {
            label: {
                en: 'Service Address',
                hi: 'सेवा का पता'
            },
            value: profile.address,
            icon: 'location'
        }
    ];
}
const consentQuestions = [
    {
        id: 1,
        category: {
            en: 'SMS Gateway',
            hi: 'SMS गेटवे'
        },
        question: {
            en: 'Do you agree to share your IVRS Number and Mobile Number with our authorized SMS Gateway to receive monthly electricity bills, payment receipts, and power outage alerts?',
            hi: 'क्या आप मासिक बिजली बिल, भुगतान रसीदें और बिजली कटौती अलर्ट प्राप्त करने के लिए अपना IVRS नंबर और मोबाइल नंबर हमारे अधिकृत SMS गेटवे के साथ साझा करने की सहमति देते हैं?'
        },
        icon: 'message'
    },
    {
        id: 2,
        category: {
            en: 'Payment Gateway',
            hi: 'भुगतान गेटवे'
        },
        question: {
            en: 'Do you agree to share your IVRS Number, Name, Mobile Number, and Masked PAN (only where legally required) with our authorized Payment Gateway to process online bill payments?',
            hi: 'क्या आप ऑनलाइन बिल भुगतान के लिए अपना IVRS नंबर, नाम, मोबाइल नंबर और मास्क किया हुआ PAN (केवल जहाँ कानूनन आवश्यक हो) हमारे अधिकृत भुगतान गेटवे के साथ साझा करने की सहमति देते हैं?'
        },
        icon: 'card'
    },
    {
        id: 3,
        category: {
            en: 'Government Schemes',
            hi: 'सरकारी योजनाएँ'
        },
        question: {
            en: 'Do you agree to share the minimum required information with authorized government scheme administrators for electricity subsidy and solar scheme eligibility verification?',
            hi: 'क्या आप बिजली सब्सिडी और सौर योजना की पात्रता सत्यापन के लिए न्यूनतम आवश्यक जानकारी अधिकृत सरकारी योजना प्रशासकों के साथ साझा करने की सहमति देते हैं?'
        },
        icon: 'landmark'
    },
    {
        id: 4,
        category: {
            en: 'Field Technicians',
            hi: 'फील्ड तकनीशियन'
        },
        question: {
            en: 'Do you agree to share your Name, Mobile Number, and Premises Address with authorized field technicians for smart meter installation, maintenance, and fault repair?',
            hi: 'क्या आप स्मार्ट मीटर स्थापना, रखरखाव और खराबी की मरम्मत के लिए अपना नाम, मोबाइल नंबर और परिसर का पता अधिकृत फील्ड तकनीशियनों के साथ साझा करने की सहमति देते हैं?'
        },
        icon: 'wrench'
    },
    {
        id: 5,
        category: {
            en: 'Connection Services',
            hi: 'कनेक्शन सेवाएँ'
        },
        question: {
            en: 'Do you agree to share your Consumer Number and contact details with authorized personnel to process electricity connection requests, name corrections, and load changes?',
            hi: 'क्या आप बिजली कनेक्शन अनुरोध, नाम सुधार और लोड परिवर्तन के लिए अपनी उपभोक्ता संख्या और संपर्क विवरण अधिकृत कर्मचारियों के साथ साझा करने की सहमति देते हैं?'
        },
        icon: 'zap'
    },
    {
        id: 6,
        category: {
            en: 'Grievance Management',
            hi: 'शिकायत निवारण'
        },
        question: {
            en: 'Do you agree to share your Name, IVRS Number, Mobile Number, and Complaint Details with authorized grievance-handling personnel to resolve electricity-related complaints?',
            hi: 'क्या आप बिजली संबंधी शिकायतों के समाधान के लिए अपना नाम, IVRS नंबर, मोबाइल नंबर और शिकायत का विवरण अधिकृत शिकायत निवारण कर्मचारियों के साथ साझा करने की सहमति देते हैं?'
        },
        icon: 'headset'
    },
    {
        id: 7,
        category: {
            en: 'Email Notifications',
            hi: 'ईमेल सूचनाएँ'
        },
        question: {
            en: 'Do you agree to share your registered Email Address and Consumer Number with our authorized email service provider to receive digital bills, payment receipts, and service notifications?',
            hi: 'क्या आप डिजिटल बिल, भुगतान रसीदें और सेवा सूचनाएँ प्राप्त करने के लिए अपना पंजीकृत ईमेल पता और उपभोक्ता संख्या हमारे अधिकृत ईमेल सेवा प्रदाता के साथ साझा करने की सहमति देते हैं?'
        },
        icon: 'mail'
    },
    {
        id: 8,
        category: {
            en: 'Payment Alerts',
            hi: 'भुगतान अलर्ट'
        },
        question: {
            en: 'Do you agree to share your Consumer Number, Mobile Number, and payment status with our authorized notification service to receive bill due-date reminders and payment alerts?',
            hi: 'क्या आप बिल की नियत तारीख के रिमाइंडर और भुगतान अलर्ट प्राप्त करने के लिए अपनी उपभोक्ता संख्या, मोबाइल नंबर और भुगतान स्थिति हमारी अधिकृत सूचना सेवा के साथ साझा करने की सहमति देते हैं?'
        },
        icon: 'bell'
    }
];
const dashboardCopy = {
    en: {
        greeting: 'Welcome, Consumer!',
        welcomeTitle: 'Welcome to Your Consent Dashboard',
        welcomeDescription: 'Manage your personal information and control how your consumer data is shared with authorized departments and service providers.',
        privacy: 'Your privacy matters. You have full control of your consent preferences.',
        consumerInfo: 'Consumer Information',
        personalDetails: 'Personal Details',
        secureInfo: 'Protected consumer data',
        verified: 'Verified',
        consentTitle: 'Your Consent Preferences',
        consentDescription: 'Please carefully review the following consent requests and choose whether you agree to share your information with the authorized service providers.',
        agree: 'Yes, I agree',
        decline: 'No, do not share',
        summary: 'Consent Summary',
        total: 'Total Questions',
        answered: 'Answered',
        pending: 'Pending',
        confirmation: 'I have read and understood all the above consent statements and confirm that my selections are voluntary.',
        submit: 'Submit My Consent',
        logout: 'Logout',
        loginRequired: 'Please log in to view your consumer dashboard.',
        checkAll: 'Please answer all eight questions and confirm before submitting.',
        modalTitle: 'Review your consent selections',
        modalDescription: 'Please review your responses. You can go back and edit them before confirming.',
        goBack: 'Go Back & Edit',
        confirmSubmit: 'Confirm & Submit',
        successTitle: 'Consent submitted',
        successMessage: 'Your consent preferences have been submitted successfully!',
        consumerName: 'Consumer Name',
        consumerNumber: 'Consumer Number',
        submittedAt: 'Submission Date and Time',
        submissionStatus: 'Consent Submission Status',
        submitted: 'Submitted',
        viewSubmitted: 'View Submitted Consent',
        close: 'Close',
        yes: 'Yes',
        no: 'No',
        storageError: 'Your response could not be saved in this browser. Please check your browser storage settings and try again.'
    },
    hi: {
        greeting: 'स्वागत है, उपभोक्ता!',
        welcomeTitle: 'आपके सहमति डैशबोर्ड में आपका स्वागत है',
        welcomeDescription: 'अपनी व्यक्तिगत जानकारी प्रबंधित करें और नियंत्रित करें कि आपका उपभोक्ता डेटा अधिकृत विभागों और सेवा प्रदाताओं के साथ कैसे साझा किया जाए।',
        privacy: 'आपकी गोपनीयता महत्वपूर्ण है। अपनी सहमति प्राथमिकताओं पर आपका पूरा नियंत्रण है।',
        consumerInfo: 'उपभोक्ता जानकारी',
        personalDetails: 'व्यक्तिगत विवरण',
        secureInfo: 'सुरक्षित उपभोक्ता डेटा',
        verified: 'सत्यापित',
        consentTitle: 'आपकी सहमति प्राथमिकताएँ',
        consentDescription: 'कृपया निम्नलिखित सहमति अनुरोधों को ध्यान से पढ़ें और चुनें कि आप अधिकृत सेवा प्रदाताओं के साथ अपनी जानकारी साझा करने की सहमति देते हैं या नहीं।',
        agree: 'हाँ, मैं सहमत हूँ',
        decline: 'नहीं, साझा न करें',
        summary: 'सहमति सारांश',
        total: 'कुल प्रश्न',
        answered: 'उत्तर दिए गए',
        pending: 'शेष',
        confirmation: 'मैंने ऊपर दिए गए सभी सहमति कथनों को पढ़ और समझ लिया है और पुष्टि करता/करती हूँ कि मेरे चयन स्वैच्छिक हैं।',
        submit: 'मेरी सहमति जमा करें',
        logout: 'लॉग आउट',
        loginRequired: 'उपभोक्ता डैशबोर्ड देखने के लिए कृपया लॉगिन करें।',
        checkAll: 'जमा करने से पहले सभी आठ प्रश्नों का उत्तर दें और पुष्टि करें।',
        modalTitle: 'अपनी सहमति के विकल्प जाँचें',
        modalDescription: 'अपने उत्तरों की समीक्षा करें। पुष्टि करने से पहले आप वापस जाकर उन्हें बदल सकते हैं।',
        goBack: 'वापस जाएँ और बदलें',
        confirmSubmit: 'पुष्टि करें और जमा करें',
        successTitle: 'सहमति जमा हो गई',
        successMessage: 'आपकी सहमति प्राथमिकताएँ सफलतापूर्वक जमा हो गई हैं!',
        consumerName: 'उपभोक्ता का नाम',
        consumerNumber: 'उपभोक्ता संख्या',
        submittedAt: 'जमा करने की तारीख और समय',
        submissionStatus: 'सहमति जमा करने की स्थिति',
        submitted: 'जमा किया गया',
        viewSubmitted: 'जमा की गई सहमति देखें',
        close: 'बंद करें',
        yes: 'हाँ',
        no: 'नहीं',
        storageError: 'आपकी प्रतिक्रिया इस ब्राउज़र में सहेजी नहीं जा सकी। ब्राउज़र स्टोरेज सेटिंग जाँचकर फिर से प्रयास करें।'
    }
};
function getText(text, lang) {
    return typeof text === 'string' ? text : text[lang];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/login/demoSession.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEMO_AUTH_KEY",
    ()=>DEMO_AUTH_KEY,
    "readDemoSession",
    ()=>readDemoSession,
    "saveDemoSession",
    ()=>saveDemoSession
]);
const DEMO_AUTH_KEY = 'mpez-demo-authenticated';
const INDIAN_MOBILE_RE = /^[6-9]\d{9}$/;
function readDemoSession() {
    try {
        const stored = window.localStorage.getItem(DEMO_AUTH_KEY);
        if (!stored) return null;
        const parsed = JSON.parse(stored);
        if (!parsed || typeof parsed !== 'object' || !('mobile' in parsed) || typeof parsed.mobile !== 'string' || !INDIAN_MOBILE_RE.test(parsed.mobile)) {
            return null;
        }
        return {
            mobile: parsed.mobile
        };
    } catch  {
        return null;
    }
}
function saveDemoSession(mobile) {
    if (!INDIAN_MOBILE_RE.test(mobile)) {
        throw new Error('Cannot save a session for an invalid mobile number.');
    }
    window.localStorage.setItem(DEMO_AUTH_KEY, JSON.stringify({
        mobile
    }));
}
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

//# sourceMappingURL=_1hmsjoh5vq8x9._.js.map