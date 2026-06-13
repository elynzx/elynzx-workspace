import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendContactForm, type ContactFormData } from "../service/sendContactForm";

export const useContactForm = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    defaultValues: { firstName: "", email: "", message: "" },
    mode: "onChange",
  });

  const processSubmit = async (data: ContactFormData) => {
    try {
      await sendContactForm(data);
      setShowModal(true);
      reset();
    } catch (error) {
      console.error("Failed to process contact form submit:", error);
    }
  };

  return {
    control,
    register,
    errors,
    isSubmitting,
    showModal,
    closeModal: () => setShowModal(false),
    onSubmit: handleSubmit(processSubmit),
  };
};
