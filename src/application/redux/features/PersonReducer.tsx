import { PeopleData } from '../../exampleData/exampleData';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PersonData } from '../../interfaces/PersonDataInterface';

export interface PersonState {
    loading: boolean;
    people: PersonData[];
}

const initialState: PersonState = {
    loading: false,
    people: PeopleData
};

const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        addPerson(state, action: PayloadAction<PersonData>) {
            state.people = [action.payload, ...state.people];
        },
        updatePerson(state, action: PayloadAction<PersonData>) {
            const personIndex = state.people.findIndex((person) => person.id === action.payload.id);

            if (state.people[personIndex]) {
                state.people[personIndex] = { ...state.people[personIndex], ...action.payload };
            }
        },
        deletePerson(state, action: PayloadAction<string>) {
            state.people = state.people.filter((person) => person.id !== action.payload);
        }
    }
});

export const { addPerson, updatePerson, deletePerson } = personSlice.actions;

export default personSlice.reducer;
