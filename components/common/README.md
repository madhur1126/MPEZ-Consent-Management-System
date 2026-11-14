# Shared UI components

Import components and their prop types from `@/components/common`.

## Input

`Input` forwards its ref to a native input and accepts the native input attributes, including `value`, `defaultValue`, `onChange`, and `onBlur`. This supports controlled/uncontrolled usage and form libraries such as React Hook Form's `register`.

```tsx
<Input
  format="mobile"
  label="Mobile number"
  value={mobile}
  onChange={(event) => setMobile(event.currentTarget.value)}
  leftIcon={<PhoneIcon />}
  error={mobileError}
/>
```

Use the native `type` prop for text, number, email, password, and search inputs. Props added to the native input attributes:

- `format`: `mobile`, `aadhaar`, `pan`, or `consumerNumber`; provides appropriate type/input-mode/length/pattern defaults. Explicit native attributes override these defaults.
- `label`, `leftIcon`, `rightIcon`
- `required`: also displays the required marker.
- `error`, `success`, `helperText`, `loading`
- `validate(value)`: optional validation function, called on blur; return a message to show an error.
- `containerClassName`, `className`, `labelClassName`, `inputClassName`: customize the outer wrapper, field, label, and input respectively.

## OTPInput

```tsx
<OTPInput
  length={6}
  label="Enter OTP"
  value={digits}
  onChange={setDigits}
  autoSubmit
  onComplete={(code) => verifyOtp(code)}
  resend={{
    label: 'Resend OTP',
    cooldownSeconds: 60,
    countdownLabel: (seconds) => `Resend in ${seconds}s`,
    onResend: requestOtp,
  }}
/>
```

- `length` defaults to 6. `value`/`onChange` provide controlled usage; `defaultValue` enables uncontrolled usage.
- `autoFocus` defaults to `true`; `autoSubmit` defaults to `false` and calls `onComplete(code)` once per completed code when enabled.
- `disabled`, `invalid`, `error`, and `success` control state feedback.
- `resend` optionally renders a resend action and owns its cooldown timer. `onResend` can return `false` to avoid starting the cooldown.
- `footerAction` renders a secondary action alongside resend, such as a “Change number” control.
- OTP validation and verification remain the responsibility of the parent callback.

## Button

```tsx
<Button
  type="submit"
  variant="primary"
  size="large"
  loading={saving}
  fullWidth
  rightIcon={<ArrowIcon />}
>
  Save
</Button>
```

- `variant`: `primary`, `secondary`, `outline`, `ghost`, `danger`, or `success`.
- `size`: `small`, `medium`, or `large`.
- `leftIcon`, `rightIcon`, `loading`, and `fullWidth` are optional.
- All native button attributes are forwarded. Loading automatically disables the button and sets `aria-busy`.
