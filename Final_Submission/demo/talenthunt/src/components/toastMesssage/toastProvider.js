import React, { createContext, useContext, useState } from "react";
import CustomToast from "./toastMessage";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("success");

  const showToast = (message, type) => {
    setMessage(message);
    setType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <CustomToast
        open={open}
        message={message}
        type={type}
        onClose={handleClose}
      />
    </ToastContext.Provider>
  );
};