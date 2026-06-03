interface Props {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  image?: string;
}

export const ContactSuccessModal = ({
  isOpen,
  onClose,
  title,
  description,
  image,
}: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm fadeIn">
      <div className="bg-ui-glass border border-ui-inner p-8 rounded-2xl shadow-2xl flex flex-col items-center max-w-sm mx-4 text-center backdrop-blur-2xl transition-all duration-300">
        {image && (
          <div className="p-4 rounded-full">
            <img src={image} alt="Status icon" className="w-24 h-auto" />
          </div>
        )}

        <h3 className="text-xl font-bold text-ui-text mb-2 font-title">
          {title}
        </h3>
        <p className="text-ui-text/60 text-sm mb-6">{description}</p>

        <button
          onClick={onClose}
          className="py-3 px-6 rounded-full font-bold transition-all flex items-center justify-center bg-pink-400 hover:bg-pink-500 text-white cursor-pointer active:scale-95 shadow-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};
