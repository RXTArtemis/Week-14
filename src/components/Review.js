import React from 'react';
// import { useState } from 'react';
// import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import StarRating from './Stars';

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
    const reviewData = [{
        id:0,
        review:"",
        rating: 0,
    }];

    const savedReview = [{
        id:0,
        savedRating:"",
        postedReview:[],
    }];


       return(
            <div key={reviewData.id}>
               <div>
                     <div>
                          <h5>Reviews:{reviewData.review}</h5>
                          {/* < ReviewForm /> */}
                          <ReviewList/>
                 </div>
                 {/* <br></br>
                <div className='card' id='mini-box'>
                    <h5>Previous Reviews:</h5>
                    {props.savedReview.savedRating}
                    {props.savedReview.postedReview}
                </div> */}
            </div>    
        </div>
         )
     }