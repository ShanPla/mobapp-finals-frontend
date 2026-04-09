import React, { createContext, useContext, useState } from 'react';

interface Toast { message: string; type: 'success' | 'error' | 'info'; }
interface ToastContextType {
  toast: Toast | null;
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  hideToast: () => void;
}

const ToastContext = createContext<ToastContextType>({ toast: null, showToast: () => {}, hideToast: () => {} });

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toast, setToast] = useState<Toast | null>(null);
  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };
  const hideToast = () => setToast(null);
  return <ToastContext.Provider value={{ toast, showToast, hideToast }}>{children}</ToastContext.Provider>;
};

export const useToast = () => useContext(ToastContext);