import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

interface ContactData {
  firstName: string;
  email: string;
  message: string;
}

const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_USER: import.meta.env.VITE_EMAILJS_TEMPLATE_USER,
  TEMPLATE_ME: import.meta.env.VITE_EMAILJS_TEMPLATE_ME,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC,
};

export const useContactForm = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactData>({
    defaultValues: { firstName: "", email: "", message: "" },
    mode: "onChange",
  });

  const sendEmail = async (data: ContactData) => {
    try {
      const commonParams = {
        from_name: data.firstName,
        reply_to: data.email,
        message: data.message,
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_USER,
        commonParams,
        EMAILJS_CONFIG.PUBLIC_KEY,
      );
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ME,
        commonParams,
        EMAILJS_CONFIG.PUBLIC_KEY,
      );

      setShowModal(true);
      reset();
    } catch (error) {
      console.error("Emailjs integration failed:", error);
    }
  };

  return {
    control,
    errors,
    isSubmitting,
    showModal,
    closeModal: () => setShowModal(false),
    onSubmit: handleSubmit(sendEmail),
  };
};
