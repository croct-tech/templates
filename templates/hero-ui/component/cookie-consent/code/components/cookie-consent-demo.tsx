"use client";

import { CookieConsent } from "?/./cookie-consent.{js,jsx,ts,tsx}";
import { Button, Link } from "@heroui/react";
import { useCroct } from "@croct/plug-react";
import { useState } from "react";

export function CookieConsentDemo() {
  const [visible, setVisible] = useState<boolean>();
  const croct = useCroct();

  const reset = async () => {
    setVisible(true);

    await croct.user.edit()
      .unset('custom.consent')
      .save()

    setVisible(undefined);
  };

  return (
    <div className="text-foreground bg-background min-w-screen min-h-screen">
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <div className="max-w-lg w-full text-center mb-6">
          <h1 className="text-2xl font-semibold mb-2">Website Content</h1>
          <p className="text-default-600 mb-4">
            This page shows an example of how to implement a cookie consent component using <Link href="https://heroui.ai?utm_source=croct">Hero UI</Link> and <Link href="https://croct.com?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.hero_ui&utm_content=cookie_consent">Croct</Link>.
          </p>
          <Button
            variant="flat"
            onPress={reset}
            className="mx-auto"
          >
            Reset consent
          </Button>
        </div>
        <CookieConsent visible={visible} />
      </div>
    </div>
  );
}
