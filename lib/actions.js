import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function handleInvalidInput() {
  return {
    success: false,
    message: "Invalid input. Please provide valid information.",
  };
}

function handleSuccess() {
  return {
    success: true,
    message: "Meal shared successfully!",
  };
}

function handleError() {
  return {
    success: false,
    message: "An error occurred while sharing the meal.",
  };
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !isValidEmail(meal.creator_email) ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return handleInvalidInput();
  }

  try {
    await saveMeal(meal);
    revalidatePath("/meals");
    redirect("/meals");
    return handleSuccess();
  } catch (error) {
    return handleError();
  }
}
