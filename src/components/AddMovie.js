import React, { Component } from 'react'
import {addMovie} from '../redux/actions'
import {connect} from 'react-redux'



class AddMovie extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             image:"",
             title:"",
             year:"",
             rating:""
        }
    }
    
    
    render (){
        const newmovie={
            title:this.state.title,
            img:this.state.image,
            year:this.state.year,
            rating:this.state.rating}    
        return (
           <form className="w-25 mx-auto">
            <div class="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input onChange={event => {this.setState({ title: event.target.value })}} type="text" class="form-control"  placeholder="Enter title .."/>    
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Image</label>
                <input onChange={event => {this.setState({ image: event.target.value })}} type="text" class="form-control"  placeholder="Enter image"/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Year</label>
                <input onChange={event => {this.setState({ year: event.target.value })}} type="text" class="form-control"  placeholder="Enter year .."/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Rating</label>
                <input onChange={event => {this.setState({ rating: event.target.value })}} type="number" max='5' class="form-control"  placeholder="Enter rate .."/>
            </div>
            <button onClick={(e)=>{e.preventDefault();this.props.addmovie(newmovie)}} class="btn btn-primary">Add</button>
            </form>    
    )}
}

const mapDispatchToProps=dispatch=>{
      return{
          addmovie:(newmovie)=>dispatch(addMovie(newmovie))
      }
}

export default connect (null,mapDispatchToProps) (AddMovie)
