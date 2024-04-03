// // Assuming selectedFlashcardId contains the ID of the selected flashcard
// const selectedFlashcard = flashcards.find(flashcard => flashcard.id === selectedFlashcardId);

// if (selectedFlashcard) {
//     // Get all terms associated with the selected flashcard
//     const termsToShow = terms.filter(term => term.flashcardId === selectedFlashcardId);

//     // Display terms in your UI
//     return (
//         <div>
//             <h2>{selectedFlashcard.title}</h2>
//             <p>{selectedFlashcard.description}</p>
//             <h3>Terms:</h3>
//             <ul>
//                 {termsToShow.map(term => (
//                     <li key={term.id}>
//                         <strong>{term.title}:</strong> {term.definition}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// } else {
//     return <div>No flashcard selected</div>;
// }
