import React, {useEffect, useState} from 'react'
import actions from '../../Actions/action';
import { GlobalContext } from '../../Context/context';
import { fetchMovies } from './Home.service';

const Home = () => {

    const [moviesList, setMoviesList] = useState([]);
    const [inputVal,setInputVal] = useState('');
    const {state,dispatch} = GlobalContext();

    const getMovies = async () =>{
        try {
            const movies = await fetchMovies();
            dispatch({type: actions.ADD_MOVIES, payload: movies })
        } catch (err) {
            console.log( 'Error ---> ', err );
        }
    }

    useEffect(()=>{
        getMovies();
    }, [])

    useEffect(()=>{
        setMoviesList(state.movie)
    }, [state.movie])

    const debounce = (func, delay) => {
        let debounceTimer;
        return function() {
            const context = this
            const args = arguments
            clearTimeout(debounceTimer)
            debounceTimer= setTimeout(() => func.apply(context, args), delay)
        }
    }
    const updateValue = (value)=>{
        setInputVal(value)
        const resp = debounce(function(){
            console.log('okay', inputVal)
        },3000);

       resp()
    }

  return (
    <>
        {
            moviesList.length === 0 ? 
            <div>
                Loading ...
            </div> : 
            <div>
                Enter name : <input value={inputVal} onChange={e=>{
                    updateValue(e.target.value);
                }} type='text' />
                <h3>Movie Detail: </h3>
                <ul>
                    {moviesList.map( (item,index)=>{
                        return <li key={index} >
                                name: {item.Title}
                            </li>
                    })}
                </ul>
            </div>
        }
    </>
  )
}

export default Home