import React, { useState, useContext } from "react";
import firebase from "firebase/app"; // Import firebase to use FieldValue functions
import app from "./firebase";
import { useForm } from "react-hook-form";
import { AuthContext } from "./Auth";
import StarRating from "./starrating";

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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Title
          <input name="title" type="text" ref={register} />
        </label>
        <label>
          Author
          <input name="author" type="text" ref={register} />
        </label>
        <label>
          Rating
          <StarRating register={register}></StarRating>
        </label>
        <label>
          Date Finished
          <input
            name="date"
            type="date"
            defaultValue={getDate()}
            ref={register}
          />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
