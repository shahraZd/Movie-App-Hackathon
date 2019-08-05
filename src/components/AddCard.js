import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
class AddCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "", year: null, image: "", rate: 1

        }
    }
    onchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Route>
                <div>
                    <ul class="list-group">
                        <li class="list-group-item"><input placeholder="title.." type="text" name="title" onChange={(e) => this.onchange(e)} /></li>
                        <li class="list-group-item"><input placeholder="year.." type="text" name="year" onChange={(e) => this.onchange(e)} /></li>
                        <li class="list-group-item"> <input placeholder="image.." type="text" name="image" onChange={(e) => this.onchange(e)} /></li>
                        <li class="list-group-item"><input placeholder="rating.." type="number" min="1" max="5" name="rate" onChange={(e) => this.onchange(e)} /></li>
                    </ul>
                    <button onClick={() => { this.props.onAddMovie(this.state); console.log(this.state) }}><Link to='/return'>Add movie</Link></button>
                </div>
            </Route>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddMovie: (movie) => {
            dispatch({
                type: 'ADD_MOVIE',
                movie: {
                    id: Math.random(),
                    title: movie.title,
                    rating: movie.rate,
                    year: movie.year
                }
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(AddCard)
