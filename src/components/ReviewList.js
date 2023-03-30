import React from 'react';
import './Review.js';
import { useState } from 'react';
import ReviewForm from './ReviewForm.js';

 
    

    function postReview(){
    
        if(ReviewList.length === 0){
            return <p className='text-muted' key={ReviewList.id}>No Reviews Yet</p>
        }else{
            return(
                <>
                {ReviewList.map((review)=>(
                    <div
                    key={review.id}
                    className="bg-white border rounded shadow p-2 my-2 w-50"
                    >
                        {review.text}
                    </div>
                ))}
                </>
            );
     }
    }
   



 export default function ReviewList(){
   
    const [allReviews,setAllReviews]=useState([{
        id:0,
        review:"Really good movie.",
        rating:"",
    },
    { 
      id:1,
      review:"Movie needed more development. Felt like it was missing something..",
      rating:"",
    },
    {
      id:2,
      review: "One of my new favorite movies!",
      rating:"",
    },
    {
      id:3,
      review: "Want to watch it again!",
      rating: "",
    },
    {
        id:4,
        review: "Awesome special effects!",
        rating:"",
    },
    {
        id:5,
        review: "Would rewatch again!",
        rating: "",
    },
    {
        id:6,
        review: "Didn't dislike the movie, but didn't like it either..",
        rating: "",
    },
    {
        id:7,
        review: "Marvel knocked it out of the park with this one.",
        rating: "",
    },
    {
         id:8,
        review: " Can't wait for the sequel.",
        rating: "",
    },
    {
        id:9,
        review: "Loved the storytelling and plot!",
        rating: "",
    },
    {
        id:10,
        review: "Great movie for any science and comic fan",
        rating: "",
    }],'');
    return (
        <div>
             <div key={allReviews.id}>
                {allReviews.map((review)=>{
                    return ( 
                        <ReviewForm key={review.id} addReview={postReview}/>
                       )
                })}
            </div> 
            
    </div>
    );
 }


