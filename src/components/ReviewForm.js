import React from 'react';
import { useState } from 'react';


export default function ReviewForm(props) {
  const [textValue, setTextValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addReview({ text: textValue, reviewId: props.reviewId });
    setTextValue("");
  };

  return (
    <form className="d-flex w-50">
      <input
        type="text"
        className="form-control"
        value={textValue}
        onChange={(event) => setTextValue(event.target.value)}
      />
      <button className="btn btn-success ms-2" onClick={handleSubmit}>
        Submit Review
      </button>
    </form>
  );
}