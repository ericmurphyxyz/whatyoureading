import React, { useState, useContext } from "react";
import firebase from "firebase/app"; // Import firebase to use FieldValue functions
import app from "./firebase";
import { useForm } from "react-hook-form";
import { AuthContext } from "./auth";
import StarRating from "./starrating";
import { Form, Label, Input, Error, Button } from "./design";

const AddBookForm = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    // Add book details to user's list in database
    const database = app.firestore();
    database
      .collection("users")
      .doc(user.email)
      .update({
        list: firebase.firestore.FieldValue.arrayUnion(data)
      });
  };

  const getDate = () => {
    // Get current date and format YYYY-MM-DD for input field
    const currentDate = new Date();
    return currentDate.toISOString().substr(0, 10);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="title">Title</Label>
      <Input
        name="title"
        id="title"
        type="text"
        ref={register({ required: true })}
        error={errors.title}
      />
      {errors.title && <Error>Book title is required.</Error>}
      <Label>Rating</Label>
      <StarRating register={register}></StarRating>
      <Label htmlFor="date">Date Finished</Label>
      <Input
        name="date"
        id="date"
        type="date"
        defaultValue={getDate()}
        ref={register}
      />
      <Button type="submit">Add Book</Button>
    </Form>
  );
};

export default AddBookForm;
