import React from 'react';
import { useState } from 'react';


// function logSubmit(event) {
//   log.textContent = 'Form Submitted! Timestamp: ${event.timeStamp}';
//   event.preventDefault();
// }
// const form = 
// document.getElementById("form");
// const log=
// document.getElementById("log");
// form.addEventListener("submit", logSubmit);

export default function ReviewForm(props) {
  const [textValue, setTextValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addReview({ text: textValue, reviewId: props.reviewId });
    setTextValue(""); 
  };
  

  return (
    <form>
      <input
        type="text"
        className="form-control"
        value={textValue}
        onChange={(event) => setTextValue(event.target.value)}
      />
      <button type="submit" className="btn btn-success ms-2" onClick={handleSubmit} name='submitButton'>
        Submit Review
      </button >
</form>
  );
}