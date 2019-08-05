import { ADD_MOVIE,DELETE_MOVIE,RATE_MOVIE,SEARCH_MOVIE } from '../const/actiontypes'
import {movlist} from '../const/data'

const initState ={
    movieList : movlist,
    minimumRating:0,
    text:""
}
 const reducer =(state=initState,action) =>{
    
    switch(action.type){
        case SEARCH_MOVIE :
            return {
                ...state,
                text:action.payload
            }
        case RATE_MOVIE :
            return{
                ...state,
                minimumRating:action.payload
            }
        case DELETE_MOVIE :
                return{
                    ...state,
                    movieList:state.movieList.filter(el=>el.id!==action.payload)
                }
        case ADD_MOVIE :
            
                return{
                    ...state,
                    movieList:[...state.movieList,action.payload]
                }
        default:
            return state
    }



}


export  default reducer