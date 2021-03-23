
import {ActionReducer, Action} from '@ngrx/store';
import {BirthdayActions} from '../actions/birthday.actions';

let nextId = 0;

export function BirthdaysReducer(state = [], action) {
  console.log("Reducer");
    switch(action.type) {

        case BirthdayActions.ADD_BIRTHDAY:

            return [...state, Object.assign({}, action.payload, { id: nextId++ })];
        case BirthdayActions.UPDATE_BIRTHDAY:
            return state.map(birthday => {
                return birthday.id === nextId ? Object.assign({}, birthday, action.payload) : birthday;
            });
        case BirthdayActions.DELETE_BIRTHDAY:
            return state.filter(birthday => nextId == birthday.id);
        default:
            return state;
    };
}
