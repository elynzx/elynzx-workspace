import BunnyMail from "../../../../../../assets/stickers/bunnyMail.png";
import { VALIDATION_RULES } from "./utils/validations";
import { ContactSuccessModal } from "./components/ContactSuccessModal";
import { useContactForm } from "./hooks/useContactForm";

export const Contact = () => {
  const { register, errors, isSubmitting, showModal, closeModal, onSubmit } =
    useContactForm();

  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full h-full animate-in fade-in text-ui-text transition-colors duration-300 py-2 md:py-0">
      <div className="w-full flex flex-col md:flex-row items-center md:gap-20 py-8 md:py-12 px-4 md:px-0 rounded-2xl flex-1 transition-colors duration-300 bg-ui-glass/40 md:bg-transparent">
        <div className="flex flex-col items-center justify-center shrink-0 select-none md:h-full md:p-20 ">
          <img
            src={BunnyMail}
            alt="Mail rabbit"
            className="w-24 md:w-44 h-auto pointer-events-none jello-vertical"
          />
          <div className="flex justify-center items-center w-full text-center">
            <div>
              <h3 className="text-lg md:text-2xl font-black font-secondary text-ui-text tracking-wider">
                Get in touch!
              </h3>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          autoComplete="off"
          className="flex-1 flex flex-col md:max-w-md gap-5 w-full items-center justify-center md:bg-ui-glass/20 px-6 md:p-12 rounded-2xl md:border border-ui-border"
        >
          <div className="flex flex-col md:gap-4 w-full">
            
            <div className="flex flex-col w-full gap-2 text-left">
              <label htmlFor="firstName" className="font-bold text-xs md:text-sm md:w-24 text-ui-text/90">
                Full Name
              </label>
              <div className="flex-1 flex flex-col relative w-full">
                <input
                  id="firstName"
                  type="text"
                  placeholder="Your name here..."
                  disabled={isSubmitting}
                  autoComplete="off"
                  onPaste={(e) => e.preventDefault()}
                  {...register("firstName", VALIDATION_RULES.fullName)}
                  className={`flex-1 bg-ui-inner/70 text-xs md:text-sm text-ui-text rounded-lg px-3 py-2.5 outline-none transition-all placeholder-ui-text/30
                    ${errors.firstName ? "border-2 border-ui-error" : "focus:bg-ui-inner"}`}
                />
                {errors.firstName && (
                  <span className="text-[10px] md:text-xs font-bold text-ui-error mt-1 pl-1 animate-in fade-in">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col w-full gap-2 text-left ">
              <label htmlFor="email" className="font-bold text-xs md:text-sm md:w-24 text-ui-text/90">
                Email Address
              </label>
              <div className="flex-1 flex flex-col relative w-full">
                <input
                  id="email"
                  type="email"
                  placeholder="hello@example.com"
                  disabled={isSubmitting}
                  autoComplete="off"
                  {...register("email", VALIDATION_RULES.email)}
                  className={`flex-1 bg-ui-inner/70 text-xs md:text-sm text-ui-text rounded-lg px-3 py-2.5 outline-none transition-all placeholder-ui-text/30
                    ${errors.email ? "border-2 border-ui-error" : "focus:bg-ui-inner"}`}
                />
                {errors.email && (
                  <span className="text-[10px] md:text-xs font-bold text-ui-error mt-1 pl-1 animate-in fade-in">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col w-full gap-2 text-left">
              <label htmlFor="message" className="font-bold text-xs md:text-sm md:w-24 text-ui-text/90 pt-1">
                Message
              </label>
              <div className="flex-1 flex flex-col relative w-full">
                <textarea
                  id="message"
                  placeholder="Type your message here..."
                  rows={3}
                  disabled={isSubmitting}
                  {...register("message", VALIDATION_RULES.text)}
                  className={`flex-1 text-xs md:text-sm text-ui-text bg-ui-inner/70 rounded-lg px-3 py-2.5 outline-none transition-all placeholder-ui-text/30 resize-none
                    ${errors.message ? "border-2 border-ui-error" : "border-ui-border focus:border-ui-border focus:bg-ui-inner"}`}
                />
                {errors.message && (
                  <span className="text-[10px] md:text-xs font-bold text-ui-error mt-1 pl-1 animate-in fade-in">
                    {errors.message.message}
                  </span>
                )}
              </div>
            </div>

          </div>

          <div className="mt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 rounded-xl bg-ui-button text-white font-bold text-sm border border-ui-border/50 shadow-md hover:scale-[1.05] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
