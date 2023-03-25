import React from 'react'
import {useState} from 'react';
import './Movie';


export default function MovieList() {
    const [allReviews,setAllReviews]=useState([],'');
    const [allMovies, setAllMovies] = useState([
        {
          id: 1,
          img: 'https://media.comicbook.com/2017/10/iron-man-movie-poster-marvel-cinematic-universe-1038878.jpg',
          title: 'Iron Man',
          year: 2008,
          info: 'A billionaire genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism.',
        
        },
  
        {
          id: 2,
          img: 'https://flxt.tmsimg.com/assets/p176337_p_v8_am.jpg',
          title: 'The Incredible Hulk',
          year: 2008,
          info: 'Scientist Bruce Banner (Edward Norton) desperately seeks a cure for the gamma radiation that contaminated his cells and turned him into The Hulk. Banner soon comes face-to-face with a new threat: a supremely powerful enemy known as The Abomination (Tim Roth).',
         
        },
        {
            id: 3,
            img: 'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_FMjpg_UX1000_.jpg',
            title: 'Captain Marvel',
            year: 2019,
            info: 'Carol Danvers becomes one of the universe most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.',
          
        },
        {
            id: 4,
            img: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg',
            title: 'Spider-Man: No Way Home',
            year: 2021,
            info: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
           
        },
        {
            id: 5,
            img: 'https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_FMjpg_UX1000_.jpg',
            title: 'Ant-Man',
            year: 2015,
            info:'Armed with the astonishing ability to shrink in scale but increase in strength, con-man Scott Lang must embrace his inner-hero and help his mentor, Dr. Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.',
           
        },
        {
          id: 6,
          img: 'https://www.google.com/search?rlz=1C1CHBF_enUS1035US1035&q=captain+america&tbm=isch&sa=X&ved=2ahUKEwja_cnnm_P9AhWPIEQIHYQ2CugQ0pQJegQIChAB&biw=767&bih=868&dpr=1#imgrc=8c5EurtgkridrM',  
          title: 'Captain America',
          year: 2011,
          info: 'Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a warmonger and a terrorist organization.',
        
        },
        {
          id: 7,
          img: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81kMZHH175L._AC_UF894,1000_QL80_.jpg',
          title: 'Black Widow',
          year: 2021,
          info: 'Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.',
        
        },
        {
          id: 8,
          img: 'https://musicart.xboxlive.com/7/7fbd4c00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
          title: 'Thor',
          year: 2011,
          info:'The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.',
        
        },
        {
            id: 9,
            img:'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
            title:'The Avengers',
            year: 2012,
            info:"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        
        },
        {
            id: 10,
            img: 'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg',
            title:'Black Panther',
            year: 2018,
            info: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past."}])
      
  return (
   
     allMovies.map((allMovies, index =>{
         <div key={allMovies.index}>
         {allMovies.img}
         {allMovies.title}
         {allMovies.year}
         {allMovies.info}
        </div>
     }))   
    )}





