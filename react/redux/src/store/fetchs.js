export const getFetch = () => {
    return async (dispatch) => {
        try {
            let response = await fetch('http://localhost:5000/films')
            let data = await response.json()
            dispatch({ type: 'GET FILMS', payload: data })
        } catch (err) {
            console.log(err)
        }
    }
}