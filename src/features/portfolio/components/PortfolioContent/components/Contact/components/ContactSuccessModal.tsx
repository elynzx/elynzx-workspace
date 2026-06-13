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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ui-inner">
      <div className="bg-ui-inner py-9 px-12 rounded-2xl shadow-xl flex flex-col items-center max-w-sm mx-4 text-center transition-all duration-300 backdrop-blur-3xl ring-1 ring-ui-border">
        {image && (
          <div className="py-2 rounded-full">
            <img src={image} alt="Status icon" className="w-24 h-auto" />
          </div>
        )}

        <h3 className="text-xl font-bold text-ui-text mb-2 font-title">
          {title}
        </h3>
        <p className="text-ui-text/80 text-sm mb-6">{description}</p>

        <button
          onClick={onClose}
          className="py-3 px-10 rounded-xl text-sm font-bold transition-all flex items-center justify-center bg-ui-button hover:bg-ui-accent text-white cursor-pointer active:scale-95 shadow-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};
