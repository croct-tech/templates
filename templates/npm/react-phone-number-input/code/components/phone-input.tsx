"use client"

import { default as BasePhoneInput, type DefaultInputComponentProps, type Props } from "react-phone-number-input"

export type PhoneInputProps<P extends DefaultInputComponentProps> = Props<P> | Omit<Props<P>, 'onChange'>;

export function PhoneInput<P extends DefaultInputComponentProps>({onChange, ...props}: PhoneInputProps<P>) {
  return (
    <>
      <style>{style}</style>
      <BasePhoneInput
        className={className}
        onChange={onChange ?? (() => {})}
        {...props}
      />
    </>
  );
}

const className = '__phone_input_';

const style = css`
.${className} {
  --background-color: #ffffff;
  --foreground-color: #0f172a;
  --muted-foreground-color: #64748b;
  --border-color: #e4e4e7;
  --input-color: #e4e4e7;
  --ring-color: #a1a1aa;
  --ring-offset-color: #ffffff;
  --destructive-color: #ef4444;
  --ring-offset-width: 2px;
  --ring-inset: ;
  --ring-offset-shadow: var(--ring-inset) 0 0 0 var(--ring-offset-width) var(--ring-offset-color);
  --ring-shadow: var(--ring-inset) 0 0 0 calc(2px + var(--ring-offset-width)) var(--ring-color);
  --shadow: 0 0 #0000;
}

.${className} {
  display: flex;
  height: 2.5rem;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid var(--border-color);
  background-color: var(--background-color);
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--foreground-color);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.PhoneInput:focus-within {
  outline: none;
  box-shadow: var(--ring-offset-shadow), var(--ring-shadow), var(--shadow);
}

.PhoneInput:has(:disabled) {
  cursor: not-allowed;
  opacity: 0.5;
}

.PhoneInput::placeholder {
  color: var(--muted-foreground-color);
}

.PhoneInputCountry {
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  position: relative;
}

.PhoneInputCountrySelect {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 1;
  top: 0;
  left: 0;
}

.PhoneInputCountryIcon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.25rem;
  overflow: hidden;
  border-radius: 0.125rem;
  margin-right: 0.25rem;
}

.PhoneInputCountryIconImg {
  width: 100%;
  height: auto;
}

.PhoneInputCountrySelectArrow {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  width: 0.25rem;
  height: 0.25rem;
  border-right: 1.5px solid var(--foreground-color);
  border-bottom: 1.5px solid var(--foreground-color);
  transform: rotate(45deg) translateY(-1px);
}

.PhoneInputInput {
  flex: 1;
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 1rem;
  color: var(--foreground-color);
}

.PhoneInputInput:focus {
  outline: none;
}

.PhoneInputInput::placeholder {
  color: var(--muted-foreground-color);
}

.PhoneInputInput:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* Responsive text size */
@media (min-width: 768px) {
  .${className} {
    font-size: 0.875rem;
  }

  .PhoneInputInput {
    font-size: 0.875rem;
  }
}

/* Error state styling */
.PhoneInput.error {
  border-color: var(--destructive-color);
}

.PhoneInput.error:focus-within {
  --ring-color: rgba(239, 68, 68, 0.3);
  box-shadow: var(--ring-offset-shadow), var(--ring-shadow), var(--shadow);
}`;

function css(strings: TemplateStringsArray, ...values: (string | number | undefined)[]): string {
  let raw = '';

  for (let index = 0; index < strings.length; index++) {
  raw += strings[index];

  if (index < values.length) {
    raw += values[index];
  }
  }

  return raw.replace(/\s+/g, ' ').trim();
}
