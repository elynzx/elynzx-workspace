import emailjs from "@emailjs/browser";

export interface ContactFormData {
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

export const sendContactForm = async (data: ContactFormData): Promise<void> => {
  const templateParams = {
    from_name: data.firstName,
    reply_to: data.email,
    message: data.message,
  };

  await Promise.all([
    emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_USER,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY,
    ),
    emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ME,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY,
    ),
  ]);
};
