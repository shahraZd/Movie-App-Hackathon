import { createStore, combineReducers } from 'redux'

const ratingFilterReducer = (state = 0, action) => {
    if (action.type === 'SET_RATING_FILTER') {
        return action.rating
    }
    return state
}

const titleFilterReducer = (state = '', action) => {
    if (action.type === 'SET_TITLE_FILTER') {
        return action.title
    }
    return state
}

const moviesReducer = (state = [], action) => {
    if (action.type === 'ADD_MOVIE') {
        return state.concat(action.movie)
    }
    if (action.type === 'EDIT_MOVIE') {
        return state.map(m => {
            if (m.id === action.id) {
                return action.movie
            }
            return m
        })
    }
    if (action.type === 'DELETE_MOVIE') {
        return state.filter(m => {
            if (m.id === action.id) {
                return false
            }
            return true
        })
    }
    return state
}

const store = createStore(combineReducers({
    movies: moviesReducer,
    minRatingFilter: ratingFilterReducer,
    titleFilter: titleFilterReducer
}))

const inception = {
    id: 'inception',
    title: 'Inception',
    rating: 5,
    image: 'https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg',
    year: 2010
}

const shawshank = {
    id: 'shawshank',
    title: 'Shawshank Redeption',
    year: 1994,
    rating: 5,
    image: 'https://images-na.ssl-images-amazon.com/images/I/519NBNHX5BL._SY445_.jpg'
}

const whatever = { id: 'whatever', title: 'Whatever', rating: 2, year: 1900 }

const Toy_Story_4 =
{
    id: 'Toy_Story_4',
    title: 'Toy_Story_4',
    rating: 4,
    year: 2019,
    image: 'http://fr.web.img4.acsta.net/c_215_290/pictures/19/06/12/17/42/4485647.jpg'
}
const Leroilion = {
    id: 'Le roi Lion',
    title: 'Le roi Lion',
    year: 2019,
    rating: 3,
    image: 'http://fr.web.img4.acsta.net/c_215_290/pictures/19/02/25/12/06/2908996.jpg'
}
store.dispatch({
    type: 'ADD_MOVIE',
    movie: inception
})
store.dispatch({
    type: 'ADD_MOVIE',
    movie: Leroilion
})
store.dispatch({
    type: 'ADD_MOVIE',
    movie: Toy_Story_4
})

store.dispatch({
    type: 'ADD_MOVIE',
    movie: shawshank
})

store.dispatch({
    type: 'ADD_MOVIE',
    movie: whatever
})

export default store