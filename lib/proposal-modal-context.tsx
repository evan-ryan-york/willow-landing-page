"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ProposalModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ProposalModalContext = createContext<ProposalModalContextType | undefined>(
  undefined
);

export function ProposalModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ProposalModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ProposalModalContext.Provider>
  );
}

export function useProposalModal() {
  const context = useContext(ProposalModalContext);
  if (context === undefined) {
    throw new Error(
      "useProposalModal must be used within a ProposalModalProvider"
    );
  }
  return context;
}
