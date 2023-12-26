"use client";
import React, { useState } from "react";

import ImagePicker from "@/components/meals/image-picker";
import MealsFormSubmit from "@/components/meals/meals-form-submit";
import { shareMeal } from "@/lib/actions";

import classes from "./page.module.css";

const ShareMealPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    summary: "",
    instructions: "",
    image: null,
    message: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form validation logic here

    // Assuming shareMeal function needs formData as an argument
    shareMeal(formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      title: "",
      summary: "",
      instructions: "",
      image: null,
      message: "Meal shared successfully!", // Set appropriate success message
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (imageData) => {
    setFormData({
      ...formData,
      image: imageData,
    });
  };

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input
              type="text"
              id="summary"
              name="summary"
              value={formData.summary}
              onChange={handleInputChange}
              required
            />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              value={formData.instructions}
              onChange={handleInputChange}
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker
            label="Your image"
            name="image"
            onImageChange={handleImageChange}
          />
          {formData.message && <p>{formData.message}</p>}
          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
};

export default ShareMealPage;
