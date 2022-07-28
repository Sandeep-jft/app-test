import actions from '../Actions/action';

const initial_state = {
    movie:[]
};


const movieReducer = ( state = initial_state, action ) => {
    switch( action.type ) {
        case actions.ADD_MOVIES: {
            const movies = {
                movie: action.payload
            };
            return movies;
        }

        default:
            return state;
    }
}

export {movieReducer, initial_state};