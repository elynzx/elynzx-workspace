const REGEX_PATTERNS = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  name: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/,
  text: /^[^<>]*$/,
};

const VALIDATION_MESSAGES = {
  required: "This field is required",
  email: "Please enter a valid email address",
  name: "Please enter a valid name using only letters, at least 2 characters",
  noCode: "Script tags are not allowed",
};

export const VALIDATION_RULES = {
  email: {
    required: VALIDATION_MESSAGES.required,
    pattern: {
      value: REGEX_PATTERNS.email,
      message: VALIDATION_MESSAGES.email,
    },
  },
  fullName: {
    required: VALIDATION_MESSAGES.required,
    pattern: {
      value: REGEX_PATTERNS.name,
      message: VALIDATION_MESSAGES.name,
    },
  },
  text: {
    required: VALIDATION_MESSAGES.required,
    pattern: {
      value: REGEX_PATTERNS.text,
      message: VALIDATION_MESSAGES.noCode,
    },
  },
};