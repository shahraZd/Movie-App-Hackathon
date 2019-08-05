import React from 'react'
import {deleteMovie} from '../redux/actions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Rating from './Rating'
const MovieList = (props) => {
    console.log(props)
    return (
        <div className="mt-4 mx-auto d-flex flex-column w-75 h-100 ">
        <div className="mt-4 mx-auto d-flex flex-wrap justify-content-around w-100">
        {props.movList.filter(el=>el.title.toLowerCase().includes(props.searching.toLowerCase())&& (el.rating>=props.rate)).map((el,i) =>
      
       <div key={i} className="card h-50 w-40 m-3" >
        <img src={el.img}  className="card-img-top img" alt="..."/>
        <div className="card-body ">
        <div className="d-flex justify-content-between">
          <h6 className="card-title">{el.title.toUpperCase()}</h6>
          <p className="card-text">{el.year}</p>
        </div>
        <div className="d-flex justify-content-between">
          <Rating count={el.rating} />
          <button onClick={()=>props.deletemov(el.id)} type="submit" className="btn btn-primary ">X</button>
        </div>
        </div>
        </div>)}
        </div>
        <Link to="/addmovie">
            <button type="submit" className="btn btn-primary h-25">Add Movie</button>
        </Link>
        </div>
        
    )
}

const mapStateToProps = state=>{
    return{
        movList:state.movieList,
        searching:state.text,
        rate:state.minimumRating
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        deletemov: (id)=>dispatch(deleteMovie(id))
    }
}



export default connect (mapStateToProps,mapDispatchToProps) (MovieList)
