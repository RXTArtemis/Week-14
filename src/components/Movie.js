import React from 'react';
import './MovieList';
import { useState } from 'react';


export default function Movie(){
    const movie=[{
        id:"i + 1",
        img:"",
        title:"",
        year:"",
        info:"",
    }]        
    return (
        <div className="card"  key= {movie.id}>
                    <div className="card-body">
                     {movie.image}
                     <h3 className="card-title">     
                     Title:{movie.title}</h3>
                            <h5>Year:{movie.year}</h5>
                            <h5>Info:{movie.info}</h5>
                    </div>
        </div>
    )
}