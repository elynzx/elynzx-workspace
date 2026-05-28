import { useContactForm } from "../hooks/useContactModal";

interface Props {
  closeDropdown: () => void;
  toggleContact: () => void;
}

export const ContactModal = ({ closeDropdown, toggleContact }: Props) => {
  const { handleSubmit } = useContactForm({ onSuccess: closeDropdown });

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
      <input
        type="email"
        placeholder="your-email@mail.com"
        disabled
        className="w-full px-3 py-2 rounded-lg bg-white/10 placeholder-white/50  border border-white/20 text-xs focus:outline-none cursor-not-allowed"
      />
      <textarea
        placeholder="Type your message here..."
        rows={2}
        disabled
        className="w-full px-3 py-2 rounded-lg bg-white/10 placeholder-white/50  border border-white/20 text-xs focus:outline-none resize-none cursor-not-allowed"
      />
      <button
        type="button"
        onClick={() => {
          toggleContact();
          closeDropdown();
        }}
        className="w-full text-center mt-1 py-2 bg-pink-400/60 hover:bg-pink-400 border border-white/20 text-white rounded-xl text-xs transition-colors font-bold shadow-sm cursor-pointer"
      >
        Open Advanced Contact
      </button>
    </form>
  );
};
