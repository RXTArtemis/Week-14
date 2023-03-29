import React from 'react';
import './MovieList.js';
import ReviewForm from './ReviewForm.js';
import StarRating from './Stars.js';
import Review from './Review.js';



export default function Movie(props){
    console.log("movieprops", props);
    const singleMovie=[{
        id:"",
        img:"",
        title:"",
        year:"",
        info:"",
    }]     
    
   
    return (
        <div className="card"  id="card-container" key= {singleMovie.id}>
                <div className="card-body">
                    <div className='card-row'>
                        <div className='column'>
                    <img className="movie-image" src = {props.movie.img}/> 
                     <h3 className="card-title">     
                     Title: {props.movie.title}</h3>
                            <h5>Year: {props.movie.year}</h5>
                            <h5>Info: {props.movie.info}</h5>
                            {<StarRating />}
                            {<Review />}
                            </div>
                        </div>
                 </div>
        </div>
    )
}