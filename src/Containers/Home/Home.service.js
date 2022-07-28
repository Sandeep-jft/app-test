
export const fetchMovies = async () =>{
        try{
            // eslint-disable-next-line no-undef
            const data = await fetch( process.env.REACT_APP_BASE_URL);
            const newData = await data.json();
            return newData.Search;
        }
        catch (err) {
            return err;
        }

}