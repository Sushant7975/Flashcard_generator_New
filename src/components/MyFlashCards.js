import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch hook
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { removeFlashcard } from '../store/flashcardSlice';

const MyFlashCards = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch(); // Get dispatch function using useDispatch hook
  const flashcards = useSelector(state => state.flashcards.flashcards);

  // const handleViewClick = (flashcardId) => {
  //   navigate(`/flashcard/${flashcardId}`);
  // };

  const handleDeleteClick = (flashcardId) => {
    // Dispatch the removeFlashcard action with the flashcardId
    dispatch(removeFlashcard(flashcardId));
  };

  return (
    <div>
   
      <div className=' flex w-9/12 m-auto flex-wrap justify-center mt-4 bg-sky-100'>

      {flashcards.length === 0 && (
    <div className='bg-red-600'>
      <Link className='bg-red-500 text-white font-semibold py-1 px-2 rounded-lg' to={"/"}>Create</Link>
    </div>
  )}



        {flashcards.map(flashcard => (
          <div className=' my-5 mx-2' key={flashcard.id}>
            {console.log(flashcard)}

            <div className='border-2 w-64 h-60 text-center bg-red-100 '>
              <div className='flex  justify-around my-4 '>
                <h2 className='text-xl font-bold text-zinc-600'>{flashcard.title}</h2>
             
                  <img src={ flashcard.uploadImage } alt="" />
            
                  {   /* Add a button to delete the flashcard */}
                <button className='bg-black text-white  p-1 rounded-lg' onClick={() => handleDeleteClick(flashcard.id)}>Delete</button>
              </div>


            <p className='text-lg text-emerald-900 font-bold'>{flashcard.description}</p>
            <p className='text-md text-gray-900 font-medium my-5'>{flashcard.termsLength} Cards</p>


                <div className='mb-5'>
                 {/* Use Link component for navigation */}
                    <Link className='bg-red-500 text-white font-semibold py-1 px-2 rounded-lg ' to={`/FlashcardDetails/${flashcard.id}`}>View</Link>
                 </div>
            </div>

        
          </div>

        ))}
        
      </div>
    </div>
  );
}

export default MyFlashCards;