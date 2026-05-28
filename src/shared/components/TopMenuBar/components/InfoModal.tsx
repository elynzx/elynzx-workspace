// Dentro de tu archivo InfoModal.tsx
interface Props {
  systemSpecs: Array<{ label: string; value: string }>;
  closeDropdown: () => void;
  toggleSpecs: () => void;
}

export const InfoModal = ({ systemSpecs, closeDropdown, toggleSpecs }: Props) => (
  <>
    <div className="flex flex-col gap-2 p-1 w-full">
      {systemSpecs.map((spec) => (
        <div key={spec.label} className="flex justify-between border-b border-white/10 pb-1.5  text-xs">
          <span className="opacity-75">{spec.label}:</span>
          <span className="font-extrabold">{spec.value}</span>
        </div>
      ))}
    </div>
    <button
      type="button"
      onClick={() => {
        toggleSpecs();
        closeDropdown();
      }}
      className="w-full text-center mt-1 py-2 bg-pink-400/60 hover:bg-pink-400 border border-white/20 text-white rounded-xl text-xs transition-colors font-bold shadow-sm cursor-pointer"
    >
      View Full Diagnostics
    </button>
  </>
);
