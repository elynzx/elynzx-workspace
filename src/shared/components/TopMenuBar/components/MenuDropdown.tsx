import { ContactModal } from "./ContactModal";
import { InfoModal } from "./InfoModal";
import { MenuModal } from "./MenuModal";

interface Props {
  activeDropdown: "contact" | "info" | null;
  toggleDropdown: (type: "contact" | "info" | null) => void;
  closeDropdown: () => void;
  toggleContact: () => void;
  toggleSpecs: () => void;
  systemSpecs: Array<{ label: string; value: string }>;
}

export const MenuDropdown = ({
  activeDropdown,
  toggleDropdown,
  closeDropdown,
  toggleContact,
  toggleSpecs,
  systemSpecs,
}: Props) => {
  return (
    <div className="relative flex items-center gap-4">
      {(["contact", "info"] as const).map((type) => {
        const isBtnActive = activeDropdown === type;
        return (
          <button
            key={type}
            onClick={() => toggleDropdown(type)}
            className={`px-4 py-2 rounded-xl capitalize font-bold transition-all duration-200 focus:outline-none cursor-pointer ${
              isBtnActive
                ? "text-ui-text bg-ui-inner border border-ui-inner shadow-xs"
                : "text-ui-text/70 hover:bg-[#F69BC3] hover:text-white"
            }`}
          >
            {type}
          </button>
        );
      })}

      {activeDropdown === "contact" && (
        <MenuModal title="Send a Message">
          <ContactModal
            closeDropdown={closeDropdown}
            toggleContact={toggleContact}
          />
        </MenuModal>
      )}

      {activeDropdown === "info" && (
        <MenuModal title="System Specs">
          <InfoModal
            systemSpecs={systemSpecs}
            closeDropdown={closeDropdown}
            toggleSpecs={toggleSpecs}
          />
        </MenuModal>
      )}
    </div>
  );
};
