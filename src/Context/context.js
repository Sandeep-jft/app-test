import React, {createContext, useContext} from 'react';
import PropTypes from 'prop-types';
import { useReducer } from 'react';
import { initial_state, movieReducer } from '../Reducer/reducer';

const AppContext = createContext();

const AppProvider = ({ children })=>{
    const [state, dispatch ] = useReducer(movieReducer, initial_state);
   return( <AppContext.Provider value={{state,dispatch}} >
        {children}
    </AppContext.Provider>
   )
}

const GlobalContext = () =>{
    const data = useContext(AppContext);
    return data;
}

export { AppProvider, AppContext, GlobalContext };

AppProvider.propTypes = {
    children: PropTypes.node.isRequired
}