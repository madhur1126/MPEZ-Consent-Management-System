module.exports = [
"[project]/components/common/Button/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const variantClasses = {
    primary: 'bg-blue-800 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
    outline: 'border border-slate-300 bg-transparent text-slate-800 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800',
    ghost: 'bg-transparent text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800',
    danger: 'bg-red-700 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-500',
    success: 'bg-emerald-700 text-white hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500'
};
const sizeClasses = {
    small: 'h-[34px] px-3 text-sm sm:h-9',
    medium: 'h-10 px-4 text-sm sm:h-[42px]',
    large: 'h-[42px] px-5 text-base sm:h-11'
};
function Button({ variant = 'primary', size = 'medium', leftIcon, rightIcon, loading = false, fullWidth = false, type = 'button', disabled, className = '', children, ...buttonProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ...buttonProps,
        type: type,
        disabled: disabled || loading,
        "aria-busy": loading || buttonProps['aria-busy'],
        className: `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-colors duration-150 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60 ${sizeClasses[size]} ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${className}`,
        children: [
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                className: `mpez-spinner h-4 w-4 flex-none border-2 ${variant === 'primary' || variant === 'danger' || variant === 'success' ? 'mpez-spinner-inverse' : ''}`
            }, void 0, false, {
                fileName: "[project]/components/common/Button/Button.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this),
            !loading && leftIcon,
            children,
            !loading && rightIcon
        ]
    }, void 0, true, {
        fileName: "[project]/components/common/Button/Button.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/common/Button/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/Button/Button.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/components/common/Input/Input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function Input({ id, format, type, inputMode, autoComplete, maxLength, pattern, label, leftIcon, rightIcon, error, success, helperText, loading = false, validate, containerClassName = '', labelClassName = '', inputClassName = '', className = '', required, disabled, readOnly, onBlur, onChange, 'aria-describedby': describedBy, 'aria-invalid': ariaInvalid, ...inputProps }, ref) {
    const [validationError, setValidationError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const generatedId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const inputId = id ?? generatedId;
    const formatDefaults = {
        mobile: {
            type: 'tel',
            inputMode: 'numeric',
            autoComplete: 'tel-national',
            maxLength: 10,
            pattern: '[6-9][0-9]{9}'
        },
        aadhaar: {
            type: 'text',
            inputMode: 'numeric',
            autoComplete: 'off',
            maxLength: 12,
            pattern: '[0-9]{12}'
        },
        pan: {
            type: 'text',
            inputMode: 'text',
            autoComplete: 'off',
            maxLength: 10,
            pattern: '[A-Za-z]{5}[0-9]{4}[A-Za-z]'
        },
        consumerNumber: {
            type: 'text',
            inputMode: 'text',
            autoComplete: 'off',
            maxLength: undefined,
            pattern: undefined
        }
    };
    const formatDefault = format ? formatDefaults[format] : undefined;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;
    const displayedError = error || validationError;
    const invalid = Boolean(displayedError) || ariaInvalid === true || ariaInvalid === 'true';
    const describedByIds = [
        describedBy,
        displayedError ? errorId : undefined,
        helperText && !displayedError ? helperId : undefined
    ].filter(Boolean).join(' ') || undefined;
    function handleBlur(event) {
        if (validate) setValidationError(validate(event.currentTarget.value));
        onBlur?.(event);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full ${containerClassName}`,
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: inputId,
                className: `mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-100 ${labelClassName}`,
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        className: "ml-1 text-red-600",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/components/common/Input/Input.tsx",
                        lineNumber: 92,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/common/Input/Input.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex h-[42px] min-w-0 items-center gap-3 rounded-xl border bg-white px-3 text-slate-900 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:bg-slate-950 dark:text-slate-100 sm:h-[44px] ${invalid ? 'border-red-500 dark:border-red-400' : success ? 'border-emerald-500 dark:border-emerald-400' : 'border-slate-300 dark:border-slate-700'} ${disabled ? 'cursor-not-allowed opacity-60' : ''} ${readOnly ? 'cursor-not-allowed' : ''} ${className}`,
                children: [
                    leftIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex-none text-current",
                        "aria-hidden": "true",
                        children: leftIcon
                    }, void 0, false, {
                        fileName: "[project]/components/common/Input/Input.tsx",
                        lineNumber: 104,
                        columnNumber: 22
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ...inputProps,
                        ref: ref,
                        id: inputId,
                        type: type ?? formatDefault?.type,
                        inputMode: inputMode ?? formatDefault?.inputMode,
                        autoComplete: autoComplete ?? formatDefault?.autoComplete,
                        maxLength: maxLength ?? formatDefault?.maxLength,
                        pattern: pattern ?? formatDefault?.pattern,
                        required: required,
                        disabled: disabled,
                        readOnly: readOnly,
                        "aria-invalid": invalid,
                        "aria-describedby": describedByIds,
                        onBlur: handleBlur,
                        onChange: (event)=>{
                            if (validationError) setValidationError(undefined);
                            onChange?.(event);
                        },
                        className: `h-full min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-slate-500 disabled:cursor-not-allowed read-only:cursor-not-allowed dark:placeholder:text-slate-400 ${inputClassName}`
                    }, void 0, false, {
                        fileName: "[project]/components/common/Input/Input.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-label": "Loading",
                        className: "mpez-spinner h-5 w-5 border-2"
                    }, void 0, false, {
                        fileName: "[project]/components/common/Input/Input.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this) : rightIcon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex-none text-current",
                        children: rightIcon
                    }, void 0, false, {
                        fileName: "[project]/components/common/Input/Input.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/common/Input/Input.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            displayedError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: errorId,
                role: "alert",
                className: "mt-1.5 text-sm text-red-700 dark:text-red-300",
                children: displayedError
            }, void 0, false, {
                fileName: "[project]/components/common/Input/Input.tsx",
                lineNumber: 133,
                columnNumber: 9
            }, this) : helperText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: helperId,
                className: "mt-1.5 text-sm text-slate-600 dark:text-slate-400",
                children: helperText
            }, void 0, false, {
                fileName: "[project]/components/common/Input/Input.tsx",
                lineNumber: 137,
                columnNumber: 9
            }, this) : success && typeof success !== 'boolean' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1.5 text-sm text-emerald-700 dark:text-emerald-300",
                children: success
            }, void 0, false, {
                fileName: "[project]/components/common/Input/Input.tsx",
                lineNumber: 141,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/common/Input/Input.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
});
Input.displayName = 'Input';
}),
"[project]/components/common/Input/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Input$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/Input/Input.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/components/common/OTPInput/OTPInput.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OTPInput",
    ()=>OTPInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Button$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/common/Button/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/Button/Button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function OTPInput({ length = 6, value, defaultValue = '', onChange, onComplete, autoSubmit = false, autoFocus = true, label, disabled = false, invalid = false, error, success, resend, footerAction, className = '' }) {
    const safeLength = Math.max(1, Math.floor(length));
    const [uncontrolledValue, setUncontrolledValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>normalize(defaultValue, safeLength));
    const [remaining, setRemaining] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(resend?.cooldownSeconds ?? 0);
    const [resending, setResending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resendError, setResendError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const resendErrorLabel = resend?.errorLabel ?? 'Unable to resend OTP. Please try again.';
    const inputRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const lastCompleted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])('');
    const digits = normalize(value ? value.join('') : uncontrolledValue.join(''), safeLength);
    const previousDigits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(digits.join(''));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (autoFocus) inputRefs.current[0]?.focus();
    }, [
        autoFocus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const currentDigits = digits.join('');
        if (previousDigits.current.length === safeLength && !currentDigits) focusBox(0);
        if (!digits.every(Boolean)) lastCompleted.current = '';
        previousDigits.current = currentDigits;
    }, [
        digits.join('')
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (remaining <= 0) return;
        const timer = window.setTimeout(()=>setRemaining((seconds)=>Math.max(0, seconds - 1)), 1000);
        return ()=>window.clearTimeout(timer);
    }, [
        remaining
    ]);
    function focusBox(index) {
        inputRefs.current[Math.max(0, Math.min(safeLength - 1, index))]?.focus();
    }
    function commit(next, focusIndex) {
        if (value === undefined) setUncontrolledValue(next);
        onChange?.(next);
        const code = next.join('');
        if (code.length === safeLength && next.every(Boolean)) {
            if (autoSubmit && code !== lastCompleted.current) onComplete?.(code);
            lastCompleted.current = code;
        } else {
            lastCompleted.current = '';
        }
        if (focusIndex !== undefined) focusBox(focusIndex);
    }
    function changeDigit(index, rawValue) {
        const numbers = rawValue.replace(/\D/g, '');
        const next = [
            ...digits
        ];
        if (numbers.length > 1) {
            const pasted = numbers.slice(0, safeLength - index).split('');
            pasted.forEach((digit, offset)=>{
                next[index + offset] = digit;
            });
            commit(next, Math.min(index + pasted.length, safeLength - 1));
            return;
        }
        next[index] = numbers.slice(-1);
        commit(next, numbers ? index + 1 : index);
    }
    function handleKeyDown(index, event) {
        if (event.key === 'Backspace' && !digits[index] && index > 0) {
            event.preventDefault();
            const next = [
                ...digits
            ];
            next[index - 1] = '';
            commit(next, index - 1);
        } else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            focusBox(index - 1);
        } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            focusBox(index + 1);
        }
    }
    function handlePaste(event) {
        const pasted = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, safeLength);
        if (!pasted) return;
        event.preventDefault();
        const next = Array.from({
            length: safeLength
        }, (_, index)=>pasted[index] ?? '');
        commit(next, Math.min(pasted.length, safeLength - 1));
    }
    async function handleResend() {
        if (!resend || disabled || resend.disabled || resending || remaining > 0) return;
        setResending(true);
        setResendError(undefined);
        try {
            const didResend = await resend.onResend();
            if (didResend !== false) setRemaining(resend.cooldownSeconds ?? 60);
        } catch  {
            setResendError(resendErrorLabel);
        } finally{
            setResending(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "group",
                "aria-label": label,
                className: "flex justify-between gap-1.5 sm:gap-2",
                children: digits.map((digit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: (element)=>{
                            inputRefs.current[index] = element;
                        },
                        type: "text",
                        inputMode: "numeric",
                        autoComplete: index === 0 ? 'one-time-code' : 'off',
                        maxLength: safeLength,
                        value: digit,
                        disabled: disabled,
                        "aria-label": `${label} ${index + 1}`,
                        "aria-invalid": invalid || Boolean(error),
                        onChange: (event)=>changeDigit(index, event.currentTarget.value),
                        onKeyDown: (event)=>handleKeyDown(index, event),
                        onPaste: handlePaste,
                        onFocus: (event)=>event.currentTarget.select(),
                        className: `h-11 w-full min-w-0 max-w-14 rounded-xl border-[1.5px] bg-login-field text-center text-xl font-bold text-login-text outline-none focus:border-login-btn focus:shadow-[0_0_0_4px_color-mix(in_srgb,var(--btn)_22%,transparent)] disabled:cursor-not-allowed disabled:opacity-60 sm:h-[46px] sm:text-[22px] ${invalid || error ? 'border-login-err' : success ? 'border-emerald-500' : 'border-login-field-line'}`
                    }, index, false, {
                        fileName: "[project]/components/common/OTPInput/OTPInput.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/common/OTPInput/OTPInput.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "mt-2 text-sm text-login-err",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/common/OTPInput/OTPInput.tsx",
                lineNumber: 171,
                columnNumber: 17
            }, this),
            !error && success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "status",
                className: "mt-2 text-sm text-emerald-700 dark:text-emerald-300",
                children: success
            }, void 0, false, {
                fileName: "[project]/components/common/OTPInput/OTPInput.tsx",
                lineNumber: 172,
                columnNumber: 29
            }, this),
            (resend || footerAction) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex flex-wrap items-center justify-between gap-3 text-sm",
                children: [
                    resend ? remaining > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-login-muted",
                        children: resend.countdownLabel(remaining)
                    }, void 0, false, {
                        fileName: "[project]/components/common/OTPInput/OTPInput.tsx",
                        lineNumber: 177,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "ghost",
                        size: "small",
                        disabled: disabled || resend.disabled || resending,
                        loading: resending,
                        onClick: ()=>void handleResend(),
                        className: "!min-h-9 !px-0 font-semibold text-login-ink underline underline-offset-4",
                        children: resend.label
                    }, void 0, false, {
                        fileName: "[project]/components/common/OTPInput/OTPInput.tsx",
                        lineNumber: 179,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                        fileName: "[project]/components/common/OTPInput/OTPInput.tsx",
                        lineNumber: 191,
                        columnNumber: 15
                    }, this),
                    footerAction
                ]
            }, void 0, true, {
                fileName: "[project]/components/common/OTPInput/OTPInput.tsx",
                lineNumber: 174,
                columnNumber: 9
            }, this),
            resendError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "mt-1 text-sm text-login-err",
                children: resendError
            }, void 0, false, {
                fileName: "[project]/components/common/OTPInput/OTPInput.tsx",
                lineNumber: 195,
                columnNumber: 23
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/common/OTPInput/OTPInput.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
function normalize(value, length) {
    return Array.from({
        length
    }, (_, index)=>value.replace(/\D/g, '').slice(0, length)[index] ?? '');
}
}),
"[project]/components/common/OTPInput/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$OTPInput$2f$OTPInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/OTPInput/OTPInput.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/components/common/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Input$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/common/Input/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Button$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/common/Button/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$OTPInput$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/common/OTPInput/index.ts [app-ssr] (ecmascript) <locals>");
;
;
;
}),
"[project]/components/login/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$login$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/login/Logo.tsx [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "relative z-30 bg-login-header",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex w-full max-w-[1320px] flex-col items-stretch gap-2 px-3 py-2 sm:px-6 sm:py-3.5 md:flex-row md:items-center md:justify-between md:gap-x-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "order-1 flex w-full shrink-0 items-center justify-between gap-3 border-b border-slate-300/80 pb-2 md:order-2 md:w-auto md:justify-normal md:gap-5 md:border-b-0 md:pb-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "group",
                                "aria-label": t.language,
                                className: "inline-flex shrink-0 rounded-full bg-login-seg p-[3px] shadow-[0_4px_12px_-6px_rgba(8,48,120,0.45)] md:p-[5px]",
                                children: LANGS.map(({ value, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        lang: value,
                                        "aria-pressed": lang === value,
                                        onClick: ()=>onLangChange(value),
                                        className: `flex h-[27px] min-h-0 items-center rounded-full px-2.5 py-0 text-[12px] font-semibold leading-none transition-colors md:h-auto md:min-h-10 md:px-[18px] md:py-2 md:text-[17px] md:leading-snug ${lang === value ? 'bg-login-seg-active text-login-seg-active-ink' : 'text-login-seg-ink'}`,
                                        children: label
                                    }, value, false, {
                                        fileName: "[project]/components/login/Header.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/login/Header.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "group",
                                "aria-label": t.theme,
                                className: "inline-flex shrink-0 rounded-full bg-[linear-gradient(135deg,var(--track-a),var(--track-b))] p-[3px] shadow-[0_4px_12px_-6px_rgba(8,48,120,0.45)] md:p-[5px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-label": t.light,
                                        "aria-pressed": theme === 'light',
                                        onClick: ()=>onThemeChange('light'),
                                        className: `grid h-[27px] w-[32px] place-items-center rounded-full md:h-10 md:w-[54px] ${theme === 'light' ? 'bg-login-thumb text-login-sun' : 'text-login-moon'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            className: "h-[15px] w-[15px] md:h-[22px] md:w-[22px]",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            "aria-hidden": "true",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "4.2",
                                                    fill: "currentColor"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/login/Header.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5.3 5.3l1.7 1.7M17 17l1.7 1.7M18.7 5.3 17 7M7 17l-1.7 1.7"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/login/Header.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/login/Header.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/login/Header.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-label": t.dark,
                                        "aria-pressed": theme === 'dark',
                                        onClick: ()=>onThemeChange('dark'),
                                        className: `grid h-[27px] w-[32px] place-items-center rounded-full text-login-moon md:h-10 md:w-[54px] ${theme === 'dark' ? 'bg-login-thumb' : ''}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            className: "h-[15px] w-[15px] md:h-[22px] md:w-[22px]",
                                            fill: "currentColor",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a.6.6 0 0 0-.8-.7A9.6 9.6 0 1 0 21.2 15.4a.6.6 0 0 0-.7-.8Z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/login/Header.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/login/Header.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/login/Header.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/login/Header.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/login/Header.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "order-2 flex min-w-0 items-center gap-2 sm:gap-4 md:order-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$login$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {
                                className: "h-10 w-10 flex-none sm:h-[58px] sm:w-[58px] md:h-12 md:w-12 lg:h-[58px] lg:w-[58px]"
                            }, void 0, false, {
                                fileName: "[project]/components/login/Header.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-x-1 gap-y-1 sm:gap-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[15px] font-extrabold leading-none tracking-tight text-login-ink min-[360px]:text-base sm:text-[27px] md:text-[22px] lg:text-[27px]",
                                                children: "MPEZ"
                                            }, void 0, false, {
                                                fileName: "[project]/components/login/Header.tsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-md bg-blue-100 px-1.5 py-1 text-[9px] font-bold leading-none text-blue-800 sm:px-2 sm:text-xs md:text-[10px]",
                                                children: "CMS"
                                            }, void 0, false, {
                                                fileName: "[project]/components/login/Header.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[15px] font-bold leading-none tracking-tight text-login-ink min-[360px]:text-base sm:text-[27px] md:text-[22px] lg:text-[27px]",
                                                children: t.portalName
                                            }, void 0, false, {
                                                fileName: "[project]/components/login/Header.tsx",
                                                lineNumber: 129,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/login/Header.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[9px] font-semibold leading-tight text-login-muted min-[360px]:text-[10px] sm:mt-1.5 sm:text-[14px] md:text-xs lg:text-[14px]",
                                        children: t.tagline
                                    }, void 0, false, {
                                        fileName: "[project]/components/login/Header.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/login/Header.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/login/Header.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/login/Header.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                "aria-hidden": "true",
                viewBox: "0 0 1600 34",
                preserveAspectRatio: "none",
                className: "pointer-events-none absolute -bottom-3 left-0 block h-3 w-full lg:-bottom-[33px] lg:h-[34px]",
                style: {
                    fill: 'var(--header-bg)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M0 0H1600V10C1320 -2 940 36 560 22 300 12 120 30 0 34Z"
                }, void 0, false, {
                    fileName: "[project]/components/login/Header.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/login/Header.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/login/Header.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/login/Loader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobalLoader",
    ()=>GlobalLoader,
    "LoadingSpinner",
    ()=>LoadingSpinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$login$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/login/Logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/login/i18n.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/login/hooks.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function LoadingSpinner({ className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "aria-hidden": "true",
        className: `mpez-spinner ${className}`
    }, void 0, false, {
        fileName: "[project]/components/login/Loader.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
function GlobalLoader({ label, visible = true }) {
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["messages"][lang];
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(visible);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (visible) {
            setMounted(true);
            return;
        }
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setMounted(false);
            return;
        }
        const timer = window.setTimeout(()=>setMounted(false), 220);
        return ()=>window.clearTimeout(timer);
    }, [
        visible
    ]);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        role: "status",
        "aria-live": "polite",
        "aria-label": label ?? t.loading,
        className: `mpez-loader fixed inset-0 z-[100] grid min-h-screen place-items-center overflow-hidden px-5 text-center ${visible ? '' : 'mpez-loader-exit'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mpez-loader-content flex w-full max-w-sm flex-col items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mpez-loader-logo grid h-24 w-24 place-items-center rounded-[28px] p-3 sm:h-28 sm:w-28",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$login$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingSpinner, {
                    className: "mt-8 h-11 w-11 border-[3px]"
                }, void 0, false, {
                    fileName: "[project]/components/login/Loader.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm font-medium leading-6 text-slate-600 dark:text-blue-100/80 sm:text-base",
                    children: t.tagline
                }, void 0, false, {
                    fileName: "[project]/components/login/Loader.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/components/login/LoginCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginCard",
    ()=>LoginCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/common/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/Button/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Input$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/Input/Input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$OTPInput$2f$OTPInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/OTPInput/OTPInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$login$2f$Loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/login/Loader.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const MOBILE_RE = /^[6-9]\d{9}$/;
const OTP_COOLDOWN_SECONDS = 60;
function Avatar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 96 96",
        "aria-hidden": "true",
        className: "mx-auto mb-1.5 block h-24 w-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "48",
                cy: "48",
                r: "48",
                style: {
                    fill: 'var(--icon-bg)'
                }
            }, void 0, false, {
                fileName: "[project]/components/login/LoginCard.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "45",
                cy: "35",
                r: "11",
                style: {
                    fill: 'var(--ink)'
                }
            }, void 0, false, {
                fileName: "[project]/components/login/LoginCard.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M23 66c0-11 9-18 22-18s22 7 22 18c0 2-1 3-3 3H26c-2 0-3-1-3-3Z",
                style: {
                    fill: 'var(--ink)'
                }
            }, void 0, false, {
                fileName: "[project]/components/login/LoginCard.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "68",
                cy: "64",
                r: "13",
                strokeWidth: "3",
                style: {
                    fill: 'var(--btn)',
                    stroke: 'var(--card)'
                }
            }, void 0, false, {
                fileName: "[project]/components/login/LoginCard.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "62",
                y: "63",
                width: "12",
                height: "9",
                rx: "2",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/components/login/LoginCard.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64.5 63v-2.5a3.5 3.5 0 0 1 7 0V63",
                fill: "none",
                stroke: "#fff",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/login/LoginCard.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/login/LoginCard.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
function LoginCard({ t, onRequestOtp, onVerifyOtp }) {
    const [mobile, setMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [otp, setOtp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>Array(6).fill(''));
    const [otpRequested, setOtpRequested] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingAction, setLoadingAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [otpError, setOtpError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const mobileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const verificationInProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const requestInProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    async function requestOtp() {
        if (requestInProgress.current) return false;
        requestInProgress.current = true;
        setLoading(true);
        setLoadingAction('request');
        setStatus(null);
        try {
            await onRequestOtp?.(mobile);
            setOtpRequested(true);
            setOtp(Array(6).fill(''));
            setOtpError(false);
            setStatus({
                kind: 'success',
                key: 'otpSent'
            });
            return true;
        } catch  {
            setStatus({
                kind: 'error',
                key: 'requestFailed'
            });
            return false;
        } finally{
            requestInProgress.current = false;
            setLoading(false);
            setLoadingAction(null);
        }
    }
    async function submitMobile(e) {
        e.preventDefault();
        if (otpRequested || loading || requestInProgress.current) return;
        if (!MOBILE_RE.test(mobile)) {
            setStatus({
                kind: 'error',
                key: 'invalidMobile'
            });
            mobileRef.current?.focus();
            return;
        }
        await requestOtp();
    }
    async function verifyOtp(code) {
        if (code.length !== 6 || verificationInProgress.current || loading) {
            return;
        }
        verificationInProgress.current = true;
        setLoading(true);
        setLoadingAction('verify');
        setStatus(null);
        setOtpError(false);
        try {
            await onVerifyOtp?.(mobile, code);
        } catch  {
            setOtpError(true);
            setOtp(Array(6).fill(''));
            setStatus({
                kind: 'error',
                key: 'invalidOtp'
            });
        } finally{
            verificationInProgress.current = false;
            setLoading(false);
            setLoadingAction(null);
        }
    }
    function changeOtp(next) {
        setOtp(next);
        setOtpError(false);
        setStatus(null);
    }
    function changeNumber() {
        setOtpRequested(false);
        setOtp(Array(6).fill(''));
        setStatus(null);
        setOtpError(false);
    }
    const message = status ? t[status.key] : '';
    const messageClass = `mt-2 min-h-[22px] px-0.5 text-sm leading-snug ${status?.kind === 'success' ? 'text-emerald-700 dark:text-emerald-300' : 'text-login-err'}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-labelledby": "login-title",
        className: "flex min-h-[455px] min-w-0 flex-col justify-center rounded-[26px] border border-login-card-line bg-login-card px-5 py-6 text-center shadow-login-card backdrop-blur-[6px] sm:min-h-[477px] sm:rounded-[32px] sm:px-9 sm:py-8",
        children: [
            !otpRequested && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {}, void 0, false, {
                fileName: "[project]/components/login/LoginCard.tsx",
                lineNumber: 132,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: "login-title",
                className: "text-3xl font-extrabold leading-tight text-login-ink sm:text-4xl [html[lang=hi]_&]:leading-snug",
                children: otpRequested ? t.verifyTitle : t.login
            }, void 0, false, {
                fileName: "[project]/components/login/LoginCard.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            !otpRequested && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mx-auto mt-2.5 max-w-[24em] text-[17px] leading-snug text-login-text",
                children: t.loginSub
            }, void 0, false, {
                fileName: "[project]/components/login/LoginCard.tsx",
                lineNumber: 137,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: submitMobile,
                noValidate: true,
                className: `${otpRequested ? 'mt-3' : 'mt-6'} text-left`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Input$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        ref: mobileRef,
                        id: "mobile",
                        name: "mobile",
                        format: "mobile",
                        readOnly: otpRequested,
                        value: mobile,
                        label: t.mobile,
                        placeholder: t.mobilePlaceholder,
                        "aria-invalid": status?.key === 'invalidMobile',
                        "aria-describedby": "login-msg",
                        onChange: (event)=>{
                            setMobile(event.target.value.replace(/\D/g, '').slice(0, 10));
                            if (status) setStatus(null);
                        },
                        leftIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            className: "h-[22px] w-[22px] text-login-ink",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1Z"
                            }, void 0, false, {
                                fileName: "[project]/components/login/LoginCard.tsx",
                                lineNumber: 160,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/login/LoginCard.tsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, this),
                        labelClassName: "text-[17px] font-bold text-login-ink",
                        className: `!gap-3.5 !rounded-[14px] !border-[1.5px] !bg-login-field !px-4 !text-login-text focus-within:!border-login-btn focus-within:!ring-0 focus-within:!shadow-[0_0_0_4px_color-mix(in_srgb,var(--btn)_22%,transparent)] ${status?.key === 'invalidMobile' ? '!border-login-err' : '!border-login-field-line'}`,
                        inputClassName: "!h-full !bg-transparent !text-lg !text-login-text placeholder:!text-login-placeholder"
                    }, void 0, false, {
                        fileName: "[project]/components/login/LoginCard.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    !otpRequested && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                id: "login-msg",
                                role: "alert",
                                className: messageClass,
                                children: message
                            }, void 0, false, {
                                fileName: "[project]/components/login/LoginCard.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                type: "submit",
                                loading: loading && loadingAction === 'request',
                                disabled: loading && loadingAction !== 'request',
                                className: "!mt-2.5 !w-full !gap-3 !rounded-2xl !bg-login-btn !text-xl !text-login-btn-ink !shadow-[0_12px_24px_-12px_var(--btn)] hover:!bg-login-btn-hover",
                                rightIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2.2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    "aria-hidden": "true",
                                    className: "h-[22px] w-[22px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M4 12h15M13 6l6 6-6 6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/login/LoginCard.tsx",
                                        lineNumber: 182,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/login/LoginCard.tsx",
                                    lineNumber: 181,
                                    columnNumber: 17
                                }, this),
                                children: loading ? t.sendingOtp : t.sendOtp
                            }, void 0, false, {
                                fileName: "[project]/components/login/LoginCard.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/login/LoginCard.tsx",
                        lineNumber: 171,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/login/LoginCard.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            otpRequested && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "status",
                        className: "rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-200",
                        children: t.otpSent
                    }, void 0, false, {
                        fileName: "[project]/components/login/LoginCard.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "mb-2 mt-3 block text-[17px] font-bold text-login-ink",
                        children: t.otpLabel
                    }, void 0, false, {
                        fileName: "[project]/components/login/LoginCard.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$OTPInput$2f$OTPInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OTPInput"], {
                        length: 6,
                        value: otp,
                        onChange: changeOtp,
                        onComplete: (code)=>void verifyOtp(code),
                        autoSubmit: true,
                        label: t.otpLabel,
                        disabled: loading,
                        invalid: otpError,
                        resend: {
                            onResend: requestOtp,
                            label: t.resendOtp,
                            countdownLabel: (seconds)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        t.resendIn,
                                        ' ',
                                        String(Math.floor(seconds / 60)).padStart(2, '0'),
                                        ":",
                                        String(seconds % 60).padStart(2, '0')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/login/LoginCard.tsx",
                                    lineNumber: 211,
                                    columnNumber: 17
                                }, this),
                            cooldownSeconds: OTP_COOLDOWN_SECONDS,
                            disabled: loading,
                            errorLabel: t.resendFailed
                        },
                        footerAction: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "ghost",
                            size: "small",
                            onClick: changeNumber,
                            className: "!min-h-9 !px-0 font-semibold text-login-ink underline underline-offset-4",
                            children: t.changeNumber
                        }, void 0, false, {
                            fileName: "[project]/components/login/LoginCard.tsx",
                            lineNumber: 222,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/login/LoginCard.tsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, this),
                    loadingAction === 'verify' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        role: "status",
                        "aria-live": "polite",
                        className: "mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-login-ink",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$login$2f$Loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadingSpinner"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/login/LoginCard.tsx",
                                lineNumber: 235,
                                columnNumber: 15
                            }, this),
                            t.verifyingOtp
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/login/LoginCard.tsx",
                        lineNumber: 234,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: "login-msg",
                        role: "alert",
                        "aria-live": "polite",
                        className: messageClass,
                        children: status?.key === 'otpSent' ? '' : message
                    }, void 0, false, {
                        fileName: "[project]/components/login/LoginCard.tsx",
                        lineNumber: 239,
                        columnNumber: 11
                    }, this),
                    ("TURBOPACK compile-time value", "development") !== 'production' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-center text-sm text-blue-900 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-100",
                        children: [
                            t.demoOtp,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "font-bold",
                                children: "123456"
                            }, void 0, false, {
                                fileName: "[project]/components/login/LoginCard.tsx",
                                lineNumber: 244,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/login/LoginCard.tsx",
                        lineNumber: 243,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/login/LoginCard.tsx",
                lineNumber: 193,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/login/LoginCard.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/login/LoginScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginScreen",
    ()=>LoginScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/login/i18n.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/login/hooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$demoSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/login/demoSession.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$login$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/login/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$login$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/login/Logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$login$2f$LoginCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/login/LoginCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$login$2f$Scene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/login/Scene.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function LoginScreen({ onRequestOtp, onVerifyOtp }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const { lang, setLang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["messages"][lang];
    async function requestOtp(mobile) {
        if (onRequestOtp) {
            await onRequestOtp(mobile);
            return;
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    async function verifyOtp(mobile, code) {
        if (onVerifyOtp) {
            await onVerifyOtp(mobile, code);
        } else if (("TURBOPACK compile-time value", "development") === "production" || code !== "123456") {
            throw new Error("The OTP is invalid or verification is not configured.");
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$login$2f$demoSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveDemoSession"])(mobile);
        router.push("/dashboard");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "login-root login-sky relative flex min-h-screen flex-col overflow-hidden font-login text-login-text antialiased",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$login$2f$Scene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"], {}, void 0, false, {
                fileName: "[project]/components/login/LoginScreen.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$login$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {
                t: t,
                lang: lang,
                onLangChange: setLang,
                theme: theme,
                onThemeChange: setTheme
            }, void 0, false, {
                fileName: "[project]/components/login/LoginScreen.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "relative z-20 flex flex-1 items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid w-full max-w-[1320px] items-center gap-5 px-3 pb-24 pt-4 sm:gap-8 sm:px-6 sm:pb-32 sm:pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)] lg:gap-12 lg:pb-20 lg:pt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "min-w-0 lg:pr-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-sky-200/80 bg-sky-950/85 px-4 py-1.5 text-white shadow-lg backdrop-blur-md dark:border-sky-400/30 dark:bg-slate-900/90 sm:mb-7 sm:px-5 sm:py-2.5 mt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative flex h-2.5 w-2.5 flex-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/login/LoginScreen.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/login/LoginScreen.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/login/LoginScreen.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-semibold tracking-wide sm:text-sm",
                                            children: t.officialPortal
                                        }, void 0, false, {
                                            fileName: "[project]/components/login/LoginScreen.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/login/LoginScreen.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "login-text-glow text-[clamp(16px,6vw,36px)] sm:text-[clamp(16px,6vw,46px)] font-extrabold leading-[1.02] tracking-tight text-login-ink",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$login$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRAND"].name
                                }, void 0, false, {
                                    fileName: "[project]/components/login/LoginScreen.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "login-text-glow mt-1 w-full text-[clamp(14px,7vw,19px)] font-bold leading-tight tracking-tight text-login-ink sm:mt-1.5 sm:text-[clamp(24px,3.2vw,44px)]",
                                    children: t.system
                                }, void 0, false, {
                                    fileName: "[project]/components/login/LoginScreen.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "my-3 h-1 sm:h-2 w-[50%] rounded bg-login-gold sm:my-6 sm:w-[81%]"
                                }, void 0, false, {
                                    fileName: "[project]/components/login/LoginScreen.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "relative z-10 mt-3 max-w-[30em] rounded-2xl border border-white/70 bg-white/75 p-3 text-base leading-6 text-login-text shadow-sm backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-950/60 sm:mt-4 sm:p-4 sm:text-[clamp(17px,1.5vw,21px)] sm:leading-[1.55] [html[lang=hi]_&]:leading-[1.7]",
                                    children: t.desc
                                }, void 0, false, {
                                    fileName: "[project]/components/login/LoginScreen.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/login/LoginScreen.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$login$2f$LoginCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoginCard"], {
                            t: t,
                            onRequestOtp: requestOtp,
                            onVerifyOtp: verifyOtp
                        }, void 0, false, {
                            fileName: "[project]/components/login/LoginScreen.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/login/LoginScreen.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/login/LoginScreen.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$login$2f$Scene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FooterWave"], {}, void 0, false, {
                fileName: "[project]/components/login/LoginScreen.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/login/LoginScreen.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/login/Logo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BRAND",
    ()=>BRAND,
    "Logo",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-ssr] (ecmascript) <export Image as default>");
;
;
const BRAND = {
    name: 'MP East Zone'
};
function Logo({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
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
}),
"[project]/components/login/Scene.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Decorative background: sunset glow, trees, substation, transmission towers and wires.
   Everything is computed once at module load, so this stays a plain server component. */ __turbopack_context__.s([
    "FooterWave",
    ()=>FooterWave,
    "Scene",
    ()=>Scene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const r = (v)=>Math.round(v * 10) / 10;
function tower(cx, by, H, W) {
    const top = by - H;
    const hw = (y)=>2 + (W - 2) * ((y - top) / H);
    const ys = [
        0,
        0.1,
        0.22,
        0.36,
        0.54,
        0.74,
        1
    ].map((f)=>top + H * f);
    let d = `M${r(cx - hw(top))} ${top}L${r(cx - hw(by))} ${by}M${r(cx + hw(top))} ${top}L${r(cx + hw(by))} ${by}`;
    ys.forEach((y, i)=>{
        d += `M${r(cx - hw(y))} ${r(y)}H${r(cx + hw(y))}`;
        const y2 = ys[i + 1];
        if (y2 !== undefined) {
            d += `M${r(cx - hw(y))} ${r(y)}L${r(cx + hw(y2))} ${r(y2)}M${r(cx + hw(y))} ${r(y)}L${r(cx - hw(y2))} ${r(y2)}`;
        }
    });
    const tips = [];
    for (const [f, k] of [
        [
            0.12,
            0.85
        ],
        [
            0.26,
            1.2
        ],
        [
            0.42,
            1.2
        ]
    ]){
        const y = top + H * f;
        const l = W * k;
        const drop = H * 0.05;
        d += `M${r(cx - l)} ${r(y)}H${r(cx + l)}M${r(cx - l)} ${r(y)}V${r(y + drop)}M${r(cx + l)} ${r(y)}V${r(y + drop)}`;
        d += `M${cx} ${r(y - H * 0.035)}L${r(cx - l)} ${r(y)}M${cx} ${r(y - H * 0.035)}L${r(cx + l)} ${r(y)}`;
        tips.push([
            r(cx - l),
            r(y + drop)
        ], [
            r(cx + l),
            r(y + drop)
        ]);
    }
    return {
        d,
        tips
    };
}
function gantry(x, by, h, w) {
    return `M${x} ${by}V${by - h}M${x + w} ${by}V${by - h}M${x - 4} ${by - h}H${x + w + 4}` + `M${x} ${r(by - h * 0.6)}H${x + w}M${x + w / 2} ${by - h}V${by - h - 9}M${x + 4} ${r(by - h * 0.35)}V${by}`;
}
function makeTrees() {
    let seed = 7;
    const rnd = ()=>{
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
    };
    const out = [];
    for(let x = 0; x < 1600; x += 14 + rnd() * 16){
        const big = x < 120;
        const rad = big ? 26 + rnd() * 22 : 9 + rnd() * 10;
        out.push({
            cx: Math.round(x),
            cy: Math.round(676 - (big ? rad * 0.9 : rad * 0.35)),
            rx: Math.round(rad * 1.1),
            ry: Math.round(rad)
        });
    }
    return out;
}
const NEAR = tower(170, 690, 290, 44);
const FAR = tower(468, 676, 150, 19);
const STATION = [
    545,
    595,
    650,
    705,
    760
].map((x, i)=>gantry(x, 676, 46 + i % 2 * 12, 30)).join('') + 'M520 676H800';
const WIRES = NEAR.tips.map(([x, y], i)=>i % 2 === 0 ? `M0 ${y - 70 + i * 6}Q${x / 2} ${y + 8} ${x} ${y}` : `M${x} ${y}Q${x + 230} ${y + 70 + i * 4} ${440 + i * 4} ${560 + i * 6}`).join('');
const TREES = makeTrees();
function Scene() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": "true",
        className: "pointer-events-none absolute bottom-0 left-0 z-0 aspect-[1600/760] w-[900px] lg:w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 1600 760",
            preserveAspectRatio: "xMinYMax meet",
            className: "block h-full w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                            id: "cl-sun",
                            cx: "760",
                            cy: "660",
                            r: "360",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0",
                                    style: {
                                        stopColor: 'var(--glow-2)'
                                    },
                                    stopOpacity: "0.95"
                                }, void 0, false, {
                                    fileName: "[project]/components/login/Scene.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0.3",
                                    style: {
                                        stopColor: 'var(--glow)'
                                    },
                                    stopOpacity: "0.55"
                                }, void 0, false, {
                                    fileName: "[project]/components/login/Scene.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    style: {
                                        stopColor: 'var(--glow)'
                                    },
                                    stopOpacity: "0"
                                }, void 0, false, {
                                    fileName: "[project]/components/login/Scene.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/login/Scene.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "cl-grass",
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0",
                                    style: {
                                        stopColor: 'var(--grass-a)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/login/Scene.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    style: {
                                        stopColor: 'var(--grass-b)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/login/Scene.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/login/Scene.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/login/Scene.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "760",
                    cy: "660",
                    r: "360",
                    fill: "url(#cl-sun)"
                }, void 0, false, {
                    fileName: "[project]/components/login/Scene.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    style: {
                        fill: 'var(--tree)'
                    },
                    children: TREES.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: t.cx,
                            cy: t.cy,
                            rx: t.rx,
                            ry: t.ry
                        }, i, false, {
                            fileName: "[project]/components/login/Scene.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/login/Scene.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: STATION,
                    fill: "none",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    style: {
                        stroke: 'var(--station)'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/login/Scene.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M0 678C300 664 700 674 1100 668S1500 672 1600 666V760H0Z",
                    fill: "url(#cl-grass)"
                }, void 0, false, {
                    fileName: "[project]/components/login/Scene.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: WIRES,
                    fill: "none",
                    strokeWidth: "1",
                    opacity: "0.55",
                    style: {
                        stroke: 'var(--tower)'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/login/Scene.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: FAR.d,
                    fill: "none",
                    strokeWidth: "1.2",
                    strokeLinecap: "round",
                    style: {
                        stroke: 'var(--tower-far)'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/login/Scene.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: NEAR.d,
                    fill: "none",
                    strokeWidth: "1.7",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    style: {
                        stroke: 'var(--tower)'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/login/Scene.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/login/Scene.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/login/Scene.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
function FooterWave() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 1600 130",
        preserveAspectRatio: "none",
        className: "pointer-events-none absolute inset-x-0 bottom-0 z-10 block h-[clamp(70px,9vw,130px)] w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 62C420 108 980 32 1600 14V130H0Z",
                style: {
                    fill: 'var(--gold)'
                }
            }, void 0, false, {
                fileName: "[project]/components/login/Scene.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 72C420 118 980 42 1600 30V130H0Z",
                style: {
                    fill: 'var(--wave)'
                }
            }, void 0, false, {
                fileName: "[project]/components/login/Scene.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/login/Scene.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/login/demoSession.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/lib/login/hooks.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLang",
    ()=>useLang,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
    const [theme, setThemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('light');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const saved = read('login-theme');
        if (saved === 'light' || saved === 'dark') {
            setThemeState(saved);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setThemeState('dark');
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [
        theme
    ]);
    const setTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((next)=>{
        setThemeState(next);
        write('login-theme', next);
    }, []);
    return {
        theme,
        setTheme
    };
}
function useLang() {
    const [lang, setLangState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('en');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const saved = read('login-lang');
        if (saved === 'en' || saved === 'hi') setLangState(saved);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.documentElement.lang = lang;
    }, [
        lang
    ]);
    const setLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((next)=>{
        setLangState(next);
        write('login-lang', next);
    }, []);
    return {
        lang,
        setLang
    };
}
}),
"[project]/lib/login/i18n.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
];

//# sourceMappingURL=_18ukuke27nb77._.js.map