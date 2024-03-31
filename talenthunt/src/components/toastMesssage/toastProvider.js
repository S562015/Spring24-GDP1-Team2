import React, { useState } from "react";
import CustomToast from "./CustomToast";

const ToastProvider = ({ children }) => {
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
    <>
      <CustomToast
        open={open}
        message={message}
        type={type}
        onClose={handleClose}
      />
      {children && React.cloneElement(children, { showToast })}
    </>
  );
};

export default ToastProvider;
