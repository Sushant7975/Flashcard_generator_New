import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';

const FlashcardDetails = () => {
  const { resId } = useParams();
  const flashcard = useSelector(state => state.flashcards.flashcards.find(flashcard => flashcard.id === resId));

  if (!flashcard) {
    return <div>Flashcard not found</div>;
  }

  console.log("Terms:", flashcard.terms); // Log terms before rendering

  return (
    <div className='w-9/12 m-auto mt-1'>
      <div>
        <div className=''>
          <div className='flex'>
            <Link className='text-3xl  text-red-700' to={"/MyFlashCards"}>&#8592;</Link> 
            <span><h1 className='ml-10 font-bold py-2'>{flashcard.title}</h1></span>
          </div>
          <p className='ml-16 font-medium'>{flashcard.description}</p>
        </div>
        <div>
          <Carousel terms={flashcard.terms} />
        </div>
      </div>
    </div>
  );
}

export default FlashcardDetails;