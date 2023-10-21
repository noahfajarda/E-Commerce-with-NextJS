"use client";

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // prevent hydration error
  // don't render on server-side
  return !isMounted ? null : (
    // otherwise return store modal component
    <>
      <StoreModal />
    </>
  );
};
