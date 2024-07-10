let initialState = {
    films: []
}


const reducer = (state = initialState, action) => {
    if(action.type === 'ADD MOVIE TO LIST'){
        console.log(action.payload)
        let newArr = [...state.films, action.payload]
        return {...state, films:[...newArr]}
    }else if(action.type === 'GET FILMS'){
        return {...state, films:[...action.payload]}
    }

    return state
}

export default reducer