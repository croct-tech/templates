"use client";

import React, { useEffect, useState } from "react";
import { Button, Link } from "@heroui/react";
import { useCroct, useEvaluation } from "@croct/plug-react";

export type CookieConsentProps = {
  visible?: boolean;
}

export function CookieConsent({visible}: CookieConsentProps) {
  const [currentVisible, setCurrentVisible] = useState(visible ?? false);
  const croct = useCroct();
  const accepted = useEvaluation<boolean | null>("user's consent", {
    initial: visible ?? false,
    fallback: false,
  });

  useEffect(() => {
    setCurrentVisible(accepted === null)
  }, [accepted]);

  useEffect(() => {
    if (visible !== undefined) {
      setCurrentVisible(visible)
    }
  }, [visible]);

  const saveAnswer = (accepted: boolean) => {
    setCurrentVisible(false);

    croct.user.edit()
      .set('custom.consent', accepted)
      .save();
  }

  return (
    <>
      {currentVisible && (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 px-[21px] pb-[26px]">
          <div
            className="pointer-events-auto flex w-full items-center justify-between gap-x-20 rounded-large border border-divider bg-background/15 px-6 py-4 shadow-small backdrop-blur">
            <p className="text-small font-normal text-default-700">
              We use cookies to provide the best experience. By continuing to use our site, you agree to our&nbsp;
              <Link className="text-small font-normal" role="link">Cookie Policy.</Link>
            </p>
            <div className="flex items-center gap-2">
              <Button
                color="default"
                className="relative h-10 overflow-hidden bg-transparent text-small font-medium"
                href="#"
                style={{
                  border: "solid 2px transparent",
                  backgroundImage: `linear-gradient(hsl(var(--heroui-background)), hsl(var(--heroui-background))), linear-gradient(to right, #F871A0, #9353D3)`,
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
                variant="bordered"
                onPress={() => saveAnswer(true)}
              >
                Accept all
              </Button>
              <Button
                radius="full"
                variant="light"
                className="text-default-500"
                onPress={() => saveAnswer(false)}
              >
                Reject all
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
