import React from 'react'
import {searchMovie} from '../redux/actions'
import Rating from './Rating'
import {connect} from 'react-redux'
const SearchBar = (props) => {
    return (
        <div className="mx-auto w-100 ">
        <div className=" align-items-center justify-content-center d-flex h-25">
            <input onChange={(e)=>props.searchmov(e.target.value)} type="text" className="form-control m-3 w-50" placeholder="Search..." />
            <button type="submit" className="btn btn-primary h-25">Search</button>
        </div>
        <div>
            <Rating count={props.rate} test={true} />
        </div>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        searchmov: (text)=> dispatch(searchMovie(text))
    }
}
const mapStateToProps=state=>{
    return{
        rate:state.minimumRating
    }
}



export default connect(mapStateToProps,mapDispatchToProps) (SearchBar)
