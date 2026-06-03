import { Controller } from "react-hook-form";
import BunnyMail from "../../../../../../assets/stickers/bunnyMail.png";
import { VALIDATION_RULES } from "./utils/validations";
import { Input, TextArea } from "./components/ContactInput";
import { ContactSuccessModal } from "./components/ContactSuccessModal";
import { useContactForm } from "./hooks/useContactForm";

export const Contact = () => {
  const { control, errors, isSubmitting, showModal, closeModal, onSubmit } =
    useContactForm();

  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full h-full animate-in fade-in text-ui-text transition-colors duration-300">
      <div className="w-full flex flex-col md:flex-row items-center md:gap-16 py-8 md:py-12 rounded-2xl flex-1 transition-colors duration-300 bg-ui-glass/40 md:bg-transparent">
        <div className="flex flex-col items-center justify-center shrink-0 select-none md:h-full md:p-20 ">
          <img
            src={BunnyMail}
            alt="Mail rabbit"
            className="w-24 md:w-44 h-auto pointer-events-none jello-vertical"
          />
          <div className="flex justify-center  items-center w-full text-center">
            <div>
              <h3 className="text-lg md:text-2xl font-black text-ui-text tracking-widest">
                Get in touch!
              </h3>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          autoComplete="off"
          className="flex-1 flex flex-col md:max-w-md gap-5 w-full items-center justify-center md:bg-ui-glass/40 px-6 md:p-12 rounded-2xl"
        >
          <div className="flex flex-col md:gap-4 w-full">
            <Controller
              name="firstName"
              control={control}
              rules={VALIDATION_RULES.fullName}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Full Name"
                  placeholder="Your name here..."
                  error={errors.firstName?.message}
                  disabled={isSubmitting}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              rules={VALIDATION_RULES.email}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Email Address"
                  type="email"
                  placeholder="hello@example.com"
                  error={errors.email?.message}
                  disabled={isSubmitting}
                />
              )}
            />

            <Controller
              name="message"
              control={control}
              rules={VALIDATION_RULES.text}
              render={({ field }) => (
                <TextArea
                  {...field}
                  label="Message"
                  placeholder="Type your message here..."
                  error={errors.message?.message}
                  disabled={isSubmitting}
                />
              )}
            />
          </div>

          <div className="mt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 rounded-2xl bg-pink-400 text-white font-bold text-sm border border-white/20 shadow-md hover:scale-[1.05] active:scale-98 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Mail ♡"}
            </button>
          </div>
        </form>
      </div>

      <ContactSuccessModal
        isOpen={showModal}
        onClose={closeModal}
        image={BunnyMail}
        title="Message Sent!"
        description="Thank you for reaching out, I'll get back to you as soon as possible! ♡"
      />
    </div>
  );
};
