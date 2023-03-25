import React from 'react';
import {FaStar} from 'react-icons/fa';
import { useState } from 'react';

const StarRating = ()=>{
    const[rating, setRating] = useState(null);
    return (
        <div >
            {[...Array(5)].map((star, index)=>{
               const ratingValue = index + 1;
              
                return (
                    <label key={index}>
                    <input type='radio' name='rating' value={ratingValue} onClick={()=> setRating(ratingValue)}></input>
                    <FaStar className='star' color={ratingValue<= rating ? "#ffc107":"#e4e5e9"} size='25px'/>
                    </label>
                )
              
            })}
        </div>
    )
}

export default StarRating;

//fix unique key ero