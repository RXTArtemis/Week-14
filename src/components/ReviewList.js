import React from 'react';
import './Review';
import { useState } from 'react';
import Review from './Review.js';

export default function ReviewList(){
    const [allReviews,setAllReviews]=useState([],'');
    let previousReviews=[{
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
    },


    {

    }];

    const onChange = (e)=>{
        setAllReviews(e.target.value);
    }
    const onSubmit =(e)=>{
        console.log("Form Submitted");
    }
    return(
        <div className='form-container'>
            <form onSubmit={onSubmit}>
                <input className="reviews-form" type='text' 
                placeholder='Leave your thoughts!' value={allReviews}
                onChange={onChange}></input> 
                <button type="submit" style={{background:"Gold"}}>
                    Submit Review
                </button>
            </form>
             {/* <div>
                {previousReviews.map((previousReviews)=>{
                    return ( 
                        <Review key={previousReviews.id} previousReviews={previousReviews}/>
                       )
                })}
            </div>  */}
    </div>
    );
}


