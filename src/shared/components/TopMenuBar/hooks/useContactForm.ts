import type { FormEvent } from "react";

interface Props {
  onSuccess: () => void;
}

export const useContactForm = ({ onSuccess }: Props) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Future mail logic goes here!");
    onSuccess();
  };

  return {
    handleSubmit,
  };
};
