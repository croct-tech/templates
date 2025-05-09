"use client"

import { default as BasePhoneInput, type DefaultInputComponentProps, type Props } from "react-phone-number-input"
import styles from "?/./phone-input.module.css"

export type PhoneInputProps<P extends DefaultInputComponentProps> = Props<P> | Omit<Props<P>, 'onChange'>;

export function PhoneInput<P extends DefaultInputComponentProps>({onChange, ...props}: PhoneInputProps<P>) {
  return (
    <BasePhoneInput
      className={styles.PhoneInput}
      onChange={onChange ?? (() => {})}
      {...props}
    />
  );
}
