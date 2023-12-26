import React from "react";
import { useFormStatus } from "react-dom";

const MealsFormSubmit = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className={pending ? "submitting" : "not-submitting"}
    >
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
};

export default MealsFormSubmit;
