import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex]= useState(0);
  const{name, job, image, text}=people[index];

  const nextPerson = () => {
    setIndex((index)=>{
      let newIndex =index===(people.length -1)? index: index + 1;
      return newIndex;
    })
  }
  const prevPerson = () => {
    setIndex((index)=>{
      let newIndex = index !==0? index - 1:index;
      return newIndex;
    })
  }
  const randomPerson = () => {
    setIndex((index) => {
      //.random will give us a random number between 0 and people.length
      let randomNumber = Math.floor(Math.random() * people.length);
        while (randomNumber === index) {
        if (randomNumber === people.length - 1) {
          randomNumber = 0;
        } else if (randomNumber === 0) {
          randomNumber = people.length - 1;
        } else {
          randomNumber += 1;
        }
      }
      return randomNumber;
    });
  };
  



  return <article className='review'>
    <div className="img-container">
      <img src={image} alt={name} className='person-img'/>
      <span className="quote-icon"><FaQuoteRight /></span>
    </div>
    <h4 className="author">{name}</h4>
    <p className='job'>{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft/>
      </button>
      <button className='next-btn' onClick={nextPerson}>
        <FaChevronRight/>
      </button>
    </div>
      <button className='random-btn' onClick={randomPerson}>
        Get random quote !
      </button>
  </article>

};
export default Review;
