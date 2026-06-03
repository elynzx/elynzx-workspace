interface InputProps {
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  type?: string;
  error?: string;
  disabled?: boolean;
}

export const Input = ({
  name,
  placeholder,
  value,
  onChange,
  label,
  type = "text",
  error,
  disabled,
}: InputProps) => (
  <div className="flex flex-col w-full gap-2 text-left py-1">
    {label && (
      <label
        htmlFor={name}
        className="font-bold text-xs md:text-sm md:w-24 text-ui-text/90"
      >
        {label}
      </label>
    )}
    <div className="flex-1 flex flex-col relative w-full">
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        onPaste={(e) => e.preventDefault()}
        autoComplete="off"
        className={`flex-1 text-xs md:text-sm text-ui-text bg-ui-inner border rounded-lg px-3 py-2.5 outline-none transition-all placeholder-ui-text/30
          ${error ? "border-2 border-ui-error bg-pink-500/5" : "border-ui-border focus:border-ui-border focus:bg-ui-glass/50"}`}
      />
      {error && (
        <span className="text-[10px] md:text-xs font-bold text-ui-error mt-1 pl-1 animate-in fade-in">
          {error}
        </span>
      )}
    </div>
  </div>
);

export const TextArea = ({
  name,
  placeholder,
  value,
  onChange,
  label,
  error,
  disabled,
}: Omit<InputProps, "type">) => (
  <div className="flex flex-col  w-full gap-2 text-left">
    {label && (
      <label
        htmlFor={name}
        className="font-bold text-xs md:text-sm md:w-24 text-ui-text/90 pt-2.5"
      >
        {label}
      </label>
    )}
    <div className="flex-1 flex flex-col relative w-full">
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        rows={3}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        className={`flex-1 text-xs md:text-sm text-ui-text bg-ui-inner border rounded-lg px-3 py-2.5 outline-none transition-all placeholder-ui-text/30 resize-none
          ${error ? "border-2 border-ui-error bg-pink-500/5" : "border-ui-border focus:border-ui-border focus:bg-ui-glass/50"}`}
      />
      {error && (
        <span className="text-[10px] md:text-xs font-bold text-ui-error mt-1 pl-1 animate-in fade-in">
          {error}
        </span>
      )}
    </div>
  </div>
);
