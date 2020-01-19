import React, { useState, useContext } from "react";
import firebase from "firebase/app"; // Import firebase to use FieldValue functions
import app from "./firebase";
import { AuthContext } from "./Auth";

const AddBookForm = () => {
  const { user } = useContext(AuthContext);

  const handleChange = event => {
    // Update values object with changes from form inputs
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const { title, author, date } = values;

    // Add book details to user's list in database
    const database = app.firestore();
    database
      .collection("users")
      .doc(user.email)
      .update({
        list: firebase.firestore.FieldValue.arrayUnion({
          title,
          author,
          date
        })
      });
  };

  const getDate = () => {
    // Get current date and format YYYY-MM-DD for input field
    const currentDate = new Date();
    return currentDate.toISOString().substr(0, 10);
  };

  const [values, setValues] = useState({
    // Form input values
    title: "",
    author: "",
    date: getDate()
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input name="title" type="text" onChange={handleChange} />
        </label>
        <label>
          Author
          <input name="author" type="text" onChange={handleChange} />
        </label>
        <label>
          Date Finished
          <input
            name="date"
            type="date"
            defaultValue={getDate()}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
