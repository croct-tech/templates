"use client"

import { default as BasePhoneInput, type DefaultInputComponentProps, type Props } from "react-phone-number-input"
import "?/./phone-input.css"

export type PhoneInputProps<P extends DefaultInputComponentProps> = Props<P> | Omit<Props<P>, 'onChange'>;

export function PhoneInput<P extends DefaultInputComponentProps>({onChange, ...props}: PhoneInputProps<P>) {
  return (
    <BasePhoneInput
      onChange={onChange ?? (() => {})}
      {...props}
    />
  );
}
