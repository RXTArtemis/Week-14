import React from 'react';
// import { useState } from 'react';
// import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import StarRating from './Stars';
import ReviewForm from './ReviewForm';

// export default function review(){
//     const [reviews, setReviews] = useState('');
//     const onChange = (e)=>{
//         setReviews(e.target.value);
//     }
//     const onSubmit = (e)=>{
//         console.log('Review Submitted');
//     }
//     return(
//         <div className='container'>
//             <ReviewForm />
//         </div>
//     )
// }

export default function reviewDisplay(props){
  


       return(
            <div key={props.review}>
                          <h5>Reviews:{props.review}</h5>
                          {/* < ReviewForm /> */}
                          <ReviewList/>
                 </div>
                //  {/* <br></br>
                // <div className='card' id='mini-box'>
                //     <h5>Previous Reviews:</h5>
                //     {props.savedReview.savedRating}
                //     {props.savedReview.postedReview}
                // </div> */}
         );
     }