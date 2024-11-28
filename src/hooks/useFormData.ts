import { useState } from "react";

export const useFormData = <T extends object>(state: T) => {
  const [formData, setFormData] = useState<T>(state);

  return { formData, setFormData }
}