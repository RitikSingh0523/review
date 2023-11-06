import React from 'react';
import { useState } from 'react';
import reviews from './data';
import {FaQuoteRight,FaChevronLeft, FaChevronRight} from 'react-icons/fa'

const App = () => {
  const[index,setIndex]=useState(0);
  const {name,job,image,text}=reviews[index]

  const checkIndex=(newindex)=>{
    if(newindex < 0){
      return reviews.length-1;
    }
    if(newindex >= reviews.length){
      return 0;
    }
    return newindex;
  };

  const nextReview=()=>{
    const newIndex =index+1;
    setIndex(()=>{
      return checkIndex(newIndex);
    })
  }
  
  const prevReview=()=>{
    const newIndex= index-1;
    setIndex(()=>{
      return checkIndex(newIndex)
    })
  };

  const randomIndex=()=>{
    let min=0;
    let max= reviews.length-1;
    console.log(Math.floor(Math.random() * (max - min + 1) ) + min);
    setIndex(Math.floor(Math.random() * (max - min + 1) ) + min);

  }
  
  return (
    <main>
    <div className='mainConatiner'>
      <div className='reviewBox'>
      <div className='img-container'>
        <span className='quotesIcon'><FaQuoteRight/></span>
        <img src={image}></img></div>
        <h2>{name}</h2>
        <p className='job'>{job}</p>
        <p className='reviewText'>{text}</p>
        <div>
          <button className='btn' onClick={prevReview}><FaChevronLeft/></button>
          <button className='btn' onClick={nextReview}><FaChevronRight/></button>
        </div>
        <button className='btn surpriseBtn' onClick={randomIndex}>Surprise Me</button>
      </div>
      
    </div>
    </main>
  );
};

export default App;
