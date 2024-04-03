import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const termsSlice = createSlice({
    name: "terms",
    initialState: {
        terms: [],
    },
    reducers: {
        addTerm: (state, action) => {
            const { flashcardId, title, definition, term_uploadimage } = action.payload;
            const newTerm = {
                id: nanoid(),
                flashcardId: flashcardId,
                title: title,
                definition: definition,
                term_uploadimage: term_uploadimage
            };
            state.terms.push(newTerm);
            console.log('term state after adding:', state.terms[0]);
        },
        removeTerm: (state, action) => {
            state.terms = state.terms.filter((term) => term.id !== action.payload);
        },
        updateTerm: (state, action) => {
            const { id, title, definition, term_uploadimage } = action.payload;
            const termToUpdate = state.terms.find((term) => term.id === id);
            if (termToUpdate) {
                termToUpdate.title = title;
                termToUpdate.definition = definition;
                termToUpdate.term_uploadimage = term_uploadimage
            }
        },
    },
});

export const { addTerm, removeTerm, updateTerm } = termsSlice.actions;
export default termsSlice.reducer;