import { Controller } from "react-hook-form";
import { SparkleIcon } from "@phosphor-icons/react";
import BunnyMail from "../../../../assets/stickers/bunnyMail.png";
import { VALIDATION_RULES } from "./utils/validations";
import { Input, TextArea } from "./components/ContactInput";
import { ContactSuccessModal } from "./components/ContactSuccessModal";
import { useContactForm } from "./hooks/useContactForm";

export const ContactView = () => {
  const { control, errors, isSubmitting, showModal, closeModal, onSubmit } =
    useContactForm();

  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full h-full animate-in fade-in text-ui-text transition-colors duration-300">
      <div className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-ui-inner border border-ui-inner md:py-12 rounded-2xl shadow-inner flex-1 min-h-0 transition-colors duration-300">
        <div className="flex flex-col items-center justify-center shrink-0 select-none border-r border-ui-border h-full p-20">
          <img
            src={BunnyMail}
            alt="Mail rabbit"
            className="w-24 md:w-44 h-auto pointer-events-none animate-bounce duration-[4s]"
          />
          <div className="flex justify-center  items-center w-full text-center">
            <div>
              <h3 className="text-2xl font-black text-ui-text tracking-widest">
                Get in touch!
              </h3>
              <p className="text-xs font-bold text-ui-accent tracking-wide mt-0.5 font-code uppercase">
                Mail Terminal
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          autoComplete="off"
          className="flex-1 flex flex-col md:max-w-md gap-5 w-full items-center justify-center"
        >
          <div className="flex flex-col gap-4 w-full">
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
