import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const flashcardsSlice = createSlice({
    name: "flashcards",
    initialState: {
        flashcards: [],
    },
    reducers: {
        addFlashcard: (state, action) => {
            const { title, description, uploadImage, terms, termsLength} = action.payload;
            const newFlashcard = {
                id: nanoid(), // Generate unique ID
                title: title,
                uploadImage: uploadImage,
                description: description,
                terms:terms, // Initialize terms array
                termsLength: termsLength,
            };
            state.flashcards.push(newFlashcard);
            console.log('Flashcards state after adding:', state.flashcards);
        },
        removeFlashcard: (state, action) => {
            state.flashcards = state.flashcards.filter((flashcard) => flashcard.id !== action.payload);
        },
        // Other reducers for updating flashcards
    },
});

export const { addFlashcard, removeFlashcard } = flashcardsSlice.actions;
export default flashcardsSlice.reducer;