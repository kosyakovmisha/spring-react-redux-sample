import {ADD_FILM, REMOVE_FILM, EDIT_FILM, GET_FILMs} from '../actions/films';
const filmsReducerDefaultState = [];

export default (state = filmsReducerDefaultState, action) => {
    switch (action.type) {
        case ADD_FILM:
            return [...state, action.film];
        case REMOVE_FILM:
            return state.filter(({ id }) => id !== action.id);
        case EDIT_FILM:
            return state.map((film) => {
                if (film.id === action.id) {
                    return {
                        ...film, 
                        ...action.updates
                    };
                } else {
                    return film;
                }
            });
        case GET_FILMs:
            return action.films;
        default: 
            return state;
    }
};