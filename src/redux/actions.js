import {ADD_MOVIE,DELETE_MOVIE,RATE_MOVIE,SEARCH_MOVIE} from '../const/actiontypes'

export const addMovie= (payload)=>{
    return{
        type:ADD_MOVIE,
        payload
    }
}
export const deleteMovie= (payload)=>{
    return{
        type:DELETE_MOVIE,
        payload
    }
}
export  const rateMovie= (payload)=>{
    return{
        type:RATE_MOVIE,
        payload
    }
}
export  const searchMovie= (payload)=>{
    return{
        type:SEARCH_MOVIE,
        payload
    }
}